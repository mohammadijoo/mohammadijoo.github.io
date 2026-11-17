"""Browser regression tests for the portfolio's mirrored Persian page."""
import functools
import http.server
import re
import threading
import unittest
from pathlib import Path
from urllib.parse import urlsplit
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

    def open_persian(self, status="ready"):
        self.page.goto(self.origin + "/index-fa.html", wait_until="domcontentloaded")
        expect(self.page.locator("html")).to_have_attribute(
            "data-fa-status", status, timeout=20000
        )

    def assert_persian_content(self):
        expect(self.page.locator("html")).to_have_attribute("lang", "fa")
        expect(self.page.locator("html")).to_have_attribute("dir", "rtl")
        expect(self.page.locator('a.nav-link[href="#home"]')).to_have_text("خانه")
        expect(self.page.locator('a.nav-link[href="#projects"]')).to_have_text("پروژه‌ها")
        expect(self.page.locator("#home .hero-content h2")).to_contain_text("ابوالفضل محمدی‌جو")
        expect(self.page.locator("a.resume-link")).to_have_attribute(
            "href", "files/CV_Abolfazl_Mohammadijoo_FA.pdf"
        )

    def test_persian_translates_static_and_dynamic_content(self):
        self.open_persian()
        self.assert_persian_content()
        expect(self.page.locator("[data-academy-project]")).to_have_count(3)
        expect(self.page.locator("[data-academy-project]").first.locator("p")).to_contain_text(
            re.compile(r"[\u0600-\u06ff]")
        )
        expect(self.page.locator('.language-flag.active')).to_have_text("FA")
        expect(self.page.locator("#faLocalizationNotice")).to_have_count(0)
        for path in ("main.js", "fa-localize.js"):
            expect(self.page.locator(f'script[src*="{path}?v="]')).to_have_count(1)
        self.page.evaluate("window.initializePortfolio(); window.localizePortfolioToPersian(document.body)")
        expect(self.page.locator("[data-academy-project]")).to_have_count(3)

    def test_main_script_network_failure_does_not_block_translation(self):
        self.page.route("**/js/main.js?*", lambda route: route.abort())
        self.open_persian("degraded")
        self.assert_persian_content()
        expect(self.page.locator("#faLocalizationNotice")).to_be_visible()

    def test_main_initializer_exception_does_not_block_translation(self):
        self.page.route("**/js/main.js?*", lambda route: route.fulfill(
            content_type="application/javascript",
            body='window.initializePortfolio = () => { throw new Error("test failure"); };'
        ))
        self.open_persian("degraded")
        self.assert_persian_content()
        expect(self.page.locator("#faLocalizationNotice")).to_be_visible()

    def test_localizer_network_failure_is_visible(self):
        self.page.route("**/js/fa-localize.js?*", lambda route: route.abort())
        self.open_persian("error")
        expect(self.page.locator("#faLocalizationNotice")).to_be_visible()
        expect(self.page.locator("#faLocalizationNotice")).to_have_attribute("role", "alert")

    def test_localizer_runtime_exception_is_visible(self):
        self.page.route("**/js/fa-localize.js?*", lambda route: route.fulfill(
            content_type="application/javascript",
            body='window.localizePortfolioToPersian = () => { throw new Error("test failure"); };'
        ))
        self.open_persian("error")
        expect(self.page.locator("#faLocalizationNotice")).to_be_visible()

    def test_mirror_fetch_failure_is_visible(self):
        self.page.route("**/index.html", lambda route: route.fulfill(status=503, body="unavailable"))
        self.open_persian("error")
        expect(self.page.locator("#faLocalizationNotice")).to_be_visible()

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
        expect(self.page.locator('a.nav-link[href="#home"]')).to_have_text("خانه")
        self.page.locator('a.nav-link[href="#home"]').click()
        expect(self.page.locator("#menuToggle")).to_have_attribute("aria-expanded", "false")


if __name__ == "__main__":
    unittest.main(verbosity=2)
