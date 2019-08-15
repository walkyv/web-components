(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template'),
    dropdownTemplate = doc.createElement('template'),
    slotTemplate = doc.createElement('template'),
    menuTemplate = doc.createElement('template'),
    textTemplate = doc.createElement('template'),
    FOCUSABLE_ELEMENTS = `
    a[href]:not([tabindex^="-"]):not([inert]),
    area[href]:not([tabindex^="-"]):not([inert]),
    input:not([disabled]):not([inert]),
    select:not([disabled]):not([inert]),
    textarea:not([disabled]):not([inert]),
    button:not([disabled]):not([inert]),
    iframe:not([tabindex^="-"]):not([inert]),
    audio:not([tabindex^="-"]):not([inert]),
    video:not([tabindex^="-"]):not([inert]),
    [contenteditable]:not([tabindex^="-"]):not([inert]),
    [tabindex]:not([tabindex^="-"]):not([inert])`;

  //Styles must be copied from the css file
  // and pasted between the style tags below

  // Other markup should be written after the closing tag.
  slotTemplate.innerHTML = `
    <slot name="list"></slot>
  `;

  template.innerHTML = ` 
    <style>
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{font-size:14px}*,html{-webkit-box-sizing:border-box;box-sizing:border-box}body{font-family:Open Sans,Arial,Helvetica,sans-serif}body,p{font-size:14px;line-height:1.5;font-weight:400}strong{font-weight:600}a{font-size:14px;color:#047a9c}a:hover{color:#03536a;text-decoration:none}a:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}button{cursor:pointer}li,ul{font-size:14px}svg{fill:#252525}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.fadeIn,.slideInDown{opacity:1!important;visibility:visible!important}.fadeOut,.slideOutDown{opacity:0;visibility:hidden}.slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}.slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}.fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}.fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){.animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}.no-border{border:0}.icon-18{width:18px;height:18px}.icon-24{width:24px;height:24px}.hidden{display:none!important}.gr-h1{font-size:24px;line-height:28px}.gr-h1,.gr-h2{font-weight:400;margin-top:0}.gr-h2{font-size:20px;line-height:26px}.gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}.gr-label{line-height:16px;display:block;margin-bottom:4px}.gr-label,.gr-meta{font-size:12px;color:#6a7070}.gr-meta{line-height:12px}.gr-semi-bold{font-weight:600}.gr-font-large{font-size:16px;line-height:24px}.gr-font-normal{font-size:14px;line-height:20px}.gr-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:16px;cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:14px}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:16px}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.gr-dropdown-container .gr-btn{margin:0;font-size:14px;font-weight:700}.gr-dropdown-container .gr-btn svg{margin-left:1em}.gr-dropdown-container .dropdown-menu{position:absolute;z-index:10;margin-top:-9px;-ms-overflow-style:none}.gr-dropdown-container .mobile-group{background:#f5f5f5;border-bottom:1px solid #e9e9e9;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:100%;padding:24px;position:relative;top:-27px;z-index:10;overflow:hidden}.gr-dropdown-container .mobile-group span{width:100%;text-align:center}.gr-dropdown-container .mobile-group button{margin:0 0 0 12px}.gr-dropdown-container .menu{background-color:#fff;position:absolute}.gr-dropdown-container .menu button{background:none;border:0;font-size:14px}.gr-dropdown-container .menu button>*{pointer-events:none}.gr-dropdown-container .menu button:focus{outline:none}.gr-dropdown-container .menu button:focus:after{border:2px solid #1977d4;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + -10px);width:calc(100% + -10px);height:100%;top:0;left:5px;z-index:1}.gr-dropdown-container .menu{list-style-type:none;padding:1em 0;border:1px solid #d9d9d9;border-radius:2px;width:220px;margin-top:0;top:16px;position:relative}.gr-dropdown-container [aria-checked=false] svg{display:none}.gr-dropdown-container [aria-checked=true] svg{display:inline-block}.gr-dropdown-container .seperator{padding-bottom:6px;margin-bottom:6px;border-bottom:1px solid #d9d9d9}.gr-dropdown-container li button{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-decoration:none;width:100%;color:#252525;text-align:left;padding:0}.gr-dropdown-container li button:hover{background-color:#e9e9e9}.gr-dropdown-container li button svg{position:absolute;left:12px}.gr-dropdown-container .option-text{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin:5px 24px 5px 34px;width:100%}.gr-dropdown-container .divider{border-bottom:1px solid #c7c7c7;padding-bottom:8px;margin:0 25px}.gr-dropdown-container .divider+li{margin-top:8px}.gr-dropdown-container .truncate{max-width:100%;width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:480px){.gr-dropdown-container .dropdown-menu{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.gr-dropdown-container .option-text{font-size:16px;margin:12px 42px}.gr-dropdown-container .menu{max-height:300px;overflow:scroll;width:100%;top:44px;border:0;height:100vh}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.gr-dropdown-container .menu li button[aria-checked=true] svg{top:4px}}@media (min-width:480px){.gr-dropdown-container .dropdown-menu .mobile-group{display:none}}.button-bar ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;padding:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.button-bar .dropdown-menu button svg{top:5px}}.button-bar .more-buttons,.button-bar .third-button{display:none}@media (min-width:887px){.button-bar .more-buttons,.button-bar .third-button{display:block}}.button-bar .second-button{display:none}@media (min-width:640px){.button-bar .second-button{display:block}}.button-bar .first-button{display:none}@media (min-width:591px){.button-bar .first-button{display:block}}.button-bar #moreDropdown{display:block}@media (min-width:887px){.button-bar #moreDropdown{display:none}}.button-bar #moreDropdown ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.button-bar #moreDropdown li{width:100%}.button-bar #moreDropdown li svg{margin:0!important}.button-bar #moreDropdown .first-button{display:block}@media (min-width:591px){.button-bar #moreDropdown .first-button{display:none}}.button-bar #moreDropdown .second-button{display:block}@media (min-width:640px){.button-bar #moreDropdown .second-button{display:none}}.button-bar #moreDropdown .more-buttons,.button-bar #moreDropdown .third-button{display:block}@media (max-width:480px){.button-bar .gr-dropdown-container .menu{border:1px solid #c7c7c7;height:auto;width:220px;top:16px}}

    </style>
    <div class="button-bar">
       <ul id="buttonBar">
           
       </ul>
    </div>
`;

  dropdownTemplate.innerHTML = `
  <li id="moreDropdown">
    <div class="gr-dropdown-container">
      <button id="openMenu" class="gr-btn icon-btn-18" aria-haspopup="true" aria-expanded="false" >
        <svg focusable="false" class="icon-18" aria-hidden="true" style="margin:0;">
          <path d="M7.5,3.5 C7.5,2.67157288 8.17157288,2 9,2 C9.82842712,2 10.5,2.67157288 10.5,3.5 C10.5,4.32842712 9.82842712,5 9,5 C8.17157288,5 7.5,4.32842712 7.5,3.5 Z" ></path>
          <path d="M7.5,9 C7.5,8.17157288 8.17157288,7.5 9,7.5 C9.82842712,7.5 10.5,8.17157288 10.5,9 C10.5,9.82842712 9.82842712,10.5 9,10.5 C8.17157288,10.5 7.5,9.82842712 7.5,9 Z" ></path>
          <path d="M7.5,14.5 C7.5,13.6715729 8.17157288,13 9,13 C9.82842712,13 10.5,13.6715729 10.5,14.5 C10.5,15.3284271 9.82842712,16 9,16 C8.17157288,16 7.5,15.3284271 7.5,14.5 Z" ></path>
        </svg>
      </button>
    </div>
  </li>
  `

  menuTemplate.innerHTML = `
  <div class="dropdown-menu animateIn">
    <ul role="menu" class="menu">

    </ul>
  </div>
  `

  textTemplate.innerHTML = `
    <span class="option-text"></span>
  `;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-buttonbar');

  function getFocusableChildren(event) {
    if (event.target !== undefined) {
      const filter = Array.prototype.filter,
        focusableChildren = event.target.querySelectorAll(FOCUSABLE_ELEMENTS);

      return filter.call(focusableChildren, function(child) {
        return !!(
          child.offsetWidth ||
          child.offsetHeight ||
          child.getClientRects().length
        );
      });
    } else {
      const filter = Array.prototype.filter,
        focusableChildren = event.querySelectorAll(FOCUSABLE_ELEMENTS);

      return filter.call(focusableChildren, function(child) {
        return !!(
          child.offsetWidth ||
          child.offsetHeight ||
          child.getClientRects().length
        );
      });
    }

  }

  function accessibility(node) {
    console.log(node)
    const focusableElements = getFocusableChildren(node),
      firstFocusableElement = focusableElements[0];

    firstFocusableElement.focus();
    console.log(firstFocusableElement)
    focusableElements.forEach((el, index) => {
      el.setAttribute('data-index', index);
      el.addEventListener('keydown', keyboardEvents, true)
    });
  }

  function getDeepActiveElement() {
    let a = doc.activeElement;
    while (a && a.shadowRoot && a.shadowRoot.activeElement) {
      a = a.shadowRoot.activeElement;
    }
    return a;
  }

  function keyboardEvents (event) {
    const nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
      prevButton = parseInt(event.target.getAttribute('data-index')) - 1,
      focusableElements = getFocusableChildren(event.target.parentNode.parentNode),
      firstFocusableElement = focusableElements[0],
      lastFocusableElement = focusableElements[focusableElements.length - 1];
    console.log(event.key)
    if (event.key === 'ArrowUp' || event.key === 'Up') {
      event.preventDefault();

      if (getDeepActiveElement()  === firstFocusableElement) {
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

  class ButtonBar extends HTMLElement {
    static get observedAttributes() {
      return ['open'];
    }

    get open() {
      return this.hasAttribute('open');
    }

    set open(bool) {
      this.setAttribute('open', bool)
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const clone = template.content.cloneNode(true),
        slotClone = slotTemplate.content.cloneNode(true),
        slotCloneTarget = clone.querySelector('#buttonBar');

      this.shadowRoot.appendChild(clone);
      slotCloneTarget.appendChild(slotClone);
      this.buildDropdown = this.buildDropdown.bind(this);
      this.removeDropdown = this.removeDropdown.bind(this);
      this.closeOnBodyClick = this.closeOnBodyClick.bind(this)
    }

    closeOnBodyClick (event) {
      let target = event.target;
      do {
        if (target === this || target.tagName === 'BUTTON') {
          return;
        }
        target = target.parentNode;
      } while (target);
      this.open = false
    }

    buildDropdown () {
      const menuTemplateClone = menuTemplate.content.cloneNode(true),
        menuTemplateTarget = this.shadowRoot.querySelector('.gr-dropdown-container'),
        menuItems = this.shadowRoot.querySelectorAll('#buttonBar li:not(#moreDropdown)');

      menuTemplateTarget.appendChild(menuTemplateClone);

      const menuItemTarget = this.shadowRoot.querySelector('.menu');

      menuItems.forEach(item => {
        const clone = item.cloneNode(true),
          button = clone.querySelector('button'),
          textTemplateClone = doc.createElement('span'),
          itemText = clone.getAttribute('data-text');

        textTemplateClone.classList.add('option-text');
        textTemplateClone.innerHTML = itemText;

        button.appendChild(textTemplateClone)
        button.classList.remove('gr-btn');
        menuItemTarget.appendChild(clone);

        button.addEventListener('click', () => {this.open = false});
      });

      document.addEventListener('click', this.closeOnBodyClick);
        const menuLinks = this.shadowRoot.querySelector('.gr-dropdown-container .dropdown-menu');
      menuLinks.addEventListener('animationend',  accessibility, true);
      doc.addEventListener('keydown', event => {
        if (event.key === 'Escape' ||  event.key === 'Esc') {
          this.open = false
        }
      });

    };

    removeDropdown() {
      const menu = this.shadowRoot.querySelector('.dropdown-menu'),
        dropdownButton = this.shadowRoot.querySelector('#openMenu');
      dropdownButton.disabled = false;
      dropdownButton.focus();
      if (menu) {
        menu.remove();
      }
      document.removeEventListener('click', this.closeOnBodyClick);
    }

    connectedCallback() {
      const slot = this.shadowRoot.querySelector('slot'),
        shadowTarget = this.shadowRoot.querySelector('#buttonBar'),
        dropdownTemplateClone = dropdownTemplate.content.cloneNode(true);

      slot.addEventListener('slotchange', event => {
        const buttons = slot.assignedNodes();
        let count = 0;
        buttons.forEach(button => {
          button.removeAttribute('slot');
          if (count === 0) {
            button.classList.add('first-button');
          } else if (count === 1) {
            button.classList.add('second-button');
          } else if (count === 2){
            button.classList.add('third-button');
          } else {
            button.classList.add('more-buttons');
          }
          shadowTarget.appendChild(button)
          slot.remove();
          count++
        });
        shadowTarget.appendChild(dropdownTemplateClone);

        const dropdownButton = this.shadowRoot.querySelector('#openMenu');

        dropdownButton.addEventListener('click', event => {
          event.stopImmediatePropagation();
          this.open = true;
          dropdownButton.disabled = true
        })



      });


    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'open' && newValue === 'true') {
        this.buildDropdown();
      } else if (name === 'open' && newValue === 'false') {
        this.removeDropdown();
      }
    }
  }
  customElements.define('pearson-buttonbar', ButtonBar);
})(window, document);
