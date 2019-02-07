(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template');
  template.innerHTML = ` 
 <style>
html{font-size:.875rem}body{font-family:Open Sans,Calibri,Tahoma,sans-serif;color:#252525}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:20px}h1+h2{margin-top:40px}h2+h3,h3+h4,h4+h5,h5+h6{margin-top:6px}header{margin-bottom:20px}header h1+.subtitle{margin-top:34px}aside h1{font-size:1.25rem}aside h2{font-size:1.1rem}aside h3{font-size:1rem}aside h4,aside h5,aside h6{font-size:.8rem}table{width:100%;max-width:100%;margin-bottom:35px;border-collapse:collapse}table td,table th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left}table thead th{vertical-align:bottom;border-top:0}a{color:#047a9c;text-decoration:underline}a.active,a:active,a:hover{color:#005a70;text-decoration:none}a:focus{color:#005a70;text-decoration:none;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}abbr,abbr[title]{text-decoration:none}ins:before{content:"+"}ins:after{content:"+"}mark{background:#ffb81c}small{font-size:.85714rem;line-height:1.14286rem}sub,sup{font-size:90%}sub{top:.2rem}sup{top:-.2rem}pre{max-width:100%;overflow-x:auto}code,kbd,pre{font-family:Monaco,Lucida Console,monospace}:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff) format("woff");font-weight:100;font-style:normal}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff) format("woff");font-weight:100;font-style:italic}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff) format("woff");font-weight:400;font-style:normal}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff) format("woff");font-weight:400;font-style:italic}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff) format("woff");font-weight:600;font-style:normal}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff) format("woff");font-weight:600;font-style:italic}.pe-base-fontsize{font-size:.875rem}.pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.pe-copy{font-size:1rem;line-height:1.57143rem;color:#252525}.pe-copy--secondary,.pe-label--secondary{color:#6a7070}.pe-copy--small{font-size:.85714rem;line-height:1.42857rem;color:#252525}.pe-copy--large,.pe-heading-level6,h6,header h5+.subtitle{font-size:1.14286rem;line-height:1.71429rem;color:#252525}.pe-paragraph,p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.pe-paragraph--last{margin-bottom:0;color:#252525}.pe-lead{font-size:1.42857rem;line-height:2rem}.pe-lead,.pe-page-title{font-weight:lighter;color:#252525}.pe-page-title{font-size:2.71429rem;line-height:3.71429rem}.pe-heading-level1,.pe-page-title--small,h1{font-size:2rem;line-height:2.71429rem;font-weight:lighter;color:#252525}.pe-heading-level3,.pe-heading-level4,.pe-title,h3,h4,header h2+.subtitle,header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400;color:#252525}.pe-heading-level5,.pe-title--small,h5,header h4+.subtitle{font-size:1.28571rem;line-height:1.57143rem;font-weight:400;color:#252525}.pe-heading-level2,.pe-title--large,h2,header h1+.subtitle{font-size:1.71429rem;line-height:2rem;font-weight:400;color:#252525}.pe-page-title--secondary,.pe-title--secondary{color:#6a7070}.pe-label{font-size:1rem;line-height:1.28571rem}.pe-label.pe-label--inverse{color:#fff}.pe-label--secondary.pe-label--inverse{color:#f5f5f5}.pe-label--small{font-size:.85714rem;line-height:1.14286rem}.pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.pe-bold,.pe-label--bold{font-weight:600}.pe-list{margin:12px 0;padding-left:1.85714rem}.pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.pe-list li>ol,.pe-list li>ul{margin-top:.42857rem}.pe-list.pe-styled-lists--ordered{list-style-type:decimal}.pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists--unordered{list-style-type:disc}.pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.pe-list--unstyled{list-style:none;padding-left:0}.pe-list--unstyled ul{padding-left:1.85714rem}.pe-heading-level1,h1{margin-bottom:6px}.pe-heading-level2,h2,header h1+.subtitle{margin-bottom:6px}.pe-heading-level3,h3,header h2+.subtitle{font-weight:700;margin-bottom:6px}.pe-heading-level4,h4,header h3+.subtitle{margin-bottom:6px}.pe-heading-level5,h5,header h4+.subtitle{margin-bottom:6px}.pe-heading-level6,h6,header h5+.subtitle{margin-bottom:6px}*+[class^=pe-heading-level]{margin-top:20px}.pe-code{color:#f5f5f5;font-size:1rem;line-height:1.42857rem;background:#005a70;padding:30px 50px}.pe-code,.pe-code-inline,.pe-kbd{font-family:Monaco,Lucida Console,monospace}.pe-code-inline,.pe-kbd{background:#e9e9e9;padding:0 4px}.hidden{display:none!important}footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:24px;padding:0 1em;font-family:Open Sans,Arial,Helvetica,sans-serif;font-size:14px}@media (max-width:979px){footer{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}footer.dark li{border-right:1px solid #fff}footer.dark a{color:#fff;border-color:#fff}footer.dark .copyright{color:#fff}.links{margin:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.links li{margin-right:1em;padding-right:1em;border-right:1px solid #000}@media (max-width:979px){.links li{margin-bottom:12px}}@media (max-width:979px){.links li:last-child{border:0}}.copyright{margin:0;font-size:14px}@media (max-width:979px){.copyright{text-align:center}}      </style>
      <footer>
        <ul class="links">
          <li class="terms"><a href="#">Terms of Use</a></li>
          <li class="privacy"><a href="#">Privacy Policy</a></li>
          <li class="accessibility hidden"><a href="#">Accessibility</a></li>
          <li class="permissions hidden"><a href="#">Permissions</a></li>
          <li class="support hidden"><a href="#">Support</a></li>
        </ul>
        <p class="copyright pe-label"></p>
      </footer>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-footer');

  class Footer extends HTMLElement {
    static get observedAttributes() {
      return ['accessibility', 'permissions', 'support', 'dark']
    }

    get dark () {
      return this.hasAttribute('dark')
    }

    get accessibility () {
      return this.hasAttribute('accessibility')
    }

    get permissions () {
      return this.hasAttribute('permissions')
    }

    get support () {
      return this.hasAttribute('support')
    }

    set darkMode (bool) {
      if (bool === true) {
        this.shadowRoot.querySelector('footer').classList.add('dark');
      }
    }
    set accessibilityLink (bool) {
      if (bool === true) {
        this.shadowRoot.querySelector('.accessibility').classList.remove('hidden');
      }
    }

    set permissionsLink (bool) {
      if (bool === true) {
        this.shadowRoot.querySelector('.permissions').classList.remove('hidden');
      }
    }

    set supportLink (bool) {
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
      copyright.innerHTML = 'Copyright ' + new Date().getFullYear() + ' Pearson Education Inc. All Rights Reserved.';
      console.log(this.accessibility);
      this.accessibilityLink = this.accessibility;
      this.permissionsLink = this.permissions;
      this.supportLink = this.support;
      this.darkMode = this.dark
    }

  }
  customElements.define('pearson-footer', Footer);
})(window, document);
