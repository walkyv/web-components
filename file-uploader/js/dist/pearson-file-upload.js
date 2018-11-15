'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');
  var progressInfo = doc.createElement('template');
  var check = doc.createElement('template');

  template.innerHTML = '\n  <style>\n    /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:Open Sans,Calibri,Tahoma,sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}html{font-size:.875rem}body{font-family:Open Sans,Calibri,Tahoma,sans-serif;color:#252525}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:20px}h1+h2{margin-top:40px}h2+h3,h3+h4,h4+h5,h5+h6{margin-top:6px}header{margin-bottom:20px}header h1+.subtitle{margin-top:34px}aside h1{font-size:1.25rem}aside h2{font-size:1.1rem}aside h3{font-size:1rem}aside h4,aside h5,aside h6{font-size:.8rem}table{width:100%;max-width:100%;margin-bottom:35px;border-collapse:collapse}table td,table th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left}table thead th{vertical-align:bottom;border-top:0}a{color:#047a9c;text-decoration:underline}a.active,a:active,a:focus,a:hover{color:#005a70;text-decoration:none}a:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}abbr,abbr[title]{text-decoration:none}ins:after,ins:before{content:"+"}mark{background:#ffb81c}small{font-size:.85714rem;line-height:1.14286rem}sub,sup{font-size:90%}sub{top:.2rem}sup{top:-.2rem}pre{max-width:100%;overflow-x:auto}code,kbd,pre{font-family:Monaco,Lucida Console,monospace}:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff) format("woff");font-weight:100;font-style:normal}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff) format("woff");font-weight:100;font-style:italic}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff) format("woff");font-weight:400;font-style:normal}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff) format("woff");font-weight:400;font-style:italic}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff) format("woff");font-weight:600;font-style:normal}@font-face{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff) format("woff");font-weight:600;font-style:italic}.pe-base-fontsize{font-size:.875rem}.pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.pe-copy{font-size:1rem;line-height:1.57143rem;color:#252525}.pe-copy--secondary,.pe-label--secondary{color:#6a7070}.pe-copy--small{font-size:.85714rem;line-height:1.42857rem;color:#252525}.pe-copy--large,.pe-heading-level6,h6,header h5+.subtitle{font-size:1.14286rem;line-height:1.71429rem;color:#252525}.pe-paragraph,p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.pe-paragraph--last{margin-bottom:0;color:#252525}.pe-lead{font-size:1.42857rem;line-height:2rem}.pe-lead,.pe-page-title{font-weight:lighter;color:#252525}.pe-page-title{font-size:2.71429rem;line-height:3.71429rem}.pe-heading-level1,.pe-page-title--small,h1{font-size:2rem;line-height:2.71429rem;font-weight:lighter;color:#252525}.pe-heading-level3,.pe-heading-level4,.pe-title,h3,h4,header h2+.subtitle,header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400;color:#252525}.pe-heading-level5,.pe-title--small,h5,header h4+.subtitle{font-size:1.28571rem;line-height:1.57143rem;font-weight:400;color:#252525}.pe-heading-level2,.pe-title--large,h2,header h1+.subtitle{font-size:1.71429rem;line-height:2rem;font-weight:400;color:#252525}.pe-page-title--secondary,.pe-title--secondary{color:#6a7070}.pe-label{font-size:1rem;line-height:1.28571rem}.pe-label.pe-label--inverse{color:#fff}.pe-label--secondary.pe-label--inverse{color:#f5f5f5}.pe-label--small{font-size:.85714rem;line-height:1.14286rem}.pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.pe-bold,.pe-label--bold{font-weight:600}.pe-list{margin:12px 0;padding-left:1.85714rem}.pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.pe-list li>ol,.pe-list li>ul{margin-top:.42857rem}.pe-list.pe-styled-lists--ordered{list-style-type:decimal}.pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists--unordered{list-style-type:disc}.pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.pe-list--unstyled{list-style:none;padding-left:0}.pe-list--unstyled ul{padding-left:1.85714rem}.pe-heading-level1,.pe-heading-level2,h1,h2,header h1+.subtitle{margin-bottom:6px}.pe-heading-level3,h3,header h2+.subtitle{font-weight:700;margin-bottom:6px}.pe-heading-level4,.pe-heading-level5,.pe-heading-level6,h4,h5,h6,header h3+.subtitle,header h4+.subtitle,header h5+.subtitle{margin-bottom:6px}*+[class^=pe-heading-level]{margin-top:20px}.pe-code{color:#f5f5f5;font-size:1rem;line-height:1.42857rem;background:#005a70;padding:30px 50px}.pe-code,.pe-code-inline,.pe-kbd{font-family:Monaco,Lucida Console,monospace}.pe-code-inline,.pe-kbd{background:#e9e9e9;padding:0 4px}#pe-icons-sprite{display:none}svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:currentColor}[class^=pe-btn] svg[class$="-18"],[class^=pe-btn] svg[class$="-24"]{vertical-align:middle;margin-left:.5em;margin-bottom:.3em}svg[class$="-18"]{width:18px;height:18px}svg[class$="-24"]{width:24px;height:24px}svg[class$=font-setting-18]{width:24px;height:18px}svg[class$=font-setting-24]{width:32px;height:24px}svg[class$=new-notification-9]{vertical-align:middle;width:10px;height:10px}.pe-btn,.pe-btn--btn_large,.pe-btn--btn_small,.pe-btn--btn_xlarge,.pe-btn__cta,.pe-btn__cta--btn_large,.pe-btn__cta--btn_small,.pe-btn__cta--btn_xlarge,.pe-btn__primary,.pe-btn__primary--btn_large,.pe-btn__primary--btn_small,.pe-btn__primary--btn_xlarge,.pe-btn__tertiary,.pe-btn__tertiary--btn_large,.pe-btn__tertiary--btn_small,.pe-btn__tertiary--btn_xlarge{-webkit-box-sizing:border-box;box-sizing:border-box;border:none;display:inline-block;vertical-align:middle;cursor:pointer;height:36px;padding:0 20px;border-radius:36px;font-size:14px;line-height:18px;font-weight:600}.pe-btn--btn_small,.pe-btn__cta--btn_small,.pe-btn__primary--btn_small,.pe-btn__tertiary--btn_small{height:32px;border-radius:32px;padding:0 12px;font-size:14px;line-height:18px}.pe-btn--btn_xlarge,.pe-btn__cta--btn_xlarge,.pe-btn__primary--btn_xlarge,.pe-btn__tertiary--btn_xlarge{height:40px;border-radius:40px;padding:0 20px;font-size:16px;line-height:20px}.pe-icon--btn{padding:0;background-color:transparent;border:0;position:relative}.pe-icon--btn:focus{outline:0}.pe-icon--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.pe-link,.pe-link--btn{text-decoration:underline;background-color:transparent;border:0;cursor:pointer;position:relative}.pe-link{color:#047a9c;padding:0}.pe-link:focus,.pe-link:hover{color:#005a70;text-decoration:none}.pe-link:focus{outline:0}.pe-link:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.pe-link--btn{color:#047a9c;padding:4px;position:relative}.pe-link--btn:focus,.pe-link--btn:hover{text-decoration:none}.pe-link--btn:focus{outline:0}.pe-link--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.pe-link--btn:disabled{color:#6a7070;text-decoration:none;cursor:default}.pe-btn,.pe-btn--btn_large{border-radius:22px;text-decoration:none;position:relative;z-index:1}.pe-btn,.pe-btn--btn_large,.pe-btn--btn_large:active,.pe-btn--btn_large:focus,.pe-btn--btn_large:hover,.pe-btn:active,.pe-btn:focus,.pe-btn:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.pe-btn--btn_large:focus,.pe-btn:focus{outline:0}.pe-btn--btn_large:focus:after,.pe-btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn--btn_large.pe-btn--disabled,.pe-btn--btn_large.pe-btn--disabled:hover,.pe-btn--btn_large:disabled,.pe-btn.pe-btn--disabled,.pe-btn.pe-btn--disabled:hover,.pe-btn:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn--btn_large span.btn-overflow,.pe-btn span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btngroup button:first-child{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.pe-btngroup button:last-child{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.pe-btngroup button:not(:first-child):not(:last-child){border-radius:0!important}.pe-btn--btn_small{border-radius:22px;text-decoration:none;position:relative;z-index:1}.pe-btn--btn_small,.pe-btn--btn_small:active,.pe-btn--btn_small:focus,.pe-btn--btn_small:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.pe-btn--btn_small:focus{outline:0}.pe-btn--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn--btn_small.pe-btn--disabled,.pe-btn--btn_small.pe-btn--disabled:hover,.pe-btn--btn_small:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btn--btn_xlarge{border-radius:22px;text-decoration:none;position:relative;z-index:1}.pe-btn--btn_xlarge,.pe-btn--btn_xlarge:active,.pe-btn--btn_xlarge:focus,.pe-btn--btn_xlarge:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.pe-btn--btn_xlarge:focus{outline:0}.pe-btn--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn--btn_xlarge.pe-btn--disabled,.pe-btn--btn_xlarge.pe-btn--disabled:hover,.pe-btn--btn_xlarge:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btn__primary,.pe-btn__primary--btn_large{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.pe-btn__primary--btn_large:active,.pe-btn__primary--btn_large:focus,.pe-btn__primary--btn_large:hover,.pe-btn__primary:active,.pe-btn__primary:focus,.pe-btn__primary:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.pe-btn__primary--btn_large:focus,.pe-btn__primary:focus{outline:0}.pe-btn__primary--btn_large:focus:after,.pe-btn__primary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn__primary--btn_large.pe-btn--disabled,.pe-btn__primary--btn_large.pe-btn--disabled:hover,.pe-btn__primary--btn_large:disabled,.pe-btn__primary.pe-btn--disabled,.pe-btn__primary.pe-btn--disabled:hover,.pe-btn__primary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn__primary--btn_large span.btn-overflow,.pe-btn__primary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btn__primary--btn_small{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.pe-btn__primary--btn_small:active,.pe-btn__primary--btn_small:focus,.pe-btn__primary--btn_small:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.pe-btn__primary--btn_small:focus{outline:0}.pe-btn__primary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn__primary--btn_small.pe-btn--disabled,.pe-btn__primary--btn_small.pe-btn--disabled:hover,.pe-btn__primary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn__primary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btn__primary--btn_xlarge{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.pe-btn__primary--btn_xlarge:active,.pe-btn__primary--btn_xlarge:focus,.pe-btn__primary--btn_xlarge:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.pe-btn__primary--btn_xlarge:focus{outline:0}.pe-btn__primary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn__primary--btn_xlarge.pe-btn--disabled,.pe-btn__primary--btn_xlarge.pe-btn--disabled:hover,.pe-btn__primary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn__primary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btn__cta,.pe-btn__cta--btn_large{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.pe-btn__cta--btn_large:active,.pe-btn__cta--btn_large:focus,.pe-btn__cta--btn_large:hover,.pe-btn__cta:active,.pe-btn__cta:focus,.pe-btn__cta:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.pe-btn__cta--btn_large:focus,.pe-btn__cta:focus{outline:0}.pe-btn__cta--btn_large:focus:after,.pe-btn__cta:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn__cta--btn_large.pe-btn--disabled,.pe-btn__cta--btn_large.pe-btn--disabled:hover,.pe-btn__cta--btn_large:disabled,.pe-btn__cta.pe-btn--disabled,.pe-btn__cta.pe-btn--disabled:hover,.pe-btn__cta:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn__cta--btn_large span.btn-overflow,.pe-btn__cta span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btn__cta--btn_small{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.pe-btn__cta--btn_small:active,.pe-btn__cta--btn_small:focus,.pe-btn__cta--btn_small:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.pe-btn__cta--btn_small:focus{outline:0}.pe-btn__cta--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn__cta--btn_small.pe-btn--disabled,.pe-btn__cta--btn_small.pe-btn--disabled:hover,.pe-btn__cta--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn__cta--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btn__cta--btn_xlarge{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.pe-btn__cta--btn_xlarge:active,.pe-btn__cta--btn_xlarge:focus,.pe-btn__cta--btn_xlarge:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.pe-btn__cta--btn_xlarge:focus{outline:0}.pe-btn__cta--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn__cta--btn_xlarge.pe-btn--disabled,.pe-btn__cta--btn_xlarge.pe-btn--disabled:hover,.pe-btn__cta--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn__cta--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btn__tertiary,.pe-btn__tertiary--btn_large{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.pe-btn__tertiary--btn_large:active,.pe-btn__tertiary--btn_large:focus,.pe-btn__tertiary--btn_large:hover,.pe-btn__tertiary:active,.pe-btn__tertiary:focus,.pe-btn__tertiary:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.pe-btn__tertiary--btn_large:focus,.pe-btn__tertiary:focus{outline:0}.pe-btn__tertiary--btn_large:focus:after,.pe-btn__tertiary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn__tertiary--btn_large.pe-btn--disabled,.pe-btn__tertiary--btn_large.pe-btn--disabled:hover,.pe-btn__tertiary--btn_large:disabled,.pe-btn__tertiary.pe-btn--disabled,.pe-btn__tertiary.pe-btn--disabled:hover,.pe-btn__tertiary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn__tertiary--btn_large span.btn-overflow,.pe-btn__tertiary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btn__tertiary--btn_small{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.pe-btn__tertiary--btn_small:active,.pe-btn__tertiary--btn_small:focus,.pe-btn__tertiary--btn_small:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.pe-btn__tertiary--btn_small:focus{outline:0}.pe-btn__tertiary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn__tertiary--btn_small.pe-btn--disabled,.pe-btn__tertiary--btn_small.pe-btn--disabled:hover,.pe-btn__tertiary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn__tertiary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.pe-btn__tertiary--btn_xlarge{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.pe-btn__tertiary--btn_xlarge:active,.pe-btn__tertiary--btn_xlarge:focus,.pe-btn__tertiary--btn_xlarge:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.pe-btn__tertiary--btn_xlarge:focus{outline:0}.pe-btn__tertiary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-btn__tertiary--btn_xlarge.pe-btn--disabled,.pe-btn__tertiary--btn_xlarge.pe-btn--disabled:hover,.pe-btn__tertiary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.pe-btn__tertiary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}a[class$="--btn_xlarge"],div[class$="--btn_xlarge"]{line-height:40px!important}a[class$="--btn_large"],a[class=pe-btn],a[class=pe-btn__cta],a[class=pe-btn__primary],a[class=pe-btn__tertiary],div[class$="--btn_large"],div[class=pe-btn],div[class=pe-btn__cta],div[class=pe-btn__primary],div[class=pe-btn__tertiary]{line-height:36px!important}a[class$="--btn_small"],div[class$="--btn_small"]{line-height:32px!important}input[class^=pe-btn]:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-modal-container{width:475px}.pe-modal-container>.pe-heading-level3,.pe-modal-container>.pe-heading-level4,.pe-modal-container>.pe-title,.pe-modal-container>h3,.pe-modal-container>h4,header .pe-modal-container>h2+.subtitle,header .pe-modal-container>h3+.subtitle{width:100%;text-align:center;padding:20px 0}.pe-file-upload-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}@media (max-width:768px){.pe-file-upload-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.pe-file-upload-container .file-upload{height:362px;border-radius:6px;border:2px dashed #6a7070;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-image:url(icons/drag.svg);background-repeat:no-repeat;background-position:center 30px;background-size:100px;margin:40px 0}.pe-file-upload-container .file-upload.highlight{border:2px dashed #047a9c;background-color:#e9f9fe;background-image:url(icons/drag-target.svg)}.pe-file-upload-container .file-upload .drop-area{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;width:390px}.pe-file-upload-container .file-upload .drop-area .pe-heading-level3,.pe-file-upload-container .file-upload .drop-area .pe-heading-level4,.pe-file-upload-container .file-upload .drop-area .pe-title,.pe-file-upload-container .file-upload .drop-area h3,.pe-file-upload-container .file-upload .drop-area h4,.pe-file-upload-container .file-upload .drop-area header h2+.subtitle,.pe-file-upload-container .file-upload .drop-area header h3+.subtitle,header .pe-file-upload-container .file-upload .drop-area h2+.subtitle,header .pe-file-upload-container .file-upload .drop-area h3+.subtitle{margin-top:6em}.pe-file-upload-container .file-upload .drop-area button{width:154px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-bottom:35px}.pe-file-upload-container .file-upload .drop-area .info{color:#6a7070;font-size:12px;margin:0}.pe-file-upload-container .file-upload .drop-area .text{margin-bottom:16px}.pe-file-upload-container .file-upload-info{display:none;margin-left:2.5em;width:373px;border-left:1px solid #c7c7c7;padding:40px 0 0 2.5em;max-height:410px;overflow:scroll}@media (max-width:768px){.pe-file-upload-container .file-upload-info{border-left:0;padding:0;margin:0;max-height:100%}}.pe-file-upload-container .file-upload-info .text{max-width:260px;word-break:break-word}.pe-file-upload-container .file-upload-info .text strong{line-height:1.5}.pe-file-upload-container .progress{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #f5f5f5;padding-bottom:1em;margin-bottom:1em;padding-right:10px}.pe-file-upload-container .indicator,.pe-file-upload-container .progress .group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.pe-file-upload-container .indicator{margin-right:1em;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:50px;width:50px}.pe-file-upload-container .indicator span{position:absolute;font-weight:700;color:#047a9c;font-size:.7em}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.pe-file-upload-container .indicator span{position:relative}}.pe-file-upload-container .indicator img{width:18px}.pe-file-upload-container .text .info{color:#6a7070;font-size:12px;margin:0}.pe-file-upload-container .upload-actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:4px}.pe-file-upload-container .upload-actions button{cursor:pointer;width:40px;height:40px}.pe-file-upload-container .upload-actions button svg{fill:#6a7070}.pe-file-upload-container .upload-title{font-weight:400}.pe-file-upload-container .pe-progress-container{margin-top:1em}.pe-file-upload-container input[type=file]{display:none}.pe-file-upload-container progress-ring{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.pe-file-upload-container progress-ring{display:none}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){body:focus,html:focus{outline:none}}.pe-heading-level3,.pe-heading-level4,.pe-title,h3,h4,header h2+.subtitle,header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400}:host{font-family:Open Sans,Calibri,Tahoma,"sans-serif";font-size:.875em;color:#252525}\n  </style>\n    <upload-modal triggerId titleText="Upload Files" successBtnText="Done" style="display:none">\n      <div class="pe-file-upload-container">\n        <div id="drop" class="file-upload">\n          <div class="drop-area">\n            <p class="pe-title">Drag files here</p>\n            <p class="text">or</p>\n            <input type="file" name="file" multiple>\n            <button id="attachFiles" class="pe-btn--btn_large" data-action="toggle-footer" type="button">Browse Files</button>\n            <p class="info">Upload up to <span id="maxNumberOfFiles"></span> files.</p>\n            <p class="info">Max file size <span id="maxFileSize"></span></p>\n          </div>\n        </div>\n        <div id="info" class="file-upload-info">\n          <h6 id="uploadTitle" class="upload-title" aria-live="assertive"></h6>\n          <div id="progressContainer" class="pe-progress-container"></div>\n        </div>\n      </div>\n    </upload-modal>\n  ';

  progressInfo.innerHTML = '\n  <div class="progress">\n    <div class="group">\n      <div class="indicator">\n        <span class="total"></span>\n      </div>\n      <div class="text">\n        <strong class="filename"></strong>\n        <p class="info">\n          <span class="bytes-loaded"></span>\n          <span class="bytes-total"></span>\n        </p>\n      </div>\n    </div>\n    <div class="upload-actions">\n      <button class="pe-icon--btn remove-file" aria-label="remove FILE from uploads">\n        <img height="18" width="18" src="data:image/svg+xml,%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' fill=\'%236a7070\' viewBox=\'0 0 18 18\'%3E%3Cpath d=\'M12,14.5 C12,14.776 11.776,15 11.5,15 C11.224,15 11,14.776 11,14.5 L11,5.5 C11,5.224 11.224,5 11.5,5 C11.776,5 12,5.224 12,5.5 L12,14.5 Z M9,14.5 C9,14.776 8.776,15 8.5,15 C8.224,15 8,14.776 8,14.5 L8,5.5 C8,5.224 8.224,5 8.5,5 C8.776,5 9,5.224 9,5.5 L9,14.5 Z M6,2 L11,2 L11,1 L6,1 L6,2 Z M6,14.5 C6,14.776 5.776,15 5.5,15 C5.224,15 5,14.776 5,14.5 L5,5.5 C5,5.224 5.224,5 5.5,5 C5.776,5 6,5.224 6,5.5 L6,14.5 Z M16.5,2 L12,2 L12,0.5 C12,0.224 11.776,0 11.5,0 L5.5,0 C5.224,0 5,0.224 5,0.5 L5,2 L0.5,2 C0.224,2 0,2.224 0,2.5 C0,2.776 0.224,3 0.5,3 L2,3 L2,17.5 C2,17.776 2.224,18 2.5,18 L14.5,18 C14.776,18 15,17.776 15,17.5 L15,3 L16.5,3 C16.776,3 17,2.776 17,2.5 C17,2.224 16.776,2 16.5,2 L16.5,2 Z\'%3E%3C/path%3E%3C/svg%3E"/>\n      </button>\n    </div>\n  </div>\n  ';

  check.innerHTML = '\n  <span>\n    <img height="18" width="18" class="pe-icon--check-sm-24" src="data:image/svg+xml,%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23047a9c\' viewBox=\'0 0 18 18\'%3E%3Cpath d=\'M17.5762,6.1826 C17.1252,5.8656 16.5012,5.9716 16.1822,6.4236 L9.8432,15.4146 L7.7332,13.1386 C7.3582,12.7326 6.7242,12.7096 6.3202,13.0846 C5.9152,13.4596 5.8912,14.0926 6.2662,14.4976 L9.2152,17.6796 C9.4052,17.8846 9.6712,17.9996 9.9492,17.9996 C9.9712,17.9996 9.9932,17.9986 10.0152,17.9976 C10.3162,17.9776 10.5922,17.8236 10.7662,17.5766 L17.8172,7.5766 C18.1362,7.1246 18.0282,6.5006 17.5762,6.1826\'%3E%3C/path%3E%3C/svg%3E" style="position:relative; top:-1px; left: -2px;"/>\n  </span>\n  ';

  var status = {
    done: 0,
    progress: 0
  };

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-uploader');

  function returnOperator(opr, type) {
    if (opr === 'plus') {
      return status[type]++;
    } else if (opr === 'minus') {
      return status[type]--;
    } else {
      return;
    }
  }

  function updateProgress(element) {
    var modal = element.querySelector('upload-modal'),
        uploadTitle = modal.querySelector('#uploadTitle'),
        uploadInfo = modal.querySelector('#info'),
        cancelBtn = modal.shadowRoot.querySelector('#cancelButton'),
        successBtn = modal.shadowRoot.querySelector('#successButton');

    if (status.progress >= 1) {
      cancelBtn.disabled = false;
    } else {
      cancelBtn.disabled = true;
    }

    if (status.progress === 0 && status.done >= 1) {
      successBtn.disabled = false;
    } else {
      successBtn.disabled = true;
    }

    if (status.progress === 0 && status.done === 0) {
      modal.footer = false;
      uploadInfo.style.display = 'none';
    }

    uploadTitle.innerHTML = 'Uploading (' + status.done + ' done, ' + status.progress + ' progress)';
  }

  function dispatchEvent(element, name) {
    var modal = element.querySelector('upload-modal');
    modal.dispatchEvent(new CustomEvent(name, {
      detail: {
        done: status.done,
        progress: status.progress
      }
    }));
  }

  function updateStatus(opr, statusType, element) {
    var modal = element.querySelector('upload-modal');
    returnOperator(opr, statusType);
    if (modal.footer) {
      updateProgress(element);
    }
    dispatchEvent(element, 'xhrLoading');
  }

  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function formatBytes(bytes, decimalPoint) {
    if (bytes === 0) return '0 Bytes';
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function generateAlert(opts) {
    var alert = doc.createElement('pearson-alert');
    for (var attrName in opts) {
      alert.setAttribute(attrName, opts[attrName]);
    }
    return alert;
  }

  function buildAlert(opts) {
    var alert = generateAlert({
      returnNode: '#attachFiles',
      type: 'error',
      level: 'global',
      animated: true
    });
    alert.innerHTML = '\n      <h2 id="alertTitle" class="pe-label alert-title">\n          <strong>' + opts.strong + '</strong>' + opts.text + '\n       </h2>\n  ';
    return alert;
  }

  function tooLarge(current, max) {
    return current >= max;
  }

  var FileUpload = function (_HTMLElement) {
    _inherits(FileUpload, _HTMLElement);

    function FileUpload() {
      _classCallCheck(this, FileUpload);

      var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this));

      _this.attachShadow({
        mode: 'open'
      });

      var clone = template.content.cloneNode(true);

      _this.uploadInfo = clone.querySelector('#info');
      _this.realUploadInput = clone.querySelector('input[type="file"]');
      _this.attachBtn = clone.querySelector('#attachFiles');
      _this.target = clone.querySelector('#progressContainer');
      _this.dropArea = clone.querySelector('#drop');
      _this.modal = clone.querySelector('upload-modal');
      _this.max = clone.querySelector('#maxFileSize');
      _this.fileNumber = clone.querySelector('#maxNumberOfFiles');
      _this.modal.setAttribute('triggerId', _this.triggerId);

      _this.handleFiles = _this.handleFiles.bind(_this);
      _this.uploadFile = _this.uploadFile.bind(_this);
      _this.renderProgressItems = _this.renderProgressItems.bind(_this);
      _this.highlight = _this.highlight.bind(_this);
      _this.unhighlight = _this.unhighlight.bind(_this);
      _this.handleDrop = _this.handleDrop.bind(_this);
      _this.deleteFile = _this.deleteFile.bind(_this);

      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(FileUpload, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        var modal = this.shadowRoot.querySelector('upload-modal');
        this.realUploadInput.addEventListener('change', function (event) {
          _this2.handleFiles(event.srcElement.files);
          _this2.attachBtn.focus({
            preventScroll: true
          });
          _this2.realUploadInput.value = '';
        });

        this.attachBtn.addEventListener('click', function () {
          _this2.realUploadInput.click();
        });

        this.dropArea.addEventListener('dragenter', this.highlight);
        this.dropArea.addEventListener('dragover', this.highlight);
        this.dropArea.addEventListener('dragleave', this.unhighlight);
        this.dropArea.addEventListener('drop', this.handleDrop);

        modal.addEventListener('click', function (event) {
          if (event.target.classList.contains('remove-file')) {
            _this2.deleteFile(event);
          }
        });

        this.max.innerHTML = formatBytes(this.maxFileSize);
        this.fileNumber.innerHTML = this.maxNumberOfFiles;
      }
    }, {
      key: 'handleFiles',
      value: function handleFiles(files) {
        var alertMessage = {
          strong: 'Too many files.',
          text: ' You can only upload a max number of ' + this.maxNumberOfFiles + ' files'
        };
        if (files.length <= parseInt(this.maxNumberOfFiles)) {
          [].concat(_toConsumableArray(files)).forEach(this.uploadFile);
        } else {
          modal.appendChild(buildAlert(alertMessage));
        }
      }
    }, {
      key: 'deleteFile',
      value: function deleteFile(event) {
        var _this3 = this;

        var xhr = new XMLHttpRequest(),
            fileName = event.target.parentNode.parentNode.getAttribute('data-file'),
            url = this.apiUrl + fileName,
            modal = this.shadowRoot.querySelector('upload-modal'),
            domNode = event.target.parentNode.parentNode,
            alertMessage = {
          strong: fileName + ' ',
          text: 'was not deleted. There was a problem with the server.'
        };

        xhr.open('DELETE', url, true);

        xhr.addEventListener('load', function () {
          if (xhr.readyState === 4 && xhr.status === 204) {
            domNode.remove();
            updateStatus('minus', 'done', _this3.shadowRoot);
          } else {
            domNode.style.display = 'flex';
            modal.appendChild(buildAlert(alertMessage));
          }
        });

        domNode.style.display = 'none';
        xhr.send(null);
      }
    }, {
      key: 'uploadFile',
      value: function uploadFile(file) {
        var _this4 = this;

        var xhr = new XMLHttpRequest(),
            formData = new FormData(),
            modal = this.shadowRoot.querySelector('upload-modal'),
            alertMessage = {
          strong: file.name + ' ',
          text: 'was not uploaded. There was a problem with the server.'
        },
            alertMessage2 = {
          strong: file.name + ' ',
          text: 'is too large to be uploaded.'
        },
            fileNotTooLarge = !tooLarge(parseInt(file.size), parseInt(this.maxFileSize));

        xhr.addEventListener('load', function (event) {
          updateStatus('plus', 'done', _this4.shadowRoot);
          if (status.progress > 0) {
            updateStatus('minus', 'progress', _this4.shadowRoot);
          }
        });

        xhr.addEventListener('error', function (event) {
          target.appendChild(buildAlert(alertMessage));
        });

        xhr.addEventListener('abort', function (event) {
          var uploader = document.querySelector('pearson-uploader'),
              element = uploader.shadowRoot.querySelector('[data-file="' + file.name + '"]');
          element.remove();
          updateStatus('minus', 'progress', _this4.shadowRoot);
        });

        if (fileNotTooLarge) {
          xhr.open('POST', this.apiUrl, true);
          status.progress++;
          if (modal.footer !== true) {
            modal.footer = true;
            this.uploadInfo.style.display = 'block';
          }

          this.renderProgressItems(file, xhr);
          formData.append('key', file.name);
          formData.append('file', file);
          xhr.send(formData);

          var cancelButton = this.shadowRoot.querySelector('upload-modal').shadowRoot.querySelector('#cancelButton');

          cancelButton.addEventListener('click', function (event) {
            xhr.abort();
          });
        } else {
          modal.appendChild(buildAlert(alertMessage2));
        }
      }
    }, {
      key: 'renderProgressItems',
      value: function renderProgressItems(file, xhr) {
        var _this5 = this;

        var infoClone = progressInfo.content.cloneNode(true),
            checkClone = check.content.cloneNode(true),
            progressTarget = this.shadowRoot.querySelector('#progressContainer'),
            progress = infoClone.querySelector('.progress'),
            indicator = infoClone.querySelector('.indicator'),
            filename = infoClone.querySelector('.filename'),
            textTotal = infoClone.querySelector('.total'),
            removeBtn = infoClone.querySelector('.remove-file'),
            bytesLoaded = infoClone.querySelector('.bytes-loaded'),
            bytesTotal = infoClone.querySelector('.bytes-total'),
            buildRing = document.createElement('progress-ring');

        progressTarget.appendChild(infoClone);
        indicator.appendChild(buildRing);
        progress.setAttribute('data-file', file.name);
        filename.innerHTML = file.name;
        removeBtn.style.visibility = 'hidden';

        xhr.upload.addEventListener('progress', function (event) {
          var percentLoaded = Math.round(event.loaded / event.total * 100);
          bytesLoaded.innerHTML = formatBytes(event.loaded);
          bytesTotal.innerHTML = formatBytes(event.total);
          buildRing.setAttribute('progress', percentLoaded);
          buildRing.setAttribute('stroke', 3);
          buildRing.setAttribute('radius', 25);

          if (percentLoaded !== 100) {
            updateProgress(_this5.shadowRoot);
            return textTotal.innerHTML = percentLoaded;
          } else {
            removeBtn.setAttribute('aria-label', 'Remove ' + file.name + ' from uploads.');
            removeBtn.style.visibility = 'visible';
            return textTotal.innerHTML = checkClone.querySelector('span').innerHTML;
          }
        });
      }
    }, {
      key: 'highlight',
      value: function highlight(event) {
        preventDefaults(event);
        this.dropArea.classList.add('highlight');
      }
    }, {
      key: 'unhighlight',
      value: function unhighlight(event) {
        preventDefaults(event);
        this.dropArea.classList.remove('highlight');
      }
    }, {
      key: 'handleDrop',
      value: function handleDrop(event) {
        this.unhighlight(event);
        var dt = event.dataTransfer;
        var files = dt.files;
        this.handleFiles(files);
      }
    }, {
      key: 'apiUrl',
      get: function get() {
        return this.getAttribute('apiUrl');
      }
    }, {
      key: 'maxFileSize',
      get: function get() {
        return this.getAttribute('maxByteFileSize');
      }
    }, {
      key: 'maxNumberOfFiles',
      get: function get() {
        return this.getAttribute('maxNumberOfFiles');
      }
    }, {
      key: 'triggerId',
      get: function get() {
        return this.getAttribute('triggerId');
      }
    }]);

    return FileUpload;
  }(HTMLElement);

  customElements.define('pearson-uploader', FileUpload);
})(window, document);

(function (w, doc) {
  'use strict';

  var ProgressRing = function (_HTMLElement2) {
    _inherits(ProgressRing, _HTMLElement2);

    function ProgressRing() {
      _classCallCheck(this, ProgressRing);

      var _this6 = _possibleConstructorReturn(this, (ProgressRing.__proto__ || Object.getPrototypeOf(ProgressRing)).call(this));

      var stroke = _this6.getAttribute('stroke');
      var radius = _this6.getAttribute('radius');
      var normalizedRadius = 25 - 3 * 2;
      _this6._circumference = normalizedRadius * 2 * Math.PI;

      _this6._root = _this6.attachShadow({ mode: 'open' });
      _this6._root.innerHTML = '\n        <svg\n          height="50"\n          width="50"\n          aria-hidden="true"\n          focusable="false"\n         >\n           <circle\n             stroke="#047a9c"\n             stroke-dasharray="' + _this6._circumference + ' ' + _this6._circumference + '"\n             style="stroke-dashoffset:' + _this6._circumference + '"\n             stroke-width="3"\n             fill="transparent"\n             r="' + normalizedRadius + '"\n             cx="25"\n             cy="25"\n          />\n        </svg>\n  \n        <style>\n          circle {\n            transition: stroke-dashoffset 0.35s;\n            transform: rotate(-90deg);\n            transform-origin: 50% 50%;\n          }\n        </style>\n      ';
      return _this6;
    }

    _createClass(ProgressRing, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (!this.hasAttribute('role') || this.getAttribute('role') !== 'progressbar') {
          this.setAttribute('role', 'progressbar');
        }
        if (!this.hasAttribute('aria-valuemin') || this.getAttribute('aria-valuemin') !== 0) {
          this.setAttribute('aria-valuemin', 0);
        }

        if (!this.hasAttribute('aria-valuemax') || this.getAttribute('aria-valuemax') !== 100) {
          this.setAttribute('aria-valuemax', 100);
        }

        if (!this.hasAttribute('aria-valuenow') || this.getAttribute('aria-valuenow') !== this.progress) {
          this.setAttribute('aria-valuenow', this.progress);
        }

        var valueText = this.progress + ' percent complete';
        if (!this.hasAttribute('aria-valueText') || this.getAttribute('aria-valueText') !== valueText) {
          this.setAttribute('aria-valueText', valueText);
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'progress') {
          this.setProgress(newValue);
        }
      }
    }, {
      key: 'setProgress',
      value: function setProgress(percent) {
        var offset = this._circumference - percent / 100 * this._circumference;
        var circle = this._root.querySelector('circle');
        circle.style.strokeDashoffset = offset;

        this.setAttribute('aria-valuenow', percent);
        this.setAttribute('aria-valuetext', percent + ' percent complete');
      }
    }, {
      key: 'upgradeProp',
      value: function upgradeProp(prop) {
        if (this.hasOwnProperty(prop)) {
          var value = this[prop];
          delete this[prop];
          this[prop] = value;
        }
      }
    }, {
      key: 'progress',
      get: function get() {
        return this.getAttribute('progress');
      },
      set: function set(value) {
        this.setAttribute('progress', value);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['progress', 'radius', 'stroke'];
      }
    }]);

    return ProgressRing;
  }(HTMLElement);

  w.customElements.define('progress-ring', ProgressRing);
})(window, document);