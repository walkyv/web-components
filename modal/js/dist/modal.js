'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FOCUSABLE_ELEMENTS = '\n    a[href]:not([tabindex^="-"]):not([inert]),\n    area[href]:not([tabindex^="-"]):not([inert]),\n    input:not([disabled]):not([inert]),\n    select:not([disabled]):not([inert]),\n    textarea:not([disabled]):not([inert]),\n    button:not([disabled]):not([inert]),\n    iframe:not([tabindex^="-"]):not([inert]),\n    audio:not([tabindex^="-"]):not([inert]),\n    video:not([tabindex^="-"]):not([inert]),\n    [contenteditable]:not([tabindex^="-"]):not([inert]),\n    [tabindex]:not([tabindex^="-"]):not([inert])',
    TAB_KEY = 9,
    ESCAPE_KEY = 27;

function getDeepActiveElement() {
  var a = document.activeElement;
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

function trapTabKey(node, e) {
  var focusableChildren = getFocusableChildren(node),
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

var Modal = function (_HTMLElement) {
  _inherits(Modal, _HTMLElement);

  function Modal() {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

    _this.attachShadow({ mode: 'open' });
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

      // for modals that are not programatically created
      // when the modal trigger is clicked show modal
      this.modalBtn.addEventListener('click', function (event) {
        _this2.setPosition();

        var thisButton = event.currentTarget,
            buttonDisabled = thisButton.getAttribute('disabled');

        if (buttonDisabled === null) {
          thisButton.setAttribute('disabled', true);
          _this2.main.setAttribute('aria-hidden', 'true');
          _this2.overlay.removeAttribute('disabled');
        }

        _this2.overlay.classList.remove('hidden');
        _this2.overlay.classList.remove('fadeOut');
        _this2.overlay.classList.add('fadeIn');

        _this2.modal.classList.remove('hidden');
        _this2.modal.classList.remove('slideOutDown');
        _this2.modal.classList.add('slideInDown');

        setTimeout(function () {
          setFocusToFirstChild(_this2.modal);
        }, 250);
      });

      // add event listener to the close button
      if (this.closeButtons !== null) {
        this.closeButtons.forEach(function (button) {
          button.addEventListener('click', function (event) {
            _this2.closeModal();
            setTimeout(function (event) {
              _this2.dispatchEvent(new Event('close', { bubbles: true, composed: true }));
            }, 500);
          });
        });
      }

      if (this.successButton !== null) {
        this.successButton.addEventListener('click', function (event) {
          _this2.closeModal();
          setTimeout(function (event) {
            _this2.dispatchEvent(new Event('success', { bubbles: true, composed: true }));
          }, 500);
        });
      }

      if (this.cancelButton !== null) {
        this.cancelButton.addEventListener('click', function (event) {
          _this2.closeModal();
          setTimeout(function (event) {
            _this2.dispatchEvent(new Event('cancel', { bubbles: true, composed: true }));
          }, 500);
        });
      }

      // sets the positioning for modals that are programmatically created and have scrolling content
      this.setPosition();

      this.boundMaintainFocus = this.maintainFocus.bind(this);
      this.boundBindKeyPress = this.bindKeyPress.bind(this);

      document.addEventListener('keydown', this.boundBindKeyPress);
      document.body.addEventListener('focus', this.boundMaintainFocus, true);
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      var _this3 = this;

      this.modalBtn.removeAttribute('disabled');
      this.main.setAttribute('aria-hidden', 'false');
      this.body.classList.remove('hide-overflow');

      this.overlay.classList.remove('fadeIn');
      this.overlay.classList.add('fadeOut');

      this.modal.classList.remove('slideInDown');
      this.modal.classList.add('slideOutDown');

      setTimeout(function (event) {
        _this3.overlay.classList.add('hidden');
        _this3.overlay.classList.remove('fadeOut');
      }, 800);

      setTimeout(function (event) {
        _this3.modal.classList.add('hidden');
        _this3.modal.classList.remove('slideOutDown');
      }, 400);

      setTimeout(function (event) {
        _this3.modalBtn.focus();
      }, 801);
    }
  }, {
    key: 'maintainFocus',
    value: function maintainFocus() {
      if (!this.modal.contains(getDeepActiveElement())) {
        setFocusToFirstChild(this.modal);
      }
    }
  }, {
    key: 'bindKeyPress',
    value: function bindKeyPress(e) {
      if (e.which === ESCAPE_KEY) {
        this.closeModal();
      }
      if (e.which === TAB_KEY) {
        trapTabKey(this.modal, e);
      }
    }
  }, {
    key: 'setPosition',
    value: function setPosition() {
      var _this4 = this;

      setTimeout(function () {
        var modalPosition = _this4.modal.getBoundingClientRect();
        window.scrollTo(0, 0);
        if (modalPosition.top <= 0) {
          _this4.modal.style.top = '50px';
          _this4.modal.style.transform = 'translate(-50%)';
          _this4.modal.style.marginBottom = '50px';
        }
      }, 100);
    }
  }]);

  return Modal;
}(HTMLElement);

customElements.define('pearson-modal', Modal);