(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template'),
    closeIcon = `
                  <svg focusable="false" class="pe-icon--remove-sm-18" aria-hidden="false" title="close coachmark" role="img" >
        <path d="M10.4066,9 L13.7086,5.698 C14.0976,5.31 14.0976,4.68 13.7086,4.291 C13.3196,3.903 12.6906,3.903 12.3016,4.291 L8.9996,7.593 L5.6976,4.291 C5.3096,3.903 4.6796,3.903 4.2916,4.291 C3.9026,4.68 3.9026,5.31 4.2916,5.698 L7.5936,9 L4.2916,12.302 C3.9026,12.69 3.9026,13.32 4.2916,13.709 C4.4856,13.903 4.7406,14 4.9946,14 C5.2496,14 5.5036,13.903 5.6976,13.709 L8.9996,10.407 L12.3016,13.709 C12.4966,13.903 12.7506,14 13.0056,14 C13.2596,14 13.5146,13.903 13.7086,13.709 C14.0976,13.32 14.0976,12.69 13.7086,12.302 L10.4066,9 Z"/>
       </svg>
    `

  //Styles must be copied from the css file
  // and pasted between the style tags below

  // Other markup should be written after the closing tag.

  template.innerHTML = ` 
    <style>
.hidden{display:none!important}.coachmark-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;width:280px}.coachmark{position:relative;background-color:#daf0ed;border-radius:2px;width:280px;-webkit-box-shadow:0 3px 7px 0 rgba(0,0,0,.25);box-shadow:0 3px 7px 0 rgba(0,0,0,.25);font-family:Open Sans,Calibri,Tahoma,sans-serif}.coachmark.informational .content{background-color:#ffed9a}.coachmark.generic .content{background-color:#fff}.coachmark.generic .coach-link{color:#047a9c}.coachmark.bottom-center:after{border-bottom:8px solid #daf0ed;border-left:8px solid transparent;border-right:8px solid transparent;bottom:-8px;content:"";-webkit-filter:drop-shadow(0 2px 5px #000);filter:drop-shadow(0 2px 5px #000);height:0;left:-webkit-calc(50% - 8px);left:calc(50% - 8px);position:absolute;-webkit-transform:rotate(180deg);transform:rotate(180deg);width:0;z-index:1}.coachmark.top-right:after{border-bottom:8px solid #daf0ed;border-left:8px solid transparent;border-right:8px solid transparent;content:"";height:0;position:absolute;right:32px;top:-8px;width:0;z-index:-1}.coachmark.bottom-left:after{border-bottom:8px solid #daf0ed;border-left:8px solid transparent;border-right:8px solid transparent;bottom:-8px;content:"";-webkit-filter:drop-shadow(0 2px 5px #000);filter:drop-shadow(0 2px 5px #000);height:0;left:32px;position:absolute;-webkit-transform:rotate(180deg);transform:rotate(180deg);width:0;z-index:1}.coachmark .title-container .pe-label{font-size:14px;margin:0;font-weight:600}.coachmark .content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#daf0ed;border-radius:2px;color:#252525;padding:20px 24px;position:relative;z-index:2;font-size:14px}.coachmark .content p{margin-top:0;line-height:1.5}.coachmark .content .title-container{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:.25em}.coachmark .coach-link,.coachmark .content .title-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.coachmark .coach-link{color:#252525;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-top:1.75em;font-size:14px}.coachmark .coach-link:hover{text-decoration:none}.coachmark .coach-link:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.coachmark button{background:none;border:none;text-decoration:underline;cursor:pointer}.coachmark button.dismiss:not(.coach-link){right:-18px;position:relative;top:-14px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.coachmark button.dismiss:not(.coach-link):focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.coachmark button.dismiss:not(.coach-link) svg{width:18px;height:18px}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}.link-anchor{position:relative;width:0;font-size:.8em;opacity:0;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.anchor-wrapper{border:none}.anchor-wrapper:hover .link-anchor{opacity:1}section h1[id]:focus,section h2[id]:focus,section h3[id]:focus,section h4[id]:focus,section h5[id]:focus{outline:0}p.thin{font-weight:100;margin:0;line-height:1.2em}p.bold{font-weight:900;margin:-5px 0 0}.rel{width:30%;margin:0 auto;position:relative;text-align:center;padding:20px;border:dotted #fff}.popper,.tooltip{position:absolute;color:#000}.style5 .tooltip{background:#1e252b;color:#fff;max-width:200px;width:auto;font-size:.8rem;padding:.5em 1em}.popper .popper__arrow,.tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;border-color:#daf0ed}.popper .popper__arrow.informational{border-color:#ffed9a}.popper .popper__arrow.generic{border-color:#fff}.style5 .tooltip .tooltip-arrow{border-color:#1e252b}.popper[x-placement^=top],.tooltip[x-placement^=top]{margin-bottom:5px}.popper[x-placement^=top] .popper__arrow,.tooltip[x-placement^=top] .tooltip-arrow{border-width:13px 13px 0;border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent;bottom:-13px;left:-webkit-calc(50% - 5px);left:calc(50% - 5px);margin-top:0;margin-bottom:0;-webkit-filter:drop-shadow(0 -1px 5px #222);filter:drop-shadow(0 -1px 5px #222)}.popper[x-placement^=bottom],.tooltip[x-placement^=bottom]{margin-top:5px}.popper[x-placement^=bottom] .popper__arrow,.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 13px 13px;border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;top:-13px;-webkit-filter:drop-shadow(-1px -1px 1px #ddd);filter:drop-shadow(-1px -1px 1px #ddd);left:-webkit-calc(50% - 5px);left:calc(50% - 5px);margin-top:0;margin-bottom:0}.popper[x-placement^=right],.tooltip[x-placement^=right]{margin-left:5px}.popper[x-placement^=right] .popper__arrow,.tooltip[x-placement^=right] .tooltip-arrow{border-width:13px 13px 13px 0;border-left-color:transparent;border-top-color:transparent;border-bottom-color:transparent;left:-13px;top:-webkit-calc(50% - 5px);top:calc(50% - 5px);margin-left:0;margin-right:0;-webkit-filter:drop-shadow(-1px -1px 1px #ddd);filter:drop-shadow(-1px -1px 1px #ddd)}.popper[x-placement^=left],.tooltip[x-placement^=left]{margin-right:5px}.popper[x-placement^=left] .popper__arrow,.tooltip[x-placement^=left] .tooltip-arrow{border-width:13px 0 13px 13px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;right:-13px;top:-webkit-calc(50% - 5px);top:calc(50% - 5px);margin-left:0;margin-right:0;-webkit-filter:drop-shadow(1px 2px 0 #ddd);filter:drop-shadow(1px 2px 0 #ddd)}.no-arrow .popper__arrow{display:none!important}
</style>
    <div role="dialog" aria-haspopup="dialog" aria-labelledby="coachmark-title" aria-describedby="coachmark-body" class="coachmark-container popper animated animateIn">
      <div class="coachmark" aria-haspopup="dialog">
        <div class="content">
          <div class="title-container">
            <h3 id="coachmark-title" class="pe-label pe-label--bold"></h3>
            <button id="close" class="dismiss pe-icon--btn" aria-label="Close coachmark">
                ${closeIcon}
            </button>
          </div>
          <p id="coachmark-body" class="pe-label"></p>
           <button id="gotIt" class="coach-link dismiss hidden" href="#">Got it</button>
        </div> 
      </div>
      <div class="popper__arrow hidden" x-arrow></div>
    </div>
    </div>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-example');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */
  class Coachmark extends HTMLElement {
    static get observedAttributes() {
      return ['position', 'trigger', 'reference', 'title', 'content', 'type', 'arrow', 'gotit', 'gotittext', 'dismiss']
    }


    get dismiss() {
      return this.hasAttribute('dismiss')
    }
    get position() {
      return this.getAttribute('position');
    }
    get title() {
      return this.getAttribute('title');
    }
    get content() {
      return this.getAttribute('content')
    }
    get triggerId() {
      return this.getAttribute('trigger');
    }
    get referenceId() {
      return this.getAttribute('reference');
    }
    get type () {
      return this.getAttribute('type');
    }
    get arrow() {
      return this.hasAttribute('arrow')
    }
    get gotIt() {
      return this.getAttribute('gotit')
    }
    set ariaPopup (id) {
      const button = document.querySelector(id);
      button.setAttribute('aria-haspopup', 'dialog');
    }
    set gotItState (bool) {
      if (bool) {
        this.shadowRoot.querySelector('.coach-link').classList.remove('hidden')
        if (bool.length > 1) {
          this.shadowRoot.querySelector('.coach-link').innerHTML = bool
        } else {
          this.shadowRoot.querySelector('.coach-link').innerHTML = "Got It"
        }
      } else {
        this.shadowRoot.querySelector('.coach-link').classList.add('hidden')
      }
    }
    set arrowState(bool) {
      if (bool) {
        this.shadowRoot.querySelector('.popper__arrow').classList.remove('hidden')
      } else {
        this.shadowRoot.querySelector('.popper__arrow').classList.add('hidden')
      }
    }

    set typeState(str) {
      if (str === 'informational') {
        this.shadowRoot.querySelector('.coachmark').classList.add('informational')
        this.shadowRoot.querySelector('.popper__arrow').classList.add('informational')
      } else {
        this.shadowRoot.querySelector('.coachmark').classList.remove('informational')
        this.shadowRoot.querySelector('.popper__arrow').classList.remove('informational')
      }

      if (str === 'generic') {
        this.shadowRoot.querySelector('.coachmark').classList.add('generic')
        this.shadowRoot.querySelector('.popper__arrow').classList.add('generic')
      } else {
        this.shadowRoot.querySelector('.coachmark').classList.remove('generic')
        this.shadowRoot.querySelector('.popper__arrow').classList.remove('generic')
      }
    }
    set titleState (str) {
      this.shadowRoot.querySelector('#coachmark-title').innerHTML = str
    }
    set contentState (str) {
      this.shadowRoot.querySelector('#coachmark-body').innerHTML = str
    }

    nextCoach() {
      if (this.dismiss) {
        this.destroyCoach();
      } else {
        this.dispatchEvent(
          new Event('proceed', {
            bubbles: false
          })
        );
      }
    }

    destroyCoach() {
      this.remove();
      this.closeBtn.removeEventListener('click', this.destroyCoach);
      this.gotItBtn.removeEventListener('click', this.nextCoach);
      this.removeAttribute('dismiss');
      this.removeAttribute('arrow');
      this.removeAttribute('gotit');
      this.dispatchEvent(
        new Event('dismiss', {
          bubbles: false
        })
      );
    }

    createPopper () {
      const reference = document.querySelector(this.referenceId),
        coachMark = this.shadowRoot.querySelector('.coachmark-container'),
        popperInstance = new Popper(reference, coachMark, {
          placement: this.position,
          modifiers: {
            arrow: { enabled: true },
          }
        });
      this.closeBtn.focus();
      this.titleState = this.title;
      this.contentState = this.content;
      return popperInstance
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const clone = template.content.cloneNode(true);

      this.closeBtn = clone.querySelector('.dismiss');
      this.gotItBtn = clone.querySelector('.coach-link');

      this.shadowRoot.appendChild(clone);

      this.createPopper = this.createPopper.bind(this);
      this.nextCoach = this.nextCoach.bind(this);
      this.destroyCoach = this.destroyCoach.bind(this);
    }

    connectedCallback() {
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


    disconnectedCallback() {
      const trigger = document.querySelector(this.triggerId);
      trigger.focus();
    }
  }
  customElements.define('pearson-coachmark', Coachmark);
})(window, document);
