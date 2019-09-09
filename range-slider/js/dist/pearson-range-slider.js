var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template'),
      numberTemplate = doc.createElement('template'),
      inputTemplate = doc.createElement('template');

  inputTemplate.innerHTML = '\n\t\t\t<div class="groups">\n\t\t\t\t<div class="input-group">\n\t\t\t\t\t<div class="gr-form-element">\n\t\t\t\t\t\t<label id="rangeInputOne" class="gr-label" for="inputId"></label>\n\t\t\t\t\t\t<input aria-describedby="rangeInputOne rangeInputTwo rangeInputThree" class="gr-input" id="inputId" type="text" value=""  />\n\t\t\t\t\t</div>\n\t\t\t\t\t<span id="rangeInputTwo" class="gr-meta"></span>\n\t\t\t\t</div>\n\t\t\t\t<span id="rangeInputThree" class="gr-meta"></span>\n\t\t\t</div>\n  ';

  template.innerHTML = ' \n    <style>\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host [hidden],:host template{display:none}:host html{font-size:14px}:host *,:host html{-webkit-box-sizing:border-box;box-sizing:border-box}:host body{font-family:Open Sans,Arial,Helvetica,sans-serif}:host body,:host p{font-size:14px;line-height:1.5;font-weight:400}:host strong{font-weight:600}:host a{font-size:14px;color:#047a9c}:host a:hover{color:#03536a;text-decoration:none}:host a:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host button{cursor:pointer}:host li,:host ul{font-size:14px}:host svg{fill:#252525}:host svg[focusable=false]:focus{outline:none}:host input,:host textarea{font:inherit;letter-spacing:inherit;word-spacing:inherit}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}:host .fadeIn,:host .slideInDown{opacity:1!important;visibility:visible!important}:host .fadeOut,:host .slideOutDown{opacity:0;visibility:hidden}:host .slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}:host .slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}:host .fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}:host .fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}:host .animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}:host .animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){:host .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}:host html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}:host .no-border{border:0}:host .icon-18{width:18px;height:18px}:host .icon-24{width:24px;height:24px}:host .hidden{display:none!important}:host .gr-h1{font-size:24px;line-height:28px}:host .gr-h1,:host .gr-h2{font-weight:400;margin-top:0}:host .gr-h2{font-size:20px;line-height:26px}:host .gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}:host .gr-label{font-size:12px;line-height:16px;color:#6a7070;display:block;margin-bottom:4px}:host .gr-meta{font-size:12px;line-height:12px;color:#6a7070}:host .gr-semi-bold{font-weight:600}:host .gr-font-large{font-size:16px;line-height:24px}:host .gr-font-normal{font-size:14px;line-height:20px}:host .gr-input{display:block;margin:4px 0;padding:0 12px;height:36px;color:#252525;border:1px solid #c7c7c7;background:#fff;border-radius:4px;font-size:14px;width:100%;max-width:100%}:host .gr-input:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .gr-input:disabled{color:#c7c7c7;background-color:#e9e9e9}:host .gr-input:-moz-read-only{border:0}:host .gr-input:read-only{border:0}:host .range-container{grid-column:span 12;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}:host .range-container,:host .range-container .slider{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}:host .range-container .slider{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-right:24px}:host .range-container .slider label{width:100%;text-align:center;margin-bottom:0}:host .range-container .slider .range-color{height:8px;background:#047a9c;margin-top:-25px;border-radius:100px;left:0;z-index:0}@-moz-document url-prefix(){:host .range-container .slider .range-color{height:0}}@media (-ms-high-contrast:none){:host .range-container .slider .range-color{height:0}}:host .range-container .slider .tick-marks{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-top:12px;padding-left:8px}@media (-ms-high-contrast:none){:host .range-container .slider .tick-marks{margin:0}}:host .range-container .slider .slider-tickmarks .dash{border-right:1px solid #c7c7c7}:host .range-container .slider input[type=range]{-webkit-appearance:none;margin:18px 0;width:100%;height:8px}@media (-ms-high-contrast:none){:host .range-container .slider input[type=range]{height:auto;margin:0}}:host .range-container .slider input[type=range]:focus{outline:none}:host .range-container .slider input[type=range]::-webkit-slider-runnable-track{width:100%;height:8.4px;cursor:pointer;animate:.2s;background:#e9e9e9;border-radius:100px;border:0}:host .range-container .slider input[type=range]::-webkit-slider-thumb{height:20px;width:20px;border-radius:50%;-webkit-box-shadow:0 2px 4px 0 hsla(0,0%,54.9%,.3),0 -2px 4px 0 hsla(0,0%,54.9%,.2);box-shadow:0 2px 4px 0 hsla(0,0%,54.9%,.3),0 -2px 4px 0 hsla(0,0%,54.9%,.2);background-color:#fff;cursor:pointer;-webkit-appearance:none;margin-top:-7px;z-index:1000;position:relative}:host .range-container .slider input[type=range]:focus::-webkit-slider-thumb{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .range-container .slider input[type=range]::-moz-range-track{width:100%;height:8.4px;cursor:pointer;background:#e9e9e9;border-radius:100px;border:0}:host .range-container .slider input[type=range]::-moz-range-thumb{height:20px;width:20px;border-radius:50%;box-shadow:0 2px 4px 0 hsla(0,0%,54.9%,.3),0 -2px 4px 0 hsla(0,0%,54.9%,.2);background-color:#fff;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;margin-top:-7px;z-index:10000000;position:relative}:host .range-container .slider input[type=range]:focus::-moz-range-thumb{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .range-container .slider input[type=range]::-moz-range-progress{background-color:#047a9c;height:8px;border-radius:100px}:host .range-container .slider input[type=range]::-ms-track{width:100%;height:8.4px;cursor:pointer;background:transparent;border-color:transparent;color:transparent}:host .range-container .slider input[type=range]::-ms-fill-lower{background:#047a9c;border-radius:2.6px}:host .range-container .slider input[type=range]::-ms-fill-upper{background:#e9e9e9;border-radius:2.6px}:host .range-container .slider input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000,0 0 1px #0d0d0d;border:1px solid #000;height:20px;width:20px;border-radius:3px;background:#fff;cursor:pointer;height:8.4px;margin:0}:host .range-input-container{grid-column:span 12;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}@media (min-width:591px){:host .range-input-container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}:host .range-input-container .range-container{margin-top:24px}@media (min-width:591px){:host .range-input-container .range-container{margin-top:0}}:host .range-input-container .input-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:60px}:host .range-input-container .input-group+.gr-meta{text-align:center;display:block;width:137px}:host .range-input-container .gr-form-element{width:132px;margin-right:4px}:host .range-input-container .gr-form-element+.gr-meta{display:inline-block;margin-top:14px}*{font-family:Open Sans,Arial,Helvetica,sans-serif}.range-container .slider .tick-marks{padding-left:0!important}\n    </style>\n    <div class="range-input-container">\n    \t\t<div class="range-container">\n        <div class="slider">\n          <label id=labelOne class="gr-label" for="sliderId"></label>\n          <input aria-describedby="labelOne labelTwo" type="range" name="slider" id="sliderId" min="0" max="15" step=".25"/>\n          <div class="range-color" style="width:0;"></div>\n          <div class="tick-marks"></div>\n        </div>\n        <span id=labelTwo class="gr-meta"></span>\n      </div>\n    </div>\n\n';

  numberTemplate.innerHTML = '\n  <div class="slider-tickmarks">\n    <span class="gr-meta number"></span>\n  </div>\n  <div class="slider-tickmarks">\n    <span class="gr-meta dash"></span>\n  </div>\n  ';
  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-range-slider');

  function convertRange(node, minValue, maxValue) {
    return (node.value - minValue) / (maxValue - minValue) * (100 - 0) + 0;
  }

  var RangeSlider = function (_HTMLElement) {
    _inherits(RangeSlider, _HTMLElement);

    _createClass(RangeSlider, [{
      key: 'bottomText',
      get: function get() {
        return this.getAttribute('bottomtext');
      }
    }, {
      key: 'hasInput',
      get: function get() {
        return this.hasAttribute('input');
      }
    }, {
      key: 'minValue',
      get: function get() {
        return this.getAttribute('min');
      }
    }, {
      key: 'maxValue',
      get: function get() {
        return this.getAttribute('max');
      }
    }, {
      key: 'topText',
      get: function get() {
        return this.getAttribute('toptext');
      }
    }, {
      key: 'rightText',
      get: function get() {
        return this.getAttribute('righttext');
      }
    }, {
      key: 'stepValue',
      get: function get() {
        return this.getAttribute('step');
      }
    }, {
      key: 'labelText',
      get: function get() {
        return this.getAttribute('label');
      }
    }, {
      key: 'Value',
      set: function set(number) {
        this.setAttribute('value', number);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['min', 'max', 'step', 'toptext', 'righttext', 'value', 'input', 'bottomtext'];
      }
    }]);

    function RangeSlider() {
      _classCallCheck(this, RangeSlider);

      var _this = _possibleConstructorReturn(this, (RangeSlider.__proto__ || Object.getPrototypeOf(RangeSlider)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.input = clone.querySelector('input');
      _this.topLabel = clone.querySelector('label');
      _this.rightLabel = clone.querySelector('span');
      _this.colorBar = clone.querySelector('.range-color');
      _this.mainTarget = clone.querySelector('.range-input-container');
      _this.referenceNode = clone.querySelector('.range-container');
      _this.target = clone.querySelector('.tick-marks');

      _this.shadowRoot.appendChild(clone);

      _this.buildMarkup = _this.buildMarkup.bind(_this);
      return _this;
    }

    _createClass(RangeSlider, [{
      key: 'buildMarkup',
      value: function buildMarkup(number) {
        var numberClone = numberTemplate.content.cloneNode(true),
            numberNode = numberClone.querySelector('.number'),
            dashNode = numberClone.querySelector('.dash');

        numberNode.innerHTML = number;

        if (number === parseFloat(this.maxValue, 10)) {
          dashNode.parentNode.remove();
        }
        return numberClone;
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        this.input.setAttribute('min', this.minValue);
        this.input.setAttribute('max', this.maxValue);
        this.input.setAttribute('step', this.stepValue);
        this.input.value = this.minValue;
        this.topLabel.innerHTML = this.topText;
        this.rightLabel.innerHTML = this.rightText;
        var numberArr = [];

        // build input
        if (this.hasInput) {
          var inputClone = inputTemplate.content.cloneNode(true),
              topLabel = inputClone.querySelector('.gr-form-element label'),
              rightLabel = inputClone.querySelector('.gr-form-element + span'),
              bottomLabel = inputClone.querySelector('.input-group + span'),
              input = inputClone.querySelector('input');

          topLabel.innerHTML = this.topText;
          rightLabel.innerHTML = this.rightText;
          bottomLabel.innerHTML = this.bottomText;
          input.value = this.minValue;
          this.mainTarget.insertBefore(inputClone, this.referenceNode);

          input.addEventListener('change', function (event) {
            _this2.input.value = input.value;
            _this2.Value = input.value;
            _this2.dispatchEvent(new CustomEvent('change', {
              bubbles: true,
              detail: {
                value: input.value
              }
            }));
          });

          this.input.addEventListener('input', function () {
            _this2.Value = parseFloat(_this2.input.value, 10).toFixed(2);
            input.value = parseFloat(_this2.input.value, 10).toFixed(2);
          });
        }

        // build slider
        var minNumber = parseFloat(this.minValue, 10),
            maxNumber = parseFloat(this.maxValue, 10),
            increment = (maxNumber - minNumber) / 4;

        numberArr.push(minNumber);

        while (minNumber + increment <= maxNumber - increment) {
          minNumber = minNumber + increment;
          numberArr.push(minNumber);
        }

        numberArr.push(maxNumber);

        numberArr.forEach(function (number) {
          _this2.target.appendChild(_this2.buildMarkup(number));
        });

        if (!this.hasInput) {
          this.input.addEventListener('input', function () {
            _this2.input.value = parseFloat(_this2.input.value, 10).toFixed(2);
            _this2.Value = _this2.input.value;
            _this2.dispatchEvent(new CustomEvent('change', {
              bubbles: true,
              detail: {
                value: _this2.input.value
              }
            }));
          });
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value') {
          this.colorBar.style.width = convertRange(this.input, this.minValue, this.maxValue) + '%';
        }
      }
    }]);

    return RangeSlider;
  }(HTMLElement);

  customElements.define('pearson-range-slider', RangeSlider);
})(window, document);