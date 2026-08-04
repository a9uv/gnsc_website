class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section contact-section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">CONNECT WITH US</span>
            <h2 class="section-title">Contact</h2>
          </div>
          <div class="contact-card">
            <div class="contact-info">
              <h3>Join the Conversation</h3>
              <p>Whether you'd like to present your research, attend our next monthly session, or collaborate with GNSC, we'd love to hear from you.</p>

            </div>
            <form class="contact-form" onsubmit="event.preventDefault(); alert('Thank you for reaching out! We will contact you shortly.');">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" required placeholder="Your full name" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required placeholder="your.email@example.com" />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" rows="4" required placeholder="How would you like to get involved?"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('gnsc-contact', Contact);
