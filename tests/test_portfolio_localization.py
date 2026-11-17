"""Browser regression tests for the independent static Persian portfolio."""
import functools
import http.server
import re
import threading
import unittest
from pathlib import Path
from playwright.sync_api import expect, sync_playwright

ROOT = Path(__file__).resolve().parents[1]


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *_args):
        pass


class PortfolioLocalizationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = http.server.ThreadingHTTPServer(
            ("127.0.0.1", 0), functools.partial(QuietHandler, directory=str(ROOT))
        )
        cls.addClassCleanup(cls.server.server_close)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.addClassCleanup(cls.server.shutdown)
        cls.origin = f"http://127.0.0.1:{cls.server.server_port}"
        cls.playwright = sync_playwright().start()
        cls.addClassCleanup(cls.playwright.stop)
        cls.browser = cls.playwright.chromium.launch()
        cls.addClassCleanup(cls.browser.close)

    def setUp(self):
        self.context = self.browser.new_context()
        self.addCleanup(self.context.close)
        self.page = self.context.new_page()
        self.page.set_default_timeout(20000)
        # Tests are hermetic; external fonts and services are unnecessary.
        self.page.route("**/*", lambda route: (
            route.continue_() if route.request.url.startswith(self.origin + "/")
            else route.abort()
        ))

    def open_persian(self, page=None):
        page = page or self.page
        page.goto(self.origin + "/index-fa.html", wait_until="domcontentloaded")
        return page

    def assert_persian_content(self, page):
        expect(page.locator("html")).to_have_attribute("lang", "fa")
        expect(page.locator("html")).to_have_attribute("dir", "rtl")
        expect(page.locator('a.nav-link[href="#home"]')).to_have_text("خانه")
        expect(page.locator('a.nav-link[href="#projects"]')).to_have_text("پروژه‌ها")
        expect(page.locator("#home .hero-content h2")).to_contain_text("ابوالفضل محمدی‌جو")
        expect(page.locator("a.resume-link")).to_have_attribute(
            "href", "files/CV_Abolfazl_Mohammadijoo_FA.pdf"
        )
        expect(page.locator("[data-academy-project]")).to_have_count(3)
        expect(page.locator("[data-academy-project]").first.locator("p")).to_contain_text(
            re.compile(r"[\u0600-\u06ff]")
        )
        expect(page.locator(".language-flag.active")).to_have_text("FA")
        expect(page.locator('script[src*="fa-localize.js"]')).to_have_count(0)
        expect(page.locator("#faLocalizationNotice, #faLoader")).to_have_count(0)
        for section in ("home", "about", "experience", "projects", "skills",
                        "education", "publication", "lifestyle", "courses", "contact", "donations"):
            expect(page.locator("#" + section)).to_have_count(1)

    def test_persian_html_with_javascript_disabled(self):
        context = self.browser.new_context(java_script_enabled=False)
        self.addCleanup(context.close)
        page = context.new_page()
        page.route("**/*", lambda route: (
            route.continue_() if route.request.url.startswith(self.origin + "/")
            else route.abort()
        ))
        self.assert_persian_content(self.open_persian(page))

    def test_persian_does_not_fetch_english_or_localizer(self):
        forbidden = []
        def reject(route):
            forbidden.append(route.request.url)
            route.abort()
        self.page.route("**/index.html", reject)
        self.page.route("**/js/fa-localize.js*", reject)
        self.open_persian()
        self.assert_persian_content(self.page)
        self.assertEqual(forbidden, [])

    def test_main_network_failure_leaves_static_persian(self):
        self.page.route("**/js/main.js?*", lambda route: route.abort())
        self.open_persian()
        self.assert_persian_content(self.page)

    def test_main_runtime_failure_leaves_static_persian(self):
        self.page.route("**/js/main.js?*", lambda route: route.fulfill(
            content_type="application/javascript",
            body='throw new Error("test failure");'
        ))
        self.open_persian()
        self.assert_persian_content(self.page)

    def test_persian_project_cards_not_duplicated(self):
        self.open_persian()
        expect(self.page.locator("html")).to_have_class(re.compile("portfolio-interactive"))
        self.assert_persian_content(self.page)
        self.page.evaluate("window.initializePortfolio()")
        expect(self.page.locator("[data-academy-project]")).to_have_count(3)

    def test_english_page_is_unchanged(self):
        self.page.goto(self.origin + "/index.html", wait_until="domcontentloaded")
        expect(self.page.locator('a.nav-link[href="#home"]')).to_have_text("Home")
        expect(self.page.locator("[data-academy-project]")).to_have_count(3)
        expect(self.page.locator('.language-flag.active')).to_have_text("EN")
        expect(self.page.locator("a.resume-link")).to_have_attribute(
            "href", "files/CV_Abolfazl_Mohammadijoo.pdf"
        )

    def test_persian_mobile_navigation(self):
        self.page.set_viewport_size({"width": 390, "height": 844})
        self.open_persian()
        self.page.locator("#menuToggle").click()
        expect(self.page.locator("#menuToggle")).to_have_attribute("aria-expanded", "true")
        self.page.locator('a.nav-link[href="#home"]').click()
        expect(self.page.locator("#menuToggle")).to_have_attribute("aria-expanded", "false")

    def test_mobile_navigation_when_main_unavailable(self):
        self.page.set_viewport_size({"width": 390, "height": 844})
        self.page.route("**/js/main.js?*", lambda route: route.abort())
        self.open_persian()
        expect(self.page.locator(".language-flag.active")).to_be_visible()
        expect(self.page.locator('a.nav-link[href="#home"]')).to_be_visible()
        self.page.locator('a.nav-link[href="#home"]').click()
        expect(self.page).to_have_url(re.compile(r"#home$"))


if __name__ == "__main__":
    unittest.main(verbosity=2)
