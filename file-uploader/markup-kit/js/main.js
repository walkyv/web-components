(function() {
  'use strict';

  const attachBtn = document.querySelector('#attachFiles'),
    modal = document.querySelector('upload-modal'),
    uploadInfo = document.querySelector('#info'),
    realUploadInput = document.querySelector('input[type="file"]'),
    target = document.querySelector('.pe-progress-container'),
    uploadTitle = document.querySelector('.upload-title'),
    removeButton = target.querySelectorAll('.upload-actions button');



  function buildMarkup (data, res) {
    return `
        <div class="group">
          <div class="indicator">
            <img src="./icons/indicator.png" alt="progress" />
          </div>
          <div class="text">
            <strong>${data.name}</strong>
            <p class="info">${res.loaded} MB / ${res.total} MB</p>
          </div>
        </div>
        <div class="upload-actions">
          <button class="pe-icon--btn" aria-label="remove ${data.name} from uploads" onclick>
            <svg focusable="false" class="pe-icon--delete-18" role="img">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete-18"></use>
            </svg>
          </button>
        </div>
    `
  }

  function renderProgressItems (data, target, xhr) {
    const progressContainer = document.querySelector('.pe-progress-container');
    if (modal.footer !== true) {
      modal.footer = true;
      uploadInfo.style.display = 'block';
    }
    const div = document.createElement('DIV');
    div.classList.add('progress');
    target.appendChild(div);

    setTimeout(()=> {
      uploadTitle.innerHTML = "Uploading  (0 done, 0 in progress)"
      console.log(removeButton)
    },500)

    xhr(function(e) {
      div.innerHTML = buildMarkup(data, e)
      let percentLoaded = Math.round((e.loaded / e.total) * 100);
    });

  }

  // highlight function to outline drop area when a file is over area
  function highlight(event) {
    preventDefaults(event)
    dropArea.classList.add('highlight')
  }

  // removes highlight from drop area when file has left area
  function unhighlight(event) {
    preventDefaults(event);
    dropArea.classList.remove('highlight');
  }

  // prevents the file from opening in the browser
  function preventDefaults (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // adds functionality when item is dropped over target
  function handleDrop(event) {
    unhighlight(event);
    let dt = event.dataTransfer;
    let files = dt.files;
    handleFiles(files);
  }

  // takes the files, loops over them, and uploads them
  function handleFiles(files) {
    ([...files]).forEach(uploadFile);

  }

  // processes and uploads files
  function uploadFile(file) {
    const url = 'https://pearson-file-upload.s3.amazonaws.com/',
          xhr = new XMLHttpRequest(),
          formData = new FormData();

    function uploadProgress (callback) {
      xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
          callback(event)
        }
      };
    }

    renderProgressItems(file, target, uploadProgress);

    xhr.open('POST', url, true);
    formData.append('key', file.name);
    formData.append('file', file);
    xhr.send(formData);

  }

  function removeFile (node) {
    console.log(node)
    node.remove();

  }

  target.addEventListener('click', event => {
    preventDefaults(event);
    if (event.target.className === 'pe-icon--btn') {
      removeFile(event.target.parentNode.parentNode)
      if (target.children.length === 0) {
        uploadInfo.style.display = "none"
        modal.footer = false;
      }
    }
  });

  attachBtn.addEventListener('click', event => {
    realUploadInput.click();
  });

  realUploadInput.addEventListener('change', event=> {
    handleFiles(event.srcElement.files)
  });

  // setup drag and drop area
  let dropArea = document.querySelector('#drop');

  dropArea.addEventListener('dragenter', event => {
   highlight(event)
  });

  dropArea.addEventListener('dragover', event => {
    highlight(event)
  });

  dropArea.addEventListener('dragleave', event => {
    unhighlight(event)
  });

  dropArea.addEventListener('drop', event => {
    handleDrop(event);
  });


})();

