class AboutHistory extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section history-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">OUR JOURNEY</span>
            <h2 class="section-title">History & Milestones</h2>
          </div>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-year">2020</div>
              <h3 class="timeline-title">Foundation & Global Assembly</h3>
              <p class="timeline-desc">
                Established as an international network uniting Nepali academics, researchers, and scientists across 15+ countries to address pressing scientific challenges.
              </p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2021</div>
              <h3 class="timeline-title">Monthly Series Launch</h3>
              <p class="timeline-desc">
                Inaugurated the Monthly Conversation Series, providing a regular global forum for peer-reviewed research presentations and scientific discourse.
              </p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2023</div>
              <h3 class="timeline-title">Research Policy Briefs & Mentorship</h3>
              <p class="timeline-desc">
                Expanded initiatives to include evidence-based policy briefs and dedicated mentorship for early-career Nepali scientists worldwide.
              </p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2024+</div>
              <h3 class="timeline-title">Global Academic Partnership</h3>
              <p class="timeline-desc">
                Partnering with international university departments and research laboratories to champion collaborative grants and global symposiums.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-about-history', AboutHistory);
