const SKILLS = [
  { name: 'Figma', pct: 95 },
  { name: 'UI Design', pct: 96 },
  { name: 'UX Research', pct: 85 },
  { name: 'Prototyping', pct: 90 },
  { name: 'Illustration', pct: 88 },
  { name: 'Product Strategy', pct: 88 },
  { name: 'Design Systems', pct: 90 },
  { name: 'Mobile Design', pct: 92 },
  { name: 'AI-Augmented Design', pct: 85 },
  { name: 'Design Engineering', pct: 80 },
];

export function initSkills() {
  const section = document.getElementById('skills');

  section.innerHTML = `
    <div class="max-w">
      <div class="skills-compact reveal">
        <div class="section-label" style="justify-content:center;">Expertise</div>
        <div class="skills-ovals">
          ${SKILLS.map((s, i) => `
            <div class="skill-oval" style="transition-delay:${i * 0.08}s">
              <span class="skill-oval-name">${s.name}</span>
              <span class="skill-oval-pct">${s.pct}%</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Stagger entrance on scroll
  const ovals = section.querySelectorAll('.skill-oval');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ovals.forEach((oval, i) => {
          setTimeout(() => oval.classList.add('visible'), i * 100);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(section);
}
