'use strict';

(function () {
  var attachBtn = document.getElementById('attachFiles'),
      modal = document.querySelector('upload-modal'),
      uploadInfo = document.getElementById('info'),
      realUploadInput = document.querySelector('input[type="file"]'),
      fileArr = [];

  attachBtn.addEventListener('click', function (event) {
    realUploadInput.click();
  });

  realUploadInput.addEventListener('change', function (event) {
    // display wide view and action buttons
    if (modal.footer !== true) {
      modal.footer = true;
      uploadInfo.style.display = 'block';
    }

    // create a map to loop over all the files
    var map = new Map(Object.entries(event.srcElement.files));

    // render progress
    var target = document.querySelector('.pe-progress-container'),
        uploadTitle = document.querySelector('.upload-title');

    // loop over map and render individual progress
    map.forEach(function (file, index) {
      var div = document.createElement('DIV'),
          html = ['<div class="group">', '<div class="indicator">', '<img src="./icons/indicator.png" alt="progress" />', '</div>', '<div class="text">', '<strong>', file.name, '</strong>', '<p class="info">0 MB / ', file.size, ' MB', '</p>', '</div>', '</div>', '<div class="upload-actions">', '<button class="pe-icon--btn">', '<svg focusable="false" class="pe-icon--remove-sm-24" aria-label="remove file" role="img" >', '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#remove-sm-24"></use>', '</svg>', '</button>', '</div>'].join('');

      div.classList.add('progress');
      target.appendChild(div);
      div.innerHTML = html;
      fileArr.push(file);
    });

    // update the title to show total progress
    uploadTitle.innerHTML = "Uploading  (0 done, " + fileArr.length + " in progress)";
  });
})();