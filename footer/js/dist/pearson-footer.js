var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template');

  var COPYRIGHT_TEXT = 'Copyright \xA9 1996-' + new Date().getFullYear() + ' Pearson Education Inc. All Rights Reserved.';

  template.innerHTML = ' \n  <style>\n    .hidden{display:none!important}*{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;bottom:0;width:inherit;padding:0 1em 24px;font-family:Open Sans,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;color:#252525;background-color:#fff}@media (max-width:979px){:host{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}:host([theme=dark]){color:#fff;background:#005a70}:host([theme=dark]) a{color:inherit}:host([theme=dark]) li{border-color:#fff}a{color:#047b9c}a:focus,a:hover{color:#005a70;text-decoration:none}ul{margin:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}li{margin-right:1em;padding-right:1em;border-right:1px solid #000}@media (max-width:979px){li{margin-bottom:12px}}@media (max-width:979px){li:last-child{border:0}}.copyright{margin:0;font-size:14px}@media (max-width:979px){.copyright{text-align:center}}\n  </style>\n  <ul class="links">\n    <li class="terms"><a href="https://www.pearson.com/us/terms-of-use.html" target="_blank">Terms of Use</a></li>\n    <li class="privacy"><a href="https://www.pearson.com/us/privacy-statement.html" target="_blank">Privacy Policy</a></li>\n    <li class="accessibility hidden"><a href="https://www.pearson.com/us/accessibility.html" target="_blank">Accessibility</a></li>\n    <li class="patent hidden"><a href="https://www.pearson.com/us/patent-notice.html" target="_blank">Patent Notice</a></li>\n    <li class="support hidden"><a href="https://www.pearson.com/us/support.html" target="_blank">Support</a></li>\n  </ul>\n  <p class="copyright">' + COPYRIGHT_TEXT + '</p>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-footer');

  var Footer = function (_HTMLElement) {
    _inherits(Footer, _HTMLElement);

    _createClass(Footer, [{
      key: 'theme',
      get: function get() {
        return this.getAttribute('theme');
      },
      set: function set(theme) {
        this.setAttribute('theme', theme);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['accessibility', 'permissions', 'support', 'theme'];
      }
    }]);

    function Footer() {
      _classCallCheck(this, Footer);

      var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true);

      _this.copyrightElement = clone.querySelector('.copyright');

      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(Footer, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name !== 'theme' && newValue !== null) {
          this.shadowRoot.querySelector('.' + name).classList.remove('hidden');
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (!this.hasAttribute('role') || this.getAttribute('role') !== 'footer') {
          this.setAttribute('role', 'footer');
        }
      }
    }]);

    return Footer;
  }(HTMLElement);

  customElements.define('pearson-footer', Footer);
})(window, document);