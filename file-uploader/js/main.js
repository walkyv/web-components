(function(w, doc) {
  'use strict';

  const currentDoc = doc.querySelector('link[href$="file-upload.html"]').import,
    template = currentDoc.querySelector('#template');

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-uploader');

  function preventDefaults (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  class FileUpload extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const clone = doc.importNode(template.content.cloneNode(true), true);

      /** If we need references to the children of the component,
       * we can create them here. If they are created elsewhere,
       * they will not be available our lifecycle methods.
       */

      this.uploadInfo = clone.querySelector('#info');
      this.realUploadInput = clone.querySelector('input[type="file"]');
      this.attachBtn = clone.querySelector('#attachFiles');
      this.target = clone.querySelector('#progressContainer');
      this.dropArea = clone.querySelector('#drop');
      this.modal = doc.querySelector('upload-modal');


      /** After all this, we can append our clone to the shadowRoot */
      this.shadowRoot.appendChild(clone);

      /** We should also bind any event listeners to `this` so their
       * references do not get lost.
       */

      this.handleFiles = this.handleFiles.bind(this);
      this.uploadFile = this.uploadFile.bind(this);
      this.renderProgressItems = this.renderProgressItems.bind(this);
      this.highlight = this.highlight.bind(this);
      this.unhighlight = this.unhighlight.bind(this);
      this.handleDrop = this.handleDrop.bind(this);
    }

    connectedCallback() {
      /** Any changes to what the component renders should be done here. */

      // Get the attributes set by the consumer
      // const titleText = this.getAttribute('title');
      // const buttonText = this.getAttribute('buttonText');
      //
      // this.heading.textContent = titleText;
      // this.button.textContent = buttonText;

      /** Event listeners should also be bound here. */
      // this.button.addEventListener('click', this.handleClick);


      this.realUploadInput.addEventListener('change', event => {
        this.handleFiles(event.srcElement.files);
        console.log(this.attachBtn)
        this.attachBtn.focus();
      });

      this.attachBtn.addEventListener('click', event => {
        this.realUploadInput.click();
      });

      this.dropArea.addEventListener('dragenter', event => {
        this.highlight(event)
      });

      this.dropArea.addEventListener('dragover', event => {
        this.highlight(event)
      });

      this.dropArea.addEventListener('dragleave', event => {
        this.unhighlight(event)
      });

      this.dropArea.addEventListener('drop', event => {
        this.handleDrop(event);
      });

    }

    handleFiles(files) {
      ([...files]).forEach(this.uploadFile);
    }

    uploadFile(file) {
      const url = 'https://pearson-file-upload.s3.amazonaws.com/',
        xhr = new XMLHttpRequest(),
        formData = new FormData();

      function uploadProgress (callback) {
        status.progress = status.progress + 1
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

    renderProgressItems (data, target, xhr) {
      if (this.modal.footer !== true) {
        this.modal.footer = true;
        this.uploadInfo.style.display = 'block';
      }
      const div = document.createElement('DIV');
      div.classList.add('progress');
      target.appendChild(div);

      xhr(function(event) {
        let percentLoaded = Math.round((event.loaded / event.total) * 100);
        div.innerHTML = buildMarkup(data, event, percentLoaded)
      });
    }

    highlight(event) {
      preventDefaults(event);
      this.dropArea.classList.add('highlight')
    }

    // removes highlight from drop area when file has left area
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
