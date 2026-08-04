class Mission extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section mission-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">OUR PURPOSE</span>
            <h2 class="section-title">Mission</h2>
          </div>
          <div class="mission-card">
            <div class="mission-icon-wrapper">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <p class="mission-text">
              GNSC promotes scientific research and technological innovation worldwide by fostering meaningful collaboration among Nepali scientists, researchers, and institutions.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-mission', Mission);
