(function(w, doc) {
  'use strict';

  const FOCUSABLE_ELEMENTS = `a:not([disabled]), button:not([disabled])`;

  function getFocusableChildren(node) {
    const filter = Array.prototype.filter,
      focusableChildren = node.querySelectorAll(FOCUSABLE_ELEMENTS);
    return filter.call(focusableChildren, function(child) {
      return !!(
        child.offsetWidth ||
        child.offsetHeight ||
        child.getClientRects().length
      );
    });
  }

  function setFocusToFirstChild(node) {
    const focusableChildren = getFocusableChildren(node),
      focusableChild =
        node.querySelector('[autofocus]') || focusableChildren[0];
    if (focusableChild) {
      focusableChild.focus();
    }
  }

  function moveIntoViewport(el) {
    el.style.top = w.scrollY + 'px';
    el.style.left = w.scrollX + 'px';
  }

  const alertTrigger = doc.querySelector('[data-action="trigger-alert"]'),
    alert = doc.querySelector('[data-alert]'),
    alertClose = alert.querySelector('[data-action="close-alert"]');

  const alertType = alert.dataset.alertType;

  let focusBeforeOpen;

  if (alertType === 'inline') {

    // Place the alert in the DOM right after the trigger
    alertTrigger.parentNode.insertBefore(
      alert,
      alertTrigger.nextElementSibling
    );
  }

  function triggerAlert() {
    focusBeforeOpen = doc.activeElement;

    if (alertType === 'inline') {
      alert.classList.add('fadeIn');
      alert.classList.remove('fadeOut');
    }

    if (alertType === 'global') {
      moveIntoViewport(alert);
      alert.classList.add('slideInDown');
      alert.classList.remove('slideOutDown');

      setTimeout(() => {
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
