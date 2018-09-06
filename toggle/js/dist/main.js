'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var peToggleCounter = 0;

  var Toggle = function (_HTMLElement) {
    _inherits(Toggle, _HTMLElement);

    _createClass(Toggle, null, [{
      key: 'observedAttributes',
      get: function get() {
        return ['checked', 'labelhidden'];
      }
    }]);

    function Toggle() {
      _classCallCheck(this, Toggle);

      var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this));

      _this.attachShadow({ mode: 'open' });

      var currentDoc = doc.querySelector('link[href$="index.html"]').import,
          template = currentDoc.querySelector('#template'),
          clone = doc.importNode(template.content, true);

      _this.button = clone.querySelector('button');
      _this.label = clone.querySelector('label');

      _this.shadowRoot.appendChild(clone);

      _this.handleClick = _this.handleClick.bind(_this);
      _this._updateLabel = _this._updateLabel.bind(_this);
      return _this;
    }

    _createClass(Toggle, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'checked') {
          var isChecked = newValue !== null;
          this.button.setAttribute('aria-checked', isChecked);
        }
        if (name === 'labelhidden' && newValue !== null) {
          this.label.classList.add('visuallyhidden');
        } else {
          this.label.classList.remove('visuallyhidden');
        }
      }
    }, {
      key: 'handleClick',
      value: function handleClick() {
        this.checked = !this.checked;
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        this.button.addEventListener('click', this.handleClick);
        this._updateLabel();
      }
    }, {
      key: '_updateLabel',
      value: function _updateLabel() {
        if (!this.id) {
          this.id = 'pe-toggle-' + peToggleCounter++;
        }
        this.button.id = this.id + '_button';
        this.label.id = this.id + '_label';

        this.button.setAttribute('aria-labelledby', this.label.id);
        this.label.setAttribute('for', this.button.id);
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