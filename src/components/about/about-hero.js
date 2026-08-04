class AboutHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="about-hero-section">
        <div class="container">
          <h1 class="about-hero-title">About GNSC</h1>
          <p class="about-hero-subtitle">
            Fostering global scientific inquiry, interdisciplinary research, and academic excellence within the Nepali diaspora and international research communities.
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-about-hero', AboutHero);
