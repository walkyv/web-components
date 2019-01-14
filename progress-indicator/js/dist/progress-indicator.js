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

  standard.innerHTML = ' \n    <style>\n    .loading-bar-liveregion{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.pe-progress-bar{position:relative;padding-bottom:16px}.pe-progress-bar .fullbar{width:100%;text-align:center;margin:0;line-height:18px;font-size:14px;font-family:Open Sans,Calibri,Tahoma,sans-serif}.pe-progress-bar .fullbar:after{content:"";height:4px;width:100%;position:absolute;bottom:4px;left:0;background-color:#c7c7c7}.pe-progress-bar.left-aligned .fullbar{text-align:left}.pe-progress-bar.right-aligned .fullbar{text-align:right}.pe-progress-bar div[role=progressbar]{height:12px;width:0;position:absolute;left:0;bottom:0;background-color:#19a6a4;-webkit-animation:shift .25s linear infinite;animation:shift .25s linear infinite}.pe-progress-bar.loading div[role=progressbar]{background-image:-webkit-linear-gradient(315deg,#19a6a4 33.33%,#daf0ed 0,#daf0ed 50%,#19a6a4 0,#19a6a4 83.33%,#daf0ed 0,#daf0ed);background-image:linear-gradient(135deg,#19a6a4 33.33%,#daf0ed 0,#daf0ed 50%,#19a6a4 0,#19a6a4 83.33%,#daf0ed 0,#daf0ed);background-size:18px 18px}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@media screen and (prefers-reduced-motion:reduce){.pe-progress-bar div[role=progressbar]{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:unset!important;transition:unset!important}}\n    </style>\n     <div class="pe-progress-bar">\n      <p class="fullbar" id="label">0%</p>\n      <div role="progressbar" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0" id="progress"></div>\n  </div>\n';

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
      },
      set: function set(newValue) {
        this.setAttribute('progress', newValue);
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
        this.loadingBar.setAttribute('style', 'width: ' + progress + '%;');
        if (this.text === null) {
          this.label.innerHTML = progress + '%';
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
        this.liveRegion.innerHTML = message;
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
      var alertClone = alert.content.cloneNode(true);

      _this.liveRegion = alertClone.querySelector('#liveregion');
      _this.shadowRoot.appendChild(alertClone);

      _this.loadingBar = clone.querySelector('[role=progressbar]');
      _this.wrapper = clone.querySelector('.pe-progress-bar');
      _this.label = clone.querySelector('#label');

      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(ProgressIndicator, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        this.progressBar = this.progress;
        this.loaderType = this.type;
        this.maxValue = this.max;
        this.titleAlignment = this.alignment;
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
            }
          }
        }
      }
    }]);

    return ProgressIndicator;
  }(HTMLElement);

  customElements.define('progress-indicator', ProgressIndicator);
})(window, document);