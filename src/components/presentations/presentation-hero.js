class PresentationHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="presentation-hero-section fade-in-on-scroll">
        <div class="container">
          <span class="section-tag">ACADEMIC KNOWLEDGE SHARING</span>
          <h1 class="presentation-hero-title">Monthly Presentation Series</h1>
          <p class="presentation-hero-subtitle">
            Explore peer-reviewed scientific lectures, research symposiums, and interdisciplinary talks given by Nepali scholars and global researchers.
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-presentation-hero', PresentationHero);
