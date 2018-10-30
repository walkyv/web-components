'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  var currentDoc = doc.querySelector('link[href$="file-upload.html"]').import,
      template = currentDoc.querySelector('#template'),
      info = currentDoc.querySelector('#progressInfo'),
      check = currentDoc.querySelector('#check'),
      modal = doc.querySelector('upload-modal');

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'pearson-uploader');

  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  var FileUpload = function (_HTMLElement) {
    _inherits(FileUpload, _HTMLElement);

    function FileUpload() {
      _classCallCheck(this, FileUpload);

      var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this));

      _this.attachShadow({
        mode: 'open'
      });

      var clone = doc.importNode(template.content.cloneNode(true), true);

      _this.uploadInfo = clone.querySelector('#info');
      _this.realUploadInput = clone.querySelector('input[type="file"]');
      _this.attachBtn = clone.querySelector('#attachFiles');
      _this.target = clone.querySelector('#progressContainer');
      _this.dropArea = clone.querySelector('#drop');
      _this.modal = doc.querySelector('upload-modal');
      _this.shadowRoot.appendChild(clone);

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

        this.realUploadInput.addEventListener('change', function (event) {
          _this2.handleFiles(event.srcElement.files);
          _this2.attachBtn.focus({
            preventScroll: true
          });
        });

        this.attachBtn.addEventListener('click', function (event) {
          _this2.realUploadInput.click();
        });

        this.dropArea.addEventListener('dragenter', this.highlight);
        this.dropArea.addEventListener('dragover', this.highlight);
        this.dropArea.addEventListener('dragleave', this.unhighlight);
        this.dropArea.addEventListener('drop', this.handleDrop);
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
        var infoClone = doc.importNode(info.content.cloneNode(true), true),
            checkClone = doc.importNode(check.content.cloneNode(true), true),
            progressTarget = this.shadowRoot.querySelector('#progressContainer'),
            filename = infoClone.querySelector('.filename'),
            bytesLoaded = infoClone.querySelector('.bytes-loaded'),
            bytesTotal = infoClone.querySelector('.bytes-total'),
            textTotal = infoClone.querySelector('.total'),
            indicator = infoClone.querySelector('.indicator'),
            buildRing = document.createElement('progress-ring');

        progressTarget.appendChild(infoClone);

        function buildMarkup(file, progressEvent, total) {
          buildRing.setAttribute('stroke', 3);
          buildRing.setAttribute('radius', 25);

          function formatBytes(bytes, decimals) {
            if (bytes == 0) return bytes.innerHTML = '0 Bytes';
            var k = 1024,
                dm = decimals <= 0 ? 0 : decimals || 2,
                sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }

          filename.innerHTML = file.name;
          bytesLoaded.innerHTML = formatBytes(progressEvent.loaded);
          bytesTotal.innerHTML = formatBytes(progressEvent.total);

          indicator.appendChild(buildRing);

          modal.dispatchEvent(new CustomEvent('xhrLoading', {
            detail: {
              done: status.done,
              progress: status.progress
            }
          }));
        }

        if (modal.footer !== true) {
          modal.footer = true;
          this.uploadInfo.style.display = 'block';
        }

        function toggleCheckmark(total) {
          if (total !== 100) {
            return textTotal.innerHTML = total;
          } else {
            return textTotal.innerHTML = checkClone.querySelector('span').innerHTML;
          }
        }

        xhr(function (event) {
          var percentLoaded = Math.round(event.loaded / event.total * 100);
          toggleCheckmark(percentLoaded);
          if (buildRing !== null) {
            buildRing.setAttribute('progress', percentLoaded);
          }
          buildMarkup(data, event, percentLoaded);
        });
      }
    }, {
      key: 'highlight',
      value: function highlight(event) {
        preventDefaults(event);
        this.dropArea.classList.add('highlight');
      }
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