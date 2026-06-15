import './style.css';
import { initNavbar } from './components/navbar.js';
import { initHero } from './components/hero.js';
import { initAbout } from './components/about.js';
import { initWork } from './components/work.js';
import { initSkills } from './components/skills.js';
import { initPrescription } from './components/prescription.js';
import { initContact } from './components/contact.js';

// Initialize all sections
initNavbar();
initHero();
initAbout();
initWork();
initSkills();
initPrescription();
initContact();

// --- Global Scroll Reveal ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0, rootMargin: '0px 0px 0px 0px' }
);

// Observe after a tiny delay so all components render first
requestAnimationFrame(() => {
  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });
});
