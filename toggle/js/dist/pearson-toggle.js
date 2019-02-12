var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  template.innerHTML = '\n  <style>\n  *,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{font-size:24px;position:relative;display:block;width:2em;height:1em;padding:0;border:0;border-radius:22px;margin:4px 0;color:#fff;background-color:#a9a9a9;cursor:pointer;-webkit-transition:background .3s;transition:background .3s;overflow:visible}:host([on]){background:#047a9c}:host([disabled]){color:#c7c7c7;background-color:#e9e9e9;cursor:not-allowed}:host:before{content:"";background:#fff;display:block;position:absolute;left:3px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:.75em;height:.75em;-webkit-transition:left .3s;transition:left .3s;border-radius:100%}:host([on]):before{left:26px}:host([disabled]):before{background-color:#c7c7c7}:host(:focus){outline:0}:host(:focus):after{content:"";position:absolute;left:50%;top:50%;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);border:2px solid #1977d4;border-radius:22px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1}svg{width:.75em;height:.75em;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);fill:currentColor;pointer-events:none}svg:first-child{left:5px}svg:last-child{right:5px}:host([on]) svg:last-child,:host svg:first-child{display:none}@media (prefers-reduced-motion:reduce){:host,:host:before{-webkit-transition:none!important;transition:none!important}}\n\t</style>\n\t<span class="toggle-on"></span>\n\t<span class="toggle-off"></span>\n  ';

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
        return ['on', 'disabled'];
      }
    }]);

    function Toggle() {
      _classCallCheck(this, Toggle);

      var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.shadowRoot.appendChild(clone);

      _this._onToggleClick = _this._onToggleClick.bind(_this);
      _this._onToggleKeyUp = _this._onToggleKeyUp.bind(_this);

      _this._onLabelClick = _this._onLabelClick.bind(_this);

      _this._onDOMLoaded = _this._onDOMLoaded.bind(_this);
      return _this;
    }

    _createClass(Toggle, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        // Add attributes required for a11y
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'switch');
        }
        if (!this.hasAttribute('tabindex') && !this.disabled) {
          this.setAttribute('tabindex', 0);
        }

        // Lazily upgrade properties to make sure
        // observed attributes are handled properly
        this._upgradeProperty('on');
        this._upgradeProperty('disabled');

        // Bind listeners to the toggle
        this.addEventListener('click', this._onToggleClick);
        this.addEventListener('keyup', this._onToggleKeyUp);

        // If the consumer did not set an `aria-label`,
        if (!this.hasAttribute('aria-label')) {
          // We need to find an external one
          doc.addEventListener('DOMContentLoaded', this._onDOMLoaded, true);
        }
      }
    }, {
      key: '_onToggleClick',
      value: function _onToggleClick(e) {
        e.stopPropagation();
        this._toggleOn();
      }
    }, {
      key: '_onToggleKeyUp',
      value: function _onToggleKeyUp(e) {
        if (e.altKey) {
          return;
        }

        if (e.keyCode === KEYCODE.SPACE || e.keyCode === KEYCODE.ENTER) {
          e.preventDefault();
          this._toggleOn();
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
      key: '_toggleOn',
      value: function _toggleOn() {
        if (this.disabled) return;

        this.on = !this.on;

        // The toggle should emit a change event
        // for the benefit of consumers
        this.dispatchEvent(new CustomEvent('change', {
          detail: {
            on: this.on
          },
          bubbles: true
        }));
      }

      // Helper function for finding external label node

    }, {
      key: '_findLabelNode',
      value: function _findLabelNode() {
        if (this.parentElement.tagName === 'LABEL') {
          return this.parentElement;
        }
        var scope = this.getRootNode();
        return scope.querySelector('label[for="' + this.id + '"]');
      }

      // When this label is clicked, we want to
      // click on this toggle and focus on it

    }, {
      key: '_onLabelClick',
      value: function _onLabelClick(e) {
        e.preventDefault();

        if (this.disabled) return;

        this.click();
        this.focus();
      }
    }, {
      key: '_onDOMLoaded',
      value: function _onDOMLoaded() {
        this.labelNode = this._findLabelNode();

        // If the external label does not have an ID, we must
        // ensure that it has one
        if (!this.labelNode.id) this.labelNode.id = this.id + '_label';

        // This toggle must be labelled by the external label node
        this.setAttribute('aria-labelledby', this.labelNode.id);

        // We listen for the external label to be clicked
        this.labelNode.addEventListener('click', this._onLabelClick);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var isTruthy = newValue !== null;
        if (name === 'on') {
          this.setAttribute('aria-on', isTruthy);
        }
        if (name === 'disabled') {
          this.setAttribute('aria-disabled', isTruthy);
          if (isTruthy) {
            this.removeAttribute('tabindex');
            this.blur();
          } else {
            this.setAttribute('tabindex', '0');
          }
        }
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.removeEventListener('click', this._onToggleClick);
        this.removeEventListener('keyup', this._onToggleKeyUp);

        doc.removeEventListener('DOMContentLoaded', this._onDOMLoaded);

        if (this.labelNode) {
          this.labelNode.removeEventListener('click', this._onLabelClick);
        }
      }
    }, {
      key: 'on',
      get: function get() {
        return this.hasAttribute('on');
      },
      set: function set(value) {
        var ison = Boolean(value);
        if (ison) {
          this.setAttribute('on', '');
        } else {
          this.removeAttribute('on');
        }
      }
    }, {
      key: 'disabled',
      get: function get() {
        return this.hasAttribute('disabled');
      },
      set: function set(value) {
        var isDisabled = Boolean(value);
        if (isDisabled) {
          this.setAttribute('disabled', '');
        } else {
          this.removeAttribute('disabled');
        }
      }
    }, {
      key: 'name',
      get: function get() {
        return this.getAttribute('name');
      }
    }, {
      key: 'value',
      get: function get() {
        return this.getAttribute('value');
      }
    }]);

    return Toggle;
  }(HTMLElement);

  customElements.define('pearson-toggle', Toggle);
})(window, document);