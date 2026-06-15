export function initContact() {
  const contact = document.getElementById('contact');

  contact.innerHTML = `
    <div class="contact-inner">
      <div class="contact-availability reveal">
        <span class="availability-dot"></span>
        Available for freelance projects
      </div>

      <h2 class="contact-title reveal reveal-delay-1">
        Let's build something<br/>worth remembering.
      </h2>

      <p class="contact-sub reveal reveal-delay-2">
        Whether you have a product challenge, a design system to build,
        or just want to talk UX — I'd love to hear from you.
      </p>

      <a
        href="mailto:tobilola36@gmail.com"
        class="contact-email-link reveal reveal-delay-2"
        id="contact-email"
      >
        tobilola36@gmail.com
      </a>

      <div class="social-links reveal reveal-delay-3">
        <a href="https://www.behance.net/baybee_tobilolade" target="_blank" rel="noopener" class="social-link">Behance</a>
        <a href="https://www.linkedin.com/in/tobilola-adebayo/" target="_blank" rel="noopener" class="social-link">LinkedIn</a>
        <a href="https://x.com/Bambee_ox" target="_blank" rel="noopener" class="social-link">Twitter/X</a>
        <a href="/resume.pdf" target="_blank" rel="noopener" class="social-link">Resume</a>
        <a href="https://calendly.com/tobilola36/30min" target="_blank" rel="noopener" class="social-link">Book a Call</a>
      </div>

      <p class="footer-copy reveal reveal-delay-4">
        © ${new Date().getFullYear()} Tobilola Adebayo. Designed with intention. Built with Vite. ✦
      </p>
    </div>
  `;
}
