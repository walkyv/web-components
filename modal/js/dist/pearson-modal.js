var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var FOCUSABLE_ELEMENTS = '\n    a[href]:not([tabindex^="-"]):not([inert]),\n    area[href]:not([tabindex^="-"]):not([inert]),\n    input:not([disabled]):not([inert]),\n    select:not([disabled]):not([inert]),\n    textarea:not([disabled]):not([inert]),\n    button:not([disabled]):not([inert]),\n    iframe:not([tabindex^="-"]):not([inert]),\n    audio:not([tabindex^="-"]):not([inert]),\n    video:not([tabindex^="-"]):not([inert]),\n    [contenteditable]:not([tabindex^="-"]):not([inert]),\n    [tabindex]:not([tabindex^="-"]):not([inert])',
      TAB_KEY = 9,
      ESCAPE_KEY = 27;

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

  var template = doc.createElement('template');
  var overlayButtonTemplate = doc.createElement('template');
  var actionsTemplate = doc.createElement('template');
  var oldStyles = doc.createElement('template');
  var newStyles = doc.createElement('template');

  template.innerHTML = '\n  <!-- Encapsulated styles for modal-->\n\t<div class="deep-encapsulation">\n\t\t<div class="hidden" id="modalPlaceholder"></div>\n\t\t<div class="pe-modal-container hidden animated slideInDown" id="modal" role="dialog" aria-labelledby="dialogHeading" aria-describedby="dialogDescription" aria-modal="true">\n\t\t\t<h2 id="dialogHeading" class="pe-title"></h2>\n\t\t\t<div class="modal-body" id="dialogDescription">\n\t\t\t\t<slot></slot>\n\t\t\t</div>\n\t\t\t<button id="closeButton" class="pe-btn close modal-close" aria-label="Close Dialog" data-event="cancel">\n\t\t\t\t<img src="data:image/svg+xml,\t%3Csvg version = \'1.1\' xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M13.4092,11.9999 L17.7082,7.7009 C18.0972,7.3119 18.0972,6.6809 17.7082,6.2919 C17.3192,5.9029 16.6882,5.9029 16.2992,6.2919 L12.0002,10.5909 L7.7012,6.2919 C7.3122,5.9029 6.6812,5.9029 6.2922,6.2919 C5.9022,6.6809 5.9022,7.3119 6.2922,7.7009 L10.5912,11.9999 L6.2922,16.2989 C5.9022,16.6879 5.9022,17.3189 6.2922,17.7079 C6.4862,17.9029 6.7412,17.9999 6.9962,17.9999 C7.2512,17.9999 7.5062,17.9029 7.7012,17.7079 L12.0002,13.4089 L16.2992,17.7079 C16.4932,17.9029 16.7482,17.9999 17.0032,17.9999 C17.2582,17.9999 17.5132,17.9029 17.7082,17.7079 C18.0972,17.3189 18.0972,16.6879 17.7082,16.2989 L13.4092,11.9999 Z\'/%3E%3C/svg%3E\n\t\t\t\t" />\n\t\t\t</button>\n\t\t</div>\n\t</div>\n  ';

  overlayButtonTemplate.innerHTML = '\n  <div class="hidden modal-close animated fadeIn" id="modalOverlay" data-event="cancel"></div>\n  ';

  actionsTemplate.innerHTML = '\n  <div class="actions">\n\t\t<button id="successButton" class="modal-success pe-btn pe-btn__primary--btn_large" data-event="success">Save</button>\n\t\t<button id="cancelButton" class="modal-cancel pe-btn pe-btn--btn_large" data-event="cancel">Cancel</button>\n\t</div>\n  ';

  oldStyles.innerHTML = '\n  <style>\n@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.fadeIn,.fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.hidden{display:none}.hide-overflow{overflow:hidden}.modal-scroll{height:100%;overflow:scroll;-webkit-overflow-scrolling:touch}.sticky{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}#modalOverlay{width:100%;height:100%;z-index:2;background-color:#222;opacity:.6;position:fixed;top:0;left:0;margin:0;padding:0}.pe-modal-container[data-sticky=true] h2{border-bottom:1px solid #c7c7c7;display:block;padding-bottom:20px;margin-bottom:0}.pe-modal-container[data-sticky=true] .modal-body{margin:0;padding-top:20px}.pe-modal-container[data-sticky=true] .actions{border-top:1px solid #c7c7c7;padding-top:20px}[role=dialog]{border:thin solid #000;background-color:#fff;z-index:3;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.scroll-frame{overflow:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;height:400px;width:100%}button.close[aria-label="Close Dialog"]{position:absolute;height:40px;width:40px;background:none;border:0;top:2px;right:2px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}button.close[aria-label="Close Dialog"]:focus{outline:none}button.close[aria-label="Close Dialog"]:focus:after{border:2px solid #0b73da;content:"";position:absolute;width:100%;height:100%;z-index:1}.close img{height:24px;width:24px}.pe-modal-container{width:600px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;font-family:Open Sans,Calibri,Tahoma,sans-serif}@media (max-width:767px){.modal{width:440px}}.pe-modal-container h2{line-height:1.85714rem;font-weight:400;color:#252525;margin:0 0 20px;font-size:20px;padding-left:40px;padding-top:40px;padding-right:40px}.pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (max-width:480px){.pe-modal-container h2{font-size:20px}}.pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px;font-size:14px;line-height:1.5}.pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}.pe-modal-container .actions button{color:#505759;background-color:transparent;border:1px solid #c7c7c7;text-decoration:none;position:relative;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;vertical-align:middle;cursor:pointer;height:36px;padding:0 20px;border-radius:36px;font-size:14px;line-height:18px;font-weight:600;overflow:visible;outline:none}.pe-modal-container .actions button:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-modal-container .actions button.pe-btn__primary--btn_large{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.pe-modal-container .actions button.pe-btn__primary--btn_large:hover{background-color:#005a70}@media (max-width:767px){.pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (max-width:480px){.pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.pe-modal-container .actions button:last-child{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1;margin-right:1em}@media (max-width:480px){.pe-modal-container .actions button:last-child{margin:.5em 0}}@media (max-width:767px){.pe-modal-container .actions button{width:100%}}.modal-container{position:absolute;width:100%;top:0;height:100%}.modal-container .modal{-webkit-transform:none;transform:none;position:relative;margin:0 auto;top:0;left:0}\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}.deep-encapsulation .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.deep-encapsulation .fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.deep-encapsulation .fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.deep-encapsulation .slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.deep-encapsulation .slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.deep-encapsulation .fadeIn,.deep-encapsulation .fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}.deep-encapsulation :host{-webkit-box-sizing:border-box;box-sizing:border-box}.deep-encapsulation *,.deep-encapsulation :after,.deep-encapsulation :before{-webkit-box-sizing:inherit;box-sizing:inherit}.deep-encapsulation .hidden{display:none}.deep-encapsulation .hide-overflow{overflow:hidden}.deep-encapsulation .modal-scroll{height:100%;overflow:scroll;-webkit-overflow-scrolling:touch}.deep-encapsulation .sticky{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.deep-encapsulation #modalOverlay{width:100%;height:100%;z-index:2;background-color:#222;opacity:.6;position:fixed;top:0;left:0;margin:0;padding:0}.deep-encapsulation .pe-modal-container[data-sticky=true] h2{border-bottom:1px solid #c7c7c7;display:block;padding-bottom:20px;margin-bottom:0}.deep-encapsulation .pe-modal-container[data-sticky=true] .modal-body{margin:0;padding-top:20px}.deep-encapsulation .pe-modal-container[data-sticky=true] .actions{border-top:1px solid #c7c7c7;padding-top:20px}.deep-encapsulation [role=dialog]{border:thin solid #000;background-color:#fff;z-index:3;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.deep-encapsulation .scroll-frame{overflow:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;height:400px;width:100%}.deep-encapsulation button.close[aria-label="Close Dialog"]{position:absolute;height:40px;width:40px;background:none;border:0;top:2px;right:2px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.deep-encapsulation button.close[aria-label="Close Dialog"]:focus{outline:none}.deep-encapsulation button.close[aria-label="Close Dialog"]:focus:after{border:2px solid #0b73da;content:"";position:absolute;width:100%;height:100%;z-index:1}.deep-encapsulation .close img{height:24px;width:24px}.deep-encapsulation .pe-modal-container{width:600px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;font-family:Open Sans,Calibri,Tahoma,sans-serif}@media (max-width:767px){.deep-encapsulation .modal{width:440px}}.deep-encapsulation .pe-modal-container h2{line-height:1.85714rem;font-weight:400;color:#252525;margin:0 0 20px;font-size:20px;padding-left:40px;padding-top:40px;padding-right:40px}.deep-encapsulation .pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (max-width:480px){.deep-encapsulation .pe-modal-container h2{font-size:20px}}.deep-encapsulation .pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px;font-size:14px;line-height:1.5}.deep-encapsulation .pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}.deep-encapsulation .pe-modal-container .actions button{color:#505759;background-color:transparent;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;vertical-align:middle;cursor:pointer;height:36px;padding:0 20px;border-radius:36px;font-size:14px;line-height:18px;font-weight:600;overflow:visible;outline:none}.deep-encapsulation .pe-modal-container .actions button:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-modal-container .actions button.pe-btn__primary--btn_large:hover{background-color:#005a70}@media (max-width:767px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (max-width:480px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.deep-encapsulation .pe-modal-container .actions button:last-child{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1;margin-right:1em}@media (max-width:480px){.deep-encapsulation .pe-modal-container .actions button:last-child{margin:.5em 0}}@media (max-width:767px){.deep-encapsulation .pe-modal-container .actions button{width:100%}}.deep-encapsulation .modal-container{position:absolute;width:100%;top:0;height:100%}.deep-encapsulation .modal-container .modal{-webkit-transform:none;transform:none;position:relative;margin:0 auto;top:0;left:0}.deep-encapsulation .pe-modal-container .actions button{background-color:#e9e9e9;border:1px solid #c7c7c7;border-radius:2px;color:#252525;position:relative;text-decoration:none}.deep-encapsulation .pe-modal-container .actions button.pe-btn__primary--btn_large{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.deep-encapsulation .pe-modal-container .actions button.pe-btn__primary--btn_large:focus{background-color:#005a70}.deep-encapsulation .pe-modal-container .actions button:hover{background-color:#d9d9d9}.deep-encapsulation .pe-modal-container .actions button:focus:after{border-radius:5px}\n  </style>\n  ';

  newStyles.innerHTML = '\n<style>\n@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.fadeIn,.fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");:host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.hidden{display:none}.hide-overflow{overflow:hidden}.modal-scroll{height:100%;overflow:scroll;-webkit-overflow-scrolling:touch}.sticky{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}#modalOverlay{width:100%;height:100%;z-index:2;background-color:#222;opacity:.6;position:fixed;top:0;left:0;margin:0;padding:0}.pe-modal-container[data-sticky=true] h2{border-bottom:1px solid #c7c7c7;display:block;padding-bottom:20px;margin-bottom:0}.pe-modal-container[data-sticky=true] .modal-body{margin:0;padding-top:20px}.pe-modal-container[data-sticky=true] .actions{border-top:1px solid #c7c7c7;padding-top:20px}[role=dialog]{border:thin solid #000;background-color:#fff;z-index:3;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.scroll-frame{overflow:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;height:400px;width:100%}button.close[aria-label="Close Dialog"]{position:absolute;height:40px;width:40px;background:none;border:0;top:2px;right:2px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}button.close[aria-label="Close Dialog"]:focus{outline:none}button.close[aria-label="Close Dialog"]:focus:after{border:2px solid #0b73da;content:"";position:absolute;width:100%;height:100%;z-index:1}.close img{height:24px;width:24px}.pe-modal-container{width:600px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;font-family:Open Sans,Calibri,Tahoma,sans-serif}@media (max-width:767px){.modal{width:440px}}.pe-modal-container h2{line-height:1.85714rem;font-weight:400;color:#252525;margin:0 0 20px;font-size:20px;padding-left:40px;padding-top:40px;padding-right:40px}.pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (max-width:480px){.pe-modal-container h2{font-size:20px}}.pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px;font-size:14px;line-height:1.5}.pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}.pe-modal-container .actions button{color:#505759;background-color:transparent;border:1px solid #c7c7c7;text-decoration:none;position:relative;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;vertical-align:middle;cursor:pointer;height:36px;padding:0 20px;border-radius:36px;font-size:14px;line-height:18px;font-weight:600;overflow:visible;outline:none}.pe-modal-container .actions button:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.pe-modal-container .actions button.pe-btn__primary--btn_large{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.pe-modal-container .actions button.pe-btn__primary--btn_large:hover{background-color:#005a70}@media (max-width:767px){.pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (max-width:480px){.pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.pe-modal-container .actions button:last-child{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1;margin-right:1em}@media (max-width:480px){.pe-modal-container .actions button:last-child{margin:.5em 0}}@media (max-width:767px){.pe-modal-container .actions button{width:100%}}.modal-container{position:absolute;width:100%;top:0;height:100%}.modal-container .modal{-webkit-transform:none;transform:none;position:relative;margin:0 auto;top:0;left:0}\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@keyframes fadeIn{0%{opacity:0}to{opacity:.6}}@-webkit-keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@keyframes fadeOut{0%{opacity:.6}to{opacity:0}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0);visibility:visible}to{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}}@-webkit-keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}@keyframes slideOutDown{0%{opacity:1;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}to{opacity:0;visibility:hidden;-webkit-transform:translate3d(-50%,300%,0);transform:translate3d(-50%,300%,0)}}.deep-encapsulation .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.deep-encapsulation .fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}.deep-encapsulation .fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}.deep-encapsulation .slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.deep-encapsulation .slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}@media (-ms-high-contrast:none){.deep-encapsulation .fadeIn,.deep-encapsulation .fadeOut{-webkit-animation-name:fade;animation-name:fade;-webkit-animation-duration:.5s;animation-duration:.5s}}.deep-encapsulation :host{-webkit-box-sizing:border-box;box-sizing:border-box}.deep-encapsulation *,.deep-encapsulation :after,.deep-encapsulation :before{-webkit-box-sizing:inherit;box-sizing:inherit}.deep-encapsulation .hidden{display:none}.deep-encapsulation .hide-overflow{overflow:hidden}.deep-encapsulation .modal-scroll{height:100%;overflow:scroll;-webkit-overflow-scrolling:touch}.deep-encapsulation .sticky{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.deep-encapsulation #modalOverlay{width:100%;height:100%;z-index:2;background-color:#222;opacity:.6;position:fixed;top:0;left:0;margin:0;padding:0}.deep-encapsulation .pe-modal-container[data-sticky=true] h2{border-bottom:1px solid #c7c7c7;display:block;padding-bottom:20px;margin-bottom:0}.deep-encapsulation .pe-modal-container[data-sticky=true] .modal-body{margin:0;padding-top:20px}.deep-encapsulation .pe-modal-container[data-sticky=true] .actions{border-top:1px solid #c7c7c7;padding-top:20px}.deep-encapsulation [role=dialog]{border:thin solid #000;background-color:#fff;z-index:3;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.deep-encapsulation .scroll-frame{overflow:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;height:400px;width:100%}.deep-encapsulation button.close[aria-label="Close Dialog"]{position:absolute;height:40px;width:40px;background:none;border:0;top:2px;right:2px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.deep-encapsulation button.close[aria-label="Close Dialog"]:focus{outline:none}.deep-encapsulation button.close[aria-label="Close Dialog"]:focus:after{border:2px solid #0b73da;content:"";position:absolute;width:100%;height:100%;z-index:1}.deep-encapsulation .close img{height:24px;width:24px}.deep-encapsulation .pe-modal-container{width:600px;max-width:100%;outline:none;background-color:#fff;border-radius:2px;font-family:Open Sans,Calibri,Tahoma,sans-serif}@media (max-width:767px){.deep-encapsulation .modal{width:440px}}.deep-encapsulation .pe-modal-container h2{line-height:1.85714rem;font-weight:400;color:#252525;margin:0 0 20px;font-size:20px;padding-left:40px;padding-top:40px;padding-right:40px}.deep-encapsulation .pe-modal-container h2:focus{outline:1px solid #da0474;outline-offset:2px}@media (max-width:480px){.deep-encapsulation .pe-modal-container h2{font-size:20px}}.deep-encapsulation .pe-modal-container .modal-body{margin-bottom:28px;padding:0 40px;font-size:14px;line-height:1.5}.deep-encapsulation .pe-modal-container .actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-left:40px;padding-right:40px;padding-bottom:40px}.deep-encapsulation .pe-modal-container .actions button{color:#505759;background-color:transparent;border:1px solid #c7c7c7;text-decoration:none;position:relative;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;vertical-align:middle;cursor:pointer;height:36px;padding:0 20px;border-radius:36px;font-size:14px;line-height:18px;font-weight:600;overflow:visible;outline:none}.deep-encapsulation .pe-modal-container .actions button:focus:after{border:2px solid #0b73da;content:"";position:absolute;border-radius:22px;width:-webkit-calc(100% + 12px);width:calc(100% + 12px);height:-webkit-calc(100% + 12px);height:calc(100% + 12px);top:-6px;left:-6px;z-index:1}.deep-encapsulation .pe-modal-container .actions button.pe-btn__primary--btn_large{background-color:#047a9c;border:1px solid #047a9c;color:#fff}.deep-encapsulation .pe-modal-container .actions button.pe-btn__primary--btn_large:hover{background-color:#005a70}@media (max-width:767px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}}@media (max-width:480px){.deep-encapsulation .pe-modal-container .actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.deep-encapsulation .pe-modal-container .actions button:last-child{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1;margin-right:1em}@media (max-width:480px){.deep-encapsulation .pe-modal-container .actions button:last-child{margin:.5em 0}}@media (max-width:767px){.deep-encapsulation .pe-modal-container .actions button{width:100%}}.deep-encapsulation .modal-container{position:absolute;width:100%;top:0;height:100%}.deep-encapsulation .modal-container .modal{-webkit-transform:none;transform:none;position:relative;margin:0 auto;top:0;left:0}\n</style>\n';

  var Modal = function (_HTMLElement) {
    _inherits(Modal, _HTMLElement);

    _createClass(Modal, null, [{
      key: 'observedAttributes',
      get: function get() {
        return ['footer'];
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
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {
        // if `footer` is changing, but
        // this.modal has not been defined yet,
        // bail out.
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
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        // Get component attributes
        var titleText = this.getAttribute('titletext'),
            triggerId = this.getAttribute('triggerid'),
            footer = this.hasAttribute('footer'),
            elements = this.getAttribute('elements');

        // Clone templates
        var clone = template.content.cloneNode(true);
        var overlayButtonClone = overlayButtonTemplate.content.cloneNode(true);

        // Create elements
        // Target the body of the modal
        // create the footer
        if (footer) {
          this.renderfooter(clone);
        }

        this.renderStyles(clone);

        var overlayEntryPoint = clone.querySelector('#modalPlaceholder');

        overlayEntryPoint.parentNode.insertBefore(overlayButtonClone, overlayEntryPoint.nextElementSibling);
        overlayEntryPoint.remove();

        var title = clone.querySelector('#dialogHeading');
        if (titleText !== null) {
          title.innerHTML = titleText;
        } else {
          title.innerHTML = 'Modal Title';
        }

        // functionality
        this.body = doc.querySelector('body');
        this.main = doc.querySelector('main');
        this.triggerBtn = doc.querySelector('#' + triggerId);

        this.modal = clone.querySelector('#modal');
        this.eventBtns = clone.querySelectorAll('[data-event]');
        this.overlay = clone.querySelector('#modalOverlay');

        // When the modal trigger is clicked, open modal
        this.triggerBtn.addEventListener('click', this.openModal);

        this.eventBtns.forEach(function (btn) {
          btn.addEventListener('click', function (e) {
            var eventType = e.target.dataset.event;
            _this2.closeModal(eventType);
          });
        });

        // sets the positioning for modals that are programmatically created and have scrolling content
        this.setPosition();

        this.shadowRoot.appendChild(clone);

        doc.addEventListener('keydown', this.bindKeyPress);
        doc.body.addEventListener('focus', this.maintainFocus, true);
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
        var _this3 = this;

        // unhide it on open, to prevent FOUC
        this.style.display = 'block';

        var thisButton = e.currentTarget,
            buttonDisabled = thisButton.getAttribute('disabled');

        if (buttonDisabled === null) {
          thisButton.setAttribute('disabled', true);
          this.main.setAttribute('aria-hidden', 'true');
          this.overlay.removeAttribute('disabled');
        }

        this.overlay.classList.remove('hidden');
        this.overlay.classList.remove('fadeOut');
        this.overlay.classList.add('fadeIn');

        this.modal.classList.remove('hidden');
        this.modal.classList.remove('slideOutDown');
        this.modal.classList.add('slideInDown');
        this.open = true;

        setTimeout(function () {
          _this3.maintainFocus();
        }, 250);
      }
    }, {
      key: 'closeModal',
      value: function closeModal(eventName) {
        var _this4 = this;

        this.triggerBtn.removeAttribute('disabled');
        this.main.setAttribute('aria-hidden', 'false');
        this.body.classList.remove('hide-overflow');

        this.overlay.classList.remove('fadeIn');
        this.overlay.classList.add('fadeOut');

        this.modal.classList.remove('slideInDown');
        this.modal.classList.add('slideOutDown');

        setTimeout(function () {
          _this4.modal.classList.add('hidden');
          _this4.modal.classList.remove('slideOutDown');
        }, 400);

        setTimeout(function () {
          _this4.dispatchEvent(new Event(eventName, { bubbles: true, composed: true }));
        }, 500);

        setTimeout(function () {
          _this4.overlay.classList.add('hidden');
          _this4.overlay.classList.remove('fadeOut');
        }, 800);

        setTimeout(function () {
          _this4.triggerBtn.focus();
        }, 801);

        this.open = false;
      }
    }, {
      key: 'maintainFocus',
      value: function maintainFocus() {
        // if the modal is not open, stop the function
        if (!this.open) return;

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
        if (this.open && e.which === ESCAPE_KEY) {
          this.closeModal('cancel');
        }
        if (this.open && e.which === TAB_KEY) {
          trapTabKey(e, this, this.modal);
        }
      }
    }, {
      key: 'setPosition',
      value: function setPosition() {
        var _this5 = this;

        setTimeout(function () {
          var modalPosition = _this5.modal.getBoundingClientRect();
          if (modalPosition.top <= 0) {
            _this5.modal.style.top = '50px';
            _this5.modal.style.transform = 'translate(-50%)';
            _this5.modal.style.marginBottom = '50px';
          }
        }, 100);
      }
    }, {
      key: 'renderfooter',
      value: function renderfooter(parentNode) {
        var successBtnText = this.getAttribute('successbtntext'),
            cancelBtnText = this.getAttribute('cancelbtntext'),
            hideCancel = this.hasAttribute('hidecancel'),
            hideSuccess = this.hasAttribute('hidesuccess');

        var actionsClone = actionsTemplate.content.cloneNode(true),
            cancelBtn = actionsClone.querySelector('#cancelButton'),
            successBtn = actionsClone.querySelector('#successButton');

        var modalBody = parentNode.querySelector('#dialogDescription');

        if (cancelBtnText !== null) {
          cancelBtn.innerHTML = cancelBtnText;
        }

        if (successBtnText !== null) {
          successBtn.innerHTML = successBtnText;
        }

        if (hideCancel) cancelBtn.remove();
        if (hideSuccess) successBtn.remove();

        modalBody.parentNode.insertBefore(actionsClone, modalBody.nextSibling);
      }
    }, {
      key: 'renderStyles',
      value: function renderStyles(parentNode) {
        var useElements = this.hasAttribute('elements');

        var styleTemplate = useElements ? oldStyles : newStyles,
            styleClone = styleTemplate.content.cloneNode(true),
            modalBody = parentNode.querySelector('.deep-encapsulation');

        modalBody.parentNode.insertBefore(styleClone, modalBody.nextSibling);
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
    }]);

    return Modal;
  }(HTMLElement);

  customElements.define('pearson-modal', Modal);
})(window, document);