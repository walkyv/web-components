'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var currentDoc = doc.querySelector('link[href$="index.html"]').import,
      template = currentDoc.querySelector('#template');

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-toggle');

  var KEYCODE = {
    ENTER: 13,
    SPACE: 32
  };

  var Toggle = function (_HTMLElement) {
    _inherits(Toggle, _HTMLElement);

    _createClass(Toggle, null, [{
      key: 'observedAttributes',
      get: function get() {
        return ['checked'];
      }
    }]);

    function Toggle() {
      _classCallCheck(this, Toggle);

      var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = doc.importNode(template.content.cloneNode(true), true);

      _this.shadowRoot.appendChild(clone);

      _this._handleClick = _this._handleClick.bind(_this);
      _this._handleKeyUp = _this._handleKeyUp.bind(_this);
      return _this;
    }

    _createClass(Toggle, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'switch');
        }
        if (!this.hasAttribute('tabindex')) {
          this.setAttribute('tabindex', 0);
        }

        this._upgradeProperty('checked');

        this.addEventListener('click', this._handleClick);
        this.addEventListener('keyup', this._handleKeyUp);
      }
    }, {
      key: '_handleClick',
      value: function _handleClick() {
        this._toggleChecked();
      }
    }, {
      key: '_handleKeyUp',
      value: function _handleKeyUp(e) {
        if (e.altKey) {
          return;
        }

        if (e.keyCode === KEYCODE.SPACE || e.keyCode === KEYCODE.ENTER) {
          e.preventDefault();
          this._toggleChecked();
        }
      }
    }, {
      key: '_upgradeProperty',
      value: function _upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
          var value = this[prop];
          delete this[prop];
          this[prop] = value;
        }
      }
    }, {
      key: '_toggleChecked',
      value: function _toggleChecked() {
        this.checked = !this.checked;

        this.dispatchEvent(new CustomEvent('change', {
          detail: {
            checked: this.checked
          },
          bubbles: true
        }));
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'checked') {
          var isChecked = newValue !== null;
          this.setAttribute('aria-checked', isChecked);
        }
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.removeEventListener('click');
        this.removeEventListener('keyup');
      }
    }, {
      key: 'checked',
      get: function get() {
        return this.hasAttribute('checked');
      },
      set: function set(value) {
        if (value) {
          this.setAttribute('checked', '');
        } else {
          this.removeAttribute('checked');
        }
      }
    }]);

    return Toggle;
  }(HTMLElement);

  customElements.define('pearson-toggle', Toggle);
})(window, document);