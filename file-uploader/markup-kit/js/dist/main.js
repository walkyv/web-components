'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {

  var attachBtn = document.getElementById('attachFiles'),
      modal = document.querySelector('upload-modal'),
      uploadInfo = document.getElementById('info'),
      realUploadInput = document.querySelector('input[type="file"]'),
      target = document.querySelector('.pe-progress-container'),
      uploadTitle = document.querySelector('.upload-title'),
      fileArr = [];

  function renderProgressItems(data, target) {
    if (modal.footer !== true) {
      modal.footer = true;
      uploadInfo.style.display = 'block';
    }

    var div = document.createElement('DIV'),
        html = ['<div class="group">', '<div class="indicator">', '<img src="./icons/indicator.png" alt="progress" />', '</div>', '<div class="text">', '<strong>', data.name, '</strong>', '<p class="info">0 MB / ', data.size, ' MB', '</p>', '</div>', '</div>', '<div class="upload-actions">', '<button class="pe-icon--btn">', '<svg focusable="false" class="pe-icon--delete-18" aria-label="remove file" role="img" >', '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete-18"></use>', '</svg>', '</button>', '</div>'].join('');

    div.classList.add('progress');
    target.appendChild(div);
    div.innerHTML = html;
    fileArr.push(data);
    uploadTitle.innerHTML = "Uploading  (0 done, " + fileArr.length + " in progress)";
  }

  // highlight function to outline drop area when a file is over area
  function highlight(e) {
    preventDefaults(e);
    dropArea.classList.add('highlight');
  }

  // removes highlight from drop area when file has left area
  function unhighlight(e) {
    preventDefaults(e);
    dropArea.classList.remove('highlight');
  }

  // prevents the file from opening in the browser
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // adds functionality when item is dropped over target
  function handleDrop(e) {
    unhighlight(e);
    var dt = e.dataTransfer;
    var files = dt.files;
    handleFiles(files);
  }

  // takes the files, loops over them, and uploads them
  function handleFiles(files) {
    [].concat(_toConsumableArray(files)).forEach(uploadFile);
  }

  // processes and uploads files
  function uploadFile(file) {
    renderProgressItems(file, target);
    var url = 'http://localhost:8989/upload';
    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    xhr.open('POST', url, true);

    xhr.onprogress = function (e) {
      console.log(e);
      if (e.lengthComputable) {
        console.log(e.loaded + " / " + e.total);
      }
    };

    xhr.onloadstart = function (e) {
      console.log("start");
    };

    xhr.addEventListener('readystatechange', function (e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Done. Inform the user

      } else if (xhr.readyState == 4 && xhr.status != 200) {
        // Error. Inform the user
      }
    });

    formData.append('file', file);
    xhr.send(formData);
  }

  attachBtn.addEventListener('click', function (event) {
    realUploadInput.click();
  });

  realUploadInput.addEventListener('change', function (event) {
    handleFiles(event.srcElement.files);
  });

  // setup drag and drop area
  var dropArea = document.getElementById('drop');

  dropArea.addEventListener('dragenter', function (event) {
    highlight(event);
  });

  dropArea.addEventListener('dragover', function (event) {
    highlight(event);
  });

  dropArea.addEventListener('dragleave', function (event) {
    unhighlight(event);
  });

  dropArea.addEventListener('drop', function (event) {
    handleDrop(event);
  });
})();