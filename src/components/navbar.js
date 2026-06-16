export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('scroll-progress-bar');

  navbar.innerHTML = `
    <a class="nav-logo" href="#hero">
      <svg width="36" height="48" viewBox="0 0 120 160" fill="none" style="display:block;">
        <ellipse cx="60" cy="78" rx="42" ry="52" fill="currentColor" opacity="0.06"/>
        <path d="M44 52V108" stroke="currentColor" stroke-width="10" stroke-linecap="round" opacity="1"/>
        <path d="M44 52H68C82 52 90 60 90 70C90 80 82 88 68 88H44" stroke="currentColor" stroke-width="10" stroke-linecap="round" fill="none" opacity="1"/>
        <path d="M44 88H68C82 88 90 96 90 106C90 108 82 108 68 108" stroke="currentColor" stroke-width="10" stroke-linecap="round" fill="none" opacity="1"/>
        <path d="M56 58H63C69 58 73 62 73 68C73 74 69 78 63 78H56V58Z" fill="currentColor" opacity="0.08"/>
        <path d="M56 92H62C67 92 70 96 70 101C70 106 67 108 62 108H56V92Z" fill="currentColor" opacity="0.08"/>
      </svg>
    </a>
    <ul class="nav-links">
      <li><a href="#about" id="nav-about">About</a></li>
      <li><a href="#skills" id="nav-skills">Skills</a></li>
      <li><a href="#work" id="nav-work">Work</a></li>
      <li><a href="#rx-tool" id="nav-rx">Design Tool</a></li>
      <li><a href="#contact" id="nav-contact">Contact</a></li>
    </ul>
    <button class="nav-cta" onclick="document.getElementById('rx-tool').scrollIntoView({behavior:'smooth'})">
      Try Design Refiner →
    </button>
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme"></button>
    <button class="nav-hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;

  // Create mobile menu as a separate sibling element (not inside navbar)
  const menuDiv = document.createElement('div');
  menuDiv.className = 'nav-mobile-menu';
  menuDiv.id = 'mobile-menu';
  menuDiv.innerHTML = `
    <a href="#about" class="mobile-link">About</a>
    <a href="#skills" class="mobile-link">Skills</a>
    <a href="#work" class="mobile-link">Work</a>
    <a href="#rx-tool" class="mobile-link">Design Tool</a>
    <a href="#contact" class="mobile-link">Contact</a>
  `;
  document.body.insertBefore(menuDiv, document.body.firstChild);

  // Scroll effects
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    const pct = (scrolled / total) * 100;

    progressBar.style.width = `${pct}%`;
    navbar.classList.toggle('scrolled', scrolled > 40);
  }, { passive: true });

  // Active section highlight
  const sections = ['hero', 'about', 'skills', 'work', 'rx-tool', 'contact'];
  const navMap = { 'about': 'nav-about', 'skills': 'nav-skills', 'work': 'nav-work', 'rx-tool': 'nav-rx', 'contact': 'nav-contact' };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Object.values(navMap).forEach(id => document.getElementById(id)?.classList.remove('active'));
        const navId = navMap[entry.target.id];
        if (navId) document.getElementById(navId)?.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.style.display = 'flex';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.style.display = 'none';
  }

  mobileMenu.style.display = 'none';

  hamburger.addEventListener('click', () => {
    if (mobileMenu.style.display === 'flex') {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Theme toggle
  const toggleBtn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.classList.add('light');

  toggleBtn.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙';

  toggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    toggleBtn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}
