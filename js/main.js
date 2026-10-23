/**
 * Portfolio JavaScript
 * Alireza Karimiyan - Full-Stack Developer & Project Manager
 * Handles: i18n (FA/EN), Theme (Dark/Light), Typewriter, Scrollspy, Mobile Drawer, and Animations.
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────────────────────
     1. i18n DICTIONARY (Persian & English)
     ───────────────────────────────────────────────────────────────────────── */
  const translations = {
    fa: {
      title: 'علیرضا کریمیان | توسعه‌دهنده ارشد فول‌استک — Angular و C# .NET Core',
      name: 'علیرضا کریمیان',
      'profileCard.role': 'توسعه‌دهنده ارشد فول‌استک و مدیر پروژه',
      'nav.about': 'درباره من',
      'nav.experience': 'سوابق کاری',
      'nav.skills': 'مهارت‌ها',
      'nav.projects': 'پروژه‌ها',
      'nav.faq': 'سوالات متداول',
      'nav.contact': 'تماس',
      'nav.print': 'چاپ (PDF)',
      'hero.eyebrow': 'توسعه‌دهنده ارشد فول‌استک و سرپرست تیم‌های فنی',
      'hero.greeting': 'علیرضا کریمیان',
      'hero.tagline': 'معماری و توسعه سامانه‌های مقیاس‌پذیر سازمانی با C# .NET Core و Angular',
      'hero.location': 'مستقر در تبریز / تهران • در دسترس برای همکاری حضوری، هایبرید و دورکاری سراسر کشور / بین‌المللی',
      'hero.bio': 'مهندس نرم‌افزار با ۵ سال تجربه در طراحی و پیاده‌سازی سامانه‌های بزرگ‌مقیاس، و ۴ سال سابقه هدایت فنی تیم‌های چابک (Scrum) در پروژه‌های دولتی و صنعتی. دانش‌آموخته کارشناسی ارشد مهندسی نرم‌افزار از دانشگاه تبریز با معدل ممتاز ۱۷.۲۷.',
      'hero.ctaProjects': 'مشاهده پروژه‌ها',
      'hero.ctaContact': 'تماس و همکاری',
      'hero.ctaPrint': 'چاپ رزومه (PDF)',
      'print.title': 'توسعه‌دهنده ارشد فول‌استک (Angular و C# .NET Core) و مدیر پروژه نرم‌افزار',
      'print.emailLabel': 'ایمیل:',
      'print.telegramLabel': 'تلگرام:',
      'print.githubLabel': 'گیت‌هاب:',
      'print.linkedinLabel': 'لینکدین:',
      'print.eduLabel': 'تحصیلات:',
      'about.badge': 'درباره من',
      'about.title': 'رویکرد مهندسی و سوابق حرفه‌ای',
      'about.subtitle': 'هم‌افزایی تخصص عمیق مهندسی نرم‌افزار با رهبری نظام‌مند چابک در سامانه‌های مقیاس‌پذیر',
      'about.bio': 'تمرکز من بر طراحی و پیاده‌سازی نرم‌افزارهای سازمانی با رعایت استانداردهای Clean Architecture، الگوی دامنه-محور، و توسعه کدهای پایدار و تست‌پذیر است. در طول ۵ سال گذشته به عنوان توسعه‌دهنده فول‌استک و ۴ سال به عنوان مدیر پروژه، هدایت سامانه‌های ملی را با متدولوژی Scrum و فرهنگ مسئولیت‌پذیری فنی بر عهده داشته‌ام.',
      'about.stat1Num': '+۵',
      'about.stat1': 'سال سابقه مهندسی نرم‌افزار',
      'about.stat2Num': '۴',
      'about.stat2': 'سال مدیریت پروژه چابک (Scrum)',
      'about.stat3Num': '۵',
      'about.stat3': 'سامانه سازمانی و کشوری',
      'about.eduDegree': 'کارشناسی ارشد مهندسی نرم‌افزار',
      'about.eduSchool': 'دانشگاه تبریز (University of Tabriz)',
      'about.eduGpa': 'معدل کل: ۱۷.۲۷ از ۲۰',
      'about.eduDesc': 'تمرکز پژوهشی بر ارزیابی کارایی سیستم‌ها، معماری نرم‌افزارهای توزیع‌شده و متدولوژی‌های نوین مهندسی نرم‌افزار.',
      'exp.badge': 'مسیر حرفه‌ای',
      'exp.title': 'سوابق کاری',
      'exp.subtitle': 'تجربه هدایت تیم‌ها و تولید نرم‌افزارهای پیچیده در مقیاس ملی',
      'exp.role1Title': 'مدیر پروژه (Project Manager)',
      'exp.role1Dates': '۴ سال سابقه مدیریت پروژه',
      'exp.role1Meta': 'هدایت تیم‌های چابک و تحویل سامانه‌های دولتی و صنعتی',
      'exp.role1Desc': 'مدیریت جامع چرخه حیات نرم‌افزار (SDLC) با استانداردهای اسکرام (Scrum) در پروژه‌های کلیدی بخش دولتی و صنعتی. مسئولیت برنامه‌ریزی اسپرینت‌ها، تحلیل نیازمندی‌ها، مدیریت ریسک‌ها و تحویل به‌موقع محصولات.',
      'exp.role1Point1': 'رهبری طراحی و پیاده‌سازی بخش آزمون آنلاین پلتفرم ملی مهارت‌آموزی فنی و حرفه‌ای کشور.',
      'exp.role1Point2': 'مدیریت توسعه سامانه جامع مالی شرکت کشت و صنعت و دامپروری مغان از فاز معماری تا استقرار.',
      'exp.role1Point3': 'مدیریت فرایند صفر تا صد آزمون سراسری طرح تربیت ۵۰۰ مدیر جوان و کارآمد در بستر وب.',
      'exp.role2Title': 'توسعه‌دهنده فول‌استک (Full-Stack Developer)',
      'exp.role2Dates': '۵ سال سابقه توسعه نرم‌افزار',
      'exp.role2Meta': 'Angular | C# .NET Core | SQL Server | Clean Architecture',
      'exp.role2Desc': 'طراحی و کدنویسی ماژول‌های اساسی، پیاده‌سازی وب‌سرویس‌های RESTful و طراحی بهینه ساختارهای پایگاه داده برای راهکارهای پرترافیک سازمانی با رعایت اصول Clean Code و الگوهای طراحی استاندارد.',
      'exp.role2Point1': 'توسعه ماژول انبارداری و مدیریت گردش موجودی شرکت فرآورده‌های نفتی با کارایی و اطمینان بالا.',
      'exp.role2Point2': 'توسعه بخش‌ها و ماژول‌های کلیدی در سامانه ملی اداره استخدامی با رابط کاربری واکنش‌گرا و داده‌های حساس.',
      'skills.badge': 'جعبه ابزار تخصصی',
      'skills.title': 'مهارت‌های تخصصی',
      'skills.subtitle': 'تسلط بر پشته‌های توسعه مدرن و شیوه‌های مهندسی کارآمد',
      'skills.backend': 'بک‌اند (Backend)',
      'skills.frontend': 'فرانت‌اند (Frontend)',
      'skills.database': 'پایگاه داده و گزارش‌گیری',
      'skills.other': 'ابزارها و متدولوژی',
      'projects.badge': 'کارنامه عملیاتی',
      'projects.title': 'پروژه‌های شاخص سازمانی',
      'projects.subtitle': 'سامانه‌های در مقیاس ملی و صنعتی با تحلیل نیازمندی، معماری مهندسی و سنجه‌های عملکردی',
      'projects.rolePm': 'مدیر پروژه و سرپرست فنی',
      'projects.roleDev': 'توسعه‌دهنده ارشد فول‌استک',
      'projects.ndaBadge': 'سامانه درون‌سازمانی (محافظت‌شده / تحت قرارداد NDA)',
      'projects.challengeLabel': 'چالش مهندسی:',
      'projects.solutionLabel': 'معماری و راه‌حل:',
      'projects.impactLabel': 'دستاورد و سنجه‌ها:',
      'projects.p1Title': 'بخش آزمون پلتفرم ملی مهارت‌آموزی فنی و حرفه‌ای',
      'projects.p1Desc': 'هدایت فرایند طراحی و تحویل کامل ماژول آزمون آنلاین در پلتفرم کشوری مهارت‌آموزی فنی و حرفه‌ای جهت برگزاری آزمون‌های بزرگ مقیاس.',
      'projects.p1Challenge': 'مدیریت ترافیک ناگهانی و بار هم‌زمان ده‌ها هزار کاربر بدون اختلال در ثبت آزمون‌ها و جلوگیری از هرگونه Race Condition در پاسخنامه‌ها.',
      'projects.p1Solution': 'طراحی معماری توزیع‌شده با C# .NET Core و Angular، تفکیک بار با In-Memory Caching و پردازش غیرهم‌زمان درخواست‌های ثبت آزمون.',
      'projects.p1Impact': 'ظرفیت سرویس‌دهی بیش از ۵۰,۰۰۰ داوطلب هم‌زمان، پایداری ۹۹.۹۸٪ و بدون از دست رفتن حتی یک پاسخنامه در سراسر کشور.',
      'projects.p1Metric1': '۵۰,۰۰۰+ داوطلب هم‌زمان',
      'projects.p1Metric2': '۹۹.۹۸٪ پایداری سامانه',
      'projects.p2Title': 'سامانه مالی کشت و صنعت و دامپروری مغان',
      'projects.p2Desc': 'مدیریت توسعه سامانه جامع حسابداری و مالی برای یکی از عظیم‌ترین مجتمع‌های کشت و صنعت و دامپروری کشور.',
      'projects.p2Challenge': 'یکپارچه‌سازی فرآیندهای مالی چند دپارتمان عظیم صنعتی، محاسبه بهای تمام‌شده و گزارش‌های سنگین ترازنامه با قابلیت پیگیری حسابرسی دقیق.',
      'projects.p2Solution': 'طراحی معماری چندلایه Clean Architecture با C# .NET Core، مدل داده و ایندکس‌گذاری پیشرفته در SQL Server و موتور گزارش‌ساز Stimulsoft.',
      'projects.p2Impact': 'کاهش ۴۰٪ زمان صدور گزارش‌های تلفیقی ماهانه و ثبت مطمئن بیش از ۱۰۰,۰۰۰ سند مالی و تراکنش حسابداری سالانه.',
      'projects.p2Metric1': '۱۰۰K+ سند مالی سالانه',
      'projects.p2Metric2': '۴۰٪ تسریع گزارش‌گیری',
      'projects.p3Title': 'سامانه انبارداری شرکت فرآورده‌های نفتی',
      'projects.p3Desc': 'توسعه و برنامه‌نویسی تخصصی ماژول‌های انبارداری، مدیریت کنترل موجودی، ردیابی کالا و گزارش‌های آماری دقیق.',
      'projects.p3Challenge': 'نیاز به ثبت بلادرنگ ورود و خروج محموله‌ها در انبارهای استراتژیک، حذف خطاهای مغایرت انبار و استعلام لحظه‌ای موجودی.',
      'projects.p3Solution': 'پیاده‌سازی Web APIهای بهینه با C# .NET Core، مدل تراکنش‌های ACID و ایندکس‌گذاری پیشرفته در SQL Server و گزارش‌های Stimulsoft.',
      'projects.p3Impact': 'زمان بازیابی گزارشات انبار زیر ۳۰۰ میلی‌ثانیه و حذف کامل مغایرت‌های محاسباتی در اسناد ورود و خروج کالا.',
      'projects.p3Metric1': '< ۳۰۰ms زمان استعلام',
      'projects.p3Metric2': 'تطابق ۱۰۰٪ اسناد انبار',
      'projects.p4Title': 'سامانه اداره استخدامی',
      'projects.p4Desc': 'توسعه ماژول‌های اساسی سامانه استخدامی و فرایند گزینش اداری در مقیاس نهادهای دولتی با امنیت بالا.',
      'projects.p4Challenge': 'پردازش امن و محرمانه هزاران پرونده استخدامی داوطلبان، گردش کار چندمرحله‌ای ارزیابی و مصاحبه‌ها با دسترسی‌های چندسطحی (RBAC).',
      'projects.p4Solution': 'پیاده‌سازی رابط کاربری پویا و واکنش‌گرا با Angular و TypeScript، کنترل دسترسی مبتنی بر نقش و خدمات امنیتی ماژولار C# .NET.',
      'projects.p4Impact': 'افزایش ۵۰ درصدی سرعت بررسی و گردش کار پرونده‌ها در دپارتمان منابع انسانی و تسهیل فرآیند ثبت و ارزیابی مصاحبه‌ها.',
      'projects.p4Metric1': '۵۰٪ تسریع گردش پرونده‌ها',
      'projects.p4Metric2': 'احراز هویت و RBAC امن',
      'projects.p5Title': 'سامانه آزمون طرح «تربیت ۵۰۰ مدیر جوان و کارآمد»',
      'projects.p5Desc': 'مدیریت کلیدی فرایند برگزاری آزمون آنلاین کشوری در سطح کلان، تحلیل داده‌های آزمون و ارزیابی شایستگی‌ها.',
      'projects.p5Challenge': 'حساسیت فوق‌العاده بالا در سلامت آزمون کشوری، تضمین امانت‌داری سوالات و پاسخ‌ها و جلوگیری از قطع ارتباط کاربران حین آزمون.',
      'projects.p5Solution': 'مدیریت فرآیند زمان‌بندی دقیق اسپرینت‌ها، تست استرس و بار پیش از آزمون، ذخیره‌سازی خودکار پاسخ‌ها (Auto-Save) و مانیتورینگ زنده.',
      'projects.p5Impact': 'برگزاری بدون نقص و صفر ثانیه قطعی در آزمون کشوری، و صدور فوری و خودکار کارنامه‌های سنجش شایستگی بلافاصله پس از اتمام.',
      'projects.p5Metric1': '۱۰۰٪ پایداری در روز آزمون',
      'projects.p5Metric2': 'کارنامه فوری و خودکار',
      'faq.badge': 'پرسش‌های تخصصی',
      'faq.title': 'پرسش‌های متداول کارفرمایان و مدیران فنی',
      'faq.subtitle': 'پاسخ به سوالات کلیدی درباره محرمانگی پروژه‌ها، معماری نرم‌افزار، مقیاس‌پذیری و نحوه همکاری',
      'faq.q1': 'چرا برای پروژه‌های سازمانی لینک مستقیم به سورس‌کد عمومی یا نسخه زنده وجود ندارد؟',
      'faq.a1': 'پروژه‌های شاخص معرفی‌شده (نظیر پلتفرم ملی مهارت‌آموزی، سامانه مالی مغان و انبارداری فرآورده‌های نفتی) متعلق به نهادهای دولتی و شرکت‌های کلان صنعتی کشور هستند. طبق قراردادهای محرمانگی (NDA) و ضوابط حاکمیت داده، این سامانه‌ها روی شبکه‌های امن اینترانت یا سرورهای خصوصی سازمانی مستقرند. با این وجود، در جلسات ارزیابی فنی، امکان بررسی دیاگرام‌های معماری، الگوهای کدنویسی، تصمیمات مهندسی و شیوه‌های حل چالش‌ها به طور کامل وجود دارد.',
      'faq.q2': 'ترکیب هم‌زمان نقش توسعه‌دهنده ارشد فول‌استک و مدیر پروژه چه مزیتی ایجاد می‌کند؟',
      'faq.a2': 'شناخت عمیق از جزئیات کدنویسی بک‌اند (.NET Core)، فرانت‌اند (Angular) و پایگاه داده در کنار تجربه اسکرام، باعث می‌شود برآورد زمان اسپرینت‌ها بر مبنای واقعیت فنی باشد، بدهی فنی (Technical Debt) به حداقل برسد و ارتباط بین تیم فنی و کارفرما شفاف و بدون اصطکاک باشد.',
      'faq.q3': 'در سامانه‌های با ترافیک و هم‌روندی بالا (High Concurrency) از چه الگوهایی استفاده می‌کنید؟',
      'faq.a3': 'برای حفظ پایداری سامانه‌هایی مانند آزمون‌های سراسری: استفاده از معماری لایه‌بندی‌شده Clean Architecture، کشینگ هوشمند در حافظه (In-Memory Caching)، پردازش‌های ناهمگام (Async/Await) و صف‌بندی عملیات حجیم، بهینه‌سازی دقیق ایندکس‌ها و Execution Plan در SQL Server، و در فرانت‌اند بهره‌گیری از استراتژی OnPush و Lazy Loading در Angular.',
      'faq.q4': 'در زمینه پایگاه داده و سامانه‌های گزارش‌گیری سازمانی چه تجاربی دارید؟',
      'faq.a4': 'تسلط کامل بر طراحی ساختار داده رابطه‌ای، نرمال‌سازی، تراکنش‌های مالی ACID، پروسیجرهای پیچیده T-SQL و بهینه‌سازی کوئری در SQL Server، در کنار تجربه کار با PostgreSQL و SQLite. همچنین تسلط بر موتور قدرتمند Stimulsoft Reporting جهت تولید کارنامه‌ها، ترازنامه‌های مالی و گزارش‌های تحلیلی لحظه‌ای.',
      'faq.q5': 'نحوه همکاری و ارتباط کاری با شما به چه صورت است؟',
      'faq.a5': 'آماده همکاری در پروژه‌های نرم‌افزاری بزرگ، موقعیت‌های شغلی تمام‌وقت یا مشاوره تخصصی در حوزه معماری و مدیریت فنی پروژه‌ها. سریع‌ترین روش‌های برقراری ارتباط، ارسال ایمیل به alirezakn2000@gmail.com و ارتباط در تلگرام از طریق شناسه @silence_a_z است.',
      'contact.badge': 'همکاری و ارتباط',
      'contact.title': 'بیایید با هم در ارتباط باشیم',
      'contact.desc': 'اگر به دنبال همکاری در پروژه‌های نرم‌افزاری مقیاس‌پذیر، مدیریت فنی پروژه‌ها یا نیاز به مشاوره فنی دارید، بسیار خوشحال می‌شوم با من در تماس باشید.',
      'contact.geo': 'مستقر در تبریز و تهران • همکاری حضوری، هایبرید و دورکاری (Remote) در سراسر کشور و بین‌المللی',
      'footer.rights': 'تمامی حقوق محفوظ است.'
    },
    en: {
      title: 'Alireza Karimiyan | Senior Full-Stack Developer — Angular & C# .NET Core',
      name: 'Alireza Karimiyan',
      'profileCard.role': 'Senior Full-Stack Developer & Project Manager',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'nav.print': 'Print (PDF)',
      'hero.eyebrow': 'Senior Full-Stack Developer & Technical Lead',
      'hero.greeting': 'Alireza Karimiyan',
      'hero.tagline': 'Engineering Scalable Enterprise Systems with C# .NET Core & Angular',
      'hero.location': 'Based in Tabriz / Tehran, Iran • Available for On-site, Hybrid & Remote Worldwide',
      'hero.bio': 'Software engineer with 5 years of experience architecting large-scale distributed systems and 4 years of Agile/Scrum technical leadership across high-impact public and enterprise sectors. M.Sc. in Software Engineering from the University of Tabriz (GPA 17.27/20).',
      'hero.ctaProjects': 'View Projects',
      'hero.ctaContact': 'Contact Me',
      'hero.ctaPrint': 'Print Resume (PDF)',
      'print.title': 'Senior Full-Stack Developer (Angular & C# .NET Core) & Project Manager',
      'print.emailLabel': 'Email:',
      'print.telegramLabel': 'Telegram:',
      'print.githubLabel': 'GitHub:',
      'print.linkedinLabel': 'LinkedIn:',
      'print.eduLabel': 'Education:',
      'about.badge': 'Profile',
      'about.title': 'Engineering Philosophy & Background',
      'about.subtitle': 'Combining deep full-stack engineering expertise with structured Agile SDLC leadership',
      'about.bio': 'My engineering focus centers on architecting resilient enterprise software adhering to Clean Architecture, domain-driven design, and testable code. Over 5 years of software engineering and 4 years of Agile Project Management, I have delivered nationwide mission-critical platforms with Scrum discipline and engineering ownership.',
      'about.stat1Num': '5+',
      'about.stat1': 'Years Software Engineering',
      'about.stat2Num': '4',
      'about.stat2': 'Years Agile Project Leadership',
      'about.stat3Num': '5',
      'about.stat3': 'Major Enterprise Systems',
      'about.eduDegree': 'M.Sc. in Software Engineering',
      'about.eduSchool': 'University of Tabriz',
      'about.eduGpa': 'GPA: 17.27 / 20',
      'about.eduDesc': 'Academic focus on distributed systems, software performance analysis, and modern scalable system architecture.',
      'exp.badge': 'Career Journey',
      'exp.title': 'Work Experience',
      'exp.subtitle': 'Proven record of leading teams and engineering mission-critical applications',
      'exp.role1Title': 'Project Manager',
      'exp.role1Dates': '4 Years Project Management',
      'exp.role1Meta': 'Agile Team Leadership & Enterprise System Delivery',
      'exp.role1Desc': 'Managed end-to-end Software Development Life Cycle (SDLC) using Scrum across major government and industrial projects. Led sprint planning, requirements engineering, risk mitigation, and timely delivery.',
      'exp.role1Point1': 'Led design and delivery of the online examination module of the National Technical & Vocational Skills-Training Platform.',
      'exp.role1Point2': 'Managed the development of a comprehensive financial system for Moghan Agro-Industry & Livestock Co.',
      'exp.role1Point3': 'Managed the end-to-end large-scale examination process for the "Training 500 Young & Efficient Managers" scheme.',
      'exp.role2Title': 'Full-Stack Developer',
      'exp.role2Dates': '5 Years Development Experience',
      'exp.role2Meta': 'Angular | C# .NET Core | SQL Server | Clean Architecture',
      'exp.role2Desc': 'Designed and implemented core modules, high-performance RESTful APIs, and relational schemas for high-load systems while strictly adhering to Clean Code and architectural best practices.',
      'exp.role2Point1': 'Developed the warehousing and inventory management module for the Oil Products Distribution Company.',
      'exp.role2Point2': 'Developed critical recruitment and applicant tracking modules for the government Employment Administration System.',
      'skills.badge': 'Capabilities',
      'skills.title': 'Technical Skills',
      'skills.subtitle': 'Modern technology stack powering mission-critical digital products',
      'skills.backend': 'Backend',
      'skills.frontend': 'Frontend',
      'skills.database': 'Database & Reporting',
      'skills.other': 'Tools & Methodology',
      'projects.badge': 'Track Record',
      'projects.title': 'Featured Enterprise Projects',
      'projects.subtitle': 'Nationwide enterprise platforms delivered with architectural rigor and quantified performance',
      'projects.rolePm': 'Project Manager & Tech Lead',
      'projects.roleDev': 'Senior Full-Stack Developer',
      'projects.ndaBadge': 'Enterprise System (NDA Protected / On-Premise)',
      'projects.challengeLabel': 'Engineering Challenge:',
      'projects.solutionLabel': 'Architecture & Solution:',
      'projects.impactLabel': 'Impact & Metrics:',
      'projects.p1Title': 'Skills-Training Exam Platform',
      'projects.p1Desc': 'Led design and delivery of the online examination module of a national technical & vocational skills-training platform.',
      'projects.p1Challenge': 'Handling severe traffic spikes and concurrency with tens of thousands of simultaneous test-takers while guaranteeing zero data loss.',
      'projects.p1Solution': 'Engineered a distributed architecture using .NET Core and Angular with layered in-memory caching and asynchronous queue processing.',
      'projects.p1Impact': 'Successfully sustained 50,000+ concurrent examinees with 99.98% uptime and zero submission loss nationwide.',
      'projects.p1Metric1': '50K+ Concurrent Users',
      'projects.p1Metric2': '99.98% Uptime',
      'projects.p2Title': 'Moghan Agro-Industry Financial System',
      'projects.p2Desc': 'Managed development of a comprehensive financial system for one of Iran’s largest agro-industrial & livestock companies.',
      'projects.p2Challenge': 'Consolidating financial workflows across multiple massive agro-industrial divisions with audit-proof tracking.',
      'projects.p2Solution': 'Implemented Domain-Centric Clean Architecture in .NET Core, highly indexed SQL Server schemas, and Stimulsoft reporting pipelines.',
      'projects.p2Impact': 'Reduced month-end reporting time by 40% and reliably processed 100,000+ annual financial transactions.',
      'projects.p2Metric1': '100K+ Annual Vouchers',
      'projects.p2Metric2': '40% Faster Reporting',
      'projects.p3Title': 'Warehouse Management System (Oil Products)',
      'projects.p3Desc': 'Developed the warehousing, inventory movement, and advanced reporting modules for the Oil Products Distribution Company.',
      'projects.p3Challenge': 'Zero tolerance for inventory discrepancies in bulk fuel depots with sub-second response times on massive transactional ledgers.',
      'projects.p3Solution': 'Implemented high-throughput C# .NET Core Web APIs, fine-tuned SQL Server execution plans, and parameterized reporting pipelines.',
      'projects.p3Impact': 'Sub-300ms query retrieval on complex stock queries and zero calculated stock discrepancies.',
      'projects.p3Metric1': '< 300ms Query Latency',
      'projects.p3Metric2': '100% Audit Reconciled',
      'projects.p4Title': 'Employment Administration System',
      'projects.p4Desc': 'Developed key modules and administrative workflows of a government recruitment administration system.',
      'projects.p4Challenge': 'Maintaining strict confidentiality of applicant records, complex evaluation rubrics, and a snappy, responsive applicant management UX.',
      'projects.p4Solution': 'Developed dynamic Angular and TypeScript components with strict RBAC authorization and hardened .NET backend services.',
      'projects.p4Impact': 'Accelerated applicant evaluation turnaround by 50% across departmental recruitment committees.',
      'projects.p4Metric1': '50% Faster Workflow',
      'projects.p4Metric2': 'Hardened RBAC Security',
      'projects.p5Title': '"Training 500 Young Managers" Exam System',
      'projects.p5Desc': 'Managed the end-to-end large-scale online examination process, score analytics, and competency assessment.',
      'projects.p5Challenge': 'High-stakes executive selection requiring fail-safe session persistence, uninterrupted connectivity resilience, and instant grading.',
      'projects.p5Solution': 'Led technical sprints, pre-flight load stress simulations, client-side auto-save synchronization, and live session monitoring.',
      'projects.p5Impact': 'Flawless test delivery with zero downtime and automated psychometric and technical score generation upon test completion.',
      'projects.p5Metric1': '100% Zero Downtime',
      'projects.p5Metric2': 'Instant Automated Scoring',
      'faq.badge': 'Technical FAQ',
      'faq.title': 'Frequently Asked Engineering Questions',
      'faq.subtitle': 'Insights on project confidentiality, architectural decisions, high concurrency, and collaboration models',
      'faq.q1': 'Why are there no public repository or live demo links for these projects?',
      'faq.a1': 'These systems were developed for major governmental bodies and industrial enterprises. Under strict Non-Disclosure Agreements (NDAs) and corporate cybersecurity policies, internal codebases and live portals reside on private enterprise intranets. However, during technical interviews, in-depth architectural walkthroughs, design patterns, and engineering trade-offs can be discussed extensively.',
      'faq.q2': 'How does combining Senior Full-Stack Engineering with Scrum Project Management benefit a team?',
      'faq.a2': 'Practical mastery of Angular, C# .NET Core, and relational database internals combined with Agile leadership eliminates the traditional gap between management and developers. It ensures realistic sprint estimations, early detection of architectural bottlenecks, minimized technical debt, and frictionless communication between business stakeholders and engineers.',
      'faq.q3': 'What architecture patterns and techniques do you use to sustain high-concurrency workloads?',
      'faq.a3': 'To sustain thousands of concurrent sessions reliably: 1) Layered separation of concerns via Clean Architecture, 2) Multi-tier in-memory caching to eliminate redundant database reads, 3) Asynchronous request queues to prevent thread exhaustion during peak submissions, 4) Fine-tuned SQL Server indexes and lock escalation controls, and 5) Angular OnPush change detection and code splitting.',
      'faq.q4': 'What is your background in enterprise database engineering and analytics reporting?',
      'faq.a4': 'A core part of my engineering background in financial and inventory systems centers on relational schema design, ACID transactions, complex T-SQL procedures, and query execution plan tuning in SQL Server, alongside PostgreSQL and SQLite. Additionally, I have extensive experience building mission-critical financial, balance sheet, and inventory discrepancy reports with Stimulsoft Reporting.',
      'faq.q5': 'What are your preferred collaboration arrangements and contact methods?',
      'faq.a5': 'I am open to senior engineering roles, technical leadership positions, and enterprise consulting opportunities. The best ways to contact me directly are via email at alirezakn2000@gmail.com and Telegram at @silence_a_z.',
      'contact.badge': 'Get In Touch',
      'contact.title': "Let's Work Together",
      'contact.desc': 'Whether you have a challenging project in mind, need technical leadership, or want to discuss engineering opportunities, feel free to reach out.',
      'contact.geo': 'Based in Tabriz & Tehran, Iran • Open to On-site, Hybrid & Remote Worldwide',
      'footer.rights': 'All rights reserved.'
    }
  };

  /* Helper function to convert digits between Western (0-9) and Persian (۰-۹) */
  function toLocaleDigits(str, lang) {
    if (str === null || str === undefined) return '';
    const s = String(str);
    if (lang === 'fa') {
      const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      return s.replace(/[0-9]/g, d => persianDigits[+d]);
    } else {
      const westernDigits = { '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4', '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9' };
      return s.replace(/[۰-۹]/g, d => westernDigits[d]);
    }
  }

  /* ─────────────────────────────────────────────────────────────────────────
     2. STATE MANAGEMENT (Language & Theme)
     ───────────────────────────────────────────────────────────────────────── */
  let currentLang = localStorage.getItem('portfolio_lang') || 'fa';
  const rootHtml = document.documentElement;
  const langToggleBtn = document.getElementById('langToggle');
  const langText = document.getElementById('langText');
  const yearSpan = document.getElementById('currentYear');

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    rootHtml.setAttribute('lang', lang);
    rootHtml.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

    // Update Toggle Button Text & Aria
    if (langText) {
      langText.textContent = lang === 'fa' ? 'EN' : 'فا';
    }
    if (langToggleBtn) {
      langToggleBtn.setAttribute('aria-label', lang === 'fa' ? 'Switch to English' : 'تغییر به زبان فارسی');
    }

    // Translate all data-i18n nodes
    const i18nNodes = document.querySelectorAll('[data-i18n]');
    i18nNodes.forEach(node => {
      const key = node.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        node.textContent = translations[lang][key];
      }
    });

    // Update Document Title
    if (translations[lang] && translations[lang].title) {
      document.title = translations[lang].title;
    }

    // Update Dynamic Year with proper language digits
    if (yearSpan) {
      yearSpan.textContent = toLocaleDigits(new Date().getFullYear(), lang);
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'fa' ? 'en' : 'fa');
    });
  }

  /* ─────────────────────────────────────────────────────────────────────────
     3. THEME MANAGEMENT (Dark / Light Mode)
     ───────────────────────────────────────────────────────────────────────── */
  const themeToggleBtn = document.getElementById('themeToggle');
  const iconSun = document.getElementById('themeIconSun');
  const iconMoon = document.getElementById('themeIconMoon');

  function getInitialTheme() {
    const storedTheme = localStorage.getItem('portfolio_theme');
    if (storedTheme) return storedTheme;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      rootHtml.setAttribute('data-theme', 'dark');
      if (iconSun) iconSun.style.display = 'block';
      if (iconMoon) iconMoon.style.display = 'none';
    } else {
      rootHtml.removeAttribute('data-theme');
      if (iconSun) iconSun.style.display = 'none';
      if (iconMoon) iconMoon.style.display = 'block';
    }
    localStorage.setItem('portfolio_theme', theme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = rootHtml.getAttribute('data-theme') === 'dark';
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  // Listen for system theme changes if user has not overridden
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('portfolio_theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  /* ─────────────────────────────────────────────────────────────────────────
     4. SCROLL REVEAL (IntersectionObserver)
     ───────────────────────────────────────────────────────────────────────── */
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* ─────────────────────────────────────────────────────────────────────────
     5. STICKY NAVBAR BLUR & SCROLLSPY
     ───────────────────────────────────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    if (navbar) {
      if (window.scrollY > 25) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    let currentSectionId = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ─────────────────────────────────────────────────────────────────────────
     6. MOBILE MENU (Hamburger Toggle, Outside Click & Auto-Close)
     ───────────────────────────────────────────────────────────────────────── */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  function closeMobileMenu() {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close when tapping/clicking anywhere outside the menu drawer
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open')) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          closeMobileMenu();
        }
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });

    // Close when clicking any link or action button inside the menu
    navMenu.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', closeMobileMenu);
    });
  }

  /* ─────────────────────────────────────────────────────────────────────────
     8. ACCORDION AUTO-COLLAPSE (Optional Single-Open Behavior)
     ───────────────────────────────────────────────────────────────────────── */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });

  /* ─────────────────────────────────────────────────────────────────────────
     9. PRINT / PDF EXPORT
     ───────────────────────────────────────────────────────────────────────── */
  function triggerPdfPrint() {
    window.print();
  }

  const printResumeBtn = document.getElementById('printResumeBtn');
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', triggerPdfPrint);
  }

  const navPrintBtn = document.getElementById('navPrintBtn');
  if (navPrintBtn) {
    navPrintBtn.addEventListener('click', triggerPdfPrint);
  }

  /* ─────────────────────────────────────────────────────────────────────────
     10. INITIALIZATION
     ───────────────────────────────────────────────────────────────────────── */
  setTheme(getInitialTheme());
  setLanguage(currentLang);
})();
