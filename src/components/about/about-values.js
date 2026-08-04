class AboutValues extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section values-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">CORE GUIDELINES</span>
            <h2 class="section-title">Organizational Values</h2>
          </div>
          <div class="values-grid">
            <div class="value-card">
              <h3 class="value-title">Academic Rigor</h3>
              <p class="value-desc">Upholding highest standards of scientific methodology, peer review, and objective inquiry across disciplines.</p>
            </div>
            <div class="value-card">
              <h3 class="value-title">Global Collaboration</h3>
              <p class="value-desc">Connecting Nepali scholars worldwide to solve complex global challenges through interdisciplinary teamwork.</p>
            </div>
            <div class="value-card">
              <h3 class="value-title">Inclusive Mentorship</h3>
              <p class="value-desc">Nurturing emerging researchers, students, and underrepresented voices in STEM and humanities.</p>
            </div>
            <div class="value-card">
              <h3 class="value-title">Evidence-Based Impact</h3>
              <p class="value-desc">Translating research insights into actionable policy recommendations and community benefit.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-about-values', AboutValues);
