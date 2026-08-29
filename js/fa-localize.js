/* Persian localization for index-fa.html.
   It translates the DOM copied from the canonical English index.html while
   preserving URLs, IDs, classes, data attributes, percentages and code. */
(() => {
  "use strict";

  const T = new Map(Object.entries({
    "Abolfazl Mohammadijoo": "ابوالفضل محمدی‌جو",
    "Robotics • Control • AI • Full-Stack": "رباتیک • کنترل • هوش مصنوعی • فول‌استک",
    "Home": "خانه",
    "About": "درباره من",
    "Experience": "تجربه کاری",
    "Projects": "پروژه‌ها",
    "Skills": "مهارت‌ها",
    "Education": "تحصیلات",
    "Publication": "مقاله",
    "Life Style": "سبک زندگی",
    "Courses": "دوره‌ها",
    "Contact": "تماس",
    "Donations": "حمایت مالی",
    "Download Resume": "دانلود رزومه",
    "English version": "نسخه انگلیسی",
    "English": "انگلیسی",
    "Google Scholar": "گوگل اسکالر",
    "Research Gate": "ریسرچ‌گیت",
    "Academia": "آکادمیا",
    "GitHub": "گیت‌هاب",
    "YouTube": "یوتیوب",
    "Telegram": "تلگرام",
    "Whatsapp": "واتساپ",
    "WhatsApp": "واتساپ",
    "Welcome to my portfolio": "به پورتفولیوی من خوش آمدید",
    "Hi, I am": "سلام، من",
    "Hi, I am Abolfazl Mohammadijoo.": "سلام، من ابوالفضل محمدی‌جو هستم.",
    "Robotics, Control Engineering, AI, and Full-Stack Developer": "مهندس رباتیک و کنترل، متخصص هوش مصنوعی و توسعه‌دهنده فول‌استک",
    "I build engineering-focused software systems, intelligent applications, robotics simulations, control algorithms, and educational technical content.": "من سامانه‌های نرم‌افزاری مهندسی، کاربردهای هوشمند، شبیه‌سازی‌های رباتیک، الگوریتم‌های کنترلی و محتوای آموزشی فنی طراحی و توسعه می‌دهم.",
    "View Projects": "مشاهده پروژه‌ها",
    "Contact Me": "تماس با من",
    "Who I am": "من کیستم",
    "I am a developer and researcher interested in robotics, control systems, machine learning, artificial intelligence, data science, and full-stack software/web development. My work combines engineering mathematics, software architecture, simulation, and practical implementation.": "من توسعه‌دهنده و پژوهشگری علاقه‌مند به رباتیک، سیستم‌های کنترل، یادگیری ماشین، هوش مصنوعی، علم داده و توسعه فول‌استک نرم‌افزار و وب هستم. فعالیت من ترکیبی از ریاضیات مهندسی، معماری نرم‌افزار، شبیه‌سازی و پیاده‌سازی عملی است.",
    "Focus Areas": "حوزه‌های تمرکز",
    "Robotics and control systems": "رباتیک و سیستم‌های کنترل",
    "Machine learning and AI applications": "یادگیری ماشین و کاربردهای هوش مصنوعی",
    "Scientific computing and simulation": "محاسبات علمی و شبیه‌سازی",
    "Full-stack software/web development": "توسعه فول‌استک نرم‌افزار و وب",
    "Technical Direction": "مسیر فنی",
    "Django, APIs, databases, dashboards": "Django، APIها، پایگاه‌های داده و داشبوردها",
    "Control, dynamics, optimization, data-driven systems": "کنترل، دینامیک، بهینه‌سازی و سیستم‌های داده‌محور",
    "Educational course and research content": "محتوای آموزشی و پژوهشی",
    "Professional background": "سوابق حرفه‌ای",
    "Professional Experience": "تجربه حرفه‌ای",
    "Programmer, Data Scientist, Machine Learning Expert": "برنامه‌نویس، دانشمند داده و متخصص یادگیری ماشین",
    "Self-Employed • Tehran, Iran • July 2013 – Present": "خوداشتغال • تهران، ایران • ژوئیه 2013 – تاکنون",
    "Delivered 100+ projects for companies and individuals in Data Science, Machine Learning, DevOps, Software Development, and Web Development. Also taught technical lectures and developed online educational products and earned nine FESTO industrial automation certifications in 2016.": "بیش از 100 پروژه برای شرکت‌ها و افراد در زمینه‌های علم داده، یادگیری ماشین، DevOps، توسعه نرم‌افزار و توسعه وب انجام داده‌ام. همچنین دوره‌ها و سخنرانی‌های فنی ارائه کرده، محصولات آموزشی آنلاین توسعه داده‌ام و در سال 2016 نه گواهینامه اتوماسیون صنعتی FESTO دریافت کرده‌ام.",
    "Data Science • Machine Learning • DevOps • Software Development • Web Development": "علم داده • یادگیری ماشین • DevOps • توسعه نرم‌افزار • توسعه وب",
    "Research Assistant": "دستیار پژوهشی",
    "Worcester Polytechnic Institute • Worcester, MA, USA • January 2011 – August 2011": "مؤسسه پلی‌تکنیک وُستر (WPI) • وُستر، ماساچوست، آمریکا • ژانویه 2011 – اوت 2011",
    "Worked as a research assistant in the Mechanical Engineering Department at WPI. Also lived in the USA for two and a half years and worked as a math tutor at Buffalo State College in 2012.": "به‌عنوان دستیار پژوهشی در دانشکده مهندسی مکانیک WPI فعالیت کردم. همچنین دو سال و نیم در آمریکا زندگی کردم و در سال 2012 به‌عنوان مدرس خصوصی ریاضی در Buffalo State College کار کردم.",
    "Research • Mechanical Engineering • Mathematics Tutoring • Academic Support": "پژوهش • مهندسی مکانیک • تدریس ریاضی • پشتیبانی دانشگاهی",
    "Project Manager": "مدیر پروژه",
    "Sharif University of Technology • Tehran, Iran • July 2007 – August 2010": "دانشگاه صنعتی شریف • تهران، ایران • ژوئیه 2007 – اوت 2010",
    "Managed a 12-member team of graduate students, undergraduate students, and university staff to manufacture a laboratory autonomous underwater robot and develop its control and monitoring software.": "مدیریت یک تیم 12 نفره متشکل از دانشجویان تحصیلات تکمیلی، کارشناسی و کارکنان دانشگاه را برای ساخت یک ربات زیردریایی خودمختار آزمایشگاهی و توسعه نرم‌افزار کنترل و پایش آن بر عهده داشتم.",
    "Project Management • Autonomous Underwater Robot • Robotics • Control Software": "مدیریت پروژه • ربات زیردریایی خودمختار • رباتیک • نرم‌افزار کنترل",
    "Selected work": "نمونه کارهای منتخب",
    "Robotics & Control Systems": "رباتیک و سیستم‌های کنترل",
    "Dynamic modeling, simulation, control design, and robotics software prototypes.": "مدل‌سازی دینامیکی، شبیه‌سازی، طراحی کنترل و نمونه‌های نرم‌افزاری رباتیک.",
    "View on GitHub": "مشاهده در GitHub",
    "Machine Learning / AI": "یادگیری ماشین / هوش مصنوعی",
    "Data science notebooks, ML workflows, classification, regression, and AI applications.": "نوت‌بوک‌های علم داده، جریان‌های کاری یادگیری ماشین، طبقه‌بندی، رگرسیون و کاربردهای هوش مصنوعی.",
    "Web Development": "توسعه وب",
    "Full-stack websites, dashboards, Django applications, APIs, and frontend interfaces.": "وب‌سایت‌های فول‌استک، داشبوردها، برنامه‌های Django، APIها و رابط‌های فرانت‌اند.",
    "Technical Courses": "دوره‌های فنی",
    "University-level tutorials in control engineering, robotics, system dynamics, and AI.": "آموزش‌های سطح دانشگاهی در مهندسی کنترل، رباتیک، دینامیک سیستم‌ها و هوش مصنوعی.",
    "View Courses on YouTube": "مشاهده دوره‌ها در YouTube",
    "Four-Bar Linkage Mechanism Simulator": "شبیه‌ساز مکانیزم چهارمیله‌ای",
    "Interactive engineering simulation of a four-bar linkage mechanism, designed to demonstrate planar mechanism motion, linkage geometry, kinematic behavior, and browser-based visualization for mechanical and robotics education.": "شبیه‌سازی تعاملی مهندسی یک مکانیزم چهارمیله‌ای برای نمایش حرکت مکانیزم صفحه‌ای، هندسه لینک‌ها، رفتار سینماتیکی و بصری‌سازی مبتنی بر مرورگر در آموزش مکانیک و رباتیک.",
    "View Live Demo": "مشاهده دموی زنده",
    "Double Pendulum Chaos Simulator": "شبیه‌ساز آشوب آونگ دوگانه",
    "Interactive browser-based simulation of a double pendulum, designed to demonstrate deterministic chaos, butterfly-effect behavior, sensitivity to initial conditions, and how small changes in link angles, angular velocities, lengths, masses, or perturbations can generate very different future motion.": "شبیه‌سازی تعاملی مبتنی بر مرورگر از آونگ دوگانه برای نمایش آشوب قطعی، اثر پروانه‌ای، حساسیت به شرایط اولیه و اینکه چگونه تغییرات کوچک در زاویه لینک‌ها، سرعت‌های زاویه‌ای، طول‌ها، جرم‌ها یا اغتشاش‌ها می‌توانند حرکت‌های آینده بسیار متفاوتی ایجاد کنند.",
    "3D Robotic Manipulator Simulator": "شبیه‌ساز سه‌بعدی بازوی رباتیک",
    "Cross-language 3D simulation series for a 3-DOF RRR robotic manipulator. The projects demonstrate robotics kinematics, 3D visualization, inverse kinematics concepts, and comparable implementation patterns across multiple programming ecosystems.": "مجموعه شبیه‌سازی سه‌بعدی چندزبانه برای یک بازوی رباتیک RRR سه‌درجه‌آزادی. این پروژه‌ها سینماتیک ربات، بصری‌سازی سه‌بعدی، مفاهیم سینماتیک معکوس و الگوهای پیاده‌سازی قابل مقایسه در چند اکوسیستم برنامه‌نویسی را نشان می‌دهند.",
    "Plotting Playground in Multiple Languages": "محیط آزمایشی رسم نمودار در چند زبان برنامه‌نویسی",
    "A multi-language plotting playground collection focused on generating clean scientific and engineering visualizations. Each repository demonstrates practical plotting workflows, reproducible examples, and language-specific approaches to data visualization.": "مجموعه‌ای چندزبانه برای رسم نمودار با تمرکز بر تولید بصری‌سازی‌های تمیز علمی و مهندسی. هر مخزن جریان‌های کاری عملی رسم نمودار، مثال‌های قابل بازتولید و رویکردهای ویژه هر زبان برای بصری‌سازی داده را نمایش می‌دهد.",
    "ODE & PDE Solvers in Multiple Languages": "حل‌گرهای ODE و PDE در چند زبان برنامه‌نویسی",
    "Cross-language numerical simulation projects for ordinary and partial differential equations. The collection includes scientific-computing examples such as 2D heat-equation simulation, nonlinear dynamic systems, inverted pendulum control, numerical integration, plots, animations, and reproducible engineering outputs.": "پروژه‌های شبیه‌سازی عددی چندزبانه برای معادلات دیفرانسیل معمولی و جزئی. این مجموعه شامل مثال‌های محاسبات علمی مانند شبیه‌سازی دوبعدی معادله گرما، سیستم‌های دینامیکی غیرخطی، کنترل آونگ معکوس، انتگرال‌گیری عددی، نمودارها، انیمیشن‌ها و خروجی‌های مهندسی قابل بازتولید است.",
    "Technical profile": "پروفایل فنی",
    "Data Science, Machine Learning and Artificial Intelligence": "علم داده، یادگیری ماشین و هوش مصنوعی",
    "Data Science / Data Mining": "علم داده / داده‌کاوی",
    "Statistics": "آمار",
    "Machine Learning": "یادگیری ماشین",
    "Artificial Intelligence": "هوش مصنوعی",
    "Neural Networks / Deep Learning": "شبکه‌های عصبی / یادگیری عمیق",
    "Computer Vision / Convolutional Networks": "بینایی ماشین / شبکه‌های کانولوشنی",
    "Reinforcement Learning": "یادگیری تقویتی",
    "Natural Language Processing": "پردازش زبان طبیعی",
    "Large Language Models": "مدل‌های زبانی بزرگ",
    "R Programming": "برنامه‌نویسی R",
    "Programming, Software Development and Databases": "برنامه‌نویسی، توسعه نرم‌افزار و پایگاه‌های داده",
    "Multi-Threading": "برنامه‌نویسی چندنخی",
    "Design Patterns": "الگوهای طراحی",
    "Agile / Scrum": "Agile / Scrum",
    "DevOps & Operating Systems": "DevOps و سیستم‌عامل‌ها",
    "DevOps Concepts": "مفاهیم DevOps",
    "System Administration": "مدیریت سیستم",
    "Big Data and Cloud Systems": "کلان‌داده و سامانه‌های ابری",
    "Academic background": "سوابق تحصیلی",
    "PhD Candidate in Mechanical Engineering": "دانشجوی دوره دکتری مهندسی مکانیک",
    "Worcester Polytechnic Institute • Worcester, MA, USA • 2011": "مؤسسه پلی‌تکنیک وُستر (WPI) • وُستر، ماساچوست، آمریکا • 2011",
    "Attended the PhD program in Mechanical Engineering at Worcester Polytechnic Institute. The program was not finished.": "در دوره دکتری مهندسی مکانیک مؤسسه پلی‌تکنیک وُستر شرکت کردم؛ این دوره به پایان نرسید.",
    "Mechanical Engineering • Research • Graduate Studies": "مهندسی مکانیک • پژوهش • تحصیلات تکمیلی",
    "Master of Science in Mechanical Engineering": "کارشناسی ارشد مهندسی مکانیک",
    "Iran University of Science and Technology • Tehran, Iran • 2007 – 2010": "دانشگاه علم و صنعت ایران • تهران، ایران • 2007 – 2010",
    "Completed a Master of Science degree in Mechanical Engineering.": "مدرک کارشناسی ارشد مهندسی مکانیک را دریافت کردم.",
    "Mechanical Engineering • Control • Robotics": "مهندسی مکانیک • کنترل • رباتیک",
    "Bachelor of Science in Mechanical Engineering": "کارشناسی مهندسی مکانیک",
    "Sharif University of Technology • Tehran, Iran • 2002 – 2007": "دانشگاه صنعتی شریف • تهران، ایران • 2002 – 2007",
    "Completed a Bachelor of Science degree in Mechanical Engineering.": "مدرک کارشناسی مهندسی مکانیک را دریافت کردم.",
    "Mechanical Engineering • Engineering Fundamentals • Design": "مهندسی مکانیک • مبانی مهندسی • طراحی",
    "Research work": "فعالیت پژوهشی",
    "Trajectory Tracking of a 2-Link Mobile Manipulator Using Sliding Mode Control Method": "ردیابی مسیر یک مانیپولاتور متحرک دو لینکی با استفاده از روش کنترل مد لغزشی",
    "Mohammadijoo, A. • 2023": "محمدی‌جو، ا. • 2023",
    "Published in World Academy of Science, Engineering and Technology, International Journal of Mechanical and Mechatronics Engineering , Vol. 17, No. 5, 2023.": "Published in World Academy of Science, Engineering and Technology, International Journal of Mechanical and Mechatronics Engineering , Vol. 17, No. 5, 2023.",
    "Sliding Mode Control • Mobile Manipulator • Trajectory Tracking • Robotics • Control Engineering": "کنترل مد لغزشی • مانیپولاتور متحرک • ردیابی مسیر • رباتیک • مهندسی کنترل",
    "Paper": "مقاله",
    "Award": "جایزه",
    "Animation": "انیمیشن",
    "Personal background": "پیشینه شخصی",
    "I was born in Tehran, capital city of Iran in 19 Oct 1984. I am graduated from one of best high schools of nation, “Energy Atomi High School” in 2002. I received my Bachelor Degree in Mechanical Engineering from best university of Iran, “Sharif University of Technology” in 2007 and received my Master Degree in Mechanical Engineering from one of top 5 universities of country, “Iran University of Science and Technology” in 2010. I attended in PhD program in WPI University in USA at Jan 2011, but had to quit the PhD after 1 year. I have lived in USA since Jan 2011 to May 2013 and I have visited many states of USA during my stay. I would love to travel worldwide as much as I can and also have visited 8 countries so far.": "من در ۱۹ اکتبر ۱۹۸۴ در تهران، پایتخت ایران، متولد شدم. در سال ۲۰۰۲ از دبیرستان انرژی اتمی، یکی از دبیرستان‌های برتر کشور، فارغ‌التحصیل شدم. در سال ۲۰۰۷ مدرک کارشناسی مهندسی مکانیک را از دانشگاه صنعتی شریف و در سال ۲۰۱۰ مدرک کارشناسی ارشد مهندسی مکانیک را از دانشگاه علم و صنعت ایران دریافت کردم. در ژانویه ۲۰۱۱ وارد دوره دکتری دانشگاه WPI در آمریکا شدم، اما پس از یک سال ناچار به ترک دوره دکتری شدم. از ژانویه ۲۰۱۱ تا مه ۲۰۱۳ در آمریکا زندگی کردم و در طول اقامتم از ایالت‌های متعددی بازدید کردم. علاقه زیادی به سفر در سراسر جهان دارم و تاکنون از ۸ کشور دیدن کرده‌ام.",
    "Moreover, I am very fluent in English and am a little familiar with French, German and Arabic languages (my native language is Farsi). The passionate and love of learning guided me to \"never stop learning and experiencing new things\" lifestyle. So, I have read many books in fields like Science, History, Sociology, Religions, Novels and etc since when I was teenager. I honestly can tell that I have never seen someone like myself (between communities I belonged), that watched many Movies and TV-series and listened in many Music Discographies in many languages (like a professional artist in Cinema and Music Industry). I also always care about my health and I do my routine home fitness workouts daily and I am professional player in Soccer, Mountain Climbing, Backgammon and Chess since I was teenager.": "همچنین به زبان انگلیسی تسلط بسیار خوبی دارم و تا حدی با زبان‌های فرانسوی، آلمانی و عربی آشنا هستم؛ زبان مادری من فارسی است. اشتیاق و علاقه‌ام به یادگیری باعث شده سبک زندگی «هرگز از یادگیری و تجربه چیزهای تازه دست نکش» را دنبال کنم. از دوران نوجوانی کتاب‌های فراوانی در زمینه‌هایی مانند علم، تاریخ، جامعه‌شناسی، ادیان و رمان مطالعه کرده‌ام. در میان جوامعی که در آن‌ها حضور داشته‌ام، کمتر کسی را دیده‌ام که مانند من تعداد بسیار زیادی فیلم و سریال تماشا کرده و دیسکوگرافی‌های موسیقی فراوانی را به زبان‌های مختلف دنبال کرده باشد؛ تا حدی شبیه کسی که به‌صورت حرفه‌ای صنعت سینما و موسیقی را پیگیری می‌کند. همیشه به سلامتی‌ام نیز اهمیت می‌دهم، تمرین‌های روزانه تناسب‌اندام را در خانه انجام می‌دهم و از دوران نوجوانی در فوتبال، کوهنوردی، تخته‌نرد و شطرنج فعالیت جدی داشته‌ام.",
    "My master degree is in Robotic and Control Engineering and I always loved this research field, but at the same time I loved to learn about computer engineering and Electrical Engineering. So, I started to learn all of bachelor courses of Electrical Engineering and all of bachelor courses of Computer Engineering since 5 2016. Now, my knowledge in Electrical engineering is at BSc level and in Computer engineering is at BSc level too and I have an official Master Degree in Mechanical Engineering (Control & Robotics).": "گرایش تحصیلی من در مقطع کارشناسی ارشد کنترل و رباتیک بوده و همواره به این حوزه پژوهشی علاقه داشته‌ام. هم‌زمان به یادگیری مهندسی کامپیوتر و مهندسی برق نیز علاقه‌مند بودم؛ بنابراین از سال ۲۰۱۶ مطالعه دروس دوره کارشناسی مهندسی برق و مهندسی کامپیوتر را آغاز کردم. در حال حاضر دانش من در مهندسی برق و مهندسی کامپیوتر در سطح کارشناسی است و مدرک رسمی کارشناسی ارشد مهندسی مکانیک با تمرکز بر کنترل و رباتیک دارم.",
    "In Year 2019, after watching some documentaries in field of Particle Physics and Astro-Physics and Big Bang Theory, I found a strong interest in myself about Theoretical Physics. So, as always, I started to learn more about Physics and I finished bachelor courses of “Physics” in 2019. Maybe in future, I will continue my Studies in Physics to PhD level, especially in fields of “Particle Physics” and “Astro-Physics”. I hope, someday I can solve some mysterious unsolved problems in physics and about origin of universe and unification of standard model and etc. I hope my god will help me, like always was with me in my whole life.": "در سال ۲۰۱۹، پس از تماشای مستندهایی درباره فیزیک ذرات، اخترفیزیک و نظریه مهبانگ، علاقه بسیار زیادی به فیزیک نظری پیدا کردم. بنابراین مانند همیشه مطالعه بیشتر را آغاز کردم و در همان سال دروس دوره کارشناسی «فیزیک» را به پایان رساندم. شاید در آینده تحصیلات فیزیک را تا سطح دکتری، به‌ویژه در حوزه‌های «فیزیک ذرات» و «اخترفیزیک»، ادامه دهم. امیدوارم روزی بتوانم در حل برخی مسائل اسرارآمیز و حل‌نشده فیزیک، منشأ جهان و یکپارچه‌سازی مدل استاندارد سهمی داشته باشم. امیدوارم خداوند، همان‌گونه که در تمام زندگی همراه من بوده است، یاری‌ام کند.",
    "I was born in Tehran, capital city of Iran in 19 Oct 1984. I am graduated from one of best high schools of nation, “Energy Atomi High School” in 2002. I received my Bachelor Degree in Mechanical Engineering from best university of Iran, “Sharif University of Technology” in 2007 and received my Master Degree in Mechanical Engineering from one of top 5 universities of country, “Iran University of Science and Technology” in 2010.": "من در 19 اکتبر 1984 در تهران، پایتخت ایران، متولد شدم. در سال 2002 از دبیرستان انرژی اتمی فارغ‌التحصیل شدم. در سال 2007 مدرک کارشناسی مهندسی مکانیک را از دانشگاه صنعتی شریف و در سال 2010 مدرک کارشناسی ارشد مهندسی مکانیک را از دانشگاه علم و صنعت ایران دریافت کردم.",
    "I attended in PhD program in WPI University in USA at Jan 2011, but had to quit the PhD after 1 year. I have lived in USA since Jan 2011 to May 2013 and I have visited many states of USA during my stay. I would love to travel worldwide as much as I can and also have visited 8 countries so far.": "در ژانویه 2011 وارد دوره دکتری در WPI آمریکا شدم، اما پس از یک سال ناچار به ترک دوره دکتری شدم. از ژانویه 2011 تا مه 2013 در آمریکا زندگی کردم و در طول اقامتم از ایالت‌های مختلفی بازدید کردم. علاقه زیادی به سفر در سراسر جهان دارم و تاکنون از 8 کشور دیدن کرده‌ام.",
    "Moreover, I am very fluent in English and am a little familiar with French, German and Arabic languages (my native language is Farsi). The passionate and love of learning guided me to \"never stop learning and experiencing new things\" lifestyle. So, I have read many books in fields like Science, History, Sociology, Religions, Novels and etc since when I was teenager.": "همچنین به زبان انگلیسی تسلط بسیار خوبی دارم و تا حدی با زبان‌های فرانسوی، آلمانی و عربی آشنا هستم؛ زبان مادری من فارسی است. اشتیاق و علاقه‌ام به یادگیری باعث شده سبک زندگی «هرگز از یادگیری و تجربه چیزهای تازه دست نکش» را دنبال کنم. از دوران نوجوانی نیز کتاب‌های زیادی در زمینه‌هایی مانند علم، تاریخ، جامعه‌شناسی، ادیان و رمان مطالعه کرده‌ام.",
    "I honestly can tell that I have never seen someone like myself (between communities I belonged), that watched many Movies and TV-series and listened in many Music Discographies in many languages (like a professional artist in Cinema and Music Industry). I also always care about my health and I do my routine home fitness workouts daily and I am professional player in Soccer, Mountain Climbing, Backgammon and Chess since I was teenager.": "در میان جوامعی که در آن‌ها حضور داشته‌ام، کمتر کسی را دیده‌ام که مانند من تعداد بسیار زیادی فیلم و سریال دیده و دیسکوگرافی‌های موسیقی فراوانی را به زبان‌های مختلف دنبال کرده باشد. همیشه به سلامتی‌ام نیز اهمیت می‌دهم، تمرین‌های روزانه تناسب‌اندام را در خانه انجام می‌دهم و از دوران نوجوانی در فوتبال، کوهنوردی، تخته‌نرد و شطرنج فعالیت جدی داشته‌ام.",
    "My passion and love of learnings, led me to variety of knowledge in many fields. In year 2019, due to my strong interest, I changed my scientific field to “Theoretical Physics” and I have finished learning bachelor courses of physics and I will continue my studies in this field for next months and years.": "علاقه و اشتیاقم به یادگیری باعث شده در حوزه‌های مختلف دانش متنوعی کسب کنم. در سال 2019، به دلیل علاقه زیاد، جهت مطالعات علمی خود را به «فیزیک نظری» تغییر دادم، دروس دوره کارشناسی فیزیک را مطالعه کردم و قصد دارم در ماه‌ها و سال‌های آینده نیز این مسیر را ادامه دهم.",
    "Besides, I have a valuable knowledge of many programming languages like C++, C#, Python, Java, JavaScript, Ruby and etc. I also tried to learn all of new technologies in Web Development formerly, but my plan (which is started last year) for next years, would be research in field of “Theoretical Physics”.": "علاوه بر این، دانش خوبی از زبان‌های برنامه‌نویسی متعددی مانند C++، C#، Python، Java، JavaScript و Ruby دارم. پیش‌تر تلاش کردم فناوری‌های جدید توسعه وب را نیز بیاموزم، اما برنامه من برای سال‌های آینده پژوهش در زمینه «فیزیک نظری» است.",
    "A little more about me:": "کمی بیشتر درباره من:",
    "My master degree is in Robotic and Control Engineering and I always loved this research field, but at the same time I loved to learn about computer engineering and Electrical Engineering. So, I started to learn all of bachelor courses of Electrical Engineering and all of bachelor courses of Computer Engineering since 5 2016.": "گرایش تحصیلی من در مقطع کارشناسی ارشد کنترل و رباتیک بوده و همواره به این حوزه پژوهشی علاقه داشته‌ام. هم‌زمان به یادگیری مهندسی کامپیوتر و مهندسی برق نیز علاقه‌مند بودم؛ بنابراین از سال 2016 مطالعه دروس دوره کارشناسی مهندسی برق و مهندسی کامپیوتر را آغاز کردم.",
    "Now, my knowledge in Electrical engineering is at BSc level and in Computer engineering is at BSc level too and I have an official Master Degree in Mechanical Engineering (Control & Robotics).": "در حال حاضر دانش من در مهندسی برق و مهندسی کامپیوتر در سطح کارشناسی است و مدرک رسمی کارشناسی ارشد مهندسی مکانیک با تمرکز بر کنترل و رباتیک دارم.",
    "I love “programming” and “AI” and I have learned a lot of programming languages and “ML” related subjects, since 2015. I teach programming and Machine Learning and I have a considerable knowledge in IT and web development and I teach them as well. You can find more details about it, in my resume page.": "به «برنامه‌نویسی» و «هوش مصنوعی» علاقه زیادی دارم و از سال 2015 زبان‌های برنامه‌نویسی متعدد و موضوعات مرتبط با «یادگیری ماشین» را آموخته‌ام. برنامه‌نویسی و یادگیری ماشین تدریس می‌کنم و در IT و توسعه وب نیز دانش قابل‌توجهی دارم و این مباحث را هم آموزش می‌دهم. جزئیات بیشتر در صفحه رزومه من موجود است.",
    "In Year 2019, after watching some documentaries in field of Particle Physics and Astro-Physics and Big Bang Theory, I found a strong interest in myself about Theoretical Physics. So, as always, I started to learn more about Physics and I finished bachelor courses of “Physics” in 2019. Maybe in future, I will continue my Studies in Physics to PhD level, especially in fields of “Particle Physics” and “Astro-Physics”.": "در سال 2019، پس از تماشای مستندهایی درباره فیزیک ذرات، اخترفیزیک و نظریه مهبانگ، علاقه بسیار زیادی به فیزیک نظری پیدا کردم. بنابراین مطالعه جدی‌تر فیزیک را آغاز کردم و در همان سال دروس دوره کارشناسی «فیزیک» را به پایان رساندم. شاید در آینده تحصیلات فیزیک را تا سطح دکتری، به‌ویژه در حوزه‌های «فیزیک ذرات» و «اخترفیزیک»، ادامه دهم.",
    "I hope, someday I can solve some mysterious unsolved problems in physics and about origin of universe and unification of standard model and etc. I hope my god will help me, like always was with me in my whole life.": "امیدوارم روزی بتوانم در حل برخی مسائل ناشناخته و حل‌نشده فیزیک، منشأ جهان و یکپارچه‌سازی مدل استاندارد سهمی داشته باشم. امیدوارم خداوند مانند همیشه در زندگی‌ام یاری‌ام کند.",
    "Since 2020, I focused on some research topics in Artificial Intelligence like, Machine Learning, Neural Networks, Deep Learning, Computer Vision, Game Theory, Fuzzy Systems, Natural Language Processing, Quantum Computing, Graph Theory, Metaheuristic Optimization, Nonlinear Optimization and Reinforcement Learning and I will continue my research in these fields in next years as one of my specialties and I have a plan to publish papers in those fields in future.": "از سال 2020 بر موضوعات پژوهشی مختلف در هوش مصنوعی مانند یادگیری ماشین، شبکه‌های عصبی، یادگیری عمیق، بینایی ماشین، نظریه بازی، سیستم‌های فازی، پردازش زبان طبیعی، محاسبات کوانتومی، نظریه گراف، بهینه‌سازی فراابتکاری، بهینه‌سازی غیرخطی و یادگیری تقویتی تمرکز کرده‌ام و قصد دارم در سال‌های آینده این حوزه‌ها را به‌عنوان بخشی از تخصص خود ادامه داده و مقالاتی در آن‌ها منتشر کنم.",
    "Academic and self-study background": "سوابق دانشگاهی و خودآموزی",
    "Academic and technical background": "پیشینه دانشگاهی و فنی",
    "Courses I Have Learned": "دوره‌هایی که آموخته‌ام",
    "In this page, I have listed all of the courses I have learned till now. These are the official topics of courses taught in universities. Beside these courses, I also have many skills in programming, web development, and software development, which are described in detail in my": "در این صفحه همه درس‌ها و دوره‌هایی را که تاکنون آموخته‌ام فهرست کرده‌ام. این موارد موضوعات رسمی دروس دانشگاهی هستند. علاوه بر این دوره‌ها، مهارت‌های متعددی در برنامه‌نویسی، توسعه وب و توسعه نرم‌افزار دارم که جزئیات آن‌ها در",
    "resume": "رزومه",
    "As my major and my BSc and MSc degrees are in Mechanical Engineering, I have learned university-level courses in Mechanical Engineering. I also learned courses in Electrical Engineering, Computer Engineering, Physics, Chemistry, and Mathematics independently through ebooks, video tutorials, institutes, and university resources.": "از آنجا که رشته و مدارک کارشناسی و کارشناسی ارشد من مهندسی مکانیک است، دروس دانشگاهی مهندسی مکانیک را گذرانده‌ام. همچنین دروس مهندسی برق، مهندسی کامپیوتر، فیزیک، شیمی و ریاضیات را به‌صورت مستقل از طریق کتاب‌های الکترونیکی، آموزش‌های ویدیویی، مؤسسات و منابع دانشگاهی آموخته‌ام.",
    "I also have nine certifications in Automation Engineering, earned through 24-hour theoretical and practical workshops for each topic at": "همچنین نه گواهینامه مهندسی اتوماسیون دارم که هرکدام از طریق کارگاه 24 ساعته نظری و عملی در مرکز آموزشی",
    "FESTO's": "FESTO",
    "educational center.": "دریافت شده‌اند.",
    "Get in touch": "در تماس باشید",
    "Email": "ایمیل",
    "Website": "وب‌سایت",
    "YouTube Channel": "کانال YouTube",
    "Support": "حمایت",
    "Ethereum / ERC-20 Donations": "حمایت مالی با Ethereum / ERC-20",
    "Donations are accepted only on the Ethereum network using Ethereum or ERC-20 tokens.": "حمایت مالی فقط روی شبکه Ethereum و با استفاده از Ethereum یا توکن‌های ERC-20 پذیرفته می‌شود.",
    "Wallet Address": "آدرس کیف پول",
    "USDT:": "USDT:",
    "Send USDT on Ethereum": "USDT را فقط روی شبکه Ethereum ارسال کنید؛",
    "only": "فقط",
    "Do NOT send TRC-20 / TRON": "به این آدرس TRC-20 / TRON ارسال نکنید",
    "to this address.": ".",
    "Ethereum • ERC-20 • USDT ERC-20 Only": "Ethereum • ERC-20 • فقط USDT روی ERC-20",

    /* Dynamic project enhancements from js/main.js */
    "CaaT Academy": "آکادمی CaaT",
    "DevOps Academy": "آکادمی DevOps",
    "Big Data Academy": "آکادمی Big Data",
    "Free browser-native academy for control engineering, automation, and robotics, with structured courses, hands-on lessons, simulations, practical code, and engineering-focused learning paths.": "آکادمی رایگان و مبتنی بر مرورگر برای مهندسی کنترل، اتوماسیون و رباتیک، شامل دوره‌های ساختاریافته، درس‌های عملی، شبیه‌سازی‌ها، کدهای کاربردی و مسیرهای یادگیری مهندسی‌محور.",
    "Structured DevOps learning academy covering the delivery stack from Linux, Git, testing, and CI/CD through containers, Kubernetes, infrastructure automation, security, observability, and cloud platforms.": "آکادمی ساختاریافته DevOps که زنجیره تحویل را از Linux، Git، تست و CI/CD تا کانتینرها، Kubernetes، اتوماسیون زیرساخت، امنیت، مشاهده‌پذیری و پلتفرم‌های ابری پوشش می‌دهد.",
    "Comprehensive data engineering academy covering relational and NoSQL databases, distributed systems, Hadoop and Spark, streaming, orchestration, lakehouse technologies, cloud data platforms, and analytics.": "آکادمی جامع مهندسی داده شامل پایگاه‌های داده رابطه‌ای و NoSQL، سیستم‌های توزیع‌شده، Hadoop و Spark، پردازش جریانی، ارکستراسیون، فناوری‌های Lakehouse، پلتفرم‌های داده ابری و تحلیل داده.",
    "Open Academy": "ورود به آکادمی",
    "View Repository": "مشاهده مخزن",
    "Unified 3D simulation project for a 3-DOF RRR robotic manipulator implemented in 9 programming languages. It demonstrates forward and inverse kinematics, interactive 3D visualization, robotics mathematics, and comparable implementation patterns across multiple programming ecosystems.": "پروژه یکپارچه شبیه‌سازی سه‌بعدی برای بازوی رباتیک RRR سه‌درجه‌آزادی که در 9 زبان برنامه‌نویسی پیاده‌سازی شده است. این پروژه سینماتیک مستقیم و معکوس، بصری‌سازی تعاملی سه‌بعدی، ریاضیات رباتیک و الگوهای پیاده‌سازی قابل‌مقایسه در چند اکوسیستم برنامه‌نویسی را نمایش می‌دهد.",
    "Unified scientific and engineering plotting playground implemented in 9 programming languages, with reproducible visualization examples, practical charting workflows, and language-specific approaches collected in a single repository.": "محیط یکپارچه رسم نمودارهای علمی و مهندسی در 9 زبان برنامه‌نویسی، شامل مثال‌های بصری‌سازی قابل بازتولید، جریان‌های کاری عملی رسم نمودار و رویکردهای ویژه هر زبان در یک مخزن واحد.",
    "Unified numerical simulation collection implemented in 9 programming languages for ordinary and partial differential equations, including heat-equation simulation, nonlinear dynamics, inverted-pendulum control, numerical integration, plots, animations, and reproducible engineering outputs.": "مجموعه یکپارچه شبیه‌سازی عددی در 9 زبان برنامه‌نویسی برای معادلات دیفرانسیل معمولی و جزئی، شامل شبیه‌سازی معادله گرما، دینامیک غیرخطی، کنترل آونگ معکوس، انتگرال‌گیری عددی، نمودارها، انیمیشن‌ها و خروجی‌های مهندسی قابل بازتولید.",

    /* Course section/category labels */
    "Common Courses in Engineering": "دروس عمومی و پایه مهندسی",
    "Mechanical Engineering": "مهندسی مکانیک",
    "Electrical Engineering": "مهندسی برق",
    "Computer Engineering": "مهندسی کامپیوتر",
    "PHYSICS and Nuclear Engineering": "فیزیک و مهندسی هسته‌ای",
    "Control / Robotic Engineering": "مهندسی کنترل / رباتیک",
    "Aerospace Engineering": "مهندسی هوافضا",
    "Material Engineering": "مهندسی مواد",
    "Artificial Intelligence and Data Science": "هوش مصنوعی و علم داده",
    "Metaheuristics Optimization Algorithms ↓": "الگوریتم‌های بهینه‌سازی فراابتکاری ↓",
    "Automation Engineering": "مهندسی اتوماسیون",
    "Embedded Systems ↓": "سیستم‌های نهفته ↓",
    "Mathematics": "ریاضیات",
    "CHEMISTRY & Chemical Engineering": "شیمی و مهندسی شیمی",
    "Software": "نرم‌افزار",
    "Other Courses": "سایر دوره‌ها",

    /* Common / mechanical */
    "General Mathematics 1": "ریاضی عمومی 1",
    "General Mathematics 2": "ریاضی عمومی 2",
    "General Physics 1": "فیزیک عمومی 1",
    "General Physics 2": "فیزیک عمومی 2",
    "General Physics 3": "فیزیک عمومی 3",
    "General Physics 4": "فیزیک عمومی 4",
    "General Physics Labratories": "آزمایشگاه‌های فیزیک عمومی",
    "General Chemistry": "شیمی عمومی",
    "General Chemistry 1": "شیمی عمومی 1",
    "General Chemistry 2": "شیمی عمومی 2",
    "Industrial Drawing 1 & 2": "نقشه‌کشی صنعتی 1 و 2",
    "Programming Language": "زبان برنامه‌نویسی",
    "Differential Equations": "معادلات دیفرانسیل",
    "Engineering Mathematics": "ریاضیات مهندسی",
    "Numerical Calculation": "محاسبات عددی",
    "Engineering Static": "استاتیک مهندسی",
    "Engineering Dynamic": "دینامیک مهندسی",
    "ThermoDynamic 1": "ترمودینامیک 1",
    "ThermoDynamic 2": "ترمودینامیک 2",
    "Fluid Mechanics 1": "مکانیک سیالات 1",
    "Fluid Mechanics 2": "مکانیک سیالات 2",
    "Advanced Fluid Mechanics": "مکانیک سیالات پیشرفته",
    "Vibrations": "ارتعاشات",
    "Linear Control Systems": "سیستم‌های کنترل خطی",
    "Dynamic of Machinery": "دینامیک ماشین‌ها",
    "Design of Machine Components 1": "طراحی اجزای ماشین 1",
    "Design of Machine Components 2": "طراحی اجزای ماشین 2",
    "Material Science": "علم مواد",
    "Strength of Materials 1": "مقاومت مصالح 1",
    "Strength of Materials 2": "مقاومت مصالح 2",
    "Fundamental of Electrical Engineering 1": "مبانی مهندسی برق 1",
    "Heat Transfer 1": "انتقال حرارت 1",
    "Heat Transfer 2": "انتقال حرارت 2",
    "Production Methods": "روش‌های تولید",
    "Welding Theory": "تئوری جوشکاری",
    "Structure Analysis": "تحلیل سازه",
    "Hydraulics and Pneumatics": "هیدرولیک و پنوماتیک",
    "Internal Combustion Engines": "موتورهای احتراق داخلی",
    "Turbo Machines": "توربوماشین‌ها",
    "Ship Technology": "فناوری کشتی",
    "HydroStatic of Marine Vessels": "هیدرواستاتیک شناورها",
    "HydroDynamic of Marine Vessels": "هیدرودینامیک شناورها",
    "Marine Engineering": "مهندسی دریا",
    "Underwater Engineering": "مهندسی زیرآب",
    "Computational Fluid Dynamic": "دینامیک سیالات محاسباتی",
    "Mechanism Design and Optimization": "طراحی و بهینه‌سازی مکانیزم",
    "Finite Element Method": "روش اجزای محدود",
    "Theory of Plates and Shells (I)": "تئوری صفحات و پوسته‌ها (I)",
    "Principles of Sonar Sensors": "اصول حسگرهای سونار",
    "HVAC Systems": "سیستم‌های HVAC",
    "Refrigeration and Cryogenics": "تبرید و سرماشناسی",
    "Micro-Electromechanical Systems (MEMS)": "سیستم‌های میکروالکترومکانیکی (MEMS)",
    "Acoustics": "آکوستیک",
    "Remotely Operated Vehicles (ROVs)": "وسایل نقلیه کنترل‌شونده از راه دور (ROV)",

    /* Electrical */
    "Basic Circuit Theory 1": "مدارهای الکتریکی 1",
    "Basic Circuit Theory 2": "مدارهای الکتریکی 2",
    "Logical Circuits": "مدارهای منطقی",
    "Engineering Statics and Probability": "آمار و احتمال مهندسی",
    "Signal and System Analysis": "تجزیه و تحلیل سیگنال‌ها و سیستم‌ها",
    "Engineering Electromagnetism": "الکترومغناطیس مهندسی",
    "Electronic 1": "الکترونیک 1",
    "Electronic 2": "الکترونیک 2",
    "Electronic 3": "الکترونیک 3",
    "Electrical Machine 1": "ماشین‌های الکتریکی 1",
    "Electrical Machine 2": "ماشین‌های الکتریکی 2",
    "Basics of Telecommunication System": "مبانی سیستم‌های مخابراتی",
    "Analog Telecommunication System (Telecommunication 1)": "سیستم مخابرات آنالوگ (مخابرات 1)",
    "Digital Telecommunication System (Telecommunication 2)": "سیستم مخابرات دیجیتال (مخابرات 2)",
    "Coding Theory": "نظریه کدگذاری",
    "PRINCIPLES OF DIGITAL COMMUNICATIONS": "اصول مخابرات دیجیتال",
    "Wireless Telecommunication System": "سیستم‌های مخابرات بی‌سیم",
    "RADAR Engineering": "مهندسی رادار",
    "MicroProcessors & MicroControllers": "ریزپردازنده‌ها و میکروکنترلرها",
    "Digital System 1": "سیستم‌های دیجیتال 1",
    "Fields and Waves": "میدان‌ها و امواج",
    "Wave Propagation": "انتشار امواج",
    "Microwave": "مایکروویو",
    "Detection Theory": "نظریه آشکارسازی",
    "Antenna I": "آنتن I",
    "Antenna II": "آنتن II",
    "Antenna Arrays for Radar and Communications": "آرایه‌های آنتنی برای رادار و مخابرات",
    "Design of Radar Screen": "طراحی صفحه رادار",
    "Tele-Communication Circuits": "مدارهای مخابراتی",
    "Radio-Frequency (RF) Circuits and Systems": "مدارها و سیستم‌های فرکانس رادیویی (RF)",
    "Microwave Circuits": "مدارهای مایکروویو",
    "Digital Signal Processing": "پردازش سیگنال دیجیتال",
    "Digital Signal Processing (DSP) Using Arduino": "پردازش سیگنال دیجیتال (DSP) با Arduino",
    "Information Theory": "نظریه اطلاعات",
    "Designing RF Communication Systems Using SDRs with GNU Radio": "طراحی سیستم‌های مخابرات RF با SDR و GNU Radio",
    "Wireless Digital Communications and Signal Processing": "مخابرات دیجیتال بی‌سیم و پردازش سیگنال",

    /* Computer */
    "Automata Theory": "نظریه اتوماتا",
    "Data Structures": "ساختمان داده‌ها",
    "Discrete Mathematics and Discrete Structures": "ریاضیات گسسته و ساختارهای گسسته",
    "Algorithm Design": "طراحی الگوریتم",
    "Introduction to Databases": "مقدمه‌ای بر پایگاه‌های داده",
    "Hardware Software Interface (Computer Organization)": "رابط سخت‌افزار و نرم‌افزار (سازمان کامپیوتر)",
    "Introductory Computer Architecture": "مبانی معماری کامپیوتر",
    "Advanced Computer Architecture": "معماری پیشرفته کامپیوتر",
    "Compiler Design": "طراحی کامپایلر",
    "Operating Systems": "سیستم‌عامل‌ها",
    "Computer Networks 1": "شبکه‌های کامپیوتری 1",
    "Computer Networks 2": "شبکه‌های کامپیوتری 2",
    "Advanced Programming Languages": "زبان‌های برنامه‌نویسی پیشرفته",
    "Assembly Programming Language": "زبان برنامه‌نویسی اسمبلی",
    "Design and Implementation of Programming Languages": "طراحی و پیاده‌سازی زبان‌های برنامه‌نویسی",
    "Software Engineering 1": "مهندسی نرم‌افزار 1",
    "Software Engineering 2 (Advanced)": "مهندسی نرم‌افزار 2 (پیشرفته)",
    "Information Retrieval and Storage": "بازیابی و ذخیره‌سازی اطلاعات",
    "Parallel Algorithms and Parallel Processing": "الگوریتم‌های موازی و پردازش موازی",
    "Computer Network Security": "امنیت شبکه‌های کامپیوتری",
    "Quantum Computing": "محاسبات کوانتومی",
    "Cryptography": "رمزنگاری",

    /* Physics / nuclear */
    "Mathematical Physics (I)": "فیزیک ریاضی (I)",
    "Mathematical Physics (II)": "فیزیک ریاضی (II)",
    "Mathematical Physics (III)": "فیزیک ریاضی (III)",
    "Waves and Vibrations": "امواج و ارتعاشات",
    "Thermodynamics and Statistical Physics 1": "ترمودینامیک و فیزیک آماری 1",
    "Thermodynamics and Statistical Physics 2": "ترمودینامیک و فیزیک آماری 2",
    "Analytical Mechanics 1": "مکانیک تحلیلی 1",
    "Analytical Mechanics 2": "مکانیک تحلیلی 2",
    "Electromagnetism 1": "الکترومغناطیس 1",
    "Electromagnetism 2": "الکترومغناطیس 2",
    "Quantum Mechanics 1": "مکانیک کوانتومی 1",
    "Quantum Mechanics 2": "مکانیک کوانتومی 2",
    "Electromagnetism Theory": "نظریه الکترومغناطیس",
    "Plasma Physics": "فیزیک پلاسما",
    "Laser Physics": "فیزیک لیزر",
    "Principles of Elementary Particle Physics": "اصول فیزیک ذرات بنیادی",
    "Principles of Gravitation": "اصول گرانش",
    "Special Relativity": "نسبیت خاص",
    "Advanced Quantum Mechanics (I)": "مکانیک کوانتومی پیشرفته (I)",
    "Advanced Quantum Mechanics (II)": "مکانیک کوانتومی پیشرفته (II)",
    "Quantum Field Theory (I)": "نظریه میدان کوانتومی (I)",
    "Nano-Electronics (I)": "نانو الکترونیک (I)",
    "Quantum Entangled Systems": "سیستم‌های درهم‌تنیده کوانتومی",
    "Optics (Optique)": "اپتیک",
    "Fourier Optics": "اپتیک فوریه",
    "Magnetic Ferrofluid": "فروسیال مغناطیسی",
    "Nuclear Physics": "فیزیک هسته‌ای",
    "Nuclear Science and Engineering": "علوم و مهندسی هسته‌ای",

    /* Control / robotics */
    "Advanced Robotics (Graduate Course)": "رباتیک پیشرفته (درس تحصیلات تکمیلی)",
    "Nonlinear Control (Graduate Course)": "کنترل غیرخطی (درس تحصیلات تکمیلی)",
    "System Dynamics (Graduate Course)": "دینامیک سیستم‌ها (درس تحصیلات تکمیلی)",
    "Continium Mechanics (Graduate Course)": "مکانیک محیط‌های پیوسته (درس تحصیلات تکمیلی)",
    "Advance Dynamic (Graduate Course)": "دینامیک پیشرفته (درس تحصیلات تکمیلی)",
    "Advance Vibration (Graduate Course)": "ارتعاشات پیشرفته (درس تحصیلات تکمیلی)",
    "Advance Mathematics (Graduate Course)": "ریاضیات پیشرفته (درس تحصیلات تکمیلی)",
    "Advance Numerical Calculation (Graduate Course)": "محاسبات عددی پیشرفته (درس تحصیلات تکمیلی)",
    "Fuzzy Systems and Fuzzy Control": "سیستم‌های فازی و کنترل فازی",
    "Nonlinear System Analysis": "تحلیل سیستم‌های غیرخطی",
    "Modern Control": "کنترل مدرن",
    "Analytical Dynamic": "دینامیک تحلیلی",
    "Adaptive Control": "کنترل تطبیقی",
    "Digital Control": "کنترل دیجیتال",
    "Optimal Control": "کنترل بهینه",
    "Model predictive control (MPC)": "کنترل پیش‌بین مدل (MPC)",
    "Multi-Variable Control": "کنترل چندمتغیره",
    "Robust Control": "کنترل مقاوم",

    /* Aerospace */
    "Orbital and Celestial Mechanics": "مکانیک مداری و سماوی",
    "Aerodynamics (I)": "آیرودینامیک (I)",
    "Aerodynamics (II)": "آیرودینامیک (II)",
    "Structural Analysis (I)": "تحلیل سازه (I)",
    "Structural Analysis (II)": "تحلیل سازه (II)",
    "Rocket Science and Engineering": "علوم و مهندسی موشک",
    "Missile and Rocket Simulations in C++": "شبیه‌سازی موشک و راکت در C++",
    "Aircraft Aerodynamics": "آیرودینامیک هواپیما",
    "Helicopter Aerodynamics": "آیرودینامیک هلیکوپتر",
    "Jet Engine Fundamentals": "مبانی موتور جت",
    "Gas Turbine Technology": "فناوری توربین گاز",
    "Mechanics of Flight (I)": "مکانیک پرواز (I)",
    "Avionics and Aerospace Systems": "اویونیک و سیستم‌های هوافضا",
    "Aircraft Design Project": "پروژه طراحی هواپیما",
    "Satellite Remote Sensing": "سنجش از دور ماهواره‌ای",
    "Satellite Cybersecurity": "امنیت سایبری ماهواره",
    "Inertial Navigation Systems": "سیستم‌های ناوبری اینرسی",
    "Industrial Fuel Combustion Systems": "سیستم‌های احتراق سوخت صنعتی",

    /* Materials */
    "Materials Science and Engineering": "علم و مهندسی مواد",
    "Crystallography": "بلورشناسی",
    "Mechanical Properties of Materials (I)": "خواص مکانیکی مواد (I)",
    "Mechanical Properties of Materials (II)": "خواص مکانیکی مواد (II)",
    "Physical Metallurgy (I)": "متالورژی فیزیکی (I)",
    "Physical Metallurgy (II)": "متالورژی فیزیکی (II)",
    "Composite Engineering": "مهندسی کامپوزیت",
    "Composites and Their Applications in Industry": "کامپوزیت‌ها و کاربردهای آن‌ها در صنعت",
    "Corrosion and Oxidation": "خوردگی و اکسیداسیون",
    "Casting and Solidification of Metals": "ریخته‌گری و انجماد فلزات",
    "Cathodic and Anodic Protection": "حفاظت کاتدی و آندی",
    "Design of Cathodic Protection Systems": "طراحی سیستم‌های حفاظت کاتدی",
    "Heat Treatment": "عملیات حرارتی",
    "Metal Forming": "شکل‌دهی فلزات",
    "Introduction to Catalysts": "مقدمه‌ای بر کاتالیست‌ها",
    "Metal Extraction I (Iron and Steel)": "استخراج فلزات I (آهن و فولاد)",
    "Welding Engineering": "مهندسی جوش",
    "Surface Engineering (I)": "مهندسی سطح (I)",
    "Surface Engineering (II)": "مهندسی سطح (II)",
    "Rheology": "رئولوژی",
    "Crystallization Processes": "فرایندهای تبلور",
    "Polymer Shaping Processes": "فرایندهای شکل‌دهی پلیمر",
    "Advanced Materials Characterization": "شناسایی پیشرفته مواد",

    /* AI / optimization */
    "Neural Networks": "شبکه‌های عصبی",
    "Deep Learning": "یادگیری عمیق",
    "Computer Vision": "بینایی ماشین",
    "Convolutional Neural Networks": "شبکه‌های عصبی کانولوشنی",
    "Game Theory 1": "نظریه بازی 1",
    "Statistical Analysis": "تحلیل آماری",
    "Genetic Algorithm": "الگوریتم ژنتیک",
    "Invasive Weed Optimization (IWO)": "بهینه‌سازی علف‌های هرز مهاجم (IWO)",
    "Imperialist Competitive Algorithm (ICA)": "الگوریتم رقابت استعماری (ICA)",

    /* Automation / embedded */
    "MODERN INDUSTRIAL PNEUMATICS": "پنوماتیک صنعتی مدرن",
    "ADVANCED PNEUMATICS": "پنوماتیک پیشرفته",
    "MODERN INDUSTRIAL HYDRAULICS": "هیدرولیک صنعتی مدرن",
    "MASTERING MOBILE HYDRAULICS": "هیدرولیک متحرک پیشرفته",
    "PROPORTIONAL HYDRAULICS": "هیدرولیک تناسبی",
    "MAINTENANCE AND TROUBLES SHOOTING OF HYDRAULICS SYSTEM": "نگهداری و عیب‌یابی سیستم‌های هیدرولیک",
    "PRINCIPLES OF INDUSTRIAL MEASUREMENT AND INSTRUMENTATION": "اصول اندازه‌گیری و ابزار دقیق صنعتی",
    "BASIC PRINCIPLES OF SENSOR TECHNOLOGY FOR PROFESSIONAL TRAINING": "اصول پایه فناوری حسگر برای آموزش حرفه‌ای",
    "BASIC PROGRAMMING OF PLCs": "برنامه‌نویسی مقدماتی PLCها",
    "AVR Microcontrollers": "میکروکنترلرهای AVR",
    "Arduino Boards": "بردهای Arduino",
    "Raspberry-Pi Mini Computers": "مینی‌کامپیوترهای Raspberry Pi",

    /* Mathematics */
    "Introduction to Mathematical Analysis": "مقدمه‌ای بر آنالیز ریاضی",
    "Probability 1": "احتمال 1",
    "Linear Algebra": "جبر خطی",
    "Numerical Methods in Linear Algebra": "روش‌های عددی در جبر خطی",
    "Number Theory": "نظریه اعداد",
    "Real Analysis": "آنالیز حقیقی",
    "Complex Functions": "توابع مختلط",
    "General Topology": "توپولوژی عمومی",
    "Combinations Theory": "نظریه ترکیبیات",
    "Algebraic Structures": "ساختارهای جبری",
    "Theory of Moduli (Advanced Algebra)": "نظریه مدول‌ها (جبر پیشرفته)",
    "Riemannian Geometry": "هندسه ریمانی",
    "Groups and Graphs Theory": "نظریه گروه‌ها و گراف‌ها",
    "Finsler Geometry": "هندسه فینسلر",
    "Commutative Algebra": "جبر جابجایی",
    "Permutation Groups": "گروه‌های جایگشتی",
    "Noncommutative Ring in Algebra": "حلقه‌های ناجابجایی در جبر",

    /* Chemistry / chemical engineering */
    "Introduction to Genetic Science": "مقدمه‌ای بر علم ژنتیک",
    "Mass Transfer": "انتقال جرم",
    "Material and Energy Balance": "موازنه ماده و انرژی",
    "Introduction to Chemical Engineering": "مقدمه‌ای بر مهندسی شیمی",
    "Unit Operation (I)": "عملیات واحد (I)",
    "Unit Operation (II)": "عملیات واحد (II)",
    "Organic Chemistry (I)": "شیمی آلی (I)",
    "Organic Chemistry (II)": "شیمی آلی (II)",
    "Organic Chemistry (III)": "شیمی آلی (III)",
    "Inorganic Chemistry (I)": "شیمی معدنی (I)",
    "Inorganic Chemistry (II)": "شیمی معدنی (II)",
    "Physics Chemistry (I)": "شیمی فیزیک (I)",
    "Physics Chemistry (II)": "شیمی فیزیک (II)",
    "Physics Chemistry (III)": "شیمی فیزیک (III)",
    "Analytical Chemistry (I)": "شیمی تجزیه (I)",
    "Analytical Chemistry (II)": "شیمی تجزیه (II)",
    "Synthesis in Organic Chemistry": "سنتز در شیمی آلی",
    "Organometallic Chemistry": "شیمی آلی‌فلزی",
    "Advanced Organic Chemistry (Reactions, Mechanism and Structure)": "شیمی آلی پیشرفته (واکنش‌ها، مکانیزم و ساختار)",
    "Identification of Organic Compounds": "شناسایی ترکیبات آلی",
    "New Methods of Synthesis of Organic Compounds": "روش‌های نوین سنتز ترکیبات آلی",
    "Photo-Catalytic Reaction Engineering": "مهندسی واکنش‌های فتوکاتالیستی",
    "Chemical Reaction Engineering": "مهندسی واکنش‌های شیمیایی",
    "Structure of Fuel Cells": "ساختار پیل‌های سوختی",
    "Solid Oxide Fuel Cells (SOFC)": "پیل‌های سوختی اکسید جامد (SOFC)",
    "Lithium Batteries": "باتری‌های لیتیومی",
    "Process Control in Chemical Engineering": "کنترل فرایند در مهندسی شیمی",
    "Spectroscopy in Organic Chemistry": "طیف‌سنجی در شیمی آلی",
    "Design and Fabrication of Fluidized-Bed Reactor": "طراحی و ساخت راکتور بستر سیال",
    "Infrared (IR) Spectroscopy": "طیف‌سنجی فروسرخ (IR)",

    /* Other */
    "Photography": "عکاسی",
    "Music Theory": "تئوری موسیقی",
    "War in the Modern World": "جنگ در جهان مدرن"
  }));

  const replacements = [
    [/\(\+ Online Course\)/g, "(+ دوره آنلاین)"],
    [/\bIn Progress\b/g, "در حال یادگیری"],
    [/\bCourse thumbnail\b/g, "تصویر دوره"],
    [/\bprofile photo\b/gi, "عکس پروفایل"],
    [/\bOpen navigation menu\b/g, "باز کردن منوی ناوبری"],
    [/\bMain navigation\b/g, "ناوبری اصلی"],
    [/\bBack to top\b/g, "بازگشت به بالا"],
    [/\bLanguage switcher\b/g, "انتخاب زبان"],
    [/Reference:\s*A course by FaraDars E-Learning/gi, "مرجع: دوره‌ای از فرادرس"],
    [/Reference:\s*An Introductory Course by FaraDars E-Learning/gi, "مرجع: یک دوره مقدماتی از فرادرس"],
    [/Reference:\s*A Course by Udemy E-Learning/gi, "مرجع: دوره‌ای از یودمی"],
    [/Reference:\s*A course by Udemy E-Learning/gi, "مرجع: دوره‌ای از یودمی"],
    [/Reference:\s*A Course by limoonad website/gi, "مرجع: دوره‌ای از وب‌سایت لیموناد"],
    [/Reference:\s*A course by/gi, "مرجع: دوره‌ای از"],
    [/Reference:\s*An Introductory Course by/gi, "مرجع: یک دوره مقدماتی از"],
    [/Reference:\s*A course at Sharif University of Technology/gi, "مرجع: یک دوره در دانشگاه صنعتی شریف"],
    [/Reference:\s*A course at Worcester Polytechnique Institute \(Graduate Course\)/gi, "مرجع: یک درس تحصیلات تکمیلی در مؤسسه پلی‌تکنیک وُستر"],
    [/Reference:\s*A course at Iran University of Science and Technology/gi, "مرجع: یک دوره در دانشگاه علم و صنعت ایران"],
    [/Reference:\s*A 3 days workshop at educational center of FESTO Company/gi, "مرجع: کارگاه سه‌روزه در مرکز آموزشی شرکت FESTO"],
    [/Reference:\s*A 2 days workshop at educational center of FESTO Company/gi, "مرجع: کارگاه دوروزه در مرکز آموزشی شرکت FESTO"],
    [/Reference:\s*A video lecture from youtue \(click on the link\)/gi, "مرجع: یک سخنرانی ویدیویی از یوتیوب (روی لینک کلیک کنید)"],
    [/Reference:\s*many courses by lots of E-Learning platforms/gi, "مرجع: دوره‌های متعدد از پلتفرم‌های آموزش آنلاین"],
    [/Reference:\s*Entire of Ebook/gi, "مرجع: تمام کتاب الکترونیکی"],
    [/Reference:\s*Chapter 1 to 8 of Ebook/gi, "مرجع: فصل‌های ۱ تا ۸ کتاب الکترونیکی"],
    [/Reference:\s*First half of Ebook/gi, "مرجع: نیمه نخست کتاب الکترونیکی"],
    [/Reference:\s*Second half of Ebook/gi, "مرجع: نیمه دوم کتاب الکترونیکی"],
    [/References?:/gi, "مرجع:"]
  ];

  function normalizeLookupText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function translateCore(core) {
    if (!core) return core;

    // index.html intentionally formats many paragraphs across several lines.
    // Normalize internal whitespace before dictionary lookup so a sentence is
    // translated regardless of indentation/newlines in the canonical source.
    const normalized = normalizeLookupText(core);
    if (T.has(normalized)) return T.get(normalized);

    // Handle course-title/status combinations whether the source keeps the
    // arrow/status in the same text node or splits it into nested elements.
    const progressMatch = normalized.match(/^(.*?)\s*→\s*In Progress$/i);
    if (progressMatch) {
      const title = progressMatch[1].trim();
      return `${T.get(title) || title} ← در حال یادگیری`;
    }

    const arrowMatch = normalized.match(/^(.*?)(\s*→\s*)$/);
    if (arrowMatch) {
      const title = arrowMatch[1].trim();
      if (T.has(title)) return `${T.get(title)} ← `;
    }

    let result = core;
    replacements.forEach(([pattern, value]) => {
      result = result.replace(pattern, value);
    });

    // Translate the name when it appears as part of a larger UI string, such
    // as the copyright footer or image alternative text.
    result = result.replace(/Abolfazl Mohammadijoo/g, "ابوالفضل محمدی‌جو");
    return result;
  }

  function translateTextNode(node) {
    const raw = node.nodeValue;
    if (!raw || !raw.trim()) return;
    const parent = node.parentElement;
    if (!parent || /^(SCRIPT|STYLE|CODE|PRE|TEXTAREA)$/i.test(parent.tagName)) return;

    const leading = raw.match(/^\s*/)?.[0] || "";
    const trailing = raw.match(/\s*$/)?.[0] || "";
    const core = raw.trim();
    const translated = translateCore(core);
    if (translated !== core) node.nodeValue = leading + translated + trailing;
  }

  function translateAttributes(root) {
    const attrNames = ["aria-label", "title", "alt"];
    root.querySelectorAll("*").forEach((el) => {
      attrNames.forEach((name) => {
        if (!el.hasAttribute(name)) return;
        const current = el.getAttribute(name);
        const next = translateCore(current);
        if (next !== current) el.setAttribute(name, next);
      });
    });
  }

  function markRequestedEnglishLtrText(root) {
    const publicationLine = "Published in World Academy of Science, Engineering and Technology, International Journal of Mechanical and Mechatronics Engineering , Vol. 17, No. 5, 2023.";

    root.querySelectorAll("p, div, span").forEach((el) => {
      if (normalizeLookupText(el.textContent) !== publicationLine) return;
      el.classList.add("preserve-english-ltr");
      el.setAttribute("dir", "ltr");
      el.setAttribute("lang", "en");
    });
  }

  function localize(root = document.body) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateTextNode);
    translateAttributes(root);
    markRequestedEnglishLtrText(root);

    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.body.dir = "rtl";

    const mobileBrand = document.querySelector(".mobile-brand");
    if (mobileBrand) mobileBrand.textContent = "ابوالفضل محمدی‌جو";

    const heroName = document.querySelector("#home .hero-content h2 span");
    const heroHeading = heroName?.parentElement;
    if (heroName && heroHeading) {
      heroName.textContent = "ابوالفضل محمدی‌جو";
      heroHeading.replaceChildren(
        document.createTextNode("سلام، من "),
        heroName,
        document.createTextNode(" هستم.")
      );
    }

    // Ensure the FA language control reflects the active page after main.js
    // dynamically creates the language selector.
    document.querySelectorAll(".language-flag").forEach((link) => {
      link.classList.toggle("active", /index-fa\.html/.test(link.getAttribute("href") || ""));
    });
  }

  window.localizePortfolioToPersian = localize;
  localize();
})();
