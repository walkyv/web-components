'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {
  'use strict';

  var attachBtn = document.querySelector('#attachFiles'),
      modal = document.querySelector('upload-modal'),
      uploadInfo = document.querySelector('#info'),
      realUploadInput = document.querySelector('input[type="file"]'),
      target = document.querySelector('.pe-progress-container'),
      uploadTitle = document.querySelector('.upload-title'),
      circle = document.querySelector('.progress-ring__circle');

  function buildMarkup(data, res, total) {
    function formatBytes(bytes, decimals) {
      if (bytes == 0) return '0 Bytes';
      var k = 1024,
          dm = decimals <= 0 ? 0 : decimals || 2,
          sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    return '\n        <div class="group">\n          <div class="indicator">\n       \t       <progress-ring stroke="3" radius="25" progress=' + total + '></progress-ring>\n       \t       <span>' + total + '%</span>\n          </div>\n          <div class="text">\n            <strong>' + data.name + '</strong>\n            <p class="info">' + formatBytes(res.loaded) + ' / ' + formatBytes(res.total) + '</p>\n          </div>\n        </div>\n        <div class="upload-actions">\n          <button class="pe-icon--btn" aria-label="remove ' + data.name + ' from uploads" onclick>\n            <svg focusable="false" class="pe-icon--delete-18" role="img">\n              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete-18"></use>\n            </svg>\n          </button>\n        </div>\n    ';
  }

  function renderProgressItems(data, target, xhr) {
    if (modal.footer !== true) {
      modal.footer = true;
      uploadInfo.style.display = 'block';
    }
    var div = document.createElement('DIV');
    div.classList.add('progress');
    target.appendChild(div);

    setTimeout(function () {
      uploadTitle.innerHTML = "Uploading  (0 done, 0 in progress)";
    }, 1000);

    xhr(function (e) {
      var percentLoaded = Math.round(e.loaded / e.total * 100);
      div.innerHTML = buildMarkup(data, e, percentLoaded);
    });
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
    var url = 'https://pearson-file-upload.s3.amazonaws.com/',
        xhr = new XMLHttpRequest(),
        formData = new FormData();

    function uploadProgress(callback) {
      xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
          callback(event);
        }
      };
    }

    renderProgressItems(file, target, uploadProgress);

    xhr.open('POST', url, true);
    formData.append('key', file.name);
    formData.append('file', file);
    xhr.send(formData);
  }

  function removeFile(node) {
    console.log(node);
    node.remove();
  }

  target.addEventListener('click', function (event) {
    preventDefaults(event);
    if (event.target.className === 'pe-icon--btn') {
      removeFile(event.target.parentNode.parentNode);
      if (target.children.length === 0) {
        uploadInfo.style.display = "none";
        modal.footer = false;
      }
    }
  });

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