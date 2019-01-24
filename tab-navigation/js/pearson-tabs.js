(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below

  // Other markup should be written after the closing tag.

  template.innerHTML = ` 
    <style>
    .pe-tabbed-navigation{position:relative;height:41px}.pe-tabbed-navigation.light{background:#f5f5f5;border-bottom:1px solid #e9e9e9}.pe-tabbed-navigation.dark{background:#005a70;border-bottom:1px solid #005a70}.pe-tabbed-navigation .tab-action{background:none;border:0;border-bottom:3px solid transparent}.pe-tabbed-navigation ul.tab-list{padding:0;margin:0}.pe-tabbed-navigation ul.tab-list>li{list-style-type:none;display:inline-block}.pe-tabbed-navigation li.tab-item.active .tab-action{border-bottom:3px solid transparent;color:#252525}.pe-tabbed-navigation li.tab-item:hover:not(.active) .tab-action,.pe-tabbed-navigation li.tab-item:hover:not(li) .tab-action{border-bottom:3px solid #c7c7c7;color:#252525}.pe-tabbed-navigation .tab-action{padding:.5em 0;margin:.5em 1em;text-decoration:none;cursor:pointer;display:block;color:#6a7070}.pe-tabbed-navigation div{padding:.5em 0;margin:.5em 1em}.pe-tabbed-navigation div button{color:#6a7070}.pe-tabbed-navigation.dark{background-color:#005a70}.pe-tabbed-navigation.dark .tab-action{color:#d9d9d9}.pe-tabbed-navigation.dark li.tab-item.active .tab-action{color:#fff}.pe-tabbed-navigation.dark li.tab-item:hover:not(.active) .tab-action{border-bottom:3px solid #d9d9d9;color:#fff}.pe-tabbed-navigation.dark div button{color:#d9d9d9}.pe-tabbed-navigation .tab-slider{height:3px;background-color:#19a6a4;position:absolute;padding:0;margin:.5em 1em;bottom:-8px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.pe-tab-panels{padding:1em}.hidden{display:none}
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

      /** If we need references to the children of the component,
       * we can create them here. If they are created elsewhere,
       * they will not be available our lifecycle methods.
       */

      this.heading = clone.querySelector('#title');
      this.button = clone.querySelector('#button');

      /** After all this, we can append our clone to the shadowRoot */
      this.shadowRoot.appendChild(clone);

      /** We should also bind any event listeners to `this` so their
       * references do not get lost.
       */
      this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback() {
      /** Any changes to what the component renders should be done here. */

      // Get the attributes set by the consumer
      const titleText = this.getAttribute('title');
      const buttonText = this.getAttribute('buttonText');

      this.heading.textContent = titleText;
      this.button.textContent = buttonText;

      /** Event listeners should also be bound here. */
      this.button.addEventListener('click', this.handleClick);
    }

    diconnectedCallback() {
      this.button.removeEventListener('click', this.handleClick);
    }

    handleClick() {
      this.shadowRoot.appendChild(doc.createTextNode('Shadow button clicked!'));
    }
  }
  customElements.define('pearson-tabs', Tabs);
})(window, document);
