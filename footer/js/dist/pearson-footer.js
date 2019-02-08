var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template');
  template.innerHTML = ' \n <style>\n .hidden{display:none!important}:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;width:inherit;padding:0 1em;font-family:Open Sans,Arial,Helvetica,sans-serif;font-size:14px;background:#fff}@media (max-width:979px){:host{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}:host(.dark){background:#005a70}:host(.dark) li{border-right:1px solid #fff}:host(.dark) a{color:#fff;border-color:#fff}:host(.dark) .copyright{color:#fff}.links{margin:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.links li{margin-right:1em;padding-right:1em;border-right:1px solid #000}@media (max-width:979px){.links li{margin-bottom:12px}}@media (max-width:979px){.links li:last-child{border:0}}.copyright{margin:0;font-size:14px}@media (max-width:979px){.copyright{text-align:center}}\n</style>\n<ul class="links">\n  <li class="terms"><a href="https://www.pearson.com/us/terms-of-use.html" target="_blank">Terms of Use</a></li>\n  <li class="privacy"><a href="https://www.pearson.com/us/privacy-statement.html" target="_blank">Privacy Policy</a></li>\n  <li class="accessibility hidden"><a href="https://www.pearson.com/us/accessibility.html" target="_blank">Accessibility</a></li>\n  <li class="patent hidden"><a href="https://www.pearson.com/us/patent-notice.html" target="_blank">Patent Notice</a></li>\n  <li class="support hidden"><a href="https://www.pearson.com/us/support.html" target="_blank">Support</a></li>\n</ul>\n<p class="copyright pe-label"></p>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-footer');

  var Footer = function (_HTMLElement) {
    _inherits(Footer, _HTMLElement);

    _createClass(Footer, [{
      key: 'theme',
      get: function get() {
        return this.hasAttribute('theme');
      }
    }, {
      key: 'accessibility',
      get: function get() {
        return this.hasAttribute('accessibility');
      }
    }, {
      key: 'permissions',
      get: function get() {
        return this.hasAttribute('patent');
      }
    }, {
      key: 'support',
      get: function get() {
        return this.hasAttribute('support');
      }
    }, {
      key: 'darkTheme',
      set: function set(bool) {
        if (bool === true) {
          this.classList.add('dark');
        }
      }
    }, {
      key: 'showAccessibilityLink',
      set: function set(bool) {
        if (bool === true) {
          this.shadowRoot.querySelector('.accessibility').classList.remove('hidden');
        }
      }
    }, {
      key: 'showPermissionsLink',
      set: function set(bool) {
        if (bool === true) {
          this.shadowRoot.querySelector('.patent').classList.remove('hidden');
        }
      }
    }, {
      key: 'showSupportLink',
      set: function set(bool) {
        if (bool === true) {
          this.shadowRoot.querySelector('.support').classList.remove('hidden');
        }
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
      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(Footer, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var copyright = this.shadowRoot.querySelector('.copyright');
        copyright.innerHTML = 'Copyright © 1996-' + new Date().getFullYear() + ' Pearson Education Inc. All Rights Reserved.';
        this.showAccessibilityLink = this.accessibility;
        this.showPermissionsLink = this.permissions;
        this.showSupportLink = this.support;
        this.darkTheme = this.theme;
      }
    }]);

    return Footer;
  }(HTMLElement);

  customElements.define('pearson-footer', Footer);
})(window, document);