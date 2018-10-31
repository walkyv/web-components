

(function(w, doc) {
  'use strict';
  const currentDoc = doc.querySelector('link[href$="file-upload.html"]').import,
    template = currentDoc.querySelector('#template'),
    info = currentDoc.querySelector('#progressInfo'),
    check = currentDoc.querySelector('#check'),
    modal = doc.querySelector('upload-modal');

  let status = {
    'done': 0,
    'progress': 0
  };

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-uploader');

  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  class FileUpload extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });

      const clone = doc.importNode(template.content.cloneNode(true), true);

      this.uploadInfo = clone.querySelector('#info');
      this.realUploadInput = clone.querySelector('input[type="file"]');
      this.attachBtn = clone.querySelector('#attachFiles');
      this.target = clone.querySelector('#progressContainer');
      this.dropArea = clone.querySelector('#drop');
      this.modal = doc.querySelector('upload-modal');

      this.handleFiles = this.handleFiles.bind(this);
      this.uploadFile = this.uploadFile.bind(this);
      this.renderProgressItems = this.renderProgressItems.bind(this);
      this.highlight = this.highlight.bind(this);
      this.unhighlight = this.unhighlight.bind(this);
      this.handleDrop = this.handleDrop.bind(this);

      this.shadowRoot.appendChild(clone);
    }

    connectedCallback() {
      this.realUploadInput.addEventListener('change', event => {
        this.handleFiles(event.srcElement.files);
        this.attachBtn.focus({
          preventScroll: true
        });
      });

      this.attachBtn.addEventListener('click', () => {
        this.realUploadInput.click();
      });

      this.dropArea.addEventListener('dragenter', this.highlight);
      this.dropArea.addEventListener('dragover', this.highlight);
      this.dropArea.addEventListener('dragleave', this.unhighlight);
      this.dropArea.addEventListener('drop', this.handleDrop);
    }

    handleFiles(files) {
      ([...files]).forEach(this.uploadFile);
    }

    uploadFile(file) {
      const url = 'https://pearson-file-upload.s3.amazonaws.com/',
        xhr = new XMLHttpRequest(),
        formData = new FormData();

      function uploadProgress(callback) {
        status.progress++;
        xhr.upload.onprogress = function(event) {
          if (event.lengthComputable) {
            callback(event)
          }
        };
      }

      this.renderProgressItems(file, this.target, uploadProgress);
      xhr.open('POST', url, true);
      formData.append('key', file.name);
      formData.append('file', file);
      xhr.send(formData);
    }

    renderProgressItems(data, target, xhr) {
      const infoClone = doc.importNode(info.content.cloneNode(true), true),
        checkClone = doc.importNode(check.content.cloneNode(true), true),
        progressTarget = this.shadowRoot.querySelector('#progressContainer'),
        filename = infoClone.querySelector('.filename'),
        bytesLoaded = infoClone.querySelector('.bytes-loaded'),
        bytesTotal = infoClone.querySelector('.bytes-total'),
        textTotal = infoClone.querySelector('.total'),
        indicator = infoClone.querySelector('.indicator'),
        uploadTitle = this.shadowRoot.querySelector('#uploadTitle'),
        buildRing = document.createElement('progress-ring');

      function buildMarkup(file, progressEvent) {
        if (progressEvent.loaded === progressEvent.total) {
          status.done++;
          if (status.progress > 0){
            status.progress--
          }
        }

        function formatBytes(bytes, decimals) {
          if (bytes === 0) return bytes.innerHTML = '0 Bytes';
          const k = 1024,
            dm = decimals <= 0 ? 0 : decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
          return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
        progressTarget.appendChild(infoClone);
        buildRing.setAttribute('stroke', 3);
        buildRing.setAttribute('radius', 25);
        filename.innerHTML = file.name;
        bytesLoaded.innerHTML = formatBytes(progressEvent.loaded);
        bytesTotal.innerHTML = formatBytes(progressEvent.total);
        indicator.appendChild(buildRing);
        uploadTitle.innerHTML = 'Uploading ('+ status.done + ' done,' + status.progress + '     progress)';
        modal.dispatchEvent(
          new CustomEvent('xhrLoading', {
            detail: {
              done: status.done,
              progress: status.progress
            }
          })
        );
      }

      if (modal.footer !== true) {
        modal.footer = true;
        this.uploadInfo.style.display = 'block';
      }

      function toggleCheckmark(total) {
        if (total !== 100) {
          return textTotal.innerHTML = total
        } else {
          return textTotal.innerHTML = checkClone.querySelector('span').innerHTML
        }
      }

      xhr(function(event) {
        let percentLoaded = Math.round((event.loaded / event.total) * 100);
        toggleCheckmark(percentLoaded);
        if (buildRing !== null) {
          buildRing.setAttribute('progress', percentLoaded);
        }
        buildMarkup(data, event, percentLoaded)
      });
    }

    highlight(event) {
      preventDefaults(event);
      this.dropArea.classList.add('highlight')
    }

    unhighlight(event) {
      preventDefaults(event);
      this.dropArea.classList.remove('highlight');
    }

    handleDrop(event) {
      this.unhighlight(event);
      let dt = event.dataTransfer;
      let files = dt.files;
      this.handleFiles(files);
    }
  }
  customElements.define('pearson-uploader', FileUpload);
})(window, document);
