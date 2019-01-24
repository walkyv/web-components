(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below

  // Other markup should be written after the closing tag.

  template.innerHTML = ` 
    <style>
    ::slotted(.tabs){position:relative;height:41px;list-style-type:none;padding:0;margin:0}li{color:red}
    </style>
    <slot name="tabs"></slot>
    <slot name="panels"></slot>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-tabs');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

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
      this.tabList = e.target.assignedNodes()[1];
    }

    onPanelSlotChange(e) {
      this.panels = e.target.assignedNodes()[1];
    }
  }
  customElements.define('pearson-tabs', Tabs);
})(window, document);
