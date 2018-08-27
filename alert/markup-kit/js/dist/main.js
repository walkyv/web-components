'use strict';

(function () {
  // do something

  var closeButton = document.getElementById('closeAlert'),
      alert = document.getElementById('alert');

  closeButton.addEventListener('click', function (event) {
    alert.classList.remove('slideInDown');
    alert.classList.add('slideOutDown');
  });
})();