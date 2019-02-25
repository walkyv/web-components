var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var SVG_CHECK_SM_18 = '\n    <svg\n      class="pe-icon--check-sm-18"\n      aria-hidden="true"\n      focusable="false"\n      aria-label="on"\n    >\n    <path\n      d="M7.35823097,13.99969 C7.08123097,13.99969 6.81423097,13.88469 6.62523097,13.67969 L4.26623097,11.13469 C3.89123097,10.72869 3.91523097,10.09669 4.32023097,9.72169 C4.72423097,9.34469 5.35623097,9.36869 5.73323097,9.77469 L7.25323097,11.41469 L12.182231,4.42369 C12.501231,3.97269 13.125231,3.86469 13.576231,4.18269 C14.027231,4.50069 14.135231,5.12469 13.817231,5.57569 L8.17523097,13.57569 C8.00223097,13.82269 7.72523097,13.97769 7.42423097,13.99769 C7.40223097,13.99869 7.38023097,13.99969 7.35823097,13.99969"\n    ></path>\n  </svg>\n';

  var SVG_REMOVE_SM_18 = '\n    <svg\n      class="pe-icon--remove-sm-18"\n      aria-hidden="true"\n      focusable="false"\n      aria-label="off"\n    >\n    <path\n      d="M10.4066,9 L13.7086,5.698 C14.0976,5.31 14.0976,4.68 13.7086,4.291 C13.3196,3.903 12.6906,3.903 12.3016,4.291 L8.9996,7.593 L5.6976,4.291 C5.3096,3.903 4.6796,3.903 4.2916,4.291 C3.9026,4.68 3.9026,5.31 4.2916,5.698 L7.5936,9 L4.2916,12.302 C3.9026,12.69 3.9026,13.32 4.2916,13.709 C4.4856,13.903 4.7406,14 4.9946,14 C5.2496,14 5.5036,13.903 5.6976,13.709 L8.9996,10.407 L12.3016,13.709 C12.4966,13.903 12.7506,14 13.0056,14 C13.2596,14 13.5146,13.903 13.7086,13.709 C14.0976,13.32 14.0976,12.69 13.7086,12.302 L10.4066,9 Z"\n    ></path>\n  </svg>\n';

  var template = doc.createElement('template');

  template.innerHTML = '\n  <style>\n  *,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{font-size:24px;position:relative;display:block;width:2em;height:1em;padding:0;border:0;border-radius:22px;margin:4px 0;color:#fff;background-color:#a9a9a9;cursor:pointer;-webkit-transition:background .3s;transition:background .3s;overflow:visible;min-width:50px}:host([on]){background:#047a9c}:host([disabled]){color:#c7c7c7;background-color:#e9e9e9;cursor:not-allowed}:host:before{content:"";background:#fff;display:block;position:absolute;left:3px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:.75em;height:.75em;-webkit-transition:left .3s;transition:left .3s;border-radius:100%}:host([on]):before{left:27px}:host([disabled]):before{background-color:#c7c7c7}:host(:focus){outline:0}:host(:focus):after{content:"";position:absolute;left:50%;top:50%;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);border:2px solid #1977d4;border-radius:22px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1}svg{width:.75em;height:.75em;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);fill:currentColor;pointer-events:none}svg[class*=check]{left:5px}svg[class*=remove]{right:5px}:host(:not([on])) svg[class*=check],:host([on]) svg[class*=remove]{display:none}@media (prefers-reduced-motion:reduce){:host,:host:before{-webkit-transition:none!important;transition:none!important}}\t</style>\n  ' + SVG_CHECK_SM_18 + '\n  ' + SVG_REMOVE_SM_18 + '\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-toggle');

  var Toggle = function (_HTMLElement) {
    _inherits(Toggle, _HTMLElement);

    _createClass(Toggle, [{
      key: 'on',
      get: function get() {
        return this.hasAttribute('on');
      },
      set: function set(value) {
        var isOn = Boolean(value);
        if (isOn) {
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
    }], [{
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

      _this.onToggleClick = _this.onToggleClick.bind(_this);
      _this.onToggleKeyDown = _this.onToggleKeyDown.bind(_this);

      _this.onLabelClick = _this.onLabelClick.bind(_this);

      _this.onDOMLoaded = _this.onDOMLoaded.bind(_this);
      return _this;
    }

    _createClass(Toggle, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var isTruthy = newValue !== null;
        if (name === 'on') {
          this.setAttribute('aria-checked', isTruthy);
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
      key: 'connectedCallback',
      value: function connectedCallback() {
        // Add attributes required for a11y
        if (!this.hasAttribute('tabindex') && !this.disabled) {
          this.setAttribute('tabindex', 0);
        }

        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'switch');
        }

        if (!this.hasAttribute('aria-checked')) {
          this.setAttribute('aria-checked', 'false');
        }

        // Lazily upgrade properties to make sure
        // observed attributes are handled properly
        this.upgradeProperty('on');
        this.upgradeProperty('disabled');

        // Bind listeners to the toggle
        this.addEventListener('click', this.onToggleClick);
        this.addEventListener('keydown', this.onToggleKeyDown);

        // If the consumer did not set an `aria-label`,
        if (!this.hasAttribute('aria-label')) {
          // We need to find an external one
          doc.addEventListener('DOMContentLoaded', this.onDOMLoaded, true);
        }
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        doc.removeEventListener('DOMContentLoaded', this.onDOMLoaded);

        if (this.labelNode) {
          this.labelNode.removeEventListener('click', this.onLabelClick);
        }
      }
    }, {
      key: 'onToggleClick',
      value: function onToggleClick(e) {
        e.stopPropagation();
        this.toggleOn();
      }
    }, {
      key: 'onToggleKeyDown',
      value: function onToggleKeyDown(e) {
        if (e.altKey) {
          return;
        }

        switch (e.key) {
          case 'Enter':
          case ' ':
            e.preventDefault();
            this.click();
            return;
        }
      }

      // When this label is clicked, we want to
      // click on this toggle and focus on it

    }, {
      key: 'onLabelClick',
      value: function onLabelClick(e) {
        e.preventDefault();

        if (this.disabled) return;

        this.click();
        this.focus();
      }
    }, {
      key: 'onDOMLoaded',
      value: function onDOMLoaded() {
        this.labelNode = this.findLabelNode();

        // If the external label does not have an ID, we must
        // ensure that it has one
        if (!this.labelNode.id) this.labelNode.id = this.id + 'label';

        // This toggle must be labelled by the external label node
        this.setAttribute('aria-labelledby', this.labelNode.id);

        // We listen for the external label to be clicked
        this.labelNode.addEventListener('click', this.onLabelClick);
      }
    }, {
      key: 'upgradeProperty',
      value: function upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
          var value = this[prop];
          delete this[prop];
          this[prop] = value;
        }
      }
    }, {
      key: 'toggleOn',
      value: function toggleOn() {
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
      key: 'findLabelNode',
      value: function findLabelNode() {
        if (this.parentElement.tagName === 'LABEL') {
          return this.parentElement;
        }
        var scope = this.getRootNode();
        return scope.querySelector('label[for="' + this.id + '"]');
      }
    }]);

    return Toggle;
  }(HTMLElement);

  customElements.define('pearson-toggle', Toggle);
})(window, document);