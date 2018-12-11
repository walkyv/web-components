(function (w, doc) {
  'use strict';

  var openBtn = doc.querySelector('#trigger'),
      coachMark = doc.querySelector('.coachmark-container'),
      closeBtn = coachMark.querySelector('.dismiss');

  openBtn.addEventListener('click', function (event) {
    coachMark.classList.remove('hidden');
    closeBtn.focus();
    if (event.target.id === 'trigger') {
      var reference = doc.querySelector('#bottom');
      var popperInstance = new Popper(reference, coachMark, {
        placement: 'bottom',
        modifiers: {
          arrow: { enabled: true }
        }
      });
    }
  });

  closeBtn.addEventListener('click', function () {
    coachMark.classList.add('hidden');
    openBtn.focus();
  });

  // Your code ends here!
})(window, document);