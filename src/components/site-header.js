class SiteHeader extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    const isSubfolder = path.includes('/about') || path.includes('/presentations') || path.includes('/contact');
    const rootRel = isSubfolder ? '../' : './';

    this.innerHTML = `
      <header class="site-header">
        <div class="container nav-container">
          <a href="${rootRel}" class="logo">GNSC</a>
          
          <button class="mobile-menu-toggle" aria-label="Toggle navigation menu" id="menu-toggle-btn">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>

          <nav class="nav-links" id="nav-links">
            <a href="${rootRel}">HOME</a>
            <a href="${rootRel}about">ABOUT</a>
            <a href="${rootRel}presentations">PRESENTATIONS</a>
            <a href="${rootRel}contact">CONTACT</a>
          </nav>
        </div>
      </header>
    `;

    this.bindMenuToggle();
  }

  bindMenuToggle() {
    const toggleBtn = this.querySelector('#menu-toggle-btn');
    const header = this.querySelector('.site-header');
    const navLinks = this.querySelectorAll('.nav-links a');

    if (toggleBtn && header) {
      toggleBtn.addEventListener('click', () => {
        header.classList.toggle('mobile-menu-open');
      });

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          header.classList.remove('mobile-menu-open');
        });
      });
    }
  }
}

customElements.define('site-header', SiteHeader);
