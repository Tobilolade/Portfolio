export function initHero() {
  const hero = document.getElementById('hero');

  const words = ['Designing', 'Experiences', 'That', 'Actually', 'Matter'];

  hero.innerHTML = `
    <div class="hero-bg-orbs">
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
      <div class="hero-orb hero-orb-3"></div>
    </div>

    <div class="hero-badge">
      <span class="hero-badge-dot"></span>
      AI Product Builder · UI/UX Designer · Design Engineer
    </div>

    <h1 class="hero-title">
      ${words.map((w, i) => `
        <span class="word"><span class="word-inner">${w === 'Matter' ? `<em class="accent">${w}</em>` : w === 'Experiences' ? `<span class="accent-word">${w}</span>` : w}</span></span>
      `).join('')}
    </h1>

    <p class="hero-sub">
      I craft intuitive, user-centered digital experiences through systems thinking, design craft, and AI.
      Exploring how product design and artificial intelligence can make complex information accessible to everyone.
    </p>

    <div class="hero-actions">
      <button class="btn-primary" id="hero-work-btn">
        View My Work
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="btn-secondary" id="hero-rx-btn">
        ✦ Try Design Idea Refiner
      </button>
    </div>

    <div class="hero-scroll-indicator">
      <span>Scroll</span>
      <div class="scroll-arrow"></div>
    </div>
  `;

  document.getElementById('hero-work-btn').addEventListener('click', () => {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('hero-rx-btn').addEventListener('click', () => {
    document.getElementById('rx-tool').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.hero-scroll-indicator').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
}
