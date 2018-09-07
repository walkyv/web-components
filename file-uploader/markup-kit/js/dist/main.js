'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {

  var attachBtn = document.querySelector('#attachFiles'),
      modal = document.querySelector('upload-modal'),
      uploadInfo = document.querySelector('#info'),
      realUploadInput = document.querySelector('input[type="file"]'),
      target = document.querySelector('.pe-progress-container'),
      uploadTitle = document.querySelector('.upload-title'),
      fileArr = [];

  function buildMarkup(data) {
    return '\n        <div class="group">\n          <div class="indicator">\n            <img src="./icons/indicator.png" alt="progress" />\n          </div>\n          <div class="text">\n            <strong>' + data.name + '</strong>\n            <p class="info">0 MB / ' + data.size + ' MB</p>\n          </div>\n        </div>\n        <div class="upload-actions">\n          <button class="pe-icon--btn" aria-label="remove ' + data.name + ' from uploads">\n            <svg focusable="false" class="pe-icon--delete-18" role="img">\n              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete-18"></use>\n            </svg>\n          </button>\n        </div>\n    ';
  }

  function renderProgressItems(data, target) {
    if (modal.footer !== true) {
      modal.footer = true;
      uploadInfo.style.display = 'block';
    }
    var div = document.createElement('DIV');
    div.classList.add('progress');
    target.appendChild(div);
    div.innerHTML = buildMarkup(data);
    fileArr.push(data);
    setTimeout(function () {
      uploadTitle.innerHTML = "Uploading  (0 done, " + fileArr.length + " in progress)";
    }, 500);
  }

  // highlight function to outline drop area when a file is over area
  function highlight(event) {
    preventDefaults(event);
    dropArea.classList.add('highlight');
  }

  // removes highlight from drop area when file has left area
  function unhighlight(event) {
    preventDefaults(event);
    dropArea.classList.remove('highlight');
  }

  // prevents the file from opening in the browser
  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // adds functionality when item is dropped over target
  function handleDrop(event) {
    unhighlight(event);
    var dt = event.dataTransfer;
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

    xhr.onprogress = function (event) {
      if (event.lengthComputable) {
        console.log(e.loaded + " / " + event.total);
      }
    };

    xhr.onloadstart = function (event) {
      console.log("start");
    };

    xhr.addEventListener('readystatechange', function (event) {
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
  var dropArea = document.querySelector('#drop');

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