var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      expandIconTemplate = doc.createElement('template'),
      collapseIconTemplate = doc.createElement('template'),
      notificationTemplate = doc.createElement('template'),
      overlayTemplate = doc.createElement('template'),
      menuTemplate = doc.createElement('template'),
      menuButtonTemplate = doc.createElement('template'),
      loginButtonTemplate = doc.createElement('template'),
      whiteLogoTemplate = doc.createElement('template'),
      colorLogoTemplate = doc.createElement('template');

  template.innerHTML = ' \n <style>\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}:host html{line-height:1.15;-webkit-text-size-adjust:100%}:host body{margin:0}:host main{display:block}:host h1{font-size:2em;margin:.67em 0}:host hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}:host pre{font-family:monospace,monospace;font-size:1em}:host a{background-color:transparent}:host abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:host b,:host strong{font-weight:bolder}:host code,:host kbd,:host samp{font-family:monospace,monospace;font-size:1em}:host small{font-size:80%}:host sub,:host sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}:host sub{bottom:-.25em}:host sup{top:-.5em}:host img{border-style:none}:host button,:host input,:host optgroup,:host select,:host textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}:host button,:host input{overflow:visible}:host button,:host select{text-transform:none}:host [type=button],:host [type=reset],:host [type=submit],:host button{-webkit-appearance:button}:host [type=button]::-moz-focus-inner,:host [type=reset]::-moz-focus-inner,:host [type=submit]::-moz-focus-inner,:host button::-moz-focus-inner{border-style:none;padding:0}:host [type=button]:-moz-focusring,:host [type=reset]:-moz-focusring,:host [type=submit]:-moz-focusring,:host button:-moz-focusring{outline:1px dotted ButtonText}:host fieldset{padding:.35em .75em .625em}:host legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}:host progress{vertical-align:baseline}:host textarea{overflow:auto}:host [type=checkbox],:host [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}:host [type=number]::-webkit-inner-spin-button,:host [type=number]::-webkit-outer-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host [type=search]::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:host details{display:block}:host summary{display:list-item}:host [hidden],:host template{display:none}@-webkit-keyframes shift{to{background-position:9px 9px}}@keyframes shift{to{background-position:9px 9px}}@-webkit-keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@keyframes bouncedelay{0%,25%,to{transform:scale(1);-webkit-transform:scale(1)}12.5%{transform:scale(1.5);-webkit-transform:scale(1.5)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-150%,0);transform:translate3d(0,-150%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:0;visibility:hidden}}@-webkit-keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes fadeIn{0%{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@-webkit-keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}@keyframes fadeOut{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}:host .fadeIn,:host .slideInDown{opacity:1!important;visibility:visible!important}:host .fadeOut,:host .slideOutDown{opacity:0;visibility:hidden}:host .slideOutDown{-webkit-animation:slideOutDown .2s ease-in 0s;animation:slideOutDown .2s ease-in 0s}:host .fadeIn{-webkit-animation:fadeIn .3s linear 0s;animation:fadeIn .3s linear 0s}:host .fadeOut{-webkit-animation:fadeOut .2s linear 0s;animation:fadeOut .2s linear 0s}:host .animateIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}:host .animateOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;-webkit-animation-duration:.2s;animation-duration:.2s}@media (prefers-reduced-motion){:host .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}}:host html[data-prefers-reduced-motion] .animated{-webkit-animation:unset!important;animation:unset!important;-webkit-transition:none!important;transition:none!important}:host html{font-size:14px}:host *,:host html{-webkit-box-sizing:border-box;box-sizing:border-box}:host body{font-family:Open Sans,Arial,Helvetica,sans-serif}:host body,:host p{font-size:14px;line-height:1.5;font-weight:400}:host strong{font-weight:600}:host a{font-size:14px;color:#047a9c}:host a:hover{color:#03536a;text-decoration:none}:host a:focus{outline:2px solid #0b73da;outline-offset:4px}:host button{cursor:pointer}:host li,:host ul{font-size:14px}:host #main{max-width:1280px;margin:0 auto}@media (-ms-high-contrast:active),(-ms-high-contrast:none){:host iframe .gr-grid-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}}:host .gr-grid-container{display:grid;display:-ms-grid;grid-template-columns:repeat(4,1fr);grid-column-gap:16px;grid-row-gap:16px;margin:0 39.5px}@media (min-width:351px){:host .gr-grid-container{margin:0 31.5px}}@media (min-width:399px){:host .gr-grid-container{margin:0 39.5px}}@media (min-width:447px){:host .gr-grid-container{margin:0 79.5px}}@media (min-width:591px){:host .gr-grid-container{grid-template-columns:repeat(8,1fr);margin:0 83.5px}}@media (min-width:727px){:host .gr-grid-container{margin:0 103.5px;grid-column-gap:24px;grid-row-gap:24px}}@media (min-width:887px){:host .gr-grid-container{grid-template-columns:repeat(12,1fr);margin:0 71.5px}}@media (min-width:887px) and (-ms-high-contrast:active),(min-width:887px) and (-ms-high-contrast:none){:host .gr-grid-container>*{margin-right:12px;margin-left:12px;margin-bottom:24px}}@media (min-width:983px){:host .gr-grid-container{margin:0 71.5px}}@media (min-width:1079px){:host .gr-grid-container{margin:0 71.5px}}@media (min-width:1175px){:host .gr-grid-container{margin:0 76px}}:host .gr-grid-container .gr-col-two{grid-column-start:2}:host .gr-grid-container .gr-col-three{grid-column-start:3}:host .gr-grid-container .gr-col-four{grid-column-start:4}:host .gr-grid-container .gr-col-five{display:none}@media (min-width:591px){:host .gr-grid-container .gr-col-five{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:5}}:host .gr-grid-container .gr-col-six{display:none}@media (min-width:591px){:host .gr-grid-container .gr-col-six{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:6}}:host .gr-grid-container .gr-col-seven{display:none}@media (min-width:591px){:host .gr-grid-container .gr-col-seven{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:7}}:host .gr-grid-container .gr-col-eight{display:none}@media (min-width:591px){:host .gr-grid-container .gr-col-eight{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:8}}:host .gr-grid-container .gr-col-nine{display:none}@media (min-width:887px){:host .gr-grid-container .gr-col-nine{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:9}}:host .gr-grid-container .gr-col-ten{display:none}@media (min-width:887px){:host .gr-grid-container .gr-col-ten{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:10}}:host .gr-grid-container .gr-col-eleven{display:none}@media (min-width:887px){:host .gr-grid-container .gr-col-eleven{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:11}}:host .gr-grid-container .gr-col-twelve{display:none}@media (min-width:887px){:host .gr-grid-container .gr-col-twelve{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;grid-column-start:12}}:host .gr-col-span-one{grid-column-end:span 1}:host .gr-col-span-two{grid-column-end:span 2}:host .gr-col-span-three{grid-column-end:span 3}:host .gr-col-span-four{grid-column-end:span 4}@media (min-width:591px){:host .gr-col-span-five{grid-column-end:span 5}}@media (min-width:591px){:host .gr-col-span-six{grid-column-end:span 6}}@media (min-width:591px){:host .gr-col-span-seven{grid-column-end:span 7}}@media (min-width:591px){:host .gr-col-span-eight{grid-column-end:span 8}}@media (min-width:887px){:host .gr-col-span-nine{grid-column-end:span 9}}@media (min-width:887px){:host .gr-col-span-ten{grid-column-end:span 10}}@media (min-width:887px){:host .gr-col-span-eleven{grid-column-end:span 11}}@media (min-width:887px){:host .gr-col-span-twelve{grid-column-end:span 12}}:host .gr-row-one{grid-row-start:1}:host .gr-row-two{grid-row-start:2}:host .gr-row-three{grid-row-start:3}:host .gr-row-four{grid-row-start:4}:host .gr-row-five{grid-row-start:5}:host .gr-row-six{grid-row-start:6}:host .gr-row-seven{grid-row-start:7}:host .gr-row-eight{grid-row-start:8}:host .gr-row-nine{grid-row-start:9}:host .gr-row-ten{grid-row-start:10}:host .gr-row-eleven{grid-row-start:11}:host .gr-row-twelve{grid-row-start:12}:host .gr-row-thirteen{grid-row-start:13}:host .gr-row-fourteen{grid-row-start:14}:host .gr-row-fifteen{grid-row-start:15}:host .gr-row-span-two{grid-row-end:span 2}:host .gr-row-span-three{grid-row-end:span 3}:host .gr-row-span-four{grid-row-end:span 4}:host .gr-row-span-five{grid-row-end:span 5}:host .gr-row-span-six{grid-row-end:span 6}:host .gr-row-span-seven{grid-row-end:span 7}:host .gr-row-span-eight{grid-row-end:span 8}:host .gr-row-span-nine{grid-row-end:span 9}:host .gr-row-span-ten{grid-row-end:span 10}:host .gr-row-span-eleven{grid-row-end:span 11}:host .gr-row-span-twelve{grid-row-end:span 12}:host .no-border{border:0}:host .icon-18{width:18px;height:18px}:host .icon-24{width:24px;height:24px}:host .hidden{display:none!important}:host .gr-h1{font-size:24px;line-height:28px}:host .gr-h1,:host .gr-h2{font-weight:400;margin-top:0}:host .gr-h2{font-size:20px;line-height:26px}:host .gr-h3{font-size:18px;line-height:24px;font-weight:400;margin-top:0}:host .gr-label{font-size:12px;line-height:16px;color:#6a7070;display:block;margin-bottom:4px}:host .gr-meta{font-size:12px;line-height:12px;color:#6a7070}:host .gr-semi-bold{font-weight:600}:host .gr-font-large{font-size:16px;line-height:24px}:host .gr-font-normal{font-size:14px;line-height:20px}:host .gr-btn{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:1px solid #6a7070;background:transparent;color:#6a7070;min-width:152px;padding:8px 24px;font-size:16px;cursor:pointer;border-radius:22px;position:relative;margin:12px}:host .gr-btn:hover{color:#252525;border:1px solid #252525}:host .gr-btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .gr-btn.primary{background-color:#047a9c;border:1px solid #047a9c;color:#fff}:host .gr-btn.primary:hover{color:#fff;background-color:#035f79}:host .gr-btn.attention{background-color:#ffb81c;border:1px solid #ffb81c;color:#252525}:host .gr-btn.attention:hover{background-color:#f7aa00}:host .gr-btn.small{min-width:128px;padding:7px 20px;font-size:14px}:host .gr-btn.small:focus:after{padding:18px 21px}:host .gr-btn.extra-large{min-width:152px;padding:10px 24px;font-size:16px}:host .gr-btn.extra-large:focus:after{padding:22px 21px;border-radius:24px}:host .gr-btn:disabled{background-color:#e9e9e9!important;color:#6a7070!important;border:0!important;cursor:default!important}:host .gr-btn.icon-btn-24{min-width:auto;padding:5px 12px;border:0}:host .gr-btn.icon-btn-18{min-width:auto;padding:8px 12px;border:0}:host .gr-btn.no-border,:host .gr-btn.no-border:hover{border:0}:host .gr-btn.no-border:focus:after{border-radius:5px;min-width:auto;left:auto;top:auto;padding:16px}:host .gr-header{height:70px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#6a7070;padding:0 1em;background:transparent;grid-column:1/5}@media (min-width:591px){:host .gr-header{grid-column:1/9}}@media (min-width:887px){:host .gr-header{grid-column:1/13}}:host .gr-header.light{background:#f5f5f5}:host .gr-header.light .logo{background-image:url(https://pearsonux.sfo2.digitaloceanspaces.com/PearsonIcon.svg)}:host .gr-header.light .logo,:host .gr-header .logo{background-position:0;background-size:40px;background-repeat:no-repeat}:host .gr-header .logo{background-image:url(https://pearsonux.sfo2.digitaloceanspaces.com/PearsonIconWhite.svg);width:48px;height:64px}:host .gr-header .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}:host .gr-header.light button,:host .gr-header.light button:hover{color:#252525}:host .gr-header.light button:focus .avatar{background:#252525;color:#f5f5f5}:host .gr-header.light button .notification{border-color:#252525}:host #collapse{display:none}:host .gr-header button{color:#fff;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0!important}:host .gr-header button:hover{color:#fff}:host .gr-header button:hover svg{fill:currentColor}:host .gr-header button .notification{width:15px;height:15px;background:#da0474;border-radius:50%;border:3px solid #fff;position:absolute;right:-3px;bottom:-3px}:host .gr-header button:focus{-webkit-box-shadow:none;box-shadow:none}:host .gr-header button:focus .avatar{position:relative;background:#fff;color:#047a9c}:host .gr-header button:focus .avatar+svg{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;border-radius:5px}:host .gr-header button:focus #expand{display:none}:host .gr-header button:focus #collapse{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}:host .gr-header svg{fill:currentColor}:host .gr-header .notification{color:#da0474}:host .gr-header .notification>svg{right:-37px;position:relative;top:-5px;fill:currentColor;border-radius:50%;border:1px solid #fff}@media (max-width:640px){:host .gr-header .notification>svg{right:-33px}}:host .gr-header .username{margin-left:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:14px}@media (max-width:640px){:host .gr-header .name{display:none}}@media (min-width:640px){:host .gr-header .nameicon{display:none}}:host .gr-header .avatar{margin-right:.5em;position:relative;width:45px;height:45px;border:3px solid #fff;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}:host .gr-header .avatar span{font-weight:700}:host .gr-header.light .avatar{border:3px solid #252525}:host .gr-header .avatar img{height:25px;width:25px;border-radius:50%}:host .gr-header .avatar+.name+.nameicon{display:none}:host .header-menu{border:1px solid #efefef;border-radius:8px;width:320px;padding:24px}@media (min-width:591px){:host .header-menu{width:360px}}:host .header-menu ul{margin:0;padding:0;list-style-type:none}:host .header-btn{width:100%;background:none;border:0;margin:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0;border-radius:0}:host .header-btn:hover{border:0}:host .header-btn:focus{outline:0;-webkit-box-shadow:0 0 0 11px #fff,0 0 0 13px #1977d4;box-shadow:0 0 0 11px #fff,0 0 0 13px #1977d4;border-radius:5px}:host .header-btn .icon svg{fill:#6a7070}:host .header-btn .text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}@-webkit-keyframes fadeInLight{0%{opacity:0;visibility:hidden}to{opacity:.4;visibility:visible}}@keyframes fadeInLight{0%{opacity:0;visibility:hidden}to{opacity:.4;visibility:visible}}:host .animateInLight{-webkit-animation-name:fadeInLight;animation-name:fadeInLight;-webkit-animation-duration:4s;animation-duration:4s}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-15%,0);transform:translate3d(0,-15%,0);opacity:0;visibility:hidden}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}}:host .slideInDown{-webkit-animation:slideInDown .3s ease-in-out 0s;animation:slideInDown .3s ease-in-out 0s}:host #main{position:relative}:host .actions button{font-family:Open Sans,Arial,Helvetica,sans-serif;font-weight:400!important;background:none;border:0}:host .gr-header.open button .avatar{position:relative;background:#fff;color:#047a9c}:host .header-menu{font-family:Open Sans,Arial,Helvetica,sans-serif;width:360px;z-index:10000000;background:#fff;position:absolute;right:0}:host .header-menu li{padding-bottom:16px;margin-bottom:16px;border-bottom:1px solid #c7c7c7}:host .header-menu li:last-child{border-bottom:0;margin:0;padding:0}:host .console-link:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;border-radius:5px}:host .gr-header .logo{width:49px;height:56px;background-position:5px!important}:host #loginToPearson{border:1px solid #6a7070;padding:8px 24px!important}:host .transparent #loginToPearson{border:1px solid #fff;padding:8px 24px!important}:host #loginToPearson:hover{border:1px solid #252525}:host .transparent #loginToPearson:hover{border:1px solid #cdcdcd}:host #loginToPearson:focus{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .gr-header .initials{text-transform:uppercase;font-weight:700}:host .gr-btn:focus-visible{outline:0;-webkit-box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4;box-shadow:0 0 0 2px #fff,0 0 0 4px #1977d4}:host .gr-header .logo{background-image:none!important}:host .gr-header img{height:50px;margin-top:5px}:host .gr-header .group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}:host .gr-header .group a{margin-right:16px}:host .gr-btn.icon-btn-24 svg{margin-right:4px}:host .gr-btn:focus{outline:1px solid transparent!important}:host .gr-header .avatar{border:1px solid}:host .gr-header.open button .avatar,:host .gr-header button:focus .avatar{color:#252525}:host .gr-header.light .avatar,:host .gr-header.light button .notification{border:1px solid #252525}:host .gr-header button .notification{height:12px;width:12px;border:1px solid #fff;right:0;bottom:0}\n\n\n</style>\n     <div id="main">\n         <header class="gr-header transparent">\n         <div class="group">\n                    <a class="console-link" href="https://console.pearson.com/console/home"> \n\n           </a>\n           <slot></slot>\n        </div>\n\n            <div class="actions">\n  \n            </div>\n          </header>\n      </div>\n';

  whiteLogoTemplate.innerHTML = '\n       <img src="https://pearsonux.sfo2.digitaloceanspaces.com/PearsonIconWhite.svg" alt="Pearson"/>\n  ';

  colorLogoTemplate.innerHTML = '\n         <img src="https://pearsonux.sfo2.digitaloceanspaces.com/PearsonIcon.svg" alt="Pearson" />\n  ';

  expandIconTemplate.innerHTML = '\n  \t<svg focusable="false" class="icon-24" aria-hidden="true">\n  \t    <path d="M8.09674611,10 L15.8979188,10 C16.5051081,10 16.9973323,10.4907428 16.9973323,11.0961048 C16.9973323,11.390812 16.8782997,11.6731038 16.6670916,11.8792872 L12.7665053,15.6870775 C12.3391074,16.1043075 11.6555575,16.1043075 11.2281596,15.6870775 L7.32757328,11.8792872 C6.89372798,11.4557632 6.88639729,10.7617864 7.31119972,10.3292468 C7.51800543,10.1186744 7.80114936,10 8.09674611,10 Z"></path>\n\t\t</svg>\n  ';

  collapseIconTemplate.innerHTML = '\n  \t\t<svg focusable="false" class="icon-24" aria-hidden="true">\n  \t    <path d="M8.09674611,15 C7.80114936,15 7.51800543,14.8813256 7.31119972,14.6707532 C6.88639729,14.2382136 6.89372798,13.5442368 7.32757328,13.1207128 L11.2281596,9.31292251 C11.6555575,8.8956925 12.3391074,8.8956925 12.7665053,9.31292251 L16.6670916,13.1207128 C16.8782997,13.3268962 16.9973323,13.609188 16.9973323,13.9038952 C16.9973323,14.5092572 16.5051081,15 15.8979188,15 L8.09674611,15 Z"></path>\n      </svg>\n  ';

  notificationTemplate.innerHTML = '\n       <span class="notification"></span> \n  ';

  overlayTemplate.innerHTML = ' \n    <div id="headerOverlay" aria-hidden="true" class="overlay animateInLight" style="\n        position:fixed;\n        height:100%;\n        width:100%;\n        background-color: #252525;\n        top:0;       \n        opacity:.4;\n     "></div>\n  ';

  menuTemplate.innerHTML = '\n  <div class="header-menu slideInDown">\n    <ul>\n      <li>\n        <button id="logout" class="gr-btn header-btn">\n          <div class="text">\n            <span class="gr-font-large">Log out</span>\n            <span class="gr-meta">Sign out of all Pearson products</span>\n          </div>\n          <div class="icon">\n          <svg focusable="false" class="icon-24" aria-hidden="true">\n        <path d="M16.7357409,12.6772865 L16.735721,12.6772745 C16.7265641,12.6872407 16.7170283,12.6971852 16.7071068,12.7071068 L9.70710678,19.7071068 C9.31658249,20.0976311 8.68341751,20.0976311 8.29289322,19.7071068 C7.90236893,19.3165825 7.90236893,18.6834175 8.29289322,18.2928932 L14.5857864,12 L8.29289322,5.70710678 C7.90236893,5.31658249 7.90236893,4.68341751 8.29289322,4.29289322 C8.68341751,3.90236893 9.31658249,3.90236893 9.70710678,4.29289322 L16.7071068,11.2928932 C17.0878409,11.6736274 17.0973856,12.2849891 16.7357409,12.6772865 Z"  fill-rule="nonzero"></path>\n      </svg>\n          </div>\n        </button>\n      </li> \n    </ul>\n  </div>\n  ';

  menuButtonTemplate.innerHTML = '\n  <button class="gr-btn icon-btn-24" aria-expanded="false" aria-haspopup="true">\n    <div class="avatar">\n      <span class="initials">DO</span>\n    </div>\n  </button>\n  ';

  loginButtonTemplate.innerHTML = '\n    <button id="loginToPearson" class="gr-btn">Sign in</button>\n  ';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-header');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  function getInitials(string) {
    if (string !== null && string !== undefined) {
      return string.match(/\b(\w)/g).join('');
    } else {
      return;
    }
  }

  var Header = function (_HTMLElement) {
    _inherits(Header, _HTMLElement);

    _createClass(Header, [{
      key: 'loggedIn',
      get: function get() {
        return this.hasAttribute('loggedin');
      }
    }, {
      key: 'name',
      get: function get() {
        return this.getAttribute('name');
      }
    }, {
      key: 'theme',
      get: function get() {
        return this.getAttribute('theme');
      },
      set: function set(color) {
        this.setAttribute('theme', color);
      }
    }, {
      key: 'notifications',
      get: function get() {
        return this.getAttribute('notifications');
      },
      set: function set(number) {
        this.setAttribute('notifications', number);
      }
    }, {
      key: 'open',
      get: function get() {
        return this.hasAttribute('open');
      },
      set: function set(bool) {
        this.setAttribute('open', bool);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['open', 'notifications', 'theme', 'name', 'loggedin'];
      }
    }]);

    function Header() {
      _classCallCheck(this, Header);

      var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

      _this.attachShadow({ mode: 'open' });
      var clone = template.content.cloneNode(true);

      _this.header = clone.querySelector('.gr-header');
      _this.button = clone.querySelector('.gr-header button');

      /** After all this, we can append our clone to the shadowRoot */
      _this.shadowRoot.appendChild(clone);

      _this.renderMenu = _this.renderMenu.bind(_this);
      _this.renderLoggedIn = _this.renderLoggedIn.bind(_this);
      _this.renderLoggedOut = _this.renderLoggedOut.bind(_this);
      return _this;
    }

    _createClass(Header, [{
      key: 'renderMenu',
      value: function renderMenu() {
        var _this2 = this;

        var expandClone = expandIconTemplate.content.cloneNode(true);
        this.avatar = this.shadowRoot.querySelector('.gr-header button .avatar');
        this.button = this.shadowRoot.querySelector('.gr-header button');
        this.initalNode = this.avatar.querySelector('.initials');
        this.initials = getInitials(this.name);
        this.initalNode.innerHTML = this.initials;

        if (!this.open) {
          this.button.appendChild(expandClone);
        }

        this.button.addEventListener('click', function (event) {

          if (!_this2.open) {

            _this2.open = true;
            // add keyboard accessibility for buttons

            var headerMenu = _this2.shadowRoot.querySelector('.header-menu'),
                focusableItems = headerMenu.querySelectorAll('button'),
                firstFocusableItem = focusableItems[0],
                lastFocusableItem = focusableItems[focusableItems.length - 1];

            headerMenu.addEventListener('animationend', function (event) {
              firstFocusableItem.focus();
            });

            focusableItems.forEach(function (button, index) {
              button.setAttribute('data-index', index);
              button.addEventListener('keydown', function (event) {
                var nextButton = parseInt(event.target.getAttribute('data-index')) + 1,
                    prevButton = parseInt(event.target.getAttribute('data-index')) - 1;

                if (event.key === 'ArrowUp') {
                  event.preventDefault();
                  if (_this2.shadowRoot.activeElement === firstFocusableItem) {
                    lastFocusableItem.focus();
                  } else {
                    focusableItems[prevButton].focus();
                  }
                }

                if (event.key === 'ArrowDown') {
                  event.preventDefault();
                  if (_this2.shadowRoot.activeElement === lastFocusableItem) {
                    firstFocusableItem.focus();
                  } else {
                    focusableItems[nextButton].focus();
                  }
                }

                if (event.key === 'Home') {
                  firstFocusableItem.focus();
                }

                if (event.key === 'End') {
                  lastFocusableItem.focus();
                }

                if (event.key === 'Escape') {
                  _this2.removeAttribute('open');
                  _this2.button.focus();
                }
              });
            });
          } else {
            _this2.removeAttribute('open');
            console.log(_this2.button);
          }
        });
      }
    }, {
      key: 'renderLoggedIn',
      value: function renderLoggedIn() {
        var loginButton = this.shadowRoot.querySelector('.gr-header .actions button'),
            menuButtonClone = menuButtonTemplate.content.cloneNode(true),
            menuButtonTarget = this.shadowRoot.querySelector('.gr-header .actions');

        if (loginButton) {
          loginButton.remove();
        }

        menuButtonTarget.appendChild(menuButtonClone);
        this.renderMenu();
      }
    }, {
      key: 'renderLoggedOut',
      value: function renderLoggedOut() {
        var loginButtonClone = loginButtonTemplate.content.cloneNode(true),
            loginButtonTarget = this.shadowRoot.querySelector('.gr-header .actions'),
            menuButton = this.shadowRoot.querySelector('.gr-header .actions button');

        if (menuButton) {
          menuButton.remove();
        }

        loginButtonTarget.appendChild(loginButtonClone);
        var loginButton = this.shadowRoot.querySelector('.gr-header .actions button');

        loginButton.addEventListener('click', function (event) {
          location.href = "https://console.pearson.com/console/home";
        });
      }
    }, {
      key: 'connectedCallback',
      value: function connectedCallback() {
        var whiteLogo = whiteLogoTemplate.content.cloneNode(true),
            colorLogo = colorLogoTemplate.content.cloneNode(true);
        this.link = this.shadowRoot.querySelector('.gr-header .console-link');

        if (this.theme === 'light') {
          this.link.appendChild(colorLogo);
          this.header.classList.remove('transparent');
          this.header.classList.add('light');
        } else {
          this.link.appendChild(whiteLogo);
        }

        if (this.loggedIn) {
          this.renderLoggedIn();
        } else {
          this.renderLoggedOut();
        }
        var notificationClone = notificationTemplate.content.cloneNode(true);
        if (parseInt(this.notifications, 10) > 0) {
          var avatar = this.shadowRoot.querySelector('.avatar');
          avatar.appendChild(notificationClone);
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        var _this3 = this;

        var mainContent = document.querySelector('#main');
        if (name === 'loggedin') {
          if (oldValue !== newValue && oldValue === null) {
            this.renderLoggedIn();
          } else {
            this.renderLoggedOut();
          }
        }
        if (name === 'theme' && newValue === 'light') {
          this.header.classList.remove('transparent');
          this.header.classList.add('light');
        } else if (name === 'theme' && newValue === 'dark') {
          this.header.classList.remove('light');
          this.header.classList.add('transparent');
        }
        if (name === 'open') {
          if (newValue === 'true') {
            var header = this.shadowRoot.querySelector('.gr-header'),
                icon = this.shadowRoot.querySelector('.gr-header .actions button svg'),
                collapseIcon = collapseIconTemplate.content.cloneNode(true),
                overlay = overlayTemplate.content.cloneNode(true),
                main = this.shadowRoot.querySelector('#main'),
                menu = menuTemplate.content.cloneNode(true),
                headerLink = header.querySelector('.console-link');

            this.button.style.zIndex = '10';
            headerLink.setAttribute('tabindex', -1);
            main.setAttribute('tabindex', -1);
            this.button.setAttribute('aria-expanded', true);
            console.log('open');
            header.classList.add('open');
            header.setAttribute('aria-hidden', true);
            icon.remove();
            this.button.appendChild(collapseIcon);
            doc.body.appendChild(overlay);
            main.appendChild(menu);
            mainContent.setAttribute('aria-hidden', true);
            doc.addEventListener('click', function (event) {
              if (_this3.open) {
                var target = event.target;
                do {
                  if (target === _this3) {
                    return;
                  }
                  target = target.parentNode;
                } while (target);
                _this3.removeAttribute('open');
                _this3.button.focus();
              }
            }, true);

            var logoutButton = this.shadowRoot.querySelector('#logout');
            logoutButton.addEventListener('click', function (event) {
              _this3.removeAttribute('open');
              _this3.removeAttribute('loggedin');
              _this3.dispatchEvent(new CustomEvent('logout', {
                bubbles: true
              }));
            });

            if (this.theme === 'light') {
              this.avatar.style.background = '#252525';
              this.avatar.style.color = 'white';
            }
          } else if (newValue === null) {
            var _header = this.shadowRoot.querySelector('.gr-header'),
                _icon = this.shadowRoot.querySelector('.gr-header .actions button svg'),
                expandIcon = expandIconTemplate.content.cloneNode(true),
                _overlay = doc.querySelector('#headerOverlay'),
                menuNode = this.shadowRoot.querySelector('.header-menu'),
                _headerLink = _header.querySelector('.console-link'),
                _main = this.shadowRoot.querySelector('#main');

            if (this.theme === 'light') {
              this.avatar.style.background = 'transparent';
              this.avatar.style.color = '#252525';
            }
            this.button.style.zIndex = '0';

            _headerLink.removeAttribute('tabindex', -1);
            _main.removeAttribute('tabindex', -1);
            console.log(_main);
            this.button.setAttribute('aria-expanded', false);
            mainContent.setAttribute('aria-hidden', false);
            _header.setAttribute('aria-hidden', false);
            _header.classList.remove('open');
            _icon.remove();
            _overlay.remove();
            this.button.appendChild(expandIcon);
            menuNode.remove();
          }
        }
        if (name === 'notifications') {
          var notificationClone = notificationTemplate.content.cloneNode(true);
          if (parseInt(this.notifications, 10) > 0) {
            var avatar = this.shadowRoot.querySelector('.avatar');
            if (avatar !== null) {
              avatar.appendChild(notificationClone);
            }
          }
        }
      }
    }]);

    return Header;
  }(HTMLElement);

  customElements.define('pearson-header', Header);
})(window, document);