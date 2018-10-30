"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressRing = function (_HTMLElement) {
  _inherits(ProgressRing, _HTMLElement);

  function ProgressRing() {
    _classCallCheck(this, ProgressRing);

    var _this = _possibleConstructorReturn(this, (ProgressRing.__proto__ || Object.getPrototypeOf(ProgressRing)).call(this));

    var stroke = _this.getAttribute("stroke");
    var radius = _this.getAttribute("radius");
    var normalizedRadius = 25 - 3 * 2;
    _this._circumference = normalizedRadius * 2 * Math.PI;

    _this._root = _this.attachShadow({ mode: "open" });
    _this._root.innerHTML = "\n      <svg\n        height=\"50\"\n        width=\"50\"\n        aria-hidden=\"true\"\n        focusable=\"false\"\n       >\n         <circle\n           stroke=\"#047a9c\"\n           stroke-dasharray=\"" + _this._circumference + " " + _this._circumference + "\"\n           style=\"stroke-dashoffset:" + _this._circumference + "\"\n           stroke-width=\"3\"\n           fill=\"transparent\"\n           r=\"" + normalizedRadius + "\"\n           cx=\"25\"\n           cy=\"25\"\n        />\n      </svg>\n\n      <style>\n        circle {\n          transition: stroke-dashoffset 0.35s;\n          transform: rotate(-90deg);\n          transform-origin: 50% 50%;\n        }\n      </style>\n    ";
    return _this;
  }

  _createClass(ProgressRing, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (!this.hasAttribute("role") || this.getAttribute("role") !== "progressbar") {
        this.setAttribute("role", "progressbar");
      }
      if (!this.hasAttribute("aria-valuemin") || this.getAttribute("aria-valuemin") !== 0) {
        this.setAttribute("aria-valuemin", 0);
      }

      if (!this.hasAttribute("aria-valuemax") || this.getAttribute("aria-valuemax") !== 100) {
        this.setAttribute("aria-valuemax", 100);
      }

      if (!this.hasAttribute("aria-valuenow") || this.getAttribute("aria-valuenow") !== this.progress) {
        this.setAttribute("aria-valuenow", this.progress);
      }

      var valueText = this.progress + " percent complete";
      if (!this.hasAttribute("aria-valueText") || this.getAttribute("aria-valueText") !== valueText) {
        this.setAttribute("aria-valueText", valueText);
      }
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (name === "progress") {
        this.setProgress(newValue);
      }
    }
  }, {
    key: "setProgress",
    value: function setProgress(percent) {
      var offset = this._circumference - percent / 100 * this._circumference;
      var circle = this._root.querySelector("circle");
      circle.style.strokeDashoffset = offset;

      this.setAttribute("aria-valuenow", percent);
      this.setAttribute("aria-valuetext", percent + " percent complete");
    }
  }, {
    key: "upgradeProp",
    value: function upgradeProp(prop) {
      if (this.hasOwnProperty(prop)) {
        var value = this[prop];
        delete this[prop];
        this[prop] = value;
      }
    }
  }, {
    key: "progress",
    get: function get() {
      return this.getAttribute("progress");
    },
    set: function set(value) {
      this.setAttribute("progress", value);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["progress", "radius", "stroke"];
    }
  }]);

  return ProgressRing;
}(HTMLElement);

window.customElements.define("progress-ring", ProgressRing);