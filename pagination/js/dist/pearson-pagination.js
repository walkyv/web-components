var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      numberTemplate = doc.createElement('template'),
      ellipsisTemplate = doc.createElement('template'),
      previousIcon = '\n      <svg focusable="false" class="icon-18" aria-hidden="true">\n\t      <path d="M5.2383866,9.62193909 C4.90819314,9.25409223 4.92101724,8.69027111 5.27685892,8.33764681 L10.386348,3.27435567 C10.7554932,2.90854811 11.3539959,2.90854811 11.7231411,3.27435567 C12.0922863,3.64016324 12.0922863,4.23325448 11.7231411,4.59906205 L7.28204859,9 L11.7231411,13.400938 C12.0922863,13.7667455 12.0922863,14.3598368 11.7231411,14.7256443 C11.3539959,15.0914519 10.7554932,15.0914519 10.386348,14.7256443 L5.27685892,9.66235319 C5.26334967,9.64896608 5.25054567,9.63548354 5.23843148,9.62191255 L5.2383866,9.62193909 Z"  fill-rule="nonzero"></path>\n      </svg>\n  ',
      nextIcon = '\n      <svg focusable="false" class="icon-18" aria-hidden="true">\n           <path d="M12.7616134,9.62193909 L12.7615685,9.62191255 C12.7494543,9.63548354 12.7366503,9.64896608 12.7231411,9.66235319 L7.61365203,14.7256443 C7.24450681,15.0914519 6.64600414,15.0914519 6.27685892,14.7256443 C5.90771369,14.3598368 5.90771369,13.7667455 6.27685892,13.400938 L10.7179514,9 L6.27685892,4.59906205 C5.90771369,4.23325448 5.90771369,3.64016324 6.27685892,3.27435567 C6.64600414,2.90854811 7.24450681,2.90854811 7.61365203,3.27435567 L12.7231411,8.33764681 C13.0789828,8.69027111 13.0918069,9.25409223 12.7616134,9.62193909 Z"  fill-rule="nonzero"></path>\n      </svg>\n  ';
  template.innerHTML = ' \n      <style>\n      @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:16px}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}body{font-size:16px;font-family:Open Sans,Arial,Helvetica,sans-serif}body,p{line-height:1.5;font-weight:400}p{font-size:.875em}strong{font-weight:600}a{color:#047a9c}a:hover{color:#03536a;text-decoration:none}a:focus{outline:2px solid #0b73da;outline-offset:4px}button{cursor:pointer}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.fadeIn,.slideInDown{opacity:1!important;visibility:visible!important}.fadeOut,.slideOutDown{opacity:0;visibility:hidden}.slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}.slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}.fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}.fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){.animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}.no-border{border:0}.icon-18{width:18px;height:18px}.icon-24{width:24px;height:24px}.hidden{display:none}.gr-h1{font-size:1.5em;line-height:1.75em}.gr-h1,.gr-h2{font-weight:400;margin-top:0}.gr-h2{font-size:1.25em;line-height:1.625em}.gr-h3{font-size:1.125em;line-height:1.5em;font-weight:400;margin-top:0}.gr-label{display:block;margin-bottom:4px}.gr-label,.gr-meta{font-size:.75em;line-height:1em;color:#6a7070}.gr-semi-bold{font-weight:600}.gr-font-large{font-size:1em;line-height:1.5em}.gr-font-normal{font-size:.875em;line-height:1.5}.gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:1em;cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:.875em}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:1em}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.gr-pagination{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.gr-pagination button{margin:0;min-width:44px;border:0!important;padding:0!important}.gr-pagination button span{height:28px;width:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #c7c7c7;border-radius:50%}.gr-pagination button:focus:after{min-height:36px;min-width:36px;padding:0;top:4px;left:8px}.gr-pagination button:hover span{background-color:#e9e9e9}.gr-pagination button:disabled{background:none!important}.gr-pagination button:disabled span{border:1px solid #d9d9d9}.gr-pagination button:disabled span svg{fill:#d9d9d9}.gr-pagination button:disabled:hover span{background:#fff}.gr-pagination a{min-width:44px;color:#6a7070;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:14px}.gr-pagination a:hover{text-decoration:underline;color:#6a7070;font-weight:700}.gr-pagination a:focus{outline-offset:0}.gr-pagination a[aria-current]{text-decoration:underline;color:#252525;font-weight:700}.gr-pagination .compact-text{font-size:.875em;margin:0 1em}.gr-pagination a svg{width:18px;height:18px;display:inline-block;vertical-align:top;fill:currentColor}\n      </style>\n          <nav data-id="pagination" aria-label="pagination" class="gr-pagination" data-type="standard" data-pages-total="10" data-max-buttons="5" data-active-page="1" data-label="page" data-label-plural="pages">\n          <button id="previous" class="gr-btn icon-btn-18" aria-label="Previous page">\n            <span>\n              ' + previousIcon + '\n            </span>\n          </button>\n          <div id="pages" style="display:flex;">\n\n          </div>\n          <button id="next" class="gr-btn icon-btn-18" aria-label="Next page">\n            <span>\n              ' + nextIcon + '\n            </span>\n          </button>\n        </nav>\n  ', numberTemplate.innerHTML = '\n      <a href="#"><span></span></a>\n    ', ellipsisTemplate.innerHTML = '\n      <a href="#" class="ellipsis" disabled="" aria-label="additional pages">...</a>\n    ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-pagination');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */
  function range(start, end) {
    var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var len = Math.floor((end - start) / step) + 1;
    return Array(len).fill().map(function (_, idx) {
      return start + idx * step;
    });
  }

  var Pagination = function (_HTMLElement) {
    _inherits(Pagination, _HTMLElement);

    _createClass(Pagination, [{
      key: 'changePage',
      value: function changePage(type) {
        var currentPage = this.shadowRoot.querySelector('#pages a[aria-current]'),
            nextPage = currentPage.nextElementSibling,
            previousPage = currentPage.previousElementSibling;
        if (type === 'next') {
          if (currentPage.getAttribute('data-page') < this.lastPage) {
            this.currentPage = nextPage.getAttribute('data-page');
            currentPage.removeAttribute('aria-current');
          }
        } else {
          if (currentPage.getAttribute('data-page') > this.firstPage) {
            this.currentPage = previousPage.getAttribute('data-page');
            currentPage.removeAttribute('aria-current');
          }
        }
        this.dispatchEvent(new Event(type + "Page", {
          bubbles: true
        }));
      }
    }, {
      key: 'firstPage',
      get: function get() {
        return parseInt(this.getAttribute('firstpage'));
      }
    }, {
      key: 'lastPage',
      get: function get() {
        return parseInt(this.getAttribute('lastpage'));
      }
    }, {
      key: 'currentPage',
      get: function get() {
        return parseInt(this.getAttribute('currentpage'));
      },
      set: function set(value) {
        this.setAttribute('currentpage', value);
      }
    }, {
      key: 'ellipsisAt',
      get: function get() {
        return parseInt(this.getAttribute('ellipsisat'));
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['firstpage', 'lastpage', 'currentpage', 'ellipsisat'];
      }
    }]);

    function Pagination() {
      _classCallCheck(this, Pagination);

      var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true);
      _this.pageTarget = clone.querySelector('#pages');
      _this.shadowRoot.appendChild(clone);
      _this.changePage = _this.changePage.bind(_this);
      return _this;
    }

    _createClass(Pagination, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        this.pageRange = range(this.firstPage, this.lastPage, 1);

        this.pageRange.forEach(function (number, index) {
          var total = index + 1,
              placeLastNumber = _this2.ellipsisAt + 2,
              placeEllipsis = _this2.ellipsisAt + 1;

          var numberTemplateClone = numberTemplate.content.cloneNode(true),
              numberTemplateContent = numberTemplateClone.querySelector('span');

          numberTemplateContent.parentNode.setAttribute('data-page', number);
          numberTemplateContent.innerHTML = number;

          // if lastpage is greater than divider
          if (_this2.lastPage > _this2.ellipsisAt) {
            // render 1- through divide
            if (total <= placeLastNumber) {
              if (number === _this2.currentPage) {
                numberTemplateContent.parentNode.setAttribute('aria-current', 'page');
              }
              // show ellipsis
              if (total === placeEllipsis) {
                numberTemplateContent.parentNode.setAttribute('data-page', number);
                numberTemplateContent.parentNode.setAttribute('data-next-ellipsis', true);
                numberTemplateContent.parentNode.setAttribute('aria-label', 'additional pages');
                numberTemplateContent.innerHTML = '...';
              }
              // show last page number
              if (total === placeLastNumber) {
                numberTemplateContent.parentNode.setAttribute('data-page', _this2.lastPage);
                numberTemplateContent.innerHTML = _this2.lastPage;
              }
              _this2.pageTarget.appendChild(numberTemplateClone);
            }
          } else {
            if (number === _this2.currentPage) {
              numberTemplateContent.parentNode.setAttribute('aria-current', 'page');
            }
            _this2.pageTarget.appendChild(numberTemplateClone);
          }
          // else render all pages no divide
        });

        var pageBtns = this.shadowRoot.querySelectorAll('nav button, #pages > a');

        pageBtns.forEach(function (button) {
          button.addEventListener('click', function (event) {
            if (button.tagName === 'BUTTON') {
              _this2.changePage(button.id);
            } else if (button.tagName === 'A') {
              _this2.currentPage = event.currentTarget.getAttribute('data-page');
              _this2.dispatchEvent(new Event("newPage", {
                bubbles: true
              }));
            }
          });
        });
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var a = 0;
        if (oldValue !== newValue) {
          if (name === 'currentpage') {
            var newPage = this.shadowRoot.querySelector('[data-page="' + newValue + '"]'),
                oldPage = this.shadowRoot.querySelector('[data-page="' + oldValue + '"]'),
                allPages = this.shadowRoot.querySelectorAll('#pages > a').length - 4;

            if (oldValue !== null && oldPage !== null) {
              oldPage.removeAttribute('aria-current');
              oldPage.removeAttribute('aria-label');

              if (!newPage.hasAttribute('data-next-ellipsis')) {
                newPage.setAttribute('aria-current', 'page');
                newPage.setAttribute('aria-label', 'page ' + newValue);
              }
            }

            if (newPage !== null) {
              var previousEllipsis = this.shadowRoot.querySelector('#pages > a:nth-child(2)');
              if (newPage.getAttribute('data-next-ellipsis') === 'true') {
                previousEllipsis.setAttribute('data-ellipsis', true);
                previousEllipsis.setAttribute('aria-label', 'additional pages');
                previousEllipsis.innerHTML = '...';
                // remove items between ellipsis
                while (a < allPages) {
                  var nextNode = previousEllipsis.nextElementSibling;
                  nextNode.remove();
                  a++;
                }

                // generate new numbers
                // find the starting number
                var nextEllipsis = this.shadowRoot.querySelector('[data-next-ellipsis="true"]'),
                    nextEllipsisNumber = parseInt(nextEllipsis.getAttribute('data-page'), 10) + 1;

                var startNumber = nextEllipsisNumber - allPages;

                // render the numbers in between starting with the start number
                while (startNumber < nextEllipsisNumber) {
                  var numberTemplateClone = numberTemplate.content.cloneNode(true),
                      numberTemplateContent = numberTemplateClone.querySelector('span');

                  numberTemplateContent.parentNode.setAttribute('data-page', startNumber);
                  numberTemplateContent.innerHTML = startNumber;

                  // set current page to the number before the ellipsis
                  if (startNumber === nextEllipsisNumber - 1) {
                    nextEllipsis.setAttribute('data-page', nextEllipsisNumber);
                    nextEllipsis.removeAttribute('aria-current');
                    numberTemplateContent.parentNode.setAttribute('aria-current', 'page');
                    numberTemplateContent.parentNode.setAttribute('aria-label', 'page ' + newValue);
                  }

                  this.pageTarget.insertBefore(numberTemplateClone, nextEllipsis);

                  if (startNumber === this.lastPage - 2) {
                    nextEllipsis.innerHTML = nextEllipsisNumber;
                    nextEllipsis.removeAttribute('data-next-ellipsis');
                  }

                  startNumber++;
                }
              }
            }
          }
        }
      }
    }]);

    return Pagination;
  }(HTMLElement);

  customElements.define('pearson-pagination', Pagination);
})(window, document);