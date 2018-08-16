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

      // shadow dom

      var currentDoc = document.querySelector('link[href$="index.html"]').import;
      var template = currentDoc.querySelector('#template');
      var clone = document.importNode(template.content, true);

      // set attributes
      var titleText = this.getAttribute('modalTitleText'),
          successBtnText = this.getAttribute('successButtonText'),
          cancelBtnText = this.getAttribute('cancelButtonText'),
          referenceId = this.getAttribute('buttonReferenceId'),
          showFooter = this.getAttribute('showFooter');

      // create elements
      var modalBody = clone.querySelector('.modal-body');
      while (this.children.length > 0) {
        modalBody.appendChild(this.children[0]);
      }

      // create the footer is attribute is set to true
      if (showFooter === 'true') {
        var actionsTemplate = currentDoc.querySelector('#actions'),
            actionsClone = document.importNode(actionsTemplate.content, true);

        modalBody.parentNode.insertBefore(actionsClone, modalBody.nextSibling);

        var cancelButton = clone.querySelector('#cancelButton'),
            saveButton = clone.querySelector('#successButton');

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
          overlayEntryPoint = clone.querySelector('#modalPlaceholder');

      overlayEntryPoint.parentNode.insertBefore(overlayButtonClone, overlayEntryPoint.nextElementSibling);
      overlayEntryPoint.remove();

      var title = clone.querySelector('#dialog-heading');
      if (titleText !== null) {
        title.innerHTML = titleText;
      } else {
        title.innerHTML = 'Modal Title';
      }

      // functionality
      this.body = document.getElementsByTagName('body')[0];
      this.main = document.getElementById('main');
      this.modalBtn = document.querySelector('#' + referenceId);

      this.modal = clone.querySelector('.modal');
      this.overlay = clone.querySelector('#modalOverlay');
      this.cancelButton = clone.querySelector('.modal-cancel');
      this.successButton = clone.querySelector('.modal-success');
      this.closeButtons = clone.querySelectorAll('.modal-close');

      // for modals that are not programatically created
      // when the modal trigger is clicked show modal
      this.modalBtn.addEventListener('click', this.openModal);

      // add () listener to the close button
      if (this.closeButtons !== null) {
        this.closeButtons.forEach(function (button) {
          button.addEventListener('click', function () {
            _this2.closeModal();
            setTimeout(function () {
              _this2.dispatchEvent(new Event('close', { bubbles: true, composed: true }));
            }, 500);
          });
        });
      }

      if (this.successButton !== null) {
        this.successButton.addEventListener('click', function () {
          _this2.closeModal();
          setTimeout(function () {
            _this2.dispatchEvent(new Event('success', { bubbles: true, composed: true }));
          }, 500);
        });
      }

      if (this.cancelButton !== null) {
        this.cancelButton.addEventListener('click', function () {
          _this2.closeModal();
          setTimeout(function () {
            _this2.dispatchEvent(new Event('cancel', { bubbles: true, composed: true }));
          }, 500);
        });
      }

      // sets the positioning for modals that are programmatically created and have scrolling content
      this.setPosition();

      this.shadowRoot.appendChild(clone);
    }
  }, {
    key: 'openModal',
    value: function openModal(e) {
      var _this3 = this;

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

      setTimeout(function () {
        _this3.maintainFocus();
      }, 250);

      document.addEventListener('keydown', this.bindKeyPress);
      document.body.addEventListener('focus', this.maintainFocus, true);
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

      setTimeout(function () {
        _this4.overlay.classList.add('hidden');
        _this4.overlay.classList.remove('fadeOut');
      }, 800);

      setTimeout(function () {
        _this4.modal.classList.add('hidden');
        _this4.modal.classList.remove('slideOutDown');
      }, 400);

      setTimeout(function () {
        _this4.modalBtn.focus();
      }, 801);

      document.removeEventListener('keydown', this.bindKeyPress);
      document.body.removeEventListener('focus', this.maintainFocus);
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
      var _this5 = this;

      setTimeout(function () {
        var modalPosition = _this5.modal.getBoundingClientRect();
        window.scrollTo(0, 0);
        if (modalPosition.top <= 0) {
          _this5.modal.style.top = '50px';
          _this5.modal.style.transform = 'translate(-50%)';
          _this5.modal.style.marginBottom = '50px';
        }
      }, 100);
    }
  }]);

  return Modal;
}(HTMLElement);

customElements.define('pearson-modal', Modal);