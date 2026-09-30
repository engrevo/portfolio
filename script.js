document.addEventListener('DOMContentLoaded', () => {
  const arabicTranslations = {
    text: {
      'head title': ['ملف أعمال رفال سروجي'],
      '.brand': ['رفال سروجي'],
      '.nav-menu a': ['المشاريع', 'الخبرات', 'المهارات', 'تواصل'],
      '.eyebrow span': ['طالبة هندسة الحاسب والشبكات'],
      '.display > span:first-child': ['رفال'],
      '.name-last': ['سروجي'],
      '.hero-education span': ['جامعة جدة', 'التخرج المتوقع: '],
      '.hero-statement': ['شغوفة بالذكاء الاصطناعي وتطوير الويب وتصميم واجهات وتجربة المستخدم والطائرات المسيّرة، وبناء تجارب رقمية هادفة.'],
      '.hero-subline': ['أستكشف التقنية من خلال الهندسة والتصميم والذكاء الاصطناعي والمشاريع الإبداعية.'],
      '.focus-list li': ['الذكاء الاصطناعي', 'الويب', 'الواجهات والتجربة', 'الطائرات المسيّرة'],
      '.hero-actions .hero-button': ['اطّلع على أعمالي', 'لنتواصل'],
      '.hero-cv-actions .hero-button': ['عرض السيرة الذاتية'],
      '.graphic-coordinate': ['أنظمة في حركة'],
      '.graphic-index': ['الشكل ٠١'],
      '.graphic-caption': ['الهندسة × الخيال'],
      '.projects .section-kicker': ['أعمال مختارة'],
      '.projects h2': ['أعمال مختارة'],
      '.project-category': ['الذكاء الاصطناعي / التقنية التعليمية', 'تجربة المستخدم / أبحاث المستخدم', 'الويب / تصميم الواجهات والتجربة'],
      '.project-meta h3': ['TAQWIAH', 'أبحاث تجربة المستخدم', 'ملف الأعمال الشخصي'],
      '.visual-tag': ['الذكاء الاصطناعي / التعليم', 'الأبحاث / تجربة المستخدم', 'ملف الأعمال / الويب'],
      '.browser-bar': ['ملاحظات البحث / تدفقات المستخدم', 'رفال سروجي / أعمال مختارة'],
      '.project-detail p': [
        'نظام تعليمي مدعوم بالذكاء الاصطناعي يحلل جوانب الضعف في تعلّم الطلاب ويساعد على تعزيزها عبر تجربة تعلّم أكثر تخصيصًا.',
        'مشروع بحث للمستخدم يركّز على فهم احتياجات المستخدمين وسلوكياتهم ونقاط الألم والفرص المتاحة لتحسين تجربة المنتج عمومًا.',
        'ملف أعمال شخصي تفاعلي صُمّم لعرض مشاريعي ومهاراتي وخبراتي واهتماماتي من خلال تجربة إبداعية وتقنية حديثة.'
      ],
      '.project-detail ul li': [
        'الذكاء الاصطناعي', 'التعليم', 'تحدي أبطال الذكاء الاصطناعي', 'قائدة الفريق',
        'احتياجات المستخدم', 'السلوكيات', 'نقاط الألم', 'الفرص',
        'ملف أعمال', 'الويب', 'تصميم الواجهات والتجربة'
      ],
      '.project-detail a span:first-child': ['عرض المشروع', 'قراءة البحث', 'استكشف ملف الأعمال'],
      '.experience .section-kicker': ['الخبرات'],
      '.experience h2': ['الخبرات'],
      '.timeline-year': ['الجامعة', '٢٠٢٦ — حتى الآن', '٢٠٢٦ — حتى الآن', '٢٠٢٦ — حتى الآن', '٢٠٢٦ — حتى الآن'],
      '.timeline-details h3': ['جامعة جدة', 'نادي طويق', 'نادي الذكاء الاصطناعي', 'SDC', 'MyTrip'],
      '.timeline-role': ['عضوة — مسار الطائرات المسيّرة', 'عضوة في إدارة المشاريع', 'عضوة في المجتمع', 'متدربة في تصميم الواجهات والتجربة'],
      '.timeline-details p': [
        'طالبة هندسة حاسب.',
        'عضوة في مسار الطائرات المسيّرة، أستكشف أنظمة الطائرات والعتاد والتقنيات الناشئة.',
        'عضوة في فريق إدارة المشاريع، أساهم في تنظيم المبادرات التقنية وتنسيق المهام والعمل ضمن فريق.',
        'عضوة نشطة في مجتمع SDC السعودي، أشارك في الأنشطة التقنية والمجتمعية.',
        'متدربة أكتسب خبرة ومهارات عملية في تصميم الواجهات وتجربة المستخدم، وأسهم في مشاريع واقعية وأتعلم من خبراء المجال.'
      ],
      '.skillset .section-kicker': ['مجموعة المهارات'],
      '.skillset h2': ['المهارات'],
      '.skill-group h3': ['تقنية', 'الويب والمنتجات الرقمية', 'الذكاء الاصطناعي والتقنية', 'المهارات الشخصية'],
      '.skill-list li': [
        'Python', 'Java', 'C#', 'SQL', 'JavaScript', 'HTML / CSS',
        'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'تصميم الواجهات والتجربة', 'Figma',
        'الذكاء الاصطناعي', 'RAG', 'نماذج الذكاء الاصطناعي الأولية', 'التفكير بالمنتج', 'الطائرات المسيّرة',
        'العمل الجماعي', 'إدارة المشاريع', 'التواصل', 'حل المشكلات', 'الإبداع', 'القيادة', 'المرونة'
      ],
      '.lab .section-kicker': ['المختبر / التجارب'],
      '.lab h2': ['المختبر / التجارب'],
      '.lab-item > span': ['تجارب الذكاء الاصطناعي', 'أنظمة الطائرات المسيّرة', 'تجارب بصرية', 'الذكاء الاصطناعي / الواجهات'],
      '.lab-item h3': [
        'واجهات حوارية وأدوات ذكية.',
        'استكشافات في الأنظمة الجوية والاستشعار التطبيقي.',
        'مفاهيم واجهات متكررة ودراسات لتوجّه المنتجات.',
        'حيث يلتقي الذكاء المفيد بالتفاعل المدروس.'
      ],
      '.statement .section-kicker': ['الهندسة / الخيال'],
      '.statement-line': ['أبني عند نقطة التقاء'],
      '.statement-emphasis': [{ html: 'التقنية <span>×</span> الإبداع' }],
      '.cv-inner .section-kicker': ['السيرة الذاتية / الخلفية'],
      '#cv-title': ['سيرتي الذاتية'],
      '.cv-inner p': ['تعرّف على خلفيتي ومهاراتي ومشاريعي وخبراتي.'],
      '.cv-actions .hero-button': ['عرض السيرة الذاتية'],
      '.contact-wrap .section-kicker': ['تواصل'],
      '.contact-wrap h2': [{ html: 'لنبنِ<br />شيئًا<br /><span>رائعًا.</span>' }],
      '.contact-wrap h2 span': ['رائعًا.'],
      '.contact-links a': ['LinkedIn', 'GitHub', 'البريد الإلكتروني'],
      '.footer-inner span': ['© ٢٠٢٦ رفال سروجي', 'طالبة هندسة حاسب']
    },
    attributes: {
      'meta[name="description"]': { content: 'رفال سروجي طالبة هندسة حاسب تبني مشاريع في الذكاء الاصطناعي وتجربة المستخدم وتجارب الويب والأنظمة التقنية.' },
      '.language-switch': { 'aria-label': 'اللغة' },
      '.site-header nav': { 'aria-label': 'التنقل الرئيسي' },
      '.brand': { 'aria-label': 'الصفحة الرئيسية لرفال سروجي' },
      '.menu-toggle': { 'aria-label': 'فتح القائمة' },
      '.hero-aside': { 'aria-label': 'رسم تجريدي للشبكة' },
      '.network-art': { 'aria-label': 'شبكة مدارية بعقد مترابطة' },
      '.focus-list': { 'aria-label': 'مجالات التركيز' },
      '.hero-cv-actions': { 'aria-label': 'السيرة الذاتية' },
      '.projects .project-detail a': { 'aria-label': ['عرض مشروع تقوية', 'قراءة بحث تجربة المستخدم', 'استكشاف ملف الأعمال الشخصي'] },
      '.statement': { 'aria-label': 'بيان التقنية الإبداعية' },
      '.language-option[data-language="en"]': { 'aria-label': 'اختيار الإنجليزية' },
      '.language-option[data-language="ar"]': { 'aria-label': 'اختيار العربية' }
    }
  };

  const languageButtons = [...document.querySelectorAll('.language-option')];
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  Object.keys(arabicTranslations.text).forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => originalText.set(element, element.innerHTML));
  });
  Object.keys(arabicTranslations.attributes).forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      originalAttributes.set(element, Object.fromEntries(Object.keys(arabicTranslations.attributes[selector][0] || arabicTranslations.attributes[selector]).map((name) => [name, element.getAttribute(name)])));
    });
  });

  const setText = (element, value) => {
    if (value && typeof value === 'object' && !Array.isArray(value) && 'html' in value) {
      element.innerHTML = value.html;
    } else if (Array.isArray(value)) {
      const textNodes = [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      value.forEach((part, index) => { if (textNodes[index]) textNodes[index].textContent = part; });
    } else if (element.children.length) {
      const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (textNode) textNode.textContent = value;
    } else {
      element.textContent = value;
    }
  };

  const applyLanguage = (language, preservePosition = true) => {
    if (language !== 'ar' && language !== 'en') language = 'en';
    const anchor = preservePosition
      ? [...document.querySelectorAll('main section')].find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= innerHeight * 0.5 && bounds.bottom >= innerHeight * 0.5;
      }) || document.querySelector('main section')
      : null;
    const anchorTop = anchor?.getBoundingClientRect().top;
    const scrollPosition = window.scrollY;
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.dataset.language = language;

    Object.entries(arabicTranslations.text).forEach(([selector, values]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        if (language === 'en') element.innerHTML = originalText.get(element) ?? element.innerHTML;
        else setText(element, values[index]);
      });
    });
    Object.entries(arabicTranslations.attributes).forEach(([selector, attributes]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        Object.entries(attributes).forEach(([name, values]) => {
          if (language === 'en') element.setAttribute(name, originalAttributes.get(element)?.[name] ?? '');
          else element.setAttribute(name, Array.isArray(values) ? values[index] : values);
        });
      });
    });
    languageButtons.forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('portfolio-language', language); } catch { /* Storage may be unavailable in private browsing. */ }

    requestAnimationFrame(() => {
      const adjustedPosition = anchor && Number.isFinite(anchorTop)
        ? window.scrollY + anchor.getBoundingClientRect().top - anchorTop
        : scrollPosition;
      window.scrollTo(0, adjustedPosition);
      root.style.scrollBehavior = previousScrollBehavior;
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    });
  };

  languageButtons.forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch { /* Storage may be unavailable in private browsing. */ }
  applyLanguage(savedLanguage, false);

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gsapReady = window.gsap && window.ScrollTrigger;
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    const menuLinks = navMenu.querySelectorAll('a');
    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      if (window.gsap && !reducedMotion && navMenu.classList.contains('is-open')) {
        gsap.to(menuLinks, { autoAlpha: 0, y: -8, stagger: 0.025, duration: 0.16, onComplete: () => navMenu.classList.remove('is-open') });
      } else {
        navMenu.classList.remove('is-open');
      }
    };
    menuToggle.addEventListener('click', () => {
      const open = !navMenu.classList.contains('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
      if (open) {
        navMenu.classList.add('is-open');
        if (window.gsap && !reducedMotion) gsap.fromTo(menuLinks, { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, stagger: 0.045, duration: 0.28, ease: 'power2.out', clearProps: 'transform' });
      } else {
        closeMenu();
      }
    });
    menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
  }

  if (window.location.hash === '#index') {
    const homeSection = document.querySelector('#home');
    if (homeSection) {
      window.history.replaceState(window.history.state, '', `${window.location.pathname}${window.location.search}#home`);
      homeSection.scrollIntoView({ block: 'start' });
    }
  }

  if (!gsapReady) {
    document.documentElement.classList.add('motion-fallback');
    const links = [...document.querySelectorAll('.nav-menu a[href^="#"]')];
    const setActive = (id) => {
      links.forEach((link) => link.classList.toggle('active', link.hash === `#${id}`));
      const nav = document.querySelector('.nav');
      if (nav) nav.classList.toggle('is-on-dark', id === 'skills' || id === 'contact');
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      if (entry.target.matches('section[id]')) setActive(entry.target.id);
      observer.unobserve(entry.target);
    }), { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    [...document.querySelectorAll('main section[id], .section-heading, .timeline-item, .lab-item, .statement-inner, .cv-inner, .contact-wrap')]
      .filter((element) => !element.matches('.skillset .section-heading'))
      .forEach((element) => observer.observe(element));

    const bar = document.querySelector('.scroll-progress');
    let frame = 0;
    const updateScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const range = document.documentElement.scrollHeight - innerHeight;
        const progress = range > 0 ? scrollY / range : 0;
        if (bar) bar.style.transform = `scaleX(${progress})`;
      });
    };
    addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const q = gsap.utils.toArray;
  const refreshScrollTriggers = () => requestAnimationFrame(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  }, { once: true });
  window.addEventListener('pageshow', refreshScrollTriggers);
  window.addEventListener('hashchange', refreshScrollTriggers);
  if (document.fonts?.ready) document.fonts.ready.then(refreshScrollTriggers);

  const progressBar = document.querySelector('.scroll-progress');
  const setProgress = gsap.quickTo(progressBar, 'scaleX', { duration: 0.16, ease: 'none' });
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => setProgress(self.progress)
  });

  const navLinks = q('.nav-menu a[href^="#"]');
  const sections = q('main section[id]');
  const nav = document.querySelector('.nav');
  const setActive = (id) => {
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
    if (nav) nav.classList.toggle('is-on-dark', id === 'skills' || id === 'contact');
  };
  sections.forEach((section) => ScrollTrigger.create({
    trigger: section,
    start: 'top 52%',
    end: 'bottom 52%',
    onEnter: () => setActive(section.id),
    onEnterBack: () => setActive(section.id)
  }));

  if (reducedMotion) {
    gsap.set('.hero-graphic', { autoAlpha: 1, scale: 1, rotate: 0 });
    return;
  }

  const heroSection = document.querySelector('.hero');
  const hero = gsap.timeline({ defaults: { ease: 'power3.out' } });
  hero.from('.brand', { autoAlpha: 0, y: -12, duration: 0.55 })
    .from('.nav-menu a', { autoAlpha: 0, y: -9, stagger: 0.07, duration: 0.35 }, '-=0.22')
    .from('.eyebrow span', { autoAlpha: 0, y: 12, stagger: 0.1, duration: 0.48 }, '-=0.08')
    .fromTo('.display > span', { autoAlpha: 0, yPercent: 100, clipPath: 'inset(0 0 100% 0)' }, { autoAlpha: 1, yPercent: 0, clipPath: 'inset(0 0 0% 0)', stagger: 0.14, duration: 0.82, ease: 'power3.out' }, '-=0.12')
    .from('.hero-education', { autoAlpha: 0, y: 8, duration: 0.34 }, '-=0.28')
    .from('.hero-statement', { autoAlpha: 0, y: 12, duration: 0.4 }, '-=0.2')
    .from('.hero-subline', { autoAlpha: 0, y: 12, duration: 0.42 }, '-=0.22')
    .from('.focus-list li', { autoAlpha: 0, y: 10, stagger: 0.055, duration: 0.34 }, '-=0.16')
    .from('.hero-actions .hero-button', { autoAlpha: 0, y: 12, stagger: 0.1, duration: 0.34 }, '-=0.08')
    .from('.hero-cv-actions .hero-button', { autoAlpha: 0, y: 10, stagger: 0.12, duration: 0.34 }, '-=0.12');

  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .fromTo('.hero-graphic', { autoAlpha: 0, scale: 0.94, rotation: 2.5, y: 20 }, { autoAlpha: 1, scale: 1, rotation: 0, y: 0, duration: 1.05 })
    .fromTo('.network-art .node, .network-art .core', { scale: 0.82, autoAlpha: 0, transformOrigin: 'center' }, { scale: 1, autoAlpha: 1, stagger: 0.045, duration: 0.38 }, '-=0.5');

  const focusTags = q('.focus-list li');
  const heroButtons = q('.hero-actions .hero-button, .hero-cv-actions .hero-button');
  gsap.set('.display', { x: -18 });
  gsap.set('.eyebrow, .hero-education, .hero-statement, .hero-subline', { x: 10 });
  gsap.set(focusTags, { x: (index) => index % 2 ? -5 : 5 });
  gsap.set(heroButtons, { x: (index) => index % 2 ? 4 : -4 });
  gsap.set('.hero-graphic', { x: -25 });

  const heroFloat = gsap.timeline({ paused: true, repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } });
  heroFloat.to('.display', { x: 18, duration: 7.4 }, 0)
    .to('.eyebrow', { x: -10, duration: 6.2 }, 0.22)
    .to('.hero-education', { x: -9, duration: 7.8 }, 0.1)
    .to('.hero-statement', { x: -10, duration: 8.2 }, 0.35)
    .to('.hero-subline', { x: -8, duration: 6.8 }, 0.55)
    .to(focusTags, { x: (index) => index % 2 ? 5 : -5, duration: (index) => 5.6 + (index % 3) * 0.45, stagger: 0.14 }, 0.5)
    .to(heroButtons, { x: (index) => index % 2 ? -4 : 4, duration: (index) => 6.1 + (index % 2) * 0.6, stagger: 0.16 }, 0.28)
    .to('.hero-graphic', { x: 25, y: -2, rotation: 0.35, duration: 8.8 }, 0);
  const heroOrbitMotions = [
    gsap.to('.orbit-a', { rotation: 360, transformOrigin: '50% 50%', duration: 90, repeat: -1, ease: 'none', paused: true }),
    gsap.to('.orbit-c', { rotation: -360, transformOrigin: '50% 50%', duration: 130, repeat: -1, ease: 'none', paused: true })
  ];

  let heroVisible = false;
  let heroEntranceComplete = false;
  const resumeHeroFloat = () => {
    heroVisible = true;
    if (!heroEntranceComplete) return;
    gsap.killTweensOf(heroFloat);
    heroFloat.play();
    heroOrbitMotions.forEach((motion) => motion.play());
    gsap.to(heroFloat, { timeScale: 1, duration: 0.8, ease: 'sine.out', overwrite: true });
  };
  const easeOutHeroFloat = () => {
    heroVisible = false;
    gsap.killTweensOf(heroFloat);
    heroOrbitMotions.forEach((motion) => motion.pause());
    gsap.to(heroFloat, {
      timeScale: 0, duration: 0.8, ease: 'sine.out', overwrite: true,
      onComplete: () => { if (!heroVisible) heroFloat.pause(); }
    });
  };
  hero.eventCallback('onComplete', () => {
    heroEntranceComplete = true;
    if (heroVisible) resumeHeroFloat();
  });
  if (heroSection) {
    ScrollTrigger.create({
      trigger: heroSection, start: 'top bottom', end: 'bottom top',
      onEnter: resumeHeroFloat, onEnterBack: resumeHeroFloat,
      onLeave: easeOutHeroFloat, onLeaveBack: easeOutHeroFloat
    });
    const heroBounds = heroSection.getBoundingClientRect();
    if (heroBounds.bottom > 0 && heroBounds.top < window.innerHeight) resumeHeroFloat();
  }

  q('.section-heading').filter((heading) => !heading.closest('.projects, .skillset')).forEach((heading, index) => {
    gsap.fromTo(heading, { y: 38, x: index % 2 ? 18 : -18, scale: 0.98, autoAlpha: 0 }, {
      y: 0, x: 0, scale: 1, autoAlpha: 1, ease: 'none',
      immediateRender: false,
      scrollTrigger: { trigger: heading, start: 'top 94%', end: 'top 62%', scrub: 0.7, invalidateOnRefresh: true }
    });
  });

  q('.projects .project').forEach((project, index) => {
    const layers = [
      project.querySelector('.project-number'),
      project.querySelector('.project-meta h3'),
      project.querySelector('.project-visual'),
      project.querySelector('.project-detail p'),
      ...project.querySelectorAll('.project-detail ul, .project-detail a')
    ].filter(Boolean);
    const direction = index % 2 === 0 ? 1 : -1;
    const travel = () => Math.min(80, Math.max(48, window.innerWidth * 0.055));
    const entryParallax = (target) => {
      if (target.matches('.project-number')) return direction * travel() * 0.25;
      if (target.matches('.project-visual')) return direction * -travel() * 0.25;
      if (target.matches('.project-detail p')) return direction * -travel() * 0.44;
      if (target.matches('.project-detail ul, .project-detail a')) return direction * -travel() * 0.5;
      return 0;
    };
    const exitParallax = (target) => {
      if (target.matches('.project-number')) return direction * 8;
      if (target.matches('.project-visual')) return direction * -8;
      if (target.matches('.project-detail p')) return direction * -12;
      if (target.matches('.project-detail ul, .project-detail a')) return direction * -16;
      return direction * 4;
    };

    const projectMotion = gsap.timeline({
      scrollTrigger: {
        trigger: project,
        start: 'top 90%',
        end: 'bottom 50%',
        scrub: 0.35,
        invalidateOnRefresh: true
      }
    });

    projectMotion.fromTo(project, {
      x: () => direction * travel(),
      scale: 0.97,
      rotation: direction * 0.45,
      autoAlpha: 0.94,
      transformOrigin: '50% 50%'
    }, {
      x: 0,
      scale: 1,
      rotation: 0,
      autoAlpha: 1,
      duration: 0.52,
      ease: 'none'
    }, 0).fromTo(layers, {
      x: (index, target) => entryParallax(target),
      y: (index, target) => target.matches('.project-visual') ? 6 : target.matches('.project-detail p, .project-detail ul, .project-detail a') ? 4 : 0
    }, {
      x: 0,
      y: 0,
      duration: 0.52,
      ease: 'none'
    }, 0).to(project, {
      x: () => direction * travel() * 0.4,
      scale: 0.98,
      rotation: direction * -0.15,
      autoAlpha: 0.96,
      duration: 0.3,
      ease: 'none'
    }, '+=0.16').to(layers, {
      x: (index, target) => exitParallax(target),
      y: (index, target) => target.matches('.project-visual') ? -3 : target.matches('.project-detail p, .project-detail ul, .project-detail a') ? -5 : -2,
      duration: 0.3,
      ease: 'none'
    }, '<');
  });

  const skillGroups = q('.skill-group');
  const skillTags = skillGroups.flatMap((group) => [...group.querySelectorAll('.skill-list li')]);
  let skillsActive = false;
  let skillsRevealed = false;
  const skillFloats = skillGroups.map((group, index) => gsap.timeline({
    paused: true, repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' }
  }).to(group.querySelectorAll('.skill-list li'), {
    x: (itemIndex) => itemIndex % 2 ? -1 : 1,
    y: (itemIndex) => itemIndex % 2 ? 1.5 : -1.5,
    duration: (itemIndex) => 6.2 + ((itemIndex + index) % 4) * 0.35,
    stagger: 0.12
  }));
  const skillEntrance = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: {
      trigger: '#skills', start: 'top 82%', end: 'bottom 18%',
      onToggle: (self) => {
        skillsActive = self.isActive;
        skillFloats.forEach((motion) => {
          if (!skillsActive) motion.pause(0);
          else if (skillsRevealed) motion.play();
        });
      }
    }
  });
  skillEntrance.from('.skillset .section-heading', { autoAlpha: 0, x: -14, duration: 0.5 })
    .from(skillGroups, { autoAlpha: 0, clipPath: 'inset(0 0 0 3%)', scale: 0.99, duration: 0.62, stagger: 0.1 }, '-=0.16')
    .from(skillGroups.map((group) => group.querySelector('h3')), {
      x: (index) => index % 2 ? -6 : 6, autoAlpha: 0, duration: 0.38, stagger: 0.07
    }, '-=0.34')
    .from(skillTags, { autoAlpha: 0, y: 4, duration: 0.3, stagger: 0.025 }, '-=0.16');
  skillEntrance.eventCallback('onComplete', () => {
    skillsRevealed = true;
    if (skillsActive) skillFloats.forEach((motion) => motion.play());
  });

  q('.lab-item').forEach((item, index) => gsap.fromTo(item, {
    autoAlpha: 0, y: 28, x: index % 2 ? 7 : -7, scale: 0.99
  }, {
    autoAlpha: 1, y: 0, x: 0, scale: 1, ease: 'none', immediateRender: false,
    scrollTrigger: { trigger: item, start: 'top 94%', end: 'top 68%', scrub: 0.5, invalidateOnRefresh: true }
  }));

  const statementMotion = gsap.timeline({ scrollTrigger: { trigger: '.statement-inner', start: 'top 88%', end: 'bottom 32%', scrub: 0.7, invalidateOnRefresh: true } });
  statementMotion.fromTo('.statement-line', { autoAlpha: 0, y: 24, clipPath: 'inset(0 0 100% 0)' }, { autoAlpha: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.38, ease: 'none', immediateRender: false })
    .fromTo('.statement-emphasis', { autoAlpha: 0, y: 60, scale: 0.96, clipPath: 'inset(0 0 100% 0)' }, { autoAlpha: 1, y: 0, scale: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.62, ease: 'none', immediateRender: false }, '-=0.08');
  const cvMotion = gsap.timeline({ scrollTrigger: { trigger: '.cv-inner', start: 'top 88%', end: 'bottom 40%', scrub: 0.65, invalidateOnRefresh: true } });
  cvMotion.fromTo('.cv-inner .section-kicker', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.17, ease: 'none', immediateRender: false })
    .fromTo('.cv-inner h2', { autoAlpha: 0, y: 32, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.3, ease: 'none', immediateRender: false }, '-=0.025')
    .fromTo('.cv-inner p', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.2, ease: 'none', immediateRender: false }, '-=0.03')
    .fromTo('.cv-actions .hero-button', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.3, ease: 'none', immediateRender: false }, '-=0.025');

  const contactMotion = gsap.timeline({ scrollTrigger: { trigger: '.contact', start: 'top 82%', once: true } });
  contactMotion.fromTo('.contact-wrap .section-kicker', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.24, ease: 'power2.out' })
    .fromTo('.contact-wrap h2', { autoAlpha: 0, y: 20, clipPath: 'inset(0 0 35% 0)' }, { autoAlpha: 1, y: 0, clipPath: 'inset(0)', duration: 0.42, ease: 'power2.out' }, '-=0.08')
    .fromTo('.contact-links a', { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, stagger: 0.055, duration: 0.24, ease: 'power2.out' }, '-=0.08');
  const timelineItems = q('.timeline-item');
  const focusTimelineItem = (index) => timelineItems.forEach((item, itemIndex) => {
    item.classList.toggle('is-active', itemIndex === index);
    item.classList.toggle('is-past', itemIndex < index);
  });
  timelineItems.forEach((item, index) => ScrollTrigger.create({
    trigger: item, start: 'top 62%', end: 'bottom 42%',
    onEnter: () => focusTimelineItem(index),
    onEnterBack: () => focusTimelineItem(index),
    onLeave: () => focusTimelineItem(index + 1),
    onLeaveBack: () => focusTimelineItem(index - 1)
  }));
  gsap.fromTo('.timeline', { '--line-progress': 0 }, {
    '--line-progress': 1, ease: 'none',
    scrollTrigger: { trigger: '.timeline', start: 'top 74%', end: 'bottom 52%', scrub: 0.5, invalidateOnRefresh: true }
  });

  q('.lab-item').forEach((item) => {
    item.addEventListener('pointermove', (event) => {
      const rect = item.getBoundingClientRect();
      gsap.to(item, { '--pointer-x': `${event.clientX - rect.left}px`, '--pointer-y': `${event.clientY - rect.top}px`, duration: 0.25, overwrite: true });
    });
  });
  ScrollTrigger.refresh();
});
