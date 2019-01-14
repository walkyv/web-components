var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var standard = doc.createElement('template'),
      alert = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below
  alert.innerHTML = '\n        <div role="alert" aria-live="polite" class="loading-bar-liveregion" id="liveregion">\n          <!-- insert loaded confirmation message here, visually hidden region -->\n        </div>\n  ';

  standard.innerHTML = ' \n    <style>\n    html{font-size:.875rem}body{font-family:Open Sans,Calibri,Tahoma,sans-serif;color:#252525}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:20px}h1+h2{margin-top:40px}h2+h3,h3+h4,h4+h5,h5+h6{margin-top:6px}header{margin-bottom:20px}header h1+.subtitle{margin-top:34px}aside h1{font-size:1.25rem}aside h2{font-size:1.1rem}aside h3{font-size:1rem}aside h4,aside h5,aside h6{font-size:.8rem}table{width:100%;max-width:100%;margin-bottom:35px;border-collapse:collapse}table td,table th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left}table thead th{vertical-align:bottom;border-top:0}a{color:#047a9c;text-decoration:underline}a.active,a:active,a:hover{color:#005a70;text-decoration:none}a:focus{color:#005a70;text-decoration:none;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}abbr,abbr[title]{text-decoration:none}ins:before{content:"+"}ins:after{content:"+"}mark{background:#ffb81c}small{font-size:.85714rem;line-height:1.14286rem}sub,sup{font-size:90%}sub{top:.2rem}sup{top:-.2rem}pre{max-width:100%;overflow-x:auto}code,kbd,pre{font-family:Monaco,Lucida Console,monospace}:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff) format("woff");font-weight:100;font-style:normal}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff) format("woff");font-weight:100;font-style:italic}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff) format("woff");font-weight:400;font-style:normal}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff) format("woff");font-weight:400;font-style:italic}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff) format("woff");font-weight:600;font-style:normal}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff) format("woff");font-weight:600;font-style:italic}.pe-base-fontsize{font-size:.875rem}.pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.pe-copy{font-size:1rem;line-height:1.57143rem;color:#252525}.pe-copy--secondary,.pe-label--secondary{color:#6a7070}.pe-copy--small{font-size:.85714rem;line-height:1.42857rem;color:#252525}.pe-copy--large,.pe-heading-level6,h6,header h5+.subtitle{font-size:1.14286rem;line-height:1.71429rem;color:#252525}.pe-paragraph,p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.pe-paragraph--last{margin-bottom:0;color:#252525}.pe-lead{font-size:1.42857rem;line-height:2rem}.pe-lead,.pe-page-title{font-weight:lighter;color:#252525}.pe-page-title{font-size:2.71429rem;line-height:3.71429rem}.pe-heading-level1,.pe-page-title--small,h1{font-size:2rem;line-height:2.71429rem;font-weight:lighter;color:#252525}.pe-heading-level3,.pe-heading-level4,.pe-title,h3,h4,header h2+.subtitle,header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400;color:#252525}.pe-heading-level5,.pe-title--small,h5,header h4+.subtitle{font-size:1.28571rem;line-height:1.57143rem;font-weight:400;color:#252525}.pe-heading-level2,.pe-title--large,h2,header h1+.subtitle{font-size:1.71429rem;line-height:2rem;font-weight:400;color:#252525}.pe-page-title--secondary,.pe-title--secondary{color:#6a7070}.pe-label{font-size:1rem;line-height:1.28571rem}.pe-label.pe-label--inverse{color:#fff}.pe-label--secondary.pe-label--inverse{color:#f5f5f5}.pe-label--small{font-size:.85714rem;line-height:1.14286rem}.pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.pe-bold,.pe-label--bold{font-weight:600}.pe-list{margin:12px 0;padding-left:1.85714rem}.pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.pe-list li>ol,.pe-list li>ul{margin-top:.42857rem}.pe-list.pe-styled-lists--ordered{list-style-type:decimal}.pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists--unordered{list-style-type:disc}.pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.pe-list--unstyled{list-style:none;padding-left:0}.pe-list--unstyled ul{padding-left:1.85714rem}.pe-heading-level1,h1{margin-bottom:6px}.pe-heading-level2,h2,header h1+.subtitle{margin-bottom:6px}.pe-heading-level3,h3,header h2+.subtitle{font-weight:700;margin-bottom:6px}.pe-heading-level4,h4,header h3+.subtitle{margin-bottom:6px}.pe-heading-level5,h5,header h4+.subtitle{margin-bottom:6px}.pe-heading-level6,h6,header h5+.subtitle{margin-bottom:6px}*+[class^=pe-heading-level]{margin-top:20px}.pe-code{color:#f5f5f5;font-size:1rem;line-height:1.42857rem;background:#005a70;padding:30px 50px}.pe-code,.pe-code-inline,.pe-kbd{font-family:Monaco,Lucida Console,monospace}.pe-code-inline,.pe-kbd{background:#e9e9e9;padding:0 4px}.loading-bar-liveregion{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.pe-progress-bar{position:relative;padding-bottom:16px}.pe-progress-bar .fullbar{width:100%;text-align:center;margin:0;line-height:18px;font-size:14px;font-family:Open Sans,Calibri,Tahoma,sans-serif}.pe-progress-bar .fullbar:after{content:"";height:4px;width:100%;position:absolute;bottom:4px;left:0;background-color:#c7c7c7}.pe-progress-bar.left-aligned .fullbar{text-align:left}.pe-progress-bar.right-aligned .fullbar{text-align:right}.pe-progress-bar div[role=progressbar]{height:12px;width:0;position:absolute;left:0;bottom:0;background-color:#19a6a4;-webkit-animation:shift .25s linear infinite;animation:shift .25s linear infinite}.pe-progress-bar.loading div[role=progressbar]{background-image:-webkit-linear-gradient(315deg,#19a6a4 33.33%,#daf0ed 0,#daf0ed 50%,#19a6a4 0,#19a6a4 83.33%,#daf0ed 0,#daf0ed);background-image:linear-gradient(135deg,#19a6a4 33.33%,#daf0ed 0,#daf0ed 50%,#19a6a4 0,#19a6a4 83.33%,#daf0ed 0,#daf0ed);background-size:18px 18px}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@media screen and (prefers-reduced-motion:reduce){.pe-progress-bar div[role=progressbar]{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:unset!important;transition:unset!important}}\n    </style>\n     <div class="pe-progress-bar">\n      <p aria-hidden="true" class="fullbar" id="label">0%</p>\n      <div role="progressbar" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0" id="progress"></div>\n  </div>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(standard, 'progress-indicator');

  var ProgressIndicator = function (_HTMLElement) {
    _inherits(ProgressIndicator, _HTMLElement);

    _createClass(ProgressIndicator, [{
      key: 'alignment',
      get: function get() {
        return this.getAttribute('alignment');
      }
    }, {
      key: 'text',
      get: function get() {
        return this.getAttribute('text');
      }
    }, {
      key: 'progress',
      get: function get() {
        return this.getAttribute('progress');
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }, {
      key: 'max',
      get: function get() {
        return this.getAttribute('max');
      }
    }, {
      key: 'titleAlignment',
      set: function set(alignment) {
        this.wrapper.classList.add(alignment);
      }
    }, {
      key: 'progressBar',
      set: function set(progress) {
        this.loadingBar.setAttribute('aria-valuenow', progress);
        this.loadingBar.setAttribute("style", "width: " + progress + "%;");
        if (this.text === null) {
          this.label.innerHTML = progress + "%";
        } else {
          this.label.innerHTML = this.text;
        }
      }
    }, {
      key: 'loaderType',
      set: function set(value) {
        this.wrapper.classList.add(value);
      }
    }, {
      key: 'maxValue',
      set: function set(value) {
        this.loadingBar.setAttribute('aria-valuemax', value);
      }
    }, {
      key: 'alertMessage',
      set: function set(message) {
        this.wrapper.querySelector('#liveregion').innerHTML = message;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['progress', 'type', 'max', 'alignment', 'text'];
      }
    }]);

    function ProgressIndicator() {
      _classCallCheck(this, ProgressIndicator);

      var _this = _possibleConstructorReturn(this, (ProgressIndicator.__proto__ || Object.getPrototypeOf(ProgressIndicator)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = standard.content.cloneNode(true);

      _this.loadingBar = clone.querySelector("[role=progressbar]");
      _this.wrapper = clone.querySelector('.pe-progress-bar');
      _this.label = clone.querySelector('#label');

      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(ProgressIndicator, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var alertClone = alert.content.cloneNode(true);
        this.progressBar = this.progress;
        this.loaderType = this.type;
        this.maxValue = this.max;
        this.titleAlignment = this.alignment;

        if (this.type === 'loading') {
          this.wrapper.appendChild(alertClone);
          this.label.setAttribute('aria-live', 'polite');
          this.label.setAttribute('role', 'status');
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'progress') {
          this.progressBar = newValue;
          if (this.type === 'loading') {
            if (parseInt(this.progress) % 20 === 0) {
              this.alertMessage = this.progress + ' percent loaded';
            }
            if (this.progress === '100') {
              this.alertMessage = 'Done loading';
              this.dispatchEvent(new Event('loaded', {
                bubbles: true
              }));
            } else {}
          }
        }
      }
    }]);

    return ProgressIndicator;
  }(HTMLElement);

  customElements.define('progress-indicator', ProgressIndicator);
})(window, document);