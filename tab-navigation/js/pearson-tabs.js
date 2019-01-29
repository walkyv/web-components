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
    static get observedattributes() {
      return ['activepanel', 'activePanel'];
    }

    get activePanel() {
      return parseInt(this.getAttribute('activePanel'), 10);
    }

    set activePanel(idx) {
      return this.setAttribute('activePanel', idx);
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      this.shadowRoot.appendChild(clone);

      this.decorateTabs = this.decorateTabs.bind(this);

      this.onTabSlotChange = this.onTabSlotChange.bind(this);
      this.onPanelSlotChange = this.onPanelSlotChange.bind(this);
    }

    connectedCallback() {
      const [ tabSlot, panelSlot ] = this.shadowRoot.querySelectorAll('slot');

      if (!this.hasAttribute('activePanel')) {
        this.setAttribute('activePanel', '0');
      }

      tabSlot.addEventListener('slotchange', this.onTabSlotChange);
      panelSlot.addEventListener('slotchange', this.onPanelSlotChange);
    }

    diconnectedCallback() {}

    decorateTabs(child, idx) {
      const { textContent } = child;

      let classList = 'pe-label tab-button';

      if (idx === this.activePanel) {
        classList += ' active';
      }

      child.role = 'none';
      child.innerHTML = `
        <button
          id="tab-${idx}-btn"
          class="${classList}"
          role="tab"
          tabindex="-1"
          aria-selected="false"
          aria-controls="tab-${idx}" 
          data-tab="${idx}"
        >
        ${textContent}
        </button>
      `;
    }

    positionSlider() {
      // TODO: Store all tabs on constructor; store active tab; position slider with this data

    }

    onTabSlotChange(e) {
      this.tabList = e.target.assignedNodes()[0];
      if (!this.tabList) return;

      Array.prototype.forEach.call(this.tabList.children, this.decorateTabs);

      this.tabList.removeAttribute('slot');
      this.shadowRoot.append(this.tabList);

    }

    onPanelSlotChange(e) {
      this.panels = e.target.assignedNodes()[1];
    }
  }
  customElements.define('pearson-tabs', Tabs);
})(window, document);
