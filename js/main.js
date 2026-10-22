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
      title: 'علیرضا کریمیان | توسعه‌دهنده فول‌استک — Angular و C# .NET Core',
      name: 'علیرضا کریمیان',
      'profileCard.role': 'توسعه‌دهنده فول‌استک و مدیر پروژه',
      'nav.about': 'درباره من',
      'nav.experience': 'سوابق کاری',
      'nav.skills': 'مهارت‌ها',
      'nav.projects': 'پروژه‌ها',
      'nav.faq': 'سوالات متداول',
      'nav.contact': 'تماس',
      'hero.status': 'آماده همکاری در پروژه‌های نرم‌افزاری',
      'hero.greeting': 'سلام، من علیرضا کریمیان هستم',
      'hero.bio': 'توسعه‌دهنده فول‌استک با ۵ سال سابقه مهندسی نرم‌افزار، شامل ۴ سال تجربه موفق در جایگاه مدیر پروژه در پروژه‌های دولتی و صنعتی. دارای مدرک کارشناسی ارشد مهندسی نرم‌افزار از دانشگاه تبریز با معدل ۱۷.۲۷ از ۲۰.',
      'hero.ctaProjects': 'مشاهده پروژه‌ها',
      'hero.ctaContact': 'تماس با من',
      'about.badge': 'شناخت بیشتر',
      'about.title': 'درباره من',
      'about.subtitle': 'ترکیب مهندسی نرم‌افزار پیشرفته و رهبری چابک پروژه‌های بزرگ سازمانی',
      'about.bio': 'توسعه‌دهنده فول‌استک با بیش از ۵ سال تجربه کاری در حوزه مهندسی نرم‌افزار، شامل ۴ سال تجربه موفق در جایگاه مدیر پروژه و هدایت پروژه‌های سازمانی در بخش‌های دولتی و صنعتی. دارای مدرک کارشناسی ارشد مهندسی نرم‌افزار از دانشگاه تبریز با معدل ۱۷.۲۷ از ۲۰. متمرکز بر معماری‌های تمیز، پایداری بالا و طراحی راهکارهای نرم‌افزاری مدرن.',
      'about.stat1Num': '+۵',
      'about.stat1': 'سال سابقه کاری مهندسی نرم‌افزار',
      'about.stat2Num': '۴',
      'about.stat2': 'سال مدیریت پروژه پروژه‌های سازمانی',
      'about.stat3Num': '۵',
      'about.stat3': 'سامانه کلان دولتی و صنعتی',
      'about.eduDegree': 'کارشناسی ارشد مهندسی نرم‌افزار',
      'about.eduSchool': 'دانشگاه تبریز (University of Tabriz)',
      'about.eduGpa': 'معدل کل: ۱۷.۲۷ از ۲۰',
      'about.eduDesc': 'تمرکز پژوهشی و دانشگاهی بر مباحث سیستم‌های توزیع‌شده، ارزیابی کارایی نرم‌افزار و معماری‌های مدرن نرم‌افزاری.',
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
      'projects.title': 'پروژه‌های شاخص',
      'projects.subtitle': 'سامانه‌های ملی و سازمانی توسعه‌یافته با هدایت و همکاری فنی مستقیم',
      'projects.rolePm': 'مدیر پروژه',
      'projects.roleDev': 'توسعه‌دهنده',
      'projects.p1Title': 'بخش آزمون پلتفرم مهارت‌آموزی فنی و حرفه‌ای',
      'projects.p1Desc': 'هدایت فرایند طراحی و تحویل کامل ماژول آزمون آنلاین در پلتفرم کشوری مهارت‌آموزی فنی و حرفه‌ای جهت برگزاری آزمون‌های بزرگ مقیاس.',
      'projects.p2Title': 'سامانه مالی کشت و صنعت و دامپروری مغان',
      'projects.p2Desc': 'مدیریت توسعه سامانه جامع حسابداری و مالی برای یکی از عظیم‌ترین مجتمع‌های کشت و صنعت و دامپروری کشور.',
      'projects.p3Title': 'سامانه انبارداری شرکت فرآورده‌های نفتی',
      'projects.p3Desc': 'توسعه و برنامه‌نویسی تخصصی ماژول‌های انبارداری، مدیریت کنترل موجودی، ردیابی کالا و گزارش‌های آماری دقیق.',
      'projects.p4Title': 'سامانه اداره استخدامی',
      'projects.p4Desc': 'توسعه ماژول‌های اساسی سامانه استخدامی و فرایند گزینش اداری در مقیاس نهادهای دولتی با امنیت بالا.',
      'projects.p5Title': 'سامانه آزمون طرح «تربیت ۵۰۰ مدیر جوان و کارآمد»',
      'projects.p5Desc': 'مدیریت کلیدی فرایند برگزاری آزمون آنلاین کشوری در سطح کلان، تحلیل داده‌های آزمون و ارزیابی شایستگی‌ها.',
      'faq.badge': 'پرسش‌های متداول',
      'faq.title': 'پرسش‌های متداول',
      'faq.subtitle': 'پاسخ به سوالات پرتکرار درباره تخصص، سوابق حرفه‌ای و نحوه همکاری',
      'faq.q1': 'علیرضا کریمیان کیست و چه حوزه‌هایی تخصص دارد؟',
      'faq.a1': 'علیرضا کریمیان توسعه‌دهنده ارشد فول‌استک و مدیر پروژه نرم‌افزاری با بیش از ۵ سال سابقه حرفه‌ای است. تخصص اصلی او توسعه سامانه‌های مقیاس‌پذیر سازمانی با پشته Angular و C# .NET Core و پایگاه داده SQL Server است و ۴ سال سابقه هدایت تیم‌های چابک (Scrum) در پروژه‌های دولتی و صنعتی را دارد.',
      'faq.q2': 'پشته فناوری تخصصی و مهارت‌های فنی او چیست؟',
      'faq.a2': 'در بخش بک‌اند: C#، .NET Core، Web API، Clean Architecture، Microservices و Python. در بخش فرانت‌اند: Angular، TypeScript، JavaScript، HTML5، CSS3، Bootstrap و Tailwind CSS. در پایگاه داده: Microsoft SQL Server، PostgreSQL، SQLite، T-SQL و StimulSoft. در ابزارها و متدولوژی: Git، Scrum و تست نرم‌افزار.',
      'faq.q3': 'چند سال تجربه حرفه‌ای در توسعه نرم‌افزار و مدیریت پروژه دارد؟',
      'faq.a3': 'بیش از ۵ سال سابقه در توسعه نرم‌افزار و مهندسی سیستم‌های بزرگ، به انضمام ۴ سال سابقه مستقیم در مدیریت پروژه و هدایت موفقیت‌آمیز تیم‌های چندتخصصی نرم‌افزاری در پروژه‌های ملی.',
      'faq.q4': 'چه پروژه‌های شاخصی را مدیریت یا توسعه داده است؟',
      'faq.a4': 'پروژه‌های شاخص شامل: مدیریت پروژه بخش آزمون آنلاین پلتفرم ملی مهارت‌آموزی فنی و حرفه‌ای؛ مدیریت توسعه سامانه جامع مالی شرکت کشت و صنعت و دامپروری مغان؛ توسعه ماژول انبارداری و کنترل موجودی شرکت فرآورده‌های نفتی؛ توسعه ماژول‌های سامانه گزینش و استخدامی دولتی؛ و مدیریت آزمون سراسری طرح تربیت ۵۰۰ مدیر جوان و کارآمد.',
      'faq.q5': 'سوابق تحصیلی و دانشگاهی علیرضا کریمیان چیست؟',
      'faq.a5': 'او فارغ‌التحصیل مقطع کارشناسی ارشد مهندسی نرم‌افزار از دانشگاه سراسری تبریز با معدل ممتاز ۱۷.۲۷ از ۲۰ است. تمرکز آکادمیک و پژوهشی وی بر سیستم‌های توزیع‌شده، ارزیابی کارایی و معماری‌های نوین نرم‌افزار بوده است.',
      'contact.badge': 'همکاری و ارتباط',
      'contact.title': 'بیایید با هم در ارتباط باشیم',
      'contact.desc': 'اگر به دنبال همکاری در پروژه‌های نرم‌افزاری مقیاس‌پذیر، مدیریت فنی پروژه‌ها یا نیاز به مشاوره فنی دارید، بسیار خوشحال می‌شوم با من در تماس باشید.',
      'footer.rights': 'تمامی حقوق محفوظ است.'
    },
    en: {
      title: 'Alireza Karimiyan | Full-Stack Developer — Angular & C# .NET Core',
      name: 'Alireza Karimiyan',
      'profileCard.role': 'Full-Stack Developer & Project Manager',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'hero.status': 'Available for Enterprise Projects',
      'hero.greeting': "Hello, I'm Alireza Karimiyan",
      'hero.bio': 'Full-stack developer with 5 years of software engineering experience, including 4 years as a Project Manager leading enterprise software projects in government and industrial sectors. M.Sc. in Software Engineering from the University of Tabriz (GPA 17.27/20).',
      'hero.ctaProjects': 'View Projects',
      'hero.ctaContact': 'Contact Me',
      'about.badge': 'Background',
      'about.title': 'About Me',
      'about.subtitle': 'Combining enterprise software engineering with agile project leadership',
      'about.bio': 'Full-stack developer with 5 years of software engineering experience, including 4 years as a Project Manager successfully leading enterprise systems in government and industrial sectors. Holds an M.Sc. in Software Engineering from the University of Tabriz (GPA 17.27/20). Passionate about clean architecture, high scalability, and robust system design.',
      'about.stat1Num': '5+',
      'about.stat1': 'Years Software Engineering Exp.',
      'about.stat2Num': '4',
      'about.stat2': 'Years Project Management',
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
      'projects.badge': 'Portfolio',
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Selected enterprise and governmental systems built and managed',
      'projects.rolePm': 'Project Manager',
      'projects.roleDev': 'Developer',
      'projects.p1Title': 'Skills-Training Exam Platform',
      'projects.p1Desc': 'Led design and delivery of the online examination module of a national technical & vocational skills-training platform.',
      'projects.p2Title': 'Moghan Agro-Industry Financial System',
      'projects.p2Desc': 'Managed development of a comprehensive financial system for one of Iran’s largest agro-industrial & livestock companies.',
      'projects.p3Title': 'Warehouse Management System (Oil Products)',
      'projects.p3Desc': 'Developed the warehousing, inventory movement, and advanced reporting modules for the Oil Products Distribution Company.',
      'projects.p4Title': 'Employment Administration System',
      'projects.p4Desc': 'Developed key modules and administrative workflows of a government recruitment administration system.',
      'projects.p5Title': '"Training 500 Young Managers" Exam System',
      'projects.p5Desc': 'Managed the end-to-end large-scale online examination process, score analytics, and competency assessment.',
      'faq.badge': 'FAQ',
      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Common questions regarding technical expertise, background, and project experience',
      'faq.q1': 'Who is Alireza Karimiyan and what are his specialties?',
      'faq.a1': 'Alireza Karimiyan is a senior full-stack developer and software project manager with over 5 years of professional experience. His core specialty is engineering scalable enterprise web applications with Angular, C# .NET Core, and SQL Server, alongside 4 years of agile project leadership (Scrum) in government and industrial sectors.',
      'faq.q2': 'What is his technical stack and primary skill set?',
      'faq.a2': 'Backend: C#, .NET Core, Web API, Clean Architecture, Microservices, and Python. Frontend: Angular, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, and Tailwind CSS. Databases & Reporting: Microsoft SQL Server, PostgreSQL, SQLite, T-SQL, and StimulSoft. Tools & Methodology: Git, Scrum, and software testing.',
      'faq.q3': 'How many years of experience does he have in software development and project management?',
      'faq.a3': 'Over 5 years of experience in full-stack software development and systems engineering, along with 4 dedicated years in technical project management leading cross-functional teams on high-impact national software solutions.',
      'faq.q4': 'What notable enterprise projects has he delivered or engineered?',
      'faq.a4': 'Notable projects include: Project Manager for the National Technical & Vocational Online Examination Platform; Project Manager for the Moghan Agro-Industry Comprehensive Financial System; Developer for the Oil Products Distribution Warehousing System; Developer for Government Employment Administration modules; and Project Manager for the large-scale "Training 500 Young & Efficient Managers" examination system.',
      'faq.q5': 'What is his educational background?',
      'faq.a5': 'He holds a Master of Science (M.Sc.) degree in Software Engineering from the University of Tabriz with an outstanding GPA of 17.27 / 20. His academic research concentrated on distributed systems, software performance optimization, and modern system architectures.',
      'contact.badge': 'Get In Touch',
      'contact.title': "Let's Work Together",
      'contact.desc': 'Whether you have a challenging project in mind, need technical leadership, or want to discuss engineering opportunities, feel free to reach out.',
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

  /* Typewriter Phrases by Language */
  const typewriterPhrases = {
    fa: [
      'توسعه‌دهنده فول‌استک',
      'توسعه‌دهنده Angular',
      'توسعه‌دهنده C# / .NET Core',
      'مدیر پروژه نرم‌افزار'
    ],
    en: [
      'Full-Stack Developer',
      'Angular Developer',
      'C# / .NET Core Developer',
      'Project Manager'
    ]
  };

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

    // Restart Typewriter with current language phrases
    restartTypewriter();
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
     4. TYPEWRITER EFFECT
     ───────────────────────────────────────────────────────────────────────── */
  const typewriterElement = document.getElementById('typewriterText');
  let typeIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typewriterTimeout = null;

  function typeWriterLoop() {
    if (!typewriterElement) return;
    const phrases = typewriterPhrases[currentLang];
    const currentPhrase = phrases[typeIdx % phrases.length];

    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 45 : 90;

    if (!isDeleting && charIdx === currentPhrase.length) {
      speed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      typeIdx = (typeIdx + 1) % phrases.length;
      speed = 450; // Pause before next word
    }

    typewriterTimeout = setTimeout(typeWriterLoop, speed);
  }

  function restartTypewriter() {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    typeIdx = 0;
    charIdx = 0;
    isDeleting = false;
    if (typewriterElement) {
      typewriterElement.textContent = '';
      typeWriterLoop();
    }
  }

  /* ─────────────────────────────────────────────────────────────────────────
     5. SCROLL REVEAL (IntersectionObserver)
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
     6. STICKY NAVBAR BLUR & SCROLLSPY
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
     7. MOBILE MENU (Hamburger Toggle & Auto-Close)
     ───────────────────────────────────────────────────────────────────────── */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
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
     9. INITIALIZATION
     ───────────────────────────────────────────────────────────────────────── */
  setTheme(getInitialTheme());
  setLanguage(currentLang);
})();
