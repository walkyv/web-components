var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  template.innerHTML = '\n  <style>\n.pe-alert{visibility:hidden;opacity:0;color:#252525;z-index:2000}@media (max-width:480px){.pe-alert{max-width:440px;padding:4px}}.pe-alert.alert--info,.pe-alert.alert--success{border-left-color:#19a6a4}.pe-alert.alert--error .pe-alert-box{border-left-color:#db0020}.pe-alert.alert--error .pe-alert-box a{color:#db0020}.pe-alert.alert-inline{position:absolute}.pe-alert.alert-global{position:fixed;top:32px;left:0;margin:0 32px}@media (max-width:768px){.pe-alert.alert-global{top:36px;margin:0 24px}}.pe-alert-box{-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.16);box-shadow:0 1px 1px 0 rgba(0,0,0,.16);padding:8px;margin-bottom:1em;max-width:580px;-webkit-transition:all .2s ease;transition:all .2s ease;z-index:10;background:#fff;border:1px solid #c7c7c7;border-left:3px solid #19a6a4}.pe-alert-box .close-title{float:right;color:#6a7070;cursor:pointer}.pe-alert-box .alert-content-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:20px 4px 20px 20px}.pe-alert-box .alert-title{margin-right:4px;display:inline;font-size:14px;font-weight:400;top:-12px;position:relative}.pe-alert-box .alert-text{display:inline}.pe-alert button.pe-icon{background-color:transparent;border:0;padding:0;position:relative;overflow:visible}.pe-alert button.pe-icon:focus{outline:0}.pe-alert button.pe-icon::-moz-focus-inner{border:0}.pe-alert button.pe-icon:focus:after{display:block;border:2px solid #0b73da;border-radius:4px;content:"";height:-webkit-calc(100% + 8px);height:calc(100% + 8px);left:-6px;position:absolute;top:-6px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);z-index:1}.pe-alert img.pe-icon:not([src=""]){margin-right:12px;width:18px;height:18px}.pe-alert svg{width:24px;height:24px}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.fadeIn,.slideInDown{opacity:1;visibility:visible}.fadeOut,.slideOutDown{opacity:0;visibility:hidden}.animated.slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}.animated.slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}.animated.fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}.animated.fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}@media (prefers-reduced-motion){.animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}\t</style>\n\t<div id="peAlert" class="pe-alert" role="dialog" aria-labelledby="alertTitle" aria-describedby="alertText">\n\t\t<div class="pe-alert-box">\n\t\t\t<button data-action="close-alert" class="close-title pe-icon pe-icon--btn remove-sm-24" aria-label="Close Lorem ipsum dolor sit amet.">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="remove-sm-24" class="pe-icon--remove-sm-24"\n\t\t\t\t viewBox="0 0 24 24" focusable="false" aria-hidden="true">\n\t\t\t\t\t<path d="M13.4092,11.9999 L17.7082,7.7009 C18.0972,7.3119 18.0972,6.6809 17.7082,6.2919 C17.3192,5.9029 16.6882,5.9029 16.2992,6.2919 L12.0002,10.5909 L7.7012,6.2919 C7.3122,5.9029 6.6812,5.9029 6.2922,6.2919 C5.9022,6.6809 5.9022,7.3119 6.2922,7.7009 L10.5912,11.9999 L6.2922,16.2989 C5.9022,16.6879 5.9022,17.3189 6.2922,17.7079 C6.4862,17.9029 6.7412,17.9999 6.9962,17.9999 C7.2512,17.9999 7.5062,17.9029 7.7012,17.7079 L12.0002,13.4089 L16.2992,17.7079 C16.4932,17.9029 16.7482,17.9999 17.0032,17.9999 C17.2582,17.9999 17.5132,17.9029 17.7082,17.7079 C18.0972,17.3189 18.0972,16.6879 17.7082,16.2989 L13.4092,11.9999 Z" />\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t\t<div id="contentContainer" class="alert-content-container">\n\t\t\t\t<img id="icon" class="pe-icon" src="" aria-hidden="true">\n\t\t\t\t<div id="content" class="alert-content" aria-hidden="true">\n\t\t\t\t\t<slot></slot>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-alert');

  var SUCCESS_ICON_URI = "data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 18 18' %3E%3Cpath fill='%2319a6a4' d='M5.7176,18 C5.4406,18 5.1736,17.885 4.9846,17.68 L0.2666,12.589 C-0.1084,12.184 -0.0854,11.551 0.3206,11.176 C0.7246,10.799 1.3566,10.823 1.7336,11.229 L5.6126,15.415 L16.1826,0.424 C16.5016,-0.028 17.1246,-0.135 17.5756,0.183 C18.0276,0.501 18.1356,1.125 17.8176,1.576 L6.5346,17.576 C6.3616,17.823 6.0846,17.978 5.7836,17.998 C5.7616,17.999 5.7396,18 5.7176,18' /%3E%3C/svg%3E";

  var ERROR_ICON_URI = "data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 18 18'%3E%3Cpath fill='%23db0020' d='M9.9999375,12.4775 C9.9999375,12.7525 9.7749375,12.9775 9.4999375,12.9775 L8.4999375,12.9775 C8.2249375,12.9775 7.9999375,12.7525 7.9999375,12.4775 L7.9999375,7.4775 C7.9999375,7.2025 8.2249375,6.9775 8.4999375,6.9775 L9.4999375,6.9775 C9.7749375,6.9775 9.9999375,7.2025 9.9999375,7.4775 L9.9999375,12.4775 Z M9.9999375,15.4775 C9.9999375,15.7525 9.7749375,15.9775 9.4999375,15.9775 L8.4999375,15.9775 C8.2249375,15.9775 7.9999375,15.7525 7.9999375,15.4775 L7.9999375,14.4775 C7.9999375,14.2025 8.2249375,13.9775 8.4999375,13.9775 L9.4999375,13.9775 C9.7749375,13.9775 9.9999375,14.2025 9.9999375,14.4775 L9.9999375,15.4775 Z M17.9469375,17.2535 L9.4469375,0.2535 C9.2769375,-0.0845 8.7229375,-0.0845 8.5529375,0.2535 L0.0529375,17.2535 C-0.0240625,17.4095 -0.0170625,17.5925 0.0739375,17.7405 C0.1659375,17.8875 0.3269375,17.9775 0.4999375,17.9775 L17.4999375,17.9775 C17.6729375,17.9775 17.8339375,17.8875 17.9259375,17.7405 C18.0169375,17.5925 18.0239375,17.4095 17.9469375,17.2535 L17.9469375,17.2535 Z' /%3E%3C/svg%3E";

  var Alert = function (_HTMLElement) {
    _inherits(Alert, _HTMLElement);

    function Alert() {
      _classCallCheck(this, Alert);

      var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.alert = clone.querySelector('#peAlert');
      _this.contentContainer = clone.querySelector('#contentContainer');
      _this.icon = clone.querySelector('#icon');
      _this.content = clone.querySelector('#content');
      _this.closeBtn = clone.querySelector('button[data-action="close-alert"]');

      _this.shadowRoot.appendChild(clone);

      _this._onClose = _this._onClose.bind(_this);
      _this._onAnimationEnd = _this._onAnimationEnd.bind(_this);
      return _this;
    }

    _createClass(Alert, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (this.isAnimated) {
          this.alert.classList.toggle('animated');
        }

        if (this.type === 'error') {
          this.contentContainer.setAttribute('role', 'alert');
          this.contentContainer.setAttribute('aria-live', 'assertive');
          this.icon.src = ERROR_ICON_URI;
        } else {
          if (this.type === 'success') this.icon.src = SUCCESS_ICON_URI;

          this.contentContainer.setAttribute('role', 'status');
          this.contentContainer.setAttribute('aria-live', 'polite');
        }

        this.alert.classList.add('alert-' + this.level);
        this.alert.classList.add('alert--' + this.type);

        if (this.level === 'global') {
          this.alert.classList.add('slideInDown');
        }
        if (this.level === 'inline') {
          this.alert.classList.add('fadeIn');
        }

        this.content.setAttribute('aria-hidden', 'false');
        this.closeBtn.addEventListener('click', this._onClose);

        this.alert.addEventListener('animationend', this._onAnimationEnd);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {

        this.alert.removeEventListener('animationend', this._onAnimationEnd);
        this.closeBtn.removeEventListener('click', this._onClose);

        document.querySelector('pearson-uploader').shadowRoot.querySelector('upload-modal #attachFiles').focus();
      }
    }, {
      key: '_onClose',
      value: function _onClose() {
        if (this.level === 'global') {
          this.alert.classList.add('slideOutDown');
        }
        if (this.level === 'inline') {
          this.alert.classList.add('fadeOut');
        }

        this.dispatchEvent(new Event('dismiss', {
          bubbles: true
        }));
      }
    }, {
      key: '_onAnimationEnd',
      value: function _onAnimationEnd(e) {
        var animationName = e.animationName;

        if (animationName === 'fadeOut' || animationName === 'slideOutDown') {
          this.remove();
        }
        if (animationName === 'fadeIn' || animationName === 'slideInDown') {
          if (this.focusOnOpen) {
            this.closeBtn.focus();
          }
        }
      }
    }, {
      key: 'isAnimated',
      get: function get() {
        return this.hasAttribute('animated');
      }
    }, {
      key: 'focusOnOpen',
      get: function get() {
        return this.hasAttribute('focusOnOpen');
      }
    }, {
      key: 'level',
      get: function get() {
        return this.getAttribute('level');
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }]);

    return Alert;
  }(HTMLElement);

  customElements.define('pearson-upload-alert', Alert);
})(window, document);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

(function (w, doc) {
    'use strict';

    var styles = doc.createElement('template');
    var template = doc.createElement('template');
    var overlayButtonTemplate = doc.createElement('template');
    var actionsTemplate = doc.createElement('template');
    var minimizedTemplate = doc.createElement('template');

    styles.innerHTML = '\n  <style>\n.deep-encapsulation { /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */}.deep-encapsulation *,.deep-encapsulation :after,.deep-encapsulation :before{-webkit-box-sizing:inherit;box-sizing:inherit}.deep-encapsulation html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}.deep-encapsulation body{margin:0}.deep-encapsulation article,.deep-encapsulation aside,.deep-encapsulation footer,.deep-encapsulation header,.deep-encapsulation nav,.deep-encapsulation section{display:block}.deep-encapsulation h1{font-size:2em;margin:.67em 0}.deep-encapsulation figcaption,.deep-encapsulation figure,.deep-encapsulation main{display:block}.deep-encapsulation figure{margin:1em 40px}.deep-encapsulation hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}.deep-encapsulation pre{font-family:monospace,monospace;font-size:1em}.deep-encapsulation a{background-color:transparent;-webkit-text-decoration-skip:objects}.deep-encapsulation a:active,.deep-encapsulation a:hover{outline-width:0}.deep-encapsulation abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.deep-encapsulation b,.deep-encapsulation strong{font-weight:inherit;font-weight:bolder}.deep-encapsulation code,.deep-encapsulation kbd,.deep-encapsulation samp{font-family:monospace,monospace;font-size:1em}.deep-encapsulation dfn{font-style:italic}.deep-encapsulation mark{background-color:#ff0;color:#000}.deep-encapsulation small{font-size:80%}.deep-encapsulation sub,.deep-encapsulation sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.deep-encapsulation sub{bottom:-.25em}.deep-encapsulation sup{top:-.5em}.deep-encapsulation audio,.deep-encapsulation video{display:inline-block}.deep-encapsulation audio:not([controls]){display:none;height:0}.deep-encapsulation img{border-style:none}.deep-encapsulation svg:not(:root){overflow:hidden}.deep-encapsulation button,.deep-encapsulation input,.deep-encapsulation optgroup,.deep-encapsulation select,.deep-encapsulation textarea{font-family:Open Sans,Calibri,Tahoma,sans-serif;font-size:100%;line-height:1.15;margin:0}.deep-encapsulation button,.deep-encapsulation input{overflow:visible}.deep-encapsulation button,.deep-encapsulation select{text-transform:none}.deep-encapsulation [type=reset],.deep-encapsulation [type=submit],.deep-encapsulation button,.deep-encapsulation html [type=button]{-webkit-appearance:button}.deep-encapsulation [type=button]::-moz-focus-inner,.deep-encapsulation [type=reset]::-moz-focus-inner,.deep-encapsulation [type=submit]::-moz-focus-inner,.deep-encapsulation button::-moz-focus-inner{border-style:none;padding:0}.deep-encapsulation [type=button]:-moz-focusring,.deep-encapsulation [type=reset]:-moz-focusring,.deep-encapsulation [type=submit]:-moz-focusring,.deep-encapsulation button:-moz-focusring{outline:1px dotted ButtonText}.deep-encapsulation fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}.deep-encapsulation legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.deep-encapsulation progress{display:inline-block;vertical-align:baseline}.deep-encapsulation textarea{overflow:auto}.deep-encapsulation [type=checkbox],.deep-encapsulation [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}.deep-encapsulation [type=number]::-webkit-inner-spin-button,.deep-encapsulation [type=number]::-webkit-outer-spin-button{height:auto}.deep-encapsulation [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.deep-encapsulation [type=search]::-webkit-search-cancel-button,.deep-encapsulation [type=search]::-webkit-search-decoration{-webkit-appearance:none}.deep-encapsulation ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.deep-encapsulation details,.deep-encapsulation menu{display:block}.deep-encapsulation summary{display:list-item}.deep-encapsulation canvas{display:inline-block}.deep-encapsulation [hidden],.deep-encapsulation template{display:none}.deep-encapsulation html{font-size:.875rem}.deep-encapsulation body{font-family:Open Sans,Calibri,Tahoma,sans-serif;color:#252525}.deep-encapsulation h1,.deep-encapsulation h2,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation h5,.deep-encapsulation h6{margin-top:0;margin-bottom:0}.deep-encapsulation *+h1,.deep-encapsulation *+h2,.deep-encapsulation *+h3,.deep-encapsulation *+h4,.deep-encapsulation *+h5,.deep-encapsulation *+h6{margin-top:20px}.deep-encapsulation h1+h2{margin-top:40px}.deep-encapsulation h2+h3,.deep-encapsulation h3+h4,.deep-encapsulation h4+h5,.deep-encapsulation h5+h6{margin-top:6px}.deep-encapsulation header{margin-bottom:20px}.deep-encapsulation header h1+.subtitle{margin-top:34px}.deep-encapsulation aside h1{font-size:1.25rem}.deep-encapsulation aside h2{font-size:1.1rem}.deep-encapsulation aside h3{font-size:1rem}.deep-encapsulation aside h4,.deep-encapsulation aside h5,.deep-encapsulation aside h6{font-size:.8rem}.deep-encapsulation table{width:100%;max-width:100%;margin-bottom:35px;border-collapse:collapse}.deep-encapsulation table td,.deep-encapsulation table th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left}.deep-encapsulation table thead th{vertical-align:bottom;border-top:0}.deep-encapsulation a{color:#047a9c;text-decoration:underline}.deep-encapsulation a.active,.deep-encapsulation a:active,.deep-encapsulation a:focus,.deep-encapsulation a:hover{color:#005a70;text-decoration:none}.deep-encapsulation a:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.deep-encapsulation abbr,.deep-encapsulation abbr[title]{text-decoration:none}.deep-encapsulation ins:after,.deep-encapsulation ins:before{content:"+"}.deep-encapsulation mark{background:#ffb81c}.deep-encapsulation small{font-size:.85714rem;line-height:1.14286rem}.deep-encapsulation sub,.deep-encapsulation sup{font-size:90%}.deep-encapsulation sub{top:.2rem}.deep-encapsulation sup{top:-.2rem}.deep-encapsulation pre{max-width:100%;overflow-x:auto}.deep-encapsulation code,.deep-encapsulation kbd,.deep-encapsulation pre{font-family:Monaco,Lucida Console,monospace}.deep-encapsulation :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@font-face{.deep-encapsulation{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff) format("woff");font-weight:100;font-style:normal;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff) format("woff");font-style:italic;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff) format("woff");font-weight:400;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff) format("woff");src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff) format("woff");font-weight:600;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff) format("woff")}}.deep-encapsulation .pe-base-fontsize{font-size:.875rem}.deep-encapsulation .pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.deep-encapsulation .pe-copy{font-size:1rem;line-height:1.57143rem;color:#252525}.deep-encapsulation .pe-copy--secondary,.deep-encapsulation .pe-label--secondary{color:#6a7070}.deep-encapsulation .pe-copy--small{font-size:.85714rem;line-height:1.42857rem;color:#252525}.deep-encapsulation .pe-copy--large,.deep-encapsulation .pe-heading-level6,.deep-encapsulation h6,.deep-encapsulation header h5+.subtitle{font-size:1.14286rem;line-height:1.71429rem;color:#252525}.deep-encapsulation .pe-paragraph,.deep-encapsulation p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.deep-encapsulation .pe-paragraph--last{margin-bottom:0;color:#252525}.deep-encapsulation .pe-lead{font-size:1.42857rem;line-height:2rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-page-title{font-size:2.71429rem;line-height:3.71429rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-heading-level1,.deep-encapsulation .pe-page-title--small,.deep-encapsulation h1{font-size:2rem;line-height:2.71429rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-heading-level3,.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-title,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation header h2+.subtitle,.deep-encapsulation header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400;color:#252525}.deep-encapsulation .pe-heading-level5,.deep-encapsulation .pe-title--small,.deep-encapsulation h5,.deep-encapsulation header h4+.subtitle{font-size:1.28571rem;line-height:1.57143rem;font-weight:400;color:#252525}.deep-encapsulation .pe-heading-level2,.deep-encapsulation .pe-title--large,.deep-encapsulation h2,.deep-encapsulation header h1+.subtitle{font-size:1.71429rem;line-height:2rem;font-weight:400;color:#252525}.deep-encapsulation .pe-page-title--secondary,.deep-encapsulation .pe-title--secondary{color:#6a7070}.deep-encapsulation .pe-label{font-size:1rem;line-height:1.28571rem}.deep-encapsulation .pe-label.pe-label--inverse{color:#fff}.deep-encapsulation .pe-label--secondary.pe-label--inverse{color:#f5f5f5}.deep-encapsulation .pe-label--small{font-size:.85714rem;line-height:1.14286rem}.deep-encapsulation .pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.deep-encapsulation .pe-bold,.deep-encapsulation .pe-label--bold{font-weight:600}.deep-encapsulation .pe-list{margin:12px 0;padding-left:1.85714rem}.deep-encapsulation .pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.deep-encapsulation .pe-list li>ol,.deep-encapsulation .pe-list li>ul{margin-top:.42857rem}.deep-encapsulation .pe-list.pe-styled-lists--ordered{list-style-type:decimal}.deep-encapsulation .pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.deep-encapsulation .pe-list.pe-styled-lists--unordered{list-style-type:disc}.deep-encapsulation .pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.deep-encapsulation .pe-list--unstyled{list-style:none;padding-left:0}.deep-encapsulation .pe-list--unstyled ul{padding-left:1.85714rem}.deep-encapsulation .pe-heading-level1,.deep-encapsulation .pe-heading-level2,.deep-encapsulation h1,.deep-encapsulation h2,.deep-encapsulation header h1+.subtitle{margin-bottom:6px}.deep-encapsulation .pe-heading-level3,.deep-encapsulation h3,.deep-encapsulation header h2+.subtitle{font-weight:700;margin-bottom:6px}.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-heading-level5,.deep-encapsulation .pe-heading-level6,.deep-encapsulation h4,.deep-encapsulation h5,.deep-encapsulation h6,.deep-encapsulation header h3+.subtitle,.deep-encapsulation header h4+.subtitle,.deep-encapsulation header h5+.subtitle{margin-bottom:6px}.deep-encapsulation *+[class^=pe-heading-level]{margin-top:20px}.deep-encapsulation .pe-code{font-family:Monaco,Lucida Console,monospace;color:#f5f5f5;font-size:1rem;line-height:1.42857rem;background:#005a70;padding:30px 50px}.deep-encapsulation .pe-code-inline,.deep-encapsulation .pe-kbd{font-family:Monaco,Lucida Console,monospace;background:#e9e9e9;padding:0 4px}.deep-encapsulation #pe-icons-sprite{display:none}.deep-encapsulation svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:currentColor}.deep-encapsulation [class^=pe-btn] svg[class$="-18"],.deep-encapsulation [class^=pe-btn] svg[class$="-24"]{vertical-align:middle;margin-left:.5em;margin-bottom:.3em}.deep-encapsulation svg[class$="-18"]{width:18px;height:18px}.deep-encapsulation svg[class$="-24"]{width:24px;height:24px}.deep-encapsulation svg[class$=font-setting-18]{width:24px;height:18px}.deep-encapsulation svg[class$=font-setting-24]{width:32px;height:24px}.deep-encapsulation svg[class$=new-notification-9]{vertical-align:middle;width:10px;height:10px}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large,.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn__cta,.deep-encapsulation .pe-btn__cta--btn_large,.deep-encapsulation .pe-btn__cta--btn_small,.deep-encapsulation .pe-btn__cta--btn_xlarge,.deep-encapsulation .pe-btn__primary,.deep-encapsulation .pe-btn__primary--btn_large,.deep-encapsulation .pe-btn__primary--btn_small,.deep-encapsulation .pe-btn__primary--btn_xlarge,.deep-encapsulation .pe-btn__tertiary,.deep-encapsulation .pe-btn__tertiary--btn_large,.deep-encapsulation .pe-btn__tertiary--btn_small,.deep-encapsulation .pe-btn__tertiary--btn_xlarge{-webkit-box-sizing:border-box;box-sizing:border-box;border:none;display:inline-block;vertical-align:middle;cursor:pointer;height:36px;padding:0 20px;border-radius:36px;font-size:14px;line-height:18px;font-weight:600}.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn__cta--btn_small,.deep-encapsulation .pe-btn__primary--btn_small,.deep-encapsulation .pe-btn__tertiary--btn_small{height:32px;border-radius:32px;padding:0 12px;font-size:14px;line-height:18px}.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn__cta--btn_xlarge,.deep-encapsulation .pe-btn__primary--btn_xlarge,.deep-encapsulation .pe-btn__tertiary--btn_xlarge{height:40px;border-radius:40px;padding:0 20px;font-size:16px;line-height:20px}.deep-encapsulation .pe-icon--btn{padding:0;background-color:transparent;border:0;position:relative}.deep-encapsulation .pe-icon--btn:focus{outline:0}.deep-encapsulation .pe-icon--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link,.deep-encapsulation .pe-link--btn{text-decoration:underline;background-color:transparent;border:0;cursor:pointer;position:relative}.deep-encapsulation .pe-link{color:#047a9c;padding:0}.deep-encapsulation .pe-link:hover{color:#005a70;text-decoration:none}.deep-encapsulation .pe-link:focus{color:#005a70;text-decoration:none;outline:0}.deep-encapsulation .pe-link:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link--btn{color:#047a9c;padding:4px;position:relative}.deep-encapsulation .pe-link--btn:hover{text-decoration:none}.deep-encapsulation .pe-link--btn:focus{text-decoration:none;outline:0}.deep-encapsulation .pe-link--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link--btn:disabled{color:#6a7070;text-decoration:none;cursor:default}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large,.deep-encapsulation .pe-btn--btn_large:active,.deep-encapsulation .pe-btn--btn_large:hover,.deep-encapsulation .pe-btn:active,.deep-encapsulation .pe-btn:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_large:focus,.deep-encapsulation .pe-btn:focus{color:#505759;background-color:transparent;border:1px solid #c7c7c7;outline:0}.deep-encapsulation .pe-btn--btn_large:focus:after,.deep-encapsulation .pe-btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_large:disabled,.deep-encapsulation .pe-btn.pe-btn--disabled,.deep-encapsulation .pe-btn.pe-btn--disabled:hover,.deep-encapsulation .pe-btn:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_large span.btn-overflow,.deep-encapsulation .pe-btn span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btngroup button:first-child{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.deep-encapsulation .pe-btngroup button:last-child{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.deep-encapsulation .pe-btngroup button:not(:first-child):not(:last-child){border-radius:0!important}.deep-encapsulation .pe-btn--btn_small{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn--btn_small:active,.deep-encapsulation .pe-btn--btn_small:focus,.deep-encapsulation .pe-btn--btn_small:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_small:focus{outline:0}.deep-encapsulation .pe-btn--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_small:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn--btn_xlarge{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn--btn_xlarge:active,.deep-encapsulation .pe-btn--btn_xlarge:focus,.deep-encapsulation .pe-btn--btn_xlarge:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_xlarge:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary,.deep-encapsulation .pe-btn__primary--btn_large{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_large:active,.deep-encapsulation .pe-btn__primary--btn_large:hover,.deep-encapsulation .pe-btn__primary:active,.deep-encapsulation .pe-btn__primary:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_large:focus,.deep-encapsulation .pe-btn__primary:focus{color:#fff;background-color:#005a70;border:1px solid #005a70;outline:0}.deep-encapsulation .pe-btn__primary--btn_large:focus:after,.deep-encapsulation .pe-btn__primary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_large:disabled,.deep-encapsulation .pe-btn__primary.pe-btn--disabled,.deep-encapsulation .pe-btn__primary.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__primary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary--btn_small{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_small:active,.deep-encapsulation .pe-btn__primary--btn_small:focus,.deep-encapsulation .pe-btn__primary--btn_small:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__primary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary--btn_xlarge{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_xlarge:active,.deep-encapsulation .pe-btn__primary--btn_xlarge:focus,.deep-encapsulation .pe-btn__primary--btn_xlarge:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__primary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta,.deep-encapsulation .pe-btn__cta--btn_large{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_large:active,.deep-encapsulation .pe-btn__cta--btn_large:hover,.deep-encapsulation .pe-btn__cta:active,.deep-encapsulation .pe-btn__cta:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_large:focus,.deep-encapsulation .pe-btn__cta:focus{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19;outline:0}.deep-encapsulation .pe-btn__cta--btn_large:focus:after,.deep-encapsulation .pe-btn__cta:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_large:disabled,.deep-encapsulation .pe-btn__cta.pe-btn--disabled,.deep-encapsulation .pe-btn__cta.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__cta span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta--btn_small{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_small:active,.deep-encapsulation .pe-btn__cta--btn_small:focus,.deep-encapsulation .pe-btn__cta--btn_small:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__cta--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta--btn_xlarge{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_xlarge:active,.deep-encapsulation .pe-btn__cta--btn_xlarge:focus,.deep-encapsulation .pe-btn__cta--btn_xlarge:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__cta--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary,.deep-encapsulation .pe-btn__tertiary--btn_large{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_large:active,.deep-encapsulation .pe-btn__tertiary--btn_large:hover,.deep-encapsulation .pe-btn__tertiary:active,.deep-encapsulation .pe-btn__tertiary:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_large:focus,.deep-encapsulation .pe-btn__tertiary:focus{color:#505759;background-color:#ededed;border:1px solid #ededed;outline:0}.deep-encapsulation .pe-btn__tertiary--btn_large:focus:after,.deep-encapsulation .pe-btn__tertiary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_large:disabled,.deep-encapsulation .pe-btn__tertiary.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__tertiary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary--btn_small{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_small:active,.deep-encapsulation .pe-btn__tertiary--btn_small:focus,.deep-encapsulation .pe-btn__tertiary--btn_small:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__tertiary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary--btn_xlarge{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:active,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation a[class$="--btn_xlarge"],.deep-encapsulation div[class$="--btn_xlarge"]{line-height:40px!important}.deep-encapsulation a[class$="--btn_large"],.deep-encapsulation a[class=pe-btn],.deep-encapsulation a[class=pe-btn__cta],.deep-encapsulation a[class=pe-btn__primary],.deep-encapsulation a[class=pe-btn__tertiary],.deep-encapsulation div[class$="--btn_large"],.deep-encapsulation div[class=pe-btn],.deep-encapsulation div[class=pe-btn__cta],.deep-encapsulation div[class=pe-btn__primary],.deep-encapsulation div[class=pe-btn__tertiary]{line-height:36px!important}.deep-encapsulation a[class$="--btn_small"],.deep-encapsulation div[class$="--btn_small"]{line-height:32px!important}.deep-encapsulation input[class^=pe-btn]:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes fadeInFast{0%{opacity:0}to{opacity:1}}@keyframes fadeInFast{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOutFast{0%{opacity:1}to{opacity:0}}@keyframes fadeOutFast{0%{opacity:1}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@-webkit-keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.deep-encapsulation .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.deep-encapsulation .animated{-webkit-animation:unset!important;animation:unset!important}}.deep-encapsulation .fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.deep-encapsulation .fadeInFast{-webkit-animation-name:fadeInFast;animation-name:fadeInFast;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.deep-encapsulation .fadeOutFast{-webkit-animation-name:fadeOutFast;animation-name:fadeOutFast;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.deep-encapsulation .fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.deep-encapsulation .slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.deep-encapsulation .slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.deep-encapsulation .fadeIn,.deep-encapsulation .fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}.deep-encapsulation .zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}.deep-encapsulation .zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}.deep-encapsulation .slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp;-webkit-animation-duration:.5s;animation-duration:.5s}.deep-encapsulation *{-webkit-box-sizing:border-box;box-sizing:border-box}.deep-encapsulation .hidden,.deep-encapsulation [hidden]{display:none!important}.deep-encapsulation .hide-overflow{overflow:hidden}.deep-encapsulation .modal-scroll{height:100%;overflow:scroll;-webkit-overflow-scrolling:touch}.deep-encapsulation #modalOverlay{width:100%;height:100%;z-index:9;background-color:#222;position:fixed;top:0;left:0;margin:0;padding:0;-webkit-transition:all .5s ease-in;transition:all .5s ease-in;opacity:.6}.deep-encapsulation [role=dialog]{border:thin solid #000;background-color:#fff;z-index:10;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.deep-encapsulation .scroll-frame{overflow:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;height:400px;width:100%}.deep-encapsulation .header-actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;padding:20px;top:0;right:0}.deep-encapsulation .header-actions button{top:0!important;background:none;border:0;cursor:pointer;padding:0;width:44px;text-align:center}.deep-encapsulation .header-actions button img{width:24px;height:24px;margin:0}.deep-encapsulation .pe-modal-container{min-width:474px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;width:auto}.deep-encapsulation .pe-modal-container__minimized{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:fixed;bottom:0;right:0;width:507px;height:60px;padding:20px 17px 22px 27px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2);box-shadow:0 2px 4px 0 rgba(0,0,0,.2);border:1px solid #c7c7c7;border-bottom:0;border-radius:0;background-color:#fff}@media (min-width:1px) and (max-width:639px){.deep-encapsulation .pe-modal-container__minimized{width:100%}}.deep-encapsulation .header-actions__minimized{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;right:5px;top:-webkit-calc(50% - 12px);top:calc(50% - 12px)}.deep-encapsulation .header-actions__minimized button{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:0!important;background:none;border:0;cursor:pointer;padding:0;width:44px;height:24px;vertical-align:middle}.deep-encapsulation .header-actions__minimized button img{width:18px;height:18px;margin:0}.deep-encapsulation .upload-summary{max-width: calc(100% - 30px);font-size:18px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#252525;display:inline-block;margin:0;padding:0;}@media (min-width:481px) and (max-width:767px){.deep-encapsulation .pe-modal-container{width:440px}}.deep-encapsulation p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.deep-encapsulation h2,.deep-encapsulation p{font-family:Open Sans,Arial,Helvetica,sans-serif}.deep-encapsulation h2{font-weight:400;display:inline-block;margin:0 0 20px;font-size:24px;padding-left:40px;padding-top:40px;padding-right:40px}.deep-encapsulation .pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (min-width:1px) and (max-width:480px){.deep-encapsulation .pe-modal-container h2{font-size:20px}.deep-encapsulation .pe-modal-container h2.upload-summary{font-size:16px}}.deep-encapsulation .pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px}.deep-encapsulation .pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}@media (min-width:481px) and (max-width:767px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (min-width:1px) and (max-width:480px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.deep-encapsulation .pe-modal-container .actions button:first-child{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;margin-left:1em}@media (min-width:1px) and (max-width:480px){.deep-encapsulation .pe-modal-container .actions button:first-child{margin:.5em 0}}@media (min-width:481px) and (max-width:767px){.deep-encapsulation .pe-modal-container .actions button{width:100%}}.deep-encapsulation .pe-modal-container .actions button#modalOverlay:focus{outline:1px solid #da0474;outline-offset:2px}.deep-encapsulation .pe-btn--btn_large::-moz-focus-inner,.deep-encapsulation .pe-btn::-moz-focus-inner{border:0}.deep-encapsulation .style-scope{text-align:left}.deep-encapsulation button.style-scope{text-align:center}.deep-encapsulation .modal-minimize img{height:18px!important}.deep-encapsulation .pe-icon--btn::-moz-focus-inner{border:0}.deep-encapsulation .pe-icon--btn:focus:after{top:-4px!important;left:-4px!important}.deep-encapsulation .pe-modal-container{width:auto}.deep-encapsulation .pe-modal-container .modal-title{width:100%;padding:20px 40px;border-bottom:1px solid #c7c7c7;margin-bottom:0}.deep-encapsulation .pe-modal-container button.close[aria-label="Close Dialog"]{top:16px}.deep-encapsulation .pe-modal-container .actions{padding:30px 40px;border-top:1px solid #c7c7c7}.deep-encapsulation .pe-modal-container .modal-body{margin-bottom:0}@media (max-width:640px){.deep-encapsulation .pe-modal-container{min-width:auto}.deep-encapsulation button.close[aria-label="Close Dialog"]{right:15px}}:host(:not([footer])) #minimizeButton{display:none!important}\n\t</style>\n  ';

    actionsTemplate.innerHTML = '\n  <div class="actions">\n  <button id="successButton" class="modal-success pe-btn pe-btn__primary--btn_large" data-event="success" disabled>Save</button>\n  <button id="cancelButton" class="modal-cancel pe-btn--btn_large" data-event="cancel" disabled>Cancel</button>\n</div>\n  ';

    overlayButtonTemplate.innerHTML = '\n  <div class="hidden modal-close animated fadeIn" id="modalOverlay" data-event="cancel"></div>\n  ';

    minimizedTemplate.innerHTML = '\n  <div class="deep-encapsulation">\n  <div div class="pe-modal-container pe-modal-container__minimized animated slideInUp" id="modal">\n    <h2 class="upload-summary">Uploading (<span id="done">0</span> done, <span id="progress">0</span> in progress)</h2>\n    <div class="header-actions__minimized">\n      <button id="expandButton" class="pe-icon--btn modal-expand" aria-label="Expand Upload Files" data-event="cancel">\n        <img src="data:image/svg+xml,\t%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M3.5,1 L20.5,1 C21.8807119,1 23,2.11928813 23,3.5 L23,19.5 C23,20.8807119 21.8807119,22 20.5,22 L3.5,22 C2.11928813,22 1,20.8807119 1,19.5 L1,3.5 C1,2.11928813 2.11928813,1 3.5,1 Z M21,6 L21,3.5 C21,3.22385763 20.7761424,3 20.5,3 L3.5,3 C3.22385763,3 3,3.22385763 3,3.5 L3,6 L21,6 Z M21,8 L3,8 L3,19.5 C3,19.7761424 3.22385763,20 3.5,20 L20.5,20 C20.7761424,20 21,19.7761424 21,19.5 L21,8 Z\'/%3E%3C/svg%3E" />\n      </button>\n    </div>\n  </div>\n</div>\n  ';

    template.innerHTML = '\n  <div class="deep-encapsulation">\n  <div class="hidden" id="modalPlaceholder"></div>\n  <div class="pe-modal-container hidden animated slideInDown" id="modal" role="dialog" aria-labelledby="dialogHeading"\n   aria-describedby="dialogDescription" aria-modal="true">\n    <h2 id="dialogHeading" class="modal-title pe-title"></h2>\n    <div class="modal-body" id="dialogDescription">\n      <slot></slot>\n    </div>\n    <div id="headerActions" class="header-actions">\n      <button id="minimizeButton" class="pe-icon--btn modal-minimize" aria-label="Minimize Upload Files" data-event="minimize">\n        <img src="data:image/svg+xml,\t%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\'%3E%3Cpath d=\'M3,7.75 C2.86192881,7.75 2.75,7.86192881 2.75,8 L2.75,10 C2.75,10.1380712 2.86192881,10.25 3,10.25 L15,10.25 C15.1380712,10.25 15.25,10.1380712 15.25,10 L15.25,8 C15.25,7.86192881 15.1380712,7.75 15,7.75 L3,7.75 Z M3,6 L15,6 C16.1045695,6 17,6.8954305 17,8 L17,10 C17,11.1045695 16.1045695,12 15,12 L3,12 C1.8954305,12 1,11.1045695 1,10 L1,8 C1,6.8954305 1.8954305,6 3,6 Z\'%3E%3C/path%3E%3C/svg%3E\n          " />\n      </button>\n      <button id="closeButton" class="pe-icon--btn close modal-close" aria-label="Close Upload Files" data-event="cancel">\n        <img src="data:image/svg+xml,\t%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M13.4092,11.9999 L17.7082,7.7009 C18.0972,7.3119 18.0972,6.6809 17.7082,6.2919 C17.3192,5.9029 16.6882,5.9029 16.2992,6.2919 L12.0002,10.5909 L7.7012,6.2919 C7.3122,5.9029 6.6812,5.9029 6.2922,6.2919 C5.9022,6.6809 5.9022,7.3119 6.2922,7.7009 L10.5912,11.9999 L6.2922,16.2989 C5.9022,16.6879 5.9022,17.3189 6.2922,17.7079 C6.4862,17.9029 6.7412,17.9999 6.9962,17.9999 C7.2512,17.9999 7.5062,17.9029 7.7012,17.7079 L12.0002,13.4089 L16.2992,17.7079 C16.4932,17.9029 16.7482,17.9999 17.0032,17.9999 C17.2582,17.9999 17.5132,17.9029 17.7082,17.7079 C18.0972,17.3189 18.0972,16.6879 17.7082,16.2989 L13.4092,11.9999 Z\'/%3E%3C/svg%3E\n        " />\n      </button>\n    </div>\n  </div>\n</div>\n  ';

    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(styles, 'upload-modal');

    var FOCUSABLE_ELEMENTS = '\n    a[href]:not([tabindex^="-"]):not([inert]),\n    area[href]:not([tabindex^="-"]):not([inert]),\n    input:not([disabled]):not([inert]),\n    select:not([disabled]):not([inert]),\n    textarea:not([disabled]):not([inert]),\n    button:not([disabled]):not([inert]),\n    iframe:not([tabindex^="-"]):not([inert]),\n    audio:not([tabindex^="-"]):not([inert]),\n    video:not([tabindex^="-"]):not([inert]),\n    [contenteditable]:not([tabindex^="-"]):not([inert]),\n    [tabindex]:not([tabindex^="-"]):not([inert])',
        TAB_KEY = 9,
        ESCAPE_KEY = 27;

    function getDeepActiveElement() {
        var a = doc.activeElement;
        while (a && a.shadowRoot && a.shadowRoot.activeElement) {
            a = a.shadowRoot.activeElement;
        }
        return a;
    }

    function getFocusableChildren(node) {
        var filter = Array.prototype.filter,
            focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
        return filter.call(focusableChildren, function (child) {
            return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
        });
    }

    function setFocusToFirstChild(node) {
        var focusableChildren = getFocusableChildren(node),
            focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];

        if (focusableChild) {
            focusableChild.focus();
        }
    }

    function trapTabKey(e) {
        for (var _len = arguments.length, nodes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            nodes[_key - 1] = arguments[_key];
        }

        var focusableChildren = nodes.reduce(function (acc, n) {
            return acc.concat(getFocusableChildren(n));
        }, []),
            focusedItemIdx = focusableChildren.indexOf(getDeepActiveElement()),
            lastFocusableIdx = focusableChildren.length - 1;

        if (e.shiftKey && focusedItemIdx === 0) {
            focusableChildren[lastFocusableIdx].focus();
            e.preventDefault();
        }

        if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
            focusableChildren[0].focus();
            e.preventDefault();
        }
    }

    var Modal = function (_HTMLElement) {
        _inherits(Modal, _HTMLElement);

        _createClass(Modal, null, [{
            key: 'observedAttributes',
            get: function get() {
                return ['footer', 'minimized'];
            }
        }]);

        function Modal() {
            _classCallCheck(this, Modal);

            var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

            _this.attachShadow({ mode: 'open' });

            _this.clone = template.content.cloneNode(true);
            _this.styles = styles.content.cloneNode(true);

            _this.openModal = _this.openModal.bind(_this);
            _this.closeModal = _this.closeModal.bind(_this);

            _this.bindKeyPress = _this.bindKeyPress.bind(_this);
            _this.maintainFocus = _this.maintainFocus.bind(_this);
            _this.minimizeDetail = {};
            return _this;
        }

        _createClass(Modal, [{
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(name, oldValue, newValue) {
                var _this2 = this;

                var minimizedContainer = this.shadowRoot.querySelector('.pe-modal-container__minimized'),
                    modalOverlay = this.shadowRoot.querySelector('#modalOverlay'),
                    minimizeButton = this.shadowRoot.querySelector('#minimizeButton');

                this.minimizedClone = minimizedTemplate.content.cloneNode(true);
                // if `this.modal has not been defined yet,
                // bail out.
                if (!this.modal) return;
                if (name === 'footer') {
                    if (!this.footer) {
                        var actions = this.modal.querySelector('.actions');
                        actions.remove();
                    } else {
                        this.renderfooter(this.modal);
                    }
                }

                if (name === 'minimized') {
                    if (!this.minimized) {
                        if (isIE11) {
                            minimizedContainer.remove();
                            this.modal.classList.remove('hidden');
                            modalOverlay.classList.remove('hidden');
                        } else {
                            minimizedContainer.remove();
                            this.modal.classList.remove('hidden');
                            modalOverlay.classList.remove('hidden');
                            this.modal.classList.remove('fadeOutFast');
                            modalOverlay.classList.remove('fadeOutFast');
                            this.modal.classList.add('fadeInFast');
                        }

                        setTimeout(function () {
                            minimizeButton.focus();
                        }, 250);
                    } else {
                        this.addEventListener('xhrLoading', function (event) {
                            _this2.minimizeDetail = event.detail;
                            _this2.updateProgress(_this2.minimizeDetail);
                        });
                        this.renderMinimized();
                        if (isIE11) {
                            modalOverlay.classList.add('hidden');
                            this.modal.classList.add('hidden');
                        } else {
                            this.modal.classList.remove('slideInDown');
                            this.modal.classList.add('fadeOutFast');
                            modalOverlay.classList.add('fadeOutFast');
                        }
                        this.updateProgress(this.minimizeDetail);
                    }

                    modalOverlay.addEventListener('animationend', function (event) {
                        if (event.animationName === 'fadeOutFast') {
                            modalOverlay.classList.add('hidden');
                            _this2.modal.classList.add('hidden');
                        }
                        event.stopImmediatePropagation();
                    });
                }
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this3 = this;

                this.shadowRoot.appendChild(this.styles);
                if (this.minimized) {
                    this.renderMinimized();
                } else {
                    this.renderFull();
                }
                this.addEventListener('xhrLoading', function (event) {
                    _this3.minimizeDetail = event.detail;
                });
            }
        }, {
            key: 'disconnectedCallback',
            value: function disconnectedCallback() {
                doc.removeEventListener('keydown', this.bindKeyPress);
                doc.body.removeEventListener('focus', this.maintainFocus);
            }
        }, {
            key: 'updateProgress',
            value: function updateProgress(data) {
                var minimizedContainer = this.shadowRoot.querySelector('.pe-modal-container__minimized');
                if (minimizedContainer !== null) {
                    var done = minimizedContainer.querySelector('#done'),
                        progress = minimizedContainer.querySelector('#progress');

                    done.innerHTML = data.done;
                    progress.innerHTML = data.progress;
                }
            }
        }, {
            key: 'renderFull',
            value: function renderFull() {
                var _this4 = this;

                // Get component attributes
                var titleText = this.getAttribute('titleText'),
                    triggerId = this.getAttribute('triggerId'),
                    footer = this.hasAttribute('footer');

                // Create elements
                // create the footer
                if (footer) {
                    this.renderfooter(this.clone);
                }

                var overlayButtonClone = overlayButtonTemplate.content,
                    overlayEntryPoint = this.clone.querySelector('#modalPlaceholder');

                overlayEntryPoint.parentNode.insertBefore(overlayButtonClone, overlayEntryPoint.nextElementSibling);
                overlayEntryPoint.remove();

                var title = this.clone.querySelector('#dialogHeading');
                if (titleText !== null) {
                    title.innerHTML = titleText;
                } else {
                    title.innerHTML = 'Modal Title';
                }

                // functionality
                this.body = doc.querySelector('body');
                this.main = doc.querySelector('main');
                this.triggerBtn = doc.querySelector('#' + triggerId);

                this.modal = this.clone.querySelector('#modal');
                this.eventBtns = this.modal.querySelectorAll('[data-event]');
                this.overlay = this.clone.querySelector('#modalOverlay');

                // When the modal trigger is clicked, open modal
                this.triggerBtn.addEventListener('click', this.openModal);

                this.eventBtns.forEach(function (btn) {
                    btn.addEventListener('click', function (e) {
                        var eventType = e.target.dataset.event;
                        if (btn.id === 'closeButton') {
                            _this4.closeModal(eventType);
                        } else if (btn.id === 'minimizeButton') {
                            _this4.minimized = true;
                        } else if (btn.id === 'successButton') {
                            console.log('success');
                            _this4.closeModal(eventType);
                        }
                    });
                });

                // sets the positioning for modals that are programmatically created and have scrolling content
                this.setPosition();
                this.shadowRoot.appendChild(this.clone);
                doc.addEventListener('keydown', this.bindKeyPress);
                doc.body.addEventListener('focus', this.maintainFocus, true);
            }
        }, {
            key: 'renderMinimized',
            value: function renderMinimized() {
                var _this5 = this;

                this.shadowRoot.appendChild(this.minimizedClone);
                var expandButton = this.shadowRoot.querySelector('#expandButton');
                expandButton.addEventListener('click', function (event) {
                    _this5.minimized = false;
                });
                setTimeout(function () {
                    expandButton.focus();
                }, 500);
            }
        }, {
            key: 'openModal',
            value: function openModal(e) {
                var _this6 = this;

                var thisButton = e.currentTarget,
                    buttonDisabled = thisButton.getAttribute('disabled');
                this.style.display = 'block';
                if (buttonDisabled === null) {
                    thisButton.setAttribute('disabled', true);
                    this.main.setAttribute('aria-hidden', 'true');
                    this.overlay.removeAttribute('disabled');
                }

                this.overlay.classList.remove('hidden');
                this.overlay.classList.remove('fadeOut');
                this.overlay.classList.add('fadeIn');

                this.modal.classList.remove('hidden');
                this.modal.classList.remove('slideOutDown');
                this.modal.classList.add('slideInDown');
                this.open = true;

                setTimeout(function () {
                    _this6.maintainFocus();
                }, 250);
            }
        }, {
            key: 'closeModal',
            value: function closeModal(eventName) {
                var _this7 = this;

                this.triggerBtn.removeAttribute('disabled');
                this.main.setAttribute('aria-hidden', 'false');
                this.body.classList.remove('hide-overflow');

                this.overlay.classList.remove('fadeIn');
                this.overlay.classList.add('fadeOut');

                this.modal.classList.remove('slideInDown');
                this.modal.classList.add('slideOutDown');

                setTimeout(function () {
                    _this7.modal.classList.add('hidden');
                    _this7.modal.classList.remove('slideOutDown');
                }, 400);

                setTimeout(function () {
                    _this7.dispatchEvent(new Event(eventName, { bubbles: true, composed: true }));
                }, 500);

                setTimeout(function () {
                    _this7.overlay.classList.add('hidden');
                    _this7.overlay.classList.remove('fadeOut');
                }, 800);

                setTimeout(function () {
                    _this7.triggerBtn.focus();
                }, 801);

                this.open = false;
            }
        }, {
            key: 'maintainFocus',
            value: function maintainFocus() {
                // if the modal is not open, stop the function
                if (!this.open) return;

                /**
                 * The DOM we want to trap focus in. If the consumer passed in
                 * focusable children, it's the Light DOM; else, it's the Shadow DOM.
                 */
                var targetDOM = getFocusableChildren(this).length > 0 ? this : this.modal;

                // if neither the Light DOM nor the Shadow DOM within the modal contain
                // the active element, set focus back into the targetDOM.
                if (!this.contains(getDeepActiveElement()) && !this.modal.contains(getDeepActiveElement())) {
                    setFocusToFirstChild(targetDOM);
                }
            }
        }, {
            key: 'bindKeyPress',
            value: function bindKeyPress(e) {
                if (this.open && e.which === ESCAPE_KEY) {
                    this.closeModal('cancel');
                }
                if (this.open && e.which === TAB_KEY) {
                    trapTabKey(e, this, this.modal);
                }
            }
        }, {
            key: 'setPosition',
            value: function setPosition() {
                var _this8 = this;

                setTimeout(function () {
                    var modalPosition = _this8.modal.getBoundingClientRect();
                    w.scrollTo(0, 0);
                    if (modalPosition.top <= 0) {
                        _this8.modal.style.top = '50px';
                        _this8.modal.style.transform = 'translate(-50%)';
                        _this8.modal.style.marginBottom = '50px';
                    }
                }, 100);
            }
        }, {
            key: 'renderfooter',
            value: function renderfooter(parentNode) {
                var _this9 = this;

                var successBtnText = this.getAttribute('successBtnText'),
                    cancelBtnText = this.getAttribute('cancelBtnText');

                var actionsClone = actionsTemplate.content.cloneNode(true),
                    cancelButton = actionsClone.querySelector('#cancelButton'),
                    saveButton = actionsClone.querySelector('#successButton');

                var modalBody = parentNode.querySelector('#dialogDescription');

                if (cancelBtnText !== null) {
                    cancelButton.innerHTML = cancelBtnText;
                }

                if (successBtnText !== null) {
                    saveButton.innerHTML = successBtnText;
                }
                saveButton.addEventListener('click', function (event) {
                    var eventType = event.target.dataset.event;
                    _this9.closeModal(eventType);
                });
                modalBody.parentNode.insertBefore(actionsClone, modalBody.nextSibling);
            }
        }, {
            key: 'footer',
            get: function get() {
                return this.hasAttribute('footer');
            },
            set: function set(value) {
                var isfooterShown = Boolean(value);

                if (isfooterShown) {
                    this.setAttribute('footer', '');
                } else {
                    this.removeAttribute('footer');
                }
            }
        }, {
            key: 'minimized',
            get: function get() {
                return this.hasAttribute('minimized');
            },
            set: function set(value) {
                var isMinimized = Boolean(value);
                if (isMinimized) {
                    this.setAttribute('minimized', '');
                } else {
                    this.removeAttribute('minimized');
                }
            }
        }]);

        return Modal;
    }(HTMLElement);

    customElements.define('upload-modal', Modal);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');
  var progressInfo = doc.createElement('template');
  var check = doc.createElement('template');

  template.innerHTML = '\n  <style>\n.deep-encapsulation{\n  /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */}.deep-encapsulation *,.deep-encapsulation :after,.deep-encapsulation :before{-webkit-box-sizing:inherit;box-sizing:inherit}.deep-encapsulation html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}.deep-encapsulation body{margin:0}.deep-encapsulation article,.deep-encapsulation aside,.deep-encapsulation footer,.deep-encapsulation header,.deep-encapsulation nav,.deep-encapsulation section{display:block}.deep-encapsulation h1{font-size:2em;margin:.67em 0}.deep-encapsulation figcaption,.deep-encapsulation figure,.deep-encapsulation main{display:block}.deep-encapsulation figure{margin:1em 40px}.deep-encapsulation hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}.deep-encapsulation pre{font-family:monospace,monospace;font-size:1em}.deep-encapsulation a{background-color:transparent;-webkit-text-decoration-skip:objects}.deep-encapsulation a:active,.deep-encapsulation a:hover{outline-width:0}.deep-encapsulation abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.deep-encapsulation b,.deep-encapsulation strong{font-weight:inherit;font-weight:bolder}.deep-encapsulation code,.deep-encapsulation kbd,.deep-encapsulation samp{font-family:monospace,monospace;font-size:1em}.deep-encapsulation dfn{font-style:italic}.deep-encapsulation mark{background-color:#ff0;color:#000}.deep-encapsulation small{font-size:80%}.deep-encapsulation sub,.deep-encapsulation sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.deep-encapsulation sub{bottom:-.25em}.deep-encapsulation sup{top:-.5em}.deep-encapsulation audio,.deep-encapsulation video{display:inline-block}.deep-encapsulation audio:not([controls]){display:none;height:0}.deep-encapsulation img{border-style:none}.deep-encapsulation svg:not(:root){overflow:hidden}.deep-encapsulation button,.deep-encapsulation input,.deep-encapsulation optgroup,.deep-encapsulation select,.deep-encapsulation textarea{font-family:Open Sans,Calibri,Tahoma,sans-serif;font-size:100%;line-height:1.15;margin:0}.deep-encapsulation button,.deep-encapsulation input{overflow:visible}.deep-encapsulation button,.deep-encapsulation select{text-transform:none}.deep-encapsulation [type=reset],.deep-encapsulation [type=submit],.deep-encapsulation button,.deep-encapsulation html [type=button]{-webkit-appearance:button}.deep-encapsulation [type=button]::-moz-focus-inner,.deep-encapsulation [type=reset]::-moz-focus-inner,.deep-encapsulation [type=submit]::-moz-focus-inner,.deep-encapsulation button::-moz-focus-inner{border-style:none;padding:0}.deep-encapsulation [type=button]:-moz-focusring,.deep-encapsulation [type=reset]:-moz-focusring,.deep-encapsulation [type=submit]:-moz-focusring,.deep-encapsulation button:-moz-focusring{outline:1px dotted ButtonText}.deep-encapsulation fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}.deep-encapsulation legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.deep-encapsulation progress{display:inline-block;vertical-align:baseline}.deep-encapsulation textarea{overflow:auto}.deep-encapsulation [type=checkbox],.deep-encapsulation [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}.deep-encapsulation [type=number]::-webkit-inner-spin-button,.deep-encapsulation [type=number]::-webkit-outer-spin-button{height:auto}.deep-encapsulation [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.deep-encapsulation [type=search]::-webkit-search-cancel-button,.deep-encapsulation [type=search]::-webkit-search-decoration{-webkit-appearance:none}.deep-encapsulation ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.deep-encapsulation details,.deep-encapsulation menu{display:block}.deep-encapsulation summary{display:list-item}.deep-encapsulation canvas{display:inline-block}.deep-encapsulation [hidden],.deep-encapsulation template{display:none}.deep-encapsulation html{font-size:.875rem}.deep-encapsulation body{font-family:Open Sans,Calibri,Tahoma,sans-serif;color:#252525}.deep-encapsulation h1,.deep-encapsulation h2,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation h5,.deep-encapsulation h6{margin-top:0;margin-bottom:0}.deep-encapsulation *+h1,.deep-encapsulation *+h2,.deep-encapsulation *+h3,.deep-encapsulation *+h4,.deep-encapsulation *+h5,.deep-encapsulation *+h6{margin-top:20px}.deep-encapsulation h1+h2{margin-top:40px}.deep-encapsulation h2+h3,.deep-encapsulation h3+h4,.deep-encapsulation h4+h5,.deep-encapsulation h5+h6{margin-top:6px}.deep-encapsulation header{margin-bottom:20px}.deep-encapsulation header h1+.subtitle{margin-top:34px}.deep-encapsulation aside h1{font-size:1.25rem}.deep-encapsulation aside h2{font-size:1.1rem}.deep-encapsulation aside h3{font-size:1rem}.deep-encapsulation aside h4,.deep-encapsulation aside h5,.deep-encapsulation aside h6{font-size:.8rem}.deep-encapsulation table{width:100%;max-width:100%;margin-bottom:35px;border-collapse:collapse}.deep-encapsulation table td,.deep-encapsulation table th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left}.deep-encapsulation table thead th{vertical-align:bottom;border-top:0}.deep-encapsulation a{color:#047a9c;text-decoration:underline}.deep-encapsulation a.active,.deep-encapsulation a:active,.deep-encapsulation a:focus,.deep-encapsulation a:hover{color:#005a70;text-decoration:none}.deep-encapsulation a:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.deep-encapsulation abbr,.deep-encapsulation abbr[title]{text-decoration:none}.deep-encapsulation ins:after,.deep-encapsulation ins:before{content:"+"}.deep-encapsulation mark{background:#ffb81c}.deep-encapsulation small{font-size:.85714rem;line-height:1.14286rem}.deep-encapsulation sub,.deep-encapsulation sup{font-size:90%}.deep-encapsulation sub{top:.2rem}.deep-encapsulation sup{top:-.2rem}.deep-encapsulation pre{max-width:100%;overflow-x:auto}.deep-encapsulation code,.deep-encapsulation kbd,.deep-encapsulation pre{font-family:Monaco,Lucida Console,monospace}.deep-encapsulation :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@font-face{.deep-encapsulation{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff) format("woff");font-weight:100;font-style:normal;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff) format("woff");font-style:italic;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff) format("woff");font-weight:400;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff) format("woff");src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff) format("woff");font-weight:600;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff) format("woff")}}.deep-encapsulation .pe-base-fontsize{font-size:.875rem}.deep-encapsulation .pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.deep-encapsulation .pe-copy{font-size:1rem;line-height:1.57143rem;color:#252525}.deep-encapsulation .pe-copy--secondary,.deep-encapsulation .pe-label--secondary{color:#6a7070}.deep-encapsulation .pe-copy--small{font-size:.85714rem;line-height:1.42857rem;color:#252525}.deep-encapsulation .pe-copy--large,.deep-encapsulation .pe-heading-level6,.deep-encapsulation h6,.deep-encapsulation header h5+.subtitle{font-size:1.14286rem;line-height:1.71429rem;color:#252525}.deep-encapsulation .pe-paragraph,.deep-encapsulation p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.deep-encapsulation .pe-paragraph--last{margin-bottom:0;color:#252525}.deep-encapsulation .pe-lead{font-size:1.42857rem;line-height:2rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-page-title{font-size:2.71429rem;line-height:3.71429rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-heading-level1,.deep-encapsulation .pe-page-title--small,.deep-encapsulation h1{font-size:2rem;line-height:2.71429rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-heading-level3,.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-title,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation header h2+.subtitle,.deep-encapsulation header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400;color:#252525}.deep-encapsulation .pe-heading-level5,.deep-encapsulation .pe-title--small,.deep-encapsulation h5,.deep-encapsulation header h4+.subtitle{font-size:1.28571rem;line-height:1.57143rem;font-weight:400;color:#252525}.deep-encapsulation .pe-heading-level2,.deep-encapsulation .pe-title--large,.deep-encapsulation h2,.deep-encapsulation header h1+.subtitle{font-size:1.71429rem;line-height:2rem;font-weight:400;color:#252525}.deep-encapsulation .pe-page-title--secondary,.deep-encapsulation .pe-title--secondary{color:#6a7070}.deep-encapsulation .pe-label{font-size:1rem;line-height:1.28571rem}.deep-encapsulation .pe-label.pe-label--inverse{color:#fff}.deep-encapsulation .pe-label--secondary.pe-label--inverse{color:#f5f5f5}.deep-encapsulation .pe-label--small{font-size:.85714rem;line-height:1.14286rem}.deep-encapsulation .pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.deep-encapsulation .pe-bold,.deep-encapsulation .pe-label--bold{font-weight:600}.deep-encapsulation .pe-list{margin:12px 0;padding-left:1.85714rem}.deep-encapsulation .pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.deep-encapsulation .pe-list li>ol,.deep-encapsulation .pe-list li>ul{margin-top:.42857rem}.deep-encapsulation .pe-list.pe-styled-lists--ordered{list-style-type:decimal}.deep-encapsulation .pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.deep-encapsulation .pe-list.pe-styled-lists--unordered{list-style-type:disc}.deep-encapsulation .pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.deep-encapsulation .pe-list--unstyled{list-style:none;padding-left:0}.deep-encapsulation .pe-list--unstyled ul{padding-left:1.85714rem}.deep-encapsulation .pe-heading-level1,.deep-encapsulation .pe-heading-level2,.deep-encapsulation h1,.deep-encapsulation h2,.deep-encapsulation header h1+.subtitle{margin-bottom:6px}.deep-encapsulation .pe-heading-level3,.deep-encapsulation h3,.deep-encapsulation header h2+.subtitle{font-weight:700;margin-bottom:6px}.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-heading-level5,.deep-encapsulation .pe-heading-level6,.deep-encapsulation h4,.deep-encapsulation h5,.deep-encapsulation h6,.deep-encapsulation header h3+.subtitle,.deep-encapsulation header h4+.subtitle,.deep-encapsulation header h5+.subtitle{margin-bottom:6px}.deep-encapsulation *+[class^=pe-heading-level]{margin-top:20px}.deep-encapsulation .pe-code{font-family:Monaco,Lucida Console,monospace;color:#f5f5f5;font-size:1rem;line-height:1.42857rem;background:#005a70;padding:30px 50px}.deep-encapsulation .pe-code-inline,.deep-encapsulation .pe-kbd{font-family:Monaco,Lucida Console,monospace;background:#e9e9e9;padding:0 4px}.deep-encapsulation #pe-icons-sprite{display:none}.deep-encapsulation svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:currentColor}.deep-encapsulation [class^=pe-btn] svg[class$="-18"],.deep-encapsulation [class^=pe-btn] svg[class$="-24"]{vertical-align:middle;margin-left:.5em;margin-bottom:.3em}.deep-encapsulation svg[class$="-18"]{width:18px;height:18px}.deep-encapsulation svg[class$="-24"]{width:24px;height:24px}.deep-encapsulation svg[class$=font-setting-18]{width:24px;height:18px}.deep-encapsulation svg[class$=font-setting-24]{width:32px;height:24px}.deep-encapsulation svg[class$=new-notification-9]{vertical-align:middle;width:10px;height:10px}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large,.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn__cta,.deep-encapsulation .pe-btn__cta--btn_large,.deep-encapsulation .pe-btn__cta--btn_small,.deep-encapsulation .pe-btn__cta--btn_xlarge,.deep-encapsulation .pe-btn__primary,.deep-encapsulation .pe-btn__primary--btn_large,.deep-encapsulation .pe-btn__primary--btn_small,.deep-encapsulation .pe-btn__primary--btn_xlarge,.deep-encapsulation .pe-btn__tertiary,.deep-encapsulation .pe-btn__tertiary--btn_large,.deep-encapsulation .pe-btn__tertiary--btn_small,.deep-encapsulation .pe-btn__tertiary--btn_xlarge{-webkit-box-sizing:border-box;box-sizing:border-box;border:none;display:inline-block;vertical-align:middle;cursor:pointer;height:36px;padding:0 20px;border-radius:36px;font-size:14px;line-height:18px;font-weight:600}.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn__cta--btn_small,.deep-encapsulation .pe-btn__primary--btn_small,.deep-encapsulation .pe-btn__tertiary--btn_small{height:32px;border-radius:32px;padding:0 12px;font-size:14px;line-height:18px}.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn__cta--btn_xlarge,.deep-encapsulation .pe-btn__primary--btn_xlarge,.deep-encapsulation .pe-btn__tertiary--btn_xlarge{height:40px;border-radius:40px;padding:0 20px;font-size:16px;line-height:20px}.deep-encapsulation .pe-icon--btn{padding:0;background-color:transparent;border:0;position:relative}.deep-encapsulation .pe-icon--btn:focus{outline:0}.deep-encapsulation .pe-icon--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link,.deep-encapsulation .pe-link--btn{text-decoration:underline;background-color:transparent;border:0;cursor:pointer;position:relative}.deep-encapsulation .pe-link{color:#047a9c;padding:0}.deep-encapsulation .pe-link:hover{color:#005a70;text-decoration:none}.deep-encapsulation .pe-link:focus{color:#005a70;text-decoration:none;outline:0}.deep-encapsulation .pe-link:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link--btn{color:#047a9c;padding:4px;position:relative}.deep-encapsulation .pe-link--btn:hover{text-decoration:none}.deep-encapsulation .pe-link--btn:focus{text-decoration:none;outline:0}.deep-encapsulation .pe-link--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link--btn:disabled{color:#6a7070;text-decoration:none;cursor:default}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large,.deep-encapsulation .pe-btn--btn_large:active,.deep-encapsulation .pe-btn--btn_large:hover,.deep-encapsulation .pe-btn:active,.deep-encapsulation .pe-btn:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_large:focus,.deep-encapsulation .pe-btn:focus{color:#505759;background-color:transparent;border:1px solid #c7c7c7;outline:0}.deep-encapsulation .pe-btn--btn_large:focus:after,.deep-encapsulation .pe-btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_large:disabled,.deep-encapsulation .pe-btn.pe-btn--disabled,.deep-encapsulation .pe-btn.pe-btn--disabled:hover,.deep-encapsulation .pe-btn:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_large span.btn-overflow,.deep-encapsulation .pe-btn span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btngroup button:first-child{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.deep-encapsulation .pe-btngroup button:last-child{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.deep-encapsulation .pe-btngroup button:not(:first-child):not(:last-child){border-radius:0!important}.deep-encapsulation .pe-btn--btn_small{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn--btn_small:active,.deep-encapsulation .pe-btn--btn_small:focus,.deep-encapsulation .pe-btn--btn_small:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_small:focus{outline:0}.deep-encapsulation .pe-btn--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_small:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn--btn_xlarge{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn--btn_xlarge:active,.deep-encapsulation .pe-btn--btn_xlarge:focus,.deep-encapsulation .pe-btn--btn_xlarge:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_xlarge:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary,.deep-encapsulation .pe-btn__primary--btn_large{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_large:active,.deep-encapsulation .pe-btn__primary--btn_large:hover,.deep-encapsulation .pe-btn__primary:active,.deep-encapsulation .pe-btn__primary:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_large:focus,.deep-encapsulation .pe-btn__primary:focus{color:#fff;background-color:#005a70;border:1px solid #005a70;outline:0}.deep-encapsulation .pe-btn__primary--btn_large:focus:after,.deep-encapsulation .pe-btn__primary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_large:disabled,.deep-encapsulation .pe-btn__primary.pe-btn--disabled,.deep-encapsulation .pe-btn__primary.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__primary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary--btn_small{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_small:active,.deep-encapsulation .pe-btn__primary--btn_small:focus,.deep-encapsulation .pe-btn__primary--btn_small:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__primary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary--btn_xlarge{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_xlarge:active,.deep-encapsulation .pe-btn__primary--btn_xlarge:focus,.deep-encapsulation .pe-btn__primary--btn_xlarge:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__primary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta,.deep-encapsulation .pe-btn__cta--btn_large{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_large:active,.deep-encapsulation .pe-btn__cta--btn_large:hover,.deep-encapsulation .pe-btn__cta:active,.deep-encapsulation .pe-btn__cta:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_large:focus,.deep-encapsulation .pe-btn__cta:focus{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19;outline:0}.deep-encapsulation .pe-btn__cta--btn_large:focus:after,.deep-encapsulation .pe-btn__cta:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_large:disabled,.deep-encapsulation .pe-btn__cta.pe-btn--disabled,.deep-encapsulation .pe-btn__cta.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__cta span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta--btn_small{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_small:active,.deep-encapsulation .pe-btn__cta--btn_small:focus,.deep-encapsulation .pe-btn__cta--btn_small:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__cta--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta--btn_xlarge{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_xlarge:active,.deep-encapsulation .pe-btn__cta--btn_xlarge:focus,.deep-encapsulation .pe-btn__cta--btn_xlarge:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__cta--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary,.deep-encapsulation .pe-btn__tertiary--btn_large{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_large:active,.deep-encapsulation .pe-btn__tertiary--btn_large:hover,.deep-encapsulation .pe-btn__tertiary:active,.deep-encapsulation .pe-btn__tertiary:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_large:focus,.deep-encapsulation .pe-btn__tertiary:focus{color:#505759;background-color:#ededed;border:1px solid #ededed;outline:0}.deep-encapsulation .pe-btn__tertiary--btn_large:focus:after,.deep-encapsulation .pe-btn__tertiary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_large:disabled,.deep-encapsulation .pe-btn__tertiary.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__tertiary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary--btn_small{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_small:active,.deep-encapsulation .pe-btn__tertiary--btn_small:focus,.deep-encapsulation .pe-btn__tertiary--btn_small:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__tertiary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary--btn_xlarge{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:active,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation a[class$="--btn_xlarge"],.deep-encapsulation div[class$="--btn_xlarge"]{line-height:40px!important}.deep-encapsulation a[class$="--btn_large"],.deep-encapsulation a[class=pe-btn],.deep-encapsulation a[class=pe-btn__cta],.deep-encapsulation a[class=pe-btn__primary],.deep-encapsulation a[class=pe-btn__tertiary],.deep-encapsulation div[class$="--btn_large"],.deep-encapsulation div[class=pe-btn],.deep-encapsulation div[class=pe-btn__cta],.deep-encapsulation div[class=pe-btn__primary],.deep-encapsulation div[class=pe-btn__tertiary]{line-height:36px!important}.deep-encapsulation a[class$="--btn_small"],.deep-encapsulation div[class$="--btn_small"]{line-height:32px!important}.deep-encapsulation input[class^=pe-btn]:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.deep-encapsulation button>*{pointer-events:none}.deep-encapsulation .pe-modal-container{width:475px}.deep-encapsulation .pe-modal-container>.pe-heading-level3,.deep-encapsulation .pe-modal-container>.pe-heading-level4,.deep-encapsulation .pe-modal-container>.pe-title,.deep-encapsulation .pe-modal-container>h3,.deep-encapsulation .pe-modal-container>h4,.deep-encapsulation header .pe-modal-container>h2+.subtitle,.deep-encapsulation header .pe-modal-container>h3+.subtitle{width:100%;text-align:center;padding:20px 0}.deep-encapsulation .pe-file-upload-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:Open Sans,Arial,Helvetica,sans-serif}@media (max-width:768px){.deep-encapsulation .pe-file-upload-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.deep-encapsulation .pe-file-upload-container .file-upload{height:362px;border-radius:6px;border:2px dashed #6a7070;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-image:url(icons/drag.svg);background-repeat:no-repeat;background-position:center 30px;background-size:100px;margin:40px 0}.deep-encapsulation .pe-file-upload-container .file-upload.highlight{border:2px dashed #047a9c;background-color:#e9f9fe;background-image:url(icons/drag-target.svg)}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;width:390px}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .pe-heading-level3,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .pe-heading-level4,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .pe-title,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area h3,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area h4,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area header h2+.subtitle,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area header h3+.subtitle,.deep-encapsulation header .pe-file-upload-container .file-upload .drop-area h2+.subtitle,.deep-encapsulation header .pe-file-upload-container .file-upload .drop-area h3+.subtitle{margin-top:6em}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area button{width:154px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-bottom:35px}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .info{color:#6a7070;font-size:12px;margin:0}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .text{margin-bottom:16px}.deep-encapsulation .pe-file-upload-container .file-upload-info{display:none;margin-left:2.5em;width:373px;border-left:1px solid #c7c7c7;padding:40px 0 0 2.5em;max-height:410px;overflow:scroll}@media (max-width:768px){.deep-encapsulation .pe-file-upload-container .file-upload-info{border-left:0;padding:0;margin:0;max-height:100%;width:100%}}.deep-encapsulation .pe-file-upload-container .file-upload-info .text{max-width:260px;word-break:break-word}.deep-encapsulation .pe-file-upload-container .file-upload-info .text strong{line-height:1.5}.deep-encapsulation .pe-file-upload-container .progress{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #f5f5f5;padding-bottom:1em;margin-bottom:1em;padding-right:10px}.deep-encapsulation .pe-file-upload-container .indicator,.deep-encapsulation .pe-file-upload-container .progress .group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.deep-encapsulation .pe-file-upload-container .indicator{margin-right:1em;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:50px;width:50px}.deep-encapsulation .pe-file-upload-container .indicator span{position:absolute;font-weight:700;color:#047a9c;font-size:.7em}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.deep-encapsulation .pe-file-upload-container .indicator span{position:relative}}.deep-encapsulation .pe-file-upload-container .indicator img{width:18px}.deep-encapsulation .pe-file-upload-container .text .info{color:#6a7070;font-size:12px;margin:0}.deep-encapsulation .pe-file-upload-container .upload-actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:4px}.deep-encapsulation .pe-file-upload-container .upload-actions button{cursor:pointer;width:40px;height:40px}.deep-encapsulation .pe-file-upload-container .upload-actions button svg{fill:#6a7070}.deep-encapsulation .pe-file-upload-container .upload-title{font-weight:400}.deep-encapsulation .pe-file-upload-container .pe-progress-container{margin-top:1em}.deep-encapsulation .pe-file-upload-container input[type=file]{display:none}.deep-encapsulation .pe-file-upload-container progress-ring{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.deep-encapsulation .pe-file-upload-container progress-ring{display:none}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.deep-encapsulation body:focus,.deep-encapsulation html:focus{outline:none}}.deep-encapsulation .pe-heading-level3,.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-title,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation header h2+.subtitle,.deep-encapsulation header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400}.deep-encapsulation :host{font-size:.875em;color:#252525}.alert-title,.deep-encapsulation :host{font-family:Open Sans,Calibri,Tahoma,"sans-serif"}.alert-title{font-size:14px;font-weight:400;top:-12px;position:relative}\n  </style>\n    <upload-modal triggerId titleText="Upload Files" successBtnText="Done" style="display:none">\n    <div class="deep-encapsulation">\n      <div class="pe-file-upload-container">\n        <div id="drop" class="file-upload">\n          <div class="drop-area">\n            <p class="pe-title">Drag files here</p>\n            <p class="text">or</p>\n            <input type="file" name="file" multiple>\n            <button id="attachFiles" class="pe-btn--btn_large" data-action="toggle-footer" type="button">Browse Files</button>\n            <p class="info">Upload up to <span id="maxNumberOfFiles"></span> files.</p>\n            <p class="info">Max file size <span id="maxFileSize"></span></p>\n          </div>\n        </div>\n        <div id="info" class="file-upload-info">\n          <h6 id="uploadTitle" class="upload-title" aria-live="assertive"></h6>\n          <div id="progressContainer" class="pe-progress-container"></div>\n        </div>\n      </div>\n      </div>\n    </upload-modal>\n  ';

  progressInfo.innerHTML = '\n  <div class="progress">\n    <div class="group">\n      <div class="indicator">\n        <span class="total"></span>\n      </div>\n      <div class="text">\n        <strong class="filename"></strong>\n        <p class="info">\n          <span class="bytes-loaded"></span>\n          <span class="bytes-total"></span>\n        </p>\n      </div>\n    </div>\n    <div class="upload-actions">\n      <button class="pe-icon--btn remove-file" aria-label="remove FILE from uploads">\n        <img height="18" width="18" src="data:image/svg+xml,%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' fill=\'%236a7070\' viewBox=\'0 0 18 18\'%3E%3Cpath d=\'M12,14.5 C12,14.776 11.776,15 11.5,15 C11.224,15 11,14.776 11,14.5 L11,5.5 C11,5.224 11.224,5 11.5,5 C11.776,5 12,5.224 12,5.5 L12,14.5 Z M9,14.5 C9,14.776 8.776,15 8.5,15 C8.224,15 8,14.776 8,14.5 L8,5.5 C8,5.224 8.224,5 8.5,5 C8.776,5 9,5.224 9,5.5 L9,14.5 Z M6,2 L11,2 L11,1 L6,1 L6,2 Z M6,14.5 C6,14.776 5.776,15 5.5,15 C5.224,15 5,14.776 5,14.5 L5,5.5 C5,5.224 5.224,5 5.5,5 C5.776,5 6,5.224 6,5.5 L6,14.5 Z M16.5,2 L12,2 L12,0.5 C12,0.224 11.776,0 11.5,0 L5.5,0 C5.224,0 5,0.224 5,0.5 L5,2 L0.5,2 C0.224,2 0,2.224 0,2.5 C0,2.776 0.224,3 0.5,3 L2,3 L2,17.5 C2,17.776 2.224,18 2.5,18 L14.5,18 C14.776,18 15,17.776 15,17.5 L15,3 L16.5,3 C16.776,3 17,2.776 17,2.5 C17,2.224 16.776,2 16.5,2 L16.5,2 Z\'%3E%3C/path%3E%3C/svg%3E"/>\n      </button>\n    </div>\n  </div>\n  ';

  check.innerHTML = '\n  <span>\n    <img height="18" width="18" class="pe-icon--check-sm-24" src="data:image/svg+xml,%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23047a9c\' viewBox=\'0 0 18 18\'%3E%3Cpath d=\'M17.5762,6.1826 C17.1252,5.8656 16.5012,5.9716 16.1822,6.4236 L9.8432,15.4146 L7.7332,13.1386 C7.3582,12.7326 6.7242,12.7096 6.3202,13.0846 C5.9152,13.4596 5.8912,14.0926 6.2662,14.4976 L9.2152,17.6796 C9.4052,17.8846 9.6712,17.9996 9.9492,17.9996 C9.9712,17.9996 9.9932,17.9986 10.0152,17.9976 C10.3162,17.9776 10.5922,17.8236 10.7662,17.5766 L17.8172,7.5766 C18.1362,7.1246 18.0282,6.5006 17.5762,6.1826\'%3E%3C/path%3E%3C/svg%3E" style="position:relative; top:-1px; left: -2px;"/>\n  </span>\n  ';

  var status = {
    done: 0,
    progress: 0
  };

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-uploader');

  function returnOperator(opr, type) {
    if (opr === 'plus') {
      return status[type]++;
    } else if (opr === 'minus') {
      return status[type]--;
    } else {
      return;
    }
  }

  function updateProgress(element) {
    var modal = element.querySelector('upload-modal'),
        uploadTitle = modal.querySelector('#uploadTitle'),
        uploadInfo = modal.querySelector('#info'),
        cancelBtn = modal.shadowRoot.querySelector('#cancelButton'),
        successBtn = modal.shadowRoot.querySelector('#successButton');

    if (status.progress >= 1) {
      cancelBtn.disabled = false;
    } else {
      cancelBtn.disabled = true;
    }

    if (status.progress === 0 && status.done >= 1) {
      successBtn.disabled = false;
    } else {
      successBtn.disabled = true;
    }

    if (status.progress === 0 && status.done === 0) {
      modal.footer = false;
      uploadInfo.style.display = 'none';
    }

    uploadTitle.innerHTML = 'Uploading (' + status.done + ' done, ' + status.progress + ' progress)';
  }

  function dispatchEvent(element, name) {
    var modal = element.querySelector('upload-modal');
    modal.dispatchEvent(new CustomEvent(name, {
      detail: {
        done: status.done,
        progress: status.progress
      }
    }));
  }

  function updateStatus(opr, statusType, element) {
    var modal = element.querySelector('upload-modal');
    returnOperator(opr, statusType);
    if (modal.footer) {
      updateProgress(element);
    }
    dispatchEvent(element, 'xhrLoading');
  }

  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function formatBytes(bytes, decimalPoint) {
    if (bytes === 0) return '0 Bytes';
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function generateAlert(opts) {
    var alert = doc.createElement('pearson-upload-alert');
    for (var attrName in opts) {
      alert.setAttribute(attrName, opts[attrName]);
    }
    return alert;
  }

  function buildAlert(opts) {
    var alert = generateAlert({
      returnNode: '#attachFiles',
      type: 'error',
      level: 'global',
      animated: true,
      focusOnOpen: true
    });

    alert.innerHTML = '\n      <h2 id="alertTitle" class="pe-label alert-title">\n          <strong>' + opts.strong + '</strong>' + opts.text + '\n       </h2>\n  ';
    return alert;
  }

  function tooLarge(current, max) {
    return current >= max;
  }

  var FileUpload = function (_HTMLElement) {
    _inherits(FileUpload, _HTMLElement);

    function FileUpload() {
      _classCallCheck(this, FileUpload);

      var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this));

      _this.attachShadow({
        mode: 'open'
      });

      var clone = template.content.cloneNode(true);

      _this.uploadInfo = clone.querySelector('#info');
      _this.realUploadInput = clone.querySelector('input[type="file"]');
      _this.attachBtn = clone.querySelector('#attachFiles');
      _this.target = clone.querySelector('#progressContainer');
      _this.dropArea = clone.querySelector('#drop');
      _this.modal = clone.querySelector('upload-modal');
      _this.max = clone.querySelector('#maxFileSize');
      _this.fileNumber = clone.querySelector('#maxNumberOfFiles');
      _this.modal.setAttribute('triggerId', _this.triggerId);

      _this.handleFiles = _this.handleFiles.bind(_this);
      _this.uploadFile = _this.uploadFile.bind(_this);
      _this.renderProgressItems = _this.renderProgressItems.bind(_this);
      _this.highlight = _this.highlight.bind(_this);
      _this.unhighlight = _this.unhighlight.bind(_this);
      _this.handleDrop = _this.handleDrop.bind(_this);
      _this.deleteFile = _this.deleteFile.bind(_this);

      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(FileUpload, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        var modal = this.shadowRoot.querySelector('upload-modal');
        this.realUploadInput.addEventListener('change', function (event) {
          _this2.handleFiles(event.srcElement.files);
          _this2.attachBtn.focus({
            preventScroll: true
          });
          _this2.realUploadInput.value = '';
        });

        this.attachBtn.addEventListener('click', function () {
          _this2.realUploadInput.click();
        });

        this.dropArea.addEventListener('dragenter', this.highlight);
        this.dropArea.addEventListener('dragover', this.highlight);
        this.dropArea.addEventListener('dragleave', this.unhighlight);
        this.dropArea.addEventListener('drop', this.handleDrop);

        modal.addEventListener('click', function (event) {
          event.stopImmediatePropagation();
          var target = event.target;
          console.log(target);
          // do {
          //   if (target.tagName === 'BUTTON') {
          //     return;
          //   }
          //   target = target.parentNode;
          // } while (target);

          if (target.classList.contains('remove-file')) {
            _this2.deleteFile(event);
          }
        });

        this.max.innerHTML = formatBytes(this.maxFileSize);
        this.fileNumber.innerHTML = this.maxNumberOfFiles;
      }
    }, {
      key: 'handleFiles',
      value: function handleFiles(files) {
        var alertMessage = {
          strong: 'Too many files.',
          text: ' You can only upload a max number of ' + this.maxNumberOfFiles + ' files'
        };
        if (files.length <= parseInt(this.maxNumberOfFiles)) {
          [].concat(_toConsumableArray(files)).forEach(this.uploadFile);
        } else {
          modal.appendChild(buildAlert(alertMessage));
        }
      }
    }, {
      key: 'deleteFile',
      value: function deleteFile(event) {
        var _this3 = this;

        var xhr = new XMLHttpRequest(),
            fileName = event.target.parentNode.parentNode.getAttribute('data-file'),
            url = this.apiUrl + fileName,
            modal = this.shadowRoot.querySelector('upload-modal'),
            domNode = event.target.parentNode.parentNode,
            alertMessage = {
          strong: fileName + ' ',
          text: 'was not deleted. There was a problem with the server.'
        };

        xhr.open('DELETE', url, true);

        xhr.addEventListener('load', function () {
          if (xhr.readyState === 4 && xhr.status === 204) {
            domNode.remove();
            updateStatus('minus', 'done', _this3.shadowRoot);
          } else {
            domNode.style.display = 'flex';
            modal.appendChild(buildAlert(alertMessage));
          }
        });

        domNode.style.display = 'none';
        xhr.send(null);
      }
    }, {
      key: 'uploadFile',
      value: function uploadFile(file) {
        var _this4 = this;

        var xhr = new XMLHttpRequest(),
            formData = new FormData(),
            modal = this.shadowRoot.querySelector('upload-modal'),
            alertMessage = {
          strong: file.name + ' ',
          text: 'was not uploaded. There was a problem with the server.'
        },
            alertMessage2 = {
          strong: file.name + ' ',
          text: 'is too large to be uploaded.'
        },
            fileNotTooLarge = !tooLarge(parseInt(file.size), parseInt(this.maxFileSize));

        xhr.addEventListener('load', function (event) {
          updateStatus('plus', 'done', _this4.shadowRoot);
          if (status.progress > 0) {
            updateStatus('minus', 'progress', _this4.shadowRoot);
          }
        });

        xhr.addEventListener('error', function (event) {
          target.appendChild(buildAlert(alertMessage));
        });

        xhr.addEventListener('abort', function (event) {
          var uploader = document.querySelector('pearson-uploader'),
              element = uploader.shadowRoot.querySelector('[data-file="' + file.name + '"]');
          element.remove();
          updateStatus('minus', 'progress', _this4.shadowRoot);
        });

        if (fileNotTooLarge) {
          xhr.open('POST', this.apiUrl, true);
          status.progress++;
          if (modal.footer !== true) {
            modal.footer = true;
            this.uploadInfo.style.display = 'block';
          }

          this.renderProgressItems(file, xhr);
          formData.append('key', file.name);
          formData.append('file', file);
          xhr.send(formData);

          var cancelButton = this.shadowRoot.querySelector('upload-modal').shadowRoot.querySelector('#cancelButton');

          cancelButton.addEventListener('click', function (event) {
            xhr.abort();
          });
        } else {
          modal.appendChild(buildAlert(alertMessage2));
        }
      }
    }, {
      key: 'renderProgressItems',
      value: function renderProgressItems(file, xhr) {
        var _this5 = this;

        var infoClone = progressInfo.content.cloneNode(true),
            checkClone = check.content.cloneNode(true),
            progressTarget = this.shadowRoot.querySelector('#progressContainer'),
            progress = infoClone.querySelector('.progress'),
            indicator = infoClone.querySelector('.indicator'),
            filename = infoClone.querySelector('.filename'),
            textTotal = infoClone.querySelector('.total'),
            removeBtn = infoClone.querySelector('.remove-file'),
            bytesLoaded = infoClone.querySelector('.bytes-loaded'),
            bytesTotal = infoClone.querySelector('.bytes-total'),
            buildRing = document.createElement('progress-ring');

        progressTarget.appendChild(infoClone);
        indicator.appendChild(buildRing);
        progress.setAttribute('data-file', file.name);
        filename.innerHTML = file.name;
        removeBtn.style.visibility = 'hidden';

        xhr.upload.addEventListener('progress', function (event) {
          var percentLoaded = Math.round(event.loaded / event.total * 100);
          bytesLoaded.innerHTML = formatBytes(event.loaded);
          bytesTotal.innerHTML = formatBytes(event.total);
          buildRing.setAttribute('progress', percentLoaded);
          buildRing.setAttribute('stroke', 3);
          buildRing.setAttribute('radius', 25);

          if (percentLoaded !== 100) {
            updateProgress(_this5.shadowRoot);
            return textTotal.innerHTML = percentLoaded;
          } else {
            removeBtn.setAttribute('aria-label', 'Remove ' + file.name + ' from uploads.');
            removeBtn.style.visibility = 'visible';
            return textTotal.innerHTML = checkClone.querySelector('span').innerHTML;
          }
        });
      }
    }, {
      key: 'highlight',
      value: function highlight(event) {
        preventDefaults(event);
        this.dropArea.classList.add('highlight');
      }
    }, {
      key: 'unhighlight',
      value: function unhighlight(event) {
        preventDefaults(event);
        this.dropArea.classList.remove('highlight');
      }
    }, {
      key: 'handleDrop',
      value: function handleDrop(event) {
        this.unhighlight(event);
        var dt = event.dataTransfer;
        var files = dt.files;
        this.handleFiles(files);
      }
    }, {
      key: 'apiUrl',
      get: function get() {
        return this.getAttribute('apiUrl');
      }
    }, {
      key: 'maxFileSize',
      get: function get() {
        return this.getAttribute('maxByteFileSize');
      }
    }, {
      key: 'maxNumberOfFiles',
      get: function get() {
        return this.getAttribute('maxNumberOfFiles');
      }
    }, {
      key: 'triggerId',
      get: function get() {
        return this.getAttribute('triggerId');
      }
    }]);

    return FileUpload;
  }(HTMLElement);

  customElements.define('pearson-uploader', FileUpload);
})(window, document);

(function (w, doc) {
  'use strict';

  var ProgressRing = function (_HTMLElement2) {
    _inherits(ProgressRing, _HTMLElement2);

    function ProgressRing() {
      _classCallCheck(this, ProgressRing);

      var _this6 = _possibleConstructorReturn(this, (ProgressRing.__proto__ || Object.getPrototypeOf(ProgressRing)).call(this));

      var stroke = _this6.getAttribute('stroke');
      var radius = _this6.getAttribute('radius');
      var normalizedRadius = 25 - 3 * 2;
      _this6._circumference = normalizedRadius * 2 * Math.PI;

      _this6._root = _this6.attachShadow({ mode: 'open' });
      _this6._root.innerHTML = '\n        <svg\n          height="50"\n          width="50"\n          aria-hidden="true"\n          focusable="false"\n         >\n           <circle\n             stroke="#047a9c"\n             stroke-dasharray="' + _this6._circumference + ' ' + _this6._circumference + '"\n             style="stroke-dashoffset:' + _this6._circumference + '"\n             stroke-width="3"\n             fill="transparent"\n             r="' + normalizedRadius + '"\n             cx="25"\n             cy="25"\n          />\n        </svg>\n  \n        <style>\n          circle {\n            transition: stroke-dashoffset 0.35s;\n            transform: rotate(-90deg);\n            transform-origin: 50% 50%;\n          }\n        </style>\n      ';
      return _this6;
    }

    _createClass(ProgressRing, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (!this.hasAttribute('role') || this.getAttribute('role') !== 'progressbar') {
          this.setAttribute('role', 'progressbar');
        }
        if (!this.hasAttribute('aria-valuemin') || this.getAttribute('aria-valuemin') !== 0) {
          this.setAttribute('aria-valuemin', 0);
        }

        if (!this.hasAttribute('aria-valuemax') || this.getAttribute('aria-valuemax') !== 100) {
          this.setAttribute('aria-valuemax', 100);
        }

        if (!this.hasAttribute('aria-valuenow') || this.getAttribute('aria-valuenow') !== this.progress) {
          this.setAttribute('aria-valuenow', this.progress);
        }

        var valueText = this.progress + ' percent complete';
        if (!this.hasAttribute('aria-valueText') || this.getAttribute('aria-valueText') !== valueText) {
          this.setAttribute('aria-valueText', valueText);
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'progress') {
          this.setProgress(newValue);
        }
      }
    }, {
      key: 'setProgress',
      value: function setProgress(percent) {
        var offset = this._circumference - percent / 100 * this._circumference;
        var circle = this._root.querySelector('circle');
        circle.style.strokeDashoffset = offset;

        this.setAttribute('aria-valuenow', percent);
        this.setAttribute('aria-valuetext', percent + ' percent complete');
      }
    }, {
      key: 'upgradeProp',
      value: function upgradeProp(prop) {
        if (this.hasOwnProperty(prop)) {
          var value = this[prop];
          delete this[prop];
          this[prop] = value;
        }
      }
    }, {
      key: 'progress',
      get: function get() {
        return this.getAttribute('progress');
      },
      set: function set(value) {
        this.setAttribute('progress', value);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['progress', 'radius', 'stroke'];
      }
    }]);

    return ProgressRing;
  }(HTMLElement);

  w.customElements.define('progress-ring', ProgressRing);
})(window, document);