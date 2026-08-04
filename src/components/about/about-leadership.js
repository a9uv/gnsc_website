class AboutLeadership extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section leadership-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">GOVERNANCE & VISION</span>
            <h2 class="section-title">Leadership & Advisory</h2>
          </div>
          <div class="leadership-grid">
            <div class="leader-card">
              <div class="leader-avatar">GS</div>
              <h3 class="leader-name">Executive Council</h3>
              <p class="leader-role">Steering Committee</p>
              <p class="leader-bio">Overseeing global strategy, monthly academic sessions, and institutional partnerships.</p>
            </div>
            <div class="leader-card">
              <div class="leader-avatar">RA</div>
              <h3 class="leader-name">Research Advisory Board</h3>
              <p class="leader-role">Academic Oversight</p>
              <p class="leader-bio">Senior professors and scientists advising on peer reviews, publication quality, and research ethics.</p>
            </div>
            <div class="leader-card">
              <div class="leader-avatar">MC</div>
              <h3 class="leader-name">Mentorship Network</h3>
              <p class="leader-role">Early Career Leads</p>
              <p class="leader-bio">Guiding doctoral candidates, postdocs, and young researchers in career development.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-about-leadership', AboutLeadership);
