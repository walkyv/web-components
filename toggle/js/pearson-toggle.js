(function(w, doc) {
  'use strict';

  const template = doc.createElement('template');

  template.innerHTML = `
  <style>
  :host{font-size:24px;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;width:2em;height:1em;padding:0;border:0;border-radius:22px;margin:4px 0;color:#fff;background-color:#a9a9a9;cursor:pointer;-webkit-transition:background .3s;transition:background .3s}:host([on]){background:#047a9c}:host([disabled]){color:#c7c7c7;background-color:#e9e9e9;cursor:not-allowed}:host:before{content:"";background:#fff;display:block;position:absolute;left:3px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:.75em;height:.75em;-webkit-transition:left .3s;transition:left .3s;border-radius:100%}:host([on]):before{left:26px}:host([disabled]):before{background-color:#c7c7c7}:host:focus{outline:0}:host::-moz-focus-inner{border:0}:host:focus:after{content:"";position:absolute;left:50%;top:50%;width:-webkit-calc(100% + 4px);width:calc(100% + 4px);height:-webkit-calc(100% + 4px);height:calc(100% + 4px);border:2px solid #1977d4;border-radius:22px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1}svg{width:.75em;height:.75em;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);fill:currentColor;pointer-events:none}svg:first-child{left:5px}svg:last-child{right:5px}:host([on]) svg:last-child,:host svg:first-child{display:none}@media (prefers-reduced-motion:reduce){:host,:host:before{-webkit-transition:none!important;transition:none!important}}
	</style>
	<span class="toggle-on"></span>
	<span class="toggle-off"></span>
  `;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-toggle');

  const KEYCODE = {
    ENTER: 13,
    SPACE: 32
  };

  class Toggle extends HTMLElement {
    static get observedAttributes() {
      return ['on', 'disabled'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      this.shadowRoot.appendChild(clone);

      this._onToggleClick = this._onToggleClick.bind(this);
      this._onToggleKeyUp = this._onToggleKeyUp.bind(this);

      this._onLabelClick = this._onLabelClick.bind(this);

      this._onDOMLoaded = this._onDOMLoaded.bind(this);
    }

    connectedCallback() {
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

    _onToggleClick(e) {
      e.stopPropagation();
      this._toggleOn();
    }

    _onToggleKeyUp(e) {
      if (e.altKey) {
        return;
      }

      if (e.keyCode === KEYCODE.SPACE || e.keyCode === KEYCODE.ENTER) {
        e.preventDefault();
        this._toggleOn();
      }
    }

    _upgradeProperty(prop) {
      if (this.hasOwnProperty(prop)) {
        let value = this[prop];
        delete this[prop];
        this[prop] = value;
      }
    }

    _toggleOn() {
      if (this.disabled) return;

      this.on = !this.on;

      // The toggle should emit a change event
      // for the benefit of consumers
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: {
            on: this.on
          },
          bubbles: true
        })
      );
    }

    // Helper function for finding external label node
    _findLabelNode() {
      if (this.parentElement.tagName === 'LABEL') {
        return this.parentElement;
      }
      const scope = this.getRootNode();
      return scope.querySelector(`label[for="${this.id}"]`);
    }

    // When this label is clicked, we want to
    // click on this toggle and focus on it
    _onLabelClick(e) {
      e.preventDefault();

      if (this.disabled) return;

      this.click();
      this.focus();
    }

    _onDOMLoaded() {
      this.labelNode = this._findLabelNode();

      // If the external label does not have an ID, we must
      // ensure that it has one
      if (!this.labelNode.id) this.labelNode.id = this.id + '_label';

      // This toggle must be labelled by the external label node
      this.setAttribute('aria-labelledby', this.labelNode.id);

      // We listen for the external label to be clicked
      this.labelNode.addEventListener('click', this._onLabelClick);
    }

    get on() {
      return this.hasAttribute('on');
    }

    set on(value) {
      const ison = Boolean(value);
      if (ison) {
        this.setAttribute('on', '');
      } else {
        this.removeAttribute('on');
      }
    }

    get disabled() {
      return this.hasAttribute('disabled');
    }

    set disabled(value) {
      const isDisabled = Boolean(value);
      if (isDisabled) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }

    get name() {
      return this.getAttribute('name');
    }

    get value() {
      return this.getAttribute('value');
    }

    attributeChangedCallback(name, oldValue, newValue) {
      const isTruthy = newValue !== null;
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

    disconnectedCallback() {
      this.removeEventListener('click', this._onToggleClick);
      this.removeEventListener('keyup', this._onToggleKeyUp);

      doc.removeEventListener('DOMContentLoaded', this._onDOMLoaded);

      if (this.labelNode) {
        this.labelNode.removeEventListener('click', this._onLabelClick);
      }
    }
  }

  customElements.define('pearson-toggle', Toggle);
})(window, document);
