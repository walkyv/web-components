
class ProgressRing extends HTMLElement {
  constructor() {
    super();
    const stroke = this.getAttribute("stroke");
    const radius = this.getAttribute("radius");
    const normalizedRadius = 25 - 3 * 2;
    this._circumference = normalizedRadius * 2 * Math.PI;

    this._root = this.attachShadow({ mode: "open" });
    this._root.innerHTML = `
      <svg
        height="50"
        width="50"
        aria-hidden="true"
        focusable="false"
       >
         <circle
           stroke="#047a9c"
           stroke-dasharray="${this._circumference} ${this._circumference}"
           style="stroke-dashoffset:${this._circumference}"
           stroke-width="3"
           fill="transparent"
           r="${normalizedRadius}"
           cx="25"
           cy="25"
        />
      </svg>

      <style>
        circle {
          transition: stroke-dashoffset 0.35s;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
        }
      </style>
    `;
  }

  static get observedAttributes() {
    return ["progress", "radius", "stroke"];
  }

  get progress() {
    return this.getAttribute("progress");
  }

  set progress(value) {
    this.setAttribute("progress", value);
  }

  connectedCallback() {
    if (
      !this.hasAttribute("role") ||
      this.getAttribute("role") !== "progressbar"
    ) {
      this.setAttribute("role", "progressbar");
    }
    if (
      !this.hasAttribute("aria-valuemin") ||
      this.getAttribute("aria-valuemin") !== 0
    ) {
      this.setAttribute("aria-valuemin", 0);
    }

    if (
      !this.hasAttribute("aria-valuemax") ||
      this.getAttribute("aria-valuemax") !== 100
    ) {
      this.setAttribute("aria-valuemax", 100);
    }

    if (
      !this.hasAttribute("aria-valuenow") ||
      this.getAttribute("aria-valuenow") !== this.progress
    ) {
      this.setAttribute("aria-valuenow", this.progress);
    }

    const valueText = this.progress + " percent complete";
    if (
      !this.hasAttribute("aria-valueText") ||
      this.getAttribute("aria-valueText") !== valueText
    ) {
      this.setAttribute("aria-valueText", valueText);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "progress") {
      this.setProgress(newValue);
    }
  }

  setProgress(percent) {
    const offset = this._circumference - percent / 100 * this._circumference;
    const circle = this._root.querySelector("circle");
    circle.style.strokeDashoffset = offset;

    this.setAttribute("aria-valuenow", percent);
    this.setAttribute("aria-valuetext", `${percent} percent complete`);
  }
  upgradeProp(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }
}

window.customElements.define("progress-ring", ProgressRing);

