class Objectives extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section objectives-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">CORE PILLARS</span>
            <h2 class="section-title">Objectives</h2>
          </div>
          
          <div class="pillars-grid">
            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 class="pillar-title">Conferences & Workshops</h3>
              <p class="pillar-desc">Convening conferences, seminars, and workshops in both digital & in-person formats.</p>
            </div>

            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 class="pillar-title">Research & Publications</h3>
              <p class="pillar-desc">Publishing rigorous research findings and actionable policy briefs for academic progress.</p>
            </div>

            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 class="pillar-title">Supporting Scientists</h3>
              <p class="pillar-desc">Supporting emerging and underrepresented Nepali scientists through mentorship and opportunity.</p>
            </div>

            <div class="pillar-card">
              <div class="pillar-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 class="pillar-title">Scientific Policy</h3>
              <p class="pillar-desc">Championing evidence-based scientific policy to drive sustainable global and local growth.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-objectives', Objectives);
