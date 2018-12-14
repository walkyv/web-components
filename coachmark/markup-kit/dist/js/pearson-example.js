(function (w, doc) {
  'use strict';

  var openBtn = doc.querySelector('#trigger'),
      coachMark = doc.querySelector('.coachmark-container'),
      closeBtn = coachMark.querySelector('.dismiss');

  var STATE = {
    open: false
  };

  openButton.addEventListener('click', function (event) {
    coachMark.classList.remove('hidden');
  });

  // Your code ends here!
})(window, document);