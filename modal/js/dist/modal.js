'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FOCUSABLE_ELEMENTS = '\n    a[href]:not([tabindex^="-"]):not([inert]),\n    area[href]:not([tabindex^="-"]):not([inert]),\n    input:not([disabled]):not([inert]),\n    select:not([disabled]):not([inert]),\n    textarea:not([disabled]):not([inert]),\n    button:not([disabled]):not([inert]),\n    iframe:not([tabindex^="-"]):not([inert]),\n    audio:not([tabindex^="-"]):not([inert]),\n    video:not([tabindex^="-"]):not([inert]),\n    [contenteditable]:not([tabindex^="-"]):not([inert]),\n    [tabindex]:not([tabindex^="-"]):not([inert])',
    TAB_KEY = 9,
    ESCAPE_KEY = 27;

var Modal = function (_HTMLElement) {
  _inherits(Modal, _HTMLElement);

  function Modal() {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

    _this.attachShadow({ mode: 'open' });

    _this.modal = null;

    _this.maintainFocus = null;
    _this.bindKeyPress = null;
    return _this;
  }

  _createClass(Modal, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      // shadow dom

      var currentDoc = document.querySelector('link[href$="index.html"]').import;
      var template = currentDoc.querySelector('#template');
      var clone = document.importNode(template.content, true);

      this.shadowRoot.appendChild(clone);
      // set attributes
      var titleText = this.getAttribute('modalTitleText'),
          successBtnText = this.getAttribute('successButtonText'),
          cancelBtnText = this.getAttribute('cancelButtonText'),
          referenceId = this.getAttribute('buttonReferenceId'),
          title = this.shadowRoot.querySelector('#dialog-heading'),
          showFooter = this.getAttribute('showFooter'),
          showClose = this.getAttribute('showClose');

      // create elements
      // create the footer is attribute is set to true
      if (showFooter === 'true') {
        var actionsTemplate = currentDoc.querySelector('#actions'),
            actionsClone = document.importNode(actionsTemplate.content, true),
            actionsEntryPoint = this.shadowRoot.querySelector('.modal-body');

        actionsEntryPoint.parentNode.insertBefore(actionsClone, actionsEntryPoint.nextSibling);

        var _cancelButton = this.shadowRoot.querySelector('#cancelButton'),
            saveButton = this.shadowRoot.querySelector('#successButton');

        if (cancelBtnText !== null) {
          _cancelButton.innerHTML = cancelBtnText;
        } else {
          _cancelButton.innerHTML = 'Cancel';
        }

        if (successBtnText !== null) {
          saveButton.innerHTML = successBtnText;
        } else {
          saveButton.innerHTML = 'Save';
        }
      }

      var overlayButtonTemplate = currentDoc.querySelector('#overlayDiv'),
          overlayButtonClone = document.importNode(overlayButtonTemplate.content, true),
          overlayEntryPoint = this.shadowRoot.querySelector('#modalPlaceholder');

      overlayEntryPoint.parentNode.insertBefore(overlayButtonClone, overlayEntryPoint.nextElementSibling);
      overlayEntryPoint.remove();

      if (titleText !== null) {
        title.innerHTML = titleText;
      } else {
        title.innerHTML = 'Modal Title';
      }

      // functionality
      var modal = this.shadowRoot.querySelector('.modal'),
          firstButton = void 0;
      var modalButton = document.querySelector('#' + referenceId),
          modalContent = document.querySelector('pearson-modal'),
          modalButtons = modalContent.querySelectorAll('button, input, select, a'),
          body = document.getElementsByTagName('body')[0],
          overlay = this.shadowRoot.querySelector('#modalOverlay'),
          main = document.getElementById('main'),
          buttons = this.shadowRoot.querySelectorAll('button'),
          totalButtons = buttons.length - 1,
          lastButton = buttons[totalButtons],
          cancelButton = this.shadowRoot.querySelector('.modal-cancel'),
          successButton = this.shadowRoot.querySelector('.modal-success'),
          closeButtons = this.shadowRoot.querySelectorAll('.modal-close');
      if (modalButtons[0]) {
        firstButton = modalButtons[0];
      } else {
        firstButton = buttons[0];
      }

      function setModalPosition() {
        setTimeout(function () {
          var modalPosition = modal.getBoundingClientRect();
          window.scrollTo(0, 0);
          modalPosition.top;
          if (modalPosition.top <= 0) {
            modal.style.top = '50px';
            modal.style.transform = 'translate(-50%)';
            modal.style.marginBottom = '50px';
          }
        }, 100);
      }

      function closeModal() {
        modalButton.removeAttribute('disabled');
        main.setAttribute('aria-hidden', 'false');
        body.classList.remove('hide-overflow');

        overlay.classList.remove('fadeIn');
        overlay.classList.add('fadeOut');

        modal.classList.remove('slideInDown');
        modal.classList.add('slideOutDown');

        setTimeout(function (event) {
          overlay.classList.add('hidden');
          overlay.classList.remove('fadeOut');
        }, 800);

        setTimeout(function (event) {
          modal.classList.add('hidden');
          modal.classList.remove('slideOutDown');
        }, 400);

        setTimeout(function (event) {
          modalButton.focus();
        }, 801);
      }

      // for modals that are not programatically created
      // when the modal trigger is clicked show modal
      modalButton.addEventListener('click', function (event) {
        setModalPosition();

        var modal = _this2.shadowRoot.querySelector('#modal');
        var thisButton = event.currentTarget,
            buttonDisabled = thisButton.getAttribute('disabled');

        if (buttonDisabled === null) {
          thisButton.setAttribute('disabled', true);
          main.setAttribute('aria-hidden', 'true');
          overlay.removeAttribute('disabled');
        }

        overlay.classList.remove('hidden');
        overlay.classList.remove('fadeOut');
        overlay.classList.add('fadeIn');

        modal.classList.remove('hidden');
        modal.classList.remove('slideOutDown');
        modal.classList.add('slideInDown');
        setTimeout(function (event) {
          if (firstButton !== undefined) {
            firstButton.focus();
          }
        }, 250);
      });

      // add event listener to the close button
      if (closeButtons !== null) {
        closeButtons.forEach(function (button) {
          button;
          button.addEventListener('click', function (event) {
            closeModal();
            setTimeout(function (event) {
              _this2.dispatchEvent(new Event('close', { bubbles: true, composed: true }));
            }, 500);
          });
        });
      }

      if (successButton !== null) {
        successButton.addEventListener('click', function (event) {
          closeModal();
          setTimeout(function (event) {
            _this2.dispatchEvent(new Event('success', { bubbles: true, composed: true }));
          }, 500);
        });
      }

      if (cancelButton !== null) {
        cancelButton.addEventListener('click', function (event) {
          closeModal();
          setTimeout(function (event) {
            _this2.dispatchEvent(new Event('cancel', { bubbles: true, composed: true }));
          }, 500);
        });
      }

      // focus trap
      if (lastButton !== undefined) {
        lastButton.addEventListener('blur', function () {
          firstButton.focus();
        });
      }

      // add keyboard accessibility
      this.shadowRoot.addEventListener('keyup', function (event) {
        if (event.keyCode === '27') {
          if (main.getAttribute('aria-hidden') === 'true') {
            closeModal();
            setTimeout(function (event) {
              _this2.dispatchEvent(new Event('close', { bubbles: true, composed: true }));
            }, 500);
          }
        }
      });

      // sets the positioning for modals that are programmatically created and have scrolling content
      setModalPosition();
    }
  }, {
    key: 'getFocusableChildren',
    value: function getFocusableChildren(node) {
      var filter = Array.prototype.filter,
          focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
      return filter.call(focusableChildren, function (child) {
        return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
      });
    }
  }, {
    key: 'setFocusToFirstChild',
    value: function setFocusToFirstChild(node) {
      var focusableChildren = getFocusableChildren(node),
          focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];

      if (focusableChild) {
        focusableChild.focus();
      }
    }
  }, {
    key: 'maintainFocus',
    value: function maintainFocus(e) {
      if (main.getAttribute('aria-hidden') === 'true' && !modal.contains(e.target)) {
        setFocusToFirstChild(modal);
      }
    }
  }, {
    key: 'bindKeyPress',
    value: function bindKeyPress(e) {
      if (main.getAttribute('aria-hidden') === 'true') {
        if (e.which === ESCAPE_KEY) {
          closeModal();
        }
        if (e.which === TAB_KEY) {
          trapTabKey(modal, e);
        }
      }
    }
  }]);

  return Modal;
}(HTMLElement);

customElements.define('pearson-modal', Modal);