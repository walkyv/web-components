"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  "use strict";

  var currentDoc = doc.querySelector('link[href$="file-upload.html"]').import,
      template = currentDoc.querySelector("#template"),
      info = currentDoc.querySelector("#progressInfo"),
      check = currentDoc.querySelector("#check");

  var status = {
    done: 0,
    progress: 0
  };

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, "pearson-uploader");

  function returnOperator(opr, type) {
    if (opr === "plus") {
      return status[type]++;
    } else if (opr === "minus") {
      return status[type]--;
    } else {
      return;
    }
  }

  function updateProgress() {
    var modal = doc.querySelector("pearson-uploader").shadowRoot.querySelector("upload-modal"),
        uploadTitle = modal.querySelector("#uploadTitle"),
        uploadInfo = modal.querySelector("#info"),
        cancelBtn = modal.shadowRoot.querySelector("#cancelButton"),
        successBtn = modal.shadowRoot.querySelector("#successButton");

    if (status.progress >= 1) {
      cancelBtn.disabled = false;
    } else {
      cancelBtn.disabled = true;
    }

    if (status.progress === 0 && status.done >= 1) {
      successBtn.disabled = false;
    } else {
      successBtn.disabled = true;
    }

    if (status.progress === 0 && status.done === 0) {
      modal.footer = false;
      uploadInfo.style.display = "none";
    }
    uploadTitle.innerHTML = "Uploading (" + status.done + " done, " + status.progress + " progress)";
  }

  function dispatchEvent() {
    var modal = doc.querySelector("pearson-uploader").shadowRoot.querySelector("upload-modal");
    modal.dispatchEvent(new CustomEvent("xhrLoading", {
      detail: {
        done: status.done,
        progress: status.progress
      }
    }));
  }

  function updateStatus(opr, statusType) {
    var modal = doc.querySelector("pearson-uploader").shadowRoot.querySelector("upload-modal");
    returnOperator(opr, statusType);
    if (modal.footer) {
      updateProgress();
    }
    dispatchEvent();
  }

  function preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function formatBytes(bytes, decimalPoint) {
    if (bytes === 0) return "0 Bytes";
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function generateAlert(opts) {
    var alert = doc.createElement("pearson-alert");
    for (var attrName in opts) {
      alert.setAttribute(attrName, opts[attrName]);
    }
    return alert;
  }

  function tooLarge(current, max) {
    return current >= max;
  }

  var FileUpload = function (_HTMLElement) {
    _inherits(FileUpload, _HTMLElement);

    function FileUpload() {
      _classCallCheck(this, FileUpload);

      var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this));

      _this.attachShadow({
        mode: "open"
      });

      var clone = doc.importNode(template.content.cloneNode(true), true);

      _this.uploadInfo = clone.querySelector("#info");
      _this.realUploadInput = clone.querySelector('input[type="file"]');
      _this.attachBtn = clone.querySelector("#attachFiles");
      _this.target = clone.querySelector("#progressContainer");
      _this.dropArea = clone.querySelector("#drop");

      _this.max = clone.querySelector("#maxFileSize");

      _this.handleFiles = _this.handleFiles.bind(_this);
      _this.uploadFile = _this.uploadFile.bind(_this);
      _this.renderProgressItems = _this.renderProgressItems.bind(_this);
      _this.highlight = _this.highlight.bind(_this);
      _this.unhighlight = _this.unhighlight.bind(_this);
      _this.handleDrop = _this.handleDrop.bind(_this);
      _this.deleteFile = _this.deleteFile.bind(_this);
      _this.shadowRoot.appendChild(clone);
      return _this;
    }

    _createClass(FileUpload, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        var modal = doc.querySelector("pearson-uploader").shadowRoot.querySelector("upload-modal");
        this.realUploadInput.addEventListener("change", function (event) {
          _this2.handleFiles(event.srcElement.files);
          _this2.attachBtn.focus({
            preventScroll: true
          });
          _this2.realUploadInput.value = "";
        });

        this.attachBtn.addEventListener("click", function () {
          _this2.realUploadInput.click();
        });

        this.dropArea.addEventListener("dragenter", this.highlight);
        this.dropArea.addEventListener("dragover", this.highlight);
        this.dropArea.addEventListener("dragleave", this.unhighlight);
        this.dropArea.addEventListener("drop", this.handleDrop);

        modal.addEventListener("click", function (event) {
          if (event.target.classList.contains("remove-file")) {
            _this2.deleteFile(event);
          }
        });

        this.max.innerHTML = formatBytes(this.maxFileSize);
      }
    }, {
      key: "handleFiles",
      value: function handleFiles(files) {
        [].concat(_toConsumableArray(files)).forEach(this.uploadFile);
      }
    }, {
      key: "deleteFile",
      value: function deleteFile(event) {
        var xhr = new XMLHttpRequest(),
            fileName = event.target.parentNode.parentNode.getAttribute("data-file"),
            url = this.apiUrl + fileName,
            target = doc.querySelector("pearson-uploader").shadowRoot.querySelector("upload-modal"),
            domNode = event.target.parentNode.parentNode;
        xhr.open("DELETE", url, true);
        domNode.style.display = 'none';
        xhr.onload = function () {
          if (xhr.readyState === 4 && xhr.status === 204) {
            domNode.remove();
            updateStatus("minus", "done");
          } else {
            domNode.style.display = 'flex';
            var alert = generateAlert({
              returnNode: "#attachFiles",
              type: "error",
              level: "global",
              animated: true
            });
            alert.innerHTML = "\n              <h2 id=\"alertTitle\" class=\"pe-label alert-title\">\n                  <strong>File not deleted</strong> There was a problem with the server try again.\n               </h2>\n          ";
            target.appendChild(alert);
          }
        };
        xhr.send(null);
      }
    }, {
      key: "uploadFile",
      value: function uploadFile(file) {
        var xhr = new XMLHttpRequest(),
            formData = new FormData(),
            target = doc.querySelector("pearson-uploader").shadowRoot.querySelector("upload-modal");

        function uploadProgress(callback) {
          status.progress++;
          xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
              callback(event);
            }
          };

          xhr.upload.addEventListener("abort", function (event) {
            var uploader = document.querySelector("pearson-uploader"),
                element = uploader.shadowRoot.querySelector("[data-file=\"" + file.name + "\"]");

            element.remove();
            updateStatus("minus", "progress");
          });
        }

        if (!tooLarge(parseInt(file.size), parseInt(this.maxFileSize))) {
          this.renderProgressItems(file, this.target, uploadProgress, status.type);

          xhr.open("POST", this.apiUrl, true);
          console.log(xhr);
          xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {} else {
              var alert = generateAlert({
                returnNode: "#attachFiles",
                type: "error",
                level: "global",
                animated: true
              });
              alert.innerHTML = "\n              <h2 id=\"alertTitle\" class=\"pe-label alert-title\">\n                  <strong>There was a problem uploading " + file.name + "</strong> Please try again.\n               </h2>\n          ";
              target.appendChild(alert);
            }
          };

          formData.append("key", file.name);
          formData.append("file", file);
          xhr.send(formData);

          var cancelButton = this.shadowRoot.querySelector("upload-modal").shadowRoot.querySelector("#cancelButton");
          cancelButton.addEventListener("click", function (event) {
            xhr.abort();
          });
        } else {
          var alert = generateAlert({
            returnNode: "#attachFiles",
            type: "error",
            level: "global",
            animated: true
          });
          alert.innerHTML = "\n              <h2 id=\"alertTitle\" class=\"pe-label alert-title\">\n                  <strong>" + file.name + "</strong> is too large to be uploaded. Please try again.\n               </h2>\n          ";
          target.appendChild(alert);
          return false;
        }
      }
    }, {
      key: "renderProgressItems",
      value: function renderProgressItems(data, target, xhr) {
        var infoClone = doc.importNode(info.content.cloneNode(true), true),
            checkClone = doc.importNode(check.content.cloneNode(true), true),
            modal = this.shadowRoot.querySelector("upload-modal"),
            progressTarget = this.shadowRoot.querySelector("#progressContainer"),
            progress = infoClone.querySelector(".progress"),
            filename = infoClone.querySelector(".filename"),
            bytesLoaded = infoClone.querySelector(".bytes-loaded"),
            bytesTotal = infoClone.querySelector(".bytes-total"),
            textTotal = infoClone.querySelector(".total"),
            indicator = infoClone.querySelector(".indicator"),
            buildRing = document.createElement("progress-ring");

        function buildMarkup(file, progressEvent) {
          var uploader = doc.querySelector("pearson-uploader"),
              modal = uploader.shadowRoot.querySelector("upload-modal");

          if (progressEvent.loaded === progressEvent.total) {
            status.done++;
            if (status.progress > 0) {
              status.progress--;
            }
          }

          updateProgress();

          progressTarget.appendChild(infoClone);
          buildRing.setAttribute("stroke", 3);
          buildRing.setAttribute("radius", 25);
          progress.setAttribute("data-file", file.name);
          filename.innerHTML = file.name;
          bytesLoaded.innerHTML = formatBytes(progressEvent.loaded);
          bytesTotal.innerHTML = formatBytes(progressEvent.total);
          indicator.appendChild(buildRing);

          dispatchEvent();
        }

        if (modal.footer !== true) {
          modal.footer = true;
          this.uploadInfo.style.display = "block";
        }

        function toggleCheckmark(total) {
          if (total !== 100) {
            return textTotal.innerHTML = total;
          } else {
            return textTotal.innerHTML = checkClone.querySelector("span").innerHTML;
          }
        }

        xhr(function (event) {
          var percentLoaded = Math.round(event.loaded / event.total * 100);
          toggleCheckmark(percentLoaded);
          if (buildRing !== null) {
            buildRing.setAttribute("progress", percentLoaded);
          }
          buildMarkup(data, event, percentLoaded);
        });
      }
    }, {
      key: "highlight",
      value: function highlight(event) {
        preventDefaults(event);
        this.dropArea.classList.add("highlight");
      }
    }, {
      key: "unhighlight",
      value: function unhighlight(event) {
        preventDefaults(event);
        this.dropArea.classList.remove("highlight");
      }
    }, {
      key: "handleDrop",
      value: function handleDrop(event) {
        this.unhighlight(event);
        var dt = event.dataTransfer;
        var files = dt.files;
        this.handleFiles(files);
      }
    }, {
      key: "apiUrl",
      get: function get() {
        return this.getAttribute("apiUrl");
      }
    }, {
      key: "maxFileSize",
      get: function get() {
        return this.getAttribute("maxByteFileSize");
      }
    }]);

    return FileUpload;
  }(HTMLElement);

  customElements.define("pearson-uploader", FileUpload);
})(window, document);