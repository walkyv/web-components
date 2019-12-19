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
      compactTemplate = doc.createElement('template'),
      previousIcon = '\n      <svg focusable="false" class="icon-18" aria-hidden="true">\n\t      <path d="M5.2383866,9.62193909 C4.90819314,9.25409223 4.92101724,8.69027111 5.27685892,8.33764681 L10.386348,3.27435567 C10.7554932,2.90854811 11.3539959,2.90854811 11.7231411,3.27435567 C12.0922863,3.64016324 12.0922863,4.23325448 11.7231411,4.59906205 L7.28204859,9 L11.7231411,13.400938 C12.0922863,13.7667455 12.0922863,14.3598368 11.7231411,14.7256443 C11.3539959,15.0914519 10.7554932,15.0914519 10.386348,14.7256443 L5.27685892,9.66235319 C5.26334967,9.64896608 5.25054567,9.63548354 5.23843148,9.62191255 L5.2383866,9.62193909 Z"  fill-rule="nonzero"></path>\n      </svg>\n  ',
      nextIcon = '\n      <svg focusable="false" class="icon-18" aria-hidden="true">\n           <path d="M12.7616134,9.62193909 L12.7615685,9.62191255 C12.7494543,9.63548354 12.7366503,9.64896608 12.7231411,9.66235319 L7.61365203,14.7256443 C7.24450681,15.0914519 6.64600414,15.0914519 6.27685892,14.7256443 C5.90771369,14.3598368 5.90771369,13.7667455 6.27685892,13.400938 L10.7179514,9 L6.27685892,4.59906205 C5.90771369,4.23325448 5.90771369,3.64016324 6.27685892,3.27435567 C6.64600414,2.90854811 7.24450681,2.90854811 7.61365203,3.27435567 L12.7231411,8.33764681 C13.0789828,8.69027111 13.0918069,9.25409223 12.7616134,9.62193909 Z"  fill-rule="nonzero"></path>\n      </svg>\n  ';
  template.innerHTML = ' \n      <style>\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:16px}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}body{font-size:16px;font-family:Open Sans,Arial,Helvetica,sans-serif}body,p{line-height:1.5;font-weight:400}p{font-size:.875em}strong{font-weight:600}a{color:#047a9c}a:hover{color:#03536a;text-decoration:none}a:focus{outline:2px solid #0b73da;outline-offset:4px}button{cursor:pointer}.no-border{border:0}.icon-18{width:18px;height:18px}.icon-24{width:24px;height:24px}.hidden{display:none}.gr-h1{font-size:1.5em;line-height:1.75em}.gr-h1,.gr-h2{font-weight:400;margin-top:0}.gr-h2{font-size:1.25em;line-height:1.625em}.gr-h3{font-size:1.125em;line-height:1.5em;font-weight:400;margin-top:0}.gr-label{display:block;margin-bottom:4px}.gr-label,.gr-meta{font-size:.75em;line-height:1em;color:#6a7070}.gr-semi-bold{font-weight:600}.gr-font-large{font-size:1em;line-height:1.5em}.gr-font-normal{font-size:.875em;line-height:1.5}.gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:1em;cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:.875em}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:1em}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.gr-pagination{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.gr-pagination button{margin:0;min-width:44px;border:0!important;padding:0!important}.gr-pagination button span{height:28px;width:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #c7c7c7;border-radius:50%}.gr-pagination button:focus:after{min-height:36px;min-width:36px;padding:0;top:4px;left:8px}.gr-pagination button:hover span{background-color:#e9e9e9}.gr-pagination button:disabled{background:none!important}.gr-pagination button:disabled span{border:1px solid #d9d9d9}.gr-pagination button:disabled span svg{fill:#d9d9d9}.gr-pagination button:disabled:hover span{background:#fff}.gr-pagination a{min-width:44px;color:#6a7070;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:14px}.gr-pagination a:hover{text-decoration:underline;color:#6a7070;font-weight:700}.gr-pagination a:focus{outline-offset:0}.gr-pagination a[aria-current]{text-decoration:underline;color:#252525;font-weight:700}.gr-pagination .compact-text{font-size:.875em;margin:0 1em}.gr-pagination a svg{width:18px;height:18px;display:inline-block;vertical-align:top;fill:currentColor}a.disabled{cursor:default;text-decoration:none}a.disabled:focus{outline:0}a.disabled:hover{text-decoration:none}\n      </style>\n          <nav role="navigation" data-id="pagination" aria-label="Pagination Navigation" class="gr-pagination" data-type="standard" data-pages-total="10" data-max-buttons="5" data-active-page="1" data-label="page" data-label-plural="pages">\n          <button id="prev" class="gr-btn icon-btn-18" aria-label="Previous page">\n            <span>\n              ' + previousIcon + '\n            </span>\n          </button>\n          <div id="pages" style="display:flex;">\n\n          </div>\n          <button id="next" class="gr-btn icon-btn-18" aria-label="Next page">\n            <span>\n              ' + nextIcon + '\n            </span>\n          </button>\n        </nav>\n  ', compactTemplate.innerHTML = '\n      <style>\n        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:16px}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}body{font-size:16px;font-family:Open Sans,Arial,Helvetica,sans-serif}body,p{line-height:1.5;font-weight:400}p{font-size:.875em}strong{font-weight:600}a{color:#047a9c}a:hover{color:#03536a;text-decoration:none}a:focus{outline:2px solid #0b73da;outline-offset:4px}button{cursor:pointer}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}.fadeIn,.slideInDown{opacity:1!important;visibility:visible!important}.fadeOut,.slideOutDown{opacity:0;visibility:hidden}.slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}.slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}.fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}.fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){.animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}.no-border{border:0}.icon-18{width:18px;height:18px}.icon-24{width:24px;height:24px}.hidden{display:none}.gr-h1{font-size:1.5em;line-height:1.75em}.gr-h1,.gr-h2{font-weight:400;margin-top:0}.gr-h2{font-size:1.25em;line-height:1.625em}.gr-h3{font-size:1.125em;line-height:1.5em;font-weight:400;margin-top:0}.gr-label{display:block;margin-bottom:4px}.gr-label,.gr-meta{font-size:.75em;line-height:1em;color:#6a7070}.gr-semi-bold{font-weight:600}.gr-font-large{font-size:1em;line-height:1.5em}.gr-font-normal{font-size:.875em;line-height:1.5}.gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:1em;cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:.875em}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:1em}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.gr-pagination{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.gr-pagination button{margin:0;min-width:44px;border:0!important;padding:0!important}.gr-pagination button span{height:28px;width:28px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #c7c7c7;border-radius:50%}.gr-pagination button:focus:after{min-height:36px;min-width:36px;padding:0;top:4px;left:8px}.gr-pagination button:hover span{background-color:#e9e9e9}.gr-pagination button:disabled{background:none!important}.gr-pagination button:disabled span{border:1px solid #d9d9d9}.gr-pagination button:disabled span svg{fill:#d9d9d9}.gr-pagination button:disabled:hover span{background:#fff}.gr-pagination a{min-width:44px;color:#6a7070;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:14px}.gr-pagination a:hover{text-decoration:underline;color:#6a7070;font-weight:700}.gr-pagination a:focus{outline-offset:0}.gr-pagination a[aria-current]{text-decoration:underline;color:#252525;font-weight:700}.gr-pagination .compact-text{font-size:.875em;margin:0 1em}.gr-pagination a svg{width:18px;height:18px;display:inline-block;vertical-align:top;fill:currentColor}a.disabled{cursor:default;text-decoration:none}a.disabled:focus{outline:0}a.disabled:hover{text-decoration:none}\n      </style>\n    \t\t<nav role="navigation" data-id="compactPagination" aria-label="Pagination Navigation" class="gr-pagination" data-pages-total="10" data-type="compact" data-active-page="1" data-label="page" data-label-plural="pages">\n\t\t\t\t<button id="prev" class="gr-btn icon-btn-18" aria-label="Previous page">\n           <span>\n              ' + previousIcon + '\n            </span>\n\t\t\t\t</button>\n\t\t\t\t<span class="compact-text">Page <span class="current-page">1</span> of <span class="total-pages">20</span>\n\t\t\t</span>\n\t\t\t\t<button id="next" class="gr-btn icon-btn-18" aria-label="Next page">\n\t\t\t\t\t<span>\n\t             ' + nextIcon + '\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n\t\t\t</nav>\n    ', numberTemplate.innerHTML = '\n      <a href="#"><span></span></a>\n    ', ellipsisTemplate.innerHTML = '\n      <a href="#" class="ellipsis" class="disabled" aria-label="additional pages">...</a>\n    ';

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

  function renderItems(options) {
    var nextEllipsisNumber = parseInt(options.referenceNode.getAttribute('data-page'));

    while (options.start <= options.end && options.end < nextEllipsisNumber) {
      var nextNode = options.reference.nextElementSibling,
          renderTemplate = options.newNode.content.cloneNode(true),
          renderContent = renderTemplate.querySelector('span');

      nextNode.remove();
      renderContent.parentNode.setAttribute('aria-label', 'page ' + options.start);
      renderContent.parentNode.setAttribute('data-page', options.start);
      renderContent.innerHTML = options.start;

      if (options.start === options.newNumber) {
        renderContent.parentNode.setAttribute('aria-current', 'page');
      }

      if (options.end + 1 === nextEllipsisNumber) {
        options.referenceNode.innerHTML = nextEllipsisNumber;
        options.referenceNode.removeAttribute('data-ellipsis');
        options.referenceNode.classList.remove('disabled');
        options.referenceNode.setAttribute('aria-label', 'page ' + nextEllipsisNumber);
      } else {
        options.referenceNode.innerHTML = '...';
        options.referenceNode.classList.add('disabled');
        options.referenceNode.setAttribute('data-ellipsis', true);
        options.referenceNode.setAttribute('aria-label', 'additional pages');
      }

      renderContent.parentNode.addEventListener('click', function (event) {
        options.this.addListener(event, options);
      });

      options.parentNode.insertBefore(renderTemplate, options.referenceNode);
      options.start++;
    }
  }

  var Pagination = function (_HTMLElement) {
    _inherits(Pagination, _HTMLElement);

    _createClass(Pagination, [{
      key: 'addListener',
      value: function addListener(event) {
        event.preventDefault();
        this.currentPage = event.currentTarget.getAttribute('data-page');
        this.dispatchEvent(new Event('newPage', {
          bubbles: true
        }));
      }
    }, {
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
        this.dispatchEvent(new Event(type + 'Page', {
          bubbles: true
        }));
      }
    }, {
      key: 'compact',
      get: function get() {
        return this.hasAttribute('compact');
      }
    }, {
      key: 'firstPage',
      get: function get() {
        return 1;
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
        return ['firstpage', 'lastpage', 'currentpage', 'ellipsisat', 'compact'];
      }
    }]);

    function Pagination() {
      _classCallCheck(this, Pagination);

      var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this));

      _this.attachShadow({ mode: 'open' });
      return _this;
    }

    _createClass(Pagination, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        if (!this.compact) {
          var clone = template.content.cloneNode(true);
          this.pageTarget = clone.querySelector('#pages');
          this.nextPageBtn = clone.querySelector('#next');
          this.prevPageBtn = clone.querySelector('#prev');
          this.changePage = this.changePage.bind(this);
          this.addListener = this.addListener.bind(this);
          this.shadowRoot.appendChild(clone);

          this.currentPage = 1;
          this.pageRange = range(this.firstPage, this.lastPage, 1);
          this.pageRange.forEach(function (number, index) {
            var numberTemplateContainer = numberTemplate.content.cloneNode(true),
                numberTemplateSpan = numberTemplateContainer.querySelector('span'),
                numberTemplateParent = numberTemplateSpan.parentNode;

            var total = index + 1,
                placeLastNumber = _this2.ellipsisAt + 2,
                placeEllipsis = _this2.ellipsisAt + 1;

            _this2.template = numberTemplateContainer;
            _this2.span = numberTemplateSpan;
            _this2.parent = numberTemplateParent;

            _this2.parent.setAttribute('aria-label', 'page ' + number);
            _this2.parent.setAttribute('data-page', number);
            _this2.span.innerHTML = number;

            if (_this2.currentPage === _this2.firstPage) {
              var button = _this2.shadowRoot.querySelector('#prev');
              button.setAttribute('disabled', true);
            }
            if (_this2.currentPage === _this2.lastPage) {
              var _button = _this2.shadowRoot.querySelector('#next');
              _button.setAttribute('disabled', true);
            }

            if (_this2.lastPage > _this2.ellipsisAt) {
              if (total <= placeLastNumber) {
                if (number === _this2.currentPage) {
                  _this2.parent.setAttribute('aria-current', 'page');
                }

                if (total === placeEllipsis) {
                  _this2.parent.setAttribute('data-page', _this2.lastPage - 1);
                  _this2.parent.setAttribute('data-ellipsis', true);
                  _this2.parent.setAttribute('aria-label', 'additional pages');
                  _this2.span.innerHTML = '...';
                  _this2.parent.classList.add('disabled');
                }

                if (total === placeLastNumber) {
                  _this2.parent.setAttribute('data-page', _this2.lastPage);
                  _this2.span.innerHTML = _this2.lastPage;
                }
                _this2.pageTarget.appendChild(_this2.template);
              }
            } else {
              if (number === _this2.currentPage) {
                _this2.parent.setAttribute('aria-current', 'page');
              }
              _this2.pageTarget.appendChild(_this2.template);
            }
          });
          var pageBtns = this.shadowRoot.querySelectorAll('nav button, #pages > a');
          pageBtns.forEach(function (button) {
            button.addEventListener('click', function (event) {
              event.preventDefault();
              button.removeAttribute('disabled');
              if (button.tagName === 'BUTTON') {
                button.setAttribute('aria-label', 'Page ' + _this2.currentPage + ', Next Page');
                if (_this2.currentPage >= _this2.firstPage) {
                  _this2.prevPageBtn.removeAttribute('disabled');
                }
                _this2.changePage(button.id);
              } else if (button.tagName === 'A') {
                _this2.addListener(event);
              }
            });
          });
          this.addEventListener('newPage', function (event) {
            _this2.shadowRoot.querySelector('[data-page="' + _this2.currentPage + '"]').focus();
          });
        } else {
          var _clone = compactTemplate.content.cloneNode(true);
          this.total = _clone.querySelector('.total-pages');
          this.page = _clone.querySelector('.current-page');
          this.pageTarget = _clone.querySelector('#pages');
          this.nextPageBtn = _clone.querySelector('#next');
          this.prevPageBtn = _clone.querySelector('#prev');
          this.shadowRoot.appendChild(_clone);
          this.currentPage = 1;
          var _pageBtns = this.shadowRoot.querySelectorAll('nav button');
          _pageBtns.forEach(function (button) {
            button.addEventListener('click', function (event) {
              var target = event.currentTarget.id;
              if (target === 'next') {
                if (_this2.currentPage < _this2.lastPage) {
                  _this2.currentPage = _this2.currentPage + 1;
                  _this2.dispatchEvent(new Event('nextPage', {
                    bubbles: true
                  }));
                }
              }
              if (target === 'prev') {
                if (_this2.currentPage > 1) {
                  _this2.currentPage = _this2.currentPage - 1;
                  _this2.dispatchEvent(new Event('previousPage', {
                    bubbles: true
                  }));
                } else {
                  return false;
                }
              }
            });
          });

          if (this.currentPage < this.lastPage) {
            this.page.innerHTML = this.currentPage;
          } else {
            this.page.innerHTML = this.lastPage;
          }
          if (this.currentPage === this.firstPage) {
            this.prevPageBtn.setAttribute('disabled', true);
          }
          if (this.currentPage === this.lastPage) {
            this.nextPageBtn.setAttribute('disabled', true);
          }
          this.total.innerHTML = this.lastPage;
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _this3 = this;

        if (!this.compact) {
          if (oldValue !== null) {
            var newNumber = parseInt(newValue);
            if (oldValue !== newValue) {
              if (name === 'currentpage') {
                var newPage = this.shadowRoot.querySelector('[data-page="' + newValue + '"]'),
                    oldPage = this.shadowRoot.querySelector('[data-page="' + oldValue + '"]'),
                    firstPage = this.shadowRoot.querySelector('[data-page="' + this.firstPage + '"]'),
                    lastPage = this.shadowRoot.querySelector('[data-page="' + this.lastPage + '"]'),
                    allLinks = this.shadowRoot.querySelectorAll('#pages > a');

                if (oldValue !== null && oldPage !== null) {
                  oldPage.removeAttribute('aria-current');
                  if (!newPage.hasAttribute('data-ellipsis')) {
                    newPage.setAttribute('aria-current', 'page');
                    newPage.setAttribute('aria-label', 'page ' + newValue);
                  }
                }

                if (newNumber === this.firstPage) {
                  allLinks.forEach(function (link, index) {
                    var value = index + 1;
                    link.innerHTML = value;
                    link.removeAttribute('data-ellipsis');
                    link.setAttribute('data-page', value);

                    if (value === _this3.ellipsisAt + 1) {
                      link.setAttribute('data-ellipsis', true);
                      link.innerHTML = '...';
                      link.setAttribute('data-page', _this3.lastPage - 1);
                      link.setAttribute('aria-label', 'additional pages');
                      link.classList.add('disabled');
                    }
                    if (value === _this3.ellipsisAt + 2) {
                      link.innerHTML = _this3.lastPage;
                      link.setAttribute('data-page', _this3.lastPage);
                    }
                  });
                }

                if (newNumber === this.lastPage) {
                  var totalPages = allLinks.length;
                  var startNumber = this.lastPage - totalPages + 1;
                  allLinks.forEach(function (link, index) {
                    link.innerHTML = startNumber;
                    link.removeAttribute('data-ellipsis');
                    link.setAttribute('data-page', startNumber);
                    link.classList.remove('disabled');
                    if (index === 0) {
                      link.innerHTML = 1;
                      link.setAttribute('data-page', 1);
                    }
                    if (index === 1) {
                      link.setAttribute('data-ellipsis', true);
                      link.setAttribute('aria-label', 'additional pages');
                      link.innerHTML = '...';
                      link.setAttribute('data-page', _this3.firstPage + 1);
                      link.classList.add('disabled');
                    }
                    startNumber++;
                  });
                }
                if (this.currentPage === this.firstPage) {
                  this.prevPageBtn.setAttribute('disabled', true);
                } else {
                  this.prevPageBtn.removeAttribute('disabled');
                }
                if (this.currentPage === this.lastPage) {
                  this.nextPageBtn.setAttribute('disabled', true);
                } else {
                  this.nextPageBtn.removeAttribute('disabled');
                }
                if (newPage !== null && newPage.nextElementSibling !== null && newPage.previousElementSibling !== null) {
                  var nextEllipsis = newPage.nextElementSibling.getAttribute('data-ellipsis'),
                      previousEllipsis = newPage.previousElementSibling.getAttribute('data-ellipsis'),
                      previousEllipsisNode = firstPage.nextElementSibling,
                      nextEllipsisNode = lastPage.previousElementSibling,
                      endRange = nextEllipsisNode.previousElementSibling.getAttribute('data-page'),
                      startRange = previousEllipsisNode.nextElementSibling.getAttribute('data-page'),
                      options = {
                    start: parseInt(startRange),
                    newNumber: newNumber,
                    end: parseInt(endRange),
                    reference: previousEllipsisNode,
                    newNode: numberTemplate,
                    parentNode: this.pageTarget,
                    referenceNode: nextEllipsisNode,
                    this: this,
                    newPage: newPage
                  };

                  if (nextEllipsis) {
                    firstPage.nextElementSibling.innerHTML = '...';
                    firstPage.nextElementSibling.classList.add('disabled');
                    firstPage.nextElementSibling.setAttribute('data-ellipsis', true);
                    firstPage.nextElementSibling.setAttribute('aria-label', 'additional pages');
                    options.end = options.end + 1;
                    renderItems(options);
                    if (newValue > this.firstPage) {
                      var button = this.shadowRoot.querySelector('#next');
                      button.removeAttribute('disabled');
                    }
                  } else if (previousEllipsis) {
                    options.start = options.start - 1;
                    options.end = options.end - 1;
                    renderItems(options);
                    if (options.newNumber - 2 === parseInt(previousEllipsisNode.getAttribute('data-page'))) {
                      firstPage.nextElementSibling.innerHTML = parseInt(previousEllipsisNode.getAttribute('data-page'));
                      firstPage.nextElementSibling.removeAttribute('data-ellipsis');
                      firstPage.nextElementSibling.classList.remove('disabled');
                      firstPage.nextElementSibling.setAttribute('aria-label', 'page ' + parseInt(previousEllipsisNode.getAttribute('data-page')));
                    }
                  }
                }
              }
            }
          }
        } else {
          if (oldValue !== null) {
            if (oldValue !== newValue) {
              if (newValue > this.firstPage) {
                var _button2 = this.shadowRoot.querySelector('#prev');
                _button2.removeAttribute('disabled');
              } else {
                var _button3 = this.shadowRoot.querySelector('#prev');
                _button3.setAttribute('disabled', true);
              }
              if (newValue < this.lastPage) {
                var _button4 = this.shadowRoot.querySelector('#next');
                _button4.removeAttribute('disabled');
              } else {
                var _button5 = this.shadowRoot.querySelector('#next');
                _button5.setAttribute('disabled', true);
              }
              this.page.innerHTML = this.currentPage;
            }
          }
        }
      }
    }]);

    return Pagination;
  }(HTMLElement);

  customElements.define('pearson-pagination', Pagination);
})(window, document);