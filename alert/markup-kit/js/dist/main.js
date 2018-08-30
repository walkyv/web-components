'use strict';

(function (w, doc) {
  'use strict';

  function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

  // function createPortal(anchorNode, newNode) {
  //   let anchorParent = anchorNode.parent;
  //   const relativeContainer = doc.createElement('div');
  //   relativeContainer.style.position('relative');
  // }
  var alertTrigger = doc.querySelector('[data-action="trigger-alert"]'),
      alert = doc.querySelector('[data-alert]'),
      alertContent = alert.querySelector('[data-alert-content]'),
      alertClose = alert.querySelector('[data-action="close-alert"]');

  var focusBeforeOpen = void 0;

  if (alert.dataset.alertType === 'inline') {
    var wrapper = doc.createElement('div');
    wrapper.style.position = 'relative';

    wrap(alertTrigger, wrapper);
    wrap(alert, wrapper);
  }

  function triggerAlert() {
    focusBeforeOpen = doc.activeElement;
    alert.hidden = false;
    alertContent.hidden = false;

    alert.classList.add('slideInDown');
    alert.classList.remove('slideOutDown');

    if (alert.hasAttribute('data-important')) {
      setTimeout(function () {
        alertClose.focus();
      }, 250);
    }
  }

  function closeAlert() {
    alert.classList.remove('slideInDown');
    alert.classList.add('slideOutDown');
    setTimeout(function () {
      alert.hidden = true;
      alertContent.hidden = true;
    }, 100);
    focusBeforeOpen.focus();
  }

  alertTrigger.addEventListener('click', triggerAlert);
  alertClose.addEventListener('click', closeAlert);
})(window, document);