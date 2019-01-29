(function(w, doc) {
  'use strict';

  const template = doc.createElement('template');

  template.innerHTML = ` 
    <style>
    :host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:14px,18px,Open Sans,Calibri,Tahoma,sans-serif}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.tabs,ul{position:relative;height:41px;list-style-type:none;padding:0;margin:0}.tab,li{display:inline-block}.tab-button{color:#6a7070;cursor:pointer;display:block;margin:.5em 1em;padding:.5em 0;text-decoration:none;background:none;border:0;border-bottom:3px solid transparent}.tab-button.active{color:#252525}.tab-slider{height:3px;background-color:#19a6a4;position:absolute;padding:0;margin:.5em 1em;bottom:-8px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.pe-tab-panels{padding:1em}.hidden{display:none}.pe-label{font-size:1rem;line-height:1.28571rem}
    </style>
    <slot name="tabs"></slot>
    <div class="tab-slider"></div>
    <slot name="panels"></slot>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-tabs');


  /**
   * Get position and size data of an element.
   * @param {HTMLEkement} el An element whose coordinates we want to get.
   */
  function getPosition(el) {
    return el.getBoundingClientRect();
  }

  class Tabs extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      this.shadowRoot.appendChild(clone);

      this.onTabSlotChange = this.onTabSlotChange.bind(this);
      this.onPanelSlotChange = this.onPanelSlotChange.bind(this);
    }

    connectedCallback() {
      const [ tabSlot, panelSlot ] = this.shadowRoot.querySelectorAll('slot');

      tabSlot.addEventListener('slotchange', this.onTabSlotChange);
      panelSlot.addEventListener('slotchange', this.onPanelSlotChange);
    }

    diconnectedCallback() {}

    onTabSlotChange(e) {
      this.tabList = e.target.assignedNodes()[0];
      if (!this.tabList) return;

      // TODO: Decorate tab list in button markup before moving

      Array.prototype.forEach.call(this.tabList.children, function(child, idx) {
        const { textContent } = child;

        child.role = 'none';
        child.innerHTML = `
          <button
            id="tab-${idx}-btn"
            class="pe-label tab-button"
            role="tab"
            tabindex="-1"
            aria-selected="false"
            aria-controls="tab-${idx}" 
            data-tab="${idx}"
          >
          ${textContent}
				  </button>
        `;
      })

      this.tabList.removeAttribute('slot');
      this.shadowRoot.append(this.tabList);

    }

    onPanelSlotChange(e) {
      this.panels = e.target.assignedNodes()[1];
    }
  }
  customElements.define('pearson-tabs', Tabs);
})(window, document);
