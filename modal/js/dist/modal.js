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
      var _this3 = this;

      this.maintainFocus = this.maintainFocus.bind(this);
      this.bindKeyPress = this.bindKeyPress.bind(this);

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

        var cancelButton = this.shadowRoot.querySelector('#cancelButton'),
            saveButton = this.shadowRoot.querySelector('#successButton');

        if (cancelBtnText !== null) {
          cancelButton.innerHTML = cancelBtnText;
        } else {
          cancelButton.innerHTML = 'Cancel';
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
      this.modal = this.shadowRoot.querySelector('.modal');
      this.modalBtn = document.querySelector('#' + referenceId);
      this.modalContent = document.querySelector('pearson-modal');

      this.body = document.getElementsByTagName('body')[0];
      this.overlay = this.shadowRoot.querySelector('#modalOverlay');
      this.main = document.getElementById('main');
      this.cancelButton = this.shadowRoot.querySelector('.modal-cancel');
      this.successButton = this.shadowRoot.querySelector('.modal-success');
      this.closeButtons = this.shadowRoot.querySelectorAll('.modal-close');

      function setModalPosition() {
        var _this2 = this;

        setTimeout(function () {
          var modalPosition = _this2.modal.getBoundingClientRect();
          window.scrollTo(0, 0);
          if (modalPosition.top <= 0) {
            _this2.modal.style.top = '50px';
            _this2.modal.style.transform = 'translate(-50%)';
            _this2.modal.style.marginBottom = '50px';
          }
        }, 100);
      }

      // for modals that are not programatically created
      // when the modal trigger is clicked show modal
      this.modalBtn.addEventListener('click', function (event) {
        // setModalPosition();

        _this3.modal = _this3.shadowRoot.querySelector('#modal');
        var thisButton = event.currentTarget,
            buttonDisabled = thisButton.getAttribute('disabled');

        if (buttonDisabled === null) {
          thisButton.setAttribute('disabled', true);
          _this3.main.setAttribute('aria-hidden', 'true');
          _this3.overlay.removeAttribute('disabled');
        }

        _this3.overlay.classList.remove('hidden');
        _this3.overlay.classList.remove('fadeOut');
        _this3.overlay.classList.add('fadeIn');

        _this3.modal.classList.remove('hidden');
        _this3.modal.classList.remove('slideOutDown');
        _this3.modal.classList.add('slideInDown');
        setTimeout(function (event) {
          if (_this3.firstButton !== undefined) {
            _this3.firstButton.focus();
          }
        }, 250);
      });

      // add event listener to the close button
      if (this.closeButtons !== null) {
        this.closeButtons.forEach(function (button) {
          button;
          button.addEventListener('click', function (event) {
            _this3.closeModal();
            setTimeout(function (event) {
              _this3.dispatchEvent(new Event('close', { bubbles: true, composed: true }));
            }, 500);
          });
        });
      }

      if (this.successButton !== null) {
        this.successButton.addEventListener('click', function (event) {
          _this3.closeModal();
          setTimeout(function (event) {
            _this3.dispatchEvent(new Event('success', { bubbles: true, composed: true }));
          }, 500);
        });
      }

      if (this.cancelButton !== null) {
        this.cancelButton.addEventListener('click', function (event) {
          _this3.closeModal();
          setTimeout(function (event) {
            _this3.dispatchEvent(new Event('cancel', { bubbles: true, composed: true }));
          }, 500);
        });
      }

      // focus trap
      if (this.lastButton !== undefined) {
        this.lastButton.addEventListener('blur', function () {
          _this3.firstButton.focus();
        });
      }

      // add keyboard accessibility
      this.shadowRoot.addEventListener('keyup', function (event) {
        if (event.keyCode === '27') {
          if (_this3.main.getAttribute('aria-hidden') === 'true') {
            _this3.closeModal();
            setTimeout(function (event) {
              _this3.dispatchEvent(new Event('close', { bubbles: true, composed: true }));
            }, 500);
          }
        }
      });

      // sets the positioning for modals that are programmatically created and have scrolling content
      // setModalPosition();
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      var _this4 = this;

      this.modalBtn.removeAttribute('disabled');
      this.main.setAttribute('aria-hidden', 'false');
      this.body.classList.remove('hide-overflow');

      this.overlay.classList.remove('fadeIn');
      this.overlay.classList.add('fadeOut');

      this.modal.classList.remove('slideInDown');
      this.modal.classList.add('slideOutDown');

      setTimeout(function (event) {
        _this4.overlay.classList.add('hidden');
        _this4.overlay.classList.remove('fadeOut');
      }, 800);

      setTimeout(function (event) {
        _this4.modal.classList.add('hidden');
        _this4.modal.classList.remove('slideOutDown');
      }, 400);

      setTimeout(function (event) {
        _this4.modalBtn.focus();
      }, 801);
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
      var focusableChildren = this.getFocusableChildren(node),
          focusableChild = node.querySelector('[autofocus]') || focusableChildren[0];

      if (focusableChild) {
        focusableChild.focus();
      }
    }
  }, {
    key: 'maintainFocus',
    value: function maintainFocus(e) {
      if (this.main.getAttribute('aria-hidden') === 'true' && !this.modal.contains(e.target)) {
        this.setFocusToFirstChild(this.modal);
      }
    }
  }, {
    key: 'bindKeyPress',
    value: function bindKeyPress(e) {
      if (this.main.getAttribute('aria-hidden') === 'true') {
        if (e.which === ESCAPE_KEY) {
          this.closeModal();
        }
        if (e.which === TAB_KEY) {
          this.trapTabKey(this.modal, e);
        }
      }
    }
  }, {
    key: 'trapTabKey',
    value: function trapTabKey(node, e) {
      var focusableChildren = this.getFocusableChildren(node),
          focusedItemIdx = focusableChildren.indexOf(document.activeElement),
          lastFocusableIdx = focusableChildren.length - 1;

      if (e.target.getAttribute('tabindex') === '-1') {
        e.preventDefault();
        return false;
      }

      if (e.shiftKey && focusedItemIdx === 0) {
        focusableChildren[lastFocusableIdx].focus();
        e.preventDefault();
      }

      if (!e.shiftKey && focusedItemIdx === lastFocusableIdx) {
        focusableChildren[0].focus();
        e.preventDefault();
      }
    }
  }]);

  return Modal;
}(HTMLElement);

customElements.define('pearson-modal', Modal);