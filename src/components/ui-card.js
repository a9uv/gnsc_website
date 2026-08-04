class UICard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="ui-card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('ui-card', UICard);
