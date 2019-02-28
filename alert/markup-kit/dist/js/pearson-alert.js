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

  function constrainToParentWidth(el) {
    var parent = el.parentElement;
    var parentWidth = parent.getBoundingClientRect().width;
    var parentComputedStyle = w.getComputedStyle(parent);
    var parentPaddingWidth = parseInt(parentComputedStyle.getPropertyValue('padding-left').match(/\d+/)[0], 10) + parseInt(parentComputedStyle.getPropertyValue('padding-right').match(/\d+/)[0], 10);

    var parentBorderWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width').match(/\d+/)[0], 10) + parseInt(parentComputedStyle.getPropertyValue('border-right-width').match(/\d+/)[0], 10);

    var elMinWidth = parseInt(w.getComputedStyle(el).getPropertyValue('min-width').match(/\d+/)[0], 10);

    // The width should be equal to the parent's width,
    // minus the padding and border
    var nextElWidth = parentWidth - (parentPaddingWidth + parentBorderWidth);

    if (nextElWidth > w.innerWidth) {
      nextElWidth = w.innerWidth;
    }

    // If that number is less than the min-width,
    if (nextElWidth < elMinWidth) {
      //  use min-width instead
      nextElWidth = elMinWidth;
    }

    el.style.width = nextElWidth + 'px';
  }

  var alertTrigger = doc.querySelector('[data-action="trigger-alert"]'),
      alert = doc.querySelector('[data-alert]'),
      alertClose = alert.querySelector('[data-action="close-alert"]');

  var alertType = alert.dataset.alertType;

  var focusBeforeOpen = void 0;

  if (alertType === 'inline') {
    alertTrigger.parentNode.insertBefore(alert, alertTrigger.nextElementSibling);
    constrainToParentWidth(alert);
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