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

  function updateProgress(element) {
    var modal = element.querySelector("upload-modal"),
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

  function dispatchEvent(element) {
    var modal = element.querySelector("upload-modal");
    modal.dispatchEvent(new CustomEvent("xhrLoading", {
      detail: {
        done: status.done,
        progress: status.progress
      }
    }));
  }

  function updateStatus(opr, statusType, element) {
    console.log(element);
    var modal = element.querySelector("upload-modal");
    returnOperator(opr, statusType);
    if (modal.footer) {
      updateProgress(element);
    }
    dispatchEvent(element);
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

  function buildAlert(opts) {
    var alert = generateAlert({
      returnNode: "#attachFiles",
      type: "error",
      level: "global",
      animated: true
    });
    alert.innerHTML = "\n      <h2 id=\"alertTitle\" class=\"pe-label alert-title\">\n          <strong>" + opts.strong + "</strong>" + opts.text + "\n       </h2>\n  ";
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
      _this.modal = _this.shadowRoot.querySelector("upload-modal");
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

        var modal = this.shadowRoot.querySelector("upload-modal");
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
        var _this3 = this;

        var xhr = new XMLHttpRequest(),
            fileName = event.target.parentNode.parentNode.getAttribute("data-file"),
            url = this.apiUrl + fileName,
            modal = this.shadowRoot.querySelector("upload-modal"),
            domNode = event.target.parentNode.parentNode,
            alertMessage = {
          "strong": fileName + " ",
          "text": "was not deleted. There was a problem with the server."
        };

        xhr.open("DELETE", url, true);

        xhr.addEventListener('load', function () {
          if (xhr.readyState === 4 && xhr.status === 204) {
            domNode.remove();
            updateStatus("minus", "done", _this3.shadowRoot);
          } else {
            domNode.style.display = 'flex';
            modal.appendChild(buildAlert(alertMessage));
          }
        });

        domNode.style.display = 'none';
        xhr.send(null);
      }
    }, {
      key: "uploadFile",
      value: function uploadFile(file) {
        var _this4 = this;

        var xhr = new XMLHttpRequest(),
            formData = new FormData(),
            modal = this.shadowRoot.querySelector("upload-modal"),
            alertMessage = {
          "strong": file.name + " ",
          "text": "was not uploaded. There was a problem with the server."
        },
            alertMessage2 = {
          "strong": file.name + " ",
          "text": "is too large to be uploaded."
        },
            fileNotTooLarge = !tooLarge(parseInt(file.size), parseInt(this.maxFileSize));

        xhr.addEventListener("load", function (event) {
          updateStatus("plus", "done", _this4.shadowRoot);
          if (status.progress > 0) {
            updateStatus("minus", "progress", _this4.shadowRoot);
          }
        });

        xhr.addEventListener("error", function (event) {
          target.appendChild(buildAlert(alertMessage));
        });

        xhr.addEventListener("abort", function (event) {
          var uploader = document.querySelector("pearson-uploader"),
              element = uploader.shadowRoot.querySelector("[data-file=\"" + file.name + "\"]");
          element.remove();
          updateStatus("minus", "progress", _this4.shadowRoot);
        });

        if (fileNotTooLarge) {
          xhr.open("POST", this.apiUrl, true);
          status.progress++;
          if (modal.footer !== true) {
            modal.footer = true;
            this.uploadInfo.style.display = "block";
          }

          this.renderProgressItems(file, xhr);
          formData.append("key", file.name);
          formData.append("file", file);
          xhr.send(formData);

          var cancelButton = this.shadowRoot.querySelector("upload-modal").shadowRoot.querySelector("#cancelButton"),
              successButton = this.shadowRoot.querySelector("upload-modal").shadowRoot.querySelector("#successButton");

          cancelButton.addEventListener("click", function (event) {
            xhr.abort();
          });
        } else {
          modal.appendChild(buildAlert(alertMessage2));
        }
      }
    }, {
      key: "renderProgressItems",
      value: function renderProgressItems(file, xhr) {
        var _this5 = this;

        var infoClone = doc.importNode(info.content.cloneNode(true), true),
            checkClone = doc.importNode(check.content.cloneNode(true), true),
            progressTarget = this.shadowRoot.querySelector("#progressContainer"),
            progress = infoClone.querySelector(".progress"),
            indicator = infoClone.querySelector(".indicator"),
            filename = infoClone.querySelector(".filename"),
            textTotal = infoClone.querySelector(".total"),
            removeBtn = infoClone.querySelector(".remove-file"),
            bytesLoaded = infoClone.querySelector(".bytes-loaded"),
            bytesTotal = infoClone.querySelector(".bytes-total"),
            buildRing = document.createElement("progress-ring");

        progressTarget.appendChild(infoClone);
        indicator.appendChild(buildRing);
        progress.setAttribute("data-file", file.name);
        filename.innerHTML = file.name;
        removeBtn.style.visibility = "hidden";

        xhr.upload.addEventListener("progress", function (event) {
          var percentLoaded = Math.round(event.loaded / event.total * 100);
          bytesLoaded.innerHTML = formatBytes(event.loaded);
          bytesTotal.innerHTML = formatBytes(event.total);
          buildRing.setAttribute("progress", percentLoaded);
          buildRing.setAttribute("stroke", 3);
          buildRing.setAttribute("radius", 25);

          if (percentLoaded !== 100) {
            updateProgress(_this5.shadowRoot);
            return textTotal.innerHTML = percentLoaded;
          } else {
            removeBtn.style.visibility = "visible";
            return textTotal.innerHTML = checkClone.querySelector("span").innerHTML;
          }
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