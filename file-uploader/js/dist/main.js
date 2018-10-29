'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var currentDoc = doc.querySelector('link[href$="file-upload.html"]').import,
      template = currentDoc.querySelector('#template');

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-uploader');

  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  var FileUpload = function (_HTMLElement) {
    _inherits(FileUpload, _HTMLElement);

    function FileUpload() {
      _classCallCheck(this, FileUpload);

      var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = doc.importNode(template.content.cloneNode(true), true);

      /** If we need references to the children of the component,
       * we can create them here. If they are created elsewhere,
       * they will not be available our lifecycle methods.
       */

      _this.uploadInfo = clone.querySelector('#info');
      _this.realUploadInput = clone.querySelector('input[type="file"]');
      _this.attachBtn = clone.querySelector('#attachFiles');
      _this.target = clone.querySelector('#progressContainer');
      _this.dropArea = clone.querySelector('#drop');
      _this.modal = doc.querySelector('upload-modal');

      /** After all this, we can append our clone to the shadowRoot */
      _this.shadowRoot.appendChild(clone);

      /** We should also bind any event listeners to `this` so their
       * references do not get lost.
       */

      _this.handleFiles = _this.handleFiles.bind(_this);
      _this.uploadFile = _this.uploadFile.bind(_this);
      _this.renderProgressItems = _this.renderProgressItems.bind(_this);
      _this.highlight = _this.highlight.bind(_this);
      _this.unhighlight = _this.unhighlight.bind(_this);
      _this.handleDrop = _this.handleDrop.bind(_this);
      return _this;
    }

    _createClass(FileUpload, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        /** Any changes to what the component renders should be done here. */

        // Get the attributes set by the consumer
        // const titleText = this.getAttribute('title');
        // const buttonText = this.getAttribute('buttonText');
        //
        // this.heading.textContent = titleText;
        // this.button.textContent = buttonText;

        /** Event listeners should also be bound here. */
        // this.button.addEventListener('click', this.handleClick);


        this.realUploadInput.addEventListener('change', function (event) {
          _this2.handleFiles(event.srcElement.files);
          console.log(_this2.attachBtn);
          _this2.attachBtn.focus();
        });

        this.attachBtn.addEventListener('click', function (event) {
          _this2.realUploadInput.click();
        });

        this.dropArea.addEventListener('dragenter', function (event) {
          _this2.highlight(event);
        });

        this.dropArea.addEventListener('dragover', function (event) {
          _this2.highlight(event);
        });

        this.dropArea.addEventListener('dragleave', function (event) {
          _this2.unhighlight(event);
        });

        this.dropArea.addEventListener('drop', function (event) {
          _this2.handleDrop(event);
        });
      }
    }, {
      key: 'handleFiles',
      value: function handleFiles(files) {
        [].concat(_toConsumableArray(files)).forEach(this.uploadFile);
      }
    }, {
      key: 'uploadFile',
      value: function uploadFile(file) {
        var url = 'https://pearson-file-upload.s3.amazonaws.com/',
            xhr = new XMLHttpRequest(),
            formData = new FormData();

        function uploadProgress(callback) {
          status.progress = status.progress + 1;
          xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
              callback(event);
            }
          };
        }

        this.renderProgressItems(file, this.target, uploadProgress);
        xhr.open('POST', url, true);
        formData.append('key', file.name);
        formData.append('file', file);
        xhr.send(formData);
      }
    }, {
      key: 'renderProgressItems',
      value: function renderProgressItems(data, target, xhr) {
        if (this.modal.footer !== true) {
          this.modal.footer = true;
          this.uploadInfo.style.display = 'block';
        }
        var div = document.createElement('DIV');
        div.classList.add('progress');
        target.appendChild(div);

        xhr(function (event) {
          var percentLoaded = Math.round(event.loaded / event.total * 100);
          div.innerHTML = buildMarkup(data, event, percentLoaded);
        });
      }
    }, {
      key: 'highlight',
      value: function highlight(event) {
        preventDefaults(event);
        this.dropArea.classList.add('highlight');
      }

      // removes highlight from drop area when file has left area

    }, {
      key: 'unhighlight',
      value: function unhighlight(event) {
        preventDefaults(event);
        this.dropArea.classList.remove('highlight');
      }
    }, {
      key: 'handleDrop',
      value: function handleDrop(event) {
        this.unhighlight(event);
        var dt = event.dataTransfer;
        var files = dt.files;
        this.handleFiles(files);
      }
    }]);

    return FileUpload;
  }(HTMLElement);

  customElements.define('pearson-uploader', FileUpload);
})(window, document);