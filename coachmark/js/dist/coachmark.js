var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      closeIcon = '\n                  <svg focusable="false" class="icon-18" aria-hidden="false" title="close coachmark" role="img" >\n  \t<path d="M9,7.67193143 L12.3968794,4.27505201 C12.7636154,3.908316 13.358212,3.908316 13.724948,4.27505201 C14.091684,4.64178802 14.091684,5.23638457 13.724948,5.60312058 L10.3280686,9 L13.724948,12.3968794 C14.091684,12.7636154 14.091684,13.358212 13.724948,13.724948 C13.358212,14.091684 12.7636154,14.091684 12.3968794,13.724948 L9,10.3280686 L5.60312058,13.724948 C5.23638457,14.091684 4.64178802,14.091684 4.27505201,13.724948 C3.908316,13.358212 3.908316,12.7636154 4.27505201,12.3968794 L7.67193143,9 L4.27505201,5.60312058 C3.908316,5.23638457 3.908316,4.64178802 4.27505201,4.27505201 C4.64178802,3.908316 5.23638457,3.908316 5.60312058,4.27505201 L9,7.67193143 Z" />\n       </svg>\n    ';

  //Styles must be copied from the css file
  // and pasted between the style tags below

  // Other markup should be written after the closing tag.

  template.innerHTML = ' \n    <style>\n</style>\n\n    <div role="dialog" aria-haspopup="dialog" aria-labelledby="coachmark-title" aria-describedby="coachmark-body" class="coachmark-container popper animated animateIn">\n      <div class="coachmark" aria-haspopup="dialog">\n        <div class="content">\n          <div class="title-container">\n            <h3 id="coachmark-title" class="pe-label pe-label--bold"></h3>\n            \t<button id="close" class="gr-btn icon-btn-18 dismiss" aria-label="Close coachmark">\n        ' + closeIcon + '\n\t</button>\n\t\n          </div>\n          <p id="coachmark-body" class="pe-label"></p>\n           <button id="gotIt" class="coach-link dismiss hidden" href="#">Got it</button>\n        </div> \n      </div>\n      <div class="popper__arrow hidden" x-arrow></div>\n    </div>\n    </div>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-example');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  var Coachmark = function (_HTMLElement) {
    _inherits(Coachmark, _HTMLElement);

    _createClass(Coachmark, [{
      key: 'nextCoach',
      value: function nextCoach() {
        if (this.dismiss) {
          this.destroyCoach();
        } else {
          this.dispatchEvent(new Event('proceed', {
            bubbles: false
          }));
        }
      }
    }, {
      key: 'destroyCoach',
      value: function destroyCoach() {
        this.remove();
        this.closeBtn.removeEventListener('click', this.destroyCoach);
        this.gotItBtn.removeEventListener('click', this.nextCoach);
        this.removeAttribute('dismiss');
        this.removeAttribute('arrow');
        this.removeAttribute('gotit');
        this.dispatchEvent(new Event('dismiss', {
          bubbles: false
        }));
      }
    }, {
      key: 'createPopper',
      value: function createPopper() {
        var reference = document.querySelector(this.referenceId),
            coachMark = this.shadowRoot.querySelector('.coachmark-container'),
            popperInstance = new Popper(reference, coachMark, {
          placement: this.position,
          modifiers: {
            arrow: { enabled: true }
          }
        });
        this.closeBtn.focus();
        this.titleState = this.title;
        this.contentState = this.content;
        return popperInstance;
      }
    }, {
      key: 'dismiss',
      get: function get() {
        return this.hasAttribute('dismiss');
      }
    }, {
      key: 'position',
      get: function get() {
        return this.getAttribute('position');
      }
    }, {
      key: 'title',
      get: function get() {
        return this.getAttribute('title');
      }
    }, {
      key: 'content',
      get: function get() {
        return this.getAttribute('content');
      }
    }, {
      key: 'triggerId',
      get: function get() {
        return this.getAttribute('trigger');
      }
    }, {
      key: 'referenceId',
      get: function get() {
        return this.getAttribute('reference');
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }, {
      key: 'arrow',
      get: function get() {
        return this.hasAttribute('arrow');
      }
    }, {
      key: 'gotIt',
      get: function get() {
        return this.getAttribute('gotit');
      }
    }, {
      key: 'ariaPopup',
      set: function set(id) {
        var button = document.querySelector(id);
        button.setAttribute('aria-haspopup', 'dialog');
      }
    }, {
      key: 'gotItState',
      set: function set(bool) {
        if (bool) {
          this.shadowRoot.querySelector('.coach-link').classList.remove('hidden');
          if (bool.length > 1) {
            this.shadowRoot.querySelector('.coach-link').innerHTML = bool;
          } else {
            this.shadowRoot.querySelector('.coach-link').innerHTML = "Got It";
          }
        } else {
          this.shadowRoot.querySelector('.coach-link').classList.add('hidden');
        }
      }
    }, {
      key: 'arrowState',
      set: function set(bool) {
        if (bool) {
          this.shadowRoot.querySelector('.popper__arrow').classList.remove('hidden');
        } else {
          this.shadowRoot.querySelector('.popper__arrow').classList.add('hidden');
        }
      }
    }, {
      key: 'typeState',
      set: function set(str) {
        if (str === 'informational') {
          this.shadowRoot.querySelector('.coachmark').classList.add('informational');
          this.shadowRoot.querySelector('.popper__arrow').classList.add('informational');
        } else {
          this.shadowRoot.querySelector('.coachmark').classList.remove('informational');
          this.shadowRoot.querySelector('.popper__arrow').classList.remove('informational');
        }

        if (str === 'generic') {
          this.shadowRoot.querySelector('.coachmark').classList.add('generic');
          this.shadowRoot.querySelector('.popper__arrow').classList.add('generic');
        } else {
          this.shadowRoot.querySelector('.coachmark').classList.remove('generic');
          this.shadowRoot.querySelector('.popper__arrow').classList.remove('generic');
        }
      }
    }, {
      key: 'titleState',
      set: function set(str) {
        this.shadowRoot.querySelector('#coachmark-title').innerHTML = str;
      }
    }, {
      key: 'contentState',
      set: function set(str) {
        this.shadowRoot.querySelector('#coachmark-body').innerHTML = str;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['position', 'trigger', 'reference', 'title', 'content', 'type', 'arrow', 'gotit', 'gotittext', 'dismiss'];
      }
    }]);

    function Coachmark() {
      _classCallCheck(this, Coachmark);

      var _this = _possibleConstructorReturn(this, (Coachmark.__proto__ || Object.getPrototypeOf(Coachmark)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true);

      _this.closeBtn = clone.querySelector('.dismiss');
      _this.gotItBtn = clone.querySelector('.coach-link');

      _this.shadowRoot.appendChild(clone);

      _this.createPopper = _this.createPopper.bind(_this);
      _this.nextCoach = _this.nextCoach.bind(_this);
      _this.destroyCoach = _this.destroyCoach.bind(_this);
      return _this;
    }

    _createClass(Coachmark, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        this.ariaPopup = this.triggerId;
        this.typeState = this.type;
        this.arrowState = this.arrow;
        this.gotItState = this.gotIt;
        this.createPopper();
        this.closeBtn.setAttribute('aria-label', 'close ' + this.title + ' dialog');
        this.gotItBtn.setAttribute('aria-label', this.gotIt + ', close ' + this.title + ' dialog');
        this.closeBtn.addEventListener('click', this.destroyCoach);
        this.gotItBtn.addEventListener('click', this.nextCoach);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        var trigger = document.querySelector(this.triggerId);
        trigger.focus();
      }
    }]);

    return Coachmark;
  }(HTMLElement);

  customElements.define('pearson-coachmark', Coachmark);
})(window, document);