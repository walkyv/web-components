(function(w, doc) {
  'use strict';

  const currentDoc = doc.querySelector('link[href$="index.html"]').import;
  const template = currentDoc.querySelector('#template');

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-alert');

  class Alert extends HTMLElement {
    static get observedAttributes() {
      return ['severity', 'type'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      const clone = doc.importNode(template.content.cloneNode(true), true);

      this.alert = clone.querySelector('#peAlert');
      this.contentContainer = clone.querySelector('#contentContainer');
      this.content = clone.querySelector('#content');
      this.closeBtn = clone.querySelector('button[data-action="close-alert"]');

      this.shadowRoot.appendChild(clone);

      this.close = this.close.bind(this);
    }

    connectedCallback() {
      this.content.setAttribute('aria-hidden', 'false');
      this.closeBtn.addEventListener('click', this.close);
    }

    disconnectedCallback() {
      this.closeBtn.removeEventListener('click', this.close);
    }

    close() {
      this.remove();
    }

    get type() {
      return this.getAttribute('data-type');
    }

    get severity() {
      return this.getAttribute('data-severity');
    }
  }

  customElements.define('pearson-alert', Alert);
})(window, document);
