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

  template.innerHTML = ' \n    <style>\n.gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:em(16);cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn:focus{outline:0}.gr-btn:focus:after{border:2px solid #1977d4;border-radius:22px;content:"";min-width:-webkit-calc(100% + 10px);min-width:calc(100% + 10px);padding:20px 24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:-5px;left:-5px;overflow:visible}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:em(14)}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:em(16)}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.icon-18{width:18px;height:18px}.hidden{display:none!important}:host .coachmark-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;width:280px}:host .coachmark{position:relative;background-color:#caefee;border-radius:2px;width:280px;-webkit-box-shadow:0 3px 7px 0 rgba(0,0,0,.25);box-shadow:0 3px 7px 0 rgba(0,0,0,.25);font-family:Open Sans,Calibri,Tahoma,sans-serif}:host .coachmark.informational .content{background-color:#faebc3}:host .coachmark.generic .content{background-color:#fff}:host .coachmark.generic .coach-link{color:#047a9c}:host .coachmark.bottom-center:after{border-bottom:8px solid #caefee;border-left:8px solid transparent;border-right:8px solid transparent;bottom:-8px;content:"";-webkit-filter:drop-shadow(0 2px 5px #000);filter:drop-shadow(0 2px 5px #000);height:0;left:-webkit-calc(50% - 8px);left:calc(50% - 8px);position:absolute;-webkit-transform:rotate(180deg);transform:rotate(180deg);width:0;z-index:1}:host .coachmark.top-right:after{border-bottom:8px solid #caefee;border-left:8px solid transparent;border-right:8px solid transparent;content:"";height:0;position:absolute;right:32px;top:-8px;width:0;z-index:-1}:host .coachmark.bottom-left:after{border-bottom:8px solid #caefee;border-left:8px solid transparent;border-right:8px solid transparent;bottom:-8px;content:"";-webkit-filter:drop-shadow(0 2px 5px #000);filter:drop-shadow(0 2px 5px #000);height:0;left:32px;position:absolute;-webkit-transform:rotate(180deg);transform:rotate(180deg);width:0;z-index:1}:host .coachmark .title-container .pe-label{font-size:14px;margin:0;font-weight:600}:host .coachmark .content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#caefee;border-radius:2px;color:#252525;padding:20px 24px;position:relative;z-index:2;font-size:14px}:host .coachmark .content p{margin-top:0;line-height:1.5}:host .coachmark .content .title-container{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:.25em}:host .coachmark .coach-link,:host .coachmark .content .title-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}:host .coachmark .coach-link{color:#252525;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-top:1.75em;font-size:14px}:host .coachmark .coach-link:hover{text-decoration:none}:host .coachmark .coach-link:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}:host .coachmark button{background:none;border:none;text-decoration:underline;cursor:pointer}:host .coachmark button.dismiss:not(.coach-link){right:-18px;position:relative;top:-14px;margin:0;min-width:auto;padding:8px 12px;border:0}:host .gr-btn:focus:after{min-width:auto!important}:host .coachmark button.dismiss:not(.coach-link) svg{width:18px;height:18px}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}.link-anchor{position:relative;width:0;font-size:.8em;opacity:0;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.anchor-wrapper{border:none}.anchor-wrapper:hover .link-anchor{opacity:1}section h1[id]:focus,section h2[id]:focus,section h3[id]:focus,section h4[id]:focus,section h5[id]:focus{outline:0}p.thin{font-weight:100;margin:0;line-height:1.2em}p.bold{font-weight:900;margin:-5px 0 0}.rel{width:30%;margin:0 auto;position:relative;text-align:center;padding:20px;border:dotted #fff}.popper,.tooltip{position:absolute;color:#000}.style5 .tooltip{background:#1e252b;color:#fff;max-width:200px;width:auto;font-size:.8rem;padding:.5em 1em}.popper .popper__arrow,.tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;border-color:#caefee}.popper .popper__arrow.informational{border-color:#faebc3}.popper .popper__arrow.generic{border-color:#fff}.style5 .tooltip .tooltip-arrow{border-color:#1e252b}.popper[x-placement^=top],.tooltip[x-placement^=top]{margin-bottom:5px}.popper[x-placement^=top] .popper__arrow,.tooltip[x-placement^=top] .tooltip-arrow{border-width:13px 13px 0;border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent;bottom:-13px;left:-webkit-calc(50% - 5px);left:calc(50% - 5px);margin-top:0;margin-bottom:0;-webkit-filter:drop-shadow(0 -1px 5px #222);filter:drop-shadow(0 -1px 5px #222)}.popper[x-placement^=bottom],.tooltip[x-placement^=bottom]{margin-top:5px}.popper[x-placement^=bottom] .popper__arrow,.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 13px 13px;border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;top:-13px;-webkit-filter:drop-shadow(-1px -1px 1px #ddd);filter:drop-shadow(-1px -1px 1px #ddd);left:-webkit-calc(50% - 5px);left:calc(50% - 5px);margin-top:0;margin-bottom:0}.popper[x-placement^=right],.tooltip[x-placement^=right]{margin-left:5px}.popper[x-placement^=right] .popper__arrow,.tooltip[x-placement^=right] .tooltip-arrow{border-width:13px 13px 13px 0;border-left-color:transparent;border-top-color:transparent;border-bottom-color:transparent;left:-13px;top:-webkit-calc(50% - 5px);top:calc(50% - 5px);margin-left:0;margin-right:0;-webkit-filter:drop-shadow(-1px -1px 1px #ddd);filter:drop-shadow(-1px -1px 1px #ddd)}.popper[x-placement^=left],.tooltip[x-placement^=left]{margin-right:5px}.popper[x-placement^=left] .popper__arrow,.tooltip[x-placement^=left] .tooltip-arrow{border-width:13px 0 13px 13px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;right:-13px;top:-webkit-calc(50% - 5px);top:calc(50% - 5px);margin-left:0;margin-right:0;-webkit-filter:drop-shadow(1px 2px 0 #ddd);filter:drop-shadow(1px 2px 0 #ddd)}.no-arrow .popper__arrow{display:none!important}\n</style>\n    <div role="dialog" aria-haspopup="dialog" aria-labelledby="coachmark-title" aria-describedby="coachmark-body" class="coachmark-container popper animated animateIn">\n      <div class="coachmark" aria-haspopup="dialog">\n        <div class="content">\n          <div class="title-container">\n            <h3 id="coachmark-title" class="pe-label pe-label--bold"></h3>\n            \t<button id="close" class="gr-btn icon-btn-18 dismiss" aria-label="Close coachmark">\n        ' + closeIcon + '\n\t</button>\n\t\n          </div>\n          <p id="coachmark-body" class="pe-label"></p>\n           <button id="gotIt" class="coach-link dismiss hidden" href="#">Got it</button>\n        </div> \n      </div>\n      <div class="popper__arrow hidden" x-arrow></div>\n    </div>\n    </div>\n';

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