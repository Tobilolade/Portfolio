function linkLabel(url) {
  if (!url) return '';
  if (url.includes('behance.net')) return 'View on Behance';
  return 'View Live Website';
}

function shortLabel(url) {
  if (!url) return '';
  if (url.includes('behance.net')) return 'Behance';
  return 'Website';
}

const PROJECTS = [
  {
    id: 'haiven-web',
    title: 'Haiven — Web Dashboard',
    tags: ['PropTech', 'Web', 'Dashboard', 'IoT'],
    desc: 'Admin dashboard for property managers to oversee access control, billing, maintenance, and IoT across multiple estates.',
    image: '/images/case-haiven.png',
    url: 'https://www.haiven.net/',
    figmaUrl: '',
    detail: {
      overview: 'Haiven is a smart community and estate management platform that brings digital access control, visitor management, utility billing, and community engagement into a single dashboard. It serves property managers, residents, and utility admins across residential estates and commercial properties.',
      role: 'Product Designer',
      duration: '6 months',
      tools: 'Figma, Next.js, IoT Systems',
      problem: 'Property managers juggled multiple disconnected tools for gate access, billing, maintenance requests, and resident communication.',
      solution: 'Designed a unified operations dashboard with real-time access control, automated billing, maintenance tracking, and IoT energy monitoring.',
      results: [
        'Single platform replacing 4+ separate tools for estate management',
        'Real-time access control & visitor log tracking',
        'Automated billing with utility cost recovery',
        'IoT integration for smart metering and energy monitoring',
        'Serving major estates including Cedarwood, Lekki Gardens',
      ],
      process: 'Conducted user research with facility managers, security personnel, and utility admins across multiple Lagos estates. Iterated on the dashboard through usability testing focused on the billing and access control flows.',
    },
  },
  {
    id: 'haiven-mobile',
    title: 'Haiven — Mobile App',
    tags: ['PropTech', 'Mobile', 'iOS', 'Android'],
    desc: 'Resident-facing app for digital gate access, bill payments, visitor management, and community engagement.',
    image: '/images/case-haiven-mobile.png',
    url: '',
    figmaUrl: '',
    appStoreUrl: 'https://apps.apple.com/ng/app/haiven-estate-app/id6737174043',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.anonymous.haiven',
    detail: {
      overview: 'The Haiven mobile app empowers residents with seamless tools for secure access control, effortless bill payments, visitor permissions, and community engagement — all from their phone.',
      role: 'Product Designer',
      duration: '6 months',
      tools: 'Figma, React Native, IoT Systems',
      problem: 'Residents had no unified way to manage gate access, pay estate bills, or handle visitor entry — relying on manual processes and multiple phone calls.',
      solution: 'Designed an intuitive mobile app with QR code gate access, in-app wallet for bill payments, one-time guest codes, facility booking, and real-time community alerts.',
      results: [
        '3.9/5 App Store rating with thousands of active users',
        'Seamless digital access control with QR code & PIN entry',
        'In-app bill payments with digital wallet & receipt downloads',
        'Electricity token vending directly in the app',
        'Facility booking & artisan service scheduling',
      ],
      process: 'Conducted user research with residents across multiple Lagos estates to understand pain points in gate access and bill payments. Iterated on the mobile UX through multiple rounds of usability testing, focusing on the access control and payment flows.',
    },
  },
  {
    id: 'ecoba',
    title: 'ECOBA — Alumni Association Platform',
    tags: ['Web', 'Community', 'Brand Design', 'Figma'],
    desc: 'Designed a digital ecosystem for the Edo College Old Boys Association — connecting alumni globally through community, legacy, and opportunity.',
    image: '/images/ECOBA.png',
    url: '',
    figmaUrl: 'https://www.figma.com/design/BoWjEQIIF2YM8NHqJBLAlH/Ecoba_Website?node-id=0-1&t=CeR9a2lhKQg4gX6Y-1',
    detail: {
      overview: 'ECOBA (Edo College Old Boys Association) is the official alumni network of Edo College, Benin City — founded in 1937. The platform connects former students ("ECOBITEs") across generations, locations, and professions, creating a lifelong brotherhood rooted in shared identity, legacy, and service.',
      role: 'UI/UX Designer',
      duration: 'Ongoing',
      tools: 'Figma',
      problem: 'ECOBA needed a digital platform that unites alumni globally — preserving the school\'s legacy, enabling mentorship, supporting education through an endowment fund, and fostering economic opportunities within the ECOBITE community.',
      solution: 'Designed a multi-functional alumni ecosystem featuring community chapters, an endowment fund portal, job board, business directory, merchandise store, and a heritage section — all built around the ECOBITE identity of leadership, culture, empathy, innovation, and dignity.',
      results: [
        'Global alumni network connecting generations of ECOBITEs',
        'Endowment fund platform for scholarships and school support',
        'Job board and business directory for ECOBITE community',
        'Heritage section preserving Edo College history and legacy',
        'Merchandise store and membership registration system',
      ],
      process: 'Collaborated with the ECOBA leadership team to understand the needs of alumni across different generations and geographies. Designed a platform that balances community engagement, legacy preservation, and economic opportunity — guided by the motto "Bridging Memories, Building Futures."',
    },
  },
  {
    id: 'lbl-wellness',
    title: 'LBL Wellness Clinic — Healthcare Brand',
    tags: ['Healthcare', 'Web', 'Brand Design', 'Wellness'],
    desc: 'Designed a full-service wellness clinic website for Little By Little — offering HRT, IV therapy, weight loss, and mental health services in Georgia.',
    image: '/images/LLB.png',
    url: 'https://lblwellnessclinic.com/',
    figmaUrl: '',
    detail: {
      overview: 'LBL Wellness Clinic (Little By Little) is a wellness clinic in Georgia offering a comprehensive range of services including Hormone Replacement Therapy, IV Hydration, Weight Loss Medication, Laser Hair Removal, Concierge Medicine, and High-Performance Therapy — led by Latrina, a dual-certified FNP and PMHNP.',
      role: 'UI/UX Designer',
      duration: 'Ongoing',
      tools: 'Figma, Web Development',
      problem: 'The clinic needed a modern, trustworthy digital presence that communicates their full range of services — from medical weight loss to mental health therapy — while conveying warmth, professionalism, and accessibility.',
      solution: 'Designed a clean, service-focused website with clear service categories, online booking integration, mobile IV therapy area pages for multiple Georgia locations, and a warm brand voice centered on the "Little By Little" philosophy.',
      results: [
        'Full-service clinic website with 9+ service pages',
        'Online booking and consultation integration',
        'Mobile IV therapy landing pages for 7 Georgia locations',
        'Blog, FAQs, and about sections for patient education',
        'Warm, trustworthy brand identity aligned with "your journey, your pace"',
      ],
      process: 'Collaborated with Latrina to understand the clinic\'s holistic wellness approach. Designed a service-first information architecture, created location-specific pages for mobile IV therapy, and built a clean UI that balances medical professionalism with approachable warmth.',
    },
  },
  {
    id: 'alertme',
    title: 'AlertMe — Emergency Report Mobile App',
    tags: ['Mobile', 'UI/UX', 'Figma', 'Case Study'],
    desc: 'A mobile app for reporting incidents and emergencies — designed with a focus on speed, clarity, and accessibility in crisis situations.',
    image: '/images/case-alertme.png',
    url: 'https://www.behance.net/gallery/225232283/AlertMe-An-IncidenceEmergency-Report-Mobile-App',
    figmaUrl: '',
    detail: {
      overview: 'AlertMe is a mobile application designed to streamline incident and emergency reporting. Built for speed and accessibility, the app enables users to quickly report emergencies, upload evidence, and notify relevant responders — all within a few taps.',
      role: 'UI/UX Designer (collaborative team)',
      duration: 'May 2025',
      tools: 'Figma',
      problem: 'Reporting emergencies and incidents is often a slow, fragmented process — users have to make phone calls, remember details under stress, and navigate complex reporting systems.',
      solution: 'Designed a streamlined mobile reporting experience with guided incident categorization, one-tap photo/video evidence upload, location auto-detection, and real-time status tracking — reducing report submission time to under 30 seconds.',
      results: [
        'Published on Behance with strong team collaboration across 10+ contributors',
        'Intuitive incident reporting flow designed for high-stress usage scenarios',
        'Location-aware reporting with automatic address detection',
        'Evidence upload (photo/video) integrated directly into the reporting flow',
        'Real-time report status tracking for users',
      ],
      process: 'Worked as part of a collaborative team to design and refine the AlertMe mobile experience. Focused on creating a calm, guided interface that reduces cognitive load during emergencies while ensuring all critical information is captured efficiently.',
    },
  },
  {
    id: 'digital-security-illustration',
    title: 'Digital Security & Protection — Illustration',
    tags: ['Illustration', 'Vector Art', 'Figma'],
    desc: 'A set of digital security and protection illustrations focused on cybersecurity, secure transactions, and online safety — crafted with clean vector art.',
    image: '/images/case-digital-security.png',
    url: 'https://www.behance.net/gallery/219635173/Digital-Security-Protection-Illustration',
    figmaUrl: '',
    detail: {
      overview: 'A collection of digital security and protection illustrations designed to visually communicate cybersecurity concepts — secure transactions, data protection, and online safety — using clean, modern vector art in Figma.',
      role: 'Illustrator',
      duration: 'Feb 2025',
      tools: 'Figma',
      problem: 'Complex cybersecurity concepts needed clear, approachable visual representations that could be used across digital products, presentations, and marketing materials.',
      solution: 'Created a series of clean vector illustrations using Figma, each visually communicating a specific security concept — encryption, secure payments, identity protection, and threat prevention.',
      results: [
        'Published on Behance with strong engagement',
        'Versatile illustrations usable across web, mobile, and marketing',
        'Clean vector style adaptable to different brand contexts',
      ],
      process: 'Researched common cybersecurity visual metaphors, sketched concepts, and refined in Figma. Focused on clean lines, consistent styling, and immediate visual clarity for each concept.',
    },
  },
  {
    id: 'qr-illustration',
    title: 'QR Code Interaction — Illustration',
    tags: ['Illustration', 'Vector Art', 'Figma'],
    desc: 'An illustration of a hand holding a smartphone scanning a QR code — part of a vector art series exploring modern digital interactions.',
    image: '/images/case-qr-illustration.png',
    url: 'https://www.behance.net/gallery/218834147/Illustration',
    figmaUrl: '',
    detail: {
      overview: 'An illustration depicting a person\'s hand holding a smartphone scanning a QR code — exploring the intersection of physical and digital interaction through clean, minimal vector art.',
      role: 'Illustrator',
      duration: 'Feb 2025',
      tools: 'Figma',
      problem: 'Modern digital interactions like QR code scanning needed visually engaging illustrations that feel natural and intuitive rather than technical or cold.',
      solution: 'Created a warm, human-centered illustration showing a hand naturally holding a phone while scanning a QR code, using clean vector shapes and a modern color palette.',
      results: [
        'Published on Behance as part of ongoing illustration series',
        'Versatile for use in product onboarding, marketing, and editorial content',
        'Demonstrates ability to humanize digital concepts through illustration',
      ],
      process: 'Started with hand sketches to find a natural hand position, then translated to vector in Figma. Focused on clean curves, balanced composition, and a modern, approachable aesthetic.',
    },
  },
];

export function initWork() {
  const work = document.getElementById('work');

  work.innerHTML = `
    <div class="work-header max-w reveal">
      <div>
        <div class="section-label">Selected Work</div>
        <h2 class="section-title">Projects that <span class="section-title-gradient">move</span> the needle.</h2>
        <p style="color: var(--gray-500); font-size: 0.9rem; max-width: 42ch; line-height: 1.7; margin-top: 1rem;">
          Each project started with a real problem and ended with measurable change.
        </p>
      </div>
    </div>

    <div class="projects-grid max-w" style="margin-top: 3rem;">
      ${PROJECTS.map((p, i) => `
        <div class="project-card reveal reveal-delay-${i + 1}" data-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.title} case study">
          <div class="project-cover ${p.id === 'haiven-mobile' ? 'cover-mobile' : ''}">
            <img src="${p.image}" alt="${p.title}" loading="lazy" />
            <div class="project-cover-overlay">
              <div class="project-view-btn">View Case Study →</div>
              <div class="project-links" style="display:flex;gap:0.5rem;margin-top:0.5rem;">
                ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" class="project-link-btn" onclick="event.stopPropagation()">${shortLabel(p.url)}</a>` : ''}
                ${p.figmaUrl ? `<a href="${p.figmaUrl}" target="_blank" rel="noopener" class="project-link-btn" onclick="event.stopPropagation()">🅵 Figma</a>` : ''}
                ${p.appStoreUrl ? `<a href="${p.appStoreUrl}" target="_blank" rel="noopener" class="project-link-btn" onclick="event.stopPropagation()"> App Store</a>` : ''}
                ${p.playStoreUrl ? `<a href="${p.playStoreUrl}" target="_blank" rel="noopener" class="project-link-btn" onclick="event.stopPropagation()">▶ Play Store</a>` : ''}
              </div>
            </div>
          </div>
          <div class="project-info">
            <div class="project-tags">
              ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Modal -->
    <div class="modal-overlay" id="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-box">
        <button class="modal-close" id="modal-close-btn" aria-label="Close">&times;</button>
        <div id="modal-content"></div>
      </div>
    </div>
  `;

  // Card click → open modal
  work.querySelectorAll('.project-card').forEach(card => {
    const open = () => openModal(card.dataset.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });

  // Close modal
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('project-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');

  const hasLinks = p.url || p.figmaUrl || p.appStoreUrl || p.playStoreUrl;

  content.innerHTML = `
    <img class="modal-cover ${p.id === 'haiven-mobile' ? 'modal-cover-mobile' : ''}" src="${p.image}" alt="${p.title}" />
    <div class="modal-tags">
      ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
    </div>
    <h2 class="modal-title" id="modal-title">${p.title}</h2>
    ${hasLinks ? `
      <div class="modal-links" style="display:flex;gap:0.75rem;margin-bottom:1.5rem;flex-wrap:wrap;">
        ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener" class="modal-link-btn">🌐 ${linkLabel(p.url)}</a>` : ''}
        ${p.figmaUrl ? `<a href="${p.figmaUrl}" target="_blank" rel="noopener" class="modal-link-btn">🅵 View Figma Design</a>` : ''}
        ${p.appStoreUrl ? `<a href="${p.appStoreUrl}" target="_blank" rel="noopener" class="modal-link-btn"> App Store</a>` : ''}
        ${p.playStoreUrl ? `<a href="${p.playStoreUrl}" target="_blank" rel="noopener" class="modal-link-btn">▶ Play Store</a>` : ''}
      </div>
    ` : ''}
    <div class="modal-body">
      <p>${p.detail.overview}</p>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:1.5rem 0;padding:1.25rem;background:var(--gray-900);border-radius:12px;">
        <div>
          <div style="font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-600);margin-bottom:0.3rem;">Role</div>
          <div style="font-size:0.875rem;color:var(--gray-300);">${p.detail.role}</div>
        </div>
        <div>
          <div style="font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-600);margin-bottom:0.3rem;">Duration</div>
          <div style="font-size:0.875rem;color:var(--gray-300);">${p.detail.duration}</div>
        </div>
        <div>
          <div style="font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-600);margin-bottom:0.3rem;">Tools</div>
          <div style="font-size:0.875rem;color:var(--gray-300);">${p.detail.tools}</div>
        </div>
      </div>

      <h4>🔍 The Problem</h4>
      <p>${p.detail.problem}</p>

      <h4>💡 The Solution</h4>
      <p>${p.detail.solution}</p>

      <h4>📊 Results</h4>
      <ul>
        ${p.detail.results.map(r => `<li>${r}</li>`).join('')}
      </ul>

      <h4>🔄 Process</h4>
      <p>${p.detail.process}</p>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close-btn').focus();
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
