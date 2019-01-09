(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below

  // Other markup should be written after the closing tag.

  template.innerHTML = ` 
    <style>
    @-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes fadein{0%{opacity:0}to{opacity:1}}@keyframes fadein{0%{opacity:0}to{opacity:1}}.pe-loadingSpinner{width:25px;height:25px;position:relative}.pe-loadingSpinner-container1>div,.pe-loadingSpinner-container2>div{width:4px;height:4px;background-color:#19a6a4;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.6s ease-in-out infinite;animation:bouncedelay 1.6s ease-in-out infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.pe-loadingSpinner .pe-loadingSpinner-container{position:absolute;width:100%;height:100%}.pe-loadingSpinner-container2{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.pe-loadingSpinner-container2 .circle1{-webkit-animation-delay:-1.4s;animation-delay:-1.4s}.pe-loadingSpinner-container1 .circle2{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.pe-loadingSpinner-container2 .circle2{-webkit-animation-delay:-1s;animation-delay:-1s}.pe-loadingSpinner-container1 .circle3{-webkit-animation-delay:-.8s;animation-delay:-.8s}.pe-loadingSpinner-container2 .circle3{-webkit-animation-delay:-.6s;animation-delay:-.6s}.pe-loadingSpinner-container1 .circle4{-webkit-animation-delay:-.4s;animation-delay:-.4s}.pe-loadingSpinner-container2 .circle4{-webkit-animation-delay:-.2s;animation-delay:-.2s}.loading-indicator-wrapper{border-radius:5px;margin:auto;width:200px;padding:30px 20px 20px;background-color:#252525;border:1px solid #252525}.loading-indicator{color:#fff;margin:auto;width:50%;background-color:#252525}.loading-text{padding-left:30px;display:block;margin:auto;width:50%;position:relative;top:-20px}#loaded-content main{-webkit-animation:fadein 2s;animation:fadein 2s}
    </style>
    <div class="loading-indicator-wrapper" id="spinner-icon" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Loading Indicator" aria-label="Loading">
			<div class="loading-indicator">
				<div class="pe-loadingSpinner">
					<div class="pe-loadingSpinner-container pe-loadingSpinner-container1">
						<div class="circle1"></div>
						<div class="circle2"></div>
						<div class="circle3"></div>
						<div class="circle4"></div>
					</div>
					<div class="pe-loadingSpinner-container pe-loadingSpinner-container2">
						<div class="circle1"></div>
						<div class="circle2"></div>
						<div class="circle3"></div>
						<div class="circle4"></div>
					</div>
				</div>
				<span class="loading-text" id="loading-text">Loading...</span>
			</div>
		</div>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-loading');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  class Loading extends HTMLElement {
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
  customElements.define('pearson-example', Loading);
})(window, document);
