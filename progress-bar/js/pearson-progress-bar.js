(function(w, doc) {
  'use strict';

  // Create a template element
  const component = doc.createElement('template'),
    liveRegion = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below
  liveRegion.innerHTML = `
        <div role="alert" aria-live="polite" class="loading-bar-liveregion" id="liveRegion">
          <!-- insert loaded confirmation message here, visually hidden region -->
        </div>
  `;

  component.innerHTML = ` 
    <style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");.loading-bar-liveregion{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}:host .pe-progress-bar{position:relative;padding-bottom:16px}:host .pe-progress-bar .fullbar{width:100%;text-align:center;margin:0;line-height:18px;font-size:14px;font-family:Open Sans,Calibri,Tahoma,sans-serif}:host .pe-progress-bar .fullbar:after{content:"";height:4px;width:100%;position:absolute;bottom:4px;left:0;background-color:#c7c7c7}:host .pe-progress-bar.left-aligned .fullbar{text-align:left}:host .pe-progress-bar.right-aligned .fullbar{text-align:right}:host .pe-progress-bar div[role=progressbar]{height:12px;width:0;position:absolute;left:0;bottom:0;background-color:#19a6a4;-webkit-transition:.2s;transition:.2s;-webkit-animation:shift .2s linear infinite;animation:shift .2s linear infinite}:host .pe-progress-bar.loading div[role=progressbar]{background-image:-webkit-linear-gradient(315deg,#19a6a4 33.33%,#daf0ed 0,#daf0ed 50%,#19a6a4 0,#19a6a4 83.33%,#daf0ed 0,#daf0ed);background-image:linear-gradient(135deg,#19a6a4 33.33%,#daf0ed 0,#daf0ed 50%,#19a6a4 0,#19a6a4 83.33%,#daf0ed 0,#daf0ed);background-size:18px 18px}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@media screen and (prefers-reduced-motion:reduce){:host .pe-progress-bar div[role=progressbar]{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:unset!important;transition:unset!important}}
    
    </style>
     <div class="pe-progress-bar">
      <p class="fullbar" id="label">0%</p>
      <div role="progressbar" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0" id="progress"></div>
  </div>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(component, 'pearson-progress-bar');

  class ProgressBar extends HTMLElement {
    static get observedAttributes() {
      return ['progress', 'type', 'max', 'alignment', 'label'];
    }

    get alignment() {
      return this.getAttribute('alignment');
    }

    get label() {
      return this.getAttribute('label');
    }

    get progress() {
      return parseInt(this.getAttribute('progress'), 10);
    }

    set progress(newValue) {
      this.setAttribute('progress', newValue);
    }

    get type() {
      return this.getAttribute('type');
    }

    get max() {
      return parseInt(this.getAttribute('max'), 10);
    }

    set titleAlignment(alignment) {
      this.wrapperElement.classList.add(alignment);
    }

    set progressBar(progress) {
      this.loadingBar.setAttribute('aria-valuenow', progress);
      this.loadingBar.setAttribute('style', 'width: ' + progress + '%;');
      if (this.label === null && this.type !== 'static') {
        this.labelElement.innerHTML = progress + '%';
      } else {
        this.labelElement.innerHTML = this.label;
      }
    }

    set loaderType(value) {
      this.wrapperElement.classList.add(value);
    }

    set maxValue(value) {
      this.loadingBar.setAttribute('aria-valuemax', value);
    }

    set alertMessage(message) {
      this.liveRegion.innerHTML = message;
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const componentClone = component.content.cloneNode(true);
      const liveRegionClone = liveRegion.content.cloneNode(true);

      this.liveRegion = liveRegionClone.querySelector('#liveRegion');

      this.loadingBar = componentClone.querySelector('[role=progressbar]');
      this.wrapperElement = componentClone.querySelector('.pe-progress-bar');
      this.labelElement = componentClone.querySelector('#label');

      this.shadowRoot.appendChild(liveRegionClone);
      this.shadowRoot.appendChild(componentClone);
    }

    connectedCallback() {
      if (!this.hasAttribute('progress')) {
        this.setAttribute('progress', '0');
      }

      this.progressBar = this.progress;
      this.loaderType = this.type;
      this.maxValue = this.max;
      this.titleAlignment = this.alignment;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (this.type !== 'loading') return;

      if (name === 'progress') {
        this.progressBar = newValue;

        if (oldValue === '0') {
          this.alertMessage = 'Starting.';
        }

        if (this.progress % 20 === 0) {
          this.alertMessage = this.progress + ' percent loaded.';
        }

        if (this.progress === 100) {
          this.alertMessage = 'Finished loading.';
          this.dispatchEvent(
            new Event('loaded', {
              bubbles: true
            })
          );
        }
      }
    }
  }
  customElements.define('pearson-progress-bar', ProgressBar);
})(window, document);
