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

  template.innerHTML = ' \n    <style>\n\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host [hidden],:host template{display:none}:host html{font-size:14px}:host *,:host html{-webkit-box-sizing:border-box;box-sizing:border-box}:host body{font-family:Open Sans,Arial,Helvetica,sans-serif}:host body,:host p{font-size:14px;line-height:1.5;font-weight:400}:host strong{font-weight:600}:host a{font-size:14px;color:#047a9c}:host a:hover{color:#03536a;text-decoration:none}:host a:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host button{cursor:pointer}:host li,:host ul{font-size:14px}:host svg{fill:#252525}:host svg[focusable=false]:focus{outline:none}:host input,:host textarea{font:inherit;letter-spacing:inherit;word-spacing:inherit}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}:host .fadeIn,:host .slideInDown{opacity:1!important;visibility:visible!important}:host .fadeOut,:host .slideOutDown{opacity:0;visibility:hidden}:host .slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}:host .slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}:host .fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}:host .fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}:host .animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}:host .animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){:host .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}:host html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}:host .no-border{border:0}:host .icon-18{width:18px;height:18px}:host .icon-24{width:24px;height:24px}:host .hidden{display:none!important}:host .gr-h1{font-size:24px;line-height:28px}:host .gr-h1,:host .gr-h2{font-weight:400;margin-top:0}:host .gr-h2{font-size:20px;line-height:26px}:host .gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}:host .gr-label{font-size:12px;line-height:16px;color:#6a7070;display:block;margin-bottom:4px}:host .gr-meta{font-size:12px;line-height:12px;color:#6a7070}:host .gr-semi-bold{font-weight:600}:host .gr-font-large{font-size:16px;line-height:24px}:host .gr-font-normal{font-size:14px;line-height:20px}:host .accordion{border:1px solid #c7c7c7;grid-column:span 12;border-radius:4px}:host .accordion h3{border-bottom:1px solid #c7c7c7;margin:0}:host .accordion h3 button{background-color:#fff;width:100%;border:0;text-align:left;padding:16px}:host .accordion h3 button[aria-expanded=false] .collapse{display:none}:host .accordion h3 button[aria-expanded=false] .expand,:host .accordion h3 button[aria-expanded=true] .collapse{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}:host .accordion h3 button[aria-expanded=true] .collapse{margin-left:16px}:host .accordion h3 button[aria-expanded=true] .expand{display:none;margin-left:16px}:host .accordion h3 button:focus{background-color:#efefef;z-index:10000;position:relative;outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .accordion h3 .accordion-title{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}:host .accordion>div{padding:16px}:host .accordion .accordion-panel{display:none;border-bottom:1px solid #c7c7c7;background:#fff}:host .accordion .accordion-panel:last-child{border-bottom:0}:host .accordion button[aria-expanded=false]+.accordion{display:none}:host .accordion{border-radius:0}:host .accordion button:active{color:#24292e}\n  \n    </style>\n    <div id="accordionGroup" class="accordion">  \n    </div>\n', buttonTemplate.innerHTML = '\n      <h3>\n        <button aria-expanded="false" class="accordion-trigger" aria-controls="sect3" id="accordion1id3" data-index="2">\n          <span class="accordion-title">\n            <span class="button-label">\n               <slot name="buttons"></slot>\n            </span>\n            <svg focusable="false" class="icon-18 expand" aria-hidden="true">\n                <path d="M9.62193909,12.7616134 C9.25409223,13.0918069 8.69027111,13.0789828 8.33764681,12.7231411 L3.27435567,7.61365203 C2.90854811,7.24450681 2.90854811,6.64600414 3.27435567,6.27685892 C3.64016324,5.90771369 4.23325448,5.90771369 4.59906205,6.27685892 L9,10.7179514 L13.400938,6.27685892 C13.7667455,5.90771369 14.3598368,5.90771369 14.7256443,6.27685892 C15.0914519,6.64600414 15.0914519,7.24450681 14.7256443,7.61365203 L9.66235319,12.7231411 C9.64896608,12.7366503 9.63548354,12.7494543 9.62191255,12.7615685 L9.62193909,12.7616134 Z" fill-rule="nonzero"></path>\n            </svg>\n            <svg focusable="false" class="icon-18 collapse" aria-hidden="true">\n                <path d="M9.62193909,5.2383866 L9.62191255,5.23843148 C9.63548354,5.25054567 9.64896608,5.26334967 9.66235319,5.27685892 L14.7256443,10.386348 C15.0914519,10.7554932 15.0914519,11.3539959 14.7256443,11.7231411 C14.3598368,12.0922863 13.7667455,12.0922863 13.400938,11.7231411 L9,7.28204859 L4.59906205,11.7231411 C4.23325448,12.0922863 3.64016324,12.0922863 3.27435567,11.7231411 C2.90854811,11.3539959 2.90854811,10.7554932 3.27435567,10.386348 L8.33764681,5.27685892 C8.69027111,4.92101724 9.25409223,4.90819314 9.62193909,5.2383866 Z"></path>\n            </svg>\n          </span>\n        </button>\n      </h3>\n    ', panelTemplate.innerHTML = '\n\t\t\t<div id="sect3" role="region" aria-labelledby="accordion1id3" class="accordion-panel animateIn">\n\t\t\t\t<div class="content">\n\t\t\t\t\t  <slot name="panels"></slot>\n\t\t\t\t</div>\n\t\t\t</div>\n    ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-accordion');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  var Accordion = function (_HTMLElement) {
    _inherits(Accordion, _HTMLElement);

    _createClass(Accordion, [{
      key: 'multiple',
      get: function get() {
        return this.hasAttribute('multiple');
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['multiple'];
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
      _this.buttonSlot = buttonClone.querySelector('slot[name="buttons"]');
      _this.panelSlot = panelClone.querySelector('slot[name="panels"]');
      _this.panelSlotToRemove = clone.querySelector('.accordion > div');

      if (_this.buttonSlot !== null) {
        _this.buttonSlot.addEventListener('slotchange', function (event) {
          var panelSlotToRemove = _this.shadowRoot.querySelector('.accordion > div'),
              panelContainer = _this.panelSlot.assignedNodes()[0],
              buttonSlotToRemove = _this.shadowRoot.querySelector('.accordion h3'),
              triggers = _this.shadowRoot.querySelectorAll('.accordion-trigger');

          if (panelContainer) {
            var panels = panelContainer.querySelectorAll('.panel'),
                ul = _this.buttonSlot.assignedNodes()[0],
                buttons = ul.querySelectorAll('li');

            buttons.forEach(function (button, index) {
              _this.target.appendChild(_this.renderButtons(button.innerHTML, index, buttons.length));
              _this.target.appendChild(_this.renderPanels(panels, index, button));
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
                if (_this.shadowRoot.activeElement === firstTrigger) {
                  lastTrigger.focus();
                } else {
                  triggers[prevButton].focus();
                }
              }

              if (event.key === 'ArrowDown') {
                event.preventDefault();
                if (_this.shadowRoot.activeElement === lastTrigger) {
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

          if (_this2.multiple) {
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
    }]);

    return Accordion;
  }(HTMLElement);

  customElements.define('pearson-accordion', Accordion);
})(window, document);
// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        if (this.parentNode === null) {
          return;
        }
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);