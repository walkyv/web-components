(function (w, doc) {
  'use strict';

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

  var alertTrigger = doc.querySelector('[data-action="trigger-alert"]'),
      alert = doc.querySelector('[data-alert]'),
      alertClose = alert.querySelector('[data-action="close-alert"]');

  var alertType = alert.dataset.alertType;

  var focusBeforeOpen = void 0;

  if (alertType === 'inline') {

    // Place the alert in the DOM right after the trigger
    alertTrigger.parentNode.insertBefore(alert, alertTrigger.nextElementSibling);
  }

  function triggerAlert() {
    focusBeforeOpen = doc.activeElement;

    if (alertType === 'inline') {
      alert.classList.add('fadeIn');
      alert.classList.remove('fadeOut');
    }

    if (alertType === 'global') {
      alert.classList.add('slideInDown');
      alert.classList.remove('slideOutDown');

      setTimeout(function () {
        setFocusToFirstChild(alert);
      }, 250);
    }
  }

  function closeAlert() {
    if (alertType === 'inline') {
      alert.classList.add('fadeOut');
      alert.classList.remove('fadeIn');
    }
    if (alertType === 'global') {
      alert.classList.remove('slideInDown');
      alert.classList.add('slideOutDown');
    }
    focusBeforeOpen.focus();
  }

  alertTrigger.addEventListener('click', triggerAlert);
  alertClose.addEventListener('click', closeAlert);
})(window, document);