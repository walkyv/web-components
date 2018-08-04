'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_HTMLElement) {
  _inherits(Modal, _HTMLElement);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));
  }

  _createClass(Modal, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      // shadow dom
      var shadow = this.attachShadow({
        mode: 'open'
      }),
          currentDoc = document.querySelector('link[href$="index.html"]').import;
      var template = currentDoc.querySelector('#template');
      var clone = document.importNode(template.content, true);

      shadow.appendChild(clone);
      // set attributes
      var titleText = this.getAttribute('modalTitleText'),
          successBtnText = this.getAttribute('successButtonText'),
          cancelBtnText = this.getAttribute('cancelButtonText'),
          referenceId = this.getAttribute('buttonReferenceId'),
          title = shadow.querySelector('#dialog-heading'),
          showFooter = this.getAttribute('showFooter'),
          showClose = this.getAttribute('showClose');

      // create elements
      // create the footer is attribute is set to true
      if (showFooter === 'true') {
        var actionsTemplate = currentDoc.querySelector('#actions'),
            actionsClone = document.importNode(actionsTemplate.content, true),
            actionsEntryPoint = shadow.querySelector('.modal-body');

        actionsEntryPoint.parentNode.insertBefore(actionsClone, actionsEntryPoint.nextSibling);

        var _cancelButton = shadow.querySelector('#cancelButton'),
            saveButton = shadow.querySelector('#successButton');

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
          overlayEntryPoint = shadow.querySelector('#modalPlaceholder');

      overlayEntryPoint.parentNode.insertBefore(overlayButtonClone, overlayEntryPoint.nextElementSibling);
      overlayEntryPoint.remove();

      if (titleText !== null) {
        title.innerHTML = titleText;
      } else {
        title.innerHTML = 'Modal Title';
      }

      // functionality
      var modal = shadow.querySelector('.modal'),
          firstButton = void 0;
      var modalButton = document.querySelector('#' + referenceId),
          modalContent = document.querySelector('pearson-modal'),
          modalButtons = modalContent.querySelectorAll('button, input, select, a'),
          body = document.getElementsByTagName('body')[0],
          overlay = shadow.querySelector('#modalOverlay'),
          main = document.getElementById('main'),
          buttons = shadow.querySelectorAll('button'),
          totalButtons = buttons.length - 1,
          lastButton = buttons[totalButtons],
          cancelButton = shadow.querySelector('.modal-cancel'),
          successButton = shadow.querySelector('.modal-success'),
          closeButtons = shadow.querySelectorAll('.modal-close');
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
        }, 900);

        setTimeout(function (event) {
          modal.classList.add('hidden');
          modal.classList.remove('slideOutDown');
          modalButton.focus();
        }, 400);
      }

      // for modals that are not programatically created
      // when the modal trigger is clicked show modal
      modalButton.addEventListener('click', function (event) {
        setModalPosition();

        var modal = shadow.querySelector('#modal');
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

        setTimeout(function (event) {
          modal.classList.remove('slideOutDown');
          modal.classList.add('slideInDown');
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
      shadow.addEventListener('keyup', function (event) {
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
  }]);

  return Modal;
}(HTMLElement);

customElements.define('pearson-modal', Modal);