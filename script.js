// One-page interactions
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Loader
  window.addEventListener('load', () => {
    setTimeout(() => document.querySelector('.loader')?.classList.add('done'), 650);
  });

  // Mobile navigation
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const showReveal = entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver?.unobserve(entry.target);
    }
  };
  const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      showReveal(entry);
    });
  }, { threshold: 0.12 }) : null;
  reveals.forEach(el => revealObserver ? revealObserver.observe(el) : el.classList.add('visible'));

  // Active section in nav
  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.nav-link')];
  const sectionObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' }) : null;
  sections.forEach(section => sectionObserver?.observe(section));

  // Scroll progress
  const progress = document.querySelector('.scroll-progress');
  const masthead = document.querySelector('.masthead');
  let scrollTicking = false;
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    masthead?.classList.toggle('scrolled', window.scrollY > 12);
    scrollTicking = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateProgress);
      scrollTicking = true;
    }
  }, { passive: true });
  updateProgress();

  // Counter
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (reduced) { el.textContent = target + suffix; return; }
    const start = performance.now();
    const duration = 1000;
    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(p * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });

  // Subtle magnetic buttons + cursor glow (desktop)
  const glow = document.querySelector('.cursor-glow');
  if (!reduced && window.matchMedia('(pointer:fine)').matches) {
    let pointerX = 0;
    let pointerY = 0;
    let glowFrame;
    window.addEventListener('pointermove', e => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      if (!glowFrame) {
        glowFrame = window.requestAnimationFrame(() => {
          glow.style.opacity = '1';
          glow.style.left = pointerX + 'px';
          glow.style.top = pointerY + 'px';
          glowFrame = undefined;
        });
      }
    });
    document.addEventListener('pointerleave', () => { glow.style.opacity = '0'; });
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.12;
        const y = (e.clientY - r.top - r.height / 2) * 0.12;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('pointerleave', () => {
        el.style.transform = '';
      });
    });
  }
})();
