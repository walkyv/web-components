var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      buttonTemplate = doc.createElement('template'),
      panelTemplate = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below

  // Other markup should be written after the closing tag.

  template.innerHTML = ' \n    <style>\n\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host [hidden],:host template{display:none}:host html{font-size:14px}:host *,:host html{-webkit-box-sizing:border-box;box-sizing:border-box}:host body{font-family:Open Sans,Arial,Helvetica,sans-serif}:host body,:host p{font-size:14px;line-height:1.5;font-weight:400}:host strong{font-weight:600}:host a{font-size:14px;color:#047a9c}:host a:hover{color:#03536a;text-decoration:none}:host a:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host button{cursor:pointer}:host li,:host ul{font-size:14px}:host svg{fill:#252525}:host svg[focusable=false]:focus{outline:none}:host input,:host textarea{font:inherit;letter-spacing:inherit;word-spacing:inherit}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}:host .fadeIn,:host .slideInDown{opacity:1!important;visibility:visible!important}:host .fadeOut,:host .slideOutDown{opacity:0;visibility:hidden}:host .slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}:host .slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}:host .fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}:host .fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}:host .animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}:host .animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){:host .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}:host html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}:host .no-border{border:0}:host .icon-18{width:18px;height:18px}:host .icon-24{width:24px;height:24px}:host .hidden{display:none!important}:host .gr-h1{font-size:24px;line-height:28px}:host .gr-h1,:host .gr-h2{font-weight:400;margin-top:0}:host .gr-h2{font-size:20px;line-height:26px}:host .gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}:host .gr-label{font-size:12px;line-height:16px;color:#6a7070;display:block;margin-bottom:4px}:host .gr-meta{font-size:12px;line-height:12px;color:#6a7070}:host .gr-semi-bold{font-weight:600}:host .gr-font-large{font-size:16px;line-height:24px}:host .gr-font-normal{font-size:14px;line-height:20px}:host .accordion{border:1px solid #c7c7c7;grid-column:span 12;border-radius:4px}:host .accordion h3{border-bottom:1px solid #c7c7c7;margin:0}:host .accordion h3 button{background-color:#fff;width:100%;border:0;text-align:left;padding:16px}:host .accordion h3 button[aria-expanded=false] .collapse{display:none}:host .accordion h3 button[aria-expanded=false] .expand,:host .accordion h3 button[aria-expanded=true] .collapse{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}:host .accordion h3 button[aria-expanded=true] .collapse{margin-left:16px}:host .accordion h3 button[aria-expanded=true] .expand{display:none;margin-left:16px}:host .accordion h3 button:focus{background-color:#efefef;z-index:10000;position:relative;outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .accordion h3 .accordion-title{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}:host .accordion>div{padding:16px}:host .accordion .accordion-panel{display:none;border-bottom:1px solid #c7c7c7;background:#fff}:host .accordion .accordion-panel:last-child{border-bottom:0}:host .accordion button[aria-expanded=false]+.accordion{display:none}:host .accordion{border-radius:0}\n  \n    </style>\n    <div id="accordionGroup" class="accordion">  \n    </div>\n', buttonTemplate.innerHTML = '\n      <h3>\n        <button aria-expanded="false" class="accordion-trigger" aria-controls="sect3" id="accordion1id3" data-index="2">\n          <span class="accordion-title">\n            <span class="button-label">\n               <slot name="buttons"></slot>\n            </span>\n            <svg focusable="false" class="icon-18 expand" aria-hidden="true">\n                <path d="M9.62193909,12.7616134 C9.25409223,13.0918069 8.69027111,13.0789828 8.33764681,12.7231411 L3.27435567,7.61365203 C2.90854811,7.24450681 2.90854811,6.64600414 3.27435567,6.27685892 C3.64016324,5.90771369 4.23325448,5.90771369 4.59906205,6.27685892 L9,10.7179514 L13.400938,6.27685892 C13.7667455,5.90771369 14.3598368,5.90771369 14.7256443,6.27685892 C15.0914519,6.64600414 15.0914519,7.24450681 14.7256443,7.61365203 L9.66235319,12.7231411 C9.64896608,12.7366503 9.63548354,12.7494543 9.62191255,12.7615685 L9.62193909,12.7616134 Z" fill-rule="nonzero"></path>\n            </svg>\n            <svg focusable="false" class="icon-18 collapse" aria-hidden="true">\n                <path d="M9.62193909,5.2383866 L9.62191255,5.23843148 C9.63548354,5.25054567 9.64896608,5.26334967 9.66235319,5.27685892 L14.7256443,10.386348 C15.0914519,10.7554932 15.0914519,11.3539959 14.7256443,11.7231411 C14.3598368,12.0922863 13.7667455,12.0922863 13.400938,11.7231411 L9,7.28204859 L4.59906205,11.7231411 C4.23325448,12.0922863 3.64016324,12.0922863 3.27435567,11.7231411 C2.90854811,11.3539959 2.90854811,10.7554932 3.27435567,10.386348 L8.33764681,5.27685892 C8.69027111,4.92101724 9.25409223,4.90819314 9.62193909,5.2383866 Z"></path>\n            </svg>\n          </span>\n        </button>\n      </h3>\n    ', panelTemplate.innerHTML = '\n\t\t\t<div id="sect3" role="region" aria-labelledby="accordion1id3" class="accordion-panel animateIn">\n\t\t\t\t<div class="content">\n\t\t\t\t\t  <slot name="panels"></slot>\n\t\t\t\t</div>\n\t\t\t</div>\n    ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-accordion');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  var Accordion = function (_HTMLElement) {
    _inherits(Accordion, _HTMLElement);

    _createClass(Accordion, [{
      key: 'toggle',
      get: function get() {
        return this.hasAttribute('toggle');
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['toggle'];
      }
    }]);

    function Accordion() {
      _classCallCheck(this, Accordion);

      var _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true),
          buttonClone = buttonTemplate.content.cloneNode(true),
          panelClone = panelTemplate.content.cloneNode(true);

      _this.target = clone.querySelector('#accordionGroup');

      _this.shadowRoot.appendChild(clone);
      buttonClone.appendChild(panelClone);
      _this.target.appendChild(buttonClone);

      _this.renderButtons = _this.renderButtons.bind(_this);
      _this.renderPanels = _this.renderPanels.bind(_this);
      return _this;
    }

    _createClass(Accordion, [{
      key: 'renderButtons',
      value: function renderButtons(text, index, number) {
        var _this2 = this;

        var buttonClone = buttonTemplate.content.cloneNode(true),
            label = buttonClone.querySelector('.button-label'),
            button = label.parentNode.parentNode,
            length = number - 1;

        button.setAttribute('data-index', index);
        button.setAttribute('aria-controls', 'panel' + index);
        button.setAttribute('id', 'accordionId' + index);

        label.innerHTML = text;
        if (index === length) {
          button.parentNode.style.border = 0;
        }

        button.addEventListener('click', function (event) {
          var button = event.currentTarget,
              isExpanded = button.getAttribute('aria-expanded'),
              currentPanel = event.currentTarget.parentNode.nextElementSibling;

          if (_this2.toggle) {
            if (isExpanded === 'false') {
              button.setAttribute('aria-expanded', true);
              currentPanel.style.display = 'flex';
              if (index === length) {
                button.parentNode.style.borderBottom = '1px solid #c7c7c7';
              }
            } else {
              button.setAttribute('aria-expanded', false);
              currentPanel.style.display = 'none';
              if (index === length) {
                button.parentNode.style.border = 0;
              }
            }
          } else {
            var allButtons = _this2.shadowRoot.querySelectorAll('.accordion-trigger'),
                allPanels = _this2.shadowRoot.querySelectorAll('.accordion-panel');

            if (isExpanded === 'false') {
              allButtons.forEach(function (button) {
                button.setAttribute('aria-expanded', false);
              });
              allPanels.forEach(function (panel) {
                panel.style.display = 'none';
              });

              button.setAttribute('aria-expanded', true);
              currentPanel.style.display = 'flex';
              if (index === length) {
                button.parentNode.style.borderBottom = '1px solid #c7c7c7';
              }
            } else {
              button.setAttribute('aria-expanded', false);
              currentPanel.style.display = 'none';
              if (index === length) {
                button.parentNode.style.border = 0;
              }
            }
          }
        });

        return buttonClone;
      }
    }, {
      key: 'renderPanels',
      value: function renderPanels(panels, index, button) {
        var panelClone = panelTemplate.content.cloneNode(true),
            panel = panelClone.querySelector('.accordion-panel'),
            target = panelClone.querySelector('.content');

        panel.setAttribute('id', 'panel' + index);
        panel.setAttribute('aria-labelledby', 'accordianId' + index);
        target.appendChild(panels[index]);
        return panelClone;
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this3 = this;

        var buttonSlot = this.shadowRoot.querySelector('slot[name="buttons"]');

        if (buttonSlot !== null) {
          buttonSlot.addEventListener('slotchange', function (event) {
            var panelSlot = _this3.shadowRoot.querySelector('slot[name="panels"]'),
                panelSlotToRemove = _this3.shadowRoot.querySelector('.accordion > div'),
                panelContainer = panelSlot.assignedNodes()[0],
                buttonSlotToRemove = _this3.shadowRoot.querySelector('.accordion h3'),
                triggers = _this3.shadowRoot.querySelectorAll('.accordion-trigger');

            if (panelContainer) {
              var panels = panelContainer.querySelectorAll('.panel'),
                  ul = buttonSlot.assignedNodes()[0],
                  buttons = ul.querySelectorAll('li');

              buttons.forEach(function (button, index) {
                _this3.target.appendChild(_this3.renderButtons(button.innerHTML, index, buttons.length));
                _this3.target.appendChild(_this3.renderPanels(panels, index, button));
              });
              panelSlotToRemove.remove();
              panelContainer.remove();
              ul.remove();
              buttonSlotToRemove.remove();
            }

            triggers.forEach(function (trigger) {
              trigger.addEventListener('keydown', function (event) {
                var nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
                    prevButton = parseInt(event.target.getAttribute('data-index')) - 1,
                    firstTrigger = triggers[0],
                    lastTrigger = triggers[triggers.length - 1];

                if (event.key === 'ArrowUp') {
                  event.preventDefault();
                  if (_this3.shadowRoot.activeElement === firstTrigger) {
                    lastTrigger.focus();
                  } else {
                    triggers[prevButton].focus();
                  }
                }

                if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  if (_this3.shadowRoot.activeElement === lastTrigger) {
                    firstTrigger.focus();
                  } else {
                    triggers[nextButton].focus();
                  }
                }

                if (event.key === 'Home') {
                  firstTrigger.focus();
                }

                if (event.key === 'End') {
                  lastTrigger.focus();
                }
              });
            });
          });
        }
      }
    }]);

    return Accordion;
  }(HTMLElement);

  customElements.define('pearson-accordion', Accordion);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  var ICON_CLOSE_24 = '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    version="1.1"\n    id="close-24" viewBox="0 0 24 24"\n    class="pe-icon-close-24"\n    aria-hidden="true"\n    focusable="false"\n    style="width:24px;height:24px;"\n  >\n    <path\n      d="M12,10.5857864 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.4142136,12 L18.7071068,17.2928932 C19.0976311,17.6834175 19.0976311,18.3165825 18.7071068,18.7071068 C18.3165825,19.0976311 17.6834175,19.0976311 17.2928932,18.7071068 L12,13.4142136 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.5857864,12 L5.29289322,6.70710678 C4.90236893,6.31658249 4.90236893,5.68341751 5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 L12,10.5857864 Z"\n    ></path>\n  </svg>\n  ';

  var ICON_CHECK_18 = '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    version="1.1"\n    id="success-icon" viewBox="0 0 18 18"\n    class="pe-variant-icon pe-icon-check-18\n    aria-hidden="true"\n    focusable="false"\n    style="width:18px;height:18px;"\n  >\n    <path\n      d="M5.7176,18 C5.4406,18 5.1736,17.885 4.9846,17.68 L0.2666,12.589 C-0.1084,12.184 -0.0854,11.551 0.3206,11.176 C0.7246,10.799 1.3566,10.823 1.7336,11.229 L5.6126,15.415 L16.1826,0.424 C16.5016,-0.028 17.1246,-0.135 17.5756,0.183 C18.0276,0.501 18.1356,1.125 17.8176,1.576 L6.5346,17.576 C6.3616,17.823 6.0846,17.978 5.7836,17.998 C5.7616,17.999 5.7396,18 5.7176,18"\n    ></path>\n  </svg>\n';

  var ICON_WARNING_18 = '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    version="1.1"\n    id="error-icon" viewBox="0 0 18 18"\n    class="pe-variant-icon pe-icon-warning-18\n    aria-hidden="true"\n    focusable="false"\n    style="width:18px;height:18px;"\n  >\n    <path\n      d="M9.9999375,12.4775 C9.9999375,12.7525 9.7749375,12.9775 9.4999375,12.9775 L8.4999375,12.9775 C8.2249375,12.9775 7.9999375,12.7525 7.9999375,12.4775 L7.9999375,7.4775 C7.9999375,7.2025 8.2249375,6.9775 8.4999375,6.9775 L9.4999375,6.9775 C9.7749375,6.9775 9.9999375,7.2025 9.9999375,7.4775 L9.9999375,12.4775 Z M9.9999375,15.4775 C9.9999375,15.7525 9.7749375,15.9775 9.4999375,15.9775 L8.4999375,15.9775 C8.2249375,15.9775 7.9999375,15.7525 7.9999375,15.4775 L7.9999375,14.4775 C7.9999375,14.2025 8.2249375,13.9775 8.4999375,13.9775 L9.4999375,13.9775 C9.7749375,13.9775 9.9999375,14.2025 9.9999375,14.4775 L9.9999375,15.4775 Z M17.9469375,17.2535 L9.4469375,0.2535 C9.2769375,-0.0845 8.7229375,-0.0845 8.5529375,0.2535 L0.0529375,17.2535 C-0.0240625,17.4095 -0.0170625,17.5925 0.0739375,17.7405 C0.1659375,17.8875 0.3269375,17.9775 0.4999375,17.9775 L17.4999375,17.9775 C17.6729375,17.9775 17.8339375,17.8875 17.9259375,17.7405 C18.0169375,17.5925 18.0239375,17.4095 17.9469375,17.2535 L17.9469375,17.2535 Z"\n    ></path>\n  </svg>\n  ';

  template.innerHTML = '\n<style>\n:host{display:block;position:fixed;top:0;left:0;max-width:580px;z-index:1000;padding:20px 28px;margin:36px 24px;font:14px/22px Open Sans,Calibri,Tahoma,sans-serif;background-color:#fff;color:#252525;border:1px solid #c7c7c7;border-left:3px solid transparent;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.16);box-shadow:0 1px 1px 0 rgba(0,0,0,.16);visibility:hidden;opacity:0}:host([type=error]){border-left-color:#db0020}:host([type=info]),:host([type=success]){border-left-color:#19a6a4}:host([level=inline]){position:absolute;top:unset;left:unset;max-width:100vw;margin:0}*{-webkit-box-sizing:inherit;box-sizing:inherit}.content-container{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}::slotted(h2),::slotted(h3),::slotted(p){display:inline;font:14px/22px Open Sans,Calibri,Tahoma,sans-serif;margin:0;font-weight:600}::slotted(h2){margin-right:4px}::slotted(p){font-weight:400}::slotted(a){color:#047a9c;text-decoration:none}::slotted(a:focus),::slotted(a:hover){color:#005a70}::slotted(a:focus){outline:2px solid #0b73da;outline-offset:4px}.pe-icon--btn{position:absolute;width:48px;height:48px;background:none;border:none;color:inherit;cursor:pointer;padding:0;top:5px;right:5px}.pe-icon--btn svg{height:24px;width:24px}.pe-icon--btn:focus{outline:0;border:2px solid #0b73da;border-radius:4px}.pe-icon--btn::-moz-focus-inner{border:none;padding:0}svg{vertical-align:top;fill:#6a7070;pointer-events:none}svg[class*=check]{fill:#19a6a4}svg[class*=warning]{fill:#db0020}:host([type=error]) svg[class*=warning],:host([type=success]) svg[class*=check]{display:block}.pe-variant-icon{-webkit-box-flex:0;-webkit-flex:0 0 18px;-ms-flex:0 0 18px;flex:0 0 18px;margin-right:12px;display:none}.content{display:inline-block}@media (min-width:480px){:host([level=global]){width:440px}}@media (min-width:768px){:host{margin:32px;padding:24px 36px 24px 28px}:host([level=global]){width:580px}:host([level=inline]){min-width:440px}.pe-icon--btn{padding:8px}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}:host(.fadeIn),:host(.slideInDown){opacity:1;visibility:visible}:host(.fadeOut),:host(.slideOutDown){opacity:0;visibility:hidden}:host([animated].slideInDown){-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}:host([animated].slideOutDown){-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}:host([animated].fadeIn){-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}:host([animated].fadeOut){-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}@media (prefers-reduced-motion){:host([animated]){-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}html[data-prefers-reduced-motion] :host(.animated){-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}</style>\n    <div class="content-container">\n    ' + ICON_CHECK_18 + ' ' + ICON_WARNING_18 + '\n      <div class="content">\n        <slot></slot>\n      </div>\n    </div>\n    <button\n      data-action="close-alert"\n      class="pe-icon--btn"\n      aria-label="Close Lorem ipsum dolor sit amet."\n    >\n      ' + ICON_CLOSE_24 + '\n    </button>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-alert');

  var FOCUSABLE_ELEMENTS = 'a:not([disabled]), button:not([disabled])';

  function getFocusableChildren(node) {
    var filter = Array.prototype.filter,
        focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
    return filter.call(focusableChildren, function (child) {
      return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
    });
  }

  function setFocusToFirstChild(node) {
    var focusableChildren = getFocusableChildren(node),
        focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];
    if (focusableChild) {
      focusableChild.focus();
    }
  }

  function constrainToParentWidth(el) {
    var parent = el.parentElement;
    var parentWidth = parent.getBoundingClientRect().width;
    var parentComputedStyle = w.getComputedStyle(parent);
    var parentPaddingWidth = parseInt(parentComputedStyle.getPropertyValue('padding-left').match(/\d+/)[0], 10) + parseInt(parentComputedStyle.getPropertyValue('padding-right').match(/\d+/)[0], 10);

    var parentBorderWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width').match(/\d+/)[0], 10) + parseInt(parentComputedStyle.getPropertyValue('border-right-width').match(/\d+/)[0], 10);

    var elMinWidth = parseInt(w.getComputedStyle(el).getPropertyValue('min-width').match(/\d+/)[0], 10);

    // The width should be equal to the parent's width,
    // minus the padding and border
    var nextElWidth = parentWidth - (parentPaddingWidth + parentBorderWidth);

    if (nextElWidth > w.innerWidth) {
      nextElWidth = w.innerWidth;
    }

    // If that number is less than the min-width,
    if (nextElWidth < elMinWidth) {
      //  use min-width instead
      nextElWidth = elMinWidth;
    }

    el.style.width = nextElWidth + 'px';
  }

  function ensureAttrs(node, attrs) {
    for (var attrName in attrs) {
      var requiredVal = attrs[attrName];
      if (!node.hasAttribute(attrName) || node.getAttribute(attrName) !== requiredVal) {
        node.setAttribute(attrName, requiredVal);
      }
    }
  }

  var Alert = function (_HTMLElement) {
    _inherits(Alert, _HTMLElement);

    _createClass(Alert, [{
      key: 'animated',
      get: function get() {
        return this.hasAttribute('animated') && w.matchMedia('(prefers-reduced-motion: reduce)');
      }
    }, {
      key: 'level',
      get: function get() {
        return this.getAttribute('level');
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }]);

    function Alert() {
      _classCallCheck(this, Alert);

      var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.contentContainer = clone.querySelector('.content-container');
      _this.closeBtn = clone.querySelector('button[data-action="close-alert"]');
      _this.returnNode = doc.querySelector('#' + _this.getAttribute('returnNode')) || doc.querySelector('#' + _this.getAttribute('returnnode')) || doc.activeElement;

      _this.shadowRoot.appendChild(clone);

      _this.onCloseClick = _this.onCloseClick.bind(_this);
      _this.onSlotChange = _this.onSlotChange.bind(_this);
      return _this;
    }

    _createClass(Alert, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var slot = this.shadowRoot.querySelector('slot');

        var a11yAttrs = {};

        if (this.level === 'global') {
          a11yAttrs.role = 'dialog';
          a11yAttrs['aria-labelledby'] = 'alertTitle', a11yAttrs['aria-describedby'] = 'alertDescription alertLink';

          this.openingAnimation = 'slideInDown';
          this.closingAnimation = 'slideOutDown';
        }
        if (this.level === 'inline') {
          constrainToParentWidth(this);

          a11yAttrs.role = this.type === 'error' ? 'alert' : 'status';
          a11yAttrs['aria-live'] = this.type === 'error' ? 'assertive' : 'polite';

          this.openingAnimation = 'fadeIn';
          this.closingAnimation = 'fadeOut';
        }

        ensureAttrs(this, a11yAttrs);

        this.classList.add(this.openingAnimation);

        slot.addEventListener('slotchange', this.onSlotChange);
        this.closeBtn.addEventListener('click', this.onCloseClick);

        if (this.animated) {
          this.addEventListener('animationend', this.onAnimationEnd);
        } else if (this.level === 'global') {
          setFocusToFirstChild(this);
        }
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.returnNode.focus();
      }
    }, {
      key: 'onCloseClick',
      value: function onCloseClick() {
        this.classList.add(this.closingAnimation);

        this.dispatchEvent(new Event('dismiss', {
          bubbles: true
        }));

        if (!this.animated) {
          this.remove();
        }
      }
    }, {
      key: 'onSlotChange',
      value: function onSlotChange(e) {
        var contentNodes = e.target.assignedNodes();
        var node = void 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = contentNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            node = _step.value;

            if (node.id === 'alertTitle') {
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.closeBtn.setAttribute('aria-label', 'Close ' + (node ? node.textContent : 'Alert'));
      }
    }, {
      key: 'onAnimationEnd',
      value: function onAnimationEnd(e) {
        if (this.level === 'global' && e.animationName === this.openingAnimation) {
          setFocusToFirstChild(this);
        }
        if (e.animationName === this.closingAnimation) {
          this.remove();
        }
      }
    }]);

    return Alert;
  }(HTMLElement);

  customElements.define('pearson-alert', Alert);
})(window, document);
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

  template.innerHTML = ' \n    <style>\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host template{display:none}:host [hidden]{display:none}:host html{font-size:14px}:host *,:host html{-webkit-box-sizing:border-box;box-sizing:border-box}:host body{font-family:Open Sans,Arial,Helvetica,sans-serif}:host body,:host p{font-size:14px;line-height:1.5;font-weight:400}:host strong{font-weight:600}:host a{font-size:14px;color:#047a9c}:host a:hover{color:#03536a;text-decoration:none}:host a:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host button{cursor:pointer}:host li,:host ul{font-size:14px}:host svg{fill:#252525}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}:host .fadeIn,:host .slideInDown{opacity:1!important;visibility:visible!important}:host .fadeOut,:host .slideOutDown{opacity:0;visibility:hidden}:host .slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}:host .slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}:host .fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}:host .fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}:host .animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}:host .animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){:host .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}:host html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}:host .no-border{border:0}:host .icon-18{width:18px;height:18px}:host .icon-24{width:24px;height:24px}:host .hidden{display:none!important}:host .gr-h1{font-size:24px;line-height:28px}:host .gr-h1,:host .gr-h2{font-weight:400;margin-top:0}:host .gr-h2{font-size:20px;line-height:26px}:host .gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}:host .gr-label{font-size:12px;line-height:16px;color:#6a7070;display:block;margin-bottom:4px}:host .gr-meta{font-size:12px;line-height:12px;color:#6a7070}:host .gr-semi-bold{font-weight:600}:host .gr-font-large{font-size:16px;line-height:24px}:host .gr-font-normal{font-size:14px;line-height:20px}:host .gr-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:16px;cursor:pointer;border-radius:22px;position:relative;margin:12px}:host .gr-btn:hover{color:#252525;border:1px solid #252525}:host .gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}:host .gr-btn.primary:hover{color:#fff;background-color:#035f79}:host .gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}:host .gr-btn.attention:hover{background-color:#f7aa00}:host .gr-btn.small{min-width:128px;padding:7px 20px;font-size:14px}:host .gr-btn.small:focus:after{padding:18px 21px}:host .gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:16px}:host .gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}:host .gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}:host .gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}:host .gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}:host .gr-btn.no-border{border:0}:host .gr-btn.no-border:hover{border:0}:host .gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}:host .gr-dropdown-container .gr-btn{margin:0;font-size:14px;font-weight:700}:host .gr-dropdown-container .gr-btn svg{margin-left:1em}:host .gr-dropdown-container .dropdown-menu{position:absolute;z-index:10;margin-top:-9px;-ms-overflow-style:none}:host .gr-dropdown-container .mobile-group{background:#f5f5f5;border-bottom:1px solid #e9e9e9;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:100%;padding:24px;position:relative;top:-27px;z-index:10;overflow:hidden}:host .gr-dropdown-container .mobile-group span{width:100%;text-align:center}:host .gr-dropdown-container .mobile-group button{margin:0 0 0 12px}:host .gr-dropdown-container .menu{background-color:#fff;position:absolute}:host .gr-dropdown-container .menu button{background:none;border:0;font-size:14px}:host .gr-dropdown-container .menu button>*{pointer-events:none}:host .gr-dropdown-container .menu button:focus{outline:none}:host .gr-dropdown-container .menu button:focus:after{border:2px solid #1977d4;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + -10px);width:calc(100% + -10px);height:100%;top:0;left:5px;z-index:1}:host .gr-dropdown-container .menu{list-style-type:none;padding:1em 0;border:1px solid #d9d9d9;border-radius:2px;width:220px;margin-top:0;top:16px;position:relative}:host .gr-dropdown-container [aria-checked=false] svg{display:none}:host .gr-dropdown-container [aria-checked=true] svg{display:inline-block}:host .gr-dropdown-container .seperator{padding-bottom:6px;margin-bottom:6px;border-bottom:1px solid #d9d9d9}:host .gr-dropdown-container li button{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-decoration:none;width:100%;color:#252525;text-align:left;padding:0}:host .gr-dropdown-container li button:hover{background-color:#e9e9e9}:host .gr-dropdown-container li button svg{position:absolute;left:12px}:host .gr-dropdown-container .option-text{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:5px 24px 5px 34px;width:100%}:host .gr-dropdown-container .divider{border-bottom:1px solid #c7c7c7;padding-bottom:8px;margin:0 25px}:host .gr-dropdown-container .divider+li{margin-top:8px}:host .gr-dropdown-container .truncate{max-width:100%;width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:480px){:host .gr-dropdown-container .dropdown-menu{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}:host .gr-dropdown-container .option-text{font-size:16px;margin:12px 42px}:host .gr-dropdown-container .menu{max-height:300px;overflow:scroll;width:100%;top:44px;border:0;height:100vh}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){:host .gr-dropdown-container .menu li button[aria-checked=true] svg{top:4px}}@media (min-width:480px){:host .gr-dropdown-container .dropdown-menu .mobile-group{display:none}}:host .button-bar ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;padding:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}@media (-ms-high-contrast:active),(-ms-high-contrast:none){:host .button-bar .dropdown-menu button svg{top:5px}}:host .button-bar .more-buttons,:host .button-bar .third-button{display:none}@media (min-width:887px){:host .button-bar .more-buttons,:host .button-bar .third-button{display:block}}:host .button-bar .second-button{display:none}@media (min-width:640px){:host .button-bar .second-button{display:block}}:host .button-bar .first-button{display:none}@media (min-width:591px){:host .button-bar .first-button{display:block}}:host .button-bar #moreDropdown{display:block}@media (min-width:887px){:host .button-bar #moreDropdown{display:none}}:host .button-bar #moreDropdown ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}:host .button-bar #moreDropdown li{width:100%}:host .button-bar #moreDropdown li svg{margin:0!important}:host .button-bar #moreDropdown .first-button{display:block}@media (min-width:591px){:host .button-bar #moreDropdown .first-button{display:none}}:host .button-bar #moreDropdown .second-button{display:block}@media (min-width:640px){:host .button-bar #moreDropdown .second-button{display:none}}:host .button-bar #moreDropdown .more-buttons,:host .button-bar #moreDropdown .third-button{display:block}@media (max-width:480px){:host .button-bar .gr-dropdown-container .menu{border:1px solid #c7c7c7;height:auto;width:220px;top:16px}}:host #buttonBar{margin:0}:host #buttonBar #openMenu{margin:12px}\n    </style>\n    <div class="button-bar">\n       <ul id="buttonBar">\n           \n       </ul>\n    </div>\n';

  dropdownTemplate.innerHTML = '\n  <li id="moreDropdown">\n    <div class="gr-dropdown-container">\n      <button id="openMenu" class="gr-btn icon-btn-18" aria-haspopup="true" aria-expanded="false" >\n        <svg focusable="false" class="icon-18" aria-hidden="true" style="margin:0;">\n          <path d="M7.5,3.5 C7.5,2.67157288 8.17157288,2 9,2 C9.82842712,2 10.5,2.67157288 10.5,3.5 C10.5,4.32842712 9.82842712,5 9,5 C8.17157288,5 7.5,4.32842712 7.5,3.5 Z" ></path>\n          <path d="M7.5,9 C7.5,8.17157288 8.17157288,7.5 9,7.5 C9.82842712,7.5 10.5,8.17157288 10.5,9 C10.5,9.82842712 9.82842712,10.5 9,10.5 C8.17157288,10.5 7.5,9.82842712 7.5,9 Z" ></path>\n          <path d="M7.5,14.5 C7.5,13.6715729 8.17157288,13 9,13 C9.82842712,13 10.5,13.6715729 10.5,14.5 C10.5,15.3284271 9.82842712,16 9,16 C8.17157288,16 7.5,15.3284271 7.5,14.5 Z" ></path>\n        </svg>\n      </button>\n    </div>\n  </li>\n  ';

  menuTemplate.innerHTML = '\n  <div class="dropdown-menu animateIn">\n    <ul role="menu" class="menu">\n\n    </ul>\n  </div>\n  ';

  textTemplate.innerHTML = '\n    <span class="option-text"></span>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-buttonbar');
  function getWidth() {
    return Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth);
  }

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

        var browserWidth = getWidth(),
            dropdownMenu = this.shadowRoot.querySelector('#buttonBar .dropdown-menu'),
            menuWidth = dropdownMenu.getBoundingClientRect().right;
        if (browserWidth === menuWidth) {
          dropdownMenu.style.right = 0;
        } else {
          return;
        }
      }
    }, {
      key: 'removeDropdown',
      value: function removeDropdown() {
        var menu = this.shadowRoot.querySelector('.dropdown-menu'),
            dropdownButton = this.shadowRoot.querySelector('#openMenu');
        dropdownButton.disabled = false;
        dropdownButton.setAttribute('aria-expanded', false);
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
            var buttonNode = button.querySelector('button'),
                text = button.getAttribute('data-text');
            button.removeAttribute('slot');
            buttonNode.setAttribute('aria-label', text);
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
            dropdownButton.setAttribute('aria-expanded', true);
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      modular = doc.createElement('template'),
      stacked = doc.createElement('template');

  template.innerHTML = ' \n    <style>\n\n:host{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:12;grid-column-end:13}\n:host{\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host template{display:none}:host [hidden]{display:none}:host pearson-alert{font-size:16px;max-width:580px}:host pearson-alert .alert-title{font-size:14px;margin:0;display:inline;top:0}:host pearson-uploader .alert-title{top:0!important}:host pearson-alert .alert-text{margin:0;display:inline}:host pearson-footer{left:50%;margin-left:-50%;right:50%;margin-right:-50%}:host pearson-tabs{font-size:14px}:host pearson-progress-bar{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1/5}@media (min-width:591px){:host pearson-progress-bar{-ms-grid-column:1;-ms-grid-column-span:8;grid-column:1/9}}@media (min-width:887px){:host pearson-progress-bar{-ms-grid-column:1;-ms-grid-column-span:12;grid-column:1/13}}:host pearson-tabs{-ms-grid-column:1;-ms-grid-column-span:4;grid-column:1/5}@media (min-width:591px){:host pearson-tabs{-ms-grid-column:1;-ms-grid-column-span:8;grid-column:1/9}}@media (min-width:887px){:host pearson-tabs{-ms-grid-column:1;-ms-grid-column-span:12;grid-column:1/13}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){:host pearson-card{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-ms-grid-column-span:3}:host pearson-card[stacked]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-ms-grid-column-span:12}}:host .card-container{width:100%;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.1);box-shadow:0 1px 1px 0 rgba(0,0,0,.1);-ms-grid-column-span:4;grid-column:span 4}@media (min-width:887px){:host .card-container{-ms-grid-column-span:3;grid-column:span 3}}:host .card-container.stacked{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:12;grid-column-end:13}:host .card{border-radius:4px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.16);box-shadow:0 2px 4px 0 rgba(0,0,0,.16);background:#fff;padding:16px}:host :host{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:12;grid-column-end:13}\n\n\t\t</style>\n\t\t<div class="card-container">\n\t\t\t<div class="card">\n\t\t\t    <slot></slot>\n\t\t\t</div>\n\t\t</div>  \n';
  modular.innerHTML = '\n    <style>\n        :host{grid-column:span 4}@media (min-width:887px){:host{grid-column:span 3}}\n        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n        :host {\n        display:flex;\n        }\n}\n    </style>\n  ';

  stacked.innerHTML = '\n    <style>\n        :host{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:12;grid-column-end:13}\n    </style>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-card');

  var Card = function (_HTMLElement) {
    _inherits(Card, _HTMLElement);

    _createClass(Card, [{
      key: 'isStacked',
      get: function get() {
        return this.hasAttribute('stacked') && this.getAttribute('stacked') !== 'false';
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['stacked'];
      }
    }]);

    function Card() {
      _classCallCheck(this, Card);

      var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true);
      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(Card, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (!this.isStacked) {
          var modularLayout = modular.content.cloneNode(true);
          this.shadowRoot.appendChild(modularLayout);
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback() {
        if (this.isStacked) {
          var stackedLayout = stacked.content.cloneNode(true);
          this.shadowRoot.appendChild(stackedLayout);
        } else {
          var modularLayout = modular.content.cloneNode(true);
          this.shadowRoot.appendChild(modularLayout);
        }
      }
    }]);

    return Card;
  }(HTMLElement);

  customElements.define('pearson-card', Card);
})(window, document);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) {
  'object' == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function () {
  'use strict';
  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }function t(e, t) {
    if (1 !== e.nodeType) return [];var o = e.ownerDocument.defaultView,
        n = o.getComputedStyle(e, null);return t ? n[t] : n;
  }function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }function n(e) {
    if (!e) return document.body;switch (e.nodeName) {case 'HTML':case 'BODY':
        return e.ownerDocument.body;case '#document':
        return e.body;}var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;return (/(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    );
  }function r(e) {
    return 11 === e ? pe : 10 === e ? se : pe || se;
  }function p(e) {
    if (!e) return document.documentElement;for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }var i = n && n.nodeName;return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }function s(e) {
    var t = e.nodeName;return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
  }function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = o ? e : t,
        i = o ? t : e,
        r = document.createRange();r.setStart(n, 0), r.setEnd(i, 0);var l = r.commonAncestorContainer;if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);var f = d(e);return f.host ? a(f.host, t) : a(e, d(t).host);
  }function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        n = e.nodeName;if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || i;return r[o];
    }return e[o];
  }function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = l(t, 'top'),
        i = l(t, 'left'),
        r = o ? -1 : 1;return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
  }function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        n = 'Left' == o ? 'Right' : 'Bottom';return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }function h(e, t, o, n) {
    return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0);
  }function c(e) {
    var t = e.body,
        o = e.documentElement,
        n = r(10) && getComputedStyle(o);return { height: h('Height', t, o, n), width: h('Width', t, o, n) };
  }function g(e) {
    return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function u(e) {
    var o = {};try {
      if (r(10)) {
        o = e.getBoundingClientRect();var n = l(e, 'top'),
            i = l(e, 'left');o.top += n, o.left += i, o.bottom += n, o.right += i;
      } else o = e.getBoundingClientRect();
    } catch (t) {}var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
        s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
        d = s.width || e.clientWidth || p.right - p.left,
        a = s.height || e.clientHeight || p.bottom - p.top,
        f = e.offsetWidth - d,
        h = e.offsetHeight - a;if (f || h) {
      var u = t(e);f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h;
    }return g(p);
  }function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        p = r(10),
        s = 'HTML' === o.nodeName,
        d = u(e),
        a = u(o),
        l = n(e),
        m = t(o),
        h = parseFloat(m.borderTopWidth, 10),
        c = parseFloat(m.borderLeftWidth, 10);i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height });if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var w = parseFloat(m.marginTop, 10),
          y = parseFloat(m.marginLeft, 10);b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y;
    }return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b;
  }function w(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = e.ownerDocument.documentElement,
        n = b(e, o),
        i = ee(o.clientWidth, window.innerWidth || 0),
        r = ee(o.clientHeight, window.innerHeight || 0),
        p = t ? 0 : l(o),
        s = t ? 0 : l(o, 'left'),
        d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r };return g(d);
  }function y(e) {
    var n = e.nodeName;return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || y(o(e));
  }function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;for (var o = e.parentElement; o && 'none' === t(o, 'transform');) {
      o = o.parentElement;
    }return o || document.documentElement;
  }function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        s = { top: 0, left: 0 },
        d = p ? E(e) : a(e, t);if ('viewport' === r) s = w(d, p);else {
      var l;'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;var f = b(l, d, p);if ('HTML' === l.nodeName && !y(d)) {
        var m = c(e.ownerDocument),
            h = m.height,
            g = m.width;s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left;
      } else s = f;
    }i = i || 0;var u = 'number' == typeof i;return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ? i : i.bottom || 0, s;
  }function x(e) {
    var t = e.width,
        o = e.height;return t * o;
  }function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf('auto')) return e;var p = v(o, n, r, i),
        s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
        d = Object.keys(s).map(function (e) {
      return fe({ key: e }, s[e], { area: x(s[e]) });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          n = e.height;return t >= o.clientWidth && n >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];return l + (f ? '-' + f : '');
  }function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        i = n ? E(t) : a(t, o);return b(o, i, n);
  }function S(e) {
    var t = e.ownerDocument.defaultView,
        o = t.getComputedStyle(e),
        n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
        i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
        r = { width: e.offsetWidth + i, height: e.offsetHeight + n };return r;
  }function T(e) {
    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function D(e, t, o) {
    o = o.split('-')[0];var n = S(e),
        i = { width: n.width, height: n.height },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
  }function C(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });var n = C(e, function (e) {
      return e[t] === o;
    });return e.indexOf(n);
  }function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n = t['function'] || t.fn;t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t));
    }), o;
  }function k() {
    if (!this.state.isDestroyed) {
      var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
          n = e.enabled;return n && o === t;
    });
  }function H(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;if ('undefined' != typeof document.body.style[r]) return r;
    }return null;
  }function B() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[H('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }function A(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }function F(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, { passive: !0 });var r = n(e);return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }function I() {
    this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
  }function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
  }function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = '';-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n;
    });
  }function V(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];!1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }function q(e, t) {
    var o = e.offsets,
        n = o.popper,
        i = o.reference,
        r = -1 !== ['left', 'right'].indexOf(e.placement),
        p = -1 !== e.placement.indexOf('-'),
        s = i.width % 2 == n.width % 2,
        d = 1 == i.width % 2 && 1 == n.width % 2,
        a = function a(e) {
      return e;
    },
        l = t ? r || p || s ? $ : Z : a,
        f = t ? $ : a;return { left: l(d && !p && t ? n.left - 1 : n.left), top: f(n.top), bottom: f(n.bottom), right: l(n.right) };
  }function K(e, t, o) {
    var n = C(e, function (e) {
      var o = e.name;return o === t;
    }),
        i = !!n && e.some(function (e) {
      return e.name === o && e.enabled && e.order < n.order;
    });if (!i) {
      var r = '`' + t + '`';console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }return i;
  }function z(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }function G(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = ce.indexOf(e),
        n = ce.slice(o + 1).concat(ce.slice(0, o));return t ? n.reverse() : n;
  }function _(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +i[1],
        p = i[2];if (!r) return e;if (0 === p.indexOf('%')) {
      var s;switch (p) {case '%p':
          s = o;break;case '%':case '%r':default:
          s = n;}var d = g(s);return d[t] / 100 * r;
    }if ('vh' === p || 'vw' === p) {
      var a;return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }return r;
  }function X(e, t, o, n) {
    var i = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(n),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(C(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1;return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return _(e, i, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1));
      });
    }), i;
  }function J(e, t) {
    var o,
        n = t.offset,
        i = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = i.split('-')[0];return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1) {
    if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
      ne = 1;break;
    }
  }var i = te && window.Promise,
      re = i ? function (e) {
    var t = !1;return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, ne));
    };
  },
      pe = te && !!(window.MSInputMethodContext && document.documentMode),
      se = te && /MSIE 10/.test(navigator.userAgent),
      de = function de(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      ae = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, o, n) {
      return o && e(t.prototype, o), n && e(t, n), t;
    };
  }(),
      le = function le(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
  },
      fe = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var n in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }return e;
  },
      me = te && /Firefox/i.test(navigator.userAgent),
      he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      ce = he.slice(3),
      ge = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
      ue = function () {
    function t(o, n) {
      var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};de(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return fe({ name: e }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();var p = this.options.eventsEnabled;p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }return ae(t, [{ key: 'update', value: function value() {
        return k.call(this);
      } }, { key: 'destroy', value: function value() {
        return B.call(this);
      } }, { key: 'enableEventListeners', value: function value() {
        return I.call(this);
      } }, { key: 'disableEventListeners', value: function value() {
        return U.call(this);
      } }]), t;
  }();return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1];if (n) {
            var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = { start: le({}, d, r[d]), end: le({}, d, r[d] + r[a] - p[a]) };e.offsets.popper = fe({}, p, l[n]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: J, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var o = t.boundariesElement || p(e.instance.popper);e.instance.reference === o && (o = p(o));var n = H('transform'),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];i.top = '', i.left = '', i[n] = '';var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);i.top = r, i.left = s, i[n] = d, t.boundaries = a;var l = t.priority,
              f = e.offsets.popper,
              m = { primary: function primary(e) {
              var o = f[e];return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o);
            }, secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = f[o];return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), le({}, o, n);
            } };return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';f = fe({}, f, m[t](e));
          }), e.offsets.popper = f, e;
        }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = Z,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, o) {
          var n;if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;var i = o.element;if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              c = a ? 'bottom' : 'right',
              u = S(i)[l];d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w['margin' + f], 10),
              E = parseFloat(w['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - y - E;return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''), n), e;
        }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              n = e.placement.split('-')[0],
              i = T(n),
              r = e.placement.split('-')[1] || '',
              p = [];switch (t.behavior) {case ge.FLIP:
              p = [n, i];break;case ge.CLOCKWISE:
              p = G(n);break;case ge.COUNTERCLOCKWISE:
              p = G(n, !0);break;default:
              p = t.behavior;}return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;n = e.placement.split('-')[0], i = T(n);var a = e.offsets.popper,
                l = e.offsets.reference,
                f = Z,
                m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                w = -1 !== ['top', 'bottom'].indexOf(n),
                y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);(m || b || y) && (e.flipped = !0, (m || b) && (n = p[d + 1]), y && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'));
          }), e;
        }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;var t = e.offsets.reference,
              o = C(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = C(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = { position: i.position },
              h = q(e, 2 > window.devicePixelRatio || !me),
              c = 'bottom' === o ? 'top' : 'bottom',
              g = 'right' === n ? 'left' : 'right',
              b = H('transform');if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';else {
            var w = 'bottom' == c ? -1 : 1,
                y = 'right' == g ? -1 : 1;m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g;
          }var E = { "x-placement": e.placement };return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
              p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);return t.setAttribute('x-placement', p), j(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o;
        }, gpuAcceleration: void 0 } } }, ue;
});
//# sourceMappingURL=popper.min.js.map
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

  template.innerHTML = ' \n    <style>\n:host .gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:em(16);cursor:pointer;border-radius:22px;position:relative;margin:12px}:host .gr-btn:hover{color:#252525;border:1px solid #252525}:host .gr-btn:focus{outline:0}:host .gr-btn:focus:after{border:2px solid #1977d4;border-radius:22px;content:"";min-width:-webkit-calc(100% + 10px);min-width:calc(100% + 10px);padding:20px 24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:-5px;left:-5px;overflow:visible}:host .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}:host .gr-btn.primary:hover{color:#fff;background-color:#035f79}:host .gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}:host .gr-btn.attention:hover{background-color:#f7aa00}:host .gr-btn.small{min-width:128px;padding:7px 20px;font-size:em(14)}:host .gr-btn.small:focus:after{padding:18px 21px}:host .gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:em(16)}:host .gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}:host .gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}:host .gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}:host .gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}:host .gr-btn.no-border,:host .gr-btn.no-border:hover{border:0}:host .gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}:host .icon-18{width:18px;height:18px}:host .hidden{display:none!important}:host .coachmark-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;width:280px;z-index:1000}:host .coachmark{position:relative;background-color:#caefee;border-radius:2px;width:280px;-webkit-box-shadow:0 3px 7px 0 rgba(0,0,0,.25);box-shadow:0 3px 7px 0 rgba(0,0,0,.25);font-family:Open Sans,Calibri,Tahoma,sans-serif}:host .coachmark.informational .content{background-color:#faebc3}:host .coachmark.generic .content{background-color:#fff}:host .coachmark.generic .coach-link{color:#047a9c}:host .coachmark.bottom-center:after{bottom:-8px;-webkit-filter:drop-shadow(0 2px 5px #000);filter:drop-shadow(0 2px 5px #000);left:-webkit-calc(50% - 8px);left:calc(50% - 8px);-webkit-transform:rotate(180deg);transform:rotate(180deg);z-index:1}:host .coachmark.bottom-center:after,:host .coachmark.top-right:after{border-bottom:8px solid #caefee;border-left:8px solid transparent;border-right:8px solid transparent;content:"";height:0;position:absolute;width:0}:host .coachmark.top-right:after{right:32px;top:-8px;z-index:-1}:host .coachmark.bottom-left:after{border-bottom:8px solid #caefee;border-left:8px solid transparent;border-right:8px solid transparent;bottom:-8px;content:"";-webkit-filter:drop-shadow(0 2px 5px #000);filter:drop-shadow(0 2px 5px #000);height:0;left:32px;position:absolute;-webkit-transform:rotate(180deg);transform:rotate(180deg);width:0;z-index:1}:host .coachmark .title-container .pe-label{font-size:14px;margin:0;font-weight:600}:host .coachmark .content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#caefee;border-radius:2px;color:#252525;padding:20px 24px;position:relative;z-index:2;font-size:14px}:host .coachmark .content p{margin-top:0;line-height:1.5}:host .coachmark .content .title-container{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:.25em}:host .coachmark .coach-link,:host .coachmark .content .title-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}:host .coachmark .coach-link{color:#252525;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-top:1.75em;font-size:14px}:host .coachmark .coach-link:hover{text-decoration:none}:host .coachmark .coach-link:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}:host .coachmark button{background:none;border:none;text-decoration:underline;cursor:pointer}:host .coachmark button.dismiss:not(.coach-link){right:-18px;position:relative;top:-14px;margin:0;min-width:auto;padding:8px 12px;border:0}:host .gr-btn:focus:after{min-width:auto!important}:host .coachmark button.dismiss:not(.coach-link) svg{width:18px;height:18px}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}:host .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){:host .animated{-webkit-animation:unset!important;animation:unset!important}}:host .animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}:host .animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}.link-anchor{position:relative;width:0;font-size:.8em;opacity:0;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.anchor-wrapper{border:none}.anchor-wrapper:hover .link-anchor{opacity:1}section h1[id]:focus,section h2[id]:focus,section h3[id]:focus,section h4[id]:focus,section h5[id]:focus{outline:0}p.thin{font-weight:100;margin:0;line-height:1.2em}p.bold{font-weight:900;margin:-5px 0 0}.rel{width:30%;margin:0 auto;position:relative;text-align:center;padding:20px;border:dotted #fff}.popper,.tooltip{position:absolute;color:#000}.style5 .tooltip{background:#1e252b;color:#fff;max-width:200px;width:auto;font-size:.8rem;padding:.5em 1em}.popper .popper__arrow,.tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;border-color:#caefee}.popper .popper__arrow.informational{border-color:#faebc3}.popper .popper__arrow.generic{border-color:#fff}.style5 .tooltip .tooltip-arrow{border-color:#1e252b}.popper[x-placement^=top],.tooltip[x-placement^=top]{margin-bottom:5px}.popper[x-placement^=top] .popper__arrow,.tooltip[x-placement^=top] .tooltip-arrow{border-width:13px 13px 0;border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent;bottom:-13px;left:-webkit-calc(50% - 5px);left:calc(50% - 5px);margin-top:0;margin-bottom:0;-webkit-filter:drop-shadow(0 -1px 5px #222);filter:drop-shadow(0 -1px 5px #222)}.popper[x-placement^=bottom],.tooltip[x-placement^=bottom]{margin-top:5px}.popper[x-placement^=bottom] .popper__arrow,.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 13px 13px;border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;top:-13px;-webkit-filter:drop-shadow(-1px -1px 1px #ddd);filter:drop-shadow(-1px -1px 1px #ddd);left:-webkit-calc(50% - 5px);left:calc(50% - 5px);margin-top:0;margin-bottom:0}.popper[x-placement^=right],.tooltip[x-placement^=right]{margin-left:5px}.popper[x-placement^=right] .popper__arrow,.tooltip[x-placement^=right] .tooltip-arrow{border-width:13px 13px 13px 0;border-left-color:transparent;border-top-color:transparent;border-bottom-color:transparent;left:-13px;top:-webkit-calc(50% - 5px);top:calc(50% - 5px);margin-left:0;margin-right:0;-webkit-filter:drop-shadow(-1px -1px 1px #ddd);filter:drop-shadow(-1px -1px 1px #ddd)}.popper[x-placement^=left],.tooltip[x-placement^=left]{margin-right:5px}.popper[x-placement^=left] .popper__arrow,.tooltip[x-placement^=left] .tooltip-arrow{border-width:13px 0 13px 13px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;right:-13px;top:-webkit-calc(50% - 5px);top:calc(50% - 5px);margin-left:0;margin-right:0;-webkit-filter:drop-shadow(1px 2px 0 #ddd);filter:drop-shadow(1px 2px 0 #ddd)}.no-arrow .popper__arrow{display:none!important}\n</style>\n\n    <div role="dialog" aria-haspopup="dialog" aria-labelledby="coachmark-title" aria-describedby="coachmark-body" class="coachmark-container popper animated animateIn">\n      <div class="coachmark" aria-haspopup="dialog">\n        <div class="content">\n          <div class="title-container">\n            <h3 id="coachmark-title" class="pe-label pe-label--bold"></h3>\n            \t<button id="close" class="gr-btn icon-btn-18 dismiss" aria-label="Close coachmark">\n        ' + closeIcon + '\n\t</button>\n\t\n          </div>\n          <p id="coachmark-body" class="pe-label"></p>\n           <button id="gotIt" class="coach-link dismiss hidden" href="#">Got it</button>\n        </div> \n      </div>\n      <div class="popper__arrow hidden" x-arrow></div>\n    </div>\n    </div>\n';

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
        this.closeBtn.focus({ preventScroll: true });
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
        trigger.focus({ preventScroll: true });
      }
    }]);

    return Coachmark;
  }(HTMLElement);

  customElements.define('pearson-coachmark', Coachmark);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  w['moment-range'].extendMoment(moment);
  // Create a template element
  var datepicker = doc.createElement('template'),
      calendar = doc.createElement('template'),
      row = doc.createElement('template'),
      dateTemplate = doc.createElement('template'),
      dateIcon = '\n\n  \n                  <svg focusable="false" class="icon-18" aria-hidden="false" title="close coachmark" role="img" >\n\t<path d="M14.4146471,2 L14.875,2 C16.0486051,2 17,2.95139491 17,4.125 L17,14.875 C17,16.0486051 16.0486051,17 14.875,17 L3.125,17 C1.95139491,17 1,16.0486051 1,14.875 L1,4.125 C1,2.95139491 1.95139491,2 3.125,2 L3.58535285,2 C3.79127106,1.41740381 4.34689059,1 5,1 C5.65310941,1 6.20872894,1.41740381 6.41464715,2 L11.5853529,2 C11.7912711,1.41740381 12.3468906,1 13,1 C13.6531094,1 14.2087289,1.41740381 14.4146471,2 Z M15.25,6.25 L15.25,4.125 C15.25,3.91789322 15.0821068,3.75 14.875,3.75 L3.125,3.75 C2.91789322,3.75 2.75,3.91789322 2.75,4.125 L2.75,6.25 L15.25,6.25 Z M15.25,8 L2.75,8 L2.75,14.875 C2.75,15.0821068 2.91789322,15.25 3.125,15.25 L14.875,15.25 C15.0821068,15.25 15.25,15.0821068 15.25,14.875 L15.25,8 Z"></path>\n    <path d="M12.5,12 L13.5,12 C13.7761424,12 14,12.2238576 14,12.5 L14,13.5 C14,13.7761424 13.7761424,14 13.5,14 L12.5,14 C12.2238576,14 12,13.7761424 12,13.5 L12,12.5 C12,12.2238576 12.2238576,12 12.5,12 Z"></path>\n    <path d="M12.5,9 L13.5,9 C13.7761424,9 14,9.22385763 14,9.5 L14,10.5 C14,10.7761424 13.7761424,11 13.5,11 L12.5,11 C12.2238576,11 12,10.7761424 12,10.5 L12,9.5 C12,9.22385763 12.2238576,9 12.5,9 Z"></path>\n    <path d="M9.5,12 L10.5,12 C10.7761424,12 11,12.2238576 11,12.5 L11,13.5 C11,13.7761424 10.7761424,14 10.5,14 L9.5,14 C9.22385763,14 9,13.7761424 9,13.5 L9,12.5 C9,12.2238576 9.22385763,12 9.5,12 Z"></path>\n    <path d="M9.5,9 L10.5,9 C10.7761424,9 11,9.22385763 11,9.5 L11,10.5 C11,10.7761424 10.7761424,11 10.5,11 L9.5,11 C9.22385763,11 9,10.7761424 9,10.5 L9,9.5 C9,9.22385763 9.22385763,9 9.5,9 Z"></path>\n    <path d="M6.5,12 L7.5,12 C7.77614237,12 8,12.2238576 8,12.5 L8,13.5 C8,13.7761424 7.77614237,14 7.5,14 L6.5,14 C6.22385763,14 6,13.7761424 6,13.5 L6,12.5 C6,12.2238576 6.22385763,12 6.5,12 Z"></path>\n       </svg>\n    ',
      calendarIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M4 3L5 3 5 1 4 1 4 3zM13 3L14 3 14 1 13 1 13 3zM18 5L18 1.5C18 1.224 17.776 1 17.5 1L15 1 15 .5C15 .224 14.776 0 14.5 0L12.5 0C12.224 0 12 .224 12 .5L12 1 6 1 6 .5C6 .224 5.776 0 5.5 0L3.5 0C3.224 0 3 .224 3 .5L3 1 .5 1C.224 1 0 1.224 0 1.5L0 5 18 5zM14.0762 15L10.8262 15C10.5502 15 10.3262 14.776 10.3262 14.5 10.3262 14.224 10.5502 14 10.8262 14L12.0002 14 12.0002 9.707 11.3752 10.331C11.1802 10.526 10.8632 10.526 10.6682 10.331 10.4722 10.136 10.4722 9.819 10.6682 9.624L12.1462 8.146C12.2892 8.003 12.5062 7.96 12.6912 8.038 12.8782 8.116 13.0002 8.298 13.0002 8.5L13.0002 14 14.0762 14C14.3522 14 14.5762 14.224 14.5762 14.5 14.5762 14.776 14.3522 15 14.0762 15L14.0762 15zM9.0002 14.5C9.0002 14.776 8.7762 15 8.5002 15L4.5002 15C4.2232 15 4.0002 14.776 4.0002 14.5L4.0002 13.5C4.0002 13.224 4.2232 13 4.5002 13 4.7762 13 5.0002 13.224 5.0002 13.5L5.0002 14 8.0002 14 8.0002 12 5.6992 12C5.4232 12 5.1992 11.776 5.1992 11.5 5.1992 11.224 5.4232 11 5.6992 11L8.0002 11 8.0002 9 5.0002 9 5.0002 9.5C5.0002 9.776 4.7762 10 4.5002 10 4.2232 10 4.0002 9.776 4.0002 9.5L4.0002 8.5C4.0002 8.224 4.2232 8 4.5002 8L8.5002 8C8.7762 8 9.0002 8.224 9.0002 8.5L9.0002 14.5zM.0002 6L.0002 17.5C.0002 17.776.2232 18 .5002 18L17.5002 18C17.7762 18 18.0002 17.776 18.0002 17.5L18.0002 6 .0002 6z\'/%3e%3c/svg%3e',
      prevArrowIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M13.749,17.6606035 C14.112,17.2486035 14.076,16.6116035 13.662,16.2436035 L5.509,8.9996035 L13.662,1.7566035 C14.077,1.3896035 14.113,0.752603504 13.749,0.339603504 C13.383,-0.0763964961 12.751,-0.115396496 12.338,0.252603504 L3.338,8.2476035 C3.123,8.4376035 3,8.7126035 3,8.9996035 C3,9.2876035 3.123,9.5616035 3.338,9.7526035 L12.338,17.7476035 C12.751,18.1156035 13.383,18.0766035 13.749,17.6606035\'%3e%3c/path%3e%3c/svg%3e',
      nextArrowIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M4.2506,17.6606035 C3.8876,17.2486035 3.9236,16.6116035 4.3376,16.2436035 L12.4906,8.9996035 L4.3376,1.7566035 C3.9226,1.3896035 3.8866,0.752603504 4.2506,0.339603504 C4.6166,-0.0763964961 5.2486,-0.115396496 5.6616,0.252603504 L14.6616,8.2476035 C14.8766,8.4376035 14.9996,8.7126035 14.9996,8.9996035 C14.9996,9.2876035 14.8766,9.5616035 14.6616,9.7526035 L5.6616,17.7476035 C5.2486,18.1156035 4.6166,18.0766035 4.2506,17.6606035\'%3e%3c/path%3e%3c/svg%3e',
      warningIcon = '   \n  <svg     \n    aria-hidden="true"\n    focusable="false" \n    style="width:18px;height:18px;fill:currentColor"  \n  >  \n    <path d="M9.99994044,10.5 C9.99994044,10.776 9.77594044,11 9.49994044,11 L8.49994044,11 C8.22394044,11 7.99994044,10.776 7.99994044,10.5 L7.99994044,7.5 C7.99994044,7.224 8.22394044,7 8.49994044,7 L9.49994044,7 C9.77594044,7 9.99994044,7.224 9.99994044,7.5 L9.99994044,10.5 Z M9.99994044,13.5 C9.99994044,13.776 9.77594044,14 9.49994044,14 L8.49994044,14 C8.22394044,14 7.99994044,13.776 7.99994044,13.5 L7.99994044,12.5 C7.99994044,12.224 8.22394044,12 8.49994044,12 L9.49994044,12 C9.77594044,12 9.99994044,12.224 9.99994044,12.5 L9.99994044,13.5 Z M15.9460591,15.275 L9.44500379,2.276 C9.26100222,1.908 8.73899778,1.908 8.55499621,2.276 L2.05394089,15.275 C1.88693947,15.607 2.12794152,16 2.49894468,16 L15.5010553,16 C15.8720585,16 16.1130605,15.607 15.9460591,15.275 Z"/>\n</svg>';

  datepicker.innerHTML = ' \n<style>\n\n@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}@media (max-width:480px){.animateIn{-webkit-animation-name:slideInUp;animation-name:slideInUp}}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (max-width:480px){.animateOut{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}}\n:host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Open Sans,Calibri,Tahoma,sans-serif}:host{position:relative;display:inline-block;max-width:400px;width:100%;color:#252525}input[disabled]{color:#c7c7c7;background-color:#e9e9e9;cursor:not-allowed}input[readonly]{border-color:transparent;background-color:transparent}ul{list-style-type:none;padding:0;margin:0}svg{vertical-align:top}.gr-icon{position:absolute;color:#6a7070;pointer-events:none}.gr-datepicker-container{position:relative;min-width:150px;max-width:322px}@media (-ms-high-contrast:none){.gr-datepicker-container{max-width:362px}}.gr-datepicker-container .datepicker{position:relative;margin-bottom:6px}.gr-datepicker-container .datepicker .gr-btn{bottom:-webkit-calc(50% - 17px);bottom:calc(50% - 17px);color:#6a7070;position:absolute;right:0;margin:0;border-radius:4px}@media (-ms-high-contrast:none){.gr-datepicker-container .datepicker .gr-btn{bottom:-webkit-calc(50% - 12px)!important;bottom:calc(50% - 12px)!important}}.gr-datepicker-container .datepicker .gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 0 #fff,0 0 0 2px #1977d4;box-shadow:0 0 0 0 #fff,0 0 0 2px #1977d4}.gr-datepicker-container .datepicker svg{fill:#6a7070}.gr-datepicker-container .gr-calendar-container{position:absolute}.gr-datepicker-container.error .gr-label{color:#db0020}.gr-datepicker-container.error .gr-input{border-color:#db0020}#inputAriaId{display:none}.error #inputAriaId{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.gr-calendar-container{-webkit-box-sizing:content-box;box-sizing:content-box;min-height:284px;color:#252525;padding:16px 20px 20px;z-index:1;border:1px solid #c7c7c7;background-color:#fff;border-radius:5px}@media (-ms-high-contrast:none){.gr-calendar-container{width:320px}}.gr-calendar-container fieldset{margin:0;border:0;padding:0}.gr-calendar-container fieldset legend{padding:8px;text-align:left;margin-bottom:8px;width:-webkit-calc(100% - 84px);width:calc(100% - 84px);display:inline-block;float:left;font-size:18px}.gr-calendar-container .actions{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:80px}.gr-calendar-container .actions .gr-btn{margin:0;padding:0;height:40px;width:40px;color:#6a7070}.gr-calendar-container .actions .gr-btn:hover{color:#252525}.gr-calendar-container .actions .gr-btn:focus{color:#252525;outline:2px solid #1977d4;outline-offset:2px}.gr-calendar-container .weekdays div{height:40px;color:#6a7070;line-height:40px;font-size:12px}.gr-calendar-container .row{display:-ms-grid;display:grid;-ms-grid-columns:(40px)[7];grid-template-columns:repeat(7,40px);clear:both}.gr-calendar-container abbr{text-decoration:none}.gr-calendar-container .cell{display:inline-block;vertical-align:top;text-align:center;width:40px;height:40px}.gr-calendar-container .cell.currentDate-box{width:36px;height:36px;margin:1px;line-height:36px;border-radius:0;padding:0;border:1px solid #c7c7c7;background:transparent}.gr-calendar-container .cell.currentDate-box .date-selector{margin:2px}.gr-calendar-container .cell button{background:none;padding:0;border:0;position:relative;cursor:pointer;display:block;height:32px;width:32px;margin:4px;line-height:32px;border-radius:50%;font-size:14px}.gr-calendar-container .cell button.selected{font-weight:600;color:#fff;background-color:#6a7070}.gr-calendar-container .cell button:focus{outline:2px solid #1977d4;outline-offset:2px}.gr-calendar-container .date-selector{height:32px;width:32px;margin:4px;line-height:32px;border-radius:16px}.gr-calendar-container .date.past{height:40px;line-height:38px}.gr-calendar-container .past .date-selector{color:#c7c7c7;cursor:not-allowed}.gr-calendar-container .secondary-date{border:1px solid #c7c7c7}.gr-calendar-container.inverse{color:#fff;background-color:#005a70;border:1px solid #005a70}.gr-calendar-container.inverse .actions button,.gr-calendar-container.inverse .cell,.gr-calendar-container.inverse .date-selector,.gr-calendar-container.inverse .title,.gr-calendar-container.inverse .weekdays div{color:#fff}.gr-calendar-container.inverse .actions button:focus,.gr-calendar-container.inverse .actions button:hover{color:#c7c7c7}.gr-calendar-container.inverse .date .selected{color:#252525;background-color:#fff}.gr-calendar-container.inverse .past .date-selector{color:#047a9c;cursor:not-allowed}.gr-btn{padding:0;background-color:transparent;border:0}.date-selector{background:none}.date-selector:hover{background-color:#e9e9e9;color:#252525;cursor:pointer}.date-selector.selected{background-color:#6a7070;color:#fff}.currentDate-box{border:1px solid #c7c7c7}@media (-ms-high-contrast:none){.dates>.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}@media (-ms-high-contrast:none){.gr-calendar-container .row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}*{font-family:Open Sans}html{font-size:14px}*,html{-webkit-box-sizing:border-box;box-sizing:border-box}abbr{text-decoration:none}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}svg{fill:currentColor}.gr-h1{font-size:24px;line-height:28px}.gr-h1,.gr-h2{font-weight:400;margin-top:0}.gr-h2{font-size:20px;line-height:26px}.gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}.gr-meta{font-size:12px;line-height:12px;color:#6a7070}.gr-semi-bold{font-weight:600}.gr-font-large{font-size:16px;line-height:24px}.gr-font-normal{font-size:14px;line-height:20px}.gr-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:16px;cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:14px}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:16px}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.gr-input{display:block;margin:4px 0;padding:0 12px;height:36px;color:#252525;border:1px solid #c7c7c7;background:#fff;border-radius:4px;font-size:14px;width:100%;max-width:100%}.gr-input.error{border-color:#db0020}.gr-input[aria-invalid=true]{border-color:#db0020;margin-bottom:0}.gr-input[aria-invalid=true]:focus{-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #db0020;box-shadow:0 0 0 2px #fff,0 0 0 4px #db0020}.gr-input:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.gr-input:disabled{color:#c7c7c7;background-color:#e9e9e9}.gr-input:-moz-read-only{border:0}.gr-input:read-only{border:0}.gr-label{font-size:12px;line-height:16px;color:#6a7070;display:block;margin-bottom:4px}.no-border{border:0}.icon-18{width:18px;height:18px}.icon-24{width:24px;height:24px}button:focus{outline:2px solid #1977d4;outline-offset:2px}.error-msg,.gr-meta.error{color:#db0020;padding-top:3px;font-size:12px;line-height:16px;margin-bottom:0;margin-top:0}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}@media (max-width:480px){.animateIn{-webkit-animation-name:slideInUp;animation-name:slideInUp}}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (max-width:480px){.animateOut{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}}\n</style>      \n    <div class="gr-datepicker-container">\n        <label class="gr-label" for="datepicker" id="datepicker-label">Select date (mm/dd/yyyy)</label> \n        <div class="datepicker">\n            <input type="text" class="gr-input" id="datepicker" aria-expanded="false">\n              <button class="gr-btn icon-btn-18 open-calendar" aria-label="open calendar">\n                             ' + dateIcon + '\n              </button>\n        </div> \n        <p id="inputAriaId" class="error-msg">' + warningIcon + ' Enter a valid date.</p>\n    </div>\n';

  calendar.innerHTML = '\n        <section class="gr-calendar-container animated animateIn">\n            <div class="calendar">\n                <fieldset class="pe-inner">\n                    <legend class="gr-h3" id="month"></legend>\n                    <div class="actions">\n                        <button class="gr-btn icon-btn-24 previous" aria-label="Previous month">\n                           <img src="' + prevArrowIcon + '" aria-hidden="true"/>\n                        </button>\n                        <button class="gr-btn icon-btn-24 next" aria-label="Next month">\n                            <img src="' + nextArrowIcon + '" aria-hidden="true"/>\n                        </button>\n                    </div>\n                    <div class="row weekdays">\n                        <div class="cell dayNames">\n                            <abbr title="Sunday">S</abbr>\n                        </div>\n                        <div class="cell dayNames">\n                            <abbr title="Monday">M</abbr>\n                        </div>\n                        <div class="cell dayNames">\n                            <abbr title="Tuesday">T</abbr>\n                        </div>\n                        <div class="cell dayNames">\n                            <abbr title="Wednesday">W</abbr>\n                        </div>\n                        <div class="cell dayNames">\n                            <abbr title="Thursday">T</abbr>\n                        </div>\n                        <div class="cell dayNames">\n                            <abbr title="Friday">F</abbr>\n                        </div>\n                        <div class="cell dayNames">\n                            <abbr title="Saturday">S</abbr>\n                        </div>\n                    </div>\n                    <div class="dates"></div>\n                </fieldset>\n            </div>\n        </section>\n';

  row.innerHTML = '\n<div class="row"></div>\n';

  dateTemplate.innerHTML = '\n <div class="cell date">\n      <button class="date-selector" data-date="11/01/2018" aria-label="" aria-pressed="false">1</button>\n  </div>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(datepicker, 'pearson-datepicker');

  function getFocusableElements(node) {
    var buttons = node.querySelectorAll('button:not(:disabled)'),
        data = {};
    data.elements = buttons;
    data.firstElement = data.elements[0];
    data.lastElement = data.elements[data.elements.length - 1];
    return data;
  }

  function validateDate(testdate) {
    var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return date_regex.test(testdate);
  }

  // helpers

  var Datepicker = function (_HTMLElement) {
    _inherits(Datepicker, _HTMLElement);

    _createClass(Datepicker, [{
      key: 'returnDateData',


      // this data is fed to the calendar data function and is used to build the calendar object
      value: function returnDateData(date, type) {
        // return the year to populate calendar
        if (this.year !== null && type === undefined) {
          date.year = parseInt(this.year, 10);
        } else if (type !== undefined) {
          date.year = date.year;
        } else {
          date.year = parseInt(moment().format('Y'), 10);
        }

        // return the month to populate calendar
        if (this.month !== null && type === undefined) {
          date.month = parseInt(this.month - 1, 10);
        } else if (type !== undefined) {
          if (type === 'add') {
            date.month = date.month + 1;
            if (date.month === 12) {
              date.month = 0;
              date.year = date.year + 1;
            }
          } else if (type === 'subtract') {
            // date.month = moment().subtract(date.month, 'month').month();
            date.month = date.month - 1;
            if (date.month === -1) {
              date.month = 11;
              date.year = date.year - 1;
            }
          }
        } else {
          date.month = moment().month();
        }

        // return the day to populate calendar
        if (this.day !== null) {
          date.day = this.day;
        } else {
          date.day = moment().format('D');
        }
        return date;
      }

      // builds the calendar object to power the UI

    }, {
      key: 'returnCalendarData',
      value: function returnCalendarData(returnData) {
        var data = returnData,
            date = moment([data.year, data.month]),
            firstDay = moment(date).startOf('M').day('Sunday'),
            endDay = moment(date).endOf('M').day('Saturday'),
            monthRange = moment.range(firstDay, endDay),
            weeks = [],
            calendar = [],
            build = [],
            calendarData = {};

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = monthRange.by('days')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var day = _step.value;

            var number = void 0;
            if (weeks.indexOf(day.week()) === -1 && weeks.indexOf(53) === -1) {
              if (data.month === 11 && day.week() === 1) {
                number = 53;
              } else {
                number = day.week();
              }
              weeks.push(number);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        weeks.forEach(function (week, index) {
          var weeknumber = weeks[index];
          var firstWeekDay = moment(firstDay).week(weeknumber).day('Sunday');
          if (firstWeekDay.isBefore(firstDay)) {
            firstWeekDay = firstDay;
          }
          var lastWeekDay = moment(endDay).year(data.year).week(weeknumber).day('Saturday');
          if (lastWeekDay.isAfter(endDay)) {
            lastWeekDay = endDay;
          }
          var weekRange = moment.range(firstWeekDay, lastWeekDay);
          calendar.push(weekRange);
        });

        calendar.forEach(function (range) {
          var weeks = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = range.by('days')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _day = _step2.value;

              weeks.push(_day);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          build.push(weeks);
        });
        calendarData.month = moment(date).startOf('M').format("MMMM");
        calendarData.year = data.year;
        calendarData.weeks = build;
        return calendarData;
      }

      // builds and renders next month

    }, {
      key: 'nextMonth',
      value: function nextMonth() {
        this.data = this.returnDateData(this.data, 'add');
        this.renderCalendar(this.data);
      }

      // builds and renders previous month

    }, {
      key: 'prevMonth',
      value: function prevMonth() {
        this.data = this.returnDateData(this.data, 'subtract');
        this.renderCalendar(this.data);
      }

      // opens the calendar

    }, {
      key: 'openCalendar',
      value: function openCalendar() {
        this.openState = 'true';
        this.renderCalendar(this.data);
        this.focusOnOpen();
      }

      // closes the calendar

    }, {
      key: 'closeCalendar',
      value: function closeCalendar() {
        this.openState = 'false';
        this.openBtn.focus();
      }

      // builds the calendar template

    }, {
      key: 'buildCalendarContainer',
      value: function buildCalendarContainer() {
        var calendarTemplate = calendar.content.cloneNode(true),
            nextBtn = calendarTemplate.querySelector('.next'),
            prevBtn = calendarTemplate.querySelector('.previous');

        nextBtn.addEventListener('click', this.nextMonth, false);
        prevBtn.addEventListener('click', this.prevMonth, false);

        return calendarTemplate;
      }

      // populates and renders the calendar

    }, {
      key: 'renderCalendar',
      value: function renderCalendar(dateData) {
        var _this2 = this;

        var data = this.returnCalendarData(dateData),
            rowTarget = this.shadowRoot.querySelector('.dates');

        rowTarget.innerHTML = '';

        data.weeks.forEach(function (week, index2) {
          var rowTemplate = row.content.cloneNode(true),
              rows = rowTemplate.querySelector('.row');

          week.forEach(function (days, index) {
            var cellTemplate = dateTemplate.content.cloneNode(true),
                button = cellTemplate.querySelector('button');
            if (days.format('MMMM') === data.month) {
              button.innerHTML = days.format('D');
              button.setAttribute('aria-label', days.format('dddd, MMMM Do YYYY'));
              button.setAttribute('data-date', days.format('L'));
              button.setAttribute('data-index', days.format('D'));
              button.addEventListener('click', function (event) {
                var prevSelected = rowTarget.getElementsByClassName('selected')[0];
                if (prevSelected !== undefined) {
                  prevSelected.classList.remove('selected');
                  prevSelected.setAttribute('aria-pressed', false);
                }
                _this2.selectedState = event.target.getAttribute('data-date');
                event.target.setAttribute('aria-pressed', true);
                event.target.classList.add('selected');
                _this2.invalid = validateDate(_this2.input.value);
                _this2.closeCalendar();
              });
            } else {
              button.remove();
            }

            if (days.format('MMMM') === moment().format('MMMM') && moment().format('D') === days.format('D') && days.format('YYYY') === moment().format('YYYY')) {
              button.parentNode.classList.add('currentDate-box');
              button.setAttribute('aria-label', 'Today ' + days.format('dddd, MMMM Do YYYY'));
            }
            rows.appendChild(cellTemplate);
          });
          rowTarget.appendChild(rowTemplate);
        });
        this.monthYearState = data.month + ' ' + data.year;
        var selectedNode = this.shadowRoot.querySelector('[data-date="' + this.selected + '"]');
        if (selectedNode !== null) {
          selectedNode.classList.add('selected');
        }
      }

      // focus management when calendar is opened

    }, {
      key: 'focusOnOpen',
      value: function focusOnOpen() {
        if (this.selected === null) {
          var currentNode = this.shadowRoot.querySelector('.currentDate-box button');
          if (currentNode !== null) {
            currentNode.focus();
            currentNode.setAttribute('aria-pressed', true);
          }
        } else {
          var selectedNode = this.shadowRoot.querySelector('[data-date="' + this.selected + '"]');
          if (selectedNode !== null) {
            selectedNode.classList.add('selected');
            selectedNode.focus();
            selectedNode.setAttribute('aria-pressed', true);
          }
        }
      }
    }, {
      key: 'open',
      get: function get() {
        return this.getAttribute('open');
      }
    }, {
      key: 'year',
      get: function get() {
        return this.getAttribute('year');
      }
    }, {
      key: 'month',
      get: function get() {
        return this.getAttribute('month');
      }
    }, {
      key: 'day',
      get: function get() {
        return this.getAttribute('day');
      }
    }, {
      key: 'selected',
      get: function get() {
        return this.getAttribute('value');
      }
    }, {
      key: 'monthYearState',
      set: function set(str) {
        this.shadowRoot.querySelector('legend').innerHTML = str;
      }
    }, {
      key: 'openState',
      set: function set(bool) {
        this.setAttribute('open', bool);
      }
    }, {
      key: 'invalid',
      set: function set(bool) {
        var datepicker = this.shadowRoot.querySelector('.gr-datepicker-container'),
            input = datepicker.querySelector('input');
        if (bool === false) {
          datepicker.classList.add('error');
        } else {
          this.selectedState = input.value;
          this.data.month = parseInt(input.value.substring(0, 2) - 1, 10);
          this.data.year = parseInt(input.value.substring(6, 10), 10);
          this.data.day = input.value.substring(3, 5);
          console.log(this.data);
          datepicker.classList.remove('error');
        }
      }
    }, {
      key: 'selectedState',
      set: function set(selected) {
        if (selected !== null) {
          var input = this.shadowRoot.querySelector('input');
          this.setAttribute('value', selected);
          input.value = this.selected;
          this.data.month = parseInt(this.selected.substring(0, 2) - 1, 10);
          this.data.year = parseInt(this.selected.substring(6, 10), 10);
          this.data.day = this.selected.substring(3, 5);
        }
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['open', 'year', 'month', 'day', 'value'];
      }
    }]);

    function Datepicker() {
      _classCallCheck(this, Datepicker);

      var _this = _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this));

      _this.attachShadow({
        mode: 'open'
      });
      var clone = datepicker.content.cloneNode(true);
      _this.openBtn = clone.querySelector('.open-calendar');
      _this.datepicker = clone.querySelector('.gr-datepicker-container');
      _this.input = clone.querySelector('input');
      _this.label = clone.querySelector('#datepicker-label');
      _this.data = {};
      /** After all this, we can append our clone to the shadowRoot */
      _this.shadowRoot.appendChild(clone);

      _this.returnDateData = _this.returnDateData.bind(_this);
      _this.buildCalendarContainer = _this.buildCalendarContainer.bind(_this);
      _this.returnCalendarData = _this.returnCalendarData.bind(_this);
      _this.nextMonth = _this.nextMonth.bind(_this);
      _this.prevMonth = _this.prevMonth.bind(_this);
      _this.renderCalendar = _this.renderCalendar.bind(_this);
      _this.closeCalendar = _this.closeCalendar.bind(_this);
      _this.openCalendar = _this.openCalendar.bind(_this);
      _this.focusOnOpen = _this.focusOnOpen.bind(_this);
      return _this;
    }

    _createClass(Datepicker, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this3 = this;

        var labelText = this.getAttribute('label') || 'Select date (mm/dd/yyyy)';

        this.label.textContent = '' + labelText;

        this.setAttribute('open', false);
        this.data = this.returnDateData(this.data);

        this.selectedState = this.selected;
        // opens calendar when down arrow is pushed
        this.input.addEventListener('keydown', function (event) {
          switch (event.keyCode) {
            case 40:
              if (_this3.open === 'false') {
                _this3.openCalendar();
              }
              break;
          }
        });

        this.input.addEventListener('blur', function (event) {
          if (_this3.input.value.length > 0) {
            _this3.invalid = validateDate(_this3.input.value);
          }
        });

        // opens calendar when button is pressed
        this.openBtn.addEventListener('click', function (event) {
          if (_this3.open === 'false') {
            _this3.openCalendar();
          } else {
            _this3.closeCalendar();
          }
        });

        doc.body.addEventListener('click', function (event) {
          console.log(event.target);
        });
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _this4 = this;

        var calendarContainer = this.datepicker.querySelector('.gr-calendar-container'),
            input = this.datepicker.querySelector('input');
        if (name === 'open') {
          if (oldValue !== newValue) {
            if (newValue === 'true') {
              input.setAttribute('aria-expanded', true);
              var calendarTemplate = this.buildCalendarContainer();
              var dates = calendarTemplate.querySelector('.dates');
              this.datepicker.appendChild(calendarTemplate);
              this.monthYearState = moment().month(this.data.month).format('MMMM') + ' ' + this.data.year;

              // closes the calendar if outside the calendar target
              doc.addEventListener('click', function (event) {
                if (_this4.open === 'true') {
                  var target = event.target;
                  do {
                    if (target === _this4) {
                      return;
                    }
                    target = target.parentNode;
                  } while (target);
                  _this4.closeCalendar();
                } else {
                  return false;
                }
              }, true);

              // closes the calendar on escape
              doc.addEventListener('keydown', function (event) {
                switch (event.keyCode) {
                  case 27:
                    _this4.closeCalendar();
                    break;
                }
              });

              // keyboard navigation for accessibility
              dates.addEventListener('keydown', function (event) {
                var nextItem = parseInt(event.target.getAttribute('data-index')),
                    prevItem = parseInt(event.target.getAttribute('data-index')) - 2,
                    nextWeek = parseInt(event.target.getAttribute('data-index')) + 6,
                    prevWeek = parseInt(event.target.getAttribute('data-index')) - 8,
                    previousMonth = _this4.datepicker.querySelector('.previous');

                event.preventDefault();
                event.stopImmediatePropagation();
                switch (event.keyCode) {
                  case 39:
                    // right arrow
                    if (_this4.shadowRoot.activeElement === getFocusableElements(dates).lastElement) {
                      _this4.nextMonth();
                      getFocusableElements(dates).firstElement.focus();
                    } else {
                      if (getFocusableElements(dates).elements[nextItem] !== undefined) {
                        getFocusableElements(dates).elements[nextItem].focus();
                      } else {
                        return;
                      }
                    }
                    break;
                  case 37:
                    // left arrow
                    if (_this4.shadowRoot.activeElement === getFocusableElements(dates).firstElement) {
                      _this4.prevMonth();
                      getFocusableElements(dates).lastElement.focus();
                    } else {
                      if (getFocusableElements(dates).elements[prevItem] !== undefined) {
                        getFocusableElements(dates).elements[prevItem].focus();
                      } else {
                        return;
                      }
                    }
                    break;
                  case 40:
                    //arrow down
                    if (getFocusableElements(dates).elements[nextWeek] !== undefined) {
                      getFocusableElements(dates).elements[nextWeek].focus();
                    } else {
                      _this4.nextMonth();
                      getFocusableElements(dates).firstElement.focus();
                    }
                    break;
                  case 38:
                    // arrow up
                    if (getFocusableElements(dates).elements[prevWeek] !== undefined) {
                      getFocusableElements(dates).elements[prevWeek].focus();
                    } else {
                      _this4.prevMonth();
                      getFocusableElements(dates).lastElement.focus();
                    }
                    break;
                  case 13:
                    // enter
                    event.target.click();
                    break;
                  case 32:
                    // space
                    event.target.click();
                    break;
                  case 33:
                    _this4.prevMonth();
                    getFocusableElements(dates).lastElement.focus();
                    break;
                  case 34:
                    _this4.nextMonth();
                    getFocusableElements(dates).firstElement.focus();
                    break;
                  case 35:
                    getFocusableElements(dates).lastElement.focus();
                    break;
                  case 36:
                    getFocusableElements(dates).firstElement.focus();
                    break;
                  case 27:
                    _this4.closeCalendar();
                    break;
                  case 9:
                    previousMonth.focus();
                    break;
                }
              });
            }
            if (newValue === 'false' && calendarContainer !== null) {
              calendarContainer.remove();
              input.setAttribute('aria-expanded', false);
            }
          }
        }
      }
    }]);

    return Datepicker;
  }(HTMLElement);

  customElements.define('pearson-datepicker', Datepicker);
})(window, document);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below

  var ICONS_CHEVRON_BACK_18 = '\n    <svg\n      class="pe-icon--chevron-back-18"\n      aria-hidden="true"\n      focusable="false"\n      style="width:18px;height:18px;"\n    >\n      <path\n        d="M13.749,17.6606035 C14.112,17.2486035 14.076,16.6116035 13.662,16.2436035 L5.509,8.9996035 L13.662,1.7566035 C14.077,1.3896035 14.113,0.752603504 13.749,0.339603504 C13.383,-0.0763964961 12.751,-0.115396496 12.338,0.252603504 L3.338,8.2476035 C3.123,8.4376035 3,8.7126035 3,8.9996035 C3,9.2876035 3.123,9.5616035 3.338,9.7526035 L12.338,17.7476035 C12.751,18.1156035 13.383,18.0766035 13.749,17.6606035"\n      />\n    </svg>\n  ';

  var ICONS_REMOVE_SM_24 = '\n    <svg\n      class="pe-icon--remove-sm-24"\n      aria-hidden="true"\n      focusable="false"\n      style="width:24px;height:24px;"\n    >\n      <path d="M13.4092,11.9999 L17.7082,7.7009 C18.0972,7.3119 18.0972,6.6809 17.7082,6.2919 C17.3192,5.9029 16.6882,5.9029 16.2992,6.2919 L12.0002,10.5909 L7.7012,6.2919 C7.3122,5.9029 6.6812,5.9029 6.2922,6.2919 C5.9022,6.6809 5.9022,7.3119 6.2922,7.7009 L10.5912,11.9999 L6.2922,16.2989 C5.9022,16.6879 5.9022,17.3189 6.2922,17.7079 C6.4862,17.9029 6.7412,17.9999 6.9962,17.9999 C7.2512,17.9999 7.5062,17.9029 7.7012,17.7079 L12.0002,13.4089 L16.2992,17.7079 C16.4932,17.9029 16.7482,17.9999 17.0032,17.9999 C17.2582,17.9999 17.5132,17.9029 17.7082,17.7079 C18.0972,17.3189 18.0972,16.6879 17.7082,16.2989 L13.4092,11.9999 Z"/>\n    </svg>\n  ';

  template.innerHTML = ' \n    <style>\n*,html{-webkit-box-sizing:border-box;box-sizing:border-box}pearson-drawer{background:#fff}pearson-drawer :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}pearson-drawer body,pearson-drawer html{height:100%;margin:0}pearson-drawer html{font:.875rem/1.15 Open Sans,sans-serif}pearson-drawer body{color:#252525}pearson-drawer a{color:#005a70}pearson-drawer button::-moz-focus-inner{border:0}pearson-drawer a:focus{text-decoration:none}pearson-drawer .pe-title,pearson-drawer h3{font-size:1.42857rem;line-height:1.85714rem;font-weight:400}pearson-drawer .pe-paragraph,pearson-drawer p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}pearson-drawer .pe-link,pearson-drawer .pe-link--btn{text-decoration:underline;background-color:transparent;border:0;cursor:pointer;position:relative}pearson-drawer .pe-link--btn{color:#047a9c;padding:4px;position:relative}pearson-drawer .pe-label{font-size:1rem;line-height:1.28571rem}pearson-drawer .pe-bold,pearson-drawer .pe-label--bold{font-weight:600}pearson-drawer pearson-drawer{background:#fff}pearson-drawer main{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}pearson-drawer main button{margin:1em}pearson-drawer .target{width:50%;border:1px solid grey;margin:2em auto;padding:1em}\n@-webkit-keyframes slideInRight{0%{right:-320px}to{right:0;visibility:visible}}@keyframes slideInRight{0%{right:-320px}to{right:0;visibility:visible}}@-webkit-keyframes slideOutRight{0%{right:0}to{right:-320px}}@keyframes slideOutRight{0%{right:0}to{right:-320px}}:host(.slideInRight){-webkit-animation-name:slideInRight;animation-name:slideInRight}:host(.slideOutRight){-webkit-animation-name:slideOutRight;animation-name:slideOutRight}:host(.animated){-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (prefers-reduced-motion){:host(.animated){-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;display:block;font-family:14px,18px,Open Sans,Calibri,Tahoma,sans-serif;color:#252525;padding:25px 20px 20px;height:100%;width:320px;top:0;right:-320px;bottom:0;border-left:1px solid #d9d9d9;border-bottom:30px solid #fff;-webkit-box-shadow:0 0 5px 0 #c7c7c7;box-shadow:0 0 5px 0 #c7c7c7;background-color:#fff;z-index:12000}:host(:not(.animated)){visibility:hidden}:host([open]:not(.animated)){visibility:visible;right:0}@media (prefers-reduced-motion){:host(:not([open])){visibility:hidden}:host([open]){visibility:visible;right:0}}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host button.back,:host button.close{position:absolute;top:15px;right:15px;border:0;cursor:pointer;background:none;height:44px;width:44px}:host button.back{right:auto;width:auto}:host button.back svg{margin-right:1px}::slotted(.title){display:inline-block;margin:0 0 20px}::slotted(.title:focus){-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.content,.header{padding-left:10px;padding-right:10px}.header{border-bottom:1px solid #d9d9d9;height:44px}.content-scroll-wrapper{height:-webkit-calc(100% - 30px);height:calc(100% - 30px);overflow-y:auto}.content{position:relative;margin-top:25px}.pe-icon--btn{position:relative;font-size:inherit;line-height:inherit;font-family:inherit;font-weight:600;padding:0;border:0;background-color:transparent}.pe-icon--btn:focus{outline:0}.pe-icon--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-4px;left:-4px;z-index:1}.pe-icon--btn>*{pointer-events:none}.soft-shadow--bottom{-webkit-box-shadow:0 12px 5px -10px hsla(0,0%,78%,.7);box-shadow:0 12px 5px -10px hsla(0,0%,78%,.7)}svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:#6a7070}svg:not(:root){overflow:hidden}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}:host body,:host html{height:100%;margin:0}:host html{font:.875rem/1.15 Open Sans,sans-serif}:host body{color:#252525}:host a{color:#005a70}:host button::-moz-focus-inner{border:0}:host a:focus{text-decoration:none}:host .pe-title,:host h3{font-size:1.42857rem;line-height:1.85714rem;font-weight:400}:host .pe-paragraph,:host p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}:host .pe-link,:host .pe-link--btn{text-decoration:underline;background-color:transparent;border:0;cursor:pointer;position:relative}:host .pe-link--btn{color:#047a9c;padding:4px;position:relative}:host .pe-label{font-size:1rem;line-height:1.28571rem}:host .pe-bold,:host .pe-label--bold{font-weight:600}:host pearson-drawer{background:#fff}:host main{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}:host main button{margin:1em}:host .target{width:50%;border:1px solid grey;margin:2em auto;padding:1em}    </style>\n    <div id="header" class="header">\n      <slot name="title"></slot>\n    </div>\n    <div class="content-scroll-wrapper">\n      <div id="content" class="content">\n        <slot name="content"></slot>\n      </div>\n    </div>\n    <button\n      type="button"\n      id="drawer-back"\n      class="pe-icon--btn back"\n      data-action="back"\n      style="display:none;"\n    >\n      ' + ICONS_CHEVRON_BACK_18 + ' Back\n    </button>\n    <button\n      type="button"\n      class="pe-icon--btn close"\n      data-action="close"\n      aria-label=""\n    >\n      ' + ICONS_REMOVE_SM_24 + '\n    </button>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-drawer');

  var FOCUSABLE_ELEMENTS = '\n    a[href]:not([tabindex^="-"]):not([inert]),\n    area[href]:not([tabindex^="-"]):not([inert]),\n    input:not([disabled]):not([inert]),\n    select:not([disabled]):not([inert]),\n    textarea:not([disabled]):not([inert]),\n    button:not([disabled]):not([inert]),\n    iframe:not([tabindex^="-"]):not([inert]),\n    audio:not([tabindex^="-"]):not([inert]),\n    video:not([tabindex^="-"]):not([inert]),\n    [contenteditable]:not([tabindex^="-"]):not([inert]),\n    [tabindex]:not([inert])';

  function getDeepActiveElement() {
    var a = doc.activeElement;
    while (a && a.shadowRoot && a.shadowRoot.activeElement) {
      a = a.shadowRoot.activeElement;
    }
    return a;
  }

  function getFocusableChildren(node) {
    var filter = Array.prototype.filter,
        focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
    return filter.call(focusableChildren, function (child) {
      return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
    });
  }

  function setFocusToFirstChild(node) {
    var focusableChildren = getFocusableChildren(node),
        focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];

    if (focusableChild) {
      focusableChild.focus();
    }
  }

  function trapTabKey(e) {
    for (var _len = arguments.length, nodes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      nodes[_key - 1] = arguments[_key];
    }

    var focusableChildren = nodes.reduce(function (acc, n) {
      return acc.concat(getFocusableChildren(n));
    }, []),
        focusedItemIdx = focusableChildren.indexOf(getDeepActiveElement()),
        lastFocusableIdx = focusableChildren.length - 1;

    if (e.shiftKey && focusedItemIdx === 0) {
      focusableChildren[lastFocusableIdx].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
      focusableChildren[0].focus();
      e.preventDefault();
    }
  }

  function animationEnabled() {
    return !w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  var forEach = Array.prototype.forEach;

  var Drawer = function (_HTMLElement) {
    _inherits(Drawer, _HTMLElement);

    _createClass(Drawer, [{
      key: 'activePanelIdx',
      get: function get() {
        if (!this.hasAttribute('activePanelIdx')) {
          return 0;
        }
        return parseInt(this.getAttribute('activePanelIdx'), 10);
      },
      set: function set(newValue) {
        this.setAttribute('activePanelIdx', newValue);
      }
    }, {
      key: 'open',
      get: function get() {
        return this.hasAttribute('open');
      },
      set: function set(newValue) {
        var isOpen = Boolean(newValue);

        if (isOpen) {
          this.setAttribute('open', '');
        } else {
          this.removeAttribute('open');
        }
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['activepanelidx', 'activePanelIdx', 'open'];
      }
    }]);

    function Drawer() {
      _classCallCheck(this, Drawer);

      var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.backBtn = clone.querySelector('#drawer-back');
      _this.closeBtn = clone.querySelector('button[data-action="close"]');

      // TODO: use ID to select these
      _this.header = clone.querySelector('#header');
      _this.scrollWrapper = clone.querySelector('.content-scroll-wrapper');
      _this.content = clone.querySelector('#content');

      _this.shadowRoot.appendChild(clone);

      _this.onContentScroll = _this.onContentScroll.bind(_this);
      _this.onTitleSlotChange = _this.onTitleSlotChange.bind(_this);
      _this.onContentSlotChange = _this.onContentSlotChange.bind(_this);
      _this.onContentClick = _this.onContentClick.bind(_this);
      _this.onWindowClick = _this.onWindowClick.bind(_this);
      _this.onWindowKeydown = _this.onWindowKeydown.bind(_this);
      _this.onanimationend = _this.onAnimationEnd.bind(_this);
      return _this;
    }

    _createClass(Drawer, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
          var isOpen = newValue !== null;
          var isAnimated = this.classList.contains('animated') && animationEnabled();

          if (isAnimated) {
            var prevAnimation = isOpen ? 'slideOutRight' : 'slideInRight';
            var nextAnimation = isOpen ? 'slideInRight' : 'slideOutRight';

            this.classList.add(nextAnimation);
            this.classList.remove(prevAnimation);
          } else {
            this.manageOpenFocus(isOpen);
          }
        }

        // Check for both cases because older browsers do not
        // normalize observed attributes in lowercase
        if (name === 'activepanelidx' || name === 'activePanelIdx') {
          var panelIdx = parseInt(newValue, 10);

          this.showPanel(panelIdx);

          if (panelIdx > 0) {
            this.backBtn.style.display = 'inline-block';
            this.titleNode.style.display = 'none';
          } else {
            this.backBtn.style.display = 'none';
            this.titleNode.style.display = 'inline-block';
          }

          if (panelIdx === 0) {
            this.titleNode.focus();
          } else {
            setFocusToFirstChild(this.panels[panelIdx]);
          }
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        this.trigger = doc.querySelector('[for="' + this.id + '"]');

        var _shadowRoot$querySele = this.shadowRoot.querySelectorAll('slot'),
            _shadowRoot$querySele2 = _slicedToArray(_shadowRoot$querySele, 2),
            titleSlot = _shadowRoot$querySele2[0],
            contentSlot = _shadowRoot$querySele2[1];

        if (!this.open && !this.hasAttribute('aria-hidden')) {
          this.setAttribute('aria-hidden', true);
        }

        titleSlot.addEventListener('slotchange', this.onTitleSlotChange);
        contentSlot.addEventListener('slotchange', this.onContentSlotChange);

        this.backBtn.addEventListener('click', function () {
          return _this2.activePanelIdx = 0;
        });
        this.closeBtn.addEventListener('click', function () {
          return _this2.open = false;
        });
        this.scrollWrapper.addEventListener('scroll', this.onContentScroll);
        this.content.addEventListener('click', this.onContentClick, true);

        this.addEventListener('animationend', this.onAnimationEnd);

        w.addEventListener('click', this.onWindowClick, true);
        w.addEventListener('keydown', this.onWindowKeydown, true);
      }
    }, {
      key: 'diconnectedCallback',
      value: function diconnectedCallback() {
        w.removeEventListener(this.onWindowClick);
        w.removeEventListener(this.onWindowKeydown);
      }
    }, {
      key: 'convertPanelHeadings',
      value: function convertPanelHeadings(headingNode, idx) {
        var headingText = headingNode.textContent;
        if (headingNode.parentNode.dataset.panel === '1') {
          var btnWrapper = '\n          <button\n            class="pe-link--btn"\n            data-action="show"\n            data-panel="' + (idx + 2) + '"\n            style="color:#252525;padding:0;text-align:left;text-decoration:none;"\n          >\n            <span class="pe-label pe-bold" style="pointer-events:none;">' + headingText + '</span>\n          </button>';
          headingNode.innerHTML = btnWrapper;
        } else {
          headingNode.setAttribute('tabindex', '-1');
        }
      }
    }, {
      key: 'showPanel',
      value: function showPanel(panelId) {
        var nextPanel = this.panels[panelId];

        forEach.call(this.panels, function (panel) {
          if (panel !== nextPanel) {
            panel.style.display = 'none';
          }
        });
        nextPanel.style.display = 'block';
      }
    }, {
      key: 'manageOpenFocus',
      value: function manageOpenFocus(isOpen) {
        if (isOpen && this.titleNode) {
          this.removeAttribute('aria-hidden');
          if (this.activePanelIdx === 0) {
            this.titleNode.focus();
          } else {
            setFocusToFirstChild(this.panels[this.activePanelIdx]);
          }
        } else {
          this.trigger.focus();
          this.setAttribute('aria-hidden', 'true');
        }
      }

      /**
       * Decorates the title of the drawer with taonex and adds an aria-label
       * to the close button.
       * @param {Event} e An Event object
       */

    }, {
      key: 'onTitleSlotChange',
      value: function onTitleSlotChange(e) {
        this.titleNode = e.target.assignedNodes()[0];

        this.titleNode.setAttribute('tabindex', '-1');
        this.closeBtn.setAttribute('aria-label', 'Close ' + this.titleNode.textContent.trim());
      }
    }, {
      key: 'onContentSlotChange',
      value: function onContentSlotChange(e) {
        this.contentNode = e.target.assignedNodes()[0];
        this.panels = this.contentNode.querySelectorAll('[data-panel]');
        var detailPanels = Array.prototype.slice.call(this.panels, 1);
        var headings = this.contentNode.querySelectorAll('h3');

        forEach.call(headings, this.convertPanelHeadings);
        forEach.call(detailPanels, function (p) {
          return p.style.display = 'none';
        });
      }
    }, {
      key: 'onContentScroll',
      value: function onContentScroll(e) {
        var scrollTop = e.target.scrollTop;

        if (scrollTop > 31) {
          this.header.classList.add('soft-shadow--bottom');
        }

        if (scrollTop < 31) {
          this.header.classList.remove('soft-shadow--bottom');
        }
      }
    }, {
      key: 'onContentClick',
      value: function onContentClick(e) {
        var target = e.target;
        if (!target.matches('button[data-panel]')) {
          return;
        }

        this.activePanelIdx = parseInt(target.dataset.panel, 10) - 1;
      }
    }, {
      key: 'onWindowClick',
      value: function onWindowClick(e) {
        if (!this.open || e.target === this || this.contains(e.target)) return;

        this.open = false;
      }
    }, {
      key: 'onWindowKeydown',
      value: function onWindowKeydown(e) {
        if (!this.open) {
          return;
        }

        if (e.key === 'Escape') {
          this.open = false;
        }

        if (e.key === 'Tab') {
          trapTabKey(e, this, this.shadowRoot);
        }
      }
    }, {
      key: 'onAnimationEnd',
      value: function onAnimationEnd() {
        this.manageOpenFocus(this.open);
      }
    }]);

    return Drawer;
  }(HTMLElement);

  customElements.define('pearson-drawer', Drawer);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      button = doc.createElement('template'),
      menu = doc.createElement('template'),
      item = doc.createElement('template'),
      check = '\n            <svg id="correct-18" viewBox="0 0 18 18" style="width:18px; height:18px;">\n                <path d="M7.63703177,13.7249483 C7.2712246,14.0916839 6.67813399,14.0916839 6.31232681,13.7249483 C6.31087256,13.7235264 5.29821541,12.7082993 3.27435538,10.679267 C2.90854821,10.3125314 2.90854821,9.71793566 3.27435538,9.35120012 C3.64016255,8.98446458 4.23325316,8.98446458 4.59906034,9.35120012 L6.9290522,11.6871052 L13.3583348,4.3207061 C13.6989986,3.93038793 14.2907756,3.89083601 14.6801057,4.2323644 C15.0694358,4.57389279 15.1088876,5.16717165 14.7682238,5.55748981 L7.68563681,13.6724173 C7.67022431,13.6903888 7.65402263,13.7079144 7.63703177,13.7249483 Z"></path>\n            </svg>\n        ',
      close = '\n            <svg id="close-24" viewBox="0 0 24 24" style="width:24px; height:24px;">\n                <path d="M12,10.5857864 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.4142136,12 L18.7071068,17.2928932 C19.0976311,17.6834175 19.0976311,18.3165825 18.7071068,18.7071068 C18.3165825,19.0976311 17.6834175,19.0976311 17.2928932,18.7071068 L12,13.4142136 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.5857864,12 L5.29289322,6.70710678 C4.90236893,6.31658249 4.90236893,5.68341751 5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 L12,10.5857864 Z"></path>\n            </svg>\n        ';

  template.innerHTML = ' \n  <style> \n\n@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}\n.gr-dropdown-container .menu button:focus:after{top:-2px}.gr-btn,button{font-family:Open Sans,Arial,Helvetica,sans-serif;font-weight:400;font-size:14px;font-weight:400!important}.gr-btn.text{border:0}pearson-dropdown:slotted{display:none}#collapse-18,#expand-18{position:relative;top:-2px}.collapse-icon{display:none}.primary svg{fill:#fff}.gr-dropdown-container .menu{border-radius:4px;width:220px;max-height:300px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.16);box-shadow:0 2px 4px 0 rgba(0,0,0,.16);overflow:scroll}.gr-dropdown-container .gr-btn svg{margin-left:8px}\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host template{display:none}:host [hidden]{display:none}:host html{font-size:14px}:host *,:host html{-webkit-box-sizing:border-box;box-sizing:border-box}:host body{font-family:Open Sans,Arial,Helvetica,sans-serif}:host body,:host p{font-size:14px;line-height:1.5;font-weight:400}:host strong{font-weight:600}:host a{font-size:14px;color:#047a9c}:host a:hover{color:#03536a;text-decoration:none}:host a:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host button{cursor:pointer}:host li,:host ul{font-size:14px}:host svg{fill:#252525}:host svg[focusable=false]:focus{outline:none}:host input,:host textarea{font:inherit;letter-spacing:inherit;word-spacing:inherit}:host .no-border{border:0}:host .icon-18{width:18px;height:18px}:host .icon-24{width:24px;height:24px}:host .hidden{display:none!important}:host .gr-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:16px;cursor:pointer;border-radius:22px;position:relative;margin:12px;line-height:1.15}:host .gr-btn:hover{color:#252525;border:1px solid #252525}:host .gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host a.gr-btn{text-decoration:none}:host .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}:host .gr-btn.primary:hover{color:#fff;background-color:#035f79}:host .gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}:host .gr-btn.attention:hover{background-color:#f7aa00}:host .gr-btn.small{min-width:128px;padding:7px 20px;font-size:14px}:host .gr-btn.small:focus:after{padding:18px 21px}:host .gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:16px}:host .gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}:host .gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}:host .gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0;margin:0;height:48px;width:48px}:host .gr-btn.icon-btn-24:focus{border-radius:4px}:host .gr-btn.icon-btn-24:hover svg{fill:#047a9c}:host .gr-btn.icon-btn-24:active svg{fill:#005a70}:host .gr-btn.icon-btn-24 svg{fill:#6a7070}:host .gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0;margin:0;height:48px;width:48px}:host .gr-btn.icon-btn-18:hover svg{fill:#047a9c}:host .gr-btn.icon-btn-18:active svg{fill:#005a70}:host .gr-btn.icon-btn-18:focus{border-radius:4px}:host .gr-btn.icon-btn-18 svg{fill:#6a7070}:host .gr-btn.no-border{border:0}:host .gr-btn.no-border:hover{border:0}:host .gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}:host .gr-dropdown-container .gr-btn{margin:0;font-size:14px;font-weight:700}:host .gr-dropdown-container .gr-btn svg{margin-left:1em}:host .gr-dropdown-container .dropdown-menu{position:absolute;z-index:10;margin-top:-9px;-ms-overflow-style:none}:host .gr-dropdown-container .mobile-group{background:#f5f5f5;border-bottom:1px solid #e9e9e9;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:100%;padding:24px;position:relative;top:-27px;z-index:10;overflow:hidden}:host .gr-dropdown-container .mobile-group span{width:100%;text-align:center}:host .gr-dropdown-container .mobile-group button{margin:0 0 0 12px}:host .gr-dropdown-container .menu{background-color:#fff;position:absolute}:host .gr-dropdown-container .menu button{background:none;border:0;font-size:14px}:host .gr-dropdown-container .menu button>*{pointer-events:none}:host .gr-dropdown-container .menu button:focus{outline:none}:host .gr-dropdown-container .menu button:focus:after{border:2px solid #1977d4;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + -10px);width:calc(100% + -10px);height:100%;top:0;left:5px;z-index:1}:host .gr-dropdown-container .menu{list-style-type:none;padding:1em 0;border:1px solid #d9d9d9;border-radius:2px;margin-top:0;top:16px;position:relative}:host .gr-dropdown-container [aria-checked=false] svg{display:none}:host .gr-dropdown-container [aria-checked=true] svg{display:inline-block}:host .gr-dropdown-container .seperator{padding-bottom:6px;margin-bottom:6px;border-bottom:1px solid #d9d9d9}:host .gr-dropdown-container li button{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-decoration:none;width:100%;color:#252525;text-align:left;padding:0}:host .gr-dropdown-container li button:hover{background-color:#e9e9e9}:host .gr-dropdown-container li button svg{position:absolute;left:12px}:host .gr-dropdown-container .option-text{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:5px 24px 5px 34px;width:100%}:host .gr-dropdown-container .divider{border-bottom:1px solid #c7c7c7;padding-bottom:8px;margin:0 25px}:host .gr-dropdown-container .divider+li{margin-top:8px}:host .gr-dropdown-container .truncate{max-width:100%;width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:480px){:host .gr-dropdown-container li{padding:8px 4px}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){:host .gr-dropdown-container .menu li button[aria-checked=true] svg{top:4px}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}:host .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){:host .animated{-webkit-animation:unset!important;animation:unset!important}}:host .animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}:host .animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}:host .gr-dropdown-container .menu button:focus:after{top:-2px}:host .gr-btn,:host button{font-family:Open Sans,Arial,Helvetica,sans-serif;font-weight:400;font-size:14px;font-weight:400!important}:host .gr-btn.text{border:0}:host pearson-dropdown:slotted{display:none}:host #collapse-18,:host #expand-18{position:relative;top:-2px}:host .collapse-icon{display:none}:host .primary svg{fill:#fff}:host .gr-dropdown-container .menu{border-radius:4px;width:220px;max-height:300px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.16);box-shadow:0 2px 4px 0 rgba(0,0,0,.16);overflow:scroll}:host .gr-dropdown-container .gr-btn svg{margin-left:8px}\n\n\n   </style>\n  <div class="gr-dropdown-container">\n  \n  </div>\n';

  button.innerHTML = '\n  <button data-action="trigger" aria-haspopup="true" aria-expanded="false" class="gr-btn">\n     <span class="dropdown-text"></span>\n     <div class="expand-icon">\n        <svg id="expand-18" viewBox="0 0 18 18" style="width:18px; height:18px;">\n          <path d="M8.09674611,10 L15.8979188,10 C16.5051081,10 16.9973323,10.4907428 16.9973323,11.0961048 C16.9973323,11.390812 16.8782997,11.6731038 16.6670916,11.8792872 L12.7665053,15.6870775 C12.3391074,16.1043075 11.6555575,16.1043075 11.2281596,15.6870775 L7.32757328,11.8792872 C6.89372798,11.4557632 6.88639729,10.7617864 7.31119972,10.3292468 C7.51800543,10.1186744 7.80114936,10 8.09674611,10 Z"></path>            \n        </svg>\n    </div>\n    <div class="collapse-icon">\n          <svg id="collapse-18" viewBox="0 0 18 18" style="width:18px; height:18px;">\n              <path d="M8.09674611,15 C7.80114936,15 7.51800543,14.8813256 7.31119972,14.6707532 C6.88639729,14.2382136 6.89372798,13.5442368 7.32757328,13.1207128 L11.2281596,9.31292251 C11.6555575,8.8956925 12.3391074,8.8956925 12.7665053,9.31292251 L16.6670916,13.1207128 C16.8782997,13.3268962 16.9973323,13.609188 16.9973323,13.9038952 C16.9973323,14.5092572 16.5051081,15 15.8979188,15 L8.09674611,15 Z"></path>            \n          </svg>\n    </div>\n  </button>\n  ';

  menu.innerHTML = '\n  <div class="dropdown-menu animateIn" data-action="menu">\n\t\t\t<ul role="menu" class="menu">\n\t\t\t  <slot></slot>\n\t\t\t</ul>\n\t</div>\n  ';

  item.innerHTML = '\n  <li role="none" >\n    <button role="menuitemradio" aria-checked="false">\n         ' + check + '\n      <span class="option-text">Option One</span>\n    </button>\n  </li>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-dropdown');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  function getFocusableElements(node) {
    return node.querySelectorAll('[role^="menuitemradio"]');
  }

  function buildListItems(content, component, menu, index, checked) {
    var li = item.content.cloneNode(true),
        text = li.querySelector('.option-text'),
        button = li.querySelector('button');

    text.innerHTML = content.text;
    if (content.value) {
      if (content.id === content.value) {
        button.setAttribute('aria-checked', true);
      }
    }
    if (content.divider === true) {
      button.parentNode.classList.add('seperator');
    }

    if (checked !== undefined && checked.length > 0) {
      checked.forEach(function (item) {
        if (parseInt(item.getAttribute('data-index')) === index) {
          button.setAttribute('aria-checked', true);
        }
      });
    }

    button.setAttribute('data-id', content.id);
    button.setAttribute('data-index', index);
    button.addEventListener('click', function (event) {
      // unless multi select, only select one item at a time.

      if (content.multiSelect) {
        var ariaChecked = event.target.getAttribute('aria-checked');
        if (ariaChecked === 'false') {
          event.target.setAttribute('aria-checked', true);
        } else {
          event.target.setAttribute('aria-checked', false);
        }
      } else {
        var focusItems = getFocusableElements(event.target.parentNode.parentNode);
        focusItems.forEach(function (item) {
          item.setAttribute('aria-checked', false);
        });
        event.target.setAttribute('aria-checked', true);
        component.setAttribute('value', content.id);
        component.closeDropdown();
      }
    });

    button.addEventListener('keydown', function (event) {
      var nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
          prevButton = parseInt(event.target.getAttribute('data-index')) - 1;

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (component.shadowRoot.activeElement === getFocusableElements(menu)[0]) {
          getFocusableElements(menu)[getFocusableElements(menu).length - 1].focus();
        } else {
          getFocusableElements(menu)[prevButton].focus();
        }
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (component.shadowRoot.activeElement === getFocusableElements(menu)[getFocusableElements(menu).length - 1]) {
          getFocusableElements(menu)[0].focus();
        } else {
          getFocusableElements(menu)[nextButton].focus();
        }
      }
      if (event.key === 'Home') {
        getFocusableElements(menu)[0].focus();
      }

      if (event.key === 'End') {
        getFocusableElements(menu)[getFocusableElements(menu).length - 1].focus();
      }
    });
    return li;
  }

  var Dropdown = function (_HTMLElement) {
    _inherits(Dropdown, _HTMLElement);

    _createClass(Dropdown, [{
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }, {
      key: 'buttonText',
      get: function get() {
        return this.getAttribute('buttonText');
      }
    }, {
      key: 'textOnly',
      get: function get() {
        return this.hasAttribute('textOnly');
      }
    }, {
      key: 'multiSelect',
      get: function get() {
        return this.hasAttribute('multiSelect');
      }
    }, {
      key: 'value',
      get: function get() {
        return this.getAttribute('value');
      }
    }, {
      key: 'open',
      get: function get() {
        return this.getAttribute('open');
      },
      set: function set(value) {
        this.setAttribute('open', value);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['buttonText', 'textOnly', 'open', 'value', 'multiSelect', 'type'];
      }
    }]);

    function Dropdown() {
      _classCallCheck(this, Dropdown);

      var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true);
      _this.shadowRoot.appendChild(clone);

      _this.openDropdown = _this.openDropdown.bind(_this);
      _this.closeDropdown = _this.closeDropdown.bind(_this);
      _this.returnChecked = _this.returnChecked.bind(_this);
      return _this;
    }

    _createClass(Dropdown, [{
      key: 'openDropdown',
      value: function openDropdown() {
        var _this2 = this;

        var expandIcon = this.button.querySelector('.expand-icon'),
            collapseIcon = this.button.querySelector('.collapse-icon');

        if (this.open === null) {
          this.open = true;
          this.button.setAttribute('aria-expanded', true);
          this.shadowRoot.addEventListener('animationend', function (event) {
            getFocusableElements(_this2.shadowRoot)[0].focus();
          });
          expandIcon.style.display = 'none';
          collapseIcon.style.display = 'flex';
        } else if (this.open) {
          this.closeDropdown();
        }
      }
    }, {
      key: 'closeDropdown',
      value: function closeDropdown() {
        var expandIcon = this.button.querySelector('.expand-icon'),
            collapseIcon = this.button.querySelector('.collapse-icon');

        expandIcon.style.display = 'flex';
        collapseIcon.style.display = 'none';

        this.checked = this.returnChecked();
        this.removeAttribute('open');
        this.button.setAttribute('aria-expanded', false);

        if (this.multiSelect) {
          var arr = [];
          this.checked.forEach(function (item) {
            arr.push(item.getAttribute('data-id'));
          });
          this.dispatchEvent(new CustomEvent('change', {
            bubbles: true,
            detail: {
              selected: arr
            }
          }));
        } else {
          this.dispatchEvent(new CustomEvent('change', {
            bubbles: true,
            detail: {
              selected: this.checked !== false ? this.checked.getAttribute('data-id') : 'no selection'
            }
          }));
        }

        this.button.focus();
      }
    }, {
      key: 'returnChecked',
      value: function returnChecked() {
        var checked = [];
        if (this.multiSelect) {
          checked = this.shadowRoot.querySelectorAll('[aria-checked="true"]');
        } else {
          checked = this.shadowRoot.querySelector('[aria-checked="true"]');
        }
        if (checked !== null) {
          return checked;
        } else {
          return false;
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this3 = this;

        /** Any changes to what the component renders should be done here. */
        var dropdownTrigger = button.content.cloneNode(true),
            dropdownTemplate = this.shadowRoot.querySelector('.gr-dropdown-container');
        dropdownTemplate.appendChild(dropdownTrigger);

        this.button = dropdownTemplate.querySelector('button');

        var buttonText = dropdownTemplate.querySelector('button .dropdown-text');
        buttonText.innerHTML = this.buttonText;

        // Get the attributes set by the consumer
        if (this.textOnly) {
          this.button.classList.add('text');
        }

        this.button.addEventListener('click', this.openDropdown);
        /** Event listeners should also be bound here. */
        doc.addEventListener('click', function (event) {
          if (_this3.open === 'true') {
            var target = event.target;
            var dropdownMenu = _this3.shadowRoot.querySelector('.menu');
            do {
              if (target === dropdownMenu || target === _this3) {
                return;
              }
              target = target.parentNode;
            } while (target);
            _this3.closeDropdown();
          }
        });

        doc.addEventListener('keydown', function (event) {
          if (_this3.open === 'true' && event.key === 'Escape') {
            _this3.closeDropdown();
          }
        });

        if (this.type === 'primary') {
          this.button.classList.add('primary');
        }

        if (this.type === 'attention') {
          this.button.classList.add('attention');
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _this4 = this;

        if (name === 'open' && newValue === 'true') {
          var dropdownMenu = menu.content.cloneNode(true),
              dropdownTemplate = this.shadowRoot.querySelector('.gr-dropdown-container');

          dropdownTemplate.appendChild(dropdownMenu);

          var items = this.querySelectorAll('li'),
              dropdownMenuTemplate = this.shadowRoot.querySelector('.menu'),
              itemContent = [];

          // get items from slot to render new list for dropdown
          items.forEach(function (item) {
            item.style.display = 'none';
            itemContent.push({
              divider: item.classList.contains('divider'),
              text: item.innerHTML,
              id: item.id,
              multiSelect: _this4.multiSelect,
              value: _this4.value });
          });

          // render list items based on items in slot
          itemContent.forEach(function (content, index) {
            dropdownMenuTemplate.appendChild(buildListItems(content, _this4, dropdownMenuTemplate, index, _this4.checked));
          });
        } else if (name === 'open' && newValue === null) {
          var _dropdownMenu = this.shadowRoot.querySelector('.dropdown-menu');
          _dropdownMenu.remove();
          this.button.setAttribute('aria-expanded', false);
        }
      }
    }]);

    return Dropdown;
  }(HTMLElement);

  customElements.define('pearson-dropdown', Dropdown);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');
  var progressInfo = doc.createElement('template');
  var check = doc.createElement('template');
  var response = [];

  template.innerHTML = '\n  <style>\n.deep-encapsulation{\n  /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */}.deep-encapsulation *,.deep-encapsulation :after,.deep-encapsulation :before{-webkit-box-sizing:inherit;box-sizing:inherit}.deep-encapsulation html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}.deep-encapsulation body{margin:0}.deep-encapsulation article,.deep-encapsulation aside,.deep-encapsulation footer,.deep-encapsulation header,.deep-encapsulation nav,.deep-encapsulation section{display:block}.deep-encapsulation h1{font-size:2em;margin:.67em 0}.deep-encapsulation figcaption,.deep-encapsulation figure,.deep-encapsulation main{display:block}.deep-encapsulation figure{margin:1em 40px}.deep-encapsulation hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}.deep-encapsulation pre{font-family:monospace,monospace;font-size:1em}.deep-encapsulation a{background-color:transparent;-webkit-text-decoration-skip:objects}.deep-encapsulation a:active,.deep-encapsulation a:hover{outline-width:0}.deep-encapsulation abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.deep-encapsulation b,.deep-encapsulation strong{font-weight:inherit;font-weight:bolder}.deep-encapsulation code,.deep-encapsulation kbd,.deep-encapsulation samp{font-family:monospace,monospace;font-size:1em}.deep-encapsulation dfn{font-style:italic}.deep-encapsulation mark{background-color:#ff0;color:#000}.deep-encapsulation small{font-size:80%}.deep-encapsulation sub,.deep-encapsulation sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.deep-encapsulation sub{bottom:-.25em}.deep-encapsulation sup{top:-.5em}.deep-encapsulation audio,.deep-encapsulation video{display:inline-block}.deep-encapsulation audio:not([controls]){display:none;height:0}.deep-encapsulation img{border-style:none}.deep-encapsulation svg:not(:root){overflow:hidden}.deep-encapsulation button,.deep-encapsulation input,.deep-encapsulation optgroup,.deep-encapsulation select,.deep-encapsulation textarea{font-family:Open Sans,Calibri,Tahoma,sans-serif;font-size:100%;line-height:1.15;margin:0}.deep-encapsulation button,.deep-encapsulation input{overflow:visible}.deep-encapsulation button,.deep-encapsulation select{text-transform:none}.deep-encapsulation [type=reset],.deep-encapsulation [type=submit],.deep-encapsulation button,.deep-encapsulation html [type=button]{-webkit-appearance:button}.deep-encapsulation [type=button]::-moz-focus-inner,.deep-encapsulation [type=reset]::-moz-focus-inner,.deep-encapsulation [type=submit]::-moz-focus-inner,.deep-encapsulation button::-moz-focus-inner{border-style:none;padding:0}.deep-encapsulation [type=button]:-moz-focusring,.deep-encapsulation [type=reset]:-moz-focusring,.deep-encapsulation [type=submit]:-moz-focusring,.deep-encapsulation button:-moz-focusring{outline:1px dotted ButtonText}.deep-encapsulation fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}.deep-encapsulation legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.deep-encapsulation progress{display:inline-block;vertical-align:baseline}.deep-encapsulation textarea{overflow:auto}.deep-encapsulation [type=checkbox],.deep-encapsulation [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}.deep-encapsulation [type=number]::-webkit-inner-spin-button,.deep-encapsulation [type=number]::-webkit-outer-spin-button{height:auto}.deep-encapsulation [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.deep-encapsulation [type=search]::-webkit-search-cancel-button,.deep-encapsulation [type=search]::-webkit-search-decoration{-webkit-appearance:none}.deep-encapsulation ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.deep-encapsulation details,.deep-encapsulation menu{display:block}.deep-encapsulation summary{display:list-item}.deep-encapsulation canvas{display:inline-block}.deep-encapsulation [hidden],.deep-encapsulation template{display:none}.deep-encapsulation html{font-size:.875rem}.deep-encapsulation body{font-family:Open Sans,Calibri,Tahoma,sans-serif;color:#252525}.deep-encapsulation h1,.deep-encapsulation h2,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation h5,.deep-encapsulation h6{margin-top:0;margin-bottom:0}.deep-encapsulation *+h1,.deep-encapsulation *+h2,.deep-encapsulation *+h3,.deep-encapsulation *+h4,.deep-encapsulation *+h5,.deep-encapsulation *+h6{margin-top:20px}.deep-encapsulation h1+h2{margin-top:40px}.deep-encapsulation h2+h3,.deep-encapsulation h3+h4,.deep-encapsulation h4+h5,.deep-encapsulation h5+h6{margin-top:6px}.deep-encapsulation header{margin-bottom:20px}.deep-encapsulation header h1+.subtitle{margin-top:34px}.deep-encapsulation aside h1{font-size:1.25rem}.deep-encapsulation aside h2{font-size:1.1rem}.deep-encapsulation aside h3{font-size:1rem}.deep-encapsulation aside h4,.deep-encapsulation aside h5,.deep-encapsulation aside h6{font-size:.8rem}.deep-encapsulation table{width:100%;max-width:100%;margin-bottom:35px;border-collapse:collapse}.deep-encapsulation table td,.deep-encapsulation table th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left}.deep-encapsulation table thead th{vertical-align:bottom;border-top:0}.deep-encapsulation a{color:#047a9c;text-decoration:underline}.deep-encapsulation a.active,.deep-encapsulation a:active,.deep-encapsulation a:focus,.deep-encapsulation a:hover{color:#005a70;text-decoration:none}.deep-encapsulation a:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.deep-encapsulation abbr,.deep-encapsulation abbr[title]{text-decoration:none}.deep-encapsulation ins:after,.deep-encapsulation ins:before{content:"+"}.deep-encapsulation mark{background:#ffb81c}.deep-encapsulation small{font-size:.85714rem;line-height:1.14286rem}.deep-encapsulation sub,.deep-encapsulation sup{font-size:90%}.deep-encapsulation sub{top:.2rem}.deep-encapsulation sup{top:-.2rem}.deep-encapsulation pre{max-width:100%;overflow-x:auto}.deep-encapsulation code,.deep-encapsulation kbd,.deep-encapsulation pre{font-family:Monaco,Lucida Console,monospace}.deep-encapsulation :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@font-face{.deep-encapsulation{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff) format("woff");font-weight:100;font-style:normal;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff) format("woff");font-style:italic;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff) format("woff");font-weight:400;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff) format("woff");src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff) format("woff");font-weight:600;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff) format("woff")}}.deep-encapsulation .pe-base-fontsize{font-size:.875rem}.deep-encapsulation .pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.deep-encapsulation .pe-copy{font-size:1rem;line-height:1.57143rem;color:#252525}.deep-encapsulation .pe-copy--secondary,.deep-encapsulation .pe-label--secondary{color:#6a7070}.deep-encapsulation .pe-copy--small{font-size:.85714rem;line-height:1.42857rem;color:#252525}.deep-encapsulation .pe-copy--large,.deep-encapsulation .pe-heading-level6,.deep-encapsulation h6,.deep-encapsulation header h5+.subtitle{font-size:1.14286rem;line-height:1.71429rem;color:#252525}.deep-encapsulation .pe-paragraph,.deep-encapsulation p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.deep-encapsulation .pe-paragraph--last{margin-bottom:0;color:#252525}.deep-encapsulation .pe-lead{font-size:1.42857rem;line-height:2rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-page-title{font-size:2.71429rem;line-height:3.71429rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-heading-level1,.deep-encapsulation .pe-page-title--small,.deep-encapsulation h1{font-size:2rem;line-height:2.71429rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-heading-level3,.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-title,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation header h2+.subtitle,.deep-encapsulation header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400;color:#252525}.deep-encapsulation .pe-heading-level5,.deep-encapsulation .pe-title--small,.deep-encapsulation h5,.deep-encapsulation header h4+.subtitle{font-size:1.28571rem;line-height:1.57143rem;font-weight:400;color:#252525}.deep-encapsulation .pe-heading-level2,.deep-encapsulation .pe-title--large,.deep-encapsulation h2,.deep-encapsulation header h1+.subtitle{font-size:1.71429rem;line-height:2rem;font-weight:400;color:#252525}.deep-encapsulation .pe-page-title--secondary,.deep-encapsulation .pe-title--secondary{color:#6a7070}.deep-encapsulation .pe-label{font-size:1rem;line-height:1.28571rem}.deep-encapsulation .pe-label.pe-label--inverse{color:#fff}.deep-encapsulation .pe-label--secondary.pe-label--inverse{color:#f5f5f5}.deep-encapsulation .pe-label--small{font-size:.85714rem;line-height:1.14286rem}.deep-encapsulation .pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.deep-encapsulation .pe-bold,.deep-encapsulation .pe-label--bold{font-weight:600}.deep-encapsulation .pe-list{margin:12px 0;padding-left:1.85714rem}.deep-encapsulation .pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.deep-encapsulation .pe-list li>ol,.deep-encapsulation .pe-list li>ul{margin-top:.42857rem}.deep-encapsulation .pe-list.pe-styled-lists--ordered{list-style-type:decimal}.deep-encapsulation .pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.deep-encapsulation .pe-list.pe-styled-lists--unordered{list-style-type:disc}.deep-encapsulation .pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.deep-encapsulation .pe-list--unstyled{list-style:none;padding-left:0}.deep-encapsulation .pe-list--unstyled ul{padding-left:1.85714rem}.deep-encapsulation .pe-heading-level1,.deep-encapsulation .pe-heading-level2,.deep-encapsulation h1,.deep-encapsulation h2,.deep-encapsulation header h1+.subtitle{margin-bottom:6px}.deep-encapsulation .pe-heading-level3,.deep-encapsulation h3,.deep-encapsulation header h2+.subtitle{font-weight:700;margin-bottom:6px}.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-heading-level5,.deep-encapsulation .pe-heading-level6,.deep-encapsulation h4,.deep-encapsulation h5,.deep-encapsulation h6,.deep-encapsulation header h3+.subtitle,.deep-encapsulation header h4+.subtitle,.deep-encapsulation header h5+.subtitle{margin-bottom:6px}.deep-encapsulation *+[class^=pe-heading-level]{margin-top:20px}.deep-encapsulation .pe-code{font-family:Monaco,Lucida Console,monospace;color:#f5f5f5;font-size:1rem;line-height:1.42857rem;background:#005a70;padding:30px 50px}.deep-encapsulation .pe-code-inline,.deep-encapsulation .pe-kbd{font-family:Monaco,Lucida Console,monospace;background:#e9e9e9;padding:0 4px}.deep-encapsulation #pe-icons-sprite{display:none}.deep-encapsulation svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:currentColor}.deep-encapsulation [class^=pe-btn] svg[class$="-18"],.deep-encapsulation [class^=pe-btn] svg[class$="-24"]{vertical-align:middle;margin-left:.5em;margin-bottom:.3em}.deep-encapsulation svg[class$="-18"]{width:18px;height:18px}.deep-encapsulation svg[class$="-24"]{width:24px;height:24px}.deep-encapsulation svg[class$=font-setting-18]{width:24px;height:18px}.deep-encapsulation svg[class$=font-setting-24]{width:32px;height:24px}.deep-encapsulation svg[class$=new-notification-9]{vertical-align:middle;width:10px;height:10px}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large,.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn__cta,.deep-encapsulation .pe-btn__cta--btn_large,.deep-encapsulation .pe-btn__cta--btn_small,.deep-encapsulation .pe-btn__cta--btn_xlarge,.deep-encapsulation .pe-btn__primary,.deep-encapsulation .pe-btn__primary--btn_large,.deep-encapsulation .pe-btn__primary--btn_small,.deep-encapsulation .pe-btn__primary--btn_xlarge,.deep-encapsulation .pe-btn__tertiary,.deep-encapsulation .pe-btn__tertiary--btn_large,.deep-encapsulation .pe-btn__tertiary--btn_small,.deep-encapsulation .pe-btn__tertiary--btn_xlarge{-webkit-box-sizing:border-box;box-sizing:border-box;border:none;display:inline-block;vertical-align:middle;cursor:pointer;height:36px;padding:0 20px;border-radius:36px;font-size:14px;line-height:18px;font-weight:600}.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn__cta--btn_small,.deep-encapsulation .pe-btn__primary--btn_small,.deep-encapsulation .pe-btn__tertiary--btn_small{height:32px;border-radius:32px;padding:0 12px;font-size:14px;line-height:18px}.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn__cta--btn_xlarge,.deep-encapsulation .pe-btn__primary--btn_xlarge,.deep-encapsulation .pe-btn__tertiary--btn_xlarge{height:40px;border-radius:40px;padding:0 20px;font-size:16px;line-height:20px}.deep-encapsulation .pe-icon--btn{padding:0;background-color:transparent;border:0;position:relative}.deep-encapsulation .pe-icon--btn:focus{outline:0}.deep-encapsulation .pe-icon--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link,.deep-encapsulation .pe-link--btn{text-decoration:underline;background-color:transparent;border:0;cursor:pointer;position:relative}.deep-encapsulation .pe-link{color:#047a9c;padding:0}.deep-encapsulation .pe-link:hover{color:#005a70;text-decoration:none}.deep-encapsulation .pe-link:focus{color:#005a70;text-decoration:none;outline:0}.deep-encapsulation .pe-link:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link--btn{color:#047a9c;padding:4px;position:relative}.deep-encapsulation .pe-link--btn:hover{text-decoration:none}.deep-encapsulation .pe-link--btn:focus{text-decoration:none;outline:0}.deep-encapsulation .pe-link--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link--btn:disabled{color:#6a7070;text-decoration:none;cursor:default}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large,.deep-encapsulation .pe-btn--btn_large:active,.deep-encapsulation .pe-btn--btn_large:hover,.deep-encapsulation .pe-btn:active,.deep-encapsulation .pe-btn:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_large:focus,.deep-encapsulation .pe-btn:focus{color:#505759;background-color:transparent;border:1px solid #c7c7c7;outline:0}.deep-encapsulation .pe-btn--btn_large:focus:after,.deep-encapsulation .pe-btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_large:disabled,.deep-encapsulation .pe-btn.pe-btn--disabled,.deep-encapsulation .pe-btn.pe-btn--disabled:hover,.deep-encapsulation .pe-btn:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_large span.btn-overflow,.deep-encapsulation .pe-btn span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btngroup button:first-child{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.deep-encapsulation .pe-btngroup button:last-child{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.deep-encapsulation .pe-btngroup button:not(:first-child):not(:last-child){border-radius:0!important}.deep-encapsulation .pe-btn--btn_small{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn--btn_small:active,.deep-encapsulation .pe-btn--btn_small:focus,.deep-encapsulation .pe-btn--btn_small:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_small:focus{outline:0}.deep-encapsulation .pe-btn--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_small:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn--btn_xlarge{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn--btn_xlarge:active,.deep-encapsulation .pe-btn--btn_xlarge:focus,.deep-encapsulation .pe-btn--btn_xlarge:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_xlarge:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary,.deep-encapsulation .pe-btn__primary--btn_large{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_large:active,.deep-encapsulation .pe-btn__primary--btn_large:hover,.deep-encapsulation .pe-btn__primary:active,.deep-encapsulation .pe-btn__primary:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_large:focus,.deep-encapsulation .pe-btn__primary:focus{color:#fff;background-color:#005a70;border:1px solid #005a70;outline:0}.deep-encapsulation .pe-btn__primary--btn_large:focus:after,.deep-encapsulation .pe-btn__primary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_large:disabled,.deep-encapsulation .pe-btn__primary.pe-btn--disabled,.deep-encapsulation .pe-btn__primary.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__primary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary--btn_small{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_small:active,.deep-encapsulation .pe-btn__primary--btn_small:focus,.deep-encapsulation .pe-btn__primary--btn_small:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__primary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary--btn_xlarge{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_xlarge:active,.deep-encapsulation .pe-btn__primary--btn_xlarge:focus,.deep-encapsulation .pe-btn__primary--btn_xlarge:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__primary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta,.deep-encapsulation .pe-btn__cta--btn_large{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_large:active,.deep-encapsulation .pe-btn__cta--btn_large:hover,.deep-encapsulation .pe-btn__cta:active,.deep-encapsulation .pe-btn__cta:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_large:focus,.deep-encapsulation .pe-btn__cta:focus{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19;outline:0}.deep-encapsulation .pe-btn__cta--btn_large:focus:after,.deep-encapsulation .pe-btn__cta:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_large:disabled,.deep-encapsulation .pe-btn__cta.pe-btn--disabled,.deep-encapsulation .pe-btn__cta.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__cta span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta--btn_small{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_small:active,.deep-encapsulation .pe-btn__cta--btn_small:focus,.deep-encapsulation .pe-btn__cta--btn_small:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__cta--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta--btn_xlarge{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_xlarge:active,.deep-encapsulation .pe-btn__cta--btn_xlarge:focus,.deep-encapsulation .pe-btn__cta--btn_xlarge:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__cta--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary,.deep-encapsulation .pe-btn__tertiary--btn_large{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_large:active,.deep-encapsulation .pe-btn__tertiary--btn_large:hover,.deep-encapsulation .pe-btn__tertiary:active,.deep-encapsulation .pe-btn__tertiary:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_large:focus,.deep-encapsulation .pe-btn__tertiary:focus{color:#505759;background-color:#ededed;border:1px solid #ededed;outline:0}.deep-encapsulation .pe-btn__tertiary--btn_large:focus:after,.deep-encapsulation .pe-btn__tertiary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_large:disabled,.deep-encapsulation .pe-btn__tertiary.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__tertiary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary--btn_small{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_small:active,.deep-encapsulation .pe-btn__tertiary--btn_small:focus,.deep-encapsulation .pe-btn__tertiary--btn_small:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__tertiary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary--btn_xlarge{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:active,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation a[class$="--btn_xlarge"],.deep-encapsulation div[class$="--btn_xlarge"]{line-height:40px!important}.deep-encapsulation a[class$="--btn_large"],.deep-encapsulation a[class=pe-btn],.deep-encapsulation a[class=pe-btn__cta],.deep-encapsulation a[class=pe-btn__primary],.deep-encapsulation a[class=pe-btn__tertiary],.deep-encapsulation div[class$="--btn_large"],.deep-encapsulation div[class=pe-btn],.deep-encapsulation div[class=pe-btn__cta],.deep-encapsulation div[class=pe-btn__primary],.deep-encapsulation div[class=pe-btn__tertiary]{line-height:36px!important}.deep-encapsulation a[class$="--btn_small"],.deep-encapsulation div[class$="--btn_small"]{line-height:32px!important}.deep-encapsulation input[class^=pe-btn]:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.deep-encapsulation button>*{pointer-events:none}.deep-encapsulation .pe-modal-container{width:475px}.deep-encapsulation .pe-modal-container>.pe-heading-level3,.deep-encapsulation .pe-modal-container>.pe-heading-level4,.deep-encapsulation .pe-modal-container>.pe-title,.deep-encapsulation .pe-modal-container>h3,.deep-encapsulation .pe-modal-container>h4,.deep-encapsulation header .pe-modal-container>h2+.subtitle,.deep-encapsulation header .pe-modal-container>h3+.subtitle{width:100%;text-align:center;padding:20px 0}.deep-encapsulation .pe-file-upload-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:Open Sans,Arial,Helvetica,sans-serif}@media (max-width:768px){.deep-encapsulation .pe-file-upload-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.deep-encapsulation .pe-file-upload-container .file-upload{height:362px;border-radius:6px;border:2px dashed #6a7070;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-image:url(icons/drag.svg);background-repeat:no-repeat;background-position:center 30px;background-size:100px;margin:40px 0}.deep-encapsulation .pe-file-upload-container .file-upload.highlight{border:2px dashed #047a9c;background-color:#e9f9fe;background-image:url(icons/drag-target.svg)}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;width:390px}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .pe-heading-level3,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .pe-heading-level4,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .pe-title,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area h3,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area h4,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area header h2+.subtitle,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area header h3+.subtitle,.deep-encapsulation header .pe-file-upload-container .file-upload .drop-area h2+.subtitle,.deep-encapsulation header .pe-file-upload-container .file-upload .drop-area h3+.subtitle{margin-top:6em}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area button{width:154px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-bottom:35px}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .info{color:#6a7070;font-size:12px;margin:0}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .text{margin-bottom:16px}.deep-encapsulation .pe-file-upload-container .file-upload-info{display:none;margin-left:2.5em;width:373px;border-left:1px solid #c7c7c7;padding:40px 0 0 2.5em;max-height:410px;overflow:scroll}@media (max-width:768px){.deep-encapsulation .pe-file-upload-container .file-upload-info{border-left:0;padding:0;margin:0;max-height:100%;width:100%}}.deep-encapsulation .pe-file-upload-container .file-upload-info .text{max-width:260px;word-break:break-word}.deep-encapsulation .pe-file-upload-container .file-upload-info .text strong{line-height:1.5}.deep-encapsulation .pe-file-upload-container .progress{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #f5f5f5;padding-bottom:1em;margin-bottom:1em;padding-right:10px}.deep-encapsulation .pe-file-upload-container .indicator,.deep-encapsulation .pe-file-upload-container .progress .group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.deep-encapsulation .pe-file-upload-container .indicator{margin-right:1em;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:50px;width:50px}.deep-encapsulation .pe-file-upload-container .indicator span{position:absolute;font-weight:700;color:#047a9c;font-size:.7em}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.deep-encapsulation .pe-file-upload-container .indicator span{position:relative}}.deep-encapsulation .pe-file-upload-container .indicator img{width:18px}.deep-encapsulation .pe-file-upload-container .text .info{color:#6a7070;font-size:12px;margin:0}.deep-encapsulation .pe-file-upload-container .upload-actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:4px}.deep-encapsulation .pe-file-upload-container .upload-actions button{cursor:pointer;width:40px;height:40px}.deep-encapsulation .pe-file-upload-container .upload-actions button svg{fill:#6a7070}.deep-encapsulation .pe-file-upload-container .upload-title{font-weight:400}.deep-encapsulation .pe-file-upload-container .pe-progress-container{margin-top:1em}.deep-encapsulation .pe-file-upload-container input[type=file]{display:none}.deep-encapsulation .pe-file-upload-container progress-ring{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.deep-encapsulation .pe-file-upload-container progress-ring{display:none}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.deep-encapsulation body:focus,.deep-encapsulation html:focus{outline:none}}.deep-encapsulation .pe-heading-level3,.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-title,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation header h2+.subtitle,.deep-encapsulation header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400}.deep-encapsulation :host{font-size:.875em;color:#252525}.alert-title,.deep-encapsulation :host{font-family:Open Sans,Calibri,Tahoma,"sans-serif"}.alert-title{font-size:14px;font-weight:400;top:-12px;position:relative}\n  </style>\n    <upload-modal triggerId titleText="Upload Files" successBtnText="Done" style="display:none">\n    <div class="deep-encapsulation">\n      <div class="pe-file-upload-container">\n        <div id="drop" class="file-upload">\n          <div class="drop-area">\n            <p class="pe-title">Drag files here</p>\n            <p class="text">or</p>\n            <input type="file" name="file" multiple>\n            <button id="attachFiles" class="pe-btn--btn_large" data-action="toggle-footer" type="button">Browse Files</button>\n            <p class="info">Upload up to <span id="maxNumberOfFiles"></span> files.</p>\n            <p class="info">Max file size <span id="maxFileSize"></span></p>\n          </div>\n        </div>\n        <div id="info" class="file-upload-info">\n          <h6 id="uploadTitle" class="upload-title" aria-live="assertive"></h6>\n          <div id="progressContainer" class="pe-progress-container"></div>\n        </div>\n      </div>\n      </div>\n    </upload-modal>\n  ';

  progressInfo.innerHTML = '\n  <div class="progress">\n    <div class="group">\n      <div class="indicator">\n        <span class="total"></span>\n      </div>\n      <div class="text">\n        <strong class="filename"></strong>\n        <p class="info">\n          <span class="bytes-loaded"></span>\n          <span class="bytes-total"></span>\n        </p>\n      </div>\n    </div>\n    <div class="upload-actions">\n      <button class="pe-icon--btn remove-file" aria-label="remove FILE from uploads">\n        <img height="18" width="18" src="data:image/svg+xml,%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' fill=\'%236a7070\' viewBox=\'0 0 18 18\'%3E%3Cpath d=\'M12,14.5 C12,14.776 11.776,15 11.5,15 C11.224,15 11,14.776 11,14.5 L11,5.5 C11,5.224 11.224,5 11.5,5 C11.776,5 12,5.224 12,5.5 L12,14.5 Z M9,14.5 C9,14.776 8.776,15 8.5,15 C8.224,15 8,14.776 8,14.5 L8,5.5 C8,5.224 8.224,5 8.5,5 C8.776,5 9,5.224 9,5.5 L9,14.5 Z M6,2 L11,2 L11,1 L6,1 L6,2 Z M6,14.5 C6,14.776 5.776,15 5.5,15 C5.224,15 5,14.776 5,14.5 L5,5.5 C5,5.224 5.224,5 5.5,5 C5.776,5 6,5.224 6,5.5 L6,14.5 Z M16.5,2 L12,2 L12,0.5 C12,0.224 11.776,0 11.5,0 L5.5,0 C5.224,0 5,0.224 5,0.5 L5,2 L0.5,2 C0.224,2 0,2.224 0,2.5 C0,2.776 0.224,3 0.5,3 L2,3 L2,17.5 C2,17.776 2.224,18 2.5,18 L14.5,18 C14.776,18 15,17.776 15,17.5 L15,3 L16.5,3 C16.776,3 17,2.776 17,2.5 C17,2.224 16.776,2 16.5,2 L16.5,2 Z\'%3E%3C/path%3E%3C/svg%3E"/>\n      </button>\n    </div>\n  </div>\n  ';

  check.innerHTML = '\n  <span>\n    <img height="18" width="18" class="pe-icon--check-sm-24" src="data:image/svg+xml,%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23047a9c\' viewBox=\'0 0 18 18\'%3E%3Cpath d=\'M17.5762,6.1826 C17.1252,5.8656 16.5012,5.9716 16.1822,6.4236 L9.8432,15.4146 L7.7332,13.1386 C7.3582,12.7326 6.7242,12.7096 6.3202,13.0846 C5.9152,13.4596 5.8912,14.0926 6.2662,14.4976 L9.2152,17.6796 C9.4052,17.8846 9.6712,17.9996 9.9492,17.9996 C9.9712,17.9996 9.9932,17.9986 10.0152,17.9976 C10.3162,17.9776 10.5922,17.8236 10.7662,17.5766 L17.8172,7.5766 C18.1362,7.1246 18.0282,6.5006 17.5762,6.1826\'%3E%3C/path%3E%3C/svg%3E" style="position:relative; top:-1px; left: -2px;"/>\n  </span>\n  ';

  var status = {
    done: 0,
    progress: 0
  };

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-uploader');

  function returnOperator(opr, type) {
    if (opr === 'plus') {
      return status[type]++;
    } else if (opr === 'minus') {
      return status[type]--;
    } else {
      return;
    }
  }

  function updateProgress(element) {
    var modal = element.querySelector('upload-modal'),
        uploadTitle = modal.querySelector('#uploadTitle'),
        uploadInfo = modal.querySelector('#info'),
        cancelBtn = modal.shadowRoot.querySelector('#cancelButton'),
        successBtn = modal.shadowRoot.querySelector('#successButton');

    if (status.progress >= 1) {
      cancelBtn.disabled = false;
    } else {
      cancelBtn.disabled = true;
    }

    if (status.progress === 0 && status.done >= 1) {
      successBtn.disabled = false;
    } else {
      successBtn.disabled = true;
    }

    if (status.progress === 0 && status.done === 0) {
      modal.footer = false;
      uploadInfo.style.display = 'none';
    }

    uploadTitle.innerHTML = 'Uploading (' + status.done + ' done, ' + status.progress + ' progress)';
  }

  function dispatchEvent(element, name) {
    var modal = element.querySelector('upload-modal');
    if (modal !== null) {
      modal.dispatchEvent(new CustomEvent(name, {
        detail: {
          done: status.done,
          progress: status.progress,
          response: response
        }
      }));
    }
  }

  function updateStatus(opr, statusType, element) {
    var modal = element.querySelector('upload-modal');
    returnOperator(opr, statusType);
    if (modal.footer) {
      updateProgress(element);
    }
    dispatchEvent(element, 'xhrLoading');
  }

  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function formatBytes(bytes, decimalPoint) {
    if (bytes === 0) return '0 Bytes';
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function generateAlert(opts) {
    var alert = doc.createElement('pearson-upload-alert');
    for (var attrName in opts) {
      alert.setAttribute(attrName, opts[attrName]);
    }
    return alert;
  }

  function buildAlert(opts) {
    var alert = generateAlert({
      returnNode: '#attachFiles',
      type: 'error',
      level: 'global',
      animated: true,
      focusOnOpen: true
    });

    alert.innerHTML = '\n      <h2 id="alertTitle" class="pe-label alert-title">\n          <strong>' + opts.strong + '</strong>' + opts.text + '\n       </h2>\n  ';
    return alert;
  }

  function tooLarge(current, max) {
    return current >= max;
  }

  var FileUpload = function (_HTMLElement) {
    _inherits(FileUpload, _HTMLElement);

    function FileUpload() {
      _classCallCheck(this, FileUpload);

      var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this));

      _this.attachShadow({
        mode: 'open'
      });

      var clone = template.content.cloneNode(true);
      _this.uploadInfo = clone.querySelector('#info');
      _this.realUploadInput = clone.querySelector('input[type="file"]');
      _this.attachBtn = clone.querySelector('#attachFiles');
      _this.target = clone.querySelector('#progressContainer');
      _this.dropArea = clone.querySelector('#drop');
      _this.modal = clone.querySelector('upload-modal');
      _this.max = clone.querySelector('#maxFileSize');
      _this.fileNumber = clone.querySelector('#maxNumberOfFiles');
      _this.modal.setAttribute('triggerId', _this.triggerId);

      _this.handleFiles = _this.handleFiles.bind(_this);
      _this.uploadFile = _this.uploadFile.bind(_this);
      _this.renderProgressItems = _this.renderProgressItems.bind(_this);
      _this.highlight = _this.highlight.bind(_this);
      _this.unhighlight = _this.unhighlight.bind(_this);
      _this.handleDrop = _this.handleDrop.bind(_this);
      _this.deleteFile = _this.deleteFile.bind(_this);

      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(FileUpload, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        var modal = this.shadowRoot.querySelector('upload-modal');
        this.realUploadInput.addEventListener('change', function (event) {
          _this2.handleFiles(event.srcElement.files);
          _this2.attachBtn.focus({
            preventScroll: true
          });
          _this2.realUploadInput.value = '';
        });

        this.attachBtn.addEventListener('click', function () {
          console.log('click');
          _this2.realUploadInput.click();
        });

        this.dropArea.addEventListener('dragenter', this.highlight);
        this.dropArea.addEventListener('dragover', this.highlight);
        this.dropArea.addEventListener('dragleave', this.unhighlight);
        this.dropArea.addEventListener('drop', this.handleDrop);

        modal.addEventListener('click', function (event) {
          event.stopImmediatePropagation();
          var target = event.target;
          // do {
          //   if (target.tagName === 'BUTTON') {
          //     return;
          //   }
          //   target = target.parentNode;
          // } while (target);

          if (target.classList.contains('remove-file')) {
            _this2.deleteFile(event);
          }
        });

        this.max.innerHTML = formatBytes(this.maxFileSize);
        this.fileNumber.innerHTML = this.maxNumberOfFiles;
      }
    }, {
      key: 'handleFiles',
      value: function handleFiles(files) {
        var alertMessage = {
          strong: 'Too many files.',
          text: ' You can only upload a max number of ' + this.maxNumberOfFiles + ' files'
        };
        if (files.length <= parseInt(this.maxNumberOfFiles)) {
          [].concat(_toConsumableArray(files)).forEach(this.uploadFile);
        } else {
          modal.appendChild(buildAlert(alertMessage));
        }
      }
    }, {
      key: 'deleteFile',
      value: function deleteFile(event) {
        var _this3 = this;

        var xhr = new XMLHttpRequest(),
            fileName = event.target.parentNode.parentNode.getAttribute('data-file'),
            url = this.apiUrl + fileName,
            modal = this.shadowRoot.querySelector('upload-modal'),
            domNode = event.target.parentNode.parentNode,
            alertMessage = {
          strong: fileName + ' ',
          text: 'was not deleted. There was a problem with the server.'
        };

        xhr.open('DELETE', url, true);

        xhr.addEventListener('load', function () {
          if (xhr.readyState === 4 && xhr.status === 204 || xhr.readyState === 4 && xhr.status === 200) {
            domNode.remove();
            updateStatus('minus', 'done', _this3.shadowRoot);
          } else {
            domNode.style.display = 'flex';
            modal.appendChild(buildAlert(alertMessage));
          }
        });

        domNode.style.display = 'none';
        xhr.send(null);
      }
    }, {
      key: 'uploadFile',
      value: function uploadFile(file) {
        var _this4 = this;

        var xhr = new XMLHttpRequest(),
            formData = new FormData(),
            modal = this.shadowRoot.querySelector('upload-modal'),
            alertMessage = {
          strong: file.name + ' ',
          text: 'was not uploaded. There was a problem with the server.'
        },
            alertMessage2 = {
          strong: file.name + ' ',
          text: 'is too large to be uploaded.'
        },
            fileNotTooLarge = !tooLarge(parseInt(file.size), parseInt(this.maxFileSize));

        xhr.addEventListener('load', function (event) {
          updateStatus('plus', 'done', _this4.shadowRoot);
          if (status.progress > 0) {
            updateStatus('minus', 'progress', _this4.shadowRoot);
          }
        });

        xhr.addEventListener('error', function (event) {
          target.appendChild(buildAlert(alertMessage));
        });

        xhr.addEventListener('abort', function (event) {
          var uploader = document.querySelector('pearson-uploader'),
              element = uploader.shadowRoot.querySelector('[data-file="' + file.name + '"]');
          element.remove();
          updateStatus('minus', 'progress', _this4.shadowRoot);
        });

        if (fileNotTooLarge) {
          xhr.open('POST', this.apiUrl, true);
          status.progress++;
          if (modal.footer !== true) {
            modal.footer = true;
            this.uploadInfo.style.display = 'block';
          }

          this.renderProgressItems(file, xhr);
          formData.append('key', file.name);
          formData.append('file', file);

          // Put the object into storage
          xhr.send(formData);

          xhr.onreadystatechange = function (event) {
            if (this.readyState === 4 && this.status === 204 || this.readyState === 4 && this.status === 200) {
              response.push(this);
            }
          };

          var cancelButton = this.shadowRoot.querySelector('upload-modal').shadowRoot.querySelector('#cancelButton');

          cancelButton.addEventListener('click', function (event) {
            xhr.abort();
          });
        } else {
          modal.appendChild(buildAlert(alertMessage2));
        }
      }
    }, {
      key: 'renderProgressItems',
      value: function renderProgressItems(file, xhr) {
        var _this5 = this;

        var infoClone = progressInfo.content.cloneNode(true),
            checkClone = check.content.cloneNode(true),
            progressTarget = this.shadowRoot.querySelector('#progressContainer'),
            progress = infoClone.querySelector('.progress'),
            indicator = infoClone.querySelector('.indicator'),
            filename = infoClone.querySelector('.filename'),
            textTotal = infoClone.querySelector('.total'),
            removeBtn = infoClone.querySelector('.remove-file'),
            bytesLoaded = infoClone.querySelector('.bytes-loaded'),
            bytesTotal = infoClone.querySelector('.bytes-total'),
            buildRing = document.createElement('progress-ring');

        progressTarget.appendChild(infoClone);
        indicator.appendChild(buildRing);
        progress.setAttribute('data-file', file.name);
        filename.innerHTML = file.name;
        removeBtn.style.visibility = 'hidden';

        xhr.upload.addEventListener('progress', function (event) {
          var percentLoaded = Math.round(event.loaded / event.total * 100);
          bytesLoaded.innerHTML = formatBytes(event.loaded);
          bytesTotal.innerHTML = formatBytes(event.total);
          buildRing.setAttribute('progress', percentLoaded);
          buildRing.setAttribute('stroke', 3);
          buildRing.setAttribute('radius', 25);

          if (percentLoaded !== 100) {
            updateProgress(_this5.shadowRoot);
            return textTotal.innerHTML = percentLoaded;
          } else {
            removeBtn.setAttribute('aria-label', 'Remove ' + file.name + ' from uploads.');
            removeBtn.style.visibility = 'visible';
            return textTotal.innerHTML = checkClone.querySelector('span').innerHTML;
          }
        });
      }
    }, {
      key: 'highlight',
      value: function highlight(event) {
        preventDefaults(event);
        this.dropArea.classList.add('highlight');
      }
    }, {
      key: 'unhighlight',
      value: function unhighlight(event) {
        preventDefaults(event);
        this.dropArea.classList.remove('highlight');
      }
    }, {
      key: 'handleDrop',
      value: function handleDrop(event) {
        this.unhighlight(event);
        var dt = event.dataTransfer;
        var files = dt.files;
        this.handleFiles(files);
      }
    }, {
      key: 'apiUrl',
      get: function get() {
        return this.getAttribute('apiUrl');
      }
    }, {
      key: 'maxFileSize',
      get: function get() {
        return this.getAttribute('maxByteFileSize');
      }
    }, {
      key: 'maxNumberOfFiles',
      get: function get() {
        return this.getAttribute('maxNumberOfFiles');
      }
    }, {
      key: 'triggerId',
      get: function get() {
        return this.getAttribute('triggerId');
      }
    }]);

    return FileUpload;
  }(HTMLElement);

  customElements.define('pearson-uploader', FileUpload);
})(window, document);

(function (w, doc) {
  'use strict';

  var ProgressRing = function (_HTMLElement2) {
    _inherits(ProgressRing, _HTMLElement2);

    function ProgressRing() {
      _classCallCheck(this, ProgressRing);

      var _this6 = _possibleConstructorReturn(this, (ProgressRing.__proto__ || Object.getPrototypeOf(ProgressRing)).call(this));

      var stroke = _this6.getAttribute('stroke');
      var radius = _this6.getAttribute('radius');
      var normalizedRadius = 25 - 3 * 2;
      _this6._circumference = normalizedRadius * 2 * Math.PI;

      _this6._root = _this6.attachShadow({ mode: 'open' });
      _this6._root.innerHTML = '\n        <svg\n          height="50"\n          width="50"\n          aria-hidden="true"\n          focusable="false"\n         >\n           <circle\n             stroke="#047a9c"\n             stroke-dasharray="' + _this6._circumference + ' ' + _this6._circumference + '"\n             style="stroke-dashoffset:' + _this6._circumference + '"\n             stroke-width="3"\n             fill="transparent"\n             r="' + normalizedRadius + '"\n             cx="25"\n             cy="25"\n          />\n        </svg>\n  \n        <style>\n          circle {\n            transition: stroke-dashoffset 0.35s;\n            transform: rotate(-90deg);\n            transform-origin: 50% 50%;\n          }\n        </style>\n      ';
      return _this6;
    }

    _createClass(ProgressRing, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (!this.hasAttribute('role') || this.getAttribute('role') !== 'progressbar') {
          this.setAttribute('role', 'progressbar');
        }
        if (!this.hasAttribute('aria-valuemin') || this.getAttribute('aria-valuemin') !== 0) {
          this.setAttribute('aria-valuemin', 0);
        }

        if (!this.hasAttribute('aria-valuemax') || this.getAttribute('aria-valuemax') !== 100) {
          this.setAttribute('aria-valuemax', 100);
        }

        if (!this.hasAttribute('aria-valuenow') || this.getAttribute('aria-valuenow') !== this.progress) {
          this.setAttribute('aria-valuenow', this.progress);
        }

        var valueText = this.progress + ' percent complete';
        if (!this.hasAttribute('aria-valueText') || this.getAttribute('aria-valueText') !== valueText) {
          this.setAttribute('aria-valueText', valueText);
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'progress') {
          this.setProgress(newValue);
        }
      }
    }, {
      key: 'setProgress',
      value: function setProgress(percent) {
        var offset = this._circumference - percent / 100 * this._circumference;
        var circle = this._root.querySelector('circle');
        circle.style.strokeDashoffset = offset;

        this.setAttribute('aria-valuenow', percent);
        this.setAttribute('aria-valuetext', percent + ' percent complete');
      }
    }, {
      key: 'upgradeProp',
      value: function upgradeProp(prop) {
        if (this.hasOwnProperty(prop)) {
          var value = this[prop];
          delete this[prop];
          this[prop] = value;
        }
      }
    }, {
      key: 'progress',
      get: function get() {
        return this.getAttribute('progress');
      },
      set: function set(value) {
        this.setAttribute('progress', value);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['progress', 'radius', 'stroke'];
      }
    }]);

    return ProgressRing;
  }(HTMLElement);

  w.customElements.define('progress-ring', ProgressRing);
})(window, document);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

(function (w, doc) {
    'use strict';

    var styles = doc.createElement('template');
    var template = doc.createElement('template');
    var overlayButtonTemplate = doc.createElement('template');
    var actionsTemplate = doc.createElement('template');
    var minimizedTemplate = doc.createElement('template');
    var response = '';

    styles.innerHTML = '\n  ' + '<style>' + '.deep-encapsulation { /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */}.deep-encapsulation *,.deep-encapsulation :after,.deep-encapsulation :before{-webkit-box-sizing:inherit;box-sizing:inherit}.deep-encapsulation html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}.deep-encapsulation body{margin:0}.deep-encapsulation article,.deep-encapsulation aside,.deep-encapsulation footer,.deep-encapsulation header,.deep-encapsulation nav,.deep-encapsulation section{display:block}.deep-encapsulation h1{font-size:2em;margin:.67em 0}.deep-encapsulation figcaption,.deep-encapsulation figure,.deep-encapsulation main{display:block}.deep-encapsulation figure{margin:1em 40px}.deep-encapsulation hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}.deep-encapsulation pre{font-family:monospace,monospace;font-size:1em}.deep-encapsulation a{background-color:transparent;-webkit-text-decoration-skip:objects}.deep-encapsulation a:active,.deep-encapsulation a:hover{outline-width:0}.deep-encapsulation abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.deep-encapsulation b,.deep-encapsulation strong{font-weight:inherit;font-weight:bolder}.deep-encapsulation code,.deep-encapsulation kbd,.deep-encapsulation samp{font-family:monospace,monospace;font-size:1em}.deep-encapsulation dfn{font-style:italic}.deep-encapsulation mark{background-color:#ff0;color:#000}.deep-encapsulation small{font-size:80%}.deep-encapsulation sub,.deep-encapsulation sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.deep-encapsulation sub{bottom:-.25em}.deep-encapsulation sup{top:-.5em}.deep-encapsulation audio,.deep-encapsulation video{display:inline-block}.deep-encapsulation audio:not([controls]){display:none;height:0}.deep-encapsulation img{border-style:none}.deep-encapsulation svg:not(:root){overflow:hidden}.deep-encapsulation button,.deep-encapsulation input,.deep-encapsulation optgroup,.deep-encapsulation select,.deep-encapsulation textarea{font-family:Open Sans,Calibri,Tahoma,sans-serif;font-size:100%;line-height:1.15;margin:0}.deep-encapsulation button,.deep-encapsulation input{overflow:visible}.deep-encapsulation button,.deep-encapsulation select{text-transform:none}.deep-encapsulation [type=reset],.deep-encapsulation [type=submit],.deep-encapsulation button,.deep-encapsulation html [type=button]{-webkit-appearance:button}.deep-encapsulation [type=button]::-moz-focus-inner,.deep-encapsulation [type=reset]::-moz-focus-inner,.deep-encapsulation [type=submit]::-moz-focus-inner,.deep-encapsulation button::-moz-focus-inner{border-style:none;padding:0}.deep-encapsulation [type=button]:-moz-focusring,.deep-encapsulation [type=reset]:-moz-focusring,.deep-encapsulation [type=submit]:-moz-focusring,.deep-encapsulation button:-moz-focusring{outline:1px dotted ButtonText}.deep-encapsulation fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}.deep-encapsulation legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.deep-encapsulation progress{display:inline-block;vertical-align:baseline}.deep-encapsulation textarea{overflow:auto}.deep-encapsulation [type=checkbox],.deep-encapsulation [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}.deep-encapsulation [type=number]::-webkit-inner-spin-button,.deep-encapsulation [type=number]::-webkit-outer-spin-button{height:auto}.deep-encapsulation [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.deep-encapsulation [type=search]::-webkit-search-cancel-button,.deep-encapsulation [type=search]::-webkit-search-decoration{-webkit-appearance:none}.deep-encapsulation ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.deep-encapsulation details,.deep-encapsulation menu{display:block}.deep-encapsulation summary{display:list-item}.deep-encapsulation canvas{display:inline-block}.deep-encapsulation [hidden],.deep-encapsulation template{display:none}.deep-encapsulation html{font-size:.875rem}.deep-encapsulation body{font-family:Open Sans,Calibri,Tahoma,sans-serif;color:#252525}.deep-encapsulation h1,.deep-encapsulation h2,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation h5,.deep-encapsulation h6{margin-top:0;margin-bottom:0}.deep-encapsulation *+h1,.deep-encapsulation *+h2,.deep-encapsulation *+h3,.deep-encapsulation *+h4,.deep-encapsulation *+h5,.deep-encapsulation *+h6{margin-top:20px}.deep-encapsulation h1+h2{margin-top:40px}.deep-encapsulation h2+h3,.deep-encapsulation h3+h4,.deep-encapsulation h4+h5,.deep-encapsulation h5+h6{margin-top:6px}.deep-encapsulation header{margin-bottom:20px}.deep-encapsulation header h1+.subtitle{margin-top:34px}.deep-encapsulation aside h1{font-size:1.25rem}.deep-encapsulation aside h2{font-size:1.1rem}.deep-encapsulation aside h3{font-size:1rem}.deep-encapsulation aside h4,.deep-encapsulation aside h5,.deep-encapsulation aside h6{font-size:.8rem}.deep-encapsulation table{width:100%;max-width:100%;margin-bottom:35px;border-collapse:collapse}.deep-encapsulation table td,.deep-encapsulation table th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left}.deep-encapsulation table thead th{vertical-align:bottom;border-top:0}.deep-encapsulation a{color:#047a9c;text-decoration:underline}.deep-encapsulation a.active,.deep-encapsulation a:active,.deep-encapsulation a:focus,.deep-encapsulation a:hover{color:#005a70;text-decoration:none}.deep-encapsulation a:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.deep-encapsulation abbr,.deep-encapsulation abbr[title]{text-decoration:none}.deep-encapsulation ins:after,.deep-encapsulation ins:before{content:"+"}.deep-encapsulation mark{background:#ffb81c}.deep-encapsulation small{font-size:.85714rem;line-height:1.14286rem}.deep-encapsulation sub,.deep-encapsulation sup{font-size:90%}.deep-encapsulation sub{top:.2rem}.deep-encapsulation sup{top:-.2rem}.deep-encapsulation pre{max-width:100%;overflow-x:auto}.deep-encapsulation code,.deep-encapsulation kbd,.deep-encapsulation pre{font-family:Monaco,Lucida Console,monospace}.deep-encapsulation :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@font-face{.deep-encapsulation{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff) format("woff");font-weight:100;font-style:normal;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff) format("woff");font-style:italic;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff) format("woff");font-weight:400;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff) format("woff");src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff) format("woff");font-weight:600;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff) format("woff")}}.deep-encapsulation .pe-base-fontsize{font-size:.875rem}.deep-encapsulation .pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.deep-encapsulation .pe-copy{font-size:1rem;line-height:1.57143rem;color:#252525}.deep-encapsulation .pe-copy--secondary,.deep-encapsulation .pe-label--secondary{color:#6a7070}.deep-encapsulation .pe-copy--small{font-size:.85714rem;line-height:1.42857rem;color:#252525}.deep-encapsulation .pe-copy--large,.deep-encapsulation .pe-heading-level6,.deep-encapsulation h6,.deep-encapsulation header h5+.subtitle{font-size:1.14286rem;line-height:1.71429rem;color:#252525}.deep-encapsulation .pe-paragraph,.deep-encapsulation p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.deep-encapsulation .pe-paragraph--last{margin-bottom:0;color:#252525}.deep-encapsulation .pe-lead{font-size:1.42857rem;line-height:2rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-page-title{font-size:2.71429rem;line-height:3.71429rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-heading-level1,.deep-encapsulation .pe-page-title--small,.deep-encapsulation h1{font-size:2rem;line-height:2.71429rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-heading-level3,.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-title,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation header h2+.subtitle,.deep-encapsulation header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400;color:#252525}.deep-encapsulation .pe-heading-level5,.deep-encapsulation .pe-title--small,.deep-encapsulation h5,.deep-encapsulation header h4+.subtitle{font-size:1.28571rem;line-height:1.57143rem;font-weight:400;color:#252525}.deep-encapsulation .pe-heading-level2,.deep-encapsulation .pe-title--large,.deep-encapsulation h2,.deep-encapsulation header h1+.subtitle{font-size:1.71429rem;line-height:2rem;font-weight:400;color:#252525}.deep-encapsulation .pe-page-title--secondary,.deep-encapsulation .pe-title--secondary{color:#6a7070}.deep-encapsulation .pe-label{font-size:1rem;line-height:1.28571rem}.deep-encapsulation .pe-label.pe-label--inverse{color:#fff}.deep-encapsulation .pe-label--secondary.pe-label--inverse{color:#f5f5f5}.deep-encapsulation .pe-label--small{font-size:.85714rem;line-height:1.14286rem}.deep-encapsulation .pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.deep-encapsulation .pe-bold,.deep-encapsulation .pe-label--bold{font-weight:600}.deep-encapsulation .pe-list{margin:12px 0;padding-left:1.85714rem}.deep-encapsulation .pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.deep-encapsulation .pe-list li>ol,.deep-encapsulation .pe-list li>ul{margin-top:.42857rem}.deep-encapsulation .pe-list.pe-styled-lists--ordered{list-style-type:decimal}.deep-encapsulation .pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.deep-encapsulation .pe-list.pe-styled-lists--unordered{list-style-type:disc}.deep-encapsulation .pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.deep-encapsulation .pe-list--unstyled{list-style:none;padding-left:0}.deep-encapsulation .pe-list--unstyled ul{padding-left:1.85714rem}.deep-encapsulation .pe-heading-level1,.deep-encapsulation .pe-heading-level2,.deep-encapsulation h1,.deep-encapsulation h2,.deep-encapsulation header h1+.subtitle{margin-bottom:6px}.deep-encapsulation .pe-heading-level3,.deep-encapsulation h3,.deep-encapsulation header h2+.subtitle{font-weight:700;margin-bottom:6px}.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-heading-level5,.deep-encapsulation .pe-heading-level6,.deep-encapsulation h4,.deep-encapsulation h5,.deep-encapsulation h6,.deep-encapsulation header h3+.subtitle,.deep-encapsulation header h4+.subtitle,.deep-encapsulation header h5+.subtitle{margin-bottom:6px}.deep-encapsulation *+[class^=pe-heading-level]{margin-top:20px}.deep-encapsulation .pe-code{font-family:Monaco,Lucida Console,monospace;color:#f5f5f5;font-size:1rem;line-height:1.42857rem;background:#005a70;padding:30px 50px}.deep-encapsulation .pe-code-inline,.deep-encapsulation .pe-kbd{font-family:Monaco,Lucida Console,monospace;background:#e9e9e9;padding:0 4px}.deep-encapsulation #pe-icons-sprite{display:none}.deep-encapsulation svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:currentColor}.deep-encapsulation [class^=pe-btn] svg[class$="-18"],.deep-encapsulation [class^=pe-btn] svg[class$="-24"]{vertical-align:middle;margin-left:.5em;margin-bottom:.3em}.deep-encapsulation svg[class$="-18"]{width:18px;height:18px}.deep-encapsulation svg[class$="-24"]{width:24px;height:24px}.deep-encapsulation svg[class$=font-setting-18]{width:24px;height:18px}.deep-encapsulation svg[class$=font-setting-24]{width:32px;height:24px}.deep-encapsulation svg[class$=new-notification-9]{vertical-align:middle;width:10px;height:10px}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large,.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn__cta,.deep-encapsulation .pe-btn__cta--btn_large,.deep-encapsulation .pe-btn__cta--btn_small,.deep-encapsulation .pe-btn__cta--btn_xlarge,.deep-encapsulation .pe-btn__primary,.deep-encapsulation .pe-btn__primary--btn_large,.deep-encapsulation .pe-btn__primary--btn_small,.deep-encapsulation .pe-btn__primary--btn_xlarge,.deep-encapsulation .pe-btn__tertiary,.deep-encapsulation .pe-btn__tertiary--btn_large,.deep-encapsulation .pe-btn__tertiary--btn_small,.deep-encapsulation .pe-btn__tertiary--btn_xlarge{-webkit-box-sizing:border-box;box-sizing:border-box;border:none;display:inline-block;vertical-align:middle;cursor:pointer;height:36px;padding:0 20px;border-radius:36px;font-size:14px;line-height:18px;font-weight:600}.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn__cta--btn_small,.deep-encapsulation .pe-btn__primary--btn_small,.deep-encapsulation .pe-btn__tertiary--btn_small{height:32px;border-radius:32px;padding:0 12px;font-size:14px;line-height:18px}.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn__cta--btn_xlarge,.deep-encapsulation .pe-btn__primary--btn_xlarge,.deep-encapsulation .pe-btn__tertiary--btn_xlarge{height:40px;border-radius:40px;padding:0 20px;font-size:16px;line-height:20px}.deep-encapsulation .pe-icon--btn{padding:0;background-color:transparent;border:0;position:relative}.deep-encapsulation .pe-icon--btn:focus{outline:0}.deep-encapsulation .pe-icon--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link,.deep-encapsulation .pe-link--btn{text-decoration:underline;background-color:transparent;border:0;cursor:pointer;position:relative}.deep-encapsulation .pe-link{color:#047a9c;padding:0}.deep-encapsulation .pe-link:hover{color:#005a70;text-decoration:none}.deep-encapsulation .pe-link:focus{color:#005a70;text-decoration:none;outline:0}.deep-encapsulation .pe-link:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link--btn{color:#047a9c;padding:4px;position:relative}.deep-encapsulation .pe-link--btn:hover{text-decoration:none}.deep-encapsulation .pe-link--btn:focus{text-decoration:none;outline:0}.deep-encapsulation .pe-link--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link--btn:disabled{color:#6a7070;text-decoration:none;cursor:default}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large,.deep-encapsulation .pe-btn--btn_large:active,.deep-encapsulation .pe-btn--btn_large:hover,.deep-encapsulation .pe-btn:active,.deep-encapsulation .pe-btn:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_large:focus,.deep-encapsulation .pe-btn:focus{color:#505759;background-color:transparent;border:1px solid #c7c7c7;outline:0}.deep-encapsulation .pe-btn--btn_large:focus:after,.deep-encapsulation .pe-btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_large:disabled,.deep-encapsulation .pe-btn.pe-btn--disabled,.deep-encapsulation .pe-btn.pe-btn--disabled:hover,.deep-encapsulation .pe-btn:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_large span.btn-overflow,.deep-encapsulation .pe-btn span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btngroup button:first-child{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.deep-encapsulation .pe-btngroup button:last-child{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.deep-encapsulation .pe-btngroup button:not(:first-child):not(:last-child){border-radius:0!important}.deep-encapsulation .pe-btn--btn_small{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn--btn_small:active,.deep-encapsulation .pe-btn--btn_small:focus,.deep-encapsulation .pe-btn--btn_small:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_small:focus{outline:0}.deep-encapsulation .pe-btn--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_small:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn--btn_xlarge{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn--btn_xlarge:active,.deep-encapsulation .pe-btn--btn_xlarge:focus,.deep-encapsulation .pe-btn--btn_xlarge:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_xlarge:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary,.deep-encapsulation .pe-btn__primary--btn_large{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_large:active,.deep-encapsulation .pe-btn__primary--btn_large:hover,.deep-encapsulation .pe-btn__primary:active,.deep-encapsulation .pe-btn__primary:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_large:focus,.deep-encapsulation .pe-btn__primary:focus{color:#fff;background-color:#005a70;border:1px solid #005a70;outline:0}.deep-encapsulation .pe-btn__primary--btn_large:focus:after,.deep-encapsulation .pe-btn__primary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_large:disabled,.deep-encapsulation .pe-btn__primary.pe-btn--disabled,.deep-encapsulation .pe-btn__primary.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__primary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary--btn_small{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_small:active,.deep-encapsulation .pe-btn__primary--btn_small:focus,.deep-encapsulation .pe-btn__primary--btn_small:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__primary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary--btn_xlarge{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_xlarge:active,.deep-encapsulation .pe-btn__primary--btn_xlarge:focus,.deep-encapsulation .pe-btn__primary--btn_xlarge:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__primary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta,.deep-encapsulation .pe-btn__cta--btn_large{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_large:active,.deep-encapsulation .pe-btn__cta--btn_large:hover,.deep-encapsulation .pe-btn__cta:active,.deep-encapsulation .pe-btn__cta:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_large:focus,.deep-encapsulation .pe-btn__cta:focus{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19;outline:0}.deep-encapsulation .pe-btn__cta--btn_large:focus:after,.deep-encapsulation .pe-btn__cta:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_large:disabled,.deep-encapsulation .pe-btn__cta.pe-btn--disabled,.deep-encapsulation .pe-btn__cta.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__cta span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta--btn_small{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_small:active,.deep-encapsulation .pe-btn__cta--btn_small:focus,.deep-encapsulation .pe-btn__cta--btn_small:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__cta--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta--btn_xlarge{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_xlarge:active,.deep-encapsulation .pe-btn__cta--btn_xlarge:focus,.deep-encapsulation .pe-btn__cta--btn_xlarge:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__cta--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary,.deep-encapsulation .pe-btn__tertiary--btn_large{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_large:active,.deep-encapsulation .pe-btn__tertiary--btn_large:hover,.deep-encapsulation .pe-btn__tertiary:active,.deep-encapsulation .pe-btn__tertiary:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_large:focus,.deep-encapsulation .pe-btn__tertiary:focus{color:#505759;background-color:#ededed;border:1px solid #ededed;outline:0}.deep-encapsulation .pe-btn__tertiary--btn_large:focus:after,.deep-encapsulation .pe-btn__tertiary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_large:disabled,.deep-encapsulation .pe-btn__tertiary.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__tertiary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary--btn_small{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_small:active,.deep-encapsulation .pe-btn__tertiary--btn_small:focus,.deep-encapsulation .pe-btn__tertiary--btn_small:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__tertiary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary--btn_xlarge{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:active,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation a[class$="--btn_xlarge"],.deep-encapsulation div[class$="--btn_xlarge"]{line-height:40px!important}.deep-encapsulation a[class$="--btn_large"],.deep-encapsulation a[class=pe-btn],.deep-encapsulation a[class=pe-btn__cta],.deep-encapsulation a[class=pe-btn__primary],.deep-encapsulation a[class=pe-btn__tertiary],.deep-encapsulation div[class$="--btn_large"],.deep-encapsulation div[class=pe-btn],.deep-encapsulation div[class=pe-btn__cta],.deep-encapsulation div[class=pe-btn__primary],.deep-encapsulation div[class=pe-btn__tertiary]{line-height:36px!important}.deep-encapsulation a[class$="--btn_small"],.deep-encapsulation div[class$="--btn_small"]{line-height:32px!important}.deep-encapsulation input[class^=pe-btn]:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes fadeInFast{0%{opacity:0}to{opacity:1}}@keyframes fadeInFast{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOutFast{0%{opacity:1}to{opacity:0}}@keyframes fadeOutFast{0%{opacity:1}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@-webkit-keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.deep-encapsulation .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.deep-encapsulation .animated{-webkit-animation:unset!important;animation:unset!important}}.deep-encapsulation .fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.deep-encapsulation .fadeInFast{-webkit-animation-name:fadeInFast;animation-name:fadeInFast;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.deep-encapsulation .fadeOutFast{-webkit-animation-name:fadeOutFast;animation-name:fadeOutFast;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.deep-encapsulation .fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.deep-encapsulation .slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.deep-encapsulation .slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.deep-encapsulation .fadeIn,.deep-encapsulation .fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}.deep-encapsulation .zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}.deep-encapsulation .zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}.deep-encapsulation .slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp;-webkit-animation-duration:.5s;animation-duration:.5s}.deep-encapsulation *{-webkit-box-sizing:border-box;box-sizing:border-box}.deep-encapsulation .hidden,.deep-encapsulation [hidden]{display:none!important}.deep-encapsulation .hide-overflow{overflow:hidden}.deep-encapsulation .modal-scroll{height:100%;overflow:scroll;-webkit-overflow-scrolling:touch}.deep-encapsulation #modalOverlay{width:100%;height:100%;z-index:90000;background-color:#222;position:fixed;top:0;left:0;margin:0;padding:0;-webkit-transition:all .5s ease-in;transition:all .5s ease-in;opacity:.6}.deep-encapsulation [role=dialog]{border:thin solid #000;background-color:#fff;z-index:300000;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.deep-encapsulation .scroll-frame{overflow:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;height:400px;width:100%}.deep-encapsulation .header-actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;padding:20px;top:0;right:0}.deep-encapsulation .header-actions button{top:0!important;background:none;border:0;cursor:pointer;padding:0;width:44px;text-align:center}.deep-encapsulation .header-actions button img{width:24px;height:24px;margin:0}.deep-encapsulation .pe-modal-container{min-width:474px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;width:auto}.deep-encapsulation .pe-modal-container__minimized{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:fixed;bottom:0;right:0;width:507px;height:60px;padding:20px 17px 22px 27px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2);box-shadow:0 2px 4px 0 rgba(0,0,0,.2);border:1px solid #c7c7c7;border-bottom:0;border-radius:0;background-color:#fff}@media (min-width:1px) and (max-width:639px){.deep-encapsulation .pe-modal-container__minimized{width:100%}}.deep-encapsulation .header-actions__minimized{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;right:5px;top:-webkit-calc(50% - 12px);top:calc(50% - 12px)}.deep-encapsulation .header-actions__minimized button{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:0!important;background:none;border:0;cursor:pointer;padding:0;width:44px;height:24px;vertical-align:middle}.deep-encapsulation .header-actions__minimized button img{width:18px;height:18px;margin:0}.deep-encapsulation .upload-summary{max-width: calc(100% - 30px);font-size:18px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#252525;display:inline-block;margin:0;padding:0;}@media (min-width:481px) and (max-width:767px){.deep-encapsulation .pe-modal-container{width:440px}}.deep-encapsulation p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.deep-encapsulation h2,.deep-encapsulation p{font-family:Open Sans,Arial,Helvetica,sans-serif}.deep-encapsulation h2{font-weight:400;display:inline-block;margin:0 0 20px;font-size:24px;padding-left:40px;padding-top:40px;padding-right:40px}.deep-encapsulation .pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (min-width:1px) and (max-width:480px){.deep-encapsulation .pe-modal-container h2{font-size:20px}.deep-encapsulation .pe-modal-container h2.upload-summary{font-size:16px}}.deep-encapsulation .pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px}.deep-encapsulation .pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}@media (min-width:481px) and (max-width:767px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (min-width:1px) and (max-width:480px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.deep-encapsulation .pe-modal-container .actions button:first-child{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;margin-left:1em}@media (min-width:1px) and (max-width:480px){.deep-encapsulation .pe-modal-container .actions button:first-child{margin:.5em 0}}@media (min-width:481px) and (max-width:767px){.deep-encapsulation .pe-modal-container .actions button{width:100%}}.deep-encapsulation .pe-modal-container .actions button#modalOverlay:focus{outline:1px solid #da0474;outline-offset:2px}.deep-encapsulation .pe-btn--btn_large::-moz-focus-inner,.deep-encapsulation .pe-btn::-moz-focus-inner{border:0}.deep-encapsulation .style-scope{text-align:left}.deep-encapsulation button.style-scope{text-align:center}.deep-encapsulation .modal-minimize img{height:18px!important}.deep-encapsulation .pe-icon--btn::-moz-focus-inner{border:0}.deep-encapsulation .pe-icon--btn:focus:after{top:-4px!important;left:-4px!important}.deep-encapsulation .pe-modal-container{width:auto}.deep-encapsulation .pe-modal-container .modal-title{width:100%;padding:20px 40px;border-bottom:1px solid #c7c7c7;margin-bottom:0}.deep-encapsulation .pe-modal-container button.close[aria-label="Close Dialog"]{top:16px}.deep-encapsulation .pe-modal-container .actions{padding:30px 40px;border-top:1px solid #c7c7c7}.deep-encapsulation .pe-modal-container .modal-body{margin-bottom:0}@media (max-width:640px){.deep-encapsulation .pe-modal-container{min-width:auto}.deep-encapsulation button.close[aria-label="Close Dialog"]{right:15px}}:host(:not([footer])) #minimizeButton{display:none!important}\n\t</style>\n  ';

    actionsTemplate.innerHTML = '\n  <div class="actions">\n  <button id="successButton" class="modal-success pe-btn pe-btn__primary--btn_large" data-event="success" disabled>Save</button>\n  <button id="cancelButton" class="modal-cancel pe-btn--btn_large" data-event="cancel" disabled>Cancel</button>\n</div>\n  ';

    overlayButtonTemplate.innerHTML = '\n  <div class="hidden modal-close animated fadeIn" id="modalOverlay" data-event="cancel"></div>\n  ';

    minimizedTemplate.innerHTML = '\n  <div class="deep-encapsulation">\n  <div div class="pe-modal-container pe-modal-container__minimized animated slideInUp" id="modal">\n    <h2 class="upload-summary">Uploading (<span id="done">0</span> done, <span id="progress">0</span> in progress)</h2>\n    <div class="header-actions__minimized">\n      <button id="expandButton" class="pe-icon--btn modal-expand" aria-label="Expand Upload Files" data-event="cancel">\n        <img src="data:image/svg+xml,\t%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M3.5,1 L20.5,1 C21.8807119,1 23,2.11928813 23,3.5 L23,19.5 C23,20.8807119 21.8807119,22 20.5,22 L3.5,22 C2.11928813,22 1,20.8807119 1,19.5 L1,3.5 C1,2.11928813 2.11928813,1 3.5,1 Z M21,6 L21,3.5 C21,3.22385763 20.7761424,3 20.5,3 L3.5,3 C3.22385763,3 3,3.22385763 3,3.5 L3,6 L21,6 Z M21,8 L3,8 L3,19.5 C3,19.7761424 3.22385763,20 3.5,20 L20.5,20 C20.7761424,20 21,19.7761424 21,19.5 L21,8 Z\'/%3E%3C/svg%3E" />\n      </button>\n    </div>\n  </div>\n</div>\n  ';

    template.innerHTML = '\n  <div class="deep-encapsulation">\n  <div class="hidden" id="modalPlaceholder"></div>\n  <div class="pe-modal-container hidden animated slideInDown" id="modal" role="dialog" aria-labelledby="dialogHeading"\n   aria-describedby="dialogDescription" aria-modal="true">\n    <h2 id="dialogHeading" class="modal-title pe-title"></h2>\n    <div class="modal-body" id="dialogDescription">\n      <slot></slot>\n    </div>\n    <div id="headerActions" class="header-actions">\n      <button id="minimizeButton" class="pe-icon--btn modal-minimize" aria-label="Minimize Upload Files" data-event="minimize">\n        <img src="data:image/svg+xml,\t%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\'%3E%3Cpath d=\'M3,7.75 C2.86192881,7.75 2.75,7.86192881 2.75,8 L2.75,10 C2.75,10.1380712 2.86192881,10.25 3,10.25 L15,10.25 C15.1380712,10.25 15.25,10.1380712 15.25,10 L15.25,8 C15.25,7.86192881 15.1380712,7.75 15,7.75 L3,7.75 Z M3,6 L15,6 C16.1045695,6 17,6.8954305 17,8 L17,10 C17,11.1045695 16.1045695,12 15,12 L3,12 C1.8954305,12 1,11.1045695 1,10 L1,8 C1,6.8954305 1.8954305,6 3,6 Z\'%3E%3C/path%3E%3C/svg%3E\n          " />\n      </button>\n      <button id="closeButton" class="pe-icon--btn close modal-close" aria-label="Close Upload Files" data-event="cancel">\n        <img src="data:image/svg+xml,\t%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M13.4092,11.9999 L17.7082,7.7009 C18.0972,7.3119 18.0972,6.6809 17.7082,6.2919 C17.3192,5.9029 16.6882,5.9029 16.2992,6.2919 L12.0002,10.5909 L7.7012,6.2919 C7.3122,5.9029 6.6812,5.9029 6.2922,6.2919 C5.9022,6.6809 5.9022,7.3119 6.2922,7.7009 L10.5912,11.9999 L6.2922,16.2989 C5.9022,16.6879 5.9022,17.3189 6.2922,17.7079 C6.4862,17.9029 6.7412,17.9999 6.9962,17.9999 C7.2512,17.9999 7.5062,17.9029 7.7012,17.7079 L12.0002,13.4089 L16.2992,17.7079 C16.4932,17.9029 16.7482,17.9999 17.0032,17.9999 C17.2582,17.9999 17.5132,17.9029 17.7082,17.7079 C18.0972,17.3189 18.0972,16.6879 17.7082,16.2989 L13.4092,11.9999 Z\'/%3E%3C/svg%3E\n        " />\n      </button>\n    </div>\n  </div>\n</div>\n  ';

    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(styles, 'upload-modal');

    var FOCUSABLE_ELEMENTS = '\n    a[href]:not([tabindex^="-"]):not([inert]),\n    area[href]:not([tabindex^="-"]):not([inert]),\n    input:not([disabled]):not([inert]),\n    select:not([disabled]):not([inert]),\n    textarea:not([disabled]):not([inert]),\n    button:not([disabled]):not([inert]),\n    iframe:not([tabindex^="-"]):not([inert]),\n    audio:not([tabindex^="-"]):not([inert]),\n    video:not([tabindex^="-"]):not([inert]),\n    [contenteditable]:not([tabindex^="-"]):not([inert]),\n    [tabindex]:not([tabindex^="-"]):not([inert])',
        TAB_KEY = 9,
        ESCAPE_KEY = 27;

    function getDeepActiveElement() {
        var a = doc.activeElement;
        while (a && a.shadowRoot && a.shadowRoot.activeElement) {
            a = a.shadowRoot.activeElement;
        }
        return a;
    }

    function getFocusableChildren(node) {
        var filter = Array.prototype.filter,
            focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
        return filter.call(focusableChildren, function (child) {
            return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
        });
    }

    function setFocusToFirstChild(node) {
        var focusableChildren = getFocusableChildren(node),
            focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];

        if (focusableChild) {
            focusableChild.focus();
        }
    }

    function trapTabKey(e) {
        for (var _len = arguments.length, nodes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            nodes[_key - 1] = arguments[_key];
        }

        var focusableChildren = nodes.reduce(function (acc, n) {
            return acc.concat(getFocusableChildren(n));
        }, []),
            focusedItemIdx = focusableChildren.indexOf(getDeepActiveElement()),
            lastFocusableIdx = focusableChildren.length - 1;

        if (e.shiftKey && focusedItemIdx === 0) {
            focusableChildren[lastFocusableIdx].focus();
            e.preventDefault();
        }

        if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
            focusableChildren[0].focus();
            e.preventDefault();
        }
    }

    var Modal = function (_HTMLElement) {
        _inherits(Modal, _HTMLElement);

        _createClass(Modal, null, [{
            key: 'observedAttributes',
            get: function get() {
                return ['footer', 'minimized'];
            }
        }]);

        function Modal() {
            _classCallCheck(this, Modal);

            var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

            _this.attachShadow({ mode: 'open' });

            _this.clone = template.content.cloneNode(true);
            _this.styles = styles.content.cloneNode(true);

            _this.openModal = _this.openModal.bind(_this);
            _this.closeModal = _this.closeModal.bind(_this);

            _this.bindKeyPress = _this.bindKeyPress.bind(_this);
            _this.maintainFocus = _this.maintainFocus.bind(_this);
            _this.minimizeDetail = {};
            return _this;
        }

        _createClass(Modal, [{
            key: 'attributeChangedCallback',
            value: function attributeChangedCallback(name, oldValue, newValue) {
                var _this2 = this;

                var minimizedContainer = this.shadowRoot.querySelector('.pe-modal-container__minimized'),
                    modalOverlay = this.shadowRoot.querySelector('#modalOverlay'),
                    minimizeButton = this.shadowRoot.querySelector('#minimizeButton');

                this.minimizedClone = minimizedTemplate.content.cloneNode(true);
                // if `this.modal has not been defined yet,
                // bail out.
                if (!this.modal) return;
                if (name === 'footer') {
                    if (!this.footer) {
                        var actions = this.modal.querySelector('.actions');
                        actions.remove();
                    } else {
                        this.renderfooter(this.modal);
                    }
                }

                if (name === 'minimized') {
                    if (!this.minimized) {
                        if (isIE11) {
                            minimizedContainer.remove();
                            this.modal.classList.remove('hidden');
                            modalOverlay.classList.remove('hidden');
                        } else {
                            minimizedContainer.remove();
                            this.modal.classList.remove('hidden');
                            modalOverlay.classList.remove('hidden');
                            this.modal.classList.remove('fadeOutFast');
                            modalOverlay.classList.remove('fadeOutFast');
                            this.modal.classList.add('fadeInFast');
                        }

                        setTimeout(function () {
                            minimizeButton.focus();
                        }, 250);
                    } else {
                        this.addEventListener('xhrLoading', function (event) {
                            _this2.minimizeDetail = event.detail;
                            _this2.updateProgress(_this2.minimizeDetail);
                        });
                        this.renderMinimized();
                        if (isIE11) {
                            modalOverlay.classList.add('hidden');
                            this.modal.classList.add('hidden');
                        } else {
                            this.modal.classList.remove('slideInDown');
                            this.modal.classList.add('fadeOutFast');
                            modalOverlay.classList.add('fadeOutFast');
                        }
                        this.updateProgress(this.minimizeDetail);
                    }

                    modalOverlay.addEventListener('animationend', function (event) {
                        if (event.animationName === 'fadeOutFast') {
                            modalOverlay.classList.add('hidden');
                            _this2.modal.classList.add('hidden');
                        }
                        event.stopImmediatePropagation();
                    });
                }
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                var _this3 = this;

                this.shadowRoot.appendChild(this.styles);
                if (this.minimized) {
                    this.renderMinimized();
                } else {
                    this.renderFull();
                }
                this.addEventListener('xhrLoading', function (event) {
                    console.log(event.detail);
                    _this3.minimizeDetail = event.detail;
                    response = event.detail.response;
                });
            }
        }, {
            key: 'disconnectedCallback',
            value: function disconnectedCallback() {
                doc.removeEventListener('keydown', this.bindKeyPress);
                doc.body.removeEventListener('focus', this.maintainFocus);
            }
        }, {
            key: 'updateProgress',
            value: function updateProgress(data) {
                var minimizedContainer = this.shadowRoot.querySelector('.pe-modal-container__minimized');
                if (minimizedContainer !== null) {
                    var done = minimizedContainer.querySelector('#done'),
                        progress = minimizedContainer.querySelector('#progress');

                    done.innerHTML = data.done;
                    progress.innerHTML = data.progress;
                }
            }
        }, {
            key: 'renderFull',
            value: function renderFull() {
                var _this4 = this;

                // Get component attributes
                var titleText = this.getAttribute('titleText'),
                    triggerId = this.getAttribute('triggerId'),
                    footer = this.hasAttribute('footer');

                // Create elements
                // create the footer
                if (footer) {
                    this.renderfooter(this.clone);
                }

                var overlayButtonClone = overlayButtonTemplate.content,
                    overlayEntryPoint = this.clone.querySelector('#modalPlaceholder');

                overlayEntryPoint.parentNode.insertBefore(overlayButtonClone, overlayEntryPoint.nextElementSibling);
                overlayEntryPoint.remove();

                var title = this.clone.querySelector('#dialogHeading');
                if (titleText !== null) {
                    title.innerHTML = titleText;
                } else {
                    title.innerHTML = 'Modal Title';
                }

                // functionality
                this.body = doc.querySelector('body');
                this.main = doc.querySelector('main');
                this.triggerBtn = doc.querySelector('#' + triggerId);

                this.modal = this.clone.querySelector('#modal');
                this.eventBtns = this.modal.querySelectorAll('[data-event]');
                this.overlay = this.clone.querySelector('#modalOverlay');

                // When the modal trigger is clicked, open modal
                if (this.triggerBtn !== null) {
                    this.triggerBtn.addEventListener('click', this.openModal);
                }

                this.eventBtns.forEach(function (btn) {
                    btn.addEventListener('click', function (e) {
                        var eventType = e.target.dataset.event;
                        if (btn.id === 'closeButton') {
                            _this4.closeModal(eventType);
                        } else if (btn.id === 'minimizeButton') {
                            _this4.minimized = true;
                        } else if (btn.id === 'successButton') {
                            console.log('success');
                            _this4.closeModal(eventType);
                        }
                    });
                });

                // sets the positioning for modals that are programmatically created and have scrolling content
                this.setPosition();
                this.shadowRoot.appendChild(this.clone);
                doc.addEventListener('keydown', this.bindKeyPress);
                doc.body.addEventListener('focus', this.maintainFocus, true);
            }
        }, {
            key: 'renderMinimized',
            value: function renderMinimized() {
                var _this5 = this;

                this.shadowRoot.appendChild(this.minimizedClone);
                var expandButton = this.shadowRoot.querySelector('#expandButton');
                expandButton.addEventListener('click', function (event) {
                    _this5.minimized = false;
                });
                setTimeout(function () {
                    expandButton.focus();
                }, 500);
            }
        }, {
            key: 'openModal',
            value: function openModal(e) {
                var _this6 = this;

                var thisButton = e.currentTarget,
                    buttonDisabled = thisButton.getAttribute('disabled');
                this.style.display = 'block';
                if (buttonDisabled === null) {
                    thisButton.setAttribute('disabled', true);
                    this.main.setAttribute('aria-hidden', 'true');
                    this.overlay.removeAttribute('disabled');
                }

                this.overlay.classList.remove('hidden');
                this.overlay.classList.remove('fadeOut');
                this.overlay.classList.add('fadeIn');

                this.modal.classList.remove('hidden');
                this.modal.classList.remove('slideOutDown');
                this.modal.classList.add('slideInDown');
                this.open = true;

                setTimeout(function () {
                    _this6.maintainFocus();
                }, 250);
            }
        }, {
            key: 'closeModal',
            value: function closeModal(eventName) {
                var _this7 = this;

                this.triggerBtn.removeAttribute('disabled');
                this.main.setAttribute('aria-hidden', 'false');
                this.body.classList.remove('hide-overflow');

                this.overlay.classList.remove('fadeIn');
                this.overlay.classList.add('fadeOut');

                this.modal.classList.remove('slideInDown');
                this.modal.classList.add('slideOutDown');

                setTimeout(function () {
                    _this7.modal.classList.add('hidden');
                    _this7.modal.classList.remove('slideOutDown');
                }, 400);

                setTimeout(function () {
                    _this7.dispatchEvent(new CustomEvent(eventName, {
                        bubbles: true,
                        composed: true,
                        detail: {
                            response: response
                        }
                    }));
                }, 500);

                setTimeout(function () {
                    _this7.overlay.classList.add('hidden');
                    _this7.overlay.classList.remove('fadeOut');
                }, 800);

                setTimeout(function () {
                    _this7.triggerBtn.focus();
                }, 801);

                this.open = false;
            }
        }, {
            key: 'maintainFocus',
            value: function maintainFocus() {
                // if the modal is not open, stop the function
                if (!this.open) return;

                /**
                 * The DOM we want to trap focus in. If the consumer passed in
                 * focusable children, it's the Light DOM; else, it's the Shadow DOM.
                 */
                var targetDOM = getFocusableChildren(this).length > 0 ? this : this.modal;

                // if neither the Light DOM nor the Shadow DOM within the modal contain
                // the active element, set focus back into the targetDOM.
                if (!this.contains(getDeepActiveElement()) && !this.modal.contains(getDeepActiveElement())) {
                    setFocusToFirstChild(targetDOM);
                }
            }
        }, {
            key: 'bindKeyPress',
            value: function bindKeyPress(e) {
                if (this.open && e.which === ESCAPE_KEY) {
                    this.closeModal('cancel');
                }
                if (this.open && e.which === TAB_KEY) {
                    trapTabKey(e, this, this.modal);
                }
            }
        }, {
            key: 'setPosition',
            value: function setPosition() {
                var _this8 = this;

                setTimeout(function () {
                    var modalPosition = _this8.modal.getBoundingClientRect();
                    w.scrollTo(0, 0);
                    if (modalPosition.top <= 0) {
                        _this8.modal.style.top = '50px';
                        _this8.modal.style.transform = 'translate(-50%)';
                        _this8.modal.style.marginBottom = '50px';
                    }
                }, 100);
            }
        }, {
            key: 'renderfooter',
            value: function renderfooter(parentNode) {
                var _this9 = this;

                var successBtnText = this.getAttribute('successBtnText'),
                    cancelBtnText = this.getAttribute('cancelBtnText');

                var actionsClone = actionsTemplate.content.cloneNode(true),
                    cancelButton = actionsClone.querySelector('#cancelButton'),
                    saveButton = actionsClone.querySelector('#successButton');

                var modalBody = parentNode.querySelector('#dialogDescription');

                if (cancelBtnText !== null) {
                    cancelButton.innerHTML = cancelBtnText;
                }

                if (successBtnText !== null) {
                    saveButton.innerHTML = successBtnText;
                }
                saveButton.addEventListener('click', function (event) {
                    var eventType = event.target.dataset.event;
                    _this9.closeModal(eventType);
                });
                modalBody.parentNode.insertBefore(actionsClone, modalBody.nextSibling);
            }
        }, {
            key: 'footer',
            get: function get() {
                return this.hasAttribute('footer');
            },
            set: function set(value) {
                var isfooterShown = Boolean(value);

                if (isfooterShown) {
                    this.setAttribute('footer', '');
                } else {
                    this.removeAttribute('footer');
                }
            }
        }, {
            key: 'minimized',
            get: function get() {
                return this.hasAttribute('minimized');
            },
            set: function set(value) {
                var isMinimized = Boolean(value);
                if (isMinimized) {
                    this.setAttribute('minimized', '');
                } else {
                    this.removeAttribute('minimized');
                }
            }
        }]);

        return Modal;
    }(HTMLElement);

    customElements.define('upload-modal', Modal);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  template.innerHTML = '\n  <style>\n.pe-alert{visibility:hidden;opacity:0;color:#252525;z-index:2000}@media (max-width:480px){.pe-alert{max-width:440px;padding:4px}}.pe-alert.alert--info,.pe-alert.alert--success{border-left-color:#19a6a4}.pe-alert.alert--error .pe-alert-box{border-left-color:#db0020}.pe-alert.alert--error .pe-alert-box a{color:#db0020}.pe-alert.alert-inline{position:absolute}.pe-alert.alert-global{position:fixed;top:32px;left:0;margin:0 32px}@media (max-width:768px){.pe-alert.alert-global{top:36px;margin:0 24px}}.pe-alert-box{-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.16);box-shadow:0 1px 1px 0 rgba(0,0,0,.16);padding:8px;margin-bottom:1em;max-width:580px;-webkit-transition:all .2s ease;transition:all .2s ease;z-index:10;background:#fff;border:1px solid #c7c7c7;border-left:3px solid #19a6a4}.pe-alert-box .close-title{float:right;color:#6a7070;cursor:pointer}.pe-alert-box .alert-content-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:20px 4px 20px 20px}.pe-alert-box .alert-title{margin-right:4px;display:inline;font-size:14px;font-weight:400;top:-12px;position:relative}.pe-alert-box .alert-text{display:inline}.pe-alert button.pe-icon{background-color:transparent;border:0;padding:0;position:relative;overflow:visible}.pe-alert button.pe-icon:focus{outline:0}.pe-alert button.pe-icon::-moz-focus-inner{border:0}.pe-alert button.pe-icon:focus:after{display:block;border:2px solid #0b73da;border-radius:4px;content:"";height:-webkit-calc(100% + 8px);height:calc(100% + 8px);left:-6px;position:absolute;top:-6px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);z-index:1}.pe-alert img.pe-icon:not([src=""]){margin-right:12px;width:18px;height:18px}.pe-alert svg{width:24px;height:24px}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.fadeIn,.slideInDown{opacity:1;visibility:visible}.fadeOut,.slideOutDown{opacity:0;visibility:hidden}.animated.slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}.animated.slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}.animated.fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}.animated.fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}@media (prefers-reduced-motion){.animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}\t</style>\n\t<div id="peAlert" class="pe-alert" role="dialog" aria-labelledby="alertTitle" aria-describedby="alertText">\n\t\t<div class="pe-alert-box">\n\t\t\t<button data-action="close-alert" class="close-title pe-icon pe-icon--btn remove-sm-24" aria-label="Close Lorem ipsum dolor sit amet.">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="remove-sm-24" class="pe-icon--remove-sm-24"\n\t\t\t\t viewBox="0 0 24 24" focusable="false" aria-hidden="true">\n\t\t\t\t\t<path d="M13.4092,11.9999 L17.7082,7.7009 C18.0972,7.3119 18.0972,6.6809 17.7082,6.2919 C17.3192,5.9029 16.6882,5.9029 16.2992,6.2919 L12.0002,10.5909 L7.7012,6.2919 C7.3122,5.9029 6.6812,5.9029 6.2922,6.2919 C5.9022,6.6809 5.9022,7.3119 6.2922,7.7009 L10.5912,11.9999 L6.2922,16.2989 C5.9022,16.6879 5.9022,17.3189 6.2922,17.7079 C6.4862,17.9029 6.7412,17.9999 6.9962,17.9999 C7.2512,17.9999 7.5062,17.9029 7.7012,17.7079 L12.0002,13.4089 L16.2992,17.7079 C16.4932,17.9029 16.7482,17.9999 17.0032,17.9999 C17.2582,17.9999 17.5132,17.9029 17.7082,17.7079 C18.0972,17.3189 18.0972,16.6879 17.7082,16.2989 L13.4092,11.9999 Z" />\n\t\t\t\t</svg>\n\t\t\t</button>\n\t\t\t<div id="contentContainer" class="alert-content-container">\n\t\t\t\t<img id="icon" class="pe-icon" src="" aria-hidden="true">\n\t\t\t\t<div id="content" class="alert-content" aria-hidden="true">\n\t\t\t\t\t<slot></slot>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-alert');

  var SUCCESS_ICON_URI = "data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 18 18' %3E%3Cpath fill='%2319a6a4' d='M5.7176,18 C5.4406,18 5.1736,17.885 4.9846,17.68 L0.2666,12.589 C-0.1084,12.184 -0.0854,11.551 0.3206,11.176 C0.7246,10.799 1.3566,10.823 1.7336,11.229 L5.6126,15.415 L16.1826,0.424 C16.5016,-0.028 17.1246,-0.135 17.5756,0.183 C18.0276,0.501 18.1356,1.125 17.8176,1.576 L6.5346,17.576 C6.3616,17.823 6.0846,17.978 5.7836,17.998 C5.7616,17.999 5.7396,18 5.7176,18' /%3E%3C/svg%3E";

  var ERROR_ICON_URI = "data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 18 18'%3E%3Cpath fill='%23db0020' d='M9.9999375,12.4775 C9.9999375,12.7525 9.7749375,12.9775 9.4999375,12.9775 L8.4999375,12.9775 C8.2249375,12.9775 7.9999375,12.7525 7.9999375,12.4775 L7.9999375,7.4775 C7.9999375,7.2025 8.2249375,6.9775 8.4999375,6.9775 L9.4999375,6.9775 C9.7749375,6.9775 9.9999375,7.2025 9.9999375,7.4775 L9.9999375,12.4775 Z M9.9999375,15.4775 C9.9999375,15.7525 9.7749375,15.9775 9.4999375,15.9775 L8.4999375,15.9775 C8.2249375,15.9775 7.9999375,15.7525 7.9999375,15.4775 L7.9999375,14.4775 C7.9999375,14.2025 8.2249375,13.9775 8.4999375,13.9775 L9.4999375,13.9775 C9.7749375,13.9775 9.9999375,14.2025 9.9999375,14.4775 L9.9999375,15.4775 Z M17.9469375,17.2535 L9.4469375,0.2535 C9.2769375,-0.0845 8.7229375,-0.0845 8.5529375,0.2535 L0.0529375,17.2535 C-0.0240625,17.4095 -0.0170625,17.5925 0.0739375,17.7405 C0.1659375,17.8875 0.3269375,17.9775 0.4999375,17.9775 L17.4999375,17.9775 C17.6729375,17.9775 17.8339375,17.8875 17.9259375,17.7405 C18.0169375,17.5925 18.0239375,17.4095 17.9469375,17.2535 L17.9469375,17.2535 Z' /%3E%3C/svg%3E";

  var Alert = function (_HTMLElement) {
    _inherits(Alert, _HTMLElement);

    function Alert() {
      _classCallCheck(this, Alert);

      var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.alert = clone.querySelector('#peAlert');
      _this.contentContainer = clone.querySelector('#contentContainer');
      _this.icon = clone.querySelector('#icon');
      _this.content = clone.querySelector('#content');
      _this.closeBtn = clone.querySelector('button[data-action="close-alert"]');

      _this.shadowRoot.appendChild(clone);

      _this._onClose = _this._onClose.bind(_this);
      _this._onAnimationEnd = _this._onAnimationEnd.bind(_this);
      return _this;
    }

    _createClass(Alert, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (this.isAnimated) {
          this.alert.classList.toggle('animated');
        }

        if (this.type === 'error') {
          this.contentContainer.setAttribute('role', 'alert');
          this.contentContainer.setAttribute('aria-live', 'assertive');
          this.icon.src = ERROR_ICON_URI;
        } else {
          if (this.type === 'success') this.icon.src = SUCCESS_ICON_URI;

          this.contentContainer.setAttribute('role', 'status');
          this.contentContainer.setAttribute('aria-live', 'polite');
        }

        this.alert.classList.add('alert-' + this.level);
        this.alert.classList.add('alert--' + this.type);

        if (this.level === 'global') {
          this.alert.classList.add('slideInDown');
        }
        if (this.level === 'inline') {
          this.alert.classList.add('fadeIn');
        }

        this.content.setAttribute('aria-hidden', 'false');
        this.closeBtn.addEventListener('click', this._onClose);

        this.alert.addEventListener('animationend', this._onAnimationEnd);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {

        this.alert.removeEventListener('animationend', this._onAnimationEnd);
        this.closeBtn.removeEventListener('click', this._onClose);

        document.querySelector('pearson-uploader').shadowRoot.querySelector('upload-modal #attachFiles').focus();
      }
    }, {
      key: '_onClose',
      value: function _onClose() {
        if (this.level === 'global') {
          this.alert.classList.add('slideOutDown');
        }
        if (this.level === 'inline') {
          this.alert.classList.add('fadeOut');
        }

        this.dispatchEvent(new Event('dismiss', {
          bubbles: true
        }));
      }
    }, {
      key: '_onAnimationEnd',
      value: function _onAnimationEnd(e) {
        var animationName = e.animationName;

        if (animationName === 'fadeOut' || animationName === 'slideOutDown') {
          this.remove();
        }
        if (animationName === 'fadeIn' || animationName === 'slideInDown') {
          if (this.focusOnOpen) {
            this.closeBtn.focus();
          }
        }
      }
    }, {
      key: 'isAnimated',
      get: function get() {
        return this.hasAttribute('animated');
      }
    }, {
      key: 'focusOnOpen',
      get: function get() {
        return this.hasAttribute('focusOnOpen');
      }
    }, {
      key: 'level',
      get: function get() {
        return this.getAttribute('level');
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }]);

    return Alert;
  }(HTMLElement);

  customElements.define('pearson-upload-alert', Alert);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template');

  var COPYRIGHT_TEXT = 'Copyright \xA9 1996-' + new Date().getFullYear() + ' Pearson Education Inc. All Rights Reserved.';

  template.innerHTML = ' \n  <style>\n\n.hidden{display:none!important}*{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;bottom:0;width:inherit;padding:0 1em 24px;font-family:Open Sans,Arial,Helvetica,sans-serif;font-size:14px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}@media (max-width:979px){:host{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}:host ul{margin-bottom:12px}:host ul li{border:0}}:host([theme=dark]) .copyright,:host([theme=dark]) a,:host([theme=dark]) li{color:#fff;border-color:#fff}a{color:#047b9c}a:focus,a:hover{color:#005a70;text-decoration:none}ul{margin:0;padding:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}li{margin-right:.65em;padding-right:.65em;border-right:1px solid #252525}@media (max-width:979px){li:last-child{border:0}}.copyright{margin:0;color:#252525}@media (max-width:979px){.copyright{text-align:center}}\n</style>\n  \n  <ul class="links">\n    <li class="terms"><a href="https://www.pearson.com/us/terms-of-use.html" target="_blank">Terms of Use</a></li>\n    <li class="privacy"><a href="https://www.pearson.com/us/privacy-statement.html" target="_blank">Privacy Policy</a></li>\n    <li class="accessibility hidden"><a href="https://www.pearson.com/us/accessibility.html" target="_blank">Accessibility</a></li>\n    <li class="patent hidden"><a href="https://www.pearson.com/us/patent-notice.html" target="_blank">Patent Notice</a></li>\n    <li class="support hidden"><a href="https://www.pearson.com/us/support.html" target="_blank">Support</a></li>\n  </ul>\n  <p class="copyright">' + COPYRIGHT_TEXT + '</p>\n';

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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      expandIconTemplate = doc.createElement('template'),
      collapseIconTemplate = doc.createElement('template'),
      notificationTemplate = doc.createElement('template'),
      overlayTemplate = doc.createElement('template'),
      menuTemplate = doc.createElement('template'),
      menuButtonTemplate = doc.createElement('template'),
      loginButtonTemplate = doc.createElement('template'),
      whiteLogoTemplate = doc.createElement('template'),
      colorLogoTemplate = doc.createElement('template');

  template.innerHTML = ' \n <style>\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host [hidden],:host template{display:none}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}:host .fadeIn,:host .slideInDown{opacity:1!important;visibility:visible!important}:host .fadeOut,:host .slideOutDown{opacity:0;visibility:hidden}:host .slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}:host .fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}:host .fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}:host .animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}:host .animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){:host .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}:host html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}:host html{font-size:14px}:host *,:host html{-webkit-box-sizing:border-box;box-sizing:border-box}:host body{font-family:Open Sans,Arial,Helvetica,sans-serif}:host body,:host p{font-size:14px;line-height:1.5;font-weight:400}:host strong{font-weight:600}:host a{font-size:14px;color:#047a9c}:host a:hover{color:#03536a;text-decoration:none}:host a:focus{outline:2px solid #0b73da;outline-offset:4px}:host button{cursor:pointer}:host li,:host ul{font-size:14px}:host #main{max-width:1280px;margin:0 auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){:host iframe .gr-grid-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}:host .gr-grid-container{display:grid;display:-ms-grid;grid-template-columns:repeat(4,1fr);grid-column-gap:16px;grid-row-gap:16px;margin:0 39.5px}@media (min-width:351px){:host .gr-grid-container{margin:0 31.5px}}@media (min-width:399px){:host .gr-grid-container{margin:0 39.5px}}@media (min-width:447px){:host .gr-grid-container{margin:0 79.5px}}@media (min-width:591px){:host .gr-grid-container{grid-template-columns:repeat(8,1fr);margin:0 83.5px}}@media (min-width:727px){:host .gr-grid-container{margin:0 103.5px;grid-column-gap:24px;grid-row-gap:24px}}@media (min-width:887px){:host .gr-grid-container{grid-template-columns:repeat(12,1fr);margin:0 71.5px}}@media (min-width:887px) and (-ms-high-contrast:active),(min-width:887px) and (-ms-high-contrast:none){:host .gr-grid-container>*{margin-right:12px;margin-left:12px;margin-bottom:24px}}@media (min-width:983px){:host .gr-grid-container{margin:0 71.5px}}@media (min-width:1079px){:host .gr-grid-container{margin:0 71.5px}}@media (min-width:1175px){:host .gr-grid-container{margin:0 76px}}:host .gr-grid-container .gr-col-two{grid-column-start:2}:host .gr-grid-container .gr-col-three{grid-column-start:3}:host .gr-grid-container .gr-col-four{grid-column-start:4}:host .gr-grid-container .gr-col-five{display:none}@media (min-width:591px){:host .gr-grid-container .gr-col-five{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:5}}:host .gr-grid-container .gr-col-six{display:none}@media (min-width:591px){:host .gr-grid-container .gr-col-six{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:6}}:host .gr-grid-container .gr-col-seven{display:none}@media (min-width:591px){:host .gr-grid-container .gr-col-seven{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:7}}:host .gr-grid-container .gr-col-eight{display:none}@media (min-width:591px){:host .gr-grid-container .gr-col-eight{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:8}}:host .gr-grid-container .gr-col-nine{display:none}@media (min-width:887px){:host .gr-grid-container .gr-col-nine{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:9}}:host .gr-grid-container .gr-col-ten{display:none}@media (min-width:887px){:host .gr-grid-container .gr-col-ten{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:10}}:host .gr-grid-container .gr-col-eleven{display:none}@media (min-width:887px){:host .gr-grid-container .gr-col-eleven{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:11}}:host .gr-grid-container .gr-col-twelve{display:none}@media (min-width:887px){:host .gr-grid-container .gr-col-twelve{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:12}}:host .gr-col-span-one{grid-column-end:span 1}:host .gr-col-span-two{grid-column-end:span 2}:host .gr-col-span-three{grid-column-end:span 3}:host .gr-col-span-four{grid-column-end:span 4}@media (min-width:591px){:host .gr-col-span-five{grid-column-end:span 5}}@media (min-width:591px){:host .gr-col-span-six{grid-column-end:span 6}}@media (min-width:591px){:host .gr-col-span-seven{grid-column-end:span 7}}@media (min-width:591px){:host .gr-col-span-eight{grid-column-end:span 8}}@media (min-width:887px){:host .gr-col-span-nine{grid-column-end:span 9}}@media (min-width:887px){:host .gr-col-span-ten{grid-column-end:span 10}}@media (min-width:887px){:host .gr-col-span-eleven{grid-column-end:span 11}}@media (min-width:887px){:host .gr-col-span-twelve{grid-column-end:span 12}}:host .gr-row-one{grid-row-start:1}:host .gr-row-two{grid-row-start:2}:host .gr-row-three{grid-row-start:3}:host .gr-row-four{grid-row-start:4}:host .gr-row-five{grid-row-start:5}:host .gr-row-six{grid-row-start:6}:host .gr-row-seven{grid-row-start:7}:host .gr-row-eight{grid-row-start:8}:host .gr-row-nine{grid-row-start:9}:host .gr-row-ten{grid-row-start:10}:host .gr-row-eleven{grid-row-start:11}:host .gr-row-twelve{grid-row-start:12}:host .gr-row-thirteen{grid-row-start:13}:host .gr-row-fourteen{grid-row-start:14}:host .gr-row-fifteen{grid-row-start:15}:host .gr-row-span-two{grid-row-end:span 2}:host .gr-row-span-three{grid-row-end:span 3}:host .gr-row-span-four{grid-row-end:span 4}:host .gr-row-span-five{grid-row-end:span 5}:host .gr-row-span-six{grid-row-end:span 6}:host .gr-row-span-seven{grid-row-end:span 7}:host .gr-row-span-eight{grid-row-end:span 8}:host .gr-row-span-nine{grid-row-end:span 9}:host .gr-row-span-ten{grid-row-end:span 10}:host .gr-row-span-eleven{grid-row-end:span 11}:host .gr-row-span-twelve{grid-row-end:span 12}:host .no-border{border:0}:host .icon-18{width:18px;height:18px}:host .icon-24{width:24px;height:24px}:host .hidden{display:none!important}:host .gr-h1{font-size:24px;line-height:28px}:host .gr-h1,:host .gr-h2{font-weight:400;margin-top:0}:host .gr-h2{font-size:20px;line-height:26px}:host .gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}:host .gr-label{font-size:12px;line-height:16px;color:#6a7070;display:block;margin-bottom:4px}:host .gr-meta{font-size:12px;line-height:12px;color:#6a7070}:host .gr-semi-bold{font-weight:600}:host .gr-font-large{font-size:16px;line-height:24px}:host .gr-font-normal{font-size:14px;line-height:20px}:host .gr-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:16px;cursor:pointer;border-radius:22px;position:relative;margin:12px}:host .gr-btn:hover{color:#252525;border:1px solid #252525}:host .gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}:host .gr-btn.primary:hover{color:#fff;background-color:#035f79}:host .gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}:host .gr-btn.attention:hover{background-color:#f7aa00}:host .gr-btn.small{min-width:128px;padding:7px 20px;font-size:14px}:host .gr-btn.small:focus:after{padding:18px 21px}:host .gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:16px}:host .gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}:host .gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}:host .gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}:host .gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}:host .gr-btn.no-border,:host .gr-btn.no-border:hover{border:0}:host .gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}:host .gr-header{height:70px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#6a7070;padding:0 1em;background:transparent;grid-column:1/5}@media (min-width:591px){:host .gr-header{grid-column:1/9}}@media (min-width:887px){:host .gr-header{grid-column:1/13}}:host .gr-header.light{background:#f5f5f5}:host .gr-header.light .logo{background-image:url(https://pearsonux.sfo2.digitaloceanspaces.com/PearsonIcon.svg)}:host .gr-header.light .logo,:host .gr-header .logo{background-position:0;background-size:40px;background-repeat:no-repeat}:host .gr-header .logo{background-image:url(https://pearsonux.sfo2.digitaloceanspaces.com/PearsonIconWhite.svg);width:48px;height:64px}:host .gr-header .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}:host .gr-header.light button,:host .gr-header.light button:hover{color:#252525}:host .gr-header.light button:focus .avatar{background:#252525;color:#f5f5f5}:host .gr-header.light button .notification{border-color:#252525}:host #collapse{display:none}:host .gr-header button{color:#fff;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0!important}:host .gr-header button:hover{color:#fff}:host .gr-header button:hover svg{fill:currentColor}:host .gr-header button .notification{width:15px;height:15px;background:#da0474;border-radius:50%;border:3px solid #fff;position:absolute;right:-3px;bottom:-3px}:host .gr-header button:focus{-webkit-box-shadow:none;box-shadow:none}:host .gr-header button:focus .avatar{position:relative;background:#fff;color:#047a9c}:host .gr-header button:focus .avatar+svg{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;border-radius:5px}:host .gr-header button:focus #expand{display:none}:host .gr-header button:focus #collapse{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}:host .gr-header svg{fill:currentColor}:host .gr-header .notification{color:#da0474}:host .gr-header .notification>svg{right:-37px;position:relative;top:-5px;fill:currentColor;border-radius:50%;border:1px solid #fff}@media (max-width:640px){:host .gr-header .notification>svg{right:-33px}}:host .gr-header .username{margin-left:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px}@media (max-width:640px){:host .gr-header .name{display:none}}@media (min-width:640px){:host .gr-header .nameicon{display:none}}:host .gr-header .avatar{margin-right:.5em;position:relative;width:45px;height:45px;border:3px solid #fff;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}:host .gr-header .avatar span{font-weight:700}:host .gr-header.light .avatar{border:3px solid #252525}:host .gr-header .avatar img{height:25px;width:25px;border-radius:50%}:host .gr-header .avatar+.name+.nameicon{display:none}:host .header-menu{border:1px solid #efefef;border-radius:8px;width:320px;padding:24px}@media (min-width:591px){:host .header-menu{width:360px}}:host .header-menu ul{margin:0;padding:0;list-style-type:none}:host .header-btn{width:100%;background:none;border:0;margin:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0;border-radius:0}:host .header-btn:hover{border:0}:host .header-btn:focus{outline:0;-webkit-box-shadow:0 0 0 11px #fff,0 0 0 13px #1977d4;box-shadow:0 0 0 11px #fff,0 0 0 13px #1977d4;border-radius:5px}:host .header-btn .icon svg{fill:#6a7070}:host .header-btn .text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}@-webkit-keyframes fadeInLight{0%{opacity:0;visibility:hidden}to{opacity:.4;visibility:visible}}@keyframes fadeInLight{0%{opacity:0;visibility:hidden}to{opacity:.4;visibility:visible}}:host .animateInLight{-webkit-animation-name:fadeInLight;animation-name:fadeInLight;-webkit-animation-duration:4s;animation-duration:4s}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-15%,0);transform:translate3d(0,-15%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}:host .slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}:host #main{position:relative}:host .actions button{font-family:Open Sans,Arial,Helvetica,sans-serif;font-weight:400!important;background:none;border:0}:host .gr-header.open button .avatar{position:relative;background:#fff;color:#047a9c}:host .header-menu{font-family:Open Sans,Arial,Helvetica,sans-serif;width:360px;z-index:10000000;background:#fff;position:absolute;right:0}:host .header-menu li{padding-bottom:16px;margin-bottom:16px;border-bottom:1px solid #c7c7c7}:host .header-menu li:last-child{border-bottom:0;margin:0;padding:0}:host .console-link:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;border-radius:5px}:host .gr-header .logo{width:49px;height:56px;background-position:5px!important}:host #loginToPearson{border:1px solid #6a7070;padding:8px 24px!important}:host .transparent #loginToPearson{border:1px solid #fff;padding:8px 24px!important}:host #loginToPearson:hover{border:1px solid #252525}:host .transparent #loginToPearson:hover{border:1px solid #cdcdcd}:host #loginToPearson:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .gr-header .initials{text-transform:uppercase;font-weight:700}:host .gr-btn:focus-visible{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .gr-header .logo{background-image:none!important}:host .gr-header img{height:50px;margin-top:5px}:host .gr-header .group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}:host .gr-header .group a{margin-right:16px}:host .gr-btn.icon-btn-24 svg{margin-right:4px}:host .gr-btn:focus{outline:1px solid transparent!important}:host .gr-header .avatar{border:1px solid}:host .gr-header.open button .avatar,:host .gr-header button:focus .avatar{color:#252525}:host .gr-header.light .avatar,:host .gr-header.light button .notification{border:1px solid #252525}:host .gr-header button .notification{height:12px;width:12px;border:1px solid #fff;right:0;bottom:0}\n\n\n</style>\n     <div id="main">\n         <header class="gr-header transparent">\n         <div class="group">\n                    <a class="console-link" href="https://console.pearson.com/console/home"> \n\n           </a>\n           <slot></slot>\n        </div>\n\n            <div class="actions">\n  \n            </div>\n          </header>\n      </div>\n';

  whiteLogoTemplate.innerHTML = '\n       <img src="https://pearsonux.sfo2.digitaloceanspaces.com/PearsonIconWhite.svg" alt="Pearson"/>\n  ';

  colorLogoTemplate.innerHTML = '\n         <img src="https://pearsonux.sfo2.digitaloceanspaces.com/PearsonIcon.svg" alt="Pearson" />\n  ';

  expandIconTemplate.innerHTML = '\n  \t<svg focusable="false" class="icon-24" aria-hidden="true">\n  \t    <path d="M8.09674611,10 L15.8979188,10 C16.5051081,10 16.9973323,10.4907428 16.9973323,11.0961048 C16.9973323,11.390812 16.8782997,11.6731038 16.6670916,11.8792872 L12.7665053,15.6870775 C12.3391074,16.1043075 11.6555575,16.1043075 11.2281596,15.6870775 L7.32757328,11.8792872 C6.89372798,11.4557632 6.88639729,10.7617864 7.31119972,10.3292468 C7.51800543,10.1186744 7.80114936,10 8.09674611,10 Z"></path>\n\t\t</svg>\n  ';

  collapseIconTemplate.innerHTML = '\n  \t\t<svg focusable="false" class="icon-24" aria-hidden="true">\n  \t    <path d="M8.09674611,15 C7.80114936,15 7.51800543,14.8813256 7.31119972,14.6707532 C6.88639729,14.2382136 6.89372798,13.5442368 7.32757328,13.1207128 L11.2281596,9.31292251 C11.6555575,8.8956925 12.3391074,8.8956925 12.7665053,9.31292251 L16.6670916,13.1207128 C16.8782997,13.3268962 16.9973323,13.609188 16.9973323,13.9038952 C16.9973323,14.5092572 16.5051081,15 15.8979188,15 L8.09674611,15 Z"></path>\n      </svg>\n  ';

  notificationTemplate.innerHTML = '\n       <span class="notification"></span> \n  ';

  overlayTemplate.innerHTML = ' \n    <div id="headerOverlay" aria-hidden="true" class="overlay animateInLight" style="\n        position:fixed;\n        height:100%;\n        width:100%;\n        background-color: #252525;\n        top:0;       \n        opacity:.4;\n     "></div>\n  ';

  menuTemplate.innerHTML = '\n  <div class="header-menu slideInDown">\n    <ul>\n      <li>\n        <button id="logout" class="gr-btn header-btn">\n          <div class="text">\n            <span class="gr-font-large">Log out</span>\n            <span class="gr-meta">Sign out of all Pearson products</span>\n          </div>\n          <div class="icon">\n          <svg focusable="false" class="icon-24" aria-hidden="true">\n        <path d="M16.7357409,12.6772865 L16.735721,12.6772745 C16.7265641,12.6872407 16.7170283,12.6971852 16.7071068,12.7071068 L9.70710678,19.7071068 C9.31658249,20.0976311 8.68341751,20.0976311 8.29289322,19.7071068 C7.90236893,19.3165825 7.90236893,18.6834175 8.29289322,18.2928932 L14.5857864,12 L8.29289322,5.70710678 C7.90236893,5.31658249 7.90236893,4.68341751 8.29289322,4.29289322 C8.68341751,3.90236893 9.31658249,3.90236893 9.70710678,4.29289322 L16.7071068,11.2928932 C17.0878409,11.6736274 17.0973856,12.2849891 16.7357409,12.6772865 Z"  fill-rule="nonzero"></path>\n      </svg>\n          </div>\n        </button>\n      </li> \n    </ul>\n  </div>\n  ';

  menuButtonTemplate.innerHTML = '\n  <button class="gr-btn icon-btn-24" aria-expanded="false" aria-haspopup="true">\n    <div class="avatar">\n      <span class="initials">DO</span>\n    </div>\n  </button>\n  ';

  loginButtonTemplate.innerHTML = '\n    <button id="loginToPearson" class="gr-btn">Sign in</button>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-header');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  function getInitials(string) {
    if (string !== null && string !== undefined) {
      return string.match(/\b(\w)/g).join('');
    } else {
      return;
    }
  }

  var Header = function (_HTMLElement) {
    _inherits(Header, _HTMLElement);

    _createClass(Header, [{
      key: 'loggedIn',
      get: function get() {
        return this.hasAttribute('loggedin');
      }
    }, {
      key: 'name',
      get: function get() {
        return this.getAttribute('name');
      }
    }, {
      key: 'theme',
      get: function get() {
        return this.getAttribute('theme');
      },
      set: function set(color) {
        this.setAttribute('theme', color);
      }
    }, {
      key: 'notifications',
      get: function get() {
        return this.getAttribute('notifications');
      },
      set: function set(number) {
        this.setAttribute('notifications', number);
      }
    }, {
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
        return ['open', 'notifications', 'theme', 'name', 'loggedin'];
      }
    }]);

    function Header() {
      _classCallCheck(this, Header);

      var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true);

      _this.header = clone.querySelector('.gr-header');
      _this.button = clone.querySelector('.gr-header button');

      /** After all this, we can append our clone to the shadowRoot */
      _this.shadowRoot.appendChild(clone);

      _this.renderMenu = _this.renderMenu.bind(_this);
      _this.renderLoggedIn = _this.renderLoggedIn.bind(_this);
      _this.renderLoggedOut = _this.renderLoggedOut.bind(_this);
      return _this;
    }

    _createClass(Header, [{
      key: 'renderMenu',
      value: function renderMenu() {
        var _this2 = this;

        var expandClone = expandIconTemplate.content.cloneNode(true);
        this.avatar = this.shadowRoot.querySelector('.gr-header button .avatar');
        this.button = this.shadowRoot.querySelector('.gr-header button');
        this.initalNode = this.avatar.querySelector('.initials');
        this.initials = getInitials(this.name);
        this.initalNode.innerHTML = this.initials;

        if (!this.open) {
          this.button.appendChild(expandClone);
        }

        this.button.addEventListener('click', function (event) {

          if (!_this2.open) {

            _this2.open = true;
            // add keyboard accessibility for buttons

            var headerMenu = _this2.shadowRoot.querySelector('.header-menu'),
                focusableItems = headerMenu.querySelectorAll('button'),
                firstFocusableItem = focusableItems[0],
                lastFocusableItem = focusableItems[focusableItems.length - 1];

            headerMenu.addEventListener('animationend', function (event) {
              firstFocusableItem.focus();
            });

            focusableItems.forEach(function (button, index) {
              button.setAttribute('data-index', index);
              button.addEventListener('keydown', function (event) {
                var nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
                    prevButton = parseInt(event.target.getAttribute('data-index')) - 1;

                if (event.key === 'ArrowUp') {
                  event.preventDefault();
                  if (_this2.shadowRoot.activeElement === firstFocusableItem) {
                    lastFocusableItem.focus();
                  } else {
                    focusableItems[prevButton].focus();
                  }
                }

                if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  if (_this2.shadowRoot.activeElement === lastFocusableItem) {
                    firstFocusableItem.focus();
                  } else {
                    focusableItems[nextButton].focus();
                  }
                }

                if (event.key === 'Home') {
                  firstFocusableItem.focus();
                }

                if (event.key === 'End') {
                  lastFocusableItem.focus();
                }

                if (event.key === 'Escape') {
                  _this2.removeAttribute('open');
                  _this2.button.focus();
                }
              });
            });
          } else {
            _this2.removeAttribute('open');
            console.log(_this2.button);
          }
        });
      }
    }, {
      key: 'renderLoggedIn',
      value: function renderLoggedIn() {
        var loginButton = this.shadowRoot.querySelector('.gr-header .actions button'),
            menuButtonClone = menuButtonTemplate.content.cloneNode(true),
            menuButtonTarget = this.shadowRoot.querySelector('.gr-header .actions');

        if (loginButton) {
          loginButton.remove();
        }

        menuButtonTarget.appendChild(menuButtonClone);
        this.renderMenu();
      }
    }, {
      key: 'renderLoggedOut',
      value: function renderLoggedOut() {
        var loginButtonClone = loginButtonTemplate.content.cloneNode(true),
            loginButtonTarget = this.shadowRoot.querySelector('.gr-header .actions'),
            menuButton = this.shadowRoot.querySelector('.gr-header .actions button');

        if (menuButton) {
          menuButton.remove();
        }

        loginButtonTarget.appendChild(loginButtonClone);
        var loginButton = this.shadowRoot.querySelector('.gr-header .actions button');

        loginButton.addEventListener('click', function (event) {
          location.href = "https://console.pearson.com/console/home";
        });
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var whiteLogo = whiteLogoTemplate.content.cloneNode(true),
            colorLogo = colorLogoTemplate.content.cloneNode(true);
        this.link = this.shadowRoot.querySelector('.gr-header .console-link');

        if (this.theme === 'light') {
          this.link.appendChild(colorLogo);
          this.header.classList.remove('transparent');
          this.header.classList.add('light');
        } else {
          this.link.appendChild(whiteLogo);
        }

        if (this.loggedIn) {
          this.renderLoggedIn();
        } else {
          this.renderLoggedOut();
        }
        var notificationClone = notificationTemplate.content.cloneNode(true);
        if (parseInt(this.notifications, 10) > 0) {
          var avatar = this.shadowRoot.querySelector('.avatar');
          avatar.appendChild(notificationClone);
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _this3 = this;

        var mainContent = document.querySelector('#main');
        if (name === 'loggedin') {
          if (oldValue !== newValue && oldValue === null) {
            this.renderLoggedIn();
          } else {
            this.renderLoggedOut();
          }
        }
        if (name === 'theme' && newValue === 'light') {
          this.header.classList.remove('transparent');
          this.header.classList.add('light');
        } else if (name === 'theme' && newValue === 'dark') {
          this.header.classList.remove('light');
          this.header.classList.add('transparent');
        }
        if (name === 'open') {
          if (newValue === 'true') {
            var header = this.shadowRoot.querySelector('.gr-header'),
                icon = this.shadowRoot.querySelector('.gr-header .actions button svg'),
                collapseIcon = collapseIconTemplate.content.cloneNode(true),
                overlay = overlayTemplate.content.cloneNode(true),
                main = this.shadowRoot.querySelector('#main'),
                menu = menuTemplate.content.cloneNode(true),
                headerLink = header.querySelector('.console-link');

            this.button.style.zIndex = '10';
            headerLink.setAttribute('tabindex', -1);
            main.setAttribute('tabindex', -1);
            this.button.setAttribute('aria-expanded', true);
            console.log('open');
            header.classList.add('open');
            header.setAttribute('aria-hidden', true);
            icon.remove();
            this.button.appendChild(collapseIcon);
            doc.body.appendChild(overlay);
            main.appendChild(menu);
            mainContent.setAttribute('aria-hidden', true);
            doc.addEventListener('click', function (event) {
              if (_this3.open) {
                var target = event.target;
                do {
                  if (target === _this3) {
                    return;
                  }
                  target = target.parentNode;
                } while (target);
                _this3.removeAttribute('open');
                _this3.button.focus();
              }
            }, true);

            var logoutButton = this.shadowRoot.querySelector('#logout');
            logoutButton.addEventListener('click', function (event) {
              _this3.removeAttribute('open');
              _this3.removeAttribute('loggedin');
              _this3.dispatchEvent(new CustomEvent('logout', {
                bubbles: true
              }));
            });

            if (this.theme === 'light') {
              this.avatar.style.background = '#252525';
              this.avatar.style.color = 'white';
            }
          } else if (newValue === null) {
            var _header = this.shadowRoot.querySelector('.gr-header'),
                _icon = this.shadowRoot.querySelector('.gr-header .actions button svg'),
                expandIcon = expandIconTemplate.content.cloneNode(true),
                _overlay = doc.querySelector('#headerOverlay'),
                menuNode = this.shadowRoot.querySelector('.header-menu'),
                _headerLink = _header.querySelector('.console-link'),
                _main = this.shadowRoot.querySelector('#main');

            if (this.theme === 'light') {
              this.avatar.style.background = 'transparent';
              this.avatar.style.color = '#252525';
            }
            this.button.style.zIndex = '0';

            _headerLink.removeAttribute('tabindex', -1);
            _main.removeAttribute('tabindex', -1);
            console.log(_main);
            this.button.setAttribute('aria-expanded', false);
            mainContent.setAttribute('aria-hidden', false);
            _header.setAttribute('aria-hidden', false);
            _header.classList.remove('open');
            _icon.remove();
            _overlay.remove();
            this.button.appendChild(expandIcon);
            menuNode.remove();
          }
        }
        if (name === 'notifications') {
          var notificationClone = notificationTemplate.content.cloneNode(true);
          if (parseInt(this.notifications, 10) > 0) {
            var avatar = this.shadowRoot.querySelector('.avatar');
            if (avatar !== null) {
              avatar.appendChild(notificationClone);
            }
          }
        }
      }
    }]);

    return Header;
  }(HTMLElement);

  customElements.define('pearson-header', Header);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  template.innerHTML = ' \n    <style>\n\n@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes fadein{0%{opacity:0}to{opacity:1}}@keyframes fadein{0%{opacity:0}to{opacity:1}}.pe-loadingSpinner{width:25px;height:25px;position:relative}.pe-loadingSpinner-container1>div,.pe-loadingSpinner-container2>div{width:4px;height:4px;background-color:#19a6a4;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.6s ease-in-out infinite;animation:bouncedelay 1.6s ease-in-out infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.pe-loadingSpinner .pe-loadingSpinner-container{position:absolute;width:100%;height:100%}.pe-loadingSpinner-container2{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.pe-loadingSpinner-container2 .circle1{-webkit-animation-delay:-1.4s;animation-delay:-1.4s}.pe-loadingSpinner-container1 .circle2{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.pe-loadingSpinner-container2 .circle2{-webkit-animation-delay:-1s;animation-delay:-1s}.pe-loadingSpinner-container1 .circle3{-webkit-animation-delay:-.8s;animation-delay:-.8s}.pe-loadingSpinner-container2 .circle3{-webkit-animation-delay:-.6s;animation-delay:-.6s}.pe-loadingSpinner-container1 .circle4{-webkit-animation-delay:-.4s;animation-delay:-.4s}.pe-loadingSpinner-container2 .circle4{-webkit-animation-delay:-.2s;animation-delay:-.2s}:host,:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host:before{content:"";display:inline-block;height:100%;vertical-align:middle}:host{width:200px;height:70px;padding:0 20px;margin:auto;background:#252525;color:#fff;border-radius:5px;font:14px/18px Open Sans,Calibri,Tahoma,sans-serif}:host,:host .loading-indicator{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}:host .label{margin-left:12px}#loaded-content main{-webkit-animation:fadein 2s;animation:fadein 2s}\n</style>\n    <div class="loading-indicator">\n      <div class="pe-loadingSpinner">\n        <div class="pe-loadingSpinner-container pe-loadingSpinner-container1">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n        </div>\n        <div class="pe-loadingSpinner-container pe-loadingSpinner-container2">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n        </div>\n      </div>\n      <span class="label" id="label"></span>\n\t\t</div>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-loader');

  // ARIA attributes (and values) required for accessibility
  var DEFAULT_A11Y_ATTRS = {
    role: 'progressbar',
    'aria-valuemin': '0',
    'aria-valuemax': '100',
    'aria-live': 'polite'
  };

  /**
   * Ensure that the provided node has the attributes in the provided attr collection.
   * @param {HTMLElement} node Element whose attributes we are ensuring
   * @param {Object} attrs Collection of attributes and values to assign to the node
   */
  function ensureAttrs(node, attrs) {
    for (var attrName in attrs) {
      var requiredVal = attrs[attrName];
      if (!node.hasAttribute(attrName) || node.getAttribute(attrName) !== requiredVal) {
        node.setAttribute(attrName, requiredVal);
      }
    }
  }

  var Loader = function (_HTMLElement) {
    _inherits(Loader, _HTMLElement);

    _createClass(Loader, [{
      key: 'loaded',
      get: function get() {
        return this.hasAttribute('loaded');
      },
      set: function set(newValue) {
        var isLoaded = Boolean(newValue);

        if (isLoaded) {
          this.setAttribute('loaded', '');
        } else {
          this.removeAttribute('loaded');
        }
      }
    }, {
      key: 'loadingStateLabel',
      get: function get() {
        return this.getAttribute('loadingStateLabel');
      },
      set: function set(newValue) {
        this.setAttribute('loadingStateLabel', newValue);
      }
    }, {
      key: 'finishedStateLabel',
      get: function get() {
        return this.getAttribute('finishedStateLabel');
      },
      set: function set(newValue) {
        this.setAttribute('finishedStateLabel', newValue);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['loaded'];
      }
    }]);

    function Loader() {
      _classCallCheck(this, Loader);

      var _this = _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.label = clone.querySelector('#label');

      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(Loader, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var loadingStateLabel = this.loadingStateLabel !== null ? this.loadingStateLabel : 'Loading...';
        var finishedStateLabel = this.finishedStateLabel !== null ? this.finishedStateLabel : 'Loaded!';

        var consumerAttrs = {
          loadingStateLabel: loadingStateLabel,
          finishedStateLabel: finishedStateLabel,
          'aria-label': loadingStateLabel
        };

        ensureAttrs(this, Object.assign({}, DEFAULT_A11Y_ATTRS, consumerAttrs));

        this.label.textContent = this.loadingStateLabel;
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _this2 = this;

        if (name === 'loaded') {
          var isLoaded = newValue !== null;
          var newLabel = isLoaded ? this.finishedStateLabel : this.loadingStateLabel;

          ensureAttrs(this, {
            'aria-label': newLabel
          });

          if (this.label.textContent !== newLabel) {
            this.label.textContent = newLabel;
          }

          if (isLoaded) {
            setTimeout(function () {
              _this2.remove();
            }, 250);
          }
        }
      }
    }]);

    return Loader;
  }(HTMLElement);

  customElements.define('pearson-loader', Loader);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var FOCUSABLE_ELEMENTS = '\n    a[href]:not([tabindex^="-"]):not([inert]),\n    area[href]:not([tabindex^="-"]):not([inert]),\n    input:not([disabled]):not([inert]),\n    select:not([disabled]):not([inert]),\n    textarea:not([disabled]):not([inert]),\n    button:not([disabled]):not([inert]),\n    iframe:not([tabindex^="-"]):not([inert]),\n    audio:not([tabindex^="-"]):not([inert]),\n    video:not([tabindex^="-"]):not([inert]),\n    [contenteditable]:not([tabindex^="-"]):not([inert]),\n    [tabindex]:not([tabindex^="-"]):not([inert])',
      TAB_KEY = 9,
      ESCAPE_KEY = 27,
      ICON_CLOSE_24 = '\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        xmlns:xlink="http://www.w3.org/1999/xlink"\n        version="1.1"\n        id="close-24" viewBox="0 0 24 24"\n        class="pe-icon-close-24"\n        aria-hidden="true"\n        focusable="false"\n        style="width:24px;height:24px;"\n      >\n        <path\n          d="M12,10.5857864 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.4142136,12 L18.7071068,17.2928932 C19.0976311,17.6834175 19.0976311,18.3165825 18.7071068,18.7071068 C18.3165825,19.0976311 17.6834175,19.0976311 17.2928932,18.7071068 L12,13.4142136 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.5857864,12 L5.29289322,6.70710678 C4.90236893,6.31658249 4.90236893,5.68341751 5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 L12,10.5857864 Z"\n        ></path>\n      </svg>\n  ',
      template = doc.createElement('template'),
      overlayTemplate = doc.createElement('template'),
      actionsTemplate = doc.createElement('template');

  function getDeepActiveElement() {
    var a = doc.activeElement;
    while (a && a.shadowRoot && a.shadowRoot.activeElement) {
      a = a.shadowRoot.activeElement;
    }
    return a;
  }

  function getFocusableChildren(node) {
    var filter = Array.prototype.filter,
        focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
    return filter.call(focusableChildren, function (child) {
      return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
    });
  }

  function setFocusToFirstChild(node) {
    var focusableChildren = getFocusableChildren(node),
        focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];
    if (focusableChild) {
      focusableChild.focus();
    }
  }

  function trapTabKey(e) {
    for (var _len = arguments.length, nodes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      nodes[_key - 1] = arguments[_key];
    }

    var focusableChildren = nodes.reduce(function (acc, n) {
      return acc.concat(getFocusableChildren(n));
    }, []),
        focusedItemIdx = focusableChildren.indexOf(getDeepActiveElement()),
        lastFocusableIdx = focusableChildren.length - 1;

    if (e.shiftKey && focusedItemIdx === 0) {
      if (focusableChildren[lastFocusableIdx !== undefined]) {
        focusableChildren[lastFocusableIdx].focus();
        e.preventDefault();
      }
    }

    if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
      if (focusableChildren[0] !== undefined) {
        focusableChildren[0].focus();
        e.preventDefault();
      }
    }
  }

  template.innerHTML = '\n<style>\n@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.fadeIn,.fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}\n.hidden{display:none}.hide-overflow{overflow:hidden}#modalOverlay{width:100%;height:100%;z-index:3;background-color:rgba(37,37,37,.6);position:fixed;top:0;left:0;margin:0;padding:0}[role=dialog]{border:thin solid #000;background-color:#fff;z-index:3;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}button.close[aria-label="Close Dialog"]{position:absolute;top:2px;right:2px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.close img{height:24px;width:24px}.pe-modal-container{width:600px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;font-family:Open Sans,Calibri,Tahoma,sans-serif;height:auto}.pe-modal-container.scroll{height:-webkit-calc(100% - 100px);height:calc(100% - 100px)}@media (max-width:767px){.modal{width:440px}}.pe-modal-container h2{margin:0 0 20px;padding-left:40px;padding-top:40px;padding-right:40px}.pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (max-width:480px){.pe-modal-container h2{font-size:20px}}.pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px;overflow:scroll;height:-webkit-calc(100% - 200px);height:calc(100% - 200px)}.pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}@media (max-width:767px){.pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (max-width:480px){.pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.pe-modal-container .actions button:last-child{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1;margin-right:1em}@media (max-width:480px){.pe-modal-container .actions button:last-child{margin:.5em 0}}.modal-container{position:absolute;width:100%;top:0;height:100%}.modal-container .modal{-webkit-transform:none;transform:none;position:relative;margin:0 auto;top:0;left:0}.elements .gr-btn{border-radius:3px;background-color:#e9e9e9;border:1px solid #c7c7c7;color:#252525}.elements .gr-btn:hover{background-color:#d9d9d9}.elements .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.elements .gr-btn.primary:hover{background:#005a70;border:1px solid #005a70}.elements .gr-btn.icon-btn-18{background-color:transparent;border:0}\n.deep-encapsulation .gr-h2{font-size:20px;line-height:1.5;font-weight:400;margin-top:0}.deep-encapsulation .gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;padding:8px 24px;font-size:16px!important;cursor:pointer;border-radius:22px;position:relative;margin:12px}.deep-encapsulation .gr-btn:hover{color:#252525;border:1px solid #252525}.deep-encapsulation .gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.deep-encapsulation .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.deep-encapsulation .gr-btn.primary:hover{color:#fff;background-color:#035f79}.deep-encapsulation .gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.deep-encapsulation .gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}.deep-encapsulation .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.deep-encapsulation .fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.deep-encapsulation .fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.deep-encapsulation .slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.deep-encapsulation .slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.deep-encapsulation .fadeIn,.deep-encapsulation .fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}.deep-encapsulation .hidden{display:none}.deep-encapsulation .hide-overflow{overflow:hidden}.deep-encapsulation #modalOverlay{width:100%;height:100%;z-index:3;background-color:rgba(37,37,37,.6);position:fixed;top:0;left:0;margin:0;padding:0}.deep-encapsulation [role=dialog]{border:thin solid #000;background-color:#fff;z-index:3;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.deep-encapsulation button.close[aria-label="Close Dialog"]{position:absolute;top:2px;right:2px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.deep-encapsulation .close img{height:24px;width:24px}.deep-encapsulation .pe-modal-container{width:600px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;font-family:Open Sans,Calibri,Tahoma,sans-serif;height:auto}.deep-encapsulation .pe-modal-container.scroll{height:-webkit-calc(100% - 100px);height:calc(100% - 100px)}@media (max-width:767px){.deep-encapsulation .modal{width:440px}}.deep-encapsulation .pe-modal-container h2{margin:0 0 20px;padding-left:40px;padding-top:40px;padding-right:40px}.deep-encapsulation .pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (max-width:480px){.deep-encapsulation .pe-modal-container h2{font-size:20px}}.deep-encapsulation .pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px;overflow:scroll;height:-webkit-calc(100% - 200px);height:calc(100% - 200px)}.deep-encapsulation .pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}@media (max-width:767px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (max-width:480px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.deep-encapsulation .pe-modal-container .actions button:last-child{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1;margin-right:1em}@media (max-width:480px){.deep-encapsulation .pe-modal-container .actions button:last-child{margin:.5em 0}}.deep-encapsulation .modal-container{position:absolute;width:100%;top:0;height:100%}.deep-encapsulation .modal-container .modal{-webkit-transform:none;transform:none;position:relative;margin:0 auto;top:0;left:0}.deep-encapsulation .elements .gr-btn{border-radius:3px;background-color:#e9e9e9;border:1px solid #c7c7c7;color:#252525}.deep-encapsulation .elements .gr-btn:hover{background-color:#d9d9d9}.deep-encapsulation .elements .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.deep-encapsulation .elements .gr-btn.primary:hover{background:#005a70;border:1px solid #005a70}.deep-encapsulation .elements .gr-btn.icon-btn-18{background-color:transparent;border:0}\n</style>\n\n  <!-- Encapsulated styles for modal-->\n\t<div class="deep-encapsulation">\n\t\t<div class="hidden" id="modalPlaceholder"></div>\n\t\t<div class="pe-modal-container hidden animated slideInDown" id="modal" role="dialog" aria-labelledby="dialogHeading" aria-describedby="dialogDescription" aria-modal="true">\n\t\t\t<h2 id="dialogHeading" class="gr-h2"></h2>\n\t\t\t<div class="modal-body" id="dialogDescription">\n\t\t\t\t<slot></slot>\n\t\t\t</div>\n\t\t\t<button id="closeButton" class="gr-btn icon-btn-18 close modal-close" aria-label="Close Dialog" data-event="cancel">\n\t\t\t\t' + ICON_CLOSE_24 + '\n\t\t\t</button>\n\t\t</div>\n\t</div>\n  ';

  overlayTemplate.innerHTML = '\n  <div class="hidden modal-close animated fadeIn" id="modalOverlay" data-event="cancel" style="opacity:.6"></div>\n  ';

  actionsTemplate.innerHTML = '\n  <div class="actions">\n\t\t<button id="successButton" class="modal-success gr-btn primary" data-event="success">Save</button>\n\t\t<button id="cancelButton" class="modal-cancel gr-btn" data-event="cancel">Cancel</button>\n\t</div>\n  ';

  var Modal = function (_HTMLElement) {
    _inherits(Modal, _HTMLElement);

    _createClass(Modal, [{
      key: 'hideCancel',
      get: function get() {
        return this.hasAttribute('hidecancel');
      }
    }, {
      key: 'hideSuccess',
      get: function get() {
        return this.hasAttribute('hideSuccess');
      }
    }, {
      key: 'triggerId',
      get: function get() {
        return this.getAttribute('triggerid');
      }
    }, {
      key: 'titleText',
      get: function get() {
        return this.getAttribute('titletext');
      }
    }, {
      key: 'successBtnText',
      get: function get() {
        return this.getAttribute('successbtntext');
      }
    }, {
      key: 'cancelBtnText',
      get: function get() {
        return this.getAttribute('cancelbtntext');
      }
    }, {
      key: 'elements',
      get: function get() {
        return this.getAttribute('elements');
      }
    }, {
      key: 'footer',
      get: function get() {
        return this.hasAttribute('footer');
      },
      set: function set(value) {
        var isfooterShown = Boolean(value);
        if (isfooterShown) {
          this.setAttribute('footer', '');
        } else {
          this.removeAttribute('footer');
        }
      }
    }, {
      key: 'openState',
      set: function set(bool) {
        this.setAttribute('open', bool);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['footer', 'elements', 'triggerid', 'titletext', 'successbtntext', 'cancelbtntext', 'hidecancel', 'hidesuccess'];
      }
    }]);

    function Modal() {
      _classCallCheck(this, Modal);

      var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

      _this.attachShadow({ mode: 'open' });

      _this.openModal = _this.openModal.bind(_this);
      _this.closeModal = _this.closeModal.bind(_this);
      _this.bindKeyPress = _this.bindKeyPress.bind(_this);
      _this.maintainFocus = _this.maintainFocus.bind(_this);
      return _this;
    }

    _createClass(Modal, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        var clone = template.content.cloneNode(true),
            overlayClone = overlayTemplate.content.cloneNode(true),
            overlayEntryPoint = clone.querySelector('#modalPlaceholder'),
            title = clone.querySelector('#dialogHeading');

        this.modal = clone.querySelector('#modal');
        this.body = doc.querySelector('body');
        this.main = doc.querySelector('main');
        this.triggerBtn = doc.querySelector('#' + this.triggerId);

        overlayEntryPoint.parentNode.insertBefore(overlayClone, overlayEntryPoint.nextElementSibling);

        overlayEntryPoint.remove();

        if (this.footer) {
          this.renderfooter(clone);
        }

        if (this.titleText !== null) {
          title.innerHTML = this.titleText;
        } else {
          title.innerHTML = 'Modal Title';
        }

        if (this.triggerBtn !== null) {
          this.triggerBtn.addEventListener('click', this.openModal);
        }

        var eventBtns = clone.querySelectorAll('[data-event]');

        eventBtns.forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            var eventType = e.target.dataset.event;
            _this2.closeModal(eventType);
          });
        });

        this.modal.addEventListener('animationend', function (event) {
          event.stopImmediatePropagation();
          if (event.animationName === 'slideInDown') {
            _this2.maintainFocus();
            _this2.modal.classList.remove('slideInDown');
          }
          if (event.animationName === 'slideOutDown') {
            var overlay = _this2.shadowRoot.querySelector('#modalOverlay');
            _this2.triggerBtn.focus();
            _this2.modal.classList.add('hidden');
            _this2.modal.classList.remove('slideOutDown');
            overlay.classList.add('hidden');
            overlay.classList.remove('fadeOut');
            _this2.triggerBtn.focus();
          }
        });

        doc.addEventListener('keydown', this.bindKeyPress);
        doc.body.addEventListener('focus', this.maintainFocus, true);
        this.shadowRoot.appendChild(clone);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name) {
        if (name === 'footer' && !this.modal) return;
        if (!this.footer && this.modal !== undefined) {
          var actions = this.modal.querySelector('.actions');
          actions.remove();
        }
        if (this.footer) {
          this.renderfooter(this.modal);
        }
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        doc.removeEventListener('keydown', this.bindKeyPress);
        doc.body.removeEventListener('focus', this.maintainFocus);
      }
    }, {
      key: 'openModal',
      value: function openModal(e) {
        var thisButton = e.currentTarget,
            buttonDisabled = thisButton.getAttribute('disabled'),
            overlay = this.shadowRoot.querySelector('#modalOverlay');

        this.openState = true;
        this.setPosition();

        doc.body.style.overflow = 'hidden';
        this.style.display = 'block';

        if (this.elements === 'v1') {
          this.modal.classList.add('elements');
        }

        if (buttonDisabled === null) {
          thisButton.setAttribute('disabled', true);
          this.main.setAttribute('aria-hidden', 'true');
        }

        overlay.classList.remove('hidden', 'fadeOut');
        overlay.classList.add('fadeIn');

        this.modal.classList.remove('hidden', 'slideOutDown');
        this.modal.classList.add('slideInDown');
      }
    }, {
      key: 'closeModal',
      value: function closeModal(eventName) {
        var _this3 = this;

        var overlay = this.shadowRoot.querySelector('#modalOverlay');
        document.body.style.overflow = 'auto';

        this.triggerBtn.removeAttribute('disabled');
        this.main.setAttribute('aria-hidden', 'false');

        this.body.classList.remove('hide-overflow');
        overlay.classList.remove('fadeIn');

        overlay.classList.add('fadeOut');
        this.modal.classList.add('slideOutDown');

        if (this.modal.classList.contains('scroll')) {
          this.modal.classList.remove('scroll');
        }

        setTimeout(function () {
          _this3.dispatchEvent(new Event(eventName, { bubbles: true, composed: true }));
        }, 500);
        this.openState = false;
      }
    }, {
      key: 'maintainFocus',
      value: function maintainFocus() {
        var open = this.getAttribute('open');
        // if the modal is not open, stop the function
        if (!open) return;
        /**
         * The DOM we want to trap focus in. If the consumer passed in
         * focusable children, it's the Light DOM; else, it's the Shadow DOM.
         */
        var targetDOM = getFocusableChildren(this).length > 0 ? this : this.modal;
        // if neither the Light DOM nor the Shadow DOM within the modal contain
        // the active element, set focus back into the targetDOM.
        if (!this.contains(getDeepActiveElement()) && !this.modal.contains(getDeepActiveElement())) {
          setFocusToFirstChild(targetDOM);
        }
      }
    }, {
      key: 'bindKeyPress',
      value: function bindKeyPress(e) {
        var open = this.getAttribute('open');
        if (open && e.which === ESCAPE_KEY) {
          this.closeModal('cancel');
        }
        if (open && e.which === TAB_KEY) {
          trapTabKey(e, this, this.modal);
        }
      }
    }, {
      key: 'setPosition',
      value: function setPosition() {
        var _this4 = this;

        var modalBody = this.shadowRoot.querySelector('.pe-modal-container');
        this.modal.style.top = window.pageYOffset + 50 + 'px';
        this.modal.style.transform = 'translate(-50%)';
        this.modal.style.marginBottom = '50px';

        this.modal.addEventListener('animationstart', function (event) {
          var modalPosition = _this4.modal.getBoundingClientRect();
          if (modalPosition.height > window.innerHeight) {
            modalBody.classList.add('scroll');
          }
        });
      }
    }, {
      key: 'renderfooter',
      value: function renderfooter(parentNode) {
        var actionsClone = actionsTemplate.content.cloneNode(true),
            cancelBtn = actionsClone.querySelector('#cancelButton'),
            successBtn = actionsClone.querySelector('#successButton');

        if (parentNode) {
          var modalBody = parentNode.querySelector('#dialogDescription');
          modalBody.parentNode.insertBefore(actionsClone, modalBody.nextSibling);
        }
        if (this.cancelBtnText !== null) {
          cancelBtn.innerHTML = this.cancelBtnText;
        }
        if (this.successBtnText !== null) {
          successBtn.innerHTML = this.successBtnText;
        }
        if (this.hideCancel) cancelBtn.remove();
        if (this.hideSuccess) successBtn.remove();
      }
    }]);

    return Modal;
  }(HTMLElement);

  customElements.define('pearson-modal', Modal);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      numberTemplate = doc.createElement('template'),
      ellipsisTemplate = doc.createElement('template'),
      compactTemplate = doc.createElement('template'),
      previousIcon = '\n      <svg focusable="false" class="icon-18" aria-hidden="true">\n\t      <path d="M5.2383866,9.62193909 C4.90819314,9.25409223 4.92101724,8.69027111 5.27685892,8.33764681 L10.386348,3.27435567 C10.7554932,2.90854811 11.3539959,2.90854811 11.7231411,3.27435567 C12.0922863,3.64016324 12.0922863,4.23325448 11.7231411,4.59906205 L7.28204859,9 L11.7231411,13.400938 C12.0922863,13.7667455 12.0922863,14.3598368 11.7231411,14.7256443 C11.3539959,15.0914519 10.7554932,15.0914519 10.386348,14.7256443 L5.27685892,9.66235319 C5.26334967,9.64896608 5.25054567,9.63548354 5.23843148,9.62191255 L5.2383866,9.62193909 Z"  fill-rule="nonzero"></path>\n      </svg>\n  ',
      nextIcon = '\n      <svg focusable="false" class="icon-18" aria-hidden="true">\n           <path d="M12.7616134,9.62193909 L12.7615685,9.62191255 C12.7494543,9.63548354 12.7366503,9.64896608 12.7231411,9.66235319 L7.61365203,14.7256443 C7.24450681,15.0914519 6.64600414,15.0914519 6.27685892,14.7256443 C5.90771369,14.3598368 5.90771369,13.7667455 6.27685892,13.400938 L10.7179514,9 L6.27685892,4.59906205 C5.90771369,4.23325448 5.90771369,3.64016324 6.27685892,3.27435567 C6.64600414,2.90854811 7.24450681,2.90854811 7.61365203,3.27435567 L12.7231411,8.33764681 C13.0789828,8.69027111 13.0918069,9.25409223 12.7616134,9.62193909 Z"  fill-rule="nonzero"></path>\n      </svg>\n  ';
  template.innerHTML = ' \n      <style>\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:16px}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}body{font-size:16px;font-family:Open Sans,Arial,Helvetica,sans-serif}body,p{line-height:1.5;font-weight:400}p{font-size:.875em}strong{font-weight:600}a{color:#047a9c}a:hover{color:#03536a;text-decoration:none}a:focus{outline:2px solid #0b73da;outline-offset:4px}button{cursor:pointer}.no-border{border:0}.icon-18{width:18px;height:18px}.icon-24{width:24px;height:24px}.hidden{display:none}.gr-h1{font-size:1.5em;line-height:1.75em}.gr-h1,.gr-h2{font-weight:400;margin-top:0}.gr-h2{font-size:1.25em;line-height:1.625em}.gr-h3{font-size:1.125em;line-height:1.5em;font-weight:400;margin-top:0}.gr-label{display:block;margin-bottom:4px}.gr-label,.gr-meta{font-size:.75em;line-height:1em;color:#6a7070}.gr-semi-bold{font-weight:600}.gr-font-large{font-size:1em;line-height:1.5em}.gr-font-normal{font-size:.875em;line-height:1.5}.gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:1em;cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:.875em}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:1em}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.gr-pagination{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.gr-pagination button{margin:0;min-width:44px;border:0!important;padding:0!important}.gr-pagination button span{height:28px;width:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #c7c7c7;border-radius:50%}.gr-pagination button:focus:after{min-height:36px;min-width:36px;padding:0;top:4px;left:8px}.gr-pagination button:hover span{background-color:#e9e9e9}.gr-pagination button:disabled{background:none!important}.gr-pagination button:disabled span{border:1px solid #d9d9d9}.gr-pagination button:disabled span svg{fill:#d9d9d9}.gr-pagination button:disabled:hover span{background:#fff}.gr-pagination a{min-width:44px;color:#6a7070;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:14px}.gr-pagination a:hover{text-decoration:underline;color:#6a7070;font-weight:700}.gr-pagination a:focus{outline-offset:0}.gr-pagination a[aria-current]{text-decoration:underline;color:#252525;font-weight:700}.gr-pagination .compact-text{font-size:.875em;margin:0 1em}.gr-pagination a svg{width:18px;height:18px;display:inline-block;vertical-align:top;fill:currentColor}a.disabled{cursor:default;text-decoration:none}a.disabled:focus{outline:0}a.disabled:hover{text-decoration:none}\n      </style>\n          <nav role="navigation" data-id="pagination" aria-label="Pagination Navigation" class="gr-pagination" data-type="standard" data-pages-total="10" data-max-buttons="5" data-active-page="1" data-label="page" data-label-plural="pages">\n          <button id="prev" class="gr-btn icon-btn-18" aria-label="Previous page">\n            <span>\n              ' + previousIcon + '\n            </span>\n          </button>\n          <div id="pages" style="display:flex;">\n\n          </div>\n          <button id="next" class="gr-btn icon-btn-18" aria-label="Next page">\n            <span>\n              ' + nextIcon + '\n            </span>\n          </button>\n        </nav>\n  ', compactTemplate.innerHTML = '\n      <style>\n        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:16px}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}body{font-size:16px;font-family:Open Sans,Arial,Helvetica,sans-serif}body,p{line-height:1.5;font-weight:400}p{font-size:.875em}strong{font-weight:600}a{color:#047a9c}a:hover{color:#03536a;text-decoration:none}a:focus{outline:2px solid #0b73da;outline-offset:4px}button{cursor:pointer}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.fadeIn,.slideInDown{opacity:1!important;visibility:visible!important}.fadeOut,.slideOutDown{opacity:0;visibility:hidden}.slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}.slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}.fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}.fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){.animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}.no-border{border:0}.icon-18{width:18px;height:18px}.icon-24{width:24px;height:24px}.hidden{display:none}.gr-h1{font-size:1.5em;line-height:1.75em}.gr-h1,.gr-h2{font-weight:400;margin-top:0}.gr-h2{font-size:1.25em;line-height:1.625em}.gr-h3{font-size:1.125em;line-height:1.5em;font-weight:400;margin-top:0}.gr-label{display:block;margin-bottom:4px}.gr-label,.gr-meta{font-size:.75em;line-height:1em;color:#6a7070}.gr-semi-bold{font-weight:600}.gr-font-large{font-size:1em;line-height:1.5em}.gr-font-normal{font-size:.875em;line-height:1.5}.gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:1em;cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:.875em}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:1em}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.gr-pagination{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.gr-pagination button{margin:0;min-width:44px;border:0!important;padding:0!important}.gr-pagination button span{height:28px;width:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #c7c7c7;border-radius:50%}.gr-pagination button:focus:after{min-height:36px;min-width:36px;padding:0;top:4px;left:8px}.gr-pagination button:hover span{background-color:#e9e9e9}.gr-pagination button:disabled{background:none!important}.gr-pagination button:disabled span{border:1px solid #d9d9d9}.gr-pagination button:disabled span svg{fill:#d9d9d9}.gr-pagination button:disabled:hover span{background:#fff}.gr-pagination a{min-width:44px;color:#6a7070;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:14px}.gr-pagination a:hover{text-decoration:underline;color:#6a7070;font-weight:700}.gr-pagination a:focus{outline-offset:0}.gr-pagination a[aria-current]{text-decoration:underline;color:#252525;font-weight:700}.gr-pagination .compact-text{font-size:.875em;margin:0 1em}.gr-pagination a svg{width:18px;height:18px;display:inline-block;vertical-align:top;fill:currentColor}a.disabled{cursor:default;text-decoration:none}a.disabled:focus{outline:0}a.disabled:hover{text-decoration:none}\n      </style>\n    \t\t<nav role="navigation" data-id="compactPagination" aria-label="Pagination Navigation" class="gr-pagination" data-pages-total="10" data-type="compact" data-active-page="1" data-label="page" data-label-plural="pages">\n\t\t\t\t<button id="prev" class="gr-btn icon-btn-18" aria-label="Previous page">\n           <span>\n              ' + previousIcon + '\n            </span>\n\t\t\t\t</button>\n\t\t\t\t<span class="compact-text">Page <span class="current-page">1</span> of <span class="total-pages">20</span>\n\t\t\t</span>\n\t\t\t\t<button id="next" class="gr-btn icon-btn-18" aria-label="Next page">\n\t\t\t\t\t<span>\n\t             ' + nextIcon + '\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n\t\t\t</nav>\n    ', numberTemplate.innerHTML = '\n      <a href="#"><span></span></a>\n    ', ellipsisTemplate.innerHTML = '\n      <a href="#" class="ellipsis" class="disabled" aria-label="additional pages">...</a>\n    ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-pagination');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */
  function range(start, end) {
    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var len = Math.floor((end - start) / step) + 1;
    return Array(len).fill().map(function (_, idx) {
      return start + idx * step;
    });
  }

  function renderItems(options) {
    var nextEllipsisNumber = parseInt(options.referenceNode.getAttribute('data-page'));

    while (options.start <= options.end && options.end < nextEllipsisNumber) {
      var nextNode = options.reference.nextElementSibling,
          renderTemplate = options.newNode.content.cloneNode(true),
          renderContent = renderTemplate.querySelector('span');

      nextNode.remove();
      renderContent.parentNode.setAttribute('aria-label', 'page ' + options.start);
      renderContent.parentNode.setAttribute('data-page', options.start);
      renderContent.innerHTML = options.start;

      if (options.start === options.newNumber) {
        renderContent.parentNode.setAttribute('aria-current', 'page');
      }

      if (options.end + 1 === nextEllipsisNumber) {
        options.referenceNode.innerHTML = nextEllipsisNumber;
        options.referenceNode.removeAttribute('data-ellipsis');
        options.referenceNode.classList.remove('disabled');
        options.referenceNode.setAttribute('aria-label', 'page ' + nextEllipsisNumber);
      } else {
        options.referenceNode.innerHTML = '...';
        options.referenceNode.classList.add('disabled');
        options.referenceNode.setAttribute('data-ellipsis', true);
        options.referenceNode.setAttribute('aria-label', 'additional pages');
      }

      renderContent.parentNode.addEventListener('click', function (event) {
        options.this.addListener(event, options);
      });

      options.parentNode.insertBefore(renderTemplate, options.referenceNode);
      options.start++;
    }
  }

  var Pagination = function (_HTMLElement) {
    _inherits(Pagination, _HTMLElement);

    _createClass(Pagination, [{
      key: 'addListener',
      value: function addListener(event) {
        this.currentPage = event.currentTarget.getAttribute('data-page');
        this.dispatchEvent(new Event('newPage', {
          bubbles: true
        }));
      }
    }, {
      key: 'changePage',
      value: function changePage(type) {
        var currentPage = this.shadowRoot.querySelector('#pages a[aria-current]'),
            nextPage = currentPage.nextElementSibling,
            previousPage = currentPage.previousElementSibling;
        if (type === 'next') {
          if (currentPage.getAttribute('data-page') < this.lastPage) {
            this.currentPage = nextPage.getAttribute('data-page');
            currentPage.removeAttribute('aria-current');
          }
        } else {
          if (currentPage.getAttribute('data-page') > this.firstPage) {
            this.currentPage = previousPage.getAttribute('data-page');
            currentPage.removeAttribute('aria-current');
          }
        }
        this.dispatchEvent(new Event(type + 'Page', {
          bubbles: true
        }));
      }
    }, {
      key: 'compact',
      get: function get() {
        return this.hasAttribute('compact');
      }
    }, {
      key: 'firstPage',
      get: function get() {
        return parseInt(this.getAttribute('firstpage'));
      }
    }, {
      key: 'lastPage',
      get: function get() {
        return parseInt(this.getAttribute('lastpage'));
      }
    }, {
      key: 'currentPage',
      get: function get() {
        return parseInt(this.getAttribute('currentpage'));
      },
      set: function set(value) {
        this.setAttribute('currentpage', value);
      }
    }, {
      key: 'ellipsisAt',
      get: function get() {
        return parseInt(this.getAttribute('ellipsisat'));
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['firstpage', 'lastpage', 'currentpage', 'ellipsisat', 'compact'];
      }
    }]);

    function Pagination() {
      _classCallCheck(this, Pagination);

      var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this));

      _this.attachShadow({ mode: 'open' });
      return _this;
    }

    _createClass(Pagination, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        if (!this.compact) {
          var clone = template.content.cloneNode(true);
          this.pageTarget = clone.querySelector('#pages');
          this.nextPageBtn = clone.querySelector('#next');
          this.prevPageBtn = clone.querySelector('#prev');
          this.changePage = this.changePage.bind(this);
          this.addListener = this.addListener.bind(this);
          this.shadowRoot.appendChild(clone);

          this.currentPage = 1;
          this.pageRange = range(this.firstPage, this.lastPage, 1);
          this.pageRange.forEach(function (number, index) {
            var numberTemplateContainer = numberTemplate.content.cloneNode(true),
                numberTemplateSpan = numberTemplateContainer.querySelector('span'),
                numberTemplateParent = numberTemplateSpan.parentNode;

            var total = index + 1,
                placeLastNumber = _this2.ellipsisAt + 2,
                placeEllipsis = _this2.ellipsisAt + 1;

            _this2.template = numberTemplateContainer;
            _this2.span = numberTemplateSpan;
            _this2.parent = numberTemplateParent;

            _this2.parent.setAttribute('aria-label', 'page ' + number);
            _this2.parent.setAttribute('data-page', number);
            _this2.span.innerHTML = number;

            if (_this2.currentPage === _this2.firstPage) {
              var button = _this2.shadowRoot.querySelector('#prev');
              button.setAttribute('disabled', true);
            }
            if (_this2.currentPage === _this2.lastPage) {
              var _button = _this2.shadowRoot.querySelector('#next');
              _button.setAttribute('disabled', true);
            }

            if (_this2.lastPage > _this2.ellipsisAt) {
              if (total <= placeLastNumber) {
                if (number === _this2.currentPage) {
                  _this2.parent.setAttribute('aria-current', 'page');
                }

                if (total === placeEllipsis) {
                  _this2.parent.setAttribute('data-page', _this2.lastPage - 1);
                  _this2.parent.setAttribute('data-ellipsis', true);
                  _this2.parent.setAttribute('aria-label', 'additional pages');
                  _this2.span.innerHTML = '...';
                  _this2.parent.classList.add('disabled');
                }

                if (total === placeLastNumber) {
                  _this2.parent.setAttribute('data-page', _this2.lastPage);
                  _this2.span.innerHTML = _this2.lastPage;
                }
                _this2.pageTarget.appendChild(_this2.template);
              }
            } else {
              if (number === _this2.currentPage) {
                _this2.parent.setAttribute('aria-current', 'page');
              }
              _this2.pageTarget.appendChild(_this2.template);
            }
          });
          var pageBtns = this.shadowRoot.querySelectorAll('nav button, #pages > a');
          pageBtns.forEach(function (button) {
            button.addEventListener('click', function (event) {
              button.removeAttribute('disabled');
              if (button.tagName === 'BUTTON') {
                button.setAttribute('aria-label', 'Page ' + _this2.currentPage + ', Next Page');
                if (_this2.currentPage >= _this2.firstPage) {
                  _this2.prevPageBtn.removeAttribute('disabled');
                }
                _this2.changePage(button.id);
              } else if (button.tagName === 'A') {
                _this2.addListener(event);
              }
            });
          });
          this.addEventListener('newPage', function (event) {
            _this2.shadowRoot.querySelector('[data-page="' + _this2.currentPage + '"]').focus();
          });
        } else {
          var _clone = compactTemplate.content.cloneNode(true);
          this.total = _clone.querySelector('.total-pages');
          this.page = _clone.querySelector('.current-page');
          this.pageTarget = _clone.querySelector('#pages');
          this.nextPageBtn = _clone.querySelector('#next');
          this.prevPageBtn = _clone.querySelector('#prev');
          this.shadowRoot.appendChild(_clone);
          this.currentPage = 1;
          var _pageBtns = this.shadowRoot.querySelectorAll('nav button');
          _pageBtns.forEach(function (button) {
            button.addEventListener('click', function (event) {
              var target = event.currentTarget.id;
              if (target === 'next') {
                if (_this2.currentPage < _this2.lastPage) {
                  _this2.currentPage = _this2.currentPage + 1;
                  _this2.dispatchEvent(new Event('nextPage', {
                    bubbles: true
                  }));
                }
              }
              if (target === 'prev') {
                if (_this2.currentPage > 1) {
                  _this2.currentPage = _this2.currentPage - 1;
                  _this2.dispatchEvent(new Event('previousPage', {
                    bubbles: true
                  }));
                } else {
                  return false;
                }
              }
            });
          });

          if (this.currentPage < this.lastPage) {
            this.page.innerHTML = this.currentPage;
          } else {
            this.page.innerHTML = this.lastPage;
          }
          if (this.currentPage === this.firstPage) {
            this.prevPageBtn.setAttribute('disabled', true);
          }
          if (this.currentPage === this.lastPage) {
            this.nextPageBtn.setAttribute('disabled', true);
          }
          this.total.innerHTML = this.lastPage;
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _this3 = this;

        if (!this.compact) {
          if (oldValue !== null) {
            var newNumber = parseInt(newValue);
            if (oldValue !== newValue) {
              if (name === 'currentpage') {
                var newPage = this.shadowRoot.querySelector('[data-page="' + newValue + '"]'),
                    oldPage = this.shadowRoot.querySelector('[data-page="' + oldValue + '"]'),
                    firstPage = this.shadowRoot.querySelector('[data-page="' + this.firstPage + '"]'),
                    lastPage = this.shadowRoot.querySelector('[data-page="' + this.lastPage + '"]'),
                    allLinks = this.shadowRoot.querySelectorAll('#pages > a');

                if (oldValue !== null && oldPage !== null) {
                  oldPage.removeAttribute('aria-current');
                  if (!newPage.hasAttribute('data-ellipsis')) {
                    newPage.setAttribute('aria-current', 'page');
                    newPage.setAttribute('aria-label', 'page ' + newValue);
                  }
                }

                if (newNumber === this.firstPage) {
                  allLinks.forEach(function (link, index) {
                    var value = index + 1;
                    link.innerHTML = value;
                    link.removeAttribute('data-ellipsis');
                    link.setAttribute('data-page', value);

                    if (value === _this3.ellipsisAt + 1) {
                      link.setAttribute('data-ellipsis', true);
                      link.innerHTML = '...';
                      link.setAttribute('data-page', _this3.lastPage - 1);
                      link.setAttribute('aria-label', 'additional pages');
                      link.classList.add('disabled');
                    }
                    if (value === _this3.ellipsisAt + 2) {
                      link.innerHTML = _this3.lastPage;
                      link.setAttribute('data-page', _this3.lastPage);
                    }
                  });
                }

                if (newNumber === this.lastPage) {
                  var totalPages = allLinks.length;
                  var startNumber = this.lastPage - totalPages + 1;
                  allLinks.forEach(function (link, index) {
                    link.innerHTML = startNumber;
                    link.removeAttribute('data-ellipsis');
                    link.setAttribute('data-page', startNumber);
                    link.classList.remove('disabled');
                    if (index === 0) {
                      link.innerHTML = 1;
                      link.setAttribute('data-page', 1);
                    }
                    if (index === 1) {
                      link.setAttribute('data-ellipsis', true);
                      link.setAttribute('aria-label', 'additional pages');
                      link.innerHTML = '...';
                      link.setAttribute('data-page', _this3.firstPage + 1);
                      link.classList.add('disabled');
                    }
                    startNumber++;
                  });
                }
                if (this.currentPage === this.firstPage) {
                  this.prevPageBtn.setAttribute('disabled', true);
                } else {
                  this.prevPageBtn.removeAttribute('disabled');
                }
                if (this.currentPage === this.lastPage) {
                  this.nextPageBtn.setAttribute('disabled', true);
                } else {
                  this.nextPageBtn.removeAttribute('disabled');
                }
                if (newPage !== null && newPage.nextElementSibling !== null && newPage.previousElementSibling !== null) {
                  var nextEllipsis = newPage.nextElementSibling.getAttribute('data-ellipsis'),
                      previousEllipsis = newPage.previousElementSibling.getAttribute('data-ellipsis'),
                      previousEllipsisNode = firstPage.nextElementSibling,
                      nextEllipsisNode = lastPage.previousElementSibling,
                      endRange = nextEllipsisNode.previousElementSibling.getAttribute('data-page'),
                      startRange = previousEllipsisNode.nextElementSibling.getAttribute('data-page'),
                      options = {
                    start: parseInt(startRange),
                    newNumber: newNumber,
                    end: parseInt(endRange),
                    reference: previousEllipsisNode,
                    newNode: numberTemplate,
                    parentNode: this.pageTarget,
                    referenceNode: nextEllipsisNode,
                    this: this,
                    newPage: newPage
                  };

                  if (nextEllipsis) {
                    firstPage.nextElementSibling.innerHTML = '...';
                    firstPage.nextElementSibling.classList.add('disabled');
                    firstPage.nextElementSibling.setAttribute('data-ellipsis', true);
                    firstPage.nextElementSibling.setAttribute('aria-label', 'additional pages');
                    options.end = options.end + 1;
                    renderItems(options);
                    if (newValue > this.firstPage) {
                      var button = this.shadowRoot.querySelector('#next');
                      button.removeAttribute('disabled');
                    }
                  } else if (previousEllipsis) {
                    options.start = options.start - 1;
                    options.end = options.end - 1;
                    renderItems(options);
                    if (options.newNumber - 2 === parseInt(previousEllipsisNode.getAttribute('data-page'))) {
                      firstPage.nextElementSibling.innerHTML = parseInt(previousEllipsisNode.getAttribute('data-page'));
                      firstPage.nextElementSibling.removeAttribute('data-ellipsis');
                      firstPage.nextElementSibling.classList.remove('disabled');
                      firstPage.nextElementSibling.setAttribute('aria-label', 'page ' + parseInt(previousEllipsisNode.getAttribute('data-page')));
                    }
                  }
                }
              }
            }
          }
        } else {
          if (oldValue !== null) {
            if (oldValue !== newValue) {
              if (newValue > this.firstPage) {
                var _button2 = this.shadowRoot.querySelector('#prev');
                _button2.removeAttribute('disabled');
              } else {
                var _button3 = this.shadowRoot.querySelector('#prev');
                _button3.setAttribute('disabled', true);
              }
              if (newValue < this.lastPage) {
                var _button4 = this.shadowRoot.querySelector('#next');
                _button4.removeAttribute('disabled');
              } else {
                var _button5 = this.shadowRoot.querySelector('#next');
                _button5.setAttribute('disabled', true);
              }
              this.page.innerHTML = this.currentPage;
            }
          }
        }
      }
    }]);

    return Pagination;
  }(HTMLElement);

  customElements.define('pearson-pagination', Pagination);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var component = doc.createElement('template'),
      liveRegion = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below
  liveRegion.innerHTML = '\n        <div role="alert" aria-live="polite" class="loading-bar-liveregion" id="liveRegion">\n          <!-- insert loaded confirmation message here, visually hidden region -->\n        </div>\n  ';

  component.innerHTML = ' \n    <style>\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");.loading-bar-liveregion{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}:host .pe-progress-bar{position:relative;padding-bottom:16px}:host .pe-progress-bar .fullbar{width:100%;text-align:center;margin:0;line-height:18px;font-size:14px;font-family:Open Sans,Calibri,Tahoma,sans-serif}:host .pe-progress-bar .fullbar:after{content:"";height:4px;width:100%;position:absolute;bottom:4px;left:0;background-color:#c7c7c7}:host .pe-progress-bar.left-aligned .fullbar{text-align:left}:host .pe-progress-bar.right-aligned .fullbar{text-align:right}:host .pe-progress-bar div[role=progressbar]{height:12px;width:0;position:absolute;left:0;bottom:0;background-color:#19a6a4;-webkit-transition:.2s;transition:.2s;-webkit-animation:shift .2s linear infinite;animation:shift .2s linear infinite}:host .pe-progress-bar.loading div[role=progressbar]{background-image:-webkit-linear-gradient(315deg,#19a6a4 33.33%,#daf0ed 0,#daf0ed 50%,#19a6a4 0,#19a6a4 83.33%,#daf0ed 0,#daf0ed);background-image:linear-gradient(135deg,#19a6a4 33.33%,#daf0ed 0,#daf0ed 50%,#19a6a4 0,#19a6a4 83.33%,#daf0ed 0,#daf0ed);background-size:18px 18px}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@media screen and (prefers-reduced-motion:reduce){:host .pe-progress-bar div[role=progressbar]{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:unset!important;transition:unset!important}}\n    \n    </style>\n     <div class="pe-progress-bar">\n      <p class="fullbar" id="label">0%</p>\n      <div role="progressbar" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0" id="progress"></div>\n  </div>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(component, 'pearson-progress-bar');

  var ProgressBar = function (_HTMLElement) {
    _inherits(ProgressBar, _HTMLElement);

    _createClass(ProgressBar, [{
      key: 'alignment',
      get: function get() {
        return this.getAttribute('alignment');
      }
    }, {
      key: 'label',
      get: function get() {
        return this.getAttribute('label');
      }
    }, {
      key: 'progress',
      get: function get() {
        return parseInt(this.getAttribute('progress'), 10);
      },
      set: function set(newValue) {
        this.setAttribute('progress', newValue);
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }, {
      key: 'max',
      get: function get() {
        return parseInt(this.getAttribute('max'), 10);
      }
    }, {
      key: 'titleAlignment',
      set: function set(alignment) {
        this.wrapperElement.classList.add(alignment);
      }
    }, {
      key: 'progressBar',
      set: function set(progress) {
        this.loadingBar.setAttribute('aria-valuenow', progress);
        this.loadingBar.setAttribute('style', 'width: ' + progress + '%;');
        if (this.label === null && this.type !== 'static') {
          this.labelElement.innerHTML = progress + '%';
        } else {
          this.labelElement.innerHTML = this.label;
        }
      }
    }, {
      key: 'loaderType',
      set: function set(value) {
        this.wrapperElement.classList.add(value);
      }
    }, {
      key: 'maxValue',
      set: function set(value) {
        this.loadingBar.setAttribute('aria-valuemax', value);
      }
    }, {
      key: 'alertMessage',
      set: function set(message) {
        this.liveRegion.innerHTML = message;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['progress', 'type', 'max', 'alignment', 'label'];
      }
    }]);

    function ProgressBar() {
      _classCallCheck(this, ProgressBar);

      var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this));

      _this.attachShadow({ mode: 'open' });

      var componentClone = component.content.cloneNode(true);
      var liveRegionClone = liveRegion.content.cloneNode(true);

      _this.liveRegion = liveRegionClone.querySelector('#liveRegion');

      _this.loadingBar = componentClone.querySelector('[role=progressbar]');
      _this.wrapperElement = componentClone.querySelector('.pe-progress-bar');
      _this.labelElement = componentClone.querySelector('#label');

      _this.shadowRoot.appendChild(liveRegionClone);
      _this.shadowRoot.appendChild(componentClone);
      return _this;
    }

    _createClass(ProgressBar, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (!this.hasAttribute('progress')) {
          this.setAttribute('progress', '0');
        }

        this.progressBar = this.progress;
        this.loaderType = this.type;
        this.maxValue = this.max;
        this.titleAlignment = this.alignment;
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (this.type !== 'loading') return;

        if (name === 'progress') {
          this.progressBar = newValue;

          if (oldValue === '0') {
            this.alertMessage = 'Starting.';
          }

          if (this.progress % 20 === 0) {
            this.alertMessage = this.progress + ' percent loaded.';
          }

          if (this.progress === 100) {
            this.alertMessage = 'Finished loading.';
            this.dispatchEvent(new Event('loaded', {
              bubbles: true
            }));
          }
        }
      }
    }]);

    return ProgressBar;
  }(HTMLElement);

  customElements.define('pearson-progress-bar', ProgressBar);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template'),
      numberTemplate = doc.createElement('template'),
      inputTemplate = doc.createElement('template');

  inputTemplate.innerHTML = '\n\t\t\t<div class="groups">\n\t\t\t\t<div class="input-group">\n\t\t\t\t\t<div class="gr-form-element">\n\t\t\t\t\t\t<label id="rangeInputOne" class="gr-label" for="inputId"></label>\n\t\t\t\t\t\t<input aria-describedby="rangeInputOne rangeInputTwo rangeInputThree" class="gr-input" id="inputId" type="text" value=""  />\n\t\t\t\t\t</div>\n\t\t\t\t\t<span id="rangeInputTwo" class="gr-meta"></span>\n\t\t\t\t</div>\n\t\t\t\t<span id="rangeInputThree" class="gr-meta"></span>\n\t\t\t</div>\n  ';

  template.innerHTML = ' \n    <style>\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host [hidden],:host template{display:none}:host html{font-size:14px}:host *,:host html{-webkit-box-sizing:border-box;box-sizing:border-box}:host body{font-family:Open Sans,Arial,Helvetica,sans-serif}:host body,:host p{font-size:14px;line-height:1.5;font-weight:400}:host strong{font-weight:600}:host a{font-size:14px;color:#047a9c}:host a:hover{color:#03536a;text-decoration:none}:host a:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host button{cursor:pointer}:host li,:host ul{font-size:14px}:host svg{fill:#252525}:host svg[focusable=false]:focus{outline:none}:host input,:host textarea{font:inherit;letter-spacing:inherit;word-spacing:inherit}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}:host .fadeIn,:host .slideInDown{opacity:1!important;visibility:visible!important}:host .fadeOut,:host .slideOutDown{opacity:0;visibility:hidden}:host .slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}:host .slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}:host .fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}:host .fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}:host .animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}:host .animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){:host .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}:host html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}:host .no-border{border:0}:host .icon-18{width:18px;height:18px}:host .icon-24{width:24px;height:24px}:host .hidden{display:none!important}:host .gr-h1{font-size:24px;line-height:28px}:host .gr-h1,:host .gr-h2{font-weight:400;margin-top:0}:host .gr-h2{font-size:20px;line-height:26px}:host .gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}:host .gr-label{font-size:12px;line-height:16px;color:#6a7070;display:block;margin-bottom:4px}:host .gr-meta{font-size:12px;line-height:12px;color:#6a7070}:host .gr-semi-bold{font-weight:600}:host .gr-font-large{font-size:16px;line-height:24px}:host .gr-font-normal{font-size:14px;line-height:20px}:host .gr-input{display:block;margin:4px 0;padding:0 12px;height:36px;color:#252525;border:1px solid #c7c7c7;background:#fff;border-radius:4px;font-size:14px;width:100%;max-width:100%}:host .gr-input:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .gr-input:disabled{color:#c7c7c7;background-color:#e9e9e9}:host .gr-input:-moz-read-only{border:0}:host .gr-input:read-only{border:0}:host .range-container{grid-column:span 12;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}:host .range-container,:host .range-container .slider{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}:host .range-container .slider{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-right:24px}:host .range-container .slider label{width:100%;text-align:center;margin-bottom:0}:host .range-container .slider .range-color{height:8px;background:#047a9c;margin-top:-25px;border-radius:100px;left:0;z-index:0}@-moz-document url-prefix(){:host .range-container .slider .range-color{height:0}}@media (-ms-high-contrast:none){:host .range-container .slider .range-color{height:0}}:host .range-container .slider .tick-marks{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:12px;padding-left:8px}@media (-ms-high-contrast:none){:host .range-container .slider .tick-marks{margin:0}}:host .range-container .slider .slider-tickmarks .dash{border-right:1px solid #c7c7c7}:host .range-container .slider input[type=range]{-webkit-appearance:none;margin:18px 0;width:100%;height:8px}@media (-ms-high-contrast:none){:host .range-container .slider input[type=range]{height:auto;margin:0}}:host .range-container .slider input[type=range]:focus{outline:none}:host .range-container .slider input[type=range]::-webkit-slider-runnable-track{width:100%;height:8.4px;cursor:pointer;animate:.2s;background:#e9e9e9;border-radius:100px;border:0}:host .range-container .slider input[type=range]::-webkit-slider-thumb{height:20px;width:20px;border-radius:50%;-webkit-box-shadow:0 2px 4px 0 hsla(0,0%,54.9%,.3),0 -2px 4px 0 hsla(0,0%,54.9%,.2);box-shadow:0 2px 4px 0 hsla(0,0%,54.9%,.3),0 -2px 4px 0 hsla(0,0%,54.9%,.2);background-color:#fff;cursor:pointer;-webkit-appearance:none;margin-top:-7px;z-index:1000;position:relative}:host .range-container .slider input[type=range]:focus::-webkit-slider-thumb{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .range-container .slider input[type=range]::-moz-range-track{width:100%;height:8.4px;cursor:pointer;background:#e9e9e9;border-radius:100px;border:0}:host .range-container .slider input[type=range]::-moz-range-thumb{height:20px;width:20px;border-radius:50%;box-shadow:0 2px 4px 0 hsla(0,0%,54.9%,.3),0 -2px 4px 0 hsla(0,0%,54.9%,.2);background-color:#fff;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;margin-top:-7px;z-index:10000000;position:relative}:host .range-container .slider input[type=range]:focus::-moz-range-thumb{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .range-container .slider input[type=range]::-moz-range-progress{background-color:#047a9c;height:8px;border-radius:100px}:host .range-container .slider input[type=range]::-ms-track{width:100%;height:8.4px;cursor:pointer;background:transparent;border-color:transparent;color:transparent}:host .range-container .slider input[type=range]::-ms-fill-lower{background:#047a9c;border-radius:2.6px}:host .range-container .slider input[type=range]::-ms-fill-upper{background:#e9e9e9;border-radius:2.6px}:host .range-container .slider input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:20px;width:20px;border-radius:3px;background:#fff;cursor:pointer;height:8.4px;margin:0}:host .range-input-container{grid-column:span 12;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}@media (min-width:591px){:host .range-input-container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}:host .range-input-container .range-container{margin-top:24px}@media (min-width:591px){:host .range-input-container .range-container{margin-top:0}}:host .range-input-container .input-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:60px}:host .range-input-container .input-group+.gr-meta{text-align:center;display:block;width:137px}:host .range-input-container .gr-form-element{width:132px;margin-right:4px}:host .range-input-container .gr-form-element+.gr-meta{display:inline-block;margin-top:14px}*{font-family:Open Sans,Arial,Helvetica,sans-serif}.range-container .slider .tick-marks{padding-left:0!important}\n    </style>\n    <div class="range-input-container">\n    \t\t<div class="range-container">\n        <div class="slider">\n          <label id=labelOne class="gr-label" for="sliderId"></label>\n          <input aria-describedby="labelOne labelTwo" type="range" name="slider" id="sliderId" min="0" max="15" step=".25"/>\n          <div class="range-color" style="width:0;"></div>\n          <div class="tick-marks"></div>\n        </div>\n        <span id=labelTwo class="gr-meta"></span>\n      </div>\n    </div>\n\n';

  numberTemplate.innerHTML = '\n  <div class="slider-tickmarks">\n    <span class="gr-meta number"></span>\n  </div>\n  <div class="slider-tickmarks">\n    <span class="gr-meta dash"></span>\n  </div>\n  ';
  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-range-slider');

  function convertRange(node, minValue, maxValue) {
    return (node.value - minValue) / (maxValue - minValue) * (100 - 0) + 0;
  }

  var RangeSlider = function (_HTMLElement) {
    _inherits(RangeSlider, _HTMLElement);

    _createClass(RangeSlider, [{
      key: 'bottomText',
      get: function get() {
        return this.getAttribute('bottomtext');
      }
    }, {
      key: 'hasInput',
      get: function get() {
        return this.hasAttribute('input');
      }
    }, {
      key: 'minValue',
      get: function get() {
        return this.getAttribute('min');
      }
    }, {
      key: 'maxValue',
      get: function get() {
        return this.getAttribute('max');
      }
    }, {
      key: 'topText',
      get: function get() {
        return this.getAttribute('toptext');
      }
    }, {
      key: 'rightText',
      get: function get() {
        return this.getAttribute('righttext');
      }
    }, {
      key: 'stepValue',
      get: function get() {
        return this.getAttribute('step');
      }
    }, {
      key: 'labelText',
      get: function get() {
        return this.getAttribute('label');
      }
    }, {
      key: 'Value',
      set: function set(number) {
        this.setAttribute('value', number);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['min', 'max', 'step', 'toptext', 'righttext', 'value', 'input', 'bottomtext'];
      }
    }]);

    function RangeSlider() {
      _classCallCheck(this, RangeSlider);

      var _this = _possibleConstructorReturn(this, (RangeSlider.__proto__ || Object.getPrototypeOf(RangeSlider)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.input = clone.querySelector('input');
      _this.topLabel = clone.querySelector('label');
      _this.rightLabel = clone.querySelector('span');
      _this.colorBar = clone.querySelector('.range-color');
      _this.mainTarget = clone.querySelector('.range-input-container');
      _this.referenceNode = clone.querySelector('.range-container');
      _this.target = clone.querySelector('.tick-marks');

      _this.shadowRoot.appendChild(clone);

      _this.buildMarkup = _this.buildMarkup.bind(_this);
      return _this;
    }

    _createClass(RangeSlider, [{
      key: 'buildMarkup',
      value: function buildMarkup(number) {
        var numberClone = numberTemplate.content.cloneNode(true),
            numberNode = numberClone.querySelector('.number'),
            dashNode = numberClone.querySelector('.dash');

        numberNode.innerHTML = number;

        if (number === parseFloat(this.maxValue, 10)) {
          dashNode.parentNode.remove();
        }
        return numberClone;
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        this.input.setAttribute('min', this.minValue);
        this.input.setAttribute('max', this.maxValue);
        this.input.setAttribute('step', this.stepValue);
        this.input.value = this.minValue;
        this.topLabel.innerHTML = this.topText;
        this.rightLabel.innerHTML = this.rightText;
        var numberArr = [];

        // build input
        if (this.hasInput) {
          var inputClone = inputTemplate.content.cloneNode(true),
              topLabel = inputClone.querySelector('.gr-form-element label'),
              rightLabel = inputClone.querySelector('.gr-form-element + span'),
              bottomLabel = inputClone.querySelector('.input-group + span'),
              input = inputClone.querySelector('input');

          topLabel.innerHTML = this.topText;
          rightLabel.innerHTML = this.rightText;
          bottomLabel.innerHTML = this.bottomText;
          input.value = this.minValue;
          this.mainTarget.insertBefore(inputClone, this.referenceNode);

          input.addEventListener('change', function (event) {
            _this2.input.value = input.value;
            _this2.Value = input.value;
            _this2.dispatchEvent(new CustomEvent('change', {
              bubbles: true,
              detail: {
                value: input.value
              }
            }));
          });

          this.input.addEventListener('input', function () {
            _this2.Value = parseFloat(_this2.input.value, 10).toFixed(2);
            input.value = parseFloat(_this2.input.value, 10).toFixed(2);
          });
        }

        // build slider
        var minNumber = parseFloat(this.minValue, 10),
            maxNumber = parseFloat(this.maxValue, 10),
            increment = (maxNumber - minNumber) / 4;

        numberArr.push(minNumber);

        while (minNumber + increment <= maxNumber - increment) {
          minNumber = minNumber + increment;
          numberArr.push(minNumber);
        }

        numberArr.push(maxNumber);

        numberArr.forEach(function (number) {
          _this2.target.appendChild(_this2.buildMarkup(number));
        });

        if (!this.hasInput) {
          this.input.addEventListener('input', function () {
            _this2.input.value = parseFloat(_this2.input.value, 10).toFixed(2);
            _this2.Value = _this2.input.value;
            _this2.dispatchEvent(new CustomEvent('change', {
              bubbles: true,
              detail: {
                value: _this2.input.value
              }
            }));
          });
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value') {
          this.colorBar.style.width = convertRange(this.input, this.minValue, this.maxValue) + '%';
        }
      }
    }]);

    return RangeSlider;
  }(HTMLElement);

  customElements.define('pearson-range-slider', RangeSlider);
})(window, document);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  template.innerHTML = ' \n    <style>\n    :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}:host(.theme--dark) :focus{outline-color:#fff}*,:after,:before,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;font-family:14px,18px,Open Sans,Calibri,Tahoma,sans-serif;background-color:#fff;color:#6a7070}:host(.theme--dark){color:#d9d9d9}.tabs-wrapper{position:relative;background-color:inherit}:host(.theme--dark) .tabs-wrapper{background-color:#005a70}.tabs,ul{list-style-type:none;padding:0;margin:0}.tab,li{display:inline-block}.tab-button{font-family:inherit;font-size:inherit;line-height:1.28571rem;color:inherit;cursor:pointer;display:block;margin:8px 16px;padding:8px 0;text-decoration:none;background:none;border:0;border-bottom:3px solid transparent}.tab-button::-moz-focus-inner{border:0}.tab-button:hover{color:#252525;border-bottom-color:#c7c7c7}.tab-button.active{color:#252525}:host(.theme--dark) .tab-button:hover{color:#fff;border-bottom-color:#d9d9d9}:host(.theme--dark) .tab-button.active{color:#fff}.tab-slider{height:3px;background-color:#19a6a4;position:absolute;padding:0;margin:0 16px;bottom:8px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}::slotted(.panels){padding:1em}\n    </style>\n    <div id="tabs-wrapper" class="tabs-wrapper">\n      <slot name="tabs"></slot>\n      <div id="slider" class="tab-slider"></div>\n    </div>\n    <slot name="panels"></slot>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-tabs');

  var forEach = Array.prototype.forEach;
  var indexOf = Array.prototype.indexOf;

  var Tabs = function (_HTMLElement) {
    _inherits(Tabs, _HTMLElement);

    _createClass(Tabs, [{
      key: 'activeIdx',
      get: function get() {
        return parseInt(this.getAttribute('activeIdx'), 10);
      },
      set: function set(idx) {
        return this.setAttribute('activeIdx', idx);
      }
    }, {
      key: 'activeTab',
      get: function get() {
        return this.tabs[this.activeIdx];
      }
    }, {
      key: 'activePanel',
      get: function get() {
        return this.panels[this.activeIdx];
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['activeidx', 'activeIdx'];
      }
    }]);

    function Tabs() {
      _classCallCheck(this, Tabs);

      var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      // These are both assigned in a slotChange
      _this.tabList = null;
      _this.tabs = null;
      _this.panels = null;

      _this.tabsWrapper = clone.querySelector('#tabs-wrapper');
      _this.slider = clone.querySelector('#slider');

      _this.shadowRoot.appendChild(clone);

      _this.onTabSlotChange = _this.onTabSlotChange.bind(_this);
      _this.onPanelSlotChange = _this.onPanelSlotChange.bind(_this);
      _this.onShadowRootClick = _this.onShadowRootClick.bind(_this);
      _this.onShadowRootKeydown = _this.onShadowRootKeydown.bind(_this);
      return _this;
    }

    _createClass(Tabs, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (!this.tabs || !this.panels) return;

        if (name === 'activeIdx' || name === 'activeidx') {
          this.positionSlider();
          this.setActiveTab();
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _shadowRoot$querySele = this.shadowRoot.querySelectorAll('slot'),
            _shadowRoot$querySele2 = _slicedToArray(_shadowRoot$querySele, 2),
            tabSlot = _shadowRoot$querySele2[0],
            panelSlot = _shadowRoot$querySele2[1];

        if (!this.hasAttribute('activeIdx')) {
          this.setAttribute('activeIdx', '0');
        }

        this.shadowRoot.addEventListener('click', this.onShadowRootClick, true);
        this.shadowRoot.addEventListener('keydown', this.onShadowRootKeydown, true);

        tabSlot.addEventListener('slotchange', this.onTabSlotChange);
        panelSlot.addEventListener('slotchange', this.onPanelSlotChange);
      }
    }, {
      key: 'initTabs',
      value: function initTabs() {
        var _this2 = this;

        this.tabs = new Array(this.tabList.children.length);

        var upgradeTab = function upgradeTab(tab, idx) {
          var textContent = tab.textContent;

          var isActive = idx === _this2.activeIdx;

          var classList = isActive ? 'tab-button active' : 'tab-button';
          var ariaSelected = isActive ? 'aria-selected="true"' : '';
          var tabIndex = isActive ? '' : 'tabindex="-1"';

          tab.setAttribute('role', 'presentation');
          tab.innerHTML = '\n          <button\n            id="tab-' + idx + '-btn"\n            class="' + classList + '"\n            role="tab"\n            aria-controls="panel-' + idx + '"\n            ' + tabIndex + '\n            ' + ariaSelected + '\n          >\n          ' + textContent + '\n          </button>\n        ';

          // Add tab element to this.tabs list
          // so it can be accessed later.
          _this2.tabs[idx] = tab.firstElementChild;
        };

        this.tabList.setAttribute('role', 'tablist');

        forEach.call(this.tabList.children, upgradeTab);
        this.tabsWrapper.insertBefore(this.tabList, this.slider);
      }
    }, {
      key: 'setActiveTab',
      value: function setActiveTab() {
        var _this3 = this;

        forEach.call(this.tabs, function (tab, idx) {
          var panel = _this3.panels[idx];

          if (idx !== _this3.activeIdx) {
            tab.classList.remove('active');
            tab.removeAttribute('aria-selected');
            tab.setAttribute('tabindex', '-1');
            panel.hidden = true;
          } else {
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            tab.removeAttribute('tabindex');
            panel.hidden = false;
          }
        });

        this.activeTab.focus();
      }
    }, {
      key: 'initPanels',
      value: function initPanels() {
        var _this4 = this;

        forEach.call(this.panels, function (panel, idx) {
          panel.setAttribute('role', 'tabpanel');
          panel.id = 'panel-' + idx;
          panel.hidden = panel !== _this4.activePanel;
        });
      }
    }, {
      key: 'positionSlider',
      value: function positionSlider() {
        var activeTab = this.activeTab;

        var _getBoundingClientRec = this.getBoundingClientRect(),
            hostLeft = _getBoundingClientRec.left;

        var _activeTab$getBoundin = activeTab.getBoundingClientRect(),
            tabLeft = _activeTab$getBoundin.left,
            tabWidth = _activeTab$getBoundin.width;

        var tabMargin = parseInt(w.getComputedStyle(activeTab).getPropertyValue('margin-left').match(/\d+/)[0], 10);

        this.slider.style.left = tabLeft - hostLeft - tabMargin + 'px';
        this.slider.style.width = tabWidth + 'px';
      }
    }, {
      key: 'onTabSlotChange',
      value: function onTabSlotChange(e) {
        var _this5 = this;

        this.tabList = e.target.assignedNodes()[0];
        if (!this.tabList) return;

        this.initTabs();

        // Slightly delay positioning the slider
        // so that initTabs has time to finish
        setTimeout(function () {
          _this5.positionSlider();
        }, 50);
      }
    }, {
      key: 'onPanelSlotChange',
      value: function onPanelSlotChange(e) {
        this.panels = e.target.assignedNodes()[0].querySelectorAll('[data-panel]');

        if (!this.panels) return;

        this.initPanels();
      }
    }, {
      key: 'onShadowRootClick',
      value: function onShadowRootClick(e) {
        if (!e.target.matches('button[id^="tab"]')) return;
        this.activeIdx = indexOf.call(this.tabs, e.target);
        this.dispatchEvent(new CustomEvent('tabChange', {
          detail: {
            on: this.on
          },
          bubbles: true
        }));
      }
    }, {
      key: 'onShadowRootKeydown',
      value: function onShadowRootKeydown(e) {
        if (!e.target.matches('button[id^="tab"]')) return;

        var idxMap = {
          ArrowLeft: this.activeIdx - 1,
          ArrowRight: this.activeIdx + 1
        };

        var nextIdx = e.key in idxMap ? idxMap[e.key] : null;

        if (this.tabs[nextIdx]) {
          e.preventDefault();
          this.activeIdx = nextIdx;
        }
        this.dispatchEvent(new CustomEvent('tabChange', {
          detail: {
            on: this.on
          },
          bubbles: true
        }));
      }
    }]);

    return Tabs;
  }(HTMLElement);

  customElements.define('pearson-tabs', Tabs);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global moment */
(function (w, doc) {
  'use strict';

  var isIE11 = !!window.MSInputMethodContext && !!doc.documentMode;
  var keys = {
    UP: isIE11 ? 'Up' : 'ArrowUp',
    DOWN: isIE11 ? 'Down' : 'ArrowDown',
    ENTER: 'Enter',
    ESC: isIE11 ? 'Esc' : 'Escape',
    TAB: 'Tab'
  };

  var template = doc.createElement('template'),
      timeItem = doc.createElement('template'),
      checkIcon = '\n      <svg\n        class="pe-icon"\n        aria-hidden="true"\n        focusable="false"\n        style="width:18px;height:18px;"\n      >\n        <path d="M7.35823097,13.99969 C7.08123097,13.99969 6.81423097,13.88469 6.62523097,13.67969 L4.26623097,11.13469 C3.89123097,10.72869 3.91523097,10.09669 4.32023097,9.72169 C4.72423097,9.34469 5.35623097,9.36869 5.73323097,9.77469 L7.25323097,11.41469 L12.182231,4.42369 C12.501231,3.97269 13.125231,3.86469 13.576231,4.18269 C14.027231,4.50069 14.135231,5.12469 13.817231,5.57569 L8.17523097,13.57569 C8.00223097,13.82269 7.72523097,13.97769 7.42423097,13.99769 C7.40223097,13.99869 7.38023097,13.99969 7.35823097,13.99969"/>\n      </svg>\n    ',
      clockIcon = '\n      <svg\n        class="pe-icon"\n        aria-hidden="true"\n        focusable="false"\n        style="width:18px;height:18px;" \n      >\n        <path d="M13.1035,14.1035 C13.0055,14.2015 12.8775,14.2495 12.7495,14.2495 C12.6225,14.2495 12.4945,14.2015 12.3965,14.1035 L8.1475,9.8545 C8.1005,9.8075 8.0635,9.7525 8.0385,9.6905 C8.0135,9.6295 7.9995,9.5655 7.9995,9.4995 L7.9995,5.4995 C7.9995,5.2235 8.2235,4.9995 8.4995,4.9995 C8.7765,4.9995 8.9995,5.2235 8.9995,5.4995 L8.9995,9.2925 L13.1035,13.3965 C13.2985,13.5915 13.2985,13.9085 13.1035,14.1035 M8.9995,-0.0005 C4.0375,-0.0005 -0.0005,4.0375 -0.0005,8.9995 C-0.0005,13.9625 4.0375,17.9995 8.9995,17.9995 C13.9625,17.9995 17.9995,13.9625 17.9995,8.9995 C17.9995,4.0375 13.9625,-0.0005 8.9995,-0.0005"/>\n      </svg>\n    ',
      warningIcon = '\n      <svg\n        aria-hidden="true"\n        focusable="false"\n        style="width:18px;height:18px;fill:currentColor" \n      >\n        <path d="M9.99994044,10.5 C9.99994044,10.776 9.77594044,11 9.49994044,11 L8.49994044,11 C8.22394044,11 7.99994044,10.776 7.99994044,10.5 L7.99994044,7.5 C7.99994044,7.224 8.22394044,7 8.49994044,7 L9.49994044,7 C9.77594044,7 9.99994044,7.224 9.99994044,7.5 L9.99994044,10.5 Z M9.99994044,13.5 C9.99994044,13.776 9.77594044,14 9.49994044,14 L8.49994044,14 C8.22394044,14 7.99994044,13.776 7.99994044,13.5 L7.99994044,12.5 C7.99994044,12.224 8.22394044,12 8.49994044,12 L9.49994044,12 C9.77594044,12 9.99994044,12.224 9.99994044,12.5 L9.99994044,13.5 Z M15.9460591,15.275 L9.44500379,2.276 C9.26100222,1.908 8.73899778,1.908 8.55499621,2.276 L2.05394089,15.275 C1.88693947,15.607 2.12794152,16 2.49894468,16 L15.5010553,16 C15.8720585,16 16.1130605,15.607 15.9460591,15.275 Z"/>\n    </svg>';

  timeItem.innerHTML = '\n    <li\n      class="listbox-item"\n      role="option"\n      aria-selected="false"\n      data-time=""\n      data-idx=""\n    >\n\t\t\t\t' + checkIcon + '\n      <span class="time"></span>\n    </li>\n  ';

  template.innerHTML = '\n<style>\ninput{display:block;width:100%;height:36px;padding:0 14px;border:1px solid #c7c7c7;border-radius:4px;margin-top:6px}input:focus{position:relative;outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #0b73da;box-shadow:0 0 0 2px #fff,0 0 0 4px #0b73da;z-index:1}input[disabled]{color:#c7c7c7;background-color:#e9e9e9;cursor:not-allowed}input[readonly]{border-color:transparent;background-color:transparent}ul{list-style-type:none;padding:0;margin:0}svg{fill:currentColor;vertical-align:top}:host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box;font:14px/18px Open Sans,Calibri,Tahoma,sans-serif}:host{position:relative;display:inline-block;max-width:400px;color:#252525}.pe-icon{position:absolute;color:#6a7070;pointer-events:none}.timepicker{position:relative}.timepicker .pe-icon{right:14px;top:33px;z-index:2}.timepicker-label{font-size:12px;line-height:16px;color:#6a7070}.timepicker-input{min-width:150px;margin-bottom:4px}.timepicker-input[aria-invalid=true]{border-color:#db0020;margin-bottom:0}.timepicker-input[aria-invalid=true]:focus{-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #db0020;box-shadow:0 0 0 2px #fff,0 0 0 4px #db0020}.timepicker-input[aria-invalid=true]~.timepicker-error{display:block}.timepicker-error{font-size:12px;line-height:16px;color:#db0020;margin-top:4px;margin-bottom:2px}.timepicker-error:empty{display:none}.listbox-wrapper{position:absolute;width:100%;z-index:999;visibility:hidden}:host([open]) .listbox-wrapper{visibility:visible}.listbox{min-width:220px;width:100%;max-height:300px;border:1px solid #c7c7c7;border-radius:2px;overflow-y:auto;background-color:#fff;visibility:hidden}.listbox-item{cursor:pointer;position:relative;padding:4px 24px}.listbox-item.focused,.listbox-item:hover{background-color:#e9e9e9}.listbox-item.focused{border-radius:4px;-webkit-box-shadow:inset 0 0 0 2px #0b73da;box-shadow:inset 0 0 0 2px #0b73da}.listbox-item .pe-icon{display:none;left:5px}.listbox-item.selected .pe-icon{display:block}.hidden{display:none}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}}@-webkit-keyframes fadeOutUp{0%{visibility:visible}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{visibility:visible}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{visibility:hidden;opacity:0}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{visibility:hidden;opacity:0}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s;visibility:visible}@media (max-width:480px){.animateIn{-webkit-animation-name:slideInUp;animation-name:slideInUp}}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s;visibility:hidden}@media (max-width:480px){.animateOut{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}}\n</style>\n  <div class="timepicker">\n    <label\n      id="timepicker-label"\n      class="timepicker-label"\n      for="timepicker-input"\n    >\n      Select time (HH:MM AM/PM)\n    </label>\n    <input \n      type="text" \n      id="timepicker-input"\n      class="timepicker-input"\n      role="combobox"\n      aria-autocomplete="list"\n      aria-haspopup="listbox"\n      aria-expanded="false"\n      aria-owns="listbox"\n    >\n      ' + clockIcon + ' \n    <p \n      id="timepicker-error"\n      class="timepicker-error"\n      role="alert"\n      aria-live="assertive"\n    ></p>\n  </div>\n  <div class="listbox-wrapper" role="presentation">\n    <ul\n      id="listbox"\n      class="listbox animated"\n      role="listbox"\n      aria-labelledby="timepicker-label"\n    ></ul>\n  </div>\n';

  function calculate(increments) {
    var endTime = moment().add(24, 'h'),
        timeStops = [],
        startTime = moment().add(increments - moment().minute() % increments, 'm');
    while (startTime < endTime) {
      timeStops.push(new moment(startTime));
      startTime.add(increments, 'm').format('LLL');
    }
    return timeStops;
  }

  var TIME_FORMATS = {
    '12': /^([0-1][0-2]|\d):[0-5][0-9]\s(PM|AM|am|pm)$/,
    '24': /^([01]\d|2[0-3]):?([0-5]\d)$/
  };

  function buildTimeEl(time, index) {
    var li = timeItem.content.cloneNode(true),
        item = li.querySelector('li'),
        timeEl = li.querySelector('.time');
    item.setAttribute('data-time', time);
    item.setAttribute('data-idx', index);
    item.id = 'time-' + index;
    timeEl.innerHTML = time;
    return li;
  }

  function isVisible(el) {
    var rect = el.getBoundingClientRect(),
        parentRect = el.parentElement.getBoundingClientRect();

    // evaluate if the element is out of bounds
    // of its parent
    return rect.top < parentRect.top + parentRect.height && rect.top + rect.height > parentRect.top && rect.bottom < parentRect.bottom && rect.top > parentRect.top;
  }

  var find = Array.prototype.find;

  w.ShadyCSS && w.ShadyCSS.prepareTemplate(template, 'pearson-timepicker');

  var Timepicker = function (_HTMLElement) {
    _inherits(Timepicker, _HTMLElement);

    _createClass(Timepicker, [{
      key: 'open',
      get: function get() {
        return this.hasAttribute('open');
      },
      set: function set(value) {
        var isOpen = Boolean(value);

        if (isOpen) {
          if (this.selectedItem) this.selectedItem.scrollIntoView(true);

          this.setAttribute('open', '');
        } else {
          this.removeAttribute('open');
        }
      }
    }, {
      key: 'increments',
      get: function get() {
        return this.getAttribute('increments') || '15';
      }
    }, {
      key: 'hours',
      get: function get() {
        return this.getAttribute('hours');
      }
    }, {
      key: 'format',
      get: function get() {
        return this.hours === '12' ? 'h:mm A' : 'HH:mm';
      }
      /**
       * Set the label eleement's text content with the user-provided
       * label, followed by format instructions
       */

    }, {
      key: 'labelText',
      set: function set(text) {
        this.label.textContent = text + ' (' + (this.hours === '12' ? 'HH:MM AM/PM' : 'HH:MM') + ')';
      }
    }, {
      key: 'pattern',
      get: function get() {
        return TIME_FORMATS[this.hours];
      }

      // TODO: Ensure validation only happens
      // if format matches AND time exists in list

    }, {
      key: 'validity',
      set: function set(isValid) {
        var errorMsg = this.errorMsg,
            input = this.input;

        if (isValid) {
          input.removeAttribute('aria-invalid');
          input.removeAttribute('aria-describedby');
          errorMsg.innerHTML = '';
        } else {
          input.setAttribute('aria-invalid', 'true');
          input.setAttribute('aria-describedby', 'timepicker-error');
          errorMsg.innerHTML = warningIcon + '\n        Enter a valid time.';
        }
      }
      /**
       * The currently active listbox item
       * @type {HTMLElement}
       */

    }, {
      key: 'activeItem',
      get: function get() {
        return this.activeIdx > -1 ? this.items[this.activeIdx] : null;
      },
      set: function set(nextItem) {
        if (this.activeItem) {
          this.activeItem.classList.remove('focused');
          this.activeItem.setAttribute('aria-selected', 'false');
        }

        if (nextItem) {
          this.input.setAttribute('aria-activedescendant', 'time-' + nextItem.dataset.idx);
          nextItem.classList.add('focused');
          nextItem.setAttribute('aria-selected', 'true');

          this.activeIdx = Number(nextItem.dataset.idx);
        }
      }
    }, {
      key: 'selectedItem',
      get: function get() {
        return this.selectedIdx > -1 ? this.items[this.selectedIdx] : null;
      },
      set: function set(nextItem) {
        if (this.selectedItem) {
          this.selectedItem.classList.remove('selected');
        }
        if (nextItem) {
          this.input.value = nextItem.dataset.time;
          this.validity = true;
          nextItem.classList.add('selected');

          this.selectedIdx = Number(nextItem.dataset.idx);

          if (this.activeItem !== nextItem) {
            this.activeItem = nextItem;
          }
        }
      }
    }, {
      key: 'selectedTime',
      get: function get() {
        return this.selectedItem ? this.selectedItem.dataset.time : null;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['open', 'readonly', 'disabled'];
      }
    }]);

    function Timepicker() {
      _classCallCheck(this, Timepicker);

      var _this = _possibleConstructorReturn(this, (Timepicker.__proto__ || Object.getPrototypeOf(Timepicker)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.label = clone.querySelector('#timepicker-label');
      _this.input = clone.querySelector('#timepicker-input');
      _this.errorMsg = clone.querySelector('#timepicker-error');
      _this.listbox = clone.querySelector('#listbox');

      _this.shadowRoot.appendChild(clone);

      _this.activeIdx = -1;
      _this.selectedIdx = -1;
      _this.plainTextTimes = [];

      _this.onInputKeydown = _this.onInputKeydown.bind(_this);
      _this.onInputFocus = _this.onInputFocus.bind(_this);
      _this.onInputBlur = _this.onInputBlur.bind(_this);
      _this.onListboxClick = _this.onListboxClick.bind(_this);
      _this.onDocumentClick = _this.onDocumentClick.bind(_this);
      return _this;
    }

    _createClass(Timepicker, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
          var isOpen = newValue !== null;
          var activeDescendant = void 0,
              classToAdd = void 0,
              classToRemove = void 0;

          if (isOpen) {
            activeDescendant = this.activeIdx > -1 ? this.activeItem.id : '';
            classToAdd = 'animateIn';
            classToRemove = 'animateOut';
          } else {
            activeDescendant = '';
            classToAdd = 'animateOut';
            classToRemove = 'animateIn';
          }

          this.input.setAttribute('aria-expanded', isOpen);
          this.input.setAttribute('aria-activedescendant', activeDescendant);

          this.listbox.classList.remove(classToRemove);
          this.listbox.classList.add(classToAdd);
        }

        if (name === 'readonly' || name === 'disabled') {
          var isTruthy = newValue !== null;

          if (isTruthy) {
            this.input.setAttribute(name, name);
          } else {
            this.input.removeAttribute(name);
          }
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        var defaultValue = this.getAttribute('defaultValue');

        this.labelText = this.getAttribute('label') || '';

        // The pattern attribute only works with expressions
        // that do not have slashes around them
        this.input.pattern = this.pattern.toString().slice(1, -1);

        // TODO: repeat this every time listbox opens
        // TODO: filter items in list
        this.times = calculate(this.increments);
        this.times.forEach(function (time, index) {
          var text = time.format(_this2.format);
          _this2.plainTextTimes[index] = text;
          _this2.listbox.appendChild(buildTimeEl(text, index));
        });

        this.items = this.listbox.children;

        // Set user-provided initial value if
        // it passes validation
        if (this.pattern.test(defaultValue) && this.plainTextTimes.indexOf(defaultValue)) {
          var idx = this.plainTextTimes.indexOf(defaultValue);
          this.selectedItem = this.items[idx];
        }

        this.input.addEventListener('focus', this.onInputFocus);
        this.input.addEventListener('keydown', this.onInputKeydown);
        this.input.addEventListener('blur', this.onInputBlur);

        this.listbox.addEventListener('click', this.onListboxClick, true);

        doc.addEventListener('click', this.onDocumentClick, true);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        doc.removeEventListener('click', this.onDocumentClick, true);
      }
    }, {
      key: 'checkSelection',
      value: function checkSelection() {
        var _this3 = this;

        var activeItem = this.activeItem;

        if (this.activeIdx === -1 && this.input.value === '') {
          return;
        }

        // if the string is different than the selectedItem, use it
        if (this.input.value !== this.selectedTime || !this.activeItem) {
          activeItem = find.call(this.items, function (i) {
            return i.dataset.time.startsWith(_this3.input.value);
          });
        }

        this.selectedItem = activeItem;

        this.validity = this.input.checkValidity() && this.input.value === this.selectedTime;
      }
    }, {
      key: 'onInputFocus',
      value: function onInputFocus() {
        this.open = true;
      }
    }, {
      key: 'onInputKeydown',
      value: function onInputKeydown(e) {
        var items = this.items;
        var key = e.key;
        var isDirectionalKey = key === keys.UP || key === keys.DOWN;

        var prevOpen = this.open;
        var activeIdx = !prevOpen && this.selectedIdx > -1 ? this.selectedIdx : this.activeIdx;

        if (key === keys.ESC) {
          this.open = false;
          return;
        }

        if (!prevOpen && isDirectionalKey) {
          this.open = true;
        }

        switch (key) {
          case keys.UP:
            if (activeIdx <= 0) {
              activeIdx = items.length - 1;
            } else if (prevOpen) {
              activeIdx--;
            }
            break;
          case keys.DOWN:
            if (activeIdx === -1 || activeIdx >= items.length - 1) {
              activeIdx = 0;
            } else if (prevOpen) {
              activeIdx++;
            }
            break;
          case keys.ENTER:
            this.selectedItem = this.activeItem;
            this.open = false;
            return;
          case keys.TAB:
            this.open = false;
            return;
          default:
            return;
        }
        e.preventDefault();

        this.activeItem = this.items[activeIdx];

        if (isDirectionalKey && !isVisible(this.activeItem)) {
          this.activeItem.scrollIntoView(key === keys.UP);
        }
      }
    }, {
      key: 'onInputBlur',
      value: function onInputBlur(e) {
        this.checkSelection();
      }
    }, {
      key: 'onListboxClick',
      value: function onListboxClick(e) {
        var target = e.target;

        if (target && target.nodeName === 'LI') {
          this.selectedItem = target;
          this.open = false;
        }
      }
    }, {
      key: 'onDocumentClick',
      value: function onDocumentClick(e) {
        if (e.target === this) return;
        this.open = false;
      }
    }]);

    return Timepicker;
  }(HTMLElement);

  customElements.define('pearson-timepicker', Timepicker);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var SVG_CHECK_SM_18 = '\n    <svg\n      class="pe-icon--check-sm-18"\n      aria-hidden="true"\n      focusable="false"\n      aria-label="on"\n    >\n    <path\n      d="M7.35823097,13.99969 C7.08123097,13.99969 6.81423097,13.88469 6.62523097,13.67969 L4.26623097,11.13469 C3.89123097,10.72869 3.91523097,10.09669 4.32023097,9.72169 C4.72423097,9.34469 5.35623097,9.36869 5.73323097,9.77469 L7.25323097,11.41469 L12.182231,4.42369 C12.501231,3.97269 13.125231,3.86469 13.576231,4.18269 C14.027231,4.50069 14.135231,5.12469 13.817231,5.57569 L8.17523097,13.57569 C8.00223097,13.82269 7.72523097,13.97769 7.42423097,13.99769 C7.40223097,13.99869 7.38023097,13.99969 7.35823097,13.99969"\n    ></path>\n  </svg>\n';

  var SVG_REMOVE_SM_18 = '\n    <svg\n      class="pe-icon--remove-sm-18"\n      aria-hidden="true"\n      focusable="false"\n      aria-label="off"\n    >\n    <path\n      d="M10.4066,9 L13.7086,5.698 C14.0976,5.31 14.0976,4.68 13.7086,4.291 C13.3196,3.903 12.6906,3.903 12.3016,4.291 L8.9996,7.593 L5.6976,4.291 C5.3096,3.903 4.6796,3.903 4.2916,4.291 C3.9026,4.68 3.9026,5.31 4.2916,5.698 L7.5936,9 L4.2916,12.302 C3.9026,12.69 3.9026,13.32 4.2916,13.709 C4.4856,13.903 4.7406,14 4.9946,14 C5.2496,14 5.5036,13.903 5.6976,13.709 L8.9996,10.407 L12.3016,13.709 C12.4966,13.903 12.7506,14 13.0056,14 C13.2596,14 13.5146,13.903 13.7086,13.709 C14.0976,13.32 14.0976,12.69 13.7086,12.302 L10.4066,9 Z"\n    ></path>\n  </svg>\n';

  var template = doc.createElement('template');

  template.innerHTML = '\n  <style>\n  *,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{font-size:24px;position:relative;display:block;width:2em;height:1em;padding:0;border:0;border-radius:22px;margin:4px 0;color:#fff;background-color:#a9a9a9;cursor:pointer;-webkit-transition:background .3s;transition:background .3s;overflow:visible;min-width:50px}:host([on]:not([on=false])){background:#047a9c}:host([disabled]:not([disabled=false])){color:#c7c7c7;background-color:#e9e9e9;cursor:not-allowed}:host:before{content:"";background:#fff;display:block;position:absolute;left:3px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:.75em;height:.75em;-webkit-transition:left .3s;transition:left .3s;border-radius:100%}:host([on]:not([on=false])):before{left:27px}:host([disabled]:not([disabled=false])):before{background-color:#c7c7c7}:host(:focus){outline:0}:host(:focus):after{content:"";position:absolute;left:50%;top:50%;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);border:2px solid #1977d4;border-radius:22px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1}svg{width:.75em;height:.75em;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);fill:currentColor;pointer-events:none}svg[class*=check]{left:5px}svg[class*=remove]{right:5px}:host(:not([on])) svg[class*=check],:host([on]:not([on=false])) svg[class*=remove]{display:none}@media (prefers-reduced-motion:reduce){:host,:host:before{-webkit-transition:none!important;transition:none!important}}\n  </style>\n  ' + SVG_CHECK_SM_18 + '\n  ' + SVG_REMOVE_SM_18 + '\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-toggle');

  var Toggle = function (_HTMLElement) {
    _inherits(Toggle, _HTMLElement);

    _createClass(Toggle, [{
      key: 'on',
      get: function get() {
        return this.hasAttribute('on') & this.getAttribute('on') !== 'false';
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
        return this.hasAttribute('disabled') && this.getAttribute('disabled') !== 'false';
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
        var isTruthy = newValue !== 'false';
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

        if (this.id !== null && this.labelNode !== null) {
          if (!this.labelNode.id) this.labelNode.id = this.id + 'label';
        }

        if (this.labelNode !== null) {
          // This toggle must be labelled by the external label node
          this.setAttribute('aria-labelledby', this.labelNode.id);
          // We listen for the external label to be clicked
          this.labelNode.addEventListener('click', this.onLabelClick);
        }
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