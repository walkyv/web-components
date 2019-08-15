var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      dropdownTemplate = doc.createElement('template'),
      slotTemplate = doc.createElement('template'),
      menuTemplate = doc.createElement('template'),
      textTemplate = doc.createElement('template'),
      FOCUSABLE_ELEMENTS = '\n    a[href]:not([tabindex^="-"]):not([inert]),\n    area[href]:not([tabindex^="-"]):not([inert]),\n    input:not([disabled]):not([inert]),\n    select:not([disabled]):not([inert]),\n    textarea:not([disabled]):not([inert]),\n    button:not([disabled]):not([inert]),\n    iframe:not([tabindex^="-"]):not([inert]),\n    audio:not([tabindex^="-"]):not([inert]),\n    video:not([tabindex^="-"]):not([inert]),\n    [contenteditable]:not([tabindex^="-"]):not([inert]),\n    [tabindex]:not([tabindex^="-"]):not([inert])';

  //Styles must be copied from the css file
  // and pasted between the style tags below

  // Other markup should be written after the closing tag.
  slotTemplate.innerHTML = '\n    <slot name="list"></slot>\n  ';

  template.innerHTML = ' \n    <style>\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{font-size:14px}*,html{-webkit-box-sizing:border-box;box-sizing:border-box}body{font-family:Open Sans,Arial,Helvetica,sans-serif}body,p{font-size:14px;line-height:1.5;font-weight:400}strong{font-weight:600}a{font-size:14px;color:#047a9c}a:hover{color:#03536a;text-decoration:none}a:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}button{cursor:pointer}li,ul{font-size:14px}svg{fill:#252525}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.fadeIn,.slideInDown{opacity:1!important;visibility:visible!important}.fadeOut,.slideOutDown{opacity:0;visibility:hidden}.slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}.slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}.fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}.fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){.animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}.no-border{border:0}.icon-18{width:18px;height:18px}.icon-24{width:24px;height:24px}.hidden{display:none!important}.gr-h1{font-size:24px;line-height:28px}.gr-h1,.gr-h2{font-weight:400;margin-top:0}.gr-h2{font-size:20px;line-height:26px}.gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}.gr-label{line-height:16px;display:block;margin-bottom:4px}.gr-label,.gr-meta{font-size:12px;color:#6a7070}.gr-meta{line-height:12px}.gr-semi-bold{font-weight:600}.gr-font-large{font-size:16px;line-height:24px}.gr-font-normal{font-size:14px;line-height:20px}.gr-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:16px;cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:14px}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:16px}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.gr-dropdown-container .gr-btn{margin:0;font-size:14px;font-weight:700}.gr-dropdown-container .gr-btn svg{margin-left:1em}.gr-dropdown-container .dropdown-menu{position:absolute;z-index:10;margin-top:-9px;-ms-overflow-style:none}.gr-dropdown-container .mobile-group{background:#f5f5f5;border-bottom:1px solid #e9e9e9;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:100%;padding:24px;position:relative;top:-27px;z-index:10;overflow:hidden}.gr-dropdown-container .mobile-group span{width:100%;text-align:center}.gr-dropdown-container .mobile-group button{margin:0 0 0 12px}.gr-dropdown-container .menu{background-color:#fff;position:absolute}.gr-dropdown-container .menu button{background:none;border:0;font-size:14px}.gr-dropdown-container .menu button>*{pointer-events:none}.gr-dropdown-container .menu button:focus{outline:none}.gr-dropdown-container .menu button:focus:after{border:2px solid #1977d4;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + -10px);width:calc(100% + -10px);height:100%;top:0;left:5px;z-index:1}.gr-dropdown-container .menu{list-style-type:none;padding:1em 0;border:1px solid #d9d9d9;border-radius:2px;width:220px;margin-top:0;top:16px;position:relative}.gr-dropdown-container [aria-checked=false] svg{display:none}.gr-dropdown-container [aria-checked=true] svg{display:inline-block}.gr-dropdown-container .seperator{padding-bottom:6px;margin-bottom:6px;border-bottom:1px solid #d9d9d9}.gr-dropdown-container li button{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-decoration:none;width:100%;color:#252525;text-align:left;padding:0}.gr-dropdown-container li button:hover{background-color:#e9e9e9}.gr-dropdown-container li button svg{position:absolute;left:12px}.gr-dropdown-container .option-text{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:5px 24px 5px 34px;width:100%}.gr-dropdown-container .divider{border-bottom:1px solid #c7c7c7;padding-bottom:8px;margin:0 25px}.gr-dropdown-container .divider+li{margin-top:8px}.gr-dropdown-container .truncate{max-width:100%;width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:480px){.gr-dropdown-container .dropdown-menu{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.gr-dropdown-container .option-text{font-size:16px;margin:12px 42px}.gr-dropdown-container .menu{max-height:300px;overflow:scroll;width:100%;top:44px;border:0;height:100vh}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.gr-dropdown-container .menu li button[aria-checked=true] svg{top:4px}}@media (min-width:480px){.gr-dropdown-container .dropdown-menu .mobile-group{display:none}}.button-bar ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;padding:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.button-bar .dropdown-menu button svg{top:5px}}.button-bar .more-buttons,.button-bar .third-button{display:none}@media (min-width:887px){.button-bar .more-buttons,.button-bar .third-button{display:block}}.button-bar .second-button{display:none}@media (min-width:640px){.button-bar .second-button{display:block}}.button-bar .first-button{display:none}@media (min-width:591px){.button-bar .first-button{display:block}}.button-bar #moreDropdown{display:block}@media (min-width:887px){.button-bar #moreDropdown{display:none}}.button-bar #moreDropdown ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.button-bar #moreDropdown li{width:100%}.button-bar #moreDropdown li svg{margin:0!important}.button-bar #moreDropdown .first-button{display:block}@media (min-width:591px){.button-bar #moreDropdown .first-button{display:none}}.button-bar #moreDropdown .second-button{display:block}@media (min-width:640px){.button-bar #moreDropdown .second-button{display:none}}.button-bar #moreDropdown .more-buttons,.button-bar #moreDropdown .third-button{display:block}@media (max-width:480px){.button-bar .gr-dropdown-container .menu{border:1px solid #c7c7c7;height:auto;width:220px;top:16px}}\n\n    </style>\n    <div class="button-bar">\n       <ul id="buttonBar">\n           \n       </ul>\n    </div>\n';

  dropdownTemplate.innerHTML = '\n  <li id="moreDropdown">\n    <div class="gr-dropdown-container">\n      <button id="openMenu" class="gr-btn icon-btn-18" aria-haspopup="true" aria-expanded="false" >\n        <svg focusable="false" class="icon-18" aria-hidden="true" style="margin:0;">\n          <path d="M7.5,3.5 C7.5,2.67157288 8.17157288,2 9,2 C9.82842712,2 10.5,2.67157288 10.5,3.5 C10.5,4.32842712 9.82842712,5 9,5 C8.17157288,5 7.5,4.32842712 7.5,3.5 Z" ></path>\n          <path d="M7.5,9 C7.5,8.17157288 8.17157288,7.5 9,7.5 C9.82842712,7.5 10.5,8.17157288 10.5,9 C10.5,9.82842712 9.82842712,10.5 9,10.5 C8.17157288,10.5 7.5,9.82842712 7.5,9 Z" ></path>\n          <path d="M7.5,14.5 C7.5,13.6715729 8.17157288,13 9,13 C9.82842712,13 10.5,13.6715729 10.5,14.5 C10.5,15.3284271 9.82842712,16 9,16 C8.17157288,16 7.5,15.3284271 7.5,14.5 Z" ></path>\n        </svg>\n      </button>\n    </div>\n  </li>\n  ';

  menuTemplate.innerHTML = '\n  <div class="dropdown-menu animateIn">\n    <ul role="menu" class="menu">\n\n    </ul>\n  </div>\n  ';

  textTemplate.innerHTML = '\n    <span class="option-text"></span>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-buttonbar');

  function getFocusableChildren(event) {
    if (event.target !== undefined) {
      var filter = Array.prototype.filter,
          focusableChildren = event.target.querySelectorAll(FOCUSABLE_ELEMENTS);

      return filter.call(focusableChildren, function (child) {
        return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
      });
    } else {
      var _filter = Array.prototype.filter,
          _focusableChildren = event.querySelectorAll(FOCUSABLE_ELEMENTS);

      return _filter.call(_focusableChildren, function (child) {
        return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
      });
    }
  }

  function accessibility(node) {
    console.log(node);
    var focusableElements = getFocusableChildren(node),
        firstFocusableElement = focusableElements[0];

    firstFocusableElement.focus();
    console.log(firstFocusableElement);
    focusableElements.forEach(function (el, index) {
      el.setAttribute('data-index', index);
      el.addEventListener('keydown', keyboardEvents, true);
    });
  }

  function getDeepActiveElement() {
    var a = doc.activeElement;
    while (a && a.shadowRoot && a.shadowRoot.activeElement) {
      a = a.shadowRoot.activeElement;
    }
    return a;
  }

  function keyboardEvents(event) {
    var nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
        prevButton = parseInt(event.target.getAttribute('data-index')) - 1,
        focusableElements = getFocusableChildren(event.target.parentNode.parentNode),
        firstFocusableElement = focusableElements[0],
        lastFocusableElement = focusableElements[focusableElements.length - 1];
    console.log(event.key);
    if (event.key === 'ArrowUp' || event.key === 'Up') {
      event.preventDefault();

      if (getDeepActiveElement() === firstFocusableElement) {
        lastFocusableElement.focus();
      } else {
        focusableElements[prevButton].focus();
      }
    }

    if (event.key === 'ArrowDown' || event.key === 'Down') {
      event.preventDefault();

      if (getDeepActiveElement() === lastFocusableElement) {
        firstFocusableElement.focus();
      } else {
        focusableElements[nextButton].focus();
      }
    }
    if (event.key === 'Home') {
      firstFocusableElement.focus();
    }

    if (event.key === 'End') {
      lastFocusableElement.focus();
    }
  }

  var ButtonBar = function (_HTMLElement) {
    _inherits(ButtonBar, _HTMLElement);

    _createClass(ButtonBar, [{
      key: 'open',
      get: function get() {
        return this.hasAttribute('open');
      },
      set: function set(bool) {
        this.setAttribute('open', bool);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['open'];
      }
    }]);

    function ButtonBar() {
      _classCallCheck(this, ButtonBar);

      var _this = _possibleConstructorReturn(this, (ButtonBar.__proto__ || Object.getPrototypeOf(ButtonBar)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true),
          slotClone = slotTemplate.content.cloneNode(true),
          slotCloneTarget = clone.querySelector('#buttonBar');

      _this.shadowRoot.appendChild(clone);
      slotCloneTarget.appendChild(slotClone);
      _this.buildDropdown = _this.buildDropdown.bind(_this);
      _this.removeDropdown = _this.removeDropdown.bind(_this);
      _this.closeOnBodyClick = _this.closeOnBodyClick.bind(_this);
      return _this;
    }

    _createClass(ButtonBar, [{
      key: 'closeOnBodyClick',
      value: function closeOnBodyClick(event) {
        var target = event.target;
        do {
          if (target === this || target.tagName === 'BUTTON') {
            return;
          }
          target = target.parentNode;
        } while (target);
        this.open = false;
      }
    }, {
      key: 'buildDropdown',
      value: function buildDropdown() {
        var _this2 = this;

        var menuTemplateClone = menuTemplate.content.cloneNode(true),
            menuTemplateTarget = this.shadowRoot.querySelector('.gr-dropdown-container'),
            menuItems = this.shadowRoot.querySelectorAll('#buttonBar li:not(#moreDropdown)');

        menuTemplateTarget.appendChild(menuTemplateClone);

        var menuItemTarget = this.shadowRoot.querySelector('.menu');

        menuItems.forEach(function (item) {
          var clone = item.cloneNode(true),
              button = clone.querySelector('button'),
              textTemplateClone = doc.createElement('span'),
              itemText = clone.getAttribute('data-text');

          textTemplateClone.classList.add('option-text');
          textTemplateClone.innerHTML = itemText;

          button.appendChild(textTemplateClone);
          button.classList.remove('gr-btn');
          menuItemTarget.appendChild(clone);

          button.addEventListener('click', function () {
            _this2.open = false;
          });
        });

        document.addEventListener('click', this.closeOnBodyClick);
        var menuLinks = this.shadowRoot.querySelector('.gr-dropdown-container .dropdown-menu');
        menuLinks.addEventListener('animationend', accessibility, true);
        doc.addEventListener('keydown', function (event) {
          if (event.key === 'Escape' || event.key === 'Esc') {
            _this2.open = false;
          }
        });
      }
    }, {
      key: 'removeDropdown',
      value: function removeDropdown() {
        var menu = this.shadowRoot.querySelector('.dropdown-menu'),
            dropdownButton = this.shadowRoot.querySelector('#openMenu');
        dropdownButton.disabled = false;
        dropdownButton.focus();
        if (menu) {
          menu.remove();
        }
        document.removeEventListener('click', this.closeOnBodyClick);
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this3 = this;

        var slot = this.shadowRoot.querySelector('slot'),
            shadowTarget = this.shadowRoot.querySelector('#buttonBar'),
            dropdownTemplateClone = dropdownTemplate.content.cloneNode(true);

        slot.addEventListener('slotchange', function (event) {
          var buttons = slot.assignedNodes();
          var count = 0;
          buttons.forEach(function (button) {
            button.removeAttribute('slot');
            if (count === 0) {
              button.classList.add('first-button');
            } else if (count === 1) {
              button.classList.add('second-button');
            } else if (count === 2) {
              button.classList.add('third-button');
            } else {
              button.classList.add('more-buttons');
            }
            shadowTarget.appendChild(button);
            slot.remove();
            count++;
          });
          shadowTarget.appendChild(dropdownTemplateClone);

          var dropdownButton = _this3.shadowRoot.querySelector('#openMenu');

          dropdownButton.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            _this3.open = true;
            dropdownButton.disabled = true;
          });
        });
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open' && newValue === 'true') {
          this.buildDropdown();
        } else if (name === 'open' && newValue === 'false') {
          this.removeDropdown();
        }
      }
    }]);

    return ButtonBar;
  }(HTMLElement);

  customElements.define('pearson-buttonbar', ButtonBar);
})(window, document);