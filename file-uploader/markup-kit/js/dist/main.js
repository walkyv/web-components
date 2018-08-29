'use strict';

(function () {
  var attachBtn = document.getElementById('attachFiles'),
      modal = document.querySelector('upload-modal'),
      uploadInfo = document.getElementById('info');

  console.log(uploadInfo);
  attachBtn.addEventListener('click', function (event) {
    if (modal.footer !== true) {
      modal.footer = true;
      uploadInfo.style.display = 'block';
    } else {
      return false;
    }
  });
})();