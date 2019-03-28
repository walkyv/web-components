var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  w['moment-range'].extendMoment(moment);
  // Create a template element
  var datepicker = doc.createElement('template'),
      calendar = doc.createElement('template'),
      row = doc.createElement('template'),
      dateTemplate = doc.createElement('template'),
      dateIcon = '\n\n  \n                  <svg focusable="false" class="icon-18" aria-hidden="false" title="close coachmark" role="img" >\n\t<path d="M14.4146471,2 L14.875,2 C16.0486051,2 17,2.95139491 17,4.125 L17,14.875 C17,16.0486051 16.0486051,17 14.875,17 L3.125,17 C1.95139491,17 1,16.0486051 1,14.875 L1,4.125 C1,2.95139491 1.95139491,2 3.125,2 L3.58535285,2 C3.79127106,1.41740381 4.34689059,1 5,1 C5.65310941,1 6.20872894,1.41740381 6.41464715,2 L11.5853529,2 C11.7912711,1.41740381 12.3468906,1 13,1 C13.6531094,1 14.2087289,1.41740381 14.4146471,2 Z M15.25,6.25 L15.25,4.125 C15.25,3.91789322 15.0821068,3.75 14.875,3.75 L3.125,3.75 C2.91789322,3.75 2.75,3.91789322 2.75,4.125 L2.75,6.25 L15.25,6.25 Z M15.25,8 L2.75,8 L2.75,14.875 C2.75,15.0821068 2.91789322,15.25 3.125,15.25 L14.875,15.25 C15.0821068,15.25 15.25,15.0821068 15.25,14.875 L15.25,8 Z"></path>\n    <path d="M12.5,12 L13.5,12 C13.7761424,12 14,12.2238576 14,12.5 L14,13.5 C14,13.7761424 13.7761424,14 13.5,14 L12.5,14 C12.2238576,14 12,13.7761424 12,13.5 L12,12.5 C12,12.2238576 12.2238576,12 12.5,12 Z"></path>\n    <path d="M12.5,9 L13.5,9 C13.7761424,9 14,9.22385763 14,9.5 L14,10.5 C14,10.7761424 13.7761424,11 13.5,11 L12.5,11 C12.2238576,11 12,10.7761424 12,10.5 L12,9.5 C12,9.22385763 12.2238576,9 12.5,9 Z"></path>\n    <path d="M9.5,12 L10.5,12 C10.7761424,12 11,12.2238576 11,12.5 L11,13.5 C11,13.7761424 10.7761424,14 10.5,14 L9.5,14 C9.22385763,14 9,13.7761424 9,13.5 L9,12.5 C9,12.2238576 9.22385763,12 9.5,12 Z"></path>\n    <path d="M9.5,9 L10.5,9 C10.7761424,9 11,9.22385763 11,9.5 L11,10.5 C11,10.7761424 10.7761424,11 10.5,11 L9.5,11 C9.22385763,11 9,10.7761424 9,10.5 L9,9.5 C9,9.22385763 9.22385763,9 9.5,9 Z"></path>\n    <path d="M6.5,12 L7.5,12 C7.77614237,12 8,12.2238576 8,12.5 L8,13.5 C8,13.7761424 7.77614237,14 7.5,14 L6.5,14 C6.22385763,14 6,13.7761424 6,13.5 L6,12.5 C6,12.2238576 6.22385763,12 6.5,12 Z"></path>\n       </svg>\n    ',
      calendarIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M4 3L5 3 5 1 4 1 4 3zM13 3L14 3 14 1 13 1 13 3zM18 5L18 1.5C18 1.224 17.776 1 17.5 1L15 1 15 .5C15 .224 14.776 0 14.5 0L12.5 0C12.224 0 12 .224 12 .5L12 1 6 1 6 .5C6 .224 5.776 0 5.5 0L3.5 0C3.224 0 3 .224 3 .5L3 1 .5 1C.224 1 0 1.224 0 1.5L0 5 18 5zM14.0762 15L10.8262 15C10.5502 15 10.3262 14.776 10.3262 14.5 10.3262 14.224 10.5502 14 10.8262 14L12.0002 14 12.0002 9.707 11.3752 10.331C11.1802 10.526 10.8632 10.526 10.6682 10.331 10.4722 10.136 10.4722 9.819 10.6682 9.624L12.1462 8.146C12.2892 8.003 12.5062 7.96 12.6912 8.038 12.8782 8.116 13.0002 8.298 13.0002 8.5L13.0002 14 14.0762 14C14.3522 14 14.5762 14.224 14.5762 14.5 14.5762 14.776 14.3522 15 14.0762 15L14.0762 15zM9.0002 14.5C9.0002 14.776 8.7762 15 8.5002 15L4.5002 15C4.2232 15 4.0002 14.776 4.0002 14.5L4.0002 13.5C4.0002 13.224 4.2232 13 4.5002 13 4.7762 13 5.0002 13.224 5.0002 13.5L5.0002 14 8.0002 14 8.0002 12 5.6992 12C5.4232 12 5.1992 11.776 5.1992 11.5 5.1992 11.224 5.4232 11 5.6992 11L8.0002 11 8.0002 9 5.0002 9 5.0002 9.5C5.0002 9.776 4.7762 10 4.5002 10 4.2232 10 4.0002 9.776 4.0002 9.5L4.0002 8.5C4.0002 8.224 4.2232 8 4.5002 8L8.5002 8C8.7762 8 9.0002 8.224 9.0002 8.5L9.0002 14.5zM.0002 6L.0002 17.5C.0002 17.776.2232 18 .5002 18L17.5002 18C17.7762 18 18.0002 17.776 18.0002 17.5L18.0002 6 .0002 6z\'/%3e%3c/svg%3e',
      prevArrowIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M13.749,17.6606035 C14.112,17.2486035 14.076,16.6116035 13.662,16.2436035 L5.509,8.9996035 L13.662,1.7566035 C14.077,1.3896035 14.113,0.752603504 13.749,0.339603504 C13.383,-0.0763964961 12.751,-0.115396496 12.338,0.252603504 L3.338,8.2476035 C3.123,8.4376035 3,8.7126035 3,8.9996035 C3,9.2876035 3.123,9.5616035 3.338,9.7526035 L12.338,17.7476035 C12.751,18.1156035 13.383,18.0766035 13.749,17.6606035\'%3e%3c/path%3e%3c/svg%3e',
      nextArrowIcon = 'data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 18 18\' width=\'18\' height=\'18\' fill=\'%236a7070\'%3e%3cpath d=\'M4.2506,17.6606035 C3.8876,17.2486035 3.9236,16.6116035 4.3376,16.2436035 L12.4906,8.9996035 L4.3376,1.7566035 C3.9226,1.3896035 3.8866,0.752603504 4.2506,0.339603504 C4.6166,-0.0763964961 5.2486,-0.115396496 5.6616,0.252603504 L14.6616,8.2476035 C14.8766,8.4376035 14.9996,8.7126035 14.9996,8.9996035 C14.9996,9.2876035 14.8766,9.5616035 14.6616,9.7526035 L5.6616,17.7476035 C5.2486,18.1156035 4.6166,18.0766035 4.2506,17.6606035\'%3e%3c/path%3e%3c/svg%3e',
      warningIcon = '   \n  <svg     \n    aria-hidden="true"\n    focusable="false" \n    style="width:18px;height:18px;fill:currentColor"  \n  >  \n    <path d="M9.99994044,10.5 C9.99994044,10.776 9.77594044,11 9.49994044,11 L8.49994044,11 C8.22394044,11 7.99994044,10.776 7.99994044,10.5 L7.99994044,7.5 C7.99994044,7.224 8.22394044,7 8.49994044,7 L9.49994044,7 C9.77594044,7 9.99994044,7.224 9.99994044,7.5 L9.99994044,10.5 Z M9.99994044,13.5 C9.99994044,13.776 9.77594044,14 9.49994044,14 L8.49994044,14 C8.22394044,14 7.99994044,13.776 7.99994044,13.5 L7.99994044,12.5 C7.99994044,12.224 8.22394044,12 8.49994044,12 L9.49994044,12 C9.77594044,12 9.99994044,12.224 9.99994044,12.5 L9.99994044,13.5 Z M15.9460591,15.275 L9.44500379,2.276 C9.26100222,1.908 8.73899778,1.908 8.55499621,2.276 L2.05394089,15.275 C1.88693947,15.607 2.12794152,16 2.49894468,16 L15.5010553,16 C15.8720585,16 16.1130605,15.607 15.9460591,15.275 Z"/>\n</svg>';

  datepicker.innerHTML = ' \n    <style>\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:Open Sans,Calibri,Tahoma,sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}.pe-base-fontsize{font-size:.875rem}.pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.pe-copy{font-size:1rem;line-height:1.57143rem;color:#252525}.pe-copy--secondary,.pe-label--secondary{color:#6a7070}.pe-copy--small{font-size:.85714rem;line-height:1.42857rem;color:#252525}.pe-copy--large,.pe-heading-level6,h6,header h5+.subtitle{font-size:1.14286rem;line-height:1.71429rem;color:#252525}.pe-paragraph,p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.pe-paragraph--last{margin-bottom:0;color:#252525}.pe-lead{font-size:1.42857rem;line-height:2rem}.pe-lead,.pe-page-title{font-weight:lighter;color:#252525}.pe-page-title{font-size:2.71429rem;line-height:3.71429rem}.pe-heading-level1,.pe-page-title--small,h1{font-size:2rem;line-height:2.71429rem;font-weight:lighter;color:#252525}.pe-heading-level3,.pe-heading-level4,.pe-title,h3,h4,header h2+.subtitle,header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400;color:#252525}.pe-heading-level5,.pe-title--small,h5,header h4+.subtitle{font-size:1.28571rem;line-height:1.57143rem;font-weight:400;color:#252525}.pe-heading-level2,.pe-title--large,h2,header h1+.subtitle{font-size:1.71429rem;line-height:2rem;font-weight:400;color:#252525}.pe-page-title--secondary,.pe-title--secondary{color:#6a7070}.pe-label{font-size:1rem;line-height:1.28571rem}.pe-label.pe-label--inverse{color:#fff}.pe-label--secondary.pe-label--inverse{color:#f5f5f5}.pe-label--small{font-size:.85714rem;line-height:1.14286rem}.pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.pe-bold,.pe-label--bold{font-weight:600}.pe-list{margin:12px 0;padding-left:1.85714rem}.pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.pe-list li>ol,.pe-list li>ul{margin-top:.42857rem}.pe-list.pe-styled-lists--ordered{list-style-type:decimal}.pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists--unordered{list-style-type:disc}.pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.pe-list--unstyled{list-style:none;padding-left:0}.pe-list--unstyled ul{padding-left:1.85714rem}.pe-heading-level1,h1{margin-bottom:6px}.pe-heading-level2,h2,header h1+.subtitle{margin-bottom:6px}.pe-heading-level3,h3,header h2+.subtitle{font-weight:700;margin-bottom:6px}.pe-heading-level4,h4,header h3+.subtitle{margin-bottom:6px}.pe-heading-level5,h5,header h4+.subtitle{margin-bottom:6px}.pe-heading-level6,h6,header h5+.subtitle{margin-bottom:6px}*+[class^=pe-heading-level]{margin-top:20px}.pe-code{color:#f5f5f5;font-size:1rem;line-height:1.42857rem;background:#005a70;padding:30px 50px}.pe-code,.pe-code-inline,.pe-kbd{font-family:Monaco,Lucida Console,monospace}.pe-code-inline,.pe-kbd{background:#e9e9e9;padding:0 4px}html{font-size:.875rem}body{font-family:Open Sans,Calibri,Tahoma,sans-serif;color:#252525}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:0}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:20px}h1+h2{margin-top:40px}h2+h3,h3+h4,h4+h5,h5+h6{margin-top:6px}header{margin-bottom:20px}header h1+.subtitle{margin-top:34px}aside h1{font-size:1.25rem}aside h2{font-size:1.1rem}aside h3{font-size:1rem}aside h4,aside h5,aside h6{font-size:.8rem}table{width:100%;max-width:100%;margin-bottom:35px;border-collapse:collapse}table td,table th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left}table thead th{vertical-align:bottom;border-top:0}a{color:#047a9c;text-decoration:underline}a.active,a:active,a:hover{color:#005a70;text-decoration:none}a:focus{color:#005a70;text-decoration:none;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}abbr,abbr[title]{text-decoration:none}ins:before{content:"+"}ins:after{content:"+"}mark{background:#ffb81c}small{font-size:.85714rem;line-height:1.14286rem}sub,sup{font-size:90%}sub{top:.2rem}sup{top:-.2rem}pre{max-width:100%;overflow-x:auto}code,kbd,pre{font-family:Monaco,Lucida Console,monospace}:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-selectInput--fancy,.pe-selectInput-fancy-disabled,.pe-selectInput-fancy-error,.pe-selectInput-fancy-readonly,.pe-textInput,.pe-textInput--input_error,.pe-textInput--input_readonly{padding:8px 0 10px;font-size:14px;color:#252525;width:100%;border:none;line-height:18px}.pe-textInput{border-bottom:1px;border-bottom-style:solid;border-bottom-color:#6a7070}.pe-textInput::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput:-moz-placeholder,.pe-textInput::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput:focus{outline:none}.pe-input_underline{background-color:#047a9c;display:block;height:4px;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .2s ease;transition:all .2s ease;width:100%;margin-top:-3px}input:focus+.pe-input_underline{-webkit-transform:scale(1);transform:scale(1)}.pe-textLabelInput__label,.pe-textLabelInput__label--label-disabled,.pe-textLabelInput__label--label_error,.pe-textLabelInput__label--label_focus{font-size:12px;line-height:16px;display:block}.pe-textLabelInput__label{color:#6a7070}.pe-textLabelInput__label--label_focus{color:#047a9c}.pe-textLabelInput__label--label_error{color:#db0020}.pe-textLabelInput__label--label-disabled{color:#c7c7c7}input:focus+.pe-inputError_underline{-webkit-transform:scale(1);transform:scale(1)}.pe-inputError_underline{background-color:#db0020;display:block;height:4px;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .2s ease;transition:all .2s ease;width:100%;margin-top:-3px}.pe-textInput--input_error{border-bottom:1px;border-bottom-style:solid;border-bottom-color:#db0020}.pe-textInput--input_error::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--input_error:-moz-placeholder,.pe-textInput--input_error::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--input_error:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--input_error:focus{outline:none}.pe-input-wrapper{min-height:52px}.pe-textInput--input_readonly{border-bottom:0;background-color:transparent;font-size:14px;color:#252525;-webkit-appearance:none}.pe-textInput--input_readonly::-webkit-input-placeholder{font-size:14px}.pe-textInput--input_readonly:-moz-placeholder,.pe-textInput--input_readonly::-moz-placeholder{font-size:14px}.pe-textInput--input_readonly:-ms-input-placeholder{font-size:14px}.pe-textInput--input_readonly:focus{outline:none}.pe-input_underline-readonly{background-color:#c7c7c7;display:block;height:4px;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all .2s ease;transition:all .2s ease;width:100%;margin-top:-3px}input:focus+.pe-input_underline-readonly{-webkit-transform:scale(1);transform:scale(1)}.pe-textInput-disabled,.pe-textInput:disabled{color:#c7c7c7;font-size:14px;background-color:#fff;border-bottom:4px;border-bottom-style:solid;border-bottom-color:#c7c7c7}.pe-textInput--basic{border:1px solid #c7c7c7;margin-top:6px}.pe-textInput--basic::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic:-moz-placeholder,.pe-textInput--basic::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic:focus{border:1px solid #047a9c;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-textInput--basic_error{border:1px solid #db0020;margin-top:6px}.pe-textInput--basic_error::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_error:-moz-placeholder,.pe-textInput--basic_error::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_error:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_error:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-textInput--basic:disabled{background-color:#e9e9e9;margin-top:6px}.pe-textInput--basic_readonly{border:0;margin-top:6px}.pe-textInput--basic_readonly::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_readonly:-moz-placeholder,.pe-textInput--basic_readonly::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_readonly:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-textInput--basic_readonly:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container,.pe-select-container--fancy,.pe-select-container-disabled,.pe-select-container-error,.pe-select-container-fancy-disabled,.pe-select-container-fancy-error,.pe-select-container-fancy-error-focus,.pe-select-container-fancy-focus,.pe-select-container-fancy-readonly,.pe-select-container-focus,.pe-select-container-focus-error,.pe-select-container-readonly{position:relative;display:block;min-width:250px;padding:0}.pe-select-container--fancy svg,.pe-select-container-disabled svg,.pe-select-container-error svg,.pe-select-container-fancy-disabled svg,.pe-select-container-fancy-error-focus svg,.pe-select-container-fancy-error svg,.pe-select-container-fancy-focus svg,.pe-select-container-fancy-readonly svg,.pe-select-container-focus-error svg,.pe-select-container-focus svg,.pe-select-container-readonly svg,.pe-select-container svg{position:absolute;top:5px;bottom:8px;right:14px;pointer-events:none}.pe-select-container--fancy select,.pe-select-container-disabled select,.pe-select-container-error select,.pe-select-container-fancy-disabled select,.pe-select-container-fancy-error-focus select,.pe-select-container-fancy-error select,.pe-select-container-fancy-focus select,.pe-select-container-fancy-readonly select,.pe-select-container-focus-error select,.pe-select-container-focus select,.pe-select-container-readonly select,.pe-select-container select{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-height:34px;margin:0;padding:0 14px;outline:none}.pe-select--basic_error,.pe-selectInput--basic{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border:1px solid transparent;padding-top:8px}.pe-select-container,.pe-select-container--fancy,.pe-select-container-disabled,.pe-select-container-error,.pe-select-container-fancy-disabled,.pe-select-container-fancy-error,.pe-select-container-fancy-error-focus,.pe-select-container-fancy-focus,.pe-select-container-fancy-readonly,.pe-select-container-focus,.pe-select-container-focus-error,.pe-select-container-readonly,.pe-textInput--basic,.pe-textInput--basic_error,.pe-textInput--basic_readonly{padding:0 14px;height:36px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;border-radius:3px;font-size:14px;line-height:18px;background-color:#fff;color:#252525}.pe-select-container{border:1px solid #c7c7c7;padding:0;margin-top:6px}.pe-select-container select{padding:0 14px}.pe-select-container select:focus{border:1px solid #047a9c;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container select:focus::-ms-value{background:transparent;color:#222}.pe-select-container select::-ms-expand{opacity:0}.pe-selectInput--basic:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}.pe-select-container-focus{border:1px solid transparent;padding:0;margin-top:6px}.pe-select-container-focus select{padding:.3em .3em .3em 14px}.pe-select-container-focus select:focus{border:1px solid #047a9c;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container-focus select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-focus select:focus::-ms-expand{opacity:0}.pe-select-container-error{border:1px solid #db0020;padding:0;margin-top:6px}.pe-select-container-error select{padding:.3em .3em .3em 14px}.pe-select-container-error select:focus{border:1px solid #db0020;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container-error select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-error select::-ms-expand{opacity:0}.pe-select-container-focus-error{border:1px solid transparent;padding:0;margin-top:6px}.pe-select-container-focus-error select{padding:.3em .3em .3em 14px}.pe-select-container-focus-error select:focus{border:1px solid #db0020;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container-focus-error select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-focus-error select::-ms-expand{opacity:0}.pe-select--basic_error{-webkit-appearance:none}.pe-select--basic_error::-webkit-input-placeholder{font-size:14px;color:#c7c7c7}.pe-select--basic_error:-moz-placeholder,.pe-select--basic_error::-moz-placeholder{font-size:14px;color:#c7c7c7}.pe-select--basic_error:-ms-input-placeholder{font-size:14px;color:#c7c7c7}.pe-select--basic_error:focus{outline:none;-webkit-box-shadow:0 0 4px 0 #db0020;box-shadow:0 0 4px 0 #db0020}.pe-select--basic_error:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}.pe-select-container-disabled{outline:none;padding:0;color:#c7c7c7!important;background-color:#e9e9e9!important;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-top:6px}.pe-select-container-disabled svg{fill:#c7c7c7}.pe-select-container-disabled select{border:1px solid #c7c7c7}.pe-select-container-disabled select:focus{border:1px solid #db0020;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container-disabled select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-disabled select::-ms-expand{opacity:0}.pe-select-container-readonly{padding:0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-top:6px}.pe-select-container-readonly svg{right:8px}.pe-select-container-readonly select{padding:.3em .3em .3em 14px}.pe-select-container-readonly select:focus{border:0;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-select-container-readonly select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-readonly select::-ms-expand{opacity:0}.pe-select-container--fancy{-webkit-appearance:none;-moz-appearance:none;padding:0;border:none}.pe-select-container--fancy svg{right:0;outline:none}.pe-select-container--fancy select{padding:8px 0 10px;outline:none;-webkit-box-shadow:none;box-shadow:none}.pe-select-container--fancy select:focus{outline:none;-webkit-box-shadow:none;box-shadow:none}.pe-select-container--fancy select:focus::-ms-value{background:transparent;color:#222}.pe-select-container--fancy select::-ms-expand{opacity:0}.pe-selectInput--fancy{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;background-color:transparent;padding-top:8px;border-bottom:1px;border-bottom-style:solid;border-bottom-color:#6a7070;border-radius:0}.pe-selectInput--fancy:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}select:focus+.pe-input_underline{-webkit-transform:scale(1);transform:scale(1)}.pe-select-container-fancy-focus{border:none;padding:0}.pe-select-container-fancy-focus svg{right:0}.pe-select-container-fancy-focus select{padding:8px 0 10px;border:none}.pe-select-container-fancy-focus select:focus{outline:none}.pe-select-container-fancy-focus select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-fancy-focus select:focus::-ms-expand{opacity:0}.pe-select-container-fancy-error{background-color:transparent;-webkit-appearance:none;-moz-appearance:none;padding:0}.pe-select-container-fancy-error svg{right:0}.pe-select-container-fancy-error select{padding:8px 0 10px}.pe-select-container-fancy-error select:focus{outline:none;-webkit-box-shadow:none;box-shadow:none}.pe-select-container-fancy-error select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-fancy-error select::-ms-expand{opacity:0}.pe-selectInput-fancy-error{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;padding-top:8px;border-bottom:1px;border-bottom-style:solid;border-bottom-color:#db0020;border-radius:0}.pe-selectInput-fancy-error:-moz-focusring{color:transparent;text-shadow:0 0 0 #000}select:focus+.pe-inputError_underline{-webkit-transform:scale(1);transform:scale(1)}.pe-select-container-fancy-error-focus{border:none;padding:0}.pe-select-container-fancy-error-focus svg{right:0}.pe-select-container-fancy-error-focus select{padding:8px 0 10px}.pe-select-container-fancy-error-focus select:focus{outline:none}.pe-select-container-fancy-error-focus select:focus::-ms-value{background:transparent;color:#222}.pe-select-container-fancy-error-focus select:focus::-ms-expand{opacity:0}.pe-select-container-fancy-disabled{background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}.pe-select-container-fancy-disabled svg{right:0;fill:#c7c7c7}.pe-select-container-fancy-disabled select{padding:8px 0 10px;color:#c7c7c7;border-bottom:4px;border-bottom-style:solid;border-bottom-color:#c7c7c7}.pe-select-container-fancy-disabled select::-ms-expand{opacity:0}.pe-selectInput-fancy-disabled{padding-top:8px;border:none;border-radius:0}.pe-select-container-fancy-readonly,.pe-selectInput-fancy-disabled{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}.pe-select-container-fancy-readonly{padding:0}.pe-select-container-fancy-readonly svg{right:0}.pe-select-container-fancy-readonly select{padding:8px 0 10px;-webkit-appearance:none;-moz-appearance:none;appearance:none}.pe-select-container-fancy-readonly select::-ms-expand{opacity:0}.pe-selectInput-fancy-readonly{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;padding-top:8px;border:none;border-radius:0}select:focus+.pe-input_underline-readonly{-webkit-transform:scale(1);transform:scale(1)}.pe-multiLineText,.pe-multiLineText--disabled,.pe-multiLineText--error,.pe-multiLineText--readOnly{border:1px solid #c7c7c7;border-radius:3px;font-size:14px;color:#252525;margin-top:6px;line-height:18px;padding:9px 14px;resize:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.pe-multiLineText--disabled::-webkit-input-placeholder,.pe-multiLineText--error::-webkit-input-placeholder,.pe-multiLineText--readOnly::-webkit-input-placeholder,.pe-multiLineText::-webkit-input-placeholder{font-size:14px;color:#c7c7c7;line-height:18px}.pe-multiLineText--disabled:-moz-placeholder,.pe-multiLineText--disabled::-moz-placeholder,.pe-multiLineText--error:-moz-placeholder,.pe-multiLineText--error::-moz-placeholder,.pe-multiLineText--readOnly:-moz-placeholder,.pe-multiLineText--readOnly::-moz-placeholder,.pe-multiLineText:-moz-placeholder,.pe-multiLineText::-moz-placeholder{font-size:14px;color:#c7c7c7;line-height:18px}.pe-multiLineText--disabled:-ms-input-placeholder,.pe-multiLineText--error:-ms-input-placeholder,.pe-multiLineText--readOnly:-ms-input-placeholder,.pe-multiLineText:-ms-input-placeholder{font-size:14px;color:#c7c7c7;line-height:18px}.pe-multiLineText,.pe-multiLineText--error{background-color:#fff}.pe-multiLineText--error:focus,.pe-multiLineText:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px;border:1px solid #047a9c;resize:both;overflow:auto}.pe-multiLineText--error{background-color:#fff;border:1px solid #db0020}.pe-multiLineText--error:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px;resize:both;overflow:auto;border:1px solid #db0020}.pe-multiLineText--disabled{outline:none;color:#e9e9e9;background-color:#e9e9e9}.pe-multiLineText--readOnly{background-color:#fff;border:none}.pe-multiLineText--readOnly:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.pe-input--error_message,.pe-input--info_message{display:block;padding-top:3px;font-size:12px;line-height:16px;margin-bottom:0}.pe-input--error_message{color:#db0020}.pe-input--info_message{color:#6a7070}.pe-checkbox{position:relative;min-height:16px;margin-bottom:14px}.pe-checkbox:last-child{margin-bottom:0}input[type=checkbox]{opacity:0;position:absolute}input[type=checkbox]~span{left:0;top:0;position:absolute;z-index:0;height:16px;width:16px;border:1px solid #c7c7c7;border-radius:2px}input[type=checkbox]~span svg{opacity:0;height:16px;width:16px}input[type=checkbox]:checked~span svg{opacity:1}input[type=checkbox]:focus~span{border:1px solid #047a9c;border-radius:2px;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}input[type=checkbox]:disabled~span{background-color:#e9e9e9}input[type=checkbox]:disabled~span svg{fill:#c7c7c7}input[type=checkbox]~label{min-height:18px;display:inline-block;padding-left:28px;line-height:18px;position:relative;z-index:2}.pe-radio{position:relative;min-height:16px;margin-bottom:14px}.pe-radio:last-child{margin-bottom:0}input[type=radio]{opacity:0;position:absolute}input[type=radio]+label{display:inline-block;padding-left:28px;line-height:18px}input[type=radio]~span{display:block;-webkit-box-sizing:content-box;box-sizing:content-box;position:absolute;left:0;top:0;height:5px;width:5px;padding:3px 6px 6px 3px;color:#6a7070;border:1px solid #c7c7c7;border-radius:50%;pointer-events:none}input[type=radio]:focus~span{color:#6a7070;border:1px solid #047a9c;border-radius:50%;-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}input[type=radio]:disabled~span{color:#c7c7c7;background-color:#e9e9e9}input[type=radio]~span svg{opacity:0;height:8px;width:8px}input[type=radio]:checked~span svg{opacity:1}.pe-textInput__showButton,.pe-textInput__showButton--disabled,.pe-textInput__showButton--error,.pe-textInput__showButton-basic,.pe-textInput__showButton-basic--disabled{position:relative;background-color:none;text-decoration:none;float:right;padding:2px;border:0;color:#047a9c;background:#fff}.pe-textInput__showButton--disabled:focus,.pe-textInput__showButton--error:focus,.pe-textInput__showButton-basic--disabled:focus,.pe-textInput__showButton-basic:focus,.pe-textInput__showButton:focus{text-decoration:underline}.pe-textInput__showButton,.pe-textInput__showButton--error{margin-top:-28px}.pe-textInput__showButton--disabled{margin-top:-35px;color:#c7c7c7}.pe-textInput__showButton-basic{margin-right:14px;margin-top:-28px}.pe-textInput__showButton-basic--disabled{margin-right:14px;margin-top:-28px;color:#c7c7c7;background-color:#e9e9e9}.pe-fieldset{border:none}.pe-legend{opacity:0}::-ms-reveal{display:none}#pe-icons-sprite{display:none}svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:currentColor}[class^=pe-btn] svg[class$="-18"],[class^=pe-btn] svg[class$="-24"]{vertical-align:middle;margin-left:.5em;margin-bottom:.3em}svg[class$="-18"]{width:18px;height:18px}svg[class$="-24"]{width:24px;height:24px}svg[class$=font-setting-18]{width:24px;height:18px}svg[class$=font-setting-24]{width:32px;height:24px}svg[class$=new-notification-9]{vertical-align:middle;width:10px;height:10px}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}@media (max-width:480px){.animateIn{-webkit-animation-name:slideInUp;animation-name:slideInUp}}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (max-width:480px){.animateOut{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}}:host{width:322px}.datepicker-container{position:relative;min-width:150px;width:322px;font-family:Open Sans,Calibri,Tahoma,sans-serif}@media (-ms-high-contrast:none){.datepicker-container{max-width:350px}}.datepicker-container .datepicker{position:relative}.datepicker-container .datepicker input{border:1px solid #252525}.datepicker-container .datepicker button{bottom:-6px;color:#6a7070;position:absolute;right:-15px;margin:0}.datepicker-container .datepicker input:focus :focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #0b73da;box-shadow:0 0 0 2px #fff,0 0 0 4px #0b73da}.datepicker-container .datepicker svg{fill:#6a7070}.datepicker-container .datepicker .pe-icon-wrapper{bottom:-webkit-calc(50% - 11px);bottom:calc(50% - 11px);color:#6a7070;position:absolute;right:14px}.datepicker-container .datepicker .pe-icon-wrapper button img{top:2px;position:relative}.datepicker-container .calendar-container{margin-top:2px}#inputAriaId{display:none}.error #inputAriaId{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.error input{border:1px solid #db0020}.error .pe-textLabelInput__label{color:#db0020}.gr-input{display:block;margin:4px 0;padding:0 12px;height:36px;color:#252525;border:1px solid #6a7070;background:#fff;border-radius:4px;font-size:em(14);width:100%;max-width:100%}.gr-input:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:em(16);cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn:focus{outline:0}.gr-btn:focus:after{border:2px solid #1977d4;border-radius:8px;content:"";min-width:-webkit-calc(100% + 10px);min-width:auto;padding:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:-3px;left:1px;overflow:visible}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:em(14)}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:em(16)}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.icon-18{width:18px;height:18px}.pe-calendar{-webkit-box-sizing:content-box;box-sizing:content-box;width:280px;min-height:284px;color:#252525;padding:16px 20px 20px;z-index:1;border:1px solid #252525;background-color:#fff;font-size:14px}@media (-ms-high-contrast:none){.pe-calendar{width:308px}}.pe-calendar fieldset{margin:0;border:0;padding:0}.pe-calendar .pe-cal-actions{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:80px}.pe-calendar .pe-cal-title{padding:8px;text-align:left;margin-bottom:8px;width:-webkit-calc(100% - 84px);width:calc(100% - 84px);display:inline-block;float:left;font-size:18px}.pe-calendar .pe-arrowIcons{cursor:pointer;height:40px;color:#6a7070;text-align:center;width:40px;display:inline}.pe-calendar .pe-arrowIcons:hover{color:#252525}.pe-calendar .pe-arrowIcons:focus{color:#252525;outline:none}.pe-calendar .pe-arrowIcons:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:0;width:-webkit-calc(100% + -4px);width:calc(100% + -4px);height:-webkit-calc(100% + -4px);height:calc(100% + -4px);top:0;left:0;z-index:1}.pe-calendar .pe-cal-weekdays div{height:40px;color:#6a7070;line-height:40px;font-size:12px}.pe-calendar .pe-cal-row{display:grid;grid-template-columns:repeat(7,40px);clear:both}.pe-calendar .pe-cal-cell{display:inline-block;vertical-align:top;text-align:center;width:40px}.pe-calendar .pe-cal-cell button{padding:0;border:0;position:relative;cursor:pointer;display:block}.pe-calendar .pe-cal-cell button.currentDate-box{width:36px;height:36px;margin:1px;line-height:36px;border-radius:0;padding:0;border:1px solid #c7c7c7;background:transparent}.pe-calendar .pe-cal-cell button.currentDate-box .pe-cal-cell-square{margin:2px}.pe-calendar .pe-cal-cell button.pe-cal-selected .pe-cal-cell-square{font-weight:600;color:#fff;background-color:#6a7070}.pe-calendar .pe-cal-cell-square{height:32px;width:32px;margin:4px;line-height:32px;border-radius:16px}.pe-calendar .pe-cal-date.pe-cal-past{height:40px;line-height:38px}.pe-calendar .pe-cal-past .pe-cal-cell-square{color:#c7c7c7;cursor:not-allowed}.pe-calendar .secondary-date{border:1px solid #c7c7c7}.pe-calendar.inverse{color:#fff;background-color:#005a70;border:1px solid #005a70}.pe-calendar.inverse .pe-arrowIcons,.pe-calendar.inverse .pe-cal-cell-square,.pe-calendar.inverse .pe-cal-title,.pe-calendar.inverse .pe-cal-weekdays div{color:#fff}.pe-calendar.inverse .pe-arrowIcons:focus,.pe-calendar.inverse .pe-arrowIcons:hover{color:#c7c7c7}.pe-calendar.inverse .pe-cal-date .pe-cal-selected .pe-cal-cell-square{color:#252525;background-color:#fff}.pe-calendar.inverse .pe-cal-past .pe-cal-cell-square{color:#047a9c;cursor:not-allowed}.pe-icon--btn{padding:0;background-color:transparent;border:0;position:relative}.pe-icon-wrapper button{color:#6a7070;cursor:pointer}@media (-ms-high-contrast:none){.pe-icon-wrapper{bottom:-webkit-calc(50% - 12px)!important;bottom:calc(50% - 12px)!important}}.date-selector{background:none}.date-selector:hover{background-color:#e9e9e9;color:#252525;cursor:pointer}.date-selector.selected{background-color:#6a7070;color:#fff}.currentDate-box{border:1px solid #c7c7c7}\n</style>      \n    <div class="datepicker-container">\n        <label class="pe-textLabelInput__label" for="datepicker">Select date (mm/dd/yyyy)</label> \n        <div class="datepicker">\n            <input type="text" class="gr-input" id="datepicker" aria-expanded="false">\n            <span class="pe-icon-wrapper">\n                <button class="gr-btn icon-btn-18 open-calendar" aria-label="open calendar">\n\t\t\t\t               ' + dateIcon + '\n                </button>\n            </span> \n        </div> \n        <p id="inputAriaId" class="pe-input--error_message">' + warningIcon + ' Enter a valid date.</p>\n    </div>\n';

  calendar.innerHTML = '\n        <section class="calendar-container animated animateIn">\n            <div class="pe-calendar ">\n                <fieldset class="pe-inner">\n                    <legend class="pe-cal-title pe-title--small" id="pe-cal-month"></legend>\n                    <div class="pe-cal-actions">\n                        <button class="pe-arrowIcons pe-icon--btn previous" aria-label="Previous month">\n                           <img src="' + prevArrowIcon + '" aria-hidden="true"/>\n                        </button>\n                        <button class="pe-arrowIcons pe-icon--btn next" aria-label="Next month">\n                            <img src="' + nextArrowIcon + '" aria-hidden="true"/>\n                        </button>\n                    </div>\n                    <div class="pe-cal-row pe-cal-weekdays">\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Sunday">S</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Monday">M</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Tuesday">T</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Wednesday">W</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Thursday">T</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Friday">F</abbr>\n                        </div>\n                        <div class="pe-cal-cell pe-label--small pe-cal-cell-dayNames ">\n                            <abbr title="Saturday">S</abbr>\n                        </div>\n                    </div>\n                    <div class="pe-cal-dates"></div>\n                </fieldset>\n            </div>\n        </section>\n';

  row.innerHTML = '\n<div class="pe-cal-row"></div>\n';

  dateTemplate.innerHTML = '\n <div class="pe-cal-cell pe-cal-date">\n      <button class="date-selector pe-cal-cell-square start" data-date="11/01/2018" aria-label="" aria-pressed="false">1</button>\n  </div>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(datepicker, 'pearson-datepicker');

  function getFocusableElements(node) {
    var buttons = node.querySelectorAll('button:not(:disabled)'),
        data = {};
    data.elements = buttons;
    data.firstElement = data.elements[0];
    data.lastElement = data.elements[data.elements.length - 1];
    return data;
  }

  function validateDate(testdate) {
    var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return date_regex.test(testdate);
  }

  // helpers

  var Datepicker = function (_HTMLElement) {
    _inherits(Datepicker, _HTMLElement);

    _createClass(Datepicker, [{
      key: 'returnDateData',


      // this data is fed to the calendar data function and is used to build the calendar object
      value: function returnDateData(date, type) {
        // return the year to populate calendar
        if (this.year !== null && type === undefined) {
          date.year = parseInt(this.year, 10);
        } else if (type !== undefined) {
          date.year = date.year;
        } else {
          date.year = parseInt(moment().format('Y'), 10);
        }

        // return the month to populate calendar
        if (this.month !== null && type === undefined) {
          date.month = parseInt(this.month - 1, 10);
        } else if (type !== undefined) {
          if (type === 'add') {
            date.month = date.month + 1;
            if (date.month === 12) {
              date.month = 0;
              date.year = date.year + 1;
            }
          } else if (type === 'subtract') {
            // date.month = moment().subtract(date.month, 'month').month();
            date.month = date.month - 1;
            if (date.month === -1) {
              date.month = 11;
              date.year = date.year - 1;
            }
          }
        } else {
          date.month = moment().month();
        }

        // return the day to populate calendar
        if (this.day !== null) {
          date.day = this.day;
        } else {
          date.day = moment().format('D');
        }
        return date;
      }

      // builds the calendar object to power the UI

    }, {
      key: 'returnCalendarData',
      value: function returnCalendarData(returnData) {
        var data = returnData,
            date = moment([data.year, data.month]),
            firstDay = moment(date).startOf('M').day('Sunday'),
            endDay = moment(date).endOf('M').day('Saturday'),
            monthRange = moment.range(firstDay, endDay),
            weeks = [],
            calendar = [],
            build = [],
            calendarData = {};

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = monthRange.by('days')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var day = _step.value;

            var number = void 0;
            if (weeks.indexOf(day.week()) === -1 && weeks.indexOf(53) === -1) {
              if (data.month === 11 && day.week() === 1) {
                number = 53;
              } else {
                number = day.week();
              }
              weeks.push(number);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        weeks.forEach(function (week, index) {
          var weeknumber = weeks[index];
          var firstWeekDay = moment(firstDay).week(weeknumber).day('Sunday');
          if (firstWeekDay.isBefore(firstDay)) {
            firstWeekDay = firstDay;
          }
          var lastWeekDay = moment(endDay).year(data.year).week(weeknumber).day('Saturday');
          if (lastWeekDay.isAfter(endDay)) {
            lastWeekDay = endDay;
          }
          var weekRange = moment.range(firstWeekDay, lastWeekDay);
          calendar.push(weekRange);
        });

        calendar.forEach(function (range) {
          var weeks = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = range.by('days')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _day = _step2.value;

              weeks.push(_day);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          build.push(weeks);
        });
        calendarData.month = moment(date).startOf('M').format("MMMM");
        calendarData.year = data.year;
        calendarData.weeks = build;
        return calendarData;
      }

      // builds and renders next month

    }, {
      key: 'nextMonth',
      value: function nextMonth() {
        this.data = this.returnDateData(this.data, 'add');
        this.renderCalendar(this.data);
      }

      // builds and renders previous month

    }, {
      key: 'prevMonth',
      value: function prevMonth() {
        this.data = this.returnDateData(this.data, 'subtract');
        this.renderCalendar(this.data);
      }

      // opens the calendar

    }, {
      key: 'openCalendar',
      value: function openCalendar() {
        this.openState = 'true';
        this.renderCalendar(this.data);
        this.focusOnOpen();
      }

      // closes the calendar

    }, {
      key: 'closeCalendar',
      value: function closeCalendar() {
        this.openState = 'false';
        this.openBtn.focus();
      }

      // builds the calendar template

    }, {
      key: 'buildCalendarContainer',
      value: function buildCalendarContainer() {
        var calendarTemplate = calendar.content.cloneNode(true),
            nextBtn = calendarTemplate.querySelector('.next'),
            prevBtn = calendarTemplate.querySelector('.previous');

        nextBtn.addEventListener('click', this.nextMonth, false);
        prevBtn.addEventListener('click', this.prevMonth, false);

        return calendarTemplate;
      }

      // populates and renders the calendar

    }, {
      key: 'renderCalendar',
      value: function renderCalendar(dateData) {
        var _this2 = this;

        var data = this.returnCalendarData(dateData),
            rowTarget = this.shadowRoot.querySelector('.pe-cal-dates');

        rowTarget.innerHTML = '';

        data.weeks.forEach(function (week, index2) {
          var rowTemplate = row.content.cloneNode(true),
              rows = rowTemplate.querySelector('.pe-cal-row');

          week.forEach(function (days, index) {
            var cellTemplate = dateTemplate.content.cloneNode(true),
                button = cellTemplate.querySelector('button');
            if (days.format('MMMM') === data.month) {
              button.innerHTML = days.format('D');
              button.setAttribute('aria-label', days.format('dddd, MMMM Do YYYY'));
              button.setAttribute('data-date', days.format('L'));
              button.setAttribute('data-index', days.format('D'));
              button.addEventListener('click', function (event) {
                var prevSelected = rowTarget.getElementsByClassName('selected')[0];
                if (prevSelected !== undefined) {
                  prevSelected.classList.remove('selected');
                  prevSelected.setAttribute('aria-pressed', false);
                }
                _this2.selectedState = event.target.getAttribute('data-date');
                event.target.setAttribute('aria-pressed', true);
                event.target.classList.add('selected');
                _this2.invalid = validateDate(_this2.input.value);
                _this2.closeCalendar();
              });
            } else {
              button.remove();
            }

            if (days.format('MMMM') === moment().format('MMMM') && moment().format('D') === days.format('D') && days.format('YYYY') === moment().format('YYYY')) {
              button.parentNode.classList.add('currentDate-box');
              button.setAttribute('aria-label', 'Today ' + days.format('dddd, MMMM Do YYYY'));
            }
            rows.appendChild(cellTemplate);
          });
          rowTarget.appendChild(rowTemplate);
        });
        this.monthYearState = data.month + ' ' + data.year;
        var selectedNode = this.shadowRoot.querySelector('[data-date="' + this.selected + '"]');
        if (selectedNode !== null) {
          selectedNode.classList.add('selected');
        }
      }

      // focus management when calendar is opened

    }, {
      key: 'focusOnOpen',
      value: function focusOnOpen() {
        if (this.selected === null) {
          var currentNode = this.shadowRoot.querySelector('.currentDate-box button');
          if (currentNode !== null) {
            currentNode.focus();
            currentNode.setAttribute('aria-pressed', true);
          }
        } else {
          var selectedNode = this.shadowRoot.querySelector('[data-date="' + this.selected + '"]');
          if (selectedNode !== null) {
            selectedNode.classList.add('selected');
            selectedNode.focus();
            selectedNode.setAttribute('aria-pressed', true);
          }
        }
      }
    }, {
      key: 'open',
      get: function get() {
        return this.getAttribute('open');
      }
    }, {
      key: 'year',
      get: function get() {
        return this.getAttribute('year');
      }
    }, {
      key: 'month',
      get: function get() {
        return this.getAttribute('month');
      }
    }, {
      key: 'day',
      get: function get() {
        return this.getAttribute('day');
      }
    }, {
      key: 'selected',
      get: function get() {
        return this.getAttribute('value');
      }
    }, {
      key: 'monthYearState',
      set: function set(str) {
        this.shadowRoot.querySelector('legend').innerHTML = str;
      }
    }, {
      key: 'openState',
      set: function set(bool) {
        this.setAttribute('open', bool);
      }
    }, {
      key: 'invalid',
      set: function set(bool) {
        var datepicker = this.shadowRoot.querySelector('.datepicker-container'),
            input = datepicker.querySelector('input');
        if (bool === false) {
          datepicker.classList.add('error');
        } else {
          this.selectedState = input.value;
          this.data.month = parseInt(input.value.substring(0, 2) - 1, 10);
          this.data.year = parseInt(input.value.substring(6, 10), 10);
          this.data.day = input.value.substring(3, 5);
          console.log(this.data);
          datepicker.classList.remove('error');
        }
      }
    }, {
      key: 'selectedState',
      set: function set(selected) {
        if (selected !== null) {
          var input = this.shadowRoot.querySelector('input');
          this.setAttribute('value', selected);
          input.value = this.selected;
          this.data.month = parseInt(this.selected.substring(0, 2) - 1, 10);
          this.data.year = parseInt(this.selected.substring(6, 10), 10);
          this.data.day = this.selected.substring(3, 5);
        }
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['open', 'year', 'month', 'day', 'value'];
      }
    }]);

    function Datepicker() {
      _classCallCheck(this, Datepicker);

      var _this = _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this));

      _this.attachShadow({
        mode: 'open'
      });
      var clone = datepicker.content.cloneNode(true);
      _this.openBtn = clone.querySelector('.open-calendar');
      _this.datepicker = clone.querySelector('.datepicker-container');
      _this.input = clone.querySelector('input');
      _this.data = {};
      /** After all this, we can append our clone to the shadowRoot */
      _this.shadowRoot.appendChild(clone);

      _this.returnDateData = _this.returnDateData.bind(_this);
      _this.buildCalendarContainer = _this.buildCalendarContainer.bind(_this);
      _this.returnCalendarData = _this.returnCalendarData.bind(_this);
      _this.nextMonth = _this.nextMonth.bind(_this);
      _this.prevMonth = _this.prevMonth.bind(_this);
      _this.renderCalendar = _this.renderCalendar.bind(_this);
      _this.closeCalendar = _this.closeCalendar.bind(_this);
      _this.openCalendar = _this.openCalendar.bind(_this);
      _this.focusOnOpen = _this.focusOnOpen.bind(_this);
      return _this;
    }

    _createClass(Datepicker, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this3 = this;

        this.setAttribute('open', false);
        this.data = this.returnDateData(this.data);
        this.selectedState = this.selected;
        // opens calendar when down arrow is pushed
        this.input.addEventListener('keydown', function (event) {
          switch (event.keyCode) {
            case 40:
              if (_this3.open === 'false') {
                _this3.openCalendar();
              }
              break;
          }
        });

        this.input.addEventListener('blur', function (event) {
          if (_this3.input.value.length > 0) {
            _this3.invalid = validateDate(_this3.input.value);
          }
        });

        // opens calendar when button is pressed
        this.openBtn.addEventListener('click', function (event) {
          if (_this3.open === 'false') {
            _this3.openCalendar();
          } else {
            _this3.closeCalendar();
          }
        });

        doc.body.addEventListener('click', function (event) {
          console.log(event.target);
        });
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _this4 = this;

        var calendarContainer = this.datepicker.querySelector('.calendar-container'),
            input = this.datepicker.querySelector('input');
        if (name === 'open') {
          if (oldValue !== newValue) {
            if (newValue === 'true') {
              input.setAttribute('aria-expanded', true);
              var calendarTemplate = this.buildCalendarContainer();
              var dates = calendarTemplate.querySelector('.pe-cal-dates');
              this.datepicker.appendChild(calendarTemplate);
              this.monthYearState = moment().month(this.data.month).format('MMMM') + ' ' + this.data.year;

              // closes the calendar if outside the calendar target
              doc.addEventListener('click', function (event) {
                if (_this4.open === 'true') {
                  var target = event.target;
                  do {
                    if (target === _this4) {
                      return;
                    }
                    target = target.parentNode;
                  } while (target);
                  _this4.closeCalendar();
                } else {
                  return false;
                }
              }, true);

              // closes the calendar on escape
              doc.addEventListener('keydown', function (event) {
                switch (event.keyCode) {
                  case 27:
                    _this4.closeCalendar();
                    break;
                }
              });

              // keyboard navigation for accessibility
              dates.addEventListener('keydown', function (event) {
                var nextItem = parseInt(event.target.getAttribute('data-index')),
                    prevItem = parseInt(event.target.getAttribute('data-index')) - 2,
                    nextWeek = parseInt(event.target.getAttribute('data-index')) + 6,
                    prevWeek = parseInt(event.target.getAttribute('data-index')) - 8,
                    previousMonth = _this4.datepicker.querySelector('.previous');

                event.preventDefault();
                event.stopImmediatePropagation();
                switch (event.keyCode) {
                  case 39:
                    // right arrow
                    if (_this4.shadowRoot.activeElement === getFocusableElements(dates).lastElement) {
                      _this4.nextMonth();
                      getFocusableElements(dates).firstElement.focus();
                    } else {
                      if (getFocusableElements(dates).elements[nextItem] !== undefined) {
                        getFocusableElements(dates).elements[nextItem].focus();
                      } else {
                        return;
                      }
                    }
                    break;
                  case 37:
                    // left arrow
                    if (_this4.shadowRoot.activeElement === getFocusableElements(dates).firstElement) {
                      _this4.prevMonth();
                      getFocusableElements(dates).lastElement.focus();
                    } else {
                      if (getFocusableElements(dates).elements[prevItem] !== undefined) {
                        getFocusableElements(dates).elements[prevItem].focus();
                      } else {
                        return;
                      }
                    }
                    break;
                  case 40:
                    //arrow down
                    if (getFocusableElements(dates).elements[nextWeek] !== undefined) {
                      getFocusableElements(dates).elements[nextWeek].focus();
                    } else {
                      _this4.nextMonth();
                      getFocusableElements(dates).firstElement.focus();
                    }
                    break;
                  case 38:
                    // arrow up
                    if (getFocusableElements(dates).elements[prevWeek] !== undefined) {
                      getFocusableElements(dates).elements[prevWeek].focus();
                    } else {
                      _this4.prevMonth();
                      getFocusableElements(dates).lastElement.focus();
                    }
                    break;
                  case 13:
                    // enter
                    event.target.click();
                    break;
                  case 32:
                    // space
                    event.target.click();
                    break;
                  case 33:
                    _this4.prevMonth();
                    getFocusableElements(dates).lastElement.focus();
                    break;
                  case 34:
                    _this4.nextMonth();
                    getFocusableElements(dates).firstElement.focus();
                    break;
                  case 35:
                    getFocusableElements(dates).lastElement.focus();
                    break;
                  case 36:
                    getFocusableElements(dates).firstElement.focus();
                    break;
                  case 27:
                    _this4.closeCalendar();
                    break;
                  case 9:
                    previousMonth.focus();
                    break;
                }
              });
            }
            if (newValue === 'false' && calendarContainer !== null) {
              calendarContainer.remove();
              input.setAttribute('aria-expanded', false);
            }
          }
        }
      }
    }]);

    return Datepicker;
  }(HTMLElement);

  customElements.define('pearson-datepicker', Datepicker);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  var ICON_CLOSE_24 = '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    version="1.1"\n    id="close-24" viewBox="0 0 24 24"\n    class="pe-icon-close-24"\n    aria-hidden="true"\n    focusable="false"\n    style="width:24px;height:24px;"\n  >\n    <path\n      d="M12,10.5857864 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.4142136,12 L18.7071068,17.2928932 C19.0976311,17.6834175 19.0976311,18.3165825 18.7071068,18.7071068 C18.3165825,19.0976311 17.6834175,19.0976311 17.2928932,18.7071068 L12,13.4142136 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.5857864,12 L5.29289322,6.70710678 C4.90236893,6.31658249 4.90236893,5.68341751 5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 L12,10.5857864 Z"\n    ></path>\n  </svg>\n  ';

  var ICON_CHECK_18 = '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    version="1.1"\n    id="success-icon" viewBox="0 0 18 18"\n    class="pe-variant-icon pe-icon-check-18\n    aria-hidden="true"\n    focusable="false"\n    style="width:18px;height:18px;"\n  >\n    <path\n      d="M5.7176,18 C5.4406,18 5.1736,17.885 4.9846,17.68 L0.2666,12.589 C-0.1084,12.184 -0.0854,11.551 0.3206,11.176 C0.7246,10.799 1.3566,10.823 1.7336,11.229 L5.6126,15.415 L16.1826,0.424 C16.5016,-0.028 17.1246,-0.135 17.5756,0.183 C18.0276,0.501 18.1356,1.125 17.8176,1.576 L6.5346,17.576 C6.3616,17.823 6.0846,17.978 5.7836,17.998 C5.7616,17.999 5.7396,18 5.7176,18"\n    ></path>\n  </svg>\n';

  var ICON_WARNING_18 = '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    version="1.1"\n    id="error-icon" viewBox="0 0 18 18"\n    class="pe-variant-icon pe-icon-warning-18\n    aria-hidden="true"\n    focusable="false"\n    style="width:18px;height:18px;"\n  >\n    <path\n      d="M9.9999375,12.4775 C9.9999375,12.7525 9.7749375,12.9775 9.4999375,12.9775 L8.4999375,12.9775 C8.2249375,12.9775 7.9999375,12.7525 7.9999375,12.4775 L7.9999375,7.4775 C7.9999375,7.2025 8.2249375,6.9775 8.4999375,6.9775 L9.4999375,6.9775 C9.7749375,6.9775 9.9999375,7.2025 9.9999375,7.4775 L9.9999375,12.4775 Z M9.9999375,15.4775 C9.9999375,15.7525 9.7749375,15.9775 9.4999375,15.9775 L8.4999375,15.9775 C8.2249375,15.9775 7.9999375,15.7525 7.9999375,15.4775 L7.9999375,14.4775 C7.9999375,14.2025 8.2249375,13.9775 8.4999375,13.9775 L9.4999375,13.9775 C9.7749375,13.9775 9.9999375,14.2025 9.9999375,14.4775 L9.9999375,15.4775 Z M17.9469375,17.2535 L9.4469375,0.2535 C9.2769375,-0.0845 8.7229375,-0.0845 8.5529375,0.2535 L0.0529375,17.2535 C-0.0240625,17.4095 -0.0170625,17.5925 0.0739375,17.7405 C0.1659375,17.8875 0.3269375,17.9775 0.4999375,17.9775 L17.4999375,17.9775 C17.6729375,17.9775 17.8339375,17.8875 17.9259375,17.7405 C18.0169375,17.5925 18.0239375,17.4095 17.9469375,17.2535 L17.9469375,17.2535 Z"\n    ></path>\n  </svg>\n  ';

  template.innerHTML = '\n<style>\n:host{display:block;position:fixed;top:0;left:0;max-width:580px;z-index:1000;padding:20px 28px;margin:36px 24px;font:14px/22px Open Sans,Calibri,Tahoma,sans-serif;background-color:#fff;color:#252525;border:1px solid #c7c7c7;border-left:3px solid transparent;-webkit-box-shadow:0 1px 1px 0 rgba(0,0,0,.16);box-shadow:0 1px 1px 0 rgba(0,0,0,.16);visibility:hidden;opacity:0}:host([type=error]){border-left-color:#db0020}:host([type=info]),:host([type=success]){border-left-color:#19a6a4}:host([level=inline]){position:absolute;top:unset;left:unset;max-width:100vw;margin:0}*{-webkit-box-sizing:inherit;box-sizing:inherit}.content-container{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}::slotted(h2),::slotted(h3),::slotted(p){display:inline;font:14px/22px Open Sans,Calibri,Tahoma,sans-serif;margin:0;font-weight:600}::slotted(h2){margin-right:4px}::slotted(p){font-weight:400}::slotted(a){color:#047a9c;text-decoration:none}::slotted(a:focus),::slotted(a:hover){color:#005a70}::slotted(a:focus){outline:2px solid #0b73da;outline-offset:4px}.pe-icon--btn{position:absolute;width:55px;height:44px;background:none;border:none;color:inherit;cursor:pointer;padding:0;top:5px;right:5px}.pe-icon--btn svg{height:24px;width:24px}.pe-icon--btn:focus{outline:0;border:2px solid #0b73da;border-radius:22px;min-width:55px}.pe-icon--btn::-moz-focus-inner{border:none;padding:0}svg{vertical-align:top;fill:#6a7070;pointer-events:none}svg[class*=check]{fill:#19a6a4}svg[class*=warning]{fill:#db0020}:host([type=error]) svg[class*=warning],:host([type=success]) svg[class*=check]{display:block}.pe-variant-icon{-webkit-box-flex:0;-webkit-flex:0 0 18px;-ms-flex:0 0 18px;flex:0 0 18px;margin-right:12px;display:none}.content{display:inline-block}@media (min-width:480px){:host([level=global]){width:440px}}@media (min-width:768px){:host{margin:32px;padding:24px 36px 24px 28px}:host([level=global]){width:580px}:host([level=inline]){min-width:440px}.pe-icon--btn{padding:8px}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}:host(.fadeIn),:host(.slideInDown){opacity:1;visibility:visible}:host(.fadeOut),:host(.slideOutDown){opacity:0;visibility:hidden}:host([animated].slideInDown){-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}:host([animated].slideOutDown){-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}:host([animated].fadeIn){-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}:host([animated].fadeOut){-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}@media (prefers-reduced-motion){:host([animated]){-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}html[data-prefers-reduced-motion] :host(.animated){-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}\n</style>\n    <div class="content-container">\n    ' + ICON_CHECK_18 + ' ' + ICON_WARNING_18 + '\n      <div class="content">\n        <slot></slot>\n      </div>\n    </div>\n    <button\n      data-action="close-alert"\n      class="pe-icon--btn"\n      aria-label="Close Lorem ipsum dolor sit amet."\n    >\n      ' + ICON_CLOSE_24 + '\n    </button>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-alert');

  var FOCUSABLE_ELEMENTS = 'a:not([disabled]), button:not([disabled])';

  function getFocusableChildren(node) {
    var filter = Array.prototype.filter,
        focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
    return filter.call(focusableChildren, function (child) {
      return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
    });
  }

  function setFocusToFirstChild(node) {
    var focusableChildren = getFocusableChildren(node),
        focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];
    if (focusableChild) {
      focusableChild.focus();
    }
  }

  function constrainToParentWidth(el) {
    var parent = el.parentElement;
    var parentWidth = parent.getBoundingClientRect().width;
    var parentComputedStyle = w.getComputedStyle(parent);
    var parentPaddingWidth = parseInt(parentComputedStyle.getPropertyValue('padding-left').match(/\d+/)[0], 10) + parseInt(parentComputedStyle.getPropertyValue('padding-right').match(/\d+/)[0], 10);

    var parentBorderWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width').match(/\d+/)[0], 10) + parseInt(parentComputedStyle.getPropertyValue('border-right-width').match(/\d+/)[0], 10);

    var elMinWidth = parseInt(w.getComputedStyle(el).getPropertyValue('min-width').match(/\d+/)[0], 10);

    // The width should be equal to the parent's width,
    // minus the padding and border
    var nextElWidth = parentWidth - (parentPaddingWidth + parentBorderWidth);

    if (nextElWidth > w.innerWidth) {
      nextElWidth = w.innerWidth;
    }

    // If that number is less than the min-width,
    if (nextElWidth < elMinWidth) {
      //  use min-width instead
      nextElWidth = elMinWidth;
    }

    el.style.width = nextElWidth + 'px';
  }

  function ensureAttrs(node, attrs) {
    for (var attrName in attrs) {
      var requiredVal = attrs[attrName];
      if (!node.hasAttribute(attrName) || node.getAttribute(attrName) !== requiredVal) {
        node.setAttribute(attrName, requiredVal);
      }
    }
  }

  var Alert = function (_HTMLElement) {
    _inherits(Alert, _HTMLElement);

    _createClass(Alert, [{
      key: 'animated',
      get: function get() {
        return this.hasAttribute('animated') && w.matchMedia('(prefers-reduced-motion: reduce)');
      }
    }, {
      key: 'level',
      get: function get() {
        return this.getAttribute('level');
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }]);

    function Alert() {
      _classCallCheck(this, Alert);

      var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.contentContainer = clone.querySelector('.content-container');
      _this.closeBtn = clone.querySelector('button[data-action="close-alert"]');
      _this.returnNode = doc.querySelector('#' + _this.getAttribute('returnNode')) || doc.querySelector('#' + _this.getAttribute('returnnode')) || doc.activeElement;

      _this.shadowRoot.appendChild(clone);

      _this.onCloseClick = _this.onCloseClick.bind(_this);
      _this.onSlotChange = _this.onSlotChange.bind(_this);
      return _this;
    }

    _createClass(Alert, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var slot = this.shadowRoot.querySelector('slot');

        var a11yAttrs = {};

        if (this.level === 'global') {
          a11yAttrs.role = 'dialog';
          a11yAttrs['aria-labelledby'] = 'alertTitle', a11yAttrs['aria-describedby'] = 'alertDescription alertLink';

          this.openingAnimation = 'slideInDown';
          this.closingAnimation = 'slideOutDown';
        }
        if (this.level === 'inline') {
          constrainToParentWidth(this);

          a11yAttrs.role = this.type === 'error' ? 'alert' : 'status';
          a11yAttrs['aria-live'] = this.type === 'error' ? 'assertive' : 'polite';

          this.openingAnimation = 'fadeIn';
          this.closingAnimation = 'fadeOut';
        }

        ensureAttrs(this, a11yAttrs);

        this.classList.add(this.openingAnimation);

        slot.addEventListener('slotchange', this.onSlotChange);
        this.closeBtn.addEventListener('click', this.onCloseClick);

        if (this.animated) {
          this.addEventListener('animationend', this.onAnimationEnd);
        } else if (this.level === 'global') {
          setFocusToFirstChild(this);
        }
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.returnNode.focus();
      }
    }, {
      key: 'onCloseClick',
      value: function onCloseClick() {
        this.classList.add(this.closingAnimation);

        this.dispatchEvent(new Event('dismiss', {
          bubbles: true
        }));

        if (!this.animated) {
          this.remove();
        }
      }
    }, {
      key: 'onSlotChange',
      value: function onSlotChange(e) {
        var contentNodes = e.target.assignedNodes();
        var node = void 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = contentNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            node = _step.value;

            if (node.id === 'alertTitle') {
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.closeBtn.setAttribute('aria-label', 'Close ' + (node ? node.textContent : 'Alert'));
      }
    }, {
      key: 'onAnimationEnd',
      value: function onAnimationEnd(e) {
        if (this.level === 'global' && e.animationName === this.openingAnimation) {
          setFocusToFirstChild(this);
        }
        if (e.animationName === this.closingAnimation) {
          this.remove();
        }
      }
    }]);

    return Alert;
  }(HTMLElement);

  customElements.define('pearson-alert', Alert);
})(window, document);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) {
  'object' == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function () {
  'use strict';
  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }function t(e, t) {
    if (1 !== e.nodeType) return [];var o = e.ownerDocument.defaultView,
        n = o.getComputedStyle(e, null);return t ? n[t] : n;
  }function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }function n(e) {
    if (!e) return document.body;switch (e.nodeName) {case 'HTML':case 'BODY':
        return e.ownerDocument.body;case '#document':
        return e.body;}var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;return (/(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    );
  }function r(e) {
    return 11 === e ? pe : 10 === e ? se : pe || se;
  }function p(e) {
    if (!e) return document.documentElement;for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }var i = n && n.nodeName;return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }function s(e) {
    var t = e.nodeName;return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
  }function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = o ? e : t,
        i = o ? t : e,
        r = document.createRange();r.setStart(n, 0), r.setEnd(i, 0);var l = r.commonAncestorContainer;if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);var f = d(e);return f.host ? a(f.host, t) : a(e, d(t).host);
  }function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        n = e.nodeName;if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || i;return r[o];
    }return e[o];
  }function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = l(t, 'top'),
        i = l(t, 'left'),
        r = o ? -1 : 1;return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
  }function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        n = 'Left' == o ? 'Right' : 'Bottom';return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }function h(e, t, o, n) {
    return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0);
  }function c(e) {
    var t = e.body,
        o = e.documentElement,
        n = r(10) && getComputedStyle(o);return { height: h('Height', t, o, n), width: h('Width', t, o, n) };
  }function g(e) {
    return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function u(e) {
    var o = {};try {
      if (r(10)) {
        o = e.getBoundingClientRect();var n = l(e, 'top'),
            i = l(e, 'left');o.top += n, o.left += i, o.bottom += n, o.right += i;
      } else o = e.getBoundingClientRect();
    } catch (t) {}var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
        s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {},
        d = s.width || e.clientWidth || p.right - p.left,
        a = s.height || e.clientHeight || p.bottom - p.top,
        f = e.offsetWidth - d,
        h = e.offsetHeight - a;if (f || h) {
      var u = t(e);f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h;
    }return g(p);
  }function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        p = r(10),
        s = 'HTML' === o.nodeName,
        d = u(e),
        a = u(o),
        l = n(e),
        m = t(o),
        h = parseFloat(m.borderTopWidth, 10),
        c = parseFloat(m.borderLeftWidth, 10);i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height });if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var w = parseFloat(m.marginTop, 10),
          y = parseFloat(m.marginLeft, 10);b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y;
    }return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b;
  }function w(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = e.ownerDocument.documentElement,
        n = b(e, o),
        i = ee(o.clientWidth, window.innerWidth || 0),
        r = ee(o.clientHeight, window.innerHeight || 0),
        p = t ? 0 : l(o),
        s = t ? 0 : l(o, 'left'),
        d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r };return g(d);
  }function y(e) {
    var n = e.nodeName;return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || y(o(e));
  }function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;for (var o = e.parentElement; o && 'none' === t(o, 'transform');) {
      o = o.parentElement;
    }return o || document.documentElement;
  }function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        s = { top: 0, left: 0 },
        d = p ? E(e) : a(e, t);if ('viewport' === r) s = w(d, p);else {
      var l;'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;var f = b(l, d, p);if ('HTML' === l.nodeName && !y(d)) {
        var m = c(e.ownerDocument),
            h = m.height,
            g = m.width;s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left;
      } else s = f;
    }i = i || 0;var u = 'number' == typeof i;return s.left += u ? i : i.left || 0, s.top += u ? i : i.top || 0, s.right -= u ? i : i.right || 0, s.bottom -= u ? i : i.bottom || 0, s;
  }function x(e) {
    var t = e.width,
        o = e.height;return t * o;
  }function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf('auto')) return e;var p = v(o, n, r, i),
        s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
        d = Object.keys(s).map(function (e) {
      return fe({ key: e }, s[e], { area: x(s[e]) });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          n = e.height;return t >= o.clientWidth && n >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];return l + (f ? '-' + f : '');
  }function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        i = n ? E(t) : a(t, o);return b(o, i, n);
  }function S(e) {
    var t = e.ownerDocument.defaultView,
        o = t.getComputedStyle(e),
        n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
        i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
        r = { width: e.offsetWidth + i, height: e.offsetHeight + n };return r;
  }function T(e) {
    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function D(e, t, o) {
    o = o.split('-')[0];var n = S(e),
        i = { width: n.width, height: n.height },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
  }function C(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });var n = C(e, function (e) {
      return e[t] === o;
    });return e.indexOf(n);
  }function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n = t['function'] || t.fn;t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t));
    }), o;
  }function k() {
    if (!this.state.isDestroyed) {
      var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
          n = e.enabled;return n && o === t;
    });
  }function H(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;if ('undefined' != typeof document.body.style[r]) return r;
    }return null;
  }function B() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[H('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }function A(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }function F(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, { passive: !0 });var r = n(e);return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }function I() {
    this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
  }function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
  }function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = '';-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n;
    });
  }function V(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];!1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }function q(e, t) {
    var o = e.offsets,
        n = o.popper,
        i = o.reference,
        r = -1 !== ['left', 'right'].indexOf(e.placement),
        p = -1 !== e.placement.indexOf('-'),
        s = i.width % 2 == n.width % 2,
        d = 1 == i.width % 2 && 1 == n.width % 2,
        a = function a(e) {
      return e;
    },
        l = t ? r || p || s ? $ : Z : a,
        f = t ? $ : a;return { left: l(d && !p && t ? n.left - 1 : n.left), top: f(n.top), bottom: f(n.bottom), right: l(n.right) };
  }function K(e, t, o) {
    var n = C(e, function (e) {
      var o = e.name;return o === t;
    }),
        i = !!n && e.some(function (e) {
      return e.name === o && e.enabled && e.order < n.order;
    });if (!i) {
      var r = '`' + t + '`';console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }return i;
  }function z(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }function G(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = ce.indexOf(e),
        n = ce.slice(o + 1).concat(ce.slice(0, o));return t ? n.reverse() : n;
  }function _(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +i[1],
        p = i[2];if (!r) return e;if (0 === p.indexOf('%')) {
      var s;switch (p) {case '%p':
          s = o;break;case '%':case '%r':default:
          s = n;}var d = g(s);return d[t] / 100 * r;
    }if ('vh' === p || 'vw' === p) {
      var a;return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }return r;
  }function X(e, t, o, n) {
    var i = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(n),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(C(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1;return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return _(e, i, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1));
      });
    }), i;
  }function J(e, t) {
    var o,
        n = t.offset,
        i = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = i.split('-')[0];return o = Y(+n) ? [+n, 0] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document, oe = ['Edge', 'Trident', 'Firefox'], ne = 0, ie = 0; ie < oe.length; ie += 1) {
    if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
      ne = 1;break;
    }
  }var i = te && window.Promise,
      re = i ? function (e) {
    var t = !1;return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, ne));
    };
  },
      pe = te && !!(window.MSInputMethodContext && document.documentMode),
      se = te && /MSIE 10/.test(navigator.userAgent),
      de = function de(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      ae = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, o, n) {
      return o && e(t.prototype, o), n && e(t, n), t;
    };
  }(),
      le = function le(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
  },
      fe = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var n in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }return e;
  },
      me = te && /Firefox/i.test(navigator.userAgent),
      he = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      ce = he.slice(3),
      ge = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
      ue = function () {
    function t(o, n) {
      var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};de(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = re(this.update.bind(this)), this.options = fe({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return fe({ name: e }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();var p = this.options.eventsEnabled;p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }return ae(t, [{ key: 'update', value: function value() {
        return k.call(this);
      } }, { key: 'destroy', value: function value() {
        return B.call(this);
      } }, { key: 'enableEventListeners', value: function value() {
        return I.call(this);
      } }, { key: 'disableEventListeners', value: function value() {
        return U.call(this);
      } }]), t;
  }();return ue.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ue.placements = he, ue.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1];if (n) {
            var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = { start: le({}, d, r[d]), end: le({}, d, r[d] + r[a] - p[a]) };e.offsets.popper = fe({}, p, l[n]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: J, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var o = t.boundariesElement || p(e.instance.popper);e.instance.reference === o && (o = p(o));var n = H('transform'),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];i.top = '', i.left = '', i[n] = '';var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);i.top = r, i.left = s, i[n] = d, t.boundaries = a;var l = t.priority,
              f = e.offsets.popper,
              m = { primary: function primary(e) {
              var o = f[e];return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o);
            }, secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = f[o];return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), le({}, o, n);
            } };return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';f = fe({}, f, m[t](e));
          }), e.offsets.popper = f, e;
        }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = Z,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, o) {
          var n;if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;var i = o.element;if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              c = a ? 'bottom' : 'right',
              u = S(i)[l];d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);var b = d[m] + d[l] / 2 - u / 2,
              w = t(e.instance.popper),
              y = parseFloat(w['margin' + f], 10),
              E = parseFloat(w['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - y - E;return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, le(n, m, $(v)), le(n, h, ''), n), e;
        }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              n = e.placement.split('-')[0],
              i = T(n),
              r = e.placement.split('-')[1] || '',
              p = [];switch (t.behavior) {case ge.FLIP:
              p = [n, i];break;case ge.CLOCKWISE:
              p = G(n);break;case ge.COUNTERCLOCKWISE:
              p = G(n, !0);break;default:
              p = t.behavior;}return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;n = e.placement.split('-')[0], i = T(n);var a = e.offsets.popper,
                l = e.offsets.reference,
                f = Z,
                m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                w = -1 !== ['top', 'bottom'].indexOf(n),
                y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);(m || b || y) && (e.flipped = !0, (m || b) && (n = p[d + 1]), y && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'));
          }), e;
        }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;var t = e.offsets.reference,
              o = C(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = C(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = { position: i.position },
              h = q(e, 2 > window.devicePixelRatio || !me),
              c = 'bottom' === o ? 'top' : 'bottom',
              g = 'right' === n ? 'left' : 'right',
              b = H('transform');if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';else {
            var w = 'bottom' == c ? -1 : 1,
                y = 'right' == g ? -1 : 1;m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g;
          }var E = { "x-placement": e.placement };return e.attributes = fe({}, E, e.attributes), e.styles = fe({}, m, e.styles), e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
              p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);return t.setAttribute('x-placement', p), j(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o;
        }, gpuAcceleration: void 0 } } }, ue;
});
//# sourceMappingURL=popper.min.js.map
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      closeIcon = '\n                  <svg focusable="false" class="icon-18" aria-hidden="false" title="close coachmark" role="img" >\n  \t<path d="M9,7.67193143 L12.3968794,4.27505201 C12.7636154,3.908316 13.358212,3.908316 13.724948,4.27505201 C14.091684,4.64178802 14.091684,5.23638457 13.724948,5.60312058 L10.3280686,9 L13.724948,12.3968794 C14.091684,12.7636154 14.091684,13.358212 13.724948,13.724948 C13.358212,14.091684 12.7636154,14.091684 12.3968794,13.724948 L9,10.3280686 L5.60312058,13.724948 C5.23638457,14.091684 4.64178802,14.091684 4.27505201,13.724948 C3.908316,13.358212 3.908316,12.7636154 4.27505201,12.3968794 L7.67193143,9 L4.27505201,5.60312058 C3.908316,5.23638457 3.908316,4.64178802 4.27505201,4.27505201 C4.64178802,3.908316 5.23638457,3.908316 5.60312058,4.27505201 L9,7.67193143 Z" />\n       </svg>\n    ';

  //Styles must be copied from the css file
  // and pasted between the style tags below

  // Other markup should be written after the closing tag.

  template.innerHTML = ' \n    <style>\n.gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:em(16);cursor:pointer;border-radius:22px;position:relative;margin:12px}.gr-btn:hover{color:#252525;border:1px solid #252525}.gr-btn:focus{outline:0}.gr-btn:focus:after{border:2px solid #1977d4;border-radius:22px;content:"";min-width:-webkit-calc(100% + 10px);min-width:calc(100% + 10px);padding:20px 24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:-5px;left:-5px;overflow:visible}.gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.gr-btn.primary:hover{color:#fff;background-color:#035f79}.gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}.gr-btn.attention:hover{background-color:#f7aa00}.gr-btn.small{min-width:128px;padding:7px 20px;font-size:em(14)}.gr-btn.small:focus:after{padding:18px 21px}.gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:em(16)}.gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}.gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}.gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}.gr-btn.no-border{border:0}.gr-btn.no-border:hover{border:0}.gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}.icon-18{width:18px;height:18px}.hidden{display:none!important}:host .coachmark-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;width:280px}:host .coachmark{position:relative;background-color:#caefee;border-radius:2px;width:280px;-webkit-box-shadow:0 3px 7px 0 rgba(0,0,0,.25);box-shadow:0 3px 7px 0 rgba(0,0,0,.25);font-family:Open Sans,Calibri,Tahoma,sans-serif}:host .coachmark.informational .content{background-color:#faebc3}:host .coachmark.generic .content{background-color:#fff}:host .coachmark.generic .coach-link{color:#047a9c}:host .coachmark.bottom-center:after{border-bottom:8px solid #caefee;border-left:8px solid transparent;border-right:8px solid transparent;bottom:-8px;content:"";-webkit-filter:drop-shadow(0 2px 5px #000);filter:drop-shadow(0 2px 5px #000);height:0;left:-webkit-calc(50% - 8px);left:calc(50% - 8px);position:absolute;-webkit-transform:rotate(180deg);transform:rotate(180deg);width:0;z-index:1}:host .coachmark.top-right:after{border-bottom:8px solid #caefee;border-left:8px solid transparent;border-right:8px solid transparent;content:"";height:0;position:absolute;right:32px;top:-8px;width:0;z-index:-1}:host .coachmark.bottom-left:after{border-bottom:8px solid #caefee;border-left:8px solid transparent;border-right:8px solid transparent;bottom:-8px;content:"";-webkit-filter:drop-shadow(0 2px 5px #000);filter:drop-shadow(0 2px 5px #000);height:0;left:32px;position:absolute;-webkit-transform:rotate(180deg);transform:rotate(180deg);width:0;z-index:1}:host .coachmark .title-container .pe-label{font-size:14px;margin:0;font-weight:600}:host .coachmark .content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#caefee;border-radius:2px;color:#252525;padding:20px 24px;position:relative;z-index:2;font-size:14px}:host .coachmark .content p{margin-top:0;line-height:1.5}:host .coachmark .content .title-container{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:.25em}:host .coachmark .coach-link,:host .coachmark .content .title-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}:host .coachmark .coach-link{color:#252525;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-top:1.75em;font-size:14px}:host .coachmark .coach-link:hover{text-decoration:none}:host .coachmark .coach-link:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}:host .coachmark button{background:none;border:none;text-decoration:underline;cursor:pointer}:host .coachmark button.dismiss:not(.coach-link){right:-18px;position:relative;top:-14px;margin:0;min-width:auto;padding:8px 12px;border:0}:host .gr-btn:focus:after{min-width:auto!important}:host .coachmark button.dismiss:not(.coach-link) svg{width:18px;height:18px}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@media screen and (prefers-reduced-motion:reduce){.animated{-webkit-animation:unset!important;animation:unset!important}}.animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}.link-anchor{position:relative;width:0;font-size:.8em;opacity:0;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.anchor-wrapper{border:none}.anchor-wrapper:hover .link-anchor{opacity:1}section h1[id]:focus,section h2[id]:focus,section h3[id]:focus,section h4[id]:focus,section h5[id]:focus{outline:0}p.thin{font-weight:100;margin:0;line-height:1.2em}p.bold{font-weight:900;margin:-5px 0 0}.rel{width:30%;margin:0 auto;position:relative;text-align:center;padding:20px;border:dotted #fff}.popper,.tooltip{position:absolute;color:#000}.style5 .tooltip{background:#1e252b;color:#fff;max-width:200px;width:auto;font-size:.8rem;padding:.5em 1em}.popper .popper__arrow,.tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;border-color:#caefee}.popper .popper__arrow.informational{border-color:#faebc3}.popper .popper__arrow.generic{border-color:#fff}.style5 .tooltip .tooltip-arrow{border-color:#1e252b}.popper[x-placement^=top],.tooltip[x-placement^=top]{margin-bottom:5px}.popper[x-placement^=top] .popper__arrow,.tooltip[x-placement^=top] .tooltip-arrow{border-width:13px 13px 0;border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent;bottom:-13px;left:-webkit-calc(50% - 5px);left:calc(50% - 5px);margin-top:0;margin-bottom:0;-webkit-filter:drop-shadow(0 -1px 5px #222);filter:drop-shadow(0 -1px 5px #222)}.popper[x-placement^=bottom],.tooltip[x-placement^=bottom]{margin-top:5px}.popper[x-placement^=bottom] .popper__arrow,.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 13px 13px;border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;top:-13px;-webkit-filter:drop-shadow(-1px -1px 1px #ddd);filter:drop-shadow(-1px -1px 1px #ddd);left:-webkit-calc(50% - 5px);left:calc(50% - 5px);margin-top:0;margin-bottom:0}.popper[x-placement^=right],.tooltip[x-placement^=right]{margin-left:5px}.popper[x-placement^=right] .popper__arrow,.tooltip[x-placement^=right] .tooltip-arrow{border-width:13px 13px 13px 0;border-left-color:transparent;border-top-color:transparent;border-bottom-color:transparent;left:-13px;top:-webkit-calc(50% - 5px);top:calc(50% - 5px);margin-left:0;margin-right:0;-webkit-filter:drop-shadow(-1px -1px 1px #ddd);filter:drop-shadow(-1px -1px 1px #ddd)}.popper[x-placement^=left],.tooltip[x-placement^=left]{margin-right:5px}.popper[x-placement^=left] .popper__arrow,.tooltip[x-placement^=left] .tooltip-arrow{border-width:13px 0 13px 13px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;right:-13px;top:-webkit-calc(50% - 5px);top:calc(50% - 5px);margin-left:0;margin-right:0;-webkit-filter:drop-shadow(1px 2px 0 #ddd);filter:drop-shadow(1px 2px 0 #ddd)}.no-arrow .popper__arrow{display:none!important}\n</style>\n    <div role="dialog" aria-haspopup="dialog" aria-labelledby="coachmark-title" aria-describedby="coachmark-body" class="coachmark-container popper animated animateIn">\n      <div class="coachmark" aria-haspopup="dialog">\n        <div class="content">\n          <div class="title-container">\n            <h3 id="coachmark-title" class="pe-label pe-label--bold"></h3>\n            \t<button id="close" class="gr-btn icon-btn-18 dismiss" aria-label="Close coachmark">\n        ' + closeIcon + '\n\t</button>\n\t\n          </div>\n          <p id="coachmark-body" class="pe-label"></p>\n           <button id="gotIt" class="coach-link dismiss hidden" href="#">Got it</button>\n        </div> \n      </div>\n      <div class="popper__arrow hidden" x-arrow></div>\n    </div>\n    </div>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-example');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  var Coachmark = function (_HTMLElement) {
    _inherits(Coachmark, _HTMLElement);

    _createClass(Coachmark, [{
      key: 'nextCoach',
      value: function nextCoach() {
        if (this.dismiss) {
          this.destroyCoach();
        } else {
          this.dispatchEvent(new Event('proceed', {
            bubbles: false
          }));
        }
      }
    }, {
      key: 'destroyCoach',
      value: function destroyCoach() {
        this.remove();
        this.closeBtn.removeEventListener('click', this.destroyCoach);
        this.gotItBtn.removeEventListener('click', this.nextCoach);
        this.removeAttribute('dismiss');
        this.removeAttribute('arrow');
        this.removeAttribute('gotit');
        this.dispatchEvent(new Event('dismiss', {
          bubbles: false
        }));
      }
    }, {
      key: 'createPopper',
      value: function createPopper() {
        var reference = document.querySelector(this.referenceId),
            coachMark = this.shadowRoot.querySelector('.coachmark-container'),
            popperInstance = new Popper(reference, coachMark, {
          placement: this.position,
          modifiers: {
            arrow: { enabled: true }
          }
        });
        this.closeBtn.focus();
        this.titleState = this.title;
        this.contentState = this.content;
        return popperInstance;
      }
    }, {
      key: 'dismiss',
      get: function get() {
        return this.hasAttribute('dismiss');
      }
    }, {
      key: 'position',
      get: function get() {
        return this.getAttribute('position');
      }
    }, {
      key: 'title',
      get: function get() {
        return this.getAttribute('title');
      }
    }, {
      key: 'content',
      get: function get() {
        return this.getAttribute('content');
      }
    }, {
      key: 'triggerId',
      get: function get() {
        return this.getAttribute('trigger');
      }
    }, {
      key: 'referenceId',
      get: function get() {
        return this.getAttribute('reference');
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }, {
      key: 'arrow',
      get: function get() {
        return this.hasAttribute('arrow');
      }
    }, {
      key: 'gotIt',
      get: function get() {
        return this.getAttribute('gotit');
      }
    }, {
      key: 'ariaPopup',
      set: function set(id) {
        var button = document.querySelector(id);
        button.setAttribute('aria-haspopup', 'dialog');
      }
    }, {
      key: 'gotItState',
      set: function set(bool) {
        if (bool) {
          this.shadowRoot.querySelector('.coach-link').classList.remove('hidden');
          if (bool.length > 1) {
            this.shadowRoot.querySelector('.coach-link').innerHTML = bool;
          } else {
            this.shadowRoot.querySelector('.coach-link').innerHTML = "Got It";
          }
        } else {
          this.shadowRoot.querySelector('.coach-link').classList.add('hidden');
        }
      }
    }, {
      key: 'arrowState',
      set: function set(bool) {
        if (bool) {
          this.shadowRoot.querySelector('.popper__arrow').classList.remove('hidden');
        } else {
          this.shadowRoot.querySelector('.popper__arrow').classList.add('hidden');
        }
      }
    }, {
      key: 'typeState',
      set: function set(str) {
        if (str === 'informational') {
          this.shadowRoot.querySelector('.coachmark').classList.add('informational');
          this.shadowRoot.querySelector('.popper__arrow').classList.add('informational');
        } else {
          this.shadowRoot.querySelector('.coachmark').classList.remove('informational');
          this.shadowRoot.querySelector('.popper__arrow').classList.remove('informational');
        }

        if (str === 'generic') {
          this.shadowRoot.querySelector('.coachmark').classList.add('generic');
          this.shadowRoot.querySelector('.popper__arrow').classList.add('generic');
        } else {
          this.shadowRoot.querySelector('.coachmark').classList.remove('generic');
          this.shadowRoot.querySelector('.popper__arrow').classList.remove('generic');
        }
      }
    }, {
      key: 'titleState',
      set: function set(str) {
        this.shadowRoot.querySelector('#coachmark-title').innerHTML = str;
      }
    }, {
      key: 'contentState',
      set: function set(str) {
        this.shadowRoot.querySelector('#coachmark-body').innerHTML = str;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['position', 'trigger', 'reference', 'title', 'content', 'type', 'arrow', 'gotit', 'gotittext', 'dismiss'];
      }
    }]);

    function Coachmark() {
      _classCallCheck(this, Coachmark);

      var _this = _possibleConstructorReturn(this, (Coachmark.__proto__ || Object.getPrototypeOf(Coachmark)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true);

      _this.closeBtn = clone.querySelector('.dismiss');
      _this.gotItBtn = clone.querySelector('.coach-link');

      _this.shadowRoot.appendChild(clone);

      _this.createPopper = _this.createPopper.bind(_this);
      _this.nextCoach = _this.nextCoach.bind(_this);
      _this.destroyCoach = _this.destroyCoach.bind(_this);
      return _this;
    }

    _createClass(Coachmark, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
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
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        var trigger = document.querySelector(this.triggerId);
        trigger.focus();
      }
    }]);

    return Coachmark;
  }(HTMLElement);

  customElements.define('pearson-coachmark', Coachmark);
})(window, document);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below

  var ICONS_CHEVRON_BACK_18 = '\n    <svg\n      class="pe-icon--chevron-back-18"\n      aria-hidden="true"\n      focusable="false"\n      style="width:18px;height:18px;"\n    >\n      <path\n        d="M13.749,17.6606035 C14.112,17.2486035 14.076,16.6116035 13.662,16.2436035 L5.509,8.9996035 L13.662,1.7566035 C14.077,1.3896035 14.113,0.752603504 13.749,0.339603504 C13.383,-0.0763964961 12.751,-0.115396496 12.338,0.252603504 L3.338,8.2476035 C3.123,8.4376035 3,8.7126035 3,8.9996035 C3,9.2876035 3.123,9.5616035 3.338,9.7526035 L12.338,17.7476035 C12.751,18.1156035 13.383,18.0766035 13.749,17.6606035"\n      />\n    </svg>\n  ';

  var ICONS_REMOVE_SM_24 = '\n    <svg\n      class="pe-icon--remove-sm-24"\n      aria-hidden="true"\n      focusable="false"\n      style="width:24px;height:24px;"\n    >\n      <path d="M13.4092,11.9999 L17.7082,7.7009 C18.0972,7.3119 18.0972,6.6809 17.7082,6.2919 C17.3192,5.9029 16.6882,5.9029 16.2992,6.2919 L12.0002,10.5909 L7.7012,6.2919 C7.3122,5.9029 6.6812,5.9029 6.2922,6.2919 C5.9022,6.6809 5.9022,7.3119 6.2922,7.7009 L10.5912,11.9999 L6.2922,16.2989 C5.9022,16.6879 5.9022,17.3189 6.2922,17.7079 C6.4862,17.9029 6.7412,17.9999 6.9962,17.9999 C7.2512,17.9999 7.5062,17.9029 7.7012,17.7079 L12.0002,13.4089 L16.2992,17.7079 C16.4932,17.9029 16.7482,17.9999 17.0032,17.9999 C17.2582,17.9999 17.5132,17.9029 17.7082,17.7079 C18.0972,17.3189 18.0972,16.6879 17.7082,16.2989 L13.4092,11.9999 Z"/>\n    </svg>\n  ';

  template.innerHTML = ' \n    <style>\n@-webkit-keyframes slideInRight{0%{right:-320px}to{right:0;visibility:visible}}@keyframes slideInRight{0%{right:-320px}to{right:0;visibility:visible}}@-webkit-keyframes slideOutRight{0%{right:0}to{right:-320px}}@keyframes slideOutRight{0%{right:0}to{right:-320px}}:host(.slideInRight){-webkit-animation-name:slideInRight;animation-name:slideInRight}:host(.slideOutRight){-webkit-animation-name:slideOutRight;animation-name:slideOutRight}:host(.animated){-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (prefers-reduced-motion){:host(.animated){-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;display:block;font-family:14px,18px,Open Sans,Calibri,Tahoma,sans-serif;color:#252525;padding:25px 20px 20px;height:100%;width:320px;top:0;right:-320px;bottom:0;border-left:1px solid #d9d9d9;border-bottom:30px solid #fff;-webkit-box-shadow:0 0 5px 0 #c7c7c7;box-shadow:0 0 5px 0 #c7c7c7;background-color:#fff;z-index:12000}:host(:not(.animated)){visibility:hidden}:host([open]:not(.animated)){visibility:visible;right:0}@media (prefers-reduced-motion){:host(:not([open])){visibility:hidden}:host([open]){visibility:visible;right:0}}:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host button.back,:host button.close{position:absolute;top:15px;right:15px;border:0;cursor:pointer;background:none;height:44px;width:44px}:host button.back{right:auto;width:auto}:host button.back svg{margin-right:1px}::slotted(.title){display:inline-block;margin:0 0 20px}::slotted(.title:focus){-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.content,.header{padding-left:10px;padding-right:10px}.header{border-bottom:1px solid #d9d9d9;height:44px}.content-scroll-wrapper{height:-webkit-calc(100% - 30px);height:calc(100% - 30px);overflow-y:auto}.content{position:relative;margin-top:25px}.pe-icon--btn{position:relative;font-size:inherit;line-height:inherit;font-family:inherit;font-weight:600;padding:0;border:0;background-color:transparent}.pe-icon--btn:focus{outline:0}.pe-icon--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-4px;left:-4px;z-index:1}.pe-icon--btn>*{pointer-events:none}.soft-shadow--bottom{-webkit-box-shadow:0 12px 5px -10px hsla(0,0%,78%,.7);box-shadow:0 12px 5px -10px hsla(0,0%,78%,.7)}svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:#6a7070}svg:not(:root){overflow:hidden}\n    </style>\n    <div id="header" class="header">\n      <slot name="title"></slot>\n    </div>\n    <div class="content-scroll-wrapper">\n      <div id="content" class="content">\n        <slot name="content"></slot>\n      </div>\n    </div>\n    <button\n      type="button"\n      id="drawer-back"\n      class="pe-icon--btn back"\n      data-action="back"\n      style="display:none;"\n    >\n      ' + ICONS_CHEVRON_BACK_18 + ' Back\n    </button>\n    <button\n      type="button"\n      class="pe-icon--btn close"\n      data-action="close"\n      aria-label=""\n    >\n      ' + ICONS_REMOVE_SM_24 + '\n    </button>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-drawer');

  var FOCUSABLE_ELEMENTS = '\n    a[href]:not([tabindex^="-"]):not([inert]),\n    area[href]:not([tabindex^="-"]):not([inert]),\n    input:not([disabled]):not([inert]),\n    select:not([disabled]):not([inert]),\n    textarea:not([disabled]):not([inert]),\n    button:not([disabled]):not([inert]),\n    iframe:not([tabindex^="-"]):not([inert]),\n    audio:not([tabindex^="-"]):not([inert]),\n    video:not([tabindex^="-"]):not([inert]),\n    [contenteditable]:not([tabindex^="-"]):not([inert]),\n    [tabindex]:not([inert])';

  function getDeepActiveElement() {
    var a = doc.activeElement;
    while (a && a.shadowRoot && a.shadowRoot.activeElement) {
      a = a.shadowRoot.activeElement;
    }
    return a;
  }

  function getFocusableChildren(node) {
    var filter = Array.prototype.filter,
        focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
    return filter.call(focusableChildren, function (child) {
      return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
    });
  }

  function setFocusToFirstChild(node) {
    var focusableChildren = getFocusableChildren(node),
        focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];

    if (focusableChild) {
      focusableChild.focus();
    }
  }

  function trapTabKey(e) {
    for (var _len = arguments.length, nodes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      nodes[_key - 1] = arguments[_key];
    }

    var focusableChildren = nodes.reduce(function (acc, n) {
      return acc.concat(getFocusableChildren(n));
    }, []),
        focusedItemIdx = focusableChildren.indexOf(getDeepActiveElement()),
        lastFocusableIdx = focusableChildren.length - 1;

    if (e.shiftKey && focusedItemIdx === 0) {
      focusableChildren[lastFocusableIdx].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
      focusableChildren[0].focus();
      e.preventDefault();
    }
  }

  function animationEnabled() {
    return !w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  var forEach = Array.prototype.forEach;

  var Drawer = function (_HTMLElement) {
    _inherits(Drawer, _HTMLElement);

    _createClass(Drawer, [{
      key: 'activePanelIdx',
      get: function get() {
        if (!this.hasAttribute('activePanelIdx')) {
          return 0;
        }
        return parseInt(this.getAttribute('activePanelIdx'), 10);
      },
      set: function set(newValue) {
        this.setAttribute('activePanelIdx', newValue);
      }
    }, {
      key: 'open',
      get: function get() {
        return this.hasAttribute('open');
      },
      set: function set(newValue) {
        var isOpen = Boolean(newValue);

        if (isOpen) {
          this.setAttribute('open', '');
        } else {
          this.removeAttribute('open');
        }
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['activepanelidx', 'activePanelIdx', 'open'];
      }
    }]);

    function Drawer() {
      _classCallCheck(this, Drawer);

      var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.backBtn = clone.querySelector('#drawer-back');
      _this.closeBtn = clone.querySelector('button[data-action="close"]');

      // TODO: use ID to select these
      _this.header = clone.querySelector('#header');
      _this.scrollWrapper = clone.querySelector('.content-scroll-wrapper');
      _this.content = clone.querySelector('#content');

      _this.shadowRoot.appendChild(clone);

      _this.onContentScroll = _this.onContentScroll.bind(_this);
      _this.onTitleSlotChange = _this.onTitleSlotChange.bind(_this);
      _this.onContentSlotChange = _this.onContentSlotChange.bind(_this);
      _this.onContentClick = _this.onContentClick.bind(_this);
      _this.onWindowClick = _this.onWindowClick.bind(_this);
      _this.onWindowKeydown = _this.onWindowKeydown.bind(_this);
      _this.onanimationend = _this.onAnimationEnd.bind(_this);
      return _this;
    }

    _createClass(Drawer, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
          var isOpen = newValue !== null;
          var isAnimated = this.classList.contains('animated') && animationEnabled();

          if (isAnimated) {
            var prevAnimation = isOpen ? 'slideOutRight' : 'slideInRight';
            var nextAnimation = isOpen ? 'slideInRight' : 'slideOutRight';

            this.classList.add(nextAnimation);
            this.classList.remove(prevAnimation);
          } else {
            this.manageOpenFocus(isOpen);
          }
        }

        // Check for both cases because older browsers do not
        // normalize observed attributes in lowercase
        if (name === 'activepanelidx' || name === 'activePanelIdx') {
          var panelIdx = parseInt(newValue, 10);

          this.showPanel(panelIdx);

          if (panelIdx > 0) {
            this.backBtn.style.display = 'inline-block';
            this.titleNode.style.display = 'none';
          } else {
            this.backBtn.style.display = 'none';
            this.titleNode.style.display = 'inline-block';
          }

          if (panelIdx === 0) {
            this.titleNode.focus();
          } else {
            setFocusToFirstChild(this.panels[panelIdx]);
          }
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        this.trigger = doc.querySelector('[for="' + this.id + '"]');

        var _shadowRoot$querySele = this.shadowRoot.querySelectorAll('slot'),
            _shadowRoot$querySele2 = _slicedToArray(_shadowRoot$querySele, 2),
            titleSlot = _shadowRoot$querySele2[0],
            contentSlot = _shadowRoot$querySele2[1];

        if (!this.open && !this.hasAttribute('aria-hidden')) {
          this.setAttribute('aria-hidden', true);
        }

        titleSlot.addEventListener('slotchange', this.onTitleSlotChange);
        contentSlot.addEventListener('slotchange', this.onContentSlotChange);

        this.backBtn.addEventListener('click', function () {
          return _this2.activePanelIdx = 0;
        });
        this.closeBtn.addEventListener('click', function () {
          return _this2.open = false;
        });
        this.scrollWrapper.addEventListener('scroll', this.onContentScroll);
        this.content.addEventListener('click', this.onContentClick, true);

        this.addEventListener('animationend', this.onAnimationEnd);

        w.addEventListener('click', this.onWindowClick, true);
        w.addEventListener('keydown', this.onWindowKeydown, true);
      }
    }, {
      key: 'diconnectedCallback',
      value: function diconnectedCallback() {
        w.removeEventListener(this.onWindowClick);
        w.removeEventListener(this.onWindowKeydown);
      }
    }, {
      key: 'convertPanelHeadings',
      value: function convertPanelHeadings(headingNode, idx) {
        var headingText = headingNode.textContent;
        if (headingNode.parentNode.dataset.panel === '1') {
          var btnWrapper = '\n          <button\n            class="pe-link--btn"\n            data-action="show"\n            data-panel="' + (idx + 2) + '"\n            style="color:#252525;padding:0;text-align:left;text-decoration:none;"\n          >\n            <span class="pe-label pe-bold" style="pointer-events:none;">' + headingText + '</span>\n          </button>';
          headingNode.innerHTML = btnWrapper;
        } else {
          headingNode.setAttribute('tabindex', '-1');
        }
      }
    }, {
      key: 'showPanel',
      value: function showPanel(panelId) {
        var nextPanel = this.panels[panelId];

        forEach.call(this.panels, function (panel) {
          if (panel !== nextPanel) {
            panel.style.display = 'none';
          }
        });
        nextPanel.style.display = 'block';
      }
    }, {
      key: 'manageOpenFocus',
      value: function manageOpenFocus(isOpen) {
        if (isOpen && this.titleNode) {
          this.removeAttribute('aria-hidden');
          if (this.activePanelIdx === 0) {
            this.titleNode.focus();
          } else {
            setFocusToFirstChild(this.panels[this.activePanelIdx]);
          }
        } else {
          this.trigger.focus();
          this.setAttribute('aria-hidden', 'true');
        }
      }

      /**
       * Decorates the title of the drawer with taonex and adds an aria-label
       * to the close button.
       * @param {Event} e An Event object
       */

    }, {
      key: 'onTitleSlotChange',
      value: function onTitleSlotChange(e) {
        this.titleNode = e.target.assignedNodes()[0];

        this.titleNode.setAttribute('tabindex', '-1');
        this.closeBtn.setAttribute('aria-label', 'Close ' + this.titleNode.textContent.trim());
      }
    }, {
      key: 'onContentSlotChange',
      value: function onContentSlotChange(e) {
        this.contentNode = e.target.assignedNodes()[0];
        this.panels = this.contentNode.querySelectorAll('[data-panel]');
        var detailPanels = Array.prototype.slice.call(this.panels, 1);
        var headings = this.contentNode.querySelectorAll('h3');

        forEach.call(headings, this.convertPanelHeadings);
        forEach.call(detailPanels, function (p) {
          return p.style.display = 'none';
        });
      }
    }, {
      key: 'onContentScroll',
      value: function onContentScroll(e) {
        var scrollTop = e.target.scrollTop;

        if (scrollTop > 31) {
          this.header.classList.add('soft-shadow--bottom');
        }

        if (scrollTop < 31) {
          this.header.classList.remove('soft-shadow--bottom');
        }
      }
    }, {
      key: 'onContentClick',
      value: function onContentClick(e) {
        var target = e.target;
        if (!target.matches('button[data-panel]')) {
          return;
        }

        this.activePanelIdx = parseInt(target.dataset.panel, 10) - 1;
      }
    }, {
      key: 'onWindowClick',
      value: function onWindowClick(e) {
        if (!this.open || e.target === this || this.contains(e.target)) return;

        this.open = false;
      }
    }, {
      key: 'onWindowKeydown',
      value: function onWindowKeydown(e) {
        if (!this.open) {
          return;
        }

        if (e.key === 'Escape') {
          this.open = false;
        }

        if (e.key === 'Tab') {
          trapTabKey(e, this, this.shadowRoot);
        }
      }
    }, {
      key: 'onAnimationEnd',
      value: function onAnimationEnd() {
        this.manageOpenFocus(this.open);
      }
    }]);

    return Drawer;
  }(HTMLElement);

  customElements.define('pearson-drawer', Drawer);
})(window, document);
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

  template.innerHTML = '\n  <style>\n.deep-encapsulation{\n  /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */}.deep-encapsulation *,.deep-encapsulation :after,.deep-encapsulation :before{-webkit-box-sizing:inherit;box-sizing:inherit}.deep-encapsulation html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}.deep-encapsulation body{margin:0}.deep-encapsulation article,.deep-encapsulation aside,.deep-encapsulation footer,.deep-encapsulation header,.deep-encapsulation nav,.deep-encapsulation section{display:block}.deep-encapsulation h1{font-size:2em;margin:.67em 0}.deep-encapsulation figcaption,.deep-encapsulation figure,.deep-encapsulation main{display:block}.deep-encapsulation figure{margin:1em 40px}.deep-encapsulation hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}.deep-encapsulation pre{font-family:monospace,monospace;font-size:1em}.deep-encapsulation a{background-color:transparent;-webkit-text-decoration-skip:objects}.deep-encapsulation a:active,.deep-encapsulation a:hover{outline-width:0}.deep-encapsulation abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.deep-encapsulation b,.deep-encapsulation strong{font-weight:inherit;font-weight:bolder}.deep-encapsulation code,.deep-encapsulation kbd,.deep-encapsulation samp{font-family:monospace,monospace;font-size:1em}.deep-encapsulation dfn{font-style:italic}.deep-encapsulation mark{background-color:#ff0;color:#000}.deep-encapsulation small{font-size:80%}.deep-encapsulation sub,.deep-encapsulation sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.deep-encapsulation sub{bottom:-.25em}.deep-encapsulation sup{top:-.5em}.deep-encapsulation audio,.deep-encapsulation video{display:inline-block}.deep-encapsulation audio:not([controls]){display:none;height:0}.deep-encapsulation img{border-style:none}.deep-encapsulation svg:not(:root){overflow:hidden}.deep-encapsulation button,.deep-encapsulation input,.deep-encapsulation optgroup,.deep-encapsulation select,.deep-encapsulation textarea{font-family:Open Sans,Calibri,Tahoma,sans-serif;font-size:100%;line-height:1.15;margin:0}.deep-encapsulation button,.deep-encapsulation input{overflow:visible}.deep-encapsulation button,.deep-encapsulation select{text-transform:none}.deep-encapsulation [type=reset],.deep-encapsulation [type=submit],.deep-encapsulation button,.deep-encapsulation html [type=button]{-webkit-appearance:button}.deep-encapsulation [type=button]::-moz-focus-inner,.deep-encapsulation [type=reset]::-moz-focus-inner,.deep-encapsulation [type=submit]::-moz-focus-inner,.deep-encapsulation button::-moz-focus-inner{border-style:none;padding:0}.deep-encapsulation [type=button]:-moz-focusring,.deep-encapsulation [type=reset]:-moz-focusring,.deep-encapsulation [type=submit]:-moz-focusring,.deep-encapsulation button:-moz-focusring{outline:1px dotted ButtonText}.deep-encapsulation fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}.deep-encapsulation legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.deep-encapsulation progress{display:inline-block;vertical-align:baseline}.deep-encapsulation textarea{overflow:auto}.deep-encapsulation [type=checkbox],.deep-encapsulation [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}.deep-encapsulation [type=number]::-webkit-inner-spin-button,.deep-encapsulation [type=number]::-webkit-outer-spin-button{height:auto}.deep-encapsulation [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.deep-encapsulation [type=search]::-webkit-search-cancel-button,.deep-encapsulation [type=search]::-webkit-search-decoration{-webkit-appearance:none}.deep-encapsulation ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.deep-encapsulation details,.deep-encapsulation menu{display:block}.deep-encapsulation summary{display:list-item}.deep-encapsulation canvas{display:inline-block}.deep-encapsulation [hidden],.deep-encapsulation template{display:none}.deep-encapsulation html{font-size:.875rem}.deep-encapsulation body{font-family:Open Sans,Calibri,Tahoma,sans-serif;color:#252525}.deep-encapsulation h1,.deep-encapsulation h2,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation h5,.deep-encapsulation h6{margin-top:0;margin-bottom:0}.deep-encapsulation *+h1,.deep-encapsulation *+h2,.deep-encapsulation *+h3,.deep-encapsulation *+h4,.deep-encapsulation *+h5,.deep-encapsulation *+h6{margin-top:20px}.deep-encapsulation h1+h2{margin-top:40px}.deep-encapsulation h2+h3,.deep-encapsulation h3+h4,.deep-encapsulation h4+h5,.deep-encapsulation h5+h6{margin-top:6px}.deep-encapsulation header{margin-bottom:20px}.deep-encapsulation header h1+.subtitle{margin-top:34px}.deep-encapsulation aside h1{font-size:1.25rem}.deep-encapsulation aside h2{font-size:1.1rem}.deep-encapsulation aside h3{font-size:1rem}.deep-encapsulation aside h4,.deep-encapsulation aside h5,.deep-encapsulation aside h6{font-size:.8rem}.deep-encapsulation table{width:100%;max-width:100%;margin-bottom:35px;border-collapse:collapse}.deep-encapsulation table td,.deep-encapsulation table th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left}.deep-encapsulation table thead th{vertical-align:bottom;border-top:0}.deep-encapsulation a{color:#047a9c;text-decoration:underline}.deep-encapsulation a.active,.deep-encapsulation a:active,.deep-encapsulation a:focus,.deep-encapsulation a:hover{color:#005a70;text-decoration:none}.deep-encapsulation a:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.deep-encapsulation abbr,.deep-encapsulation abbr[title]{text-decoration:none}.deep-encapsulation ins:after,.deep-encapsulation ins:before{content:"+"}.deep-encapsulation mark{background:#ffb81c}.deep-encapsulation small{font-size:.85714rem;line-height:1.14286rem}.deep-encapsulation sub,.deep-encapsulation sup{font-size:90%}.deep-encapsulation sub{top:.2rem}.deep-encapsulation sup{top:-.2rem}.deep-encapsulation pre{max-width:100%;overflow-x:auto}.deep-encapsulation code,.deep-encapsulation kbd,.deep-encapsulation pre{font-family:Monaco,Lucida Console,monospace}.deep-encapsulation :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}@font-face{.deep-encapsulation{font-family:Open Sans;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-light.woff) format("woff");font-weight:100;font-style:normal;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-lightitalic.woff) format("woff");font-style:italic;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-regular.woff) format("woff");font-weight:400;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-italic.woff) format("woff");src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibold.woff) format("woff");font-weight:600;src:url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff2) format("woff2"),url(https://unpkg.com/@pearson-components/elements-sdk@1.6.1/build/fonts/opensans-semibolditalic.woff) format("woff")}}.deep-encapsulation .pe-base-fontsize{font-size:.875rem}.deep-encapsulation .pe-fontstack{font-family:Open Sans,Calibri,Tahoma,sans-serif}.deep-encapsulation .pe-copy{font-size:1rem;line-height:1.57143rem;color:#252525}.deep-encapsulation .pe-copy--secondary,.deep-encapsulation .pe-label--secondary{color:#6a7070}.deep-encapsulation .pe-copy--small{font-size:.85714rem;line-height:1.42857rem;color:#252525}.deep-encapsulation .pe-copy--large,.deep-encapsulation .pe-heading-level6,.deep-encapsulation h6,.deep-encapsulation header h5+.subtitle{font-size:1.14286rem;line-height:1.71429rem;color:#252525}.deep-encapsulation .pe-paragraph,.deep-encapsulation p{font-size:1rem;line-height:1.57143rem;margin-bottom:.85714rem;margin-top:0;color:#252525}.deep-encapsulation .pe-paragraph--last{margin-bottom:0;color:#252525}.deep-encapsulation .pe-lead{font-size:1.42857rem;line-height:2rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-page-title{font-size:2.71429rem;line-height:3.71429rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-heading-level1,.deep-encapsulation .pe-page-title--small,.deep-encapsulation h1{font-size:2rem;line-height:2.71429rem;font-weight:lighter;color:#252525}.deep-encapsulation .pe-heading-level3,.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-title,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation header h2+.subtitle,.deep-encapsulation header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400;color:#252525}.deep-encapsulation .pe-heading-level5,.deep-encapsulation .pe-title--small,.deep-encapsulation h5,.deep-encapsulation header h4+.subtitle{font-size:1.28571rem;line-height:1.57143rem;font-weight:400;color:#252525}.deep-encapsulation .pe-heading-level2,.deep-encapsulation .pe-title--large,.deep-encapsulation h2,.deep-encapsulation header h1+.subtitle{font-size:1.71429rem;line-height:2rem;font-weight:400;color:#252525}.deep-encapsulation .pe-page-title--secondary,.deep-encapsulation .pe-title--secondary{color:#6a7070}.deep-encapsulation .pe-label{font-size:1rem;line-height:1.28571rem}.deep-encapsulation .pe-label.pe-label--inverse{color:#fff}.deep-encapsulation .pe-label--secondary.pe-label--inverse{color:#f5f5f5}.deep-encapsulation .pe-label--small{font-size:.85714rem;line-height:1.14286rem}.deep-encapsulation .pe-label--large{font-size:1.14286rem;line-height:1.42857rem}.deep-encapsulation .pe-bold,.deep-encapsulation .pe-label--bold{font-weight:600}.deep-encapsulation .pe-list{margin:12px 0;padding-left:1.85714rem}.deep-encapsulation .pe-list li{font-size:1rem;line-height:1.57143rem;margin-bottom:.42857rem}.deep-encapsulation .pe-list li>ol,.deep-encapsulation .pe-list li>ul{margin-top:.42857rem}.deep-encapsulation .pe-list.pe-styled-lists--ordered{list-style-type:decimal}.deep-encapsulation .pe-list.pe-styled-lists--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists--ordered ol ol{list-style-type:lower-roman}.deep-encapsulation .pe-list.pe-styled-lists--unordered{list-style-type:disc}.deep-encapsulation .pe-list.pe-styled-lists--unordered ul{list-style-type:circle;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists--unordered ul ul{list-style-type:square}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered{list-style-type:decimal;margin-top:0}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered ol{list-style-type:lower-alpha;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists-heading--ordered ol ol{list-style-type:lower-roman}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered{list-style-type:disc;margin-top:0}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered ul{list-style-type:circle;padding-left:1.85714rem}.deep-encapsulation .pe-list.pe-styled-lists-heading--unordered ul ul{list-style-type:square}.deep-encapsulation .pe-list--unstyled{list-style:none;padding-left:0}.deep-encapsulation .pe-list--unstyled ul{padding-left:1.85714rem}.deep-encapsulation .pe-heading-level1,.deep-encapsulation .pe-heading-level2,.deep-encapsulation h1,.deep-encapsulation h2,.deep-encapsulation header h1+.subtitle{margin-bottom:6px}.deep-encapsulation .pe-heading-level3,.deep-encapsulation h3,.deep-encapsulation header h2+.subtitle{font-weight:700;margin-bottom:6px}.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-heading-level5,.deep-encapsulation .pe-heading-level6,.deep-encapsulation h4,.deep-encapsulation h5,.deep-encapsulation h6,.deep-encapsulation header h3+.subtitle,.deep-encapsulation header h4+.subtitle,.deep-encapsulation header h5+.subtitle{margin-bottom:6px}.deep-encapsulation *+[class^=pe-heading-level]{margin-top:20px}.deep-encapsulation .pe-code{font-family:Monaco,Lucida Console,monospace;color:#f5f5f5;font-size:1rem;line-height:1.42857rem;background:#005a70;padding:30px 50px}.deep-encapsulation .pe-code-inline,.deep-encapsulation .pe-kbd{font-family:Monaco,Lucida Console,monospace;background:#e9e9e9;padding:0 4px}.deep-encapsulation #pe-icons-sprite{display:none}.deep-encapsulation svg[class^=pe-icon--]{display:inline-block;vertical-align:top;fill:currentColor}.deep-encapsulation [class^=pe-btn] svg[class$="-18"],.deep-encapsulation [class^=pe-btn] svg[class$="-24"]{vertical-align:middle;margin-left:.5em;margin-bottom:.3em}.deep-encapsulation svg[class$="-18"]{width:18px;height:18px}.deep-encapsulation svg[class$="-24"]{width:24px;height:24px}.deep-encapsulation svg[class$=font-setting-18]{width:24px;height:18px}.deep-encapsulation svg[class$=font-setting-24]{width:32px;height:24px}.deep-encapsulation svg[class$=new-notification-9]{vertical-align:middle;width:10px;height:10px}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large,.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn__cta,.deep-encapsulation .pe-btn__cta--btn_large,.deep-encapsulation .pe-btn__cta--btn_small,.deep-encapsulation .pe-btn__cta--btn_xlarge,.deep-encapsulation .pe-btn__primary,.deep-encapsulation .pe-btn__primary--btn_large,.deep-encapsulation .pe-btn__primary--btn_small,.deep-encapsulation .pe-btn__primary--btn_xlarge,.deep-encapsulation .pe-btn__tertiary,.deep-encapsulation .pe-btn__tertiary--btn_large,.deep-encapsulation .pe-btn__tertiary--btn_small,.deep-encapsulation .pe-btn__tertiary--btn_xlarge{-webkit-box-sizing:border-box;box-sizing:border-box;border:none;display:inline-block;vertical-align:middle;cursor:pointer;height:36px;padding:0 20px;border-radius:36px;font-size:14px;line-height:18px;font-weight:600}.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn__cta--btn_small,.deep-encapsulation .pe-btn__primary--btn_small,.deep-encapsulation .pe-btn__tertiary--btn_small{height:32px;border-radius:32px;padding:0 12px;font-size:14px;line-height:18px}.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn__cta--btn_xlarge,.deep-encapsulation .pe-btn__primary--btn_xlarge,.deep-encapsulation .pe-btn__tertiary--btn_xlarge{height:40px;border-radius:40px;padding:0 20px;font-size:16px;line-height:20px}.deep-encapsulation .pe-icon--btn{padding:0;background-color:transparent;border:0;position:relative}.deep-encapsulation .pe-icon--btn:focus{outline:0}.deep-encapsulation .pe-icon--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link,.deep-encapsulation .pe-link--btn{text-decoration:underline;background-color:transparent;border:0;cursor:pointer;position:relative}.deep-encapsulation .pe-link{color:#047a9c;padding:0}.deep-encapsulation .pe-link:hover{color:#005a70;text-decoration:none}.deep-encapsulation .pe-link:focus{color:#005a70;text-decoration:none;outline:0}.deep-encapsulation .pe-link:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link--btn{color:#047a9c;padding:4px;position:relative}.deep-encapsulation .pe-link--btn:hover{text-decoration:none}.deep-encapsulation .pe-link--btn:focus{text-decoration:none;outline:0}.deep-encapsulation .pe-link--btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:4px;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-link--btn:disabled{color:#6a7070;text-decoration:none;cursor:default}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn,.deep-encapsulation .pe-btn--btn_large,.deep-encapsulation .pe-btn--btn_large:active,.deep-encapsulation .pe-btn--btn_large:hover,.deep-encapsulation .pe-btn:active,.deep-encapsulation .pe-btn:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_large:focus,.deep-encapsulation .pe-btn:focus{color:#505759;background-color:transparent;border:1px solid #c7c7c7;outline:0}.deep-encapsulation .pe-btn--btn_large:focus:after,.deep-encapsulation .pe-btn:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_large:disabled,.deep-encapsulation .pe-btn.pe-btn--disabled,.deep-encapsulation .pe-btn.pe-btn--disabled:hover,.deep-encapsulation .pe-btn:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_large span.btn-overflow,.deep-encapsulation .pe-btn span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btngroup button:first-child{border-top-right-radius:0!important;border-bottom-right-radius:0!important}.deep-encapsulation .pe-btngroup button:last-child{border-top-left-radius:0!important;border-bottom-left-radius:0!important}.deep-encapsulation .pe-btngroup button:not(:first-child):not(:last-child){border-radius:0!important}.deep-encapsulation .pe-btn--btn_small{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn--btn_small,.deep-encapsulation .pe-btn--btn_small:active,.deep-encapsulation .pe-btn--btn_small:focus,.deep-encapsulation .pe-btn--btn_small:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_small:focus{outline:0}.deep-encapsulation .pe-btn--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_small:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn--btn_xlarge{border-radius:22px;text-decoration:none;position:relative;z-index:1}.deep-encapsulation .pe-btn--btn_xlarge,.deep-encapsulation .pe-btn--btn_xlarge:active,.deep-encapsulation .pe-btn--btn_xlarge:focus,.deep-encapsulation .pe-btn--btn_xlarge:hover{color:#505759;background-color:transparent;border:1px solid #c7c7c7}.deep-encapsulation .pe-btn--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn--btn_xlarge:disabled{cursor:default;border:#e9e9e9;color:#c7c7c7;background-color:#e9e9e9;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary,.deep-encapsulation .pe-btn__primary--btn_large{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_large:active,.deep-encapsulation .pe-btn__primary--btn_large:hover,.deep-encapsulation .pe-btn__primary:active,.deep-encapsulation .pe-btn__primary:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_large:focus,.deep-encapsulation .pe-btn__primary:focus{color:#fff;background-color:#005a70;border:1px solid #005a70;outline:0}.deep-encapsulation .pe-btn__primary--btn_large:focus:after,.deep-encapsulation .pe-btn__primary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_large:disabled,.deep-encapsulation .pe-btn__primary.pe-btn--disabled,.deep-encapsulation .pe-btn__primary.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__primary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary--btn_small{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_small:active,.deep-encapsulation .pe-btn__primary--btn_small:focus,.deep-encapsulation .pe-btn__primary--btn_small:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__primary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__primary--btn_xlarge{color:#fff;background-color:#047a9c;border-radius:22px;text-decoration:none;border:1px solid #047a9c;position:relative;z-index:1}.deep-encapsulation .pe-btn__primary--btn_xlarge:active,.deep-encapsulation .pe-btn__primary--btn_xlarge:focus,.deep-encapsulation .pe-btn__primary--btn_xlarge:hover{color:#fff;background-color:#005a70;border:1px solid #005a70}.deep-encapsulation .pe-btn__primary--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__primary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__primary--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__primary--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__primary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__primary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta,.deep-encapsulation .pe-btn__cta--btn_large{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_large:active,.deep-encapsulation .pe-btn__cta--btn_large:hover,.deep-encapsulation .pe-btn__cta:active,.deep-encapsulation .pe-btn__cta:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_large:focus,.deep-encapsulation .pe-btn__cta:focus{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19;outline:0}.deep-encapsulation .pe-btn__cta--btn_large:focus:after,.deep-encapsulation .pe-btn__cta:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_large:disabled,.deep-encapsulation .pe-btn__cta.pe-btn--disabled,.deep-encapsulation .pe-btn__cta.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__cta span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta--btn_small{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_small:active,.deep-encapsulation .pe-btn__cta--btn_small:focus,.deep-encapsulation .pe-btn__cta--btn_small:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__cta--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__cta--btn_xlarge{color:#252525;background-color:#ffb81c;border-radius:22px;text-decoration:none;border:1px solid #ffb81c;position:relative;z-index:1}.deep-encapsulation .pe-btn__cta--btn_xlarge:active,.deep-encapsulation .pe-btn__cta--btn_xlarge:focus,.deep-encapsulation .pe-btn__cta--btn_xlarge:hover{color:#252525;background-color:#ff9a19;border:1px solid #ff9a19}.deep-encapsulation .pe-btn__cta--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__cta--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__cta--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__cta--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__cta--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__cta--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary,.deep-encapsulation .pe-btn__tertiary--btn_large{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_large:active,.deep-encapsulation .pe-btn__tertiary--btn_large:hover,.deep-encapsulation .pe-btn__tertiary:active,.deep-encapsulation .pe-btn__tertiary:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_large:focus,.deep-encapsulation .pe-btn__tertiary:focus{color:#505759;background-color:#ededed;border:1px solid #ededed;outline:0}.deep-encapsulation .pe-btn__tertiary--btn_large:focus:after,.deep-encapsulation .pe-btn__tertiary:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_large.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_large.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_large:disabled,.deep-encapsulation .pe-btn__tertiary.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_large span.btn-overflow,.deep-encapsulation .pe-btn__tertiary span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary--btn_small{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_small:active,.deep-encapsulation .pe-btn__tertiary--btn_small:focus,.deep-encapsulation .pe-btn__tertiary--btn_small:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_small:focus{outline:0}.deep-encapsulation .pe-btn__tertiary--btn_small:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_small.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_small.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_small:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_small span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation .pe-btn__tertiary--btn_xlarge{color:#505759;background-color:#e9e9e9;border-radius:22px;text-decoration:none;border:1px solid #e9e9e9;position:relative;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:active,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:hover{color:#505759;background-color:#ededed;border:1px solid #ededed}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus{outline:0}.deep-encapsulation .pe-btn__tertiary--btn_xlarge:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-btn__tertiary--btn_xlarge.pe-btn--disabled,.deep-encapsulation .pe-btn__tertiary--btn_xlarge.pe-btn--disabled:hover,.deep-encapsulation .pe-btn__tertiary--btn_xlarge:disabled{cursor:default;-webkit-box-shadow:none;box-shadow:none;text-decoration:none}.deep-encapsulation .pe-btn__tertiary--btn_xlarge span.btn-overflow{display:inline-block;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.deep-encapsulation a[class$="--btn_xlarge"],.deep-encapsulation div[class$="--btn_xlarge"]{line-height:40px!important}.deep-encapsulation a[class$="--btn_large"],.deep-encapsulation a[class=pe-btn],.deep-encapsulation a[class=pe-btn__cta],.deep-encapsulation a[class=pe-btn__primary],.deep-encapsulation a[class=pe-btn__tertiary],.deep-encapsulation div[class$="--btn_large"],.deep-encapsulation div[class=pe-btn],.deep-encapsulation div[class=pe-btn__cta],.deep-encapsulation div[class=pe-btn__primary],.deep-encapsulation div[class=pe-btn__tertiary]{line-height:36px!important}.deep-encapsulation a[class$="--btn_small"],.deep-encapsulation div[class$="--btn_small"]{line-height:32px!important}.deep-encapsulation input[class^=pe-btn]:focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}.deep-encapsulation button>*{pointer-events:none}.deep-encapsulation .pe-modal-container{width:475px}.deep-encapsulation .pe-modal-container>.pe-heading-level3,.deep-encapsulation .pe-modal-container>.pe-heading-level4,.deep-encapsulation .pe-modal-container>.pe-title,.deep-encapsulation .pe-modal-container>h3,.deep-encapsulation .pe-modal-container>h4,.deep-encapsulation header .pe-modal-container>h2+.subtitle,.deep-encapsulation header .pe-modal-container>h3+.subtitle{width:100%;text-align:center;padding:20px 0}.deep-encapsulation .pe-file-upload-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:Open Sans,Arial,Helvetica,sans-serif}@media (max-width:768px){.deep-encapsulation .pe-file-upload-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.deep-encapsulation .pe-file-upload-container .file-upload{height:362px;border-radius:6px;border:2px dashed #6a7070;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-image:url(icons/drag.svg);background-repeat:no-repeat;background-position:center 30px;background-size:100px;margin:40px 0}.deep-encapsulation .pe-file-upload-container .file-upload.highlight{border:2px dashed #047a9c;background-color:#e9f9fe;background-image:url(icons/drag-target.svg)}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;width:390px}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .pe-heading-level3,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .pe-heading-level4,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .pe-title,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area h3,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area h4,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area header h2+.subtitle,.deep-encapsulation .pe-file-upload-container .file-upload .drop-area header h3+.subtitle,.deep-encapsulation header .pe-file-upload-container .file-upload .drop-area h2+.subtitle,.deep-encapsulation header .pe-file-upload-container .file-upload .drop-area h3+.subtitle{margin-top:6em}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area button{width:154px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-bottom:35px}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .info{color:#6a7070;font-size:12px;margin:0}.deep-encapsulation .pe-file-upload-container .file-upload .drop-area .text{margin-bottom:16px}.deep-encapsulation .pe-file-upload-container .file-upload-info{display:none;margin-left:2.5em;width:373px;border-left:1px solid #c7c7c7;padding:40px 0 0 2.5em;max-height:410px;overflow:scroll}@media (max-width:768px){.deep-encapsulation .pe-file-upload-container .file-upload-info{border-left:0;padding:0;margin:0;max-height:100%;width:100%}}.deep-encapsulation .pe-file-upload-container .file-upload-info .text{max-width:260px;word-break:break-word}.deep-encapsulation .pe-file-upload-container .file-upload-info .text strong{line-height:1.5}.deep-encapsulation .pe-file-upload-container .progress{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #f5f5f5;padding-bottom:1em;margin-bottom:1em;padding-right:10px}.deep-encapsulation .pe-file-upload-container .indicator,.deep-encapsulation .pe-file-upload-container .progress .group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.deep-encapsulation .pe-file-upload-container .indicator{margin-right:1em;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:50px;width:50px}.deep-encapsulation .pe-file-upload-container .indicator span{position:absolute;font-weight:700;color:#047a9c;font-size:.7em}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.deep-encapsulation .pe-file-upload-container .indicator span{position:relative}}.deep-encapsulation .pe-file-upload-container .indicator img{width:18px}.deep-encapsulation .pe-file-upload-container .text .info{color:#6a7070;font-size:12px;margin:0}.deep-encapsulation .pe-file-upload-container .upload-actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:4px}.deep-encapsulation .pe-file-upload-container .upload-actions button{cursor:pointer;width:40px;height:40px}.deep-encapsulation .pe-file-upload-container .upload-actions button svg{fill:#6a7070}.deep-encapsulation .pe-file-upload-container .upload-title{font-weight:400}.deep-encapsulation .pe-file-upload-container .pe-progress-container{margin-top:1em}.deep-encapsulation .pe-file-upload-container input[type=file]{display:none}.deep-encapsulation .pe-file-upload-container progress-ring{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.deep-encapsulation .pe-file-upload-container progress-ring{display:none}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.deep-encapsulation body:focus,.deep-encapsulation html:focus{outline:none}}.deep-encapsulation .pe-heading-level3,.deep-encapsulation .pe-heading-level4,.deep-encapsulation .pe-title,.deep-encapsulation h3,.deep-encapsulation h4,.deep-encapsulation header h2+.subtitle,.deep-encapsulation header h3+.subtitle{font-size:1.42857rem;line-height:1.85714rem;font-weight:400}.deep-encapsulation :host{font-size:.875em;color:#252525}.alert-title,.deep-encapsulation :host{font-family:Open Sans,Calibri,Tahoma,"sans-serif"}.alert-title{font-size:14px;font-weight:400;top:-12px;position:relative}\n  </style>\n    <upload-modal triggerId titleText="Upload Files" successBtnText="Done" style="display:none">\n    <div class="deep-encapsulation">\n      <div class="pe-file-upload-container">\n        <div id="drop" class="file-upload">\n          <div class="drop-area">\n            <p class="pe-title">Drag files here</p>\n            <p class="text">or</p>\n            <input type="file" name="file" multiple>\n            <button id="attachFiles" class="pe-btn--btn_large" data-action="toggle-footer" type="button">Browse Files</button>\n            <p class="info">Upload up to <span id="maxNumberOfFiles"></span> files.</p>\n            <p class="info">Max file size <span id="maxFileSize"></span></p>\n          </div>\n        </div>\n        <div id="info" class="file-upload-info">\n          <h6 id="uploadTitle" class="upload-title" aria-live="assertive"></h6>\n          <div id="progressContainer" class="pe-progress-container"></div>\n        </div>\n      </div>\n      </div>\n    </upload-modal>\n  ';

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
      animated: true,
      focusOnOpen: true
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
          event.stopImmediatePropagation();
          var target = event.target;
          console.log(target);
          // do {
          //   if (target.tagName === 'BUTTON') {
          //     return;
          //   }
          //   target = target.parentNode;
          // } while (target);

          if (target.classList.contains('remove-file')) {
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template');

  var COPYRIGHT_TEXT = 'Copyright \xA9 1996-' + new Date().getFullYear() + ' Pearson Education Inc. All Rights Reserved.';

  template.innerHTML = ' \n  <style>\n\n.hidden{display:none!important}*{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed;bottom:0;width:inherit;padding:0 1em 24px;font-family:Open Sans,Arial,Helvetica,sans-serif;font-size:14px}:host([theme=dark]) .copyright,:host([theme=dark]) a{color:#fff;border-color:#fff}:host([theme=dark]) li{color:#fff;border-color:#fff}a{color:#047b9c}a:focus,a:hover{color:#005a70;text-decoration:none}ul{margin:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}li{margin-right:.65em;padding-right:.65em;border-right:1px solid #252525}@media (max-width:979px){li{margin-bottom:12px}}@media (max-width:979px){li:last-child{border:0}}.copyright{margin:0;color:#252525}@media (max-width:979px){.copyright{text-align:center}}\n  \n  </style>\n  \n  <ul class="links">\n    <li class="terms"><a href="https://www.pearson.com/us/terms-of-use.html" target="_blank">Terms of Use</a></li>\n    <li class="privacy"><a href="https://www.pearson.com/us/privacy-statement.html" target="_blank">Privacy Policy</a></li>\n    <li class="accessibility hidden"><a href="https://www.pearson.com/us/accessibility.html" target="_blank">Accessibility</a></li>\n    <li class="patent hidden"><a href="https://www.pearson.com/us/patent-notice.html" target="_blank">Patent Notice</a></li>\n    <li class="support hidden"><a href="https://www.pearson.com/us/support.html" target="_blank">Support</a></li>\n  </ul>\n  <p class="copyright">' + COPYRIGHT_TEXT + '</p>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-footer');

  var Footer = function (_HTMLElement) {
    _inherits(Footer, _HTMLElement);

    _createClass(Footer, [{
      key: 'theme',
      get: function get() {
        return this.getAttribute('theme');
      },
      set: function set(theme) {
        this.setAttribute('theme', theme);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['accessibility', 'permissions', 'support', 'theme'];
      }
    }]);

    function Footer() {
      _classCallCheck(this, Footer);

      var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true);

      _this.copyrightElement = clone.querySelector('.copyright');

      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(Footer, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name !== 'theme' && newValue !== null) {
          this.shadowRoot.querySelector('.' + name).classList.remove('hidden');
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (!this.hasAttribute('role') || this.getAttribute('role') !== 'footer') {
          this.setAttribute('role', 'footer');
        }
      }
    }]);

    return Footer;
  }(HTMLElement);

  customElements.define('pearson-footer', Footer);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  template.innerHTML = ' \n    <style>\n\n@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes fadein{0%{opacity:0}to{opacity:1}}@keyframes fadein{0%{opacity:0}to{opacity:1}}.pe-loadingSpinner{width:25px;height:25px;position:relative}.pe-loadingSpinner-container1>div,.pe-loadingSpinner-container2>div{width:4px;height:4px;background-color:#19a6a4;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.6s ease-in-out infinite;animation:bouncedelay 1.6s ease-in-out infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.pe-loadingSpinner .pe-loadingSpinner-container{position:absolute;width:100%;height:100%}.pe-loadingSpinner-container2{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.pe-loadingSpinner-container2 .circle1{-webkit-animation-delay:-1.4s;animation-delay:-1.4s}.pe-loadingSpinner-container1 .circle2{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.pe-loadingSpinner-container2 .circle2{-webkit-animation-delay:-1s;animation-delay:-1s}.pe-loadingSpinner-container1 .circle3{-webkit-animation-delay:-.8s;animation-delay:-.8s}.pe-loadingSpinner-container2 .circle3{-webkit-animation-delay:-.6s;animation-delay:-.6s}.pe-loadingSpinner-container1 .circle4{-webkit-animation-delay:-.4s;animation-delay:-.4s}.pe-loadingSpinner-container2 .circle4{-webkit-animation-delay:-.2s;animation-delay:-.2s}:host,:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host:before{content:"";display:inline-block;height:100%;vertical-align:middle}:host{width:200px;height:70px;padding:0 20px;margin:auto;background:#252525;color:#fff;border-radius:5px;font:14px/18px Open Sans,Calibri,Tahoma,sans-serif}:host,:host .loading-indicator{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}:host .label{margin-left:12px}#loaded-content main{-webkit-animation:fadein 2s;animation:fadein 2s}\n</style>\n    <div class="loading-indicator">\n      <div class="pe-loadingSpinner">\n        <div class="pe-loadingSpinner-container pe-loadingSpinner-container1">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n        </div>\n        <div class="pe-loadingSpinner-container pe-loadingSpinner-container2">\n          <div class="circle1"></div>\n          <div class="circle2"></div>\n          <div class="circle3"></div>\n          <div class="circle4"></div>\n        </div>\n      </div>\n      <span class="label" id="label"></span>\n\t\t</div>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-loader');

  // ARIA attributes (and values) required for accessibility
  var DEFAULT_A11Y_ATTRS = {
    role: 'progressbar',
    'aria-valuemin': '0',
    'aria-valuemax': '100',
    'aria-live': 'polite'
  };

  /**
   * Ensure that the provided node has the attributes in the provided attr collection.
   * @param {HTMLElement} node Element whose attributes we are ensuring
   * @param {Object} attrs Collection of attributes and values to assign to the node
   */
  function ensureAttrs(node, attrs) {
    for (var attrName in attrs) {
      var requiredVal = attrs[attrName];
      if (!node.hasAttribute(attrName) || node.getAttribute(attrName) !== requiredVal) {
        node.setAttribute(attrName, requiredVal);
      }
    }
  }

  var Loader = function (_HTMLElement) {
    _inherits(Loader, _HTMLElement);

    _createClass(Loader, [{
      key: 'loaded',
      get: function get() {
        return this.hasAttribute('loaded');
      },
      set: function set(newValue) {
        var isLoaded = Boolean(newValue);

        if (isLoaded) {
          this.setAttribute('loaded', '');
        } else {
          this.removeAttribute('loaded');
        }
      }
    }, {
      key: 'loadingStateLabel',
      get: function get() {
        return this.getAttribute('loadingStateLabel');
      },
      set: function set(newValue) {
        this.setAttribute('loadingStateLabel', newValue);
      }
    }, {
      key: 'finishedStateLabel',
      get: function get() {
        return this.getAttribute('finishedStateLabel');
      },
      set: function set(newValue) {
        this.setAttribute('finishedStateLabel', newValue);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['loaded'];
      }
    }]);

    function Loader() {
      _classCallCheck(this, Loader);

      var _this = _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.label = clone.querySelector('#label');

      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(Loader, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var loadingStateLabel = this.loadingStateLabel !== null ? this.loadingStateLabel : 'Loading...';
        var finishedStateLabel = this.finishedStateLabel !== null ? this.finishedStateLabel : 'Loaded!';

        var consumerAttrs = {
          loadingStateLabel: loadingStateLabel,
          finishedStateLabel: finishedStateLabel,
          'aria-label': loadingStateLabel
        };

        ensureAttrs(this, Object.assign({}, DEFAULT_A11Y_ATTRS, consumerAttrs));

        this.label.textContent = this.loadingStateLabel;
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _this2 = this;

        if (name === 'loaded') {
          var isLoaded = newValue !== null;
          var newLabel = isLoaded ? this.finishedStateLabel : this.loadingStateLabel;

          ensureAttrs(this, {
            'aria-label': newLabel
          });

          if (this.label.textContent !== newLabel) {
            this.label.textContent = newLabel;
          }

          if (isLoaded) {
            setTimeout(function () {
              _this2.remove();
            }, 250);
          }
        }
      }
    }]);

    return Loader;
  }(HTMLElement);

  customElements.define('pearson-loader', Loader);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var FOCUSABLE_ELEMENTS = '\n    a[href]:not([tabindex^="-"]):not([inert]),\n    area[href]:not([tabindex^="-"]):not([inert]),\n    input:not([disabled]):not([inert]),\n    select:not([disabled]):not([inert]),\n    textarea:not([disabled]):not([inert]),\n    button:not([disabled]):not([inert]),\n    iframe:not([tabindex^="-"]):not([inert]),\n    audio:not([tabindex^="-"]):not([inert]),\n    video:not([tabindex^="-"]):not([inert]),\n    [contenteditable]:not([tabindex^="-"]):not([inert]),\n    [tabindex]:not([tabindex^="-"]):not([inert])',
      TAB_KEY = 9,
      ESCAPE_KEY = 27,
      ICON_CLOSE_24 = '\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        xmlns:xlink="http://www.w3.org/1999/xlink"\n        version="1.1"\n        id="close-24" viewBox="0 0 24 24"\n        class="pe-icon-close-24"\n        aria-hidden="true"\n        focusable="false"\n        style="width:24px;height:24px;"\n      >\n        <path\n          d="M12,10.5857864 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.4142136,12 L18.7071068,17.2928932 C19.0976311,17.6834175 19.0976311,18.3165825 18.7071068,18.7071068 C18.3165825,19.0976311 17.6834175,19.0976311 17.2928932,18.7071068 L12,13.4142136 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.5857864,12 L5.29289322,6.70710678 C4.90236893,6.31658249 4.90236893,5.68341751 5.29289322,5.29289322 C5.68341751,4.90236893 6.31658249,4.90236893 6.70710678,5.29289322 L12,10.5857864 Z"\n        ></path>\n      </svg>\n  ',
      template = doc.createElement('template'),
      overlayTemplate = doc.createElement('template'),
      actionsTemplate = doc.createElement('template');

  function getDeepActiveElement() {
    var a = doc.activeElement;
    while (a && a.shadowRoot && a.shadowRoot.activeElement) {
      a = a.shadowRoot.activeElement;
    }
    return a;
  }

  function getFocusableChildren(node) {
    var filter = Array.prototype.filter,
        focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
    return filter.call(focusableChildren, function (child) {
      return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
    });
  }

  function setFocusToFirstChild(node) {
    var focusableChildren = getFocusableChildren(node),
        focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];
    if (focusableChild) {
      focusableChild.focus();
    }
  }

  function trapTabKey(e) {
    for (var _len = arguments.length, nodes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      nodes[_key - 1] = arguments[_key];
    }

    var focusableChildren = nodes.reduce(function (acc, n) {
      return acc.concat(getFocusableChildren(n));
    }, []),
        focusedItemIdx = focusableChildren.indexOf(getDeepActiveElement()),
        lastFocusableIdx = focusableChildren.length - 1;

    if (e.shiftKey && focusedItemIdx === 0) {
      if (focusableChildren[lastFocusableIdx !== undefined]) {
        focusableChildren[lastFocusableIdx].focus();
        e.preventDefault();
      }
    }

    if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
      if (focusableChildren[0] !== undefined) {
        focusableChildren[0].focus();
        e.preventDefault();
      }
    }
  }

  template.innerHTML = '\n<style>\n@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.fadeIn,.fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}\n.hidden{display:none}.hide-overflow{overflow:hidden}#modalOverlay{width:100%;height:100%;z-index:3;background-color:rgba(37,37,37,.6);position:fixed;top:0;left:0;margin:0;padding:0}[role=dialog]{border:thin solid #000;background-color:#fff;z-index:3;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}button.close[aria-label="Close Dialog"]{position:absolute;top:2px;right:2px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.close img{height:24px;width:24px}.pe-modal-container{width:600px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;font-family:Open Sans,Calibri,Tahoma,sans-serif;height:auto}.pe-modal-container.scroll{height:-webkit-calc(100% - 100px);height:calc(100% - 100px)}@media (max-width:767px){.modal{width:440px}}.pe-modal-container h2{margin:0 0 20px;padding-left:40px;padding-top:40px;padding-right:40px}.pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (max-width:480px){.pe-modal-container h2{font-size:20px}}.pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px;overflow:scroll;height:-webkit-calc(100% - 200px);height:calc(100% - 200px)}.pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}@media (max-width:767px){.pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (max-width:480px){.pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.pe-modal-container .actions button:last-child{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1;margin-right:1em}@media (max-width:480px){.pe-modal-container .actions button:last-child{margin:.5em 0}}.modal-container{position:absolute;width:100%;top:0;height:100%}.modal-container .modal{-webkit-transform:none;transform:none;position:relative;margin:0 auto;top:0;left:0}.elements .gr-btn{border-radius:3px;background-color:#e9e9e9;border:1px solid #c7c7c7;color:#252525}.elements .gr-btn:hover{background-color:#d9d9d9}.elements .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.elements .gr-btn.primary:hover{background:#005a70;border:1px solid #005a70}.elements .gr-btn.icon-btn-18{background-color:transparent;border:0}\n.deep-encapsulation .gr-h2{font-size:20px;line-height:1.5;font-weight:400;margin-top:0}.deep-encapsulation .gr-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;padding:8px 24px;font-size:16px!important;cursor:pointer;border-radius:22px;position:relative;margin:12px}.deep-encapsulation .gr-btn:hover{color:#252525;border:1px solid #252525}.deep-encapsulation .gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}.deep-encapsulation .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.deep-encapsulation .gr-btn.primary:hover{color:#fff;background-color:#035f79}.deep-encapsulation .gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}.deep-encapsulation .gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}.deep-encapsulation .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.deep-encapsulation .fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.deep-encapsulation .fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.deep-encapsulation .slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.deep-encapsulation .slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.deep-encapsulation .fadeIn,.deep-encapsulation .fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}.deep-encapsulation .hidden{display:none}.deep-encapsulation .hide-overflow{overflow:hidden}.deep-encapsulation #modalOverlay{width:100%;height:100%;z-index:3;background-color:rgba(37,37,37,.6);position:fixed;top:0;left:0;margin:0;padding:0}.deep-encapsulation [role=dialog]{border:thin solid #000;background-color:#fff;z-index:3;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.deep-encapsulation button.close[aria-label="Close Dialog"]{position:absolute;top:2px;right:2px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.deep-encapsulation .close img{height:24px;width:24px}.deep-encapsulation .pe-modal-container{width:600px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;font-family:Open Sans,Calibri,Tahoma,sans-serif;height:auto}.deep-encapsulation .pe-modal-container.scroll{height:-webkit-calc(100% - 100px);height:calc(100% - 100px)}@media (max-width:767px){.deep-encapsulation .modal{width:440px}}.deep-encapsulation .pe-modal-container h2{margin:0 0 20px;padding-left:40px;padding-top:40px;padding-right:40px}.deep-encapsulation .pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (max-width:480px){.deep-encapsulation .pe-modal-container h2{font-size:20px}}.deep-encapsulation .pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px;overflow:scroll;height:-webkit-calc(100% - 200px);height:calc(100% - 200px)}.deep-encapsulation .pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}@media (max-width:767px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (max-width:480px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.deep-encapsulation .pe-modal-container .actions button:last-child{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1;margin-right:1em}@media (max-width:480px){.deep-encapsulation .pe-modal-container .actions button:last-child{margin:.5em 0}}.deep-encapsulation .modal-container{position:absolute;width:100%;top:0;height:100%}.deep-encapsulation .modal-container .modal{-webkit-transform:none;transform:none;position:relative;margin:0 auto;top:0;left:0}.deep-encapsulation .elements .gr-btn{border-radius:3px;background-color:#e9e9e9;border:1px solid #c7c7c7;color:#252525}.deep-encapsulation .elements .gr-btn:hover{background-color:#d9d9d9}.deep-encapsulation .elements .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.deep-encapsulation .elements .gr-btn.primary:hover{background:#005a70;border:1px solid #005a70}.deep-encapsulation .elements .gr-btn.icon-btn-18{background-color:transparent;border:0}\n</style>\n\n  <!-- Encapsulated styles for modal-->\n\t<div class="deep-encapsulation">\n\t\t<div class="hidden" id="modalPlaceholder"></div>\n\t\t<div class="pe-modal-container hidden animated slideInDown" id="modal" role="dialog" aria-labelledby="dialogHeading" aria-describedby="dialogDescription" aria-modal="true">\n\t\t\t<h2 id="dialogHeading" class="gr-h2"></h2>\n\t\t\t<div class="modal-body" id="dialogDescription">\n\t\t\t\t<slot></slot>\n\t\t\t</div>\n\t\t\t<button id="closeButton" class="gr-btn icon-btn-18 close modal-close" aria-label="Close Dialog" data-event="cancel">\n\t\t\t\t' + ICON_CLOSE_24 + '\n\t\t\t</button>\n\t\t</div>\n\t</div>\n  ';

  overlayTemplate.innerHTML = '\n  <div class="hidden modal-close animated fadeIn" id="modalOverlay" data-event="cancel" style="opacity:.6"></div>\n  ';

  actionsTemplate.innerHTML = '\n  <div class="actions">\n\t\t<button id="successButton" class="modal-success gr-btn primary" data-event="success">Save</button>\n\t\t<button id="cancelButton" class="modal-cancel gr-btn" data-event="cancel">Cancel</button>\n\t</div>\n  ';

  var Modal = function (_HTMLElement) {
    _inherits(Modal, _HTMLElement);

    _createClass(Modal, [{
      key: 'hideCancel',
      get: function get() {
        return this.hasAttribute('hidecancel');
      }
    }, {
      key: 'hideSuccess',
      get: function get() {
        return this.hasAttribute('hideSuccess');
      }
    }, {
      key: 'triggerId',
      get: function get() {
        return this.getAttribute('triggerid');
      }
    }, {
      key: 'titleText',
      get: function get() {
        return this.getAttribute('titletext');
      }
    }, {
      key: 'successBtnText',
      get: function get() {
        return this.getAttribute('successbtntext');
      }
    }, {
      key: 'cancelBtnText',
      get: function get() {
        return this.getAttribute('cancelbtntext');
      }
    }, {
      key: 'elements',
      get: function get() {
        return this.getAttribute('elements');
      }
    }, {
      key: 'footer',
      get: function get() {
        return this.hasAttribute('footer');
      },
      set: function set(value) {
        var isfooterShown = Boolean(value);
        if (isfooterShown) {
          this.setAttribute('footer', '');
        } else {
          this.removeAttribute('footer');
        }
      }
    }, {
      key: 'openState',
      set: function set(bool) {
        this.setAttribute('open', bool);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['footer', 'elements', 'triggerid', 'titletext', 'successbtntext', 'cancelbtntext', 'hidecancel', 'hidesuccess'];
      }
    }]);

    function Modal() {
      _classCallCheck(this, Modal);

      var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

      _this.attachShadow({ mode: 'open' });

      _this.openModal = _this.openModal.bind(_this);
      _this.closeModal = _this.closeModal.bind(_this);
      _this.bindKeyPress = _this.bindKeyPress.bind(_this);
      _this.maintainFocus = _this.maintainFocus.bind(_this);
      return _this;
    }

    _createClass(Modal, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        var clone = template.content.cloneNode(true),
            overlayClone = overlayTemplate.content.cloneNode(true),
            overlayEntryPoint = clone.querySelector('#modalPlaceholder'),
            title = clone.querySelector('#dialogHeading');

        this.modal = clone.querySelector('#modal');
        this.body = doc.querySelector('body');
        this.main = doc.querySelector('main');
        this.triggerBtn = doc.querySelector('#' + this.triggerId);

        overlayEntryPoint.parentNode.insertBefore(overlayClone, overlayEntryPoint.nextElementSibling);

        overlayEntryPoint.remove();

        if (this.footer) {
          this.renderfooter(clone);
        }

        if (this.titleText !== null) {
          title.innerHTML = this.titleText;
        } else {
          title.innerHTML = 'Modal Title';
        }

        this.triggerBtn.addEventListener('click', this.openModal);
        var eventBtns = clone.querySelectorAll('[data-event]');

        eventBtns.forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            var eventType = e.target.dataset.event;
            _this2.closeModal(eventType);
          });
        });

        this.modal.addEventListener('animationend', function (event) {
          event.stopImmediatePropagation();
          if (event.animationName === 'slideInDown') {
            _this2.maintainFocus();
            _this2.modal.classList.remove('slideInDown');
          }
          if (event.animationName === 'slideOutDown') {
            var overlay = _this2.shadowRoot.querySelector('#modalOverlay');
            _this2.triggerBtn.focus();
            _this2.modal.classList.add('hidden');
            _this2.modal.classList.remove('slideOutDown');
            overlay.classList.add('hidden');
            overlay.classList.remove('fadeOut');
            _this2.triggerBtn.focus();
          }
        });

        doc.addEventListener('keydown', this.bindKeyPress);
        doc.body.addEventListener('focus', this.maintainFocus, true);
        this.shadowRoot.appendChild(clone);
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name) {
        if (name === 'footer' && !this.modal) return;
        if (!this.footer) {
          var actions = this.modal.querySelector('.actions');
          actions.remove();
        }
        if (this.footer) {
          this.renderfooter(this.modal);
        }
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        doc.removeEventListener('keydown', this.bindKeyPress);
        doc.body.removeEventListener('focus', this.maintainFocus);
      }
    }, {
      key: 'openModal',
      value: function openModal(e) {
        var thisButton = e.currentTarget,
            buttonDisabled = thisButton.getAttribute('disabled'),
            overlay = this.shadowRoot.querySelector('#modalOverlay');

        this.openState = true;
        this.setPosition();

        doc.body.style.overflow = 'hidden';
        this.style.display = 'block';

        if (this.elements === 'v1') {
          this.modal.classList.add('elements');
        }

        if (buttonDisabled === null) {
          thisButton.setAttribute('disabled', true);
          this.main.setAttribute('aria-hidden', 'true');
        }

        overlay.classList.remove('hidden', 'fadeOut');
        overlay.classList.add('fadeIn');

        this.modal.classList.remove('hidden', 'slideOutDown');
        this.modal.classList.add('slideInDown');
      }
    }, {
      key: 'closeModal',
      value: function closeModal(eventName) {
        var _this3 = this;

        var overlay = this.shadowRoot.querySelector('#modalOverlay');
        document.body.style.overflow = 'auto';

        this.triggerBtn.removeAttribute('disabled');
        this.main.setAttribute('aria-hidden', 'false');

        this.body.classList.remove('hide-overflow');
        overlay.classList.remove('fadeIn');

        overlay.classList.add('fadeOut');
        this.modal.classList.add('slideOutDown');

        if (this.modal.classList.contains('scroll')) {
          this.modal.classList.remove('scroll');
        }

        setTimeout(function () {
          _this3.dispatchEvent(new Event(eventName, { bubbles: true, composed: true }));
        }, 500);
        this.openState = false;
      }
    }, {
      key: 'maintainFocus',
      value: function maintainFocus() {
        var open = this.getAttribute('open');
        // if the modal is not open, stop the function
        if (!open) return;
        /**
         * The DOM we want to trap focus in. If the consumer passed in
         * focusable children, it's the Light DOM; else, it's the Shadow DOM.
         */
        var targetDOM = getFocusableChildren(this).length > 0 ? this : this.modal;
        // if neither the Light DOM nor the Shadow DOM within the modal contain
        // the active element, set focus back into the targetDOM.
        if (!this.contains(getDeepActiveElement()) && !this.modal.contains(getDeepActiveElement())) {
          setFocusToFirstChild(targetDOM);
        }
      }
    }, {
      key: 'bindKeyPress',
      value: function bindKeyPress(e) {
        var open = this.getAttribute('open');
        if (open && e.which === ESCAPE_KEY) {
          this.closeModal('cancel');
        }
        if (open && e.which === TAB_KEY) {
          trapTabKey(e, this, this.modal);
        }
      }
    }, {
      key: 'setPosition',
      value: function setPosition() {
        var _this4 = this;

        var modalBody = this.shadowRoot.querySelector('.pe-modal-container');
        this.modal.style.top = window.pageYOffset + 50 + 'px';
        this.modal.style.transform = 'translate(-50%)';
        this.modal.style.marginBottom = '50px';

        this.modal.addEventListener('animationstart', function (event) {
          var modalPosition = _this4.modal.getBoundingClientRect();
          if (modalPosition.height > window.innerHeight) {
            modalBody.classList.add('scroll');
          }
        });
      }
    }, {
      key: 'renderfooter',
      value: function renderfooter(parentNode) {
        var actionsClone = actionsTemplate.content.cloneNode(true),
            cancelBtn = actionsClone.querySelector('#cancelButton'),
            successBtn = actionsClone.querySelector('#successButton');

        if (parentNode) {
          var modalBody = parentNode.querySelector('#dialogDescription');
          modalBody.parentNode.insertBefore(actionsClone, modalBody.nextSibling);
        }
        if (this.cancelBtnText !== null) {
          cancelBtn.innerHTML = this.cancelBtnText;
        }
        if (this.successBtnText !== null) {
          successBtn.innerHTML = this.successBtnText;
        }
        if (this.hideCancel) cancelBtn.remove();
        if (this.hideSuccess) successBtn.remove();
      }
    }]);

    return Modal;
  }(HTMLElement);

  customElements.define('pearson-modal', Modal);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var component = doc.createElement('template'),
      liveRegion = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below
  liveRegion.innerHTML = '\n        <div role="alert" aria-live="polite" class="loading-bar-liveregion" id="liveRegion">\n          <!-- insert loaded confirmation message here, visually hidden region -->\n        </div>\n  ';

  component.innerHTML = ' \n    <style>\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");.loading-bar-liveregion{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}:host .pe-progress-bar{position:relative;padding-bottom:16px}:host .pe-progress-bar .fullbar{width:100%;text-align:center;margin:0;line-height:18px;font-size:14px;font-family:Open Sans,Calibri,Tahoma,sans-serif}:host .pe-progress-bar .fullbar:after{content:"";height:4px;width:100%;position:absolute;bottom:4px;left:0;background-color:#c7c7c7}:host .pe-progress-bar.left-aligned .fullbar{text-align:left}:host .pe-progress-bar.right-aligned .fullbar{text-align:right}:host .pe-progress-bar div[role=progressbar]{height:12px;width:0;position:absolute;left:0;bottom:0;background-color:#19a6a4;-webkit-transition:.2s;transition:.2s;-webkit-animation:shift .2s linear infinite;animation:shift .2s linear infinite}:host .pe-progress-bar.loading div[role=progressbar]{background-image:-webkit-linear-gradient(315deg,#19a6a4 33.33%,#daf0ed 0,#daf0ed 50%,#19a6a4 0,#19a6a4 83.33%,#daf0ed 0,#daf0ed);background-image:linear-gradient(135deg,#19a6a4 33.33%,#daf0ed 0,#daf0ed 50%,#19a6a4 0,#19a6a4 83.33%,#daf0ed 0,#daf0ed);background-size:18px 18px}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@media screen and (prefers-reduced-motion:reduce){:host .pe-progress-bar div[role=progressbar]{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:unset!important;transition:unset!important}}\n    \n    </style>\n     <div class="pe-progress-bar">\n      <p class="fullbar" id="label">0%</p>\n      <div role="progressbar" aria-valuenow="0" aria-valuemax="100" aria-valuemin="0" id="progress"></div>\n  </div>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(component, 'pearson-progress-bar');

  var ProgressBar = function (_HTMLElement) {
    _inherits(ProgressBar, _HTMLElement);

    _createClass(ProgressBar, [{
      key: 'alignment',
      get: function get() {
        return this.getAttribute('alignment');
      }
    }, {
      key: 'label',
      get: function get() {
        return this.getAttribute('label');
      }
    }, {
      key: 'progress',
      get: function get() {
        return parseInt(this.getAttribute('progress'), 10);
      },
      set: function set(newValue) {
        this.setAttribute('progress', newValue);
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      }
    }, {
      key: 'max',
      get: function get() {
        return parseInt(this.getAttribute('max'), 10);
      }
    }, {
      key: 'titleAlignment',
      set: function set(alignment) {
        this.wrapperElement.classList.add(alignment);
      }
    }, {
      key: 'progressBar',
      set: function set(progress) {
        this.loadingBar.setAttribute('aria-valuenow', progress);
        this.loadingBar.setAttribute('style', 'width: ' + progress + '%;');
        if (this.label === null && this.type !== 'static') {
          this.labelElement.innerHTML = progress + '%';
        } else {
          this.labelElement.innerHTML = this.label;
        }
      }
    }, {
      key: 'loaderType',
      set: function set(value) {
        this.wrapperElement.classList.add(value);
      }
    }, {
      key: 'maxValue',
      set: function set(value) {
        this.loadingBar.setAttribute('aria-valuemax', value);
      }
    }, {
      key: 'alertMessage',
      set: function set(message) {
        this.liveRegion.innerHTML = message;
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['progress', 'type', 'max', 'alignment', 'label'];
      }
    }]);

    function ProgressBar() {
      _classCallCheck(this, ProgressBar);

      var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this));

      _this.attachShadow({ mode: 'open' });

      var componentClone = component.content.cloneNode(true);
      var liveRegionClone = liveRegion.content.cloneNode(true);

      _this.liveRegion = liveRegionClone.querySelector('#liveRegion');

      _this.loadingBar = componentClone.querySelector('[role=progressbar]');
      _this.wrapperElement = componentClone.querySelector('.pe-progress-bar');
      _this.labelElement = componentClone.querySelector('#label');

      _this.shadowRoot.appendChild(liveRegionClone);
      _this.shadowRoot.appendChild(componentClone);
      return _this;
    }

    _createClass(ProgressBar, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        if (!this.hasAttribute('progress')) {
          this.setAttribute('progress', '0');
        }

        this.progressBar = this.progress;
        this.loaderType = this.type;
        this.maxValue = this.max;
        this.titleAlignment = this.alignment;
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (this.type !== 'loading') return;

        if (name === 'progress') {
          this.progressBar = newValue;

          if (oldValue === '0') {
            this.alertMessage = 'Starting.';
          }

          if (this.progress % 20 === 0) {
            this.alertMessage = this.progress + ' percent loaded.';
          }

          if (this.progress === 100) {
            this.alertMessage = 'Finished loading.';
            this.dispatchEvent(new Event('loaded', {
              bubbles: true
            }));
          }
        }
      }
    }]);

    return ProgressBar;
  }(HTMLElement);

  customElements.define('pearson-progress-bar', ProgressBar);
})(window, document);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var template = doc.createElement('template');

  template.innerHTML = ' \n    <style>\n    :focus{-webkit-box-shadow:none;box-shadow:none;outline:2px solid #0b73da;outline-offset:4px}:host(.theme--dark) :focus{outline-color:#fff}*,:after,:before,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;font-family:14px,18px,Open Sans,Calibri,Tahoma,sans-serif;background-color:#fff;color:#6a7070}:host(.theme--dark){color:#d9d9d9}.tabs-wrapper{position:relative;background-color:inherit}:host(.theme--dark) .tabs-wrapper{background-color:#005a70}.tabs,ul{list-style-type:none;padding:0;margin:0}.tab,li{display:inline-block}.tab-button{font-family:inherit;font-size:inherit;line-height:1.28571rem;color:inherit;cursor:pointer;display:block;margin:8px 16px;padding:8px 0;text-decoration:none;background:none;border:0;border-bottom:3px solid transparent}.tab-button::-moz-focus-inner{border:0}.tab-button:hover{color:#252525;border-bottom-color:#c7c7c7}.tab-button.active{color:#252525}:host(.theme--dark) .tab-button:hover{color:#fff;border-bottom-color:#d9d9d9}:host(.theme--dark) .tab-button.active{color:#fff}.tab-slider{height:3px;background-color:#19a6a4;position:absolute;padding:0;margin:0 16px;bottom:8px;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}::slotted(.panels){padding:1em}\n    </style>\n    <div id="tabs-wrapper" class="tabs-wrapper">\n      <slot name="tabs"></slot>\n      <div id="slider" class="tab-slider"></div>\n    </div>\n    <slot name="panels"></slot>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-tabs');

  var forEach = Array.prototype.forEach;
  var indexOf = Array.prototype.indexOf;

  var Tabs = function (_HTMLElement) {
    _inherits(Tabs, _HTMLElement);

    _createClass(Tabs, [{
      key: 'activeIdx',
      get: function get() {
        return parseInt(this.getAttribute('activeIdx'), 10);
      },
      set: function set(idx) {
        return this.setAttribute('activeIdx', idx);
      }
    }, {
      key: 'activeTab',
      get: function get() {
        return this.tabs[this.activeIdx];
      }
    }, {
      key: 'activePanel',
      get: function get() {
        return this.panels[this.activeIdx];
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['activeidx', 'activeIdx'];
      }
    }]);

    function Tabs() {
      _classCallCheck(this, Tabs);

      var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      // These are both assigned in a slotChange
      _this.tabList = null;
      _this.tabs = null;
      _this.panels = null;

      _this.tabsWrapper = clone.querySelector('#tabs-wrapper');
      _this.slider = clone.querySelector('#slider');

      _this.shadowRoot.appendChild(clone);

      _this.onTabSlotChange = _this.onTabSlotChange.bind(_this);
      _this.onPanelSlotChange = _this.onPanelSlotChange.bind(_this);
      _this.onShadowRootClick = _this.onShadowRootClick.bind(_this);
      _this.onShadowRootKeydown = _this.onShadowRootKeydown.bind(_this);
      return _this;
    }

    _createClass(Tabs, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (!this.tabs || !this.panels) return;

        if (name === 'activeIdx' || name === 'activeidx') {
          this.positionSlider();
          this.setActiveTab();
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _shadowRoot$querySele = this.shadowRoot.querySelectorAll('slot'),
            _shadowRoot$querySele2 = _slicedToArray(_shadowRoot$querySele, 2),
            tabSlot = _shadowRoot$querySele2[0],
            panelSlot = _shadowRoot$querySele2[1];

        if (!this.hasAttribute('activeIdx')) {
          this.setAttribute('activeIdx', '0');
        }

        this.shadowRoot.addEventListener('click', this.onShadowRootClick, true);
        this.shadowRoot.addEventListener('keydown', this.onShadowRootKeydown, true);

        tabSlot.addEventListener('slotchange', this.onTabSlotChange);
        panelSlot.addEventListener('slotchange', this.onPanelSlotChange);
      }
    }, {
      key: 'initTabs',
      value: function initTabs() {
        var _this2 = this;

        this.tabs = new Array(this.tabList.children.length);

        var upgradeTab = function upgradeTab(tab, idx) {
          var textContent = tab.textContent;

          var isActive = idx === _this2.activeIdx;

          var classList = isActive ? 'tab-button active' : 'tab-button';
          var ariaSelected = isActive ? 'aria-selected="true"' : '';
          var tabIndex = isActive ? '' : 'tabindex="-1"';

          tab.setAttribute('role', 'presentation');
          tab.innerHTML = '\n          <button\n            id="tab-' + idx + '-btn"\n            class="' + classList + '"\n            role="tab"\n            aria-controls="panel-' + idx + '"\n            ' + tabIndex + '\n            ' + ariaSelected + '\n          >\n          ' + textContent + '\n          </button>\n        ';

          // Add tab element to this.tabs list
          // so it can be accessed later.
          _this2.tabs[idx] = tab.firstElementChild;
        };

        this.tabList.setAttribute('role', 'tablist');

        forEach.call(this.tabList.children, upgradeTab);
        this.tabsWrapper.insertBefore(this.tabList, this.slider);
      }
    }, {
      key: 'setActiveTab',
      value: function setActiveTab() {
        var _this3 = this;

        forEach.call(this.tabs, function (tab, idx) {
          var panel = _this3.panels[idx];

          if (idx !== _this3.activeIdx) {
            tab.classList.remove('active');
            tab.removeAttribute('aria-selected');
            tab.setAttribute('tabindex', '-1');
            panel.hidden = true;
          } else {
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            tab.removeAttribute('tabindex');
            panel.hidden = false;
          }
        });

        this.activeTab.focus();
      }
    }, {
      key: 'initPanels',
      value: function initPanels() {
        var _this4 = this;

        forEach.call(this.panels, function (panel, idx) {
          panel.setAttribute('role', 'tabpanel');
          panel.id = 'panel-' + idx;
          panel.hidden = panel !== _this4.activePanel;
        });
      }
    }, {
      key: 'positionSlider',
      value: function positionSlider() {
        var activeTab = this.activeTab;

        var _getBoundingClientRec = this.getBoundingClientRect(),
            hostLeft = _getBoundingClientRec.left;

        var _activeTab$getBoundin = activeTab.getBoundingClientRect(),
            tabLeft = _activeTab$getBoundin.left,
            tabWidth = _activeTab$getBoundin.width;

        var tabMargin = parseInt(w.getComputedStyle(activeTab).getPropertyValue('margin-left').match(/\d+/)[0], 10);

        this.slider.style.left = tabLeft - hostLeft - tabMargin + 'px';
        this.slider.style.width = tabWidth + 'px';
      }
    }, {
      key: 'onTabSlotChange',
      value: function onTabSlotChange(e) {
        var _this5 = this;

        this.tabList = e.target.assignedNodes()[0];
        if (!this.tabList) return;

        this.initTabs();

        // Slightly delay positioning the slider
        // so that initTabs has time to finish
        setTimeout(function () {
          _this5.positionSlider();
        }, 50);
      }
    }, {
      key: 'onPanelSlotChange',
      value: function onPanelSlotChange(e) {
        this.panels = e.target.assignedNodes()[0].querySelectorAll('[data-panel]');

        if (!this.panels) return;

        this.initPanels();
      }
    }, {
      key: 'onShadowRootClick',
      value: function onShadowRootClick(e) {
        if (!e.target.matches('button[id^="tab"]')) return;

        this.activeIdx = indexOf.call(this.tabs, e.target);
      }
    }, {
      key: 'onShadowRootKeydown',
      value: function onShadowRootKeydown(e) {
        if (!e.target.matches('button[id^="tab"]')) return;

        var idxMap = {
          ArrowLeft: this.activeIdx - 1,
          ArrowRight: this.activeIdx + 1
        };

        var nextIdx = e.key in idxMap ? idxMap[e.key] : null;

        if (this.tabs[nextIdx]) {
          e.preventDefault();
          this.activeIdx = nextIdx;
        }
      }
    }]);

    return Tabs;
  }(HTMLElement);

  customElements.define('pearson-tabs', Tabs);
})(window, document);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var SVG_CHECK_SM_18 = '\n    <svg\n      class="pe-icon--check-sm-18"\n      aria-hidden="true"\n      focusable="false"\n      aria-label="on"\n    >\n    <path\n      d="M7.35823097,13.99969 C7.08123097,13.99969 6.81423097,13.88469 6.62523097,13.67969 L4.26623097,11.13469 C3.89123097,10.72869 3.91523097,10.09669 4.32023097,9.72169 C4.72423097,9.34469 5.35623097,9.36869 5.73323097,9.77469 L7.25323097,11.41469 L12.182231,4.42369 C12.501231,3.97269 13.125231,3.86469 13.576231,4.18269 C14.027231,4.50069 14.135231,5.12469 13.817231,5.57569 L8.17523097,13.57569 C8.00223097,13.82269 7.72523097,13.97769 7.42423097,13.99769 C7.40223097,13.99869 7.38023097,13.99969 7.35823097,13.99969"\n    ></path>\n  </svg>\n';

  var SVG_REMOVE_SM_18 = '\n    <svg\n      class="pe-icon--remove-sm-18"\n      aria-hidden="true"\n      focusable="false"\n      aria-label="off"\n    >\n    <path\n      d="M10.4066,9 L13.7086,5.698 C14.0976,5.31 14.0976,4.68 13.7086,4.291 C13.3196,3.903 12.6906,3.903 12.3016,4.291 L8.9996,7.593 L5.6976,4.291 C5.3096,3.903 4.6796,3.903 4.2916,4.291 C3.9026,4.68 3.9026,5.31 4.2916,5.698 L7.5936,9 L4.2916,12.302 C3.9026,12.69 3.9026,13.32 4.2916,13.709 C4.4856,13.903 4.7406,14 4.9946,14 C5.2496,14 5.5036,13.903 5.6976,13.709 L8.9996,10.407 L12.3016,13.709 C12.4966,13.903 12.7506,14 13.0056,14 C13.2596,14 13.5146,13.903 13.7086,13.709 C14.0976,13.32 14.0976,12.69 13.7086,12.302 L10.4066,9 Z"\n    ></path>\n  </svg>\n';

  var template = doc.createElement('template');

  template.innerHTML = '\n  <style>\n  *,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{font-size:24px;position:relative;display:block;width:2em;height:1em;padding:0;border:0;border-radius:22px;margin:4px 0;color:#fff;background-color:#a9a9a9;cursor:pointer;-webkit-transition:background .3s;transition:background .3s;overflow:visible;min-width:50px}:host([on]){background:#047a9c}:host([disabled]){color:#c7c7c7;background-color:#e9e9e9;cursor:not-allowed}:host:before{content:"";background:#fff;display:block;position:absolute;left:3px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:.75em;height:.75em;-webkit-transition:left .3s;transition:left .3s;border-radius:100%}:host([on]):before{left:27px}:host([disabled]):before{background-color:#c7c7c7}:host(:focus){outline:0}:host(:focus):after{content:"";position:absolute;left:50%;top:50%;width:-webkit-calc(100% + 8px);width:calc(100% + 8px);height:-webkit-calc(100% + 8px);height:calc(100% + 8px);border:2px solid #1977d4;border-radius:22px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1}svg{width:.75em;height:.75em;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);fill:currentColor;pointer-events:none}svg[class*=check]{left:5px}svg[class*=remove]{right:5px}:host(:not([on])) svg[class*=check],:host([on]) svg[class*=remove]{display:none}@media (prefers-reduced-motion:reduce){:host,:host:before{-webkit-transition:none!important;transition:none!important}}\t</style>\n  ' + SVG_CHECK_SM_18 + '\n  ' + SVG_REMOVE_SM_18 + '\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-toggle');

  var Toggle = function (_HTMLElement) {
    _inherits(Toggle, _HTMLElement);

    _createClass(Toggle, [{
      key: 'on',
      get: function get() {
        return this.hasAttribute('on');
      },
      set: function set(value) {
        var isOn = Boolean(value);
        if (isOn) {
          this.setAttribute('on', '');
        } else {
          this.removeAttribute('on');
        }
      }
    }, {
      key: 'disabled',
      get: function get() {
        return this.hasAttribute('disabled');
      },
      set: function set(value) {
        var isDisabled = Boolean(value);
        if (isDisabled) {
          this.setAttribute('disabled', '');
        } else {
          this.removeAttribute('disabled');
        }
      }
    }, {
      key: 'name',
      get: function get() {
        return this.getAttribute('name');
      }
    }, {
      key: 'value',
      get: function get() {
        return this.getAttribute('value');
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['on', 'disabled'];
      }
    }]);

    function Toggle() {
      _classCallCheck(this, Toggle);

      var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true);

      _this.shadowRoot.appendChild(clone);

      _this.onToggleClick = _this.onToggleClick.bind(_this);
      _this.onToggleKeyDown = _this.onToggleKeyDown.bind(_this);

      _this.onLabelClick = _this.onLabelClick.bind(_this);

      _this.onDOMLoaded = _this.onDOMLoaded.bind(_this);
      return _this;
    }

    _createClass(Toggle, [{
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var isTruthy = newValue !== null;
        if (name === 'on') {
          this.setAttribute('aria-checked', isTruthy);
        }
        if (name === 'disabled') {
          this.setAttribute('aria-disabled', isTruthy);
          if (isTruthy) {
            this.removeAttribute('tabindex');
            this.blur();
          } else {
            this.setAttribute('tabindex', '0');
          }
        }
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        // Add attributes required for a11y
        if (!this.hasAttribute('tabindex') && !this.disabled) {
          this.setAttribute('tabindex', 0);
        }

        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'switch');
        }

        if (!this.hasAttribute('aria-checked')) {
          this.setAttribute('aria-checked', 'false');
        }

        // Lazily upgrade properties to make sure
        // observed attributes are handled properly
        this.upgradeProperty('on');
        this.upgradeProperty('disabled');

        // Bind listeners to the toggle
        this.addEventListener('click', this.onToggleClick);
        this.addEventListener('keydown', this.onToggleKeyDown);

        // If the consumer did not set an `aria-label`,
        if (!this.hasAttribute('aria-label')) {
          // We need to find an external one
          doc.addEventListener('DOMContentLoaded', this.onDOMLoaded, true);
        }
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        doc.removeEventListener('DOMContentLoaded', this.onDOMLoaded);

        if (this.labelNode) {
          this.labelNode.removeEventListener('click', this.onLabelClick);
        }
      }
    }, {
      key: 'onToggleClick',
      value: function onToggleClick(e) {
        e.stopPropagation();
        this.toggleOn();
      }
    }, {
      key: 'onToggleKeyDown',
      value: function onToggleKeyDown(e) {
        if (e.altKey) {
          return;
        }

        switch (e.key) {
          case 'Enter':
          case ' ':
            e.preventDefault();
            this.click();
            return;
        }
      }

      // When this label is clicked, we want to
      // click on this toggle and focus on it

    }, {
      key: 'onLabelClick',
      value: function onLabelClick(e) {
        e.preventDefault();

        if (this.disabled) return;

        this.click();
        this.focus();
      }
    }, {
      key: 'onDOMLoaded',
      value: function onDOMLoaded() {
        this.labelNode = this.findLabelNode();

        // If the external label does not have an ID, we must
        // ensure that it has one
        if (!this.labelNode.id) this.labelNode.id = this.id + 'label';

        // This toggle must be labelled by the external label node
        this.setAttribute('aria-labelledby', this.labelNode.id);

        // We listen for the external label to be clicked
        this.labelNode.addEventListener('click', this.onLabelClick);
      }
    }, {
      key: 'upgradeProperty',
      value: function upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
          var value = this[prop];
          delete this[prop];
          this[prop] = value;
        }
      }
    }, {
      key: 'toggleOn',
      value: function toggleOn() {
        if (this.disabled) return;

        this.on = !this.on;

        // The toggle should emit a change event
        // for the benefit of consumers
        this.dispatchEvent(new CustomEvent('change', {
          detail: {
            on: this.on
          },
          bubbles: true
        }));
      }

      // Helper function for finding external label node

    }, {
      key: 'findLabelNode',
      value: function findLabelNode() {
        if (this.parentElement.tagName === 'LABEL') {
          return this.parentElement;
        }
        var scope = this.getRootNode();
        return scope.querySelector('label[for="' + this.id + '"]');
      }
    }]);

    return Toggle;
  }(HTMLElement);

  customElements.define('pearson-toggle', Toggle);
})(window, document);