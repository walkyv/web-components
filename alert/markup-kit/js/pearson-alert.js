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

  function constrainToParentWidth(el) {
    const parent = el.parentElement;
    const parentWidth = parent.getBoundingClientRect().width;
    const parentComputedStyle = w.getComputedStyle(parent);
    const parentPaddingWidth =
      parseInt(
        parentComputedStyle.getPropertyValue('padding-left').match(/\d+/)[0],
        10
      ) +
      parseInt(
        parentComputedStyle.getPropertyValue('padding-right').match(/\d+/)[0],
        10
      );

    const parentBorderWidth =
      parseInt(
        parentComputedStyle
          .getPropertyValue('border-left-width')
          .match(/\d+/)[0],
        10
      ) +
      parseInt(
        parentComputedStyle
          .getPropertyValue('border-right-width')
          .match(/\d+/)[0],
        10
      );

    const elMinWidth = parseInt(
      w
        .getComputedStyle(el)
        .getPropertyValue('min-width')
        .match(/\d+/)[0],
      10
    );

    // The width should be equal to the parent's width,
    // minus the padding and border
    let nextElWidth = parentWidth - (parentPaddingWidth + parentBorderWidth);

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

  const alertTrigger = doc.querySelector('[data-action="trigger-alert"]'),
    alert = doc.querySelector('[data-alert]'),
    alertInteractives = alert.querySelectorAll(FOCUSABLE_ELEMENTS);

  const alertType = alert.dataset.alertType;

  let focusBeforeOpen;

  if (alertType === 'inline') {
    alertTrigger.parentNode.insertBefore(
      alert,
      alertTrigger.nextElementSibling
    );
    constrainToParentWidth(alert);
  }

  function triggerAlert() {

    if (alertType === 'inline') {
      alert.classList.add('fadeIn');
      alert.classList.remove('fadeOut');
    }

    if (alertType === 'global') {
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
    alertTrigger.focus();
  }

  alertTrigger.addEventListener('click', triggerAlert);
  Array.prototype.forEach.call(alertInteractives, function (i) {
    i.addEventListener('click', closeAlert);
  });
})(window, document);
