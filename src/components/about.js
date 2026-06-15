const STATS = [
  { number: '50+', label: 'Projects Worked On' },
  { number: '4+', label: 'Years Experience' },
  { number: '7', label: 'Products Launched' },
];

export function initAbout() {
  const about = document.getElementById('about');

  about.innerHTML = `
    <div class="max-w">
      <div class="about-grid">

        <div class="about-left reveal">
          <div class="section-label">About Me</div>
          <h2 class="section-title">Building products<br/>that actually <span class="section-title-gradient">work.</span></h2>

          <div class="about-bio">
            <p>
              I'm <strong>Tobilola MOTUNRAYO Adebayo</strong> — an AI Product Builder and
              UI/UX Designer with a passion for turning complex problems into intuitive,
              human-centered digital experiences. My work spans product design, illustration,
              and AI-augmented development — from the <strong>Haiven</strong> estate platform
              serving thousands of residents across Lagos, to the <strong>LBL Wellness Clinic</strong>
              connecting patients with care in Georgia.
            </p>
            <p>
              I bring a <strong>systems-thinking</strong> mindset to every project, combining
              deep user research with rapid prototyping and cross-functional collaboration.
              Whether designing a <strong>mobile app</strong> for emergency reporting (AlertMe),
              building a digital ecosystem for the Edo College Old Boys Association (<strong>ECOBA</strong>),
              or crafting <strong>vector illustrations</strong> for digital products — I focus on
              clarity, accessibility, and measurable impact.
            </p>
            <p>
              My toolkit spans <strong>Figma</strong>, design systems, product strategy, and
              AI-augmented workflows. I believe the best products aren't just seen — they're felt.
              Every pixel, every interaction, every decision serves one purpose: making the complex
              feel simple. That's the work I do.
            </p>
            <p>
              Outside of design, I'm exploring how AI can augment the creative workflow,
              building side projects, and mentoring the next generation of African designers
              and product builders.
            </p>
          </div>

          <div class="stats-row">
            ${STATS.map(s => `
              <div class="stat-item">
                <div class="stat-number" data-target="${s.number}">${s.number}</div>
                <div class="stat-label">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="about-right reveal reveal-delay-2">
          <div class="skills-frame">
            <img src="/images/BAM.png" alt="Skills & Expertise" />
          </div>
        </div>

      </div>
    </div>
  `;

  // Show skills image if available, hide placeholder
}
