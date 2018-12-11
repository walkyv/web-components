(function(w, doc) {
  'use strict';

  const openBtn = doc.querySelector('#trigger'),
    coachMark = doc.querySelector('.coachmark-container'),
    closeBtn = coachMark.querySelector('.dismiss');

  openBtn.addEventListener('click', (event) => {
    coachMark.classList.remove('hidden');
    closeBtn.focus();
    if (event.target.id === 'trigger') {
      const reference = doc.querySelector('#bottom');
      const popperInstance = new Popper(reference, coachMark, {
        placement: 'bottom',
        modifiers: {
          arrow: { enabled: true },
        }
      });
    }
  });

  closeBtn.addEventListener('click', () => {
    coachMark.classList.add('hidden');
    openBtn.focus();
  });

  // Your code ends here!
})(window, document);
