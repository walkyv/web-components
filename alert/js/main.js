(function(w, doc) {
  'use strict';

  const currentDoc = doc.querySelector('link[href$="index.html"]').import;
  const template = currentDoc.querySelector('#template');

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-alert');

  class Alert extends HTMLElement {
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
      if (this.isAnimated) {
        this.alert.classList.toggle('animated');
      }
      
      if (this.severity === 'error') {
        this.contentContainer.setAttribute('role', 'alert');
        this.contentContainer.setAttribute('aria-live', 'assertive');
      } else {
        this.contentContainer.setAttribute('role', 'status');
        this.contentContainer.setAttribute('aria-live', 'polite');
      }

      this.alert.setAttribute('data-alert-type', this.type);

      if (this.type === 'global') {
        this.alert.classList.add('slideInDown');
      }

      this.content.setAttribute('aria-hidden', 'false');
      this.closeBtn.addEventListener('click', this.close);
    }


    disconnectedCallback() {
      this.closeBtn.removeEventListener('click', this.close);
    }

    close() {
      this.remove();
    }

    get isAnimated() {
      return this.hasAttribute('animated');
    }

    get type() {
      return this.getAttribute('type');
    }

    get severity() {
      return this.getAttribute('severity');
    }
  }

  customElements.define('pearson-alert', Alert);
})(window, document);
