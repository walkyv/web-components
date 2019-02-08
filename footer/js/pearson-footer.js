(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template');

  const COPYRIGHT_TEXT = `Copyright © 1996-${new Date().getFullYear()} Pearson Education Inc. All Rights Reserved.`;


  template.innerHTML = ` 
  <style>
    .hidden{display:none!important}*{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;bottom:0;width:inherit;padding:0 1em 24px;font-family:Open Sans,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;color:#252525;background-color:#fff}@media (max-width:979px){:host{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}:host([theme=dark]){color:#fff;background:#005a70}:host([theme=dark]) a{color:inherit}:host([theme=dark]) li{border-color:#fff}a{color:#047b9c}a:focus,a:hover{color:#005a70;text-decoration:none}ul{margin:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}li{margin-right:1em;padding-right:1em;border-right:1px solid #000}@media (max-width:979px){li{margin-bottom:12px}}@media (max-width:979px){li:last-child{border:0}}.copyright{margin:0;font-size:14px}@media (max-width:979px){.copyright{text-align:center}}
  </style>
  <ul class="links">
    <li class="terms"><a href="https://www.pearson.com/us/terms-of-use.html" target="_blank">Terms of Use</a></li>
    <li class="privacy"><a href="https://www.pearson.com/us/privacy-statement.html" target="_blank">Privacy Policy</a></li>
    <li class="accessibility hidden"><a href="https://www.pearson.com/us/accessibility.html" target="_blank">Accessibility</a></li>
    <li class="patent hidden"><a href="https://www.pearson.com/us/patent-notice.html" target="_blank">Patent Notice</a></li>
    <li class="support hidden"><a href="https://www.pearson.com/us/support.html" target="_blank">Support</a></li>
  </ul>
  <p class="copyright">${COPYRIGHT_TEXT}</p>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-footer');

  class Footer extends HTMLElement {
    static get observedAttributes() {
      return ['accessibility', 'permissions', 'support', 'theme'];
    }

    get theme() {
      return this.getAttribute('theme');
    }

    set theme(theme) {
      this.setAttribute('theme', theme);
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const clone = template.content.cloneNode(true);

      this.copyrightElement = clone.querySelector('.copyright');

      this.shadowRoot.appendChild(clone);
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name !== 'theme' && newValue !== null) {
        this.shadowRoot.querySelector(`.${name}`).classList.remove('hidden');
      }
    }

    connectedCallback() {
      if (
        !this.hasAttribute('role') ||
        this.getAttribute('role') !== 'footer'
      ) {
        this.setAttribute('role', 'footer');
      }
    }
  }
  customElements.define('pearson-footer', Footer);
})(window, document);
