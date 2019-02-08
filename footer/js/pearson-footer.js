(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template');
  template.innerHTML = ` 
 <style>
 .hidden{display:none!important}:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;bottom:0;width:inherit;padding:0 1em 24px;font-family:Open Sans,Arial,Helvetica,sans-serif;font-size:14px;background:#fff}@media (max-width:979px){:host{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}:host(.dark){background:#005a70}:host(.dark) li{border-right:1px solid #fff}:host(.dark) a{color:#fff;border-color:#fff}:host(.dark) .copyright{color:#fff}.links{margin:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.links li{margin-right:1em;padding-right:1em;border-right:1px solid #000}@media (max-width:979px){.links li{margin-bottom:12px}}@media (max-width:979px){.links li:last-child{border:0}}.copyright{margin:0;font-size:14px}@media (max-width:979px){.copyright{text-align:center}}
</style>
<ul class="links">
  <li class="terms"><a href="https://www.pearson.com/us/terms-of-use.html" target="_blank">Terms of Use</a></li>
  <li class="privacy"><a href="https://www.pearson.com/us/privacy-statement.html" target="_blank">Privacy Policy</a></li>
  <li class="accessibility hidden"><a href="https://www.pearson.com/us/accessibility.html" target="_blank">Accessibility</a></li>
  <li class="patent hidden"><a href="https://www.pearson.com/us/patent-notice.html" target="_blank">Patent Notice</a></li>
  <li class="support hidden"><a href="https://www.pearson.com/us/support.html" target="_blank">Support</a></li>
</ul>
<p class="copyright pe-label"></p>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-footer');

  class Footer extends HTMLElement {
    static get observedAttributes() {
      return ['accessibility', 'permissions', 'support', 'theme']
    }

    get theme () {
      return this.hasAttribute('theme')
    }

    get accessibility () {
      return this.hasAttribute('accessibility')
    }

    get permissions () {
      return this.hasAttribute('patent')
    }

    get support () {
      return this.hasAttribute('support')
    }

    set darkTheme (bool) {
      if (bool === true) {
        this.classList.add('dark');
      }
    }

    set showAccessibilityLink (bool) {
      if (bool === true) {
        this.shadowRoot.querySelector('.accessibility').classList.remove('hidden');
      }
    }

    set showPermissionsLink (bool) {
      if (bool === true) {
        this.shadowRoot.querySelector('.patent').classList.remove('hidden');
      }
    }

    set showSupportLink (bool) {
      if (bool === true) {
        this.shadowRoot.querySelector('.support').classList.remove('hidden');
      }
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const clone = template.content.cloneNode(true);
      this.shadowRoot.appendChild(clone);
    }

    connectedCallback() {
      const copyright = this.shadowRoot.querySelector('.copyright');
      copyright.innerHTML = 'Copyright © 1996-' + new Date().getFullYear() + ' Pearson Education Inc. All Rights Reserved.';
      this.showAccessibilityLink = this.accessibility;
      this.showPermissionsLink = this.permissions;
      this.showSupportLink = this.support;
      this.darkTheme = this.theme
    }

  }
  customElements.define('pearson-footer', Footer);
})(window, document);
