(function(w, doc) {
  "use strict";
  const currentDoc = doc.querySelector('link[href$="file-upload.html"]').import,
    template = currentDoc.querySelector("#template"),
    info = currentDoc.querySelector("#progressInfo"),
    check = currentDoc.querySelector("#check");

  let status = {
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
    const modal = doc
      .querySelector("pearson-uploader")
      .shadowRoot.querySelector("upload-modal"),
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
    uploadTitle.innerHTML = `Uploading (${status.done} done, ${
      status.progress
      } progress)`;
  }

  function dispatchEvent() {
    const modal = doc
    .querySelector("pearson-uploader")
    .shadowRoot.querySelector("upload-modal");
    modal.dispatchEvent(
      new CustomEvent("xhrLoading", {
        detail: {
          done: status.done,
          progress: status.progress
        }
      })
    );
  }

  function updateStatus(opr, statusType) {
    const modal = doc
    .querySelector("pearson-uploader")
    .shadowRoot.querySelector("upload-modal");
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
    const k = 1000,
      dm = decimalPoint || 2,
      sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function generateAlert(opts) {
    const alert = doc.createElement("pearson-alert");
    for (let attrName in opts) {
      alert.setAttribute(attrName, opts[attrName]);
    }
    return alert;
  }

  function tooLarge(current, max) {
    return current >= max;
  }

  class FileUpload extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });

      const clone = doc.importNode(template.content.cloneNode(true), true);

      this.uploadInfo = clone.querySelector("#info");
      this.realUploadInput = clone.querySelector('input[type="file"]');
      this.attachBtn = clone.querySelector("#attachFiles");
      this.target = clone.querySelector("#progressContainer");
      this.dropArea = clone.querySelector("#drop");

      this.max = clone.querySelector("#maxFileSize");

      this.handleFiles = this.handleFiles.bind(this);
      this.uploadFile = this.uploadFile.bind(this);
      this.renderProgressItems = this.renderProgressItems.bind(this);
      this.highlight = this.highlight.bind(this);
      this.unhighlight = this.unhighlight.bind(this);
      this.handleDrop = this.handleDrop.bind(this);
      this.deleteFile = this.deleteFile.bind(this);
      this.shadowRoot.appendChild(clone);
    }

    connectedCallback() {
      const modal = doc
      .querySelector("pearson-uploader")
      .shadowRoot.querySelector("upload-modal");
      this.realUploadInput.addEventListener("change", event => {
        this.handleFiles(event.srcElement.files);
        this.attachBtn.focus({
          preventScroll: true
        });
        this.realUploadInput.value = "";
      });

      this.attachBtn.addEventListener("click", () => {
        this.realUploadInput.click();
      });

      this.dropArea.addEventListener("dragenter", this.highlight);
      this.dropArea.addEventListener("dragover", this.highlight);
      this.dropArea.addEventListener("dragleave", this.unhighlight);
      this.dropArea.addEventListener("drop", this.handleDrop);

      modal.addEventListener("click", event => {
        if (event.target.classList.contains("remove-file")) {
          this.deleteFile(event);
        }
      });

      this.max.innerHTML = formatBytes(this.maxFileSize);
    }

    get apiUrl() {
      return this.getAttribute("apiUrl");
    }

    get maxFileSize() {
      return this.getAttribute("maxByteFileSize");
    }

    handleFiles(files) {
      [...files].forEach(this.uploadFile);
    }

    deleteFile(event) {
      const xhr = new XMLHttpRequest(),
        fileName = event.target.parentNode.parentNode.getAttribute("data-file"),
        url = this.apiUrl + fileName,
        target = doc
        .querySelector("pearson-uploader")
        .shadowRoot.querySelector("upload-modal"),
        domNode = event.target.parentNode.parentNode;
      xhr.open("DELETE", url, true);
      xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 204) {
          domNode.remove();
          updateStatus("minus", "done");
        } else {
          const alert = generateAlert({
            returnNode: "#attachFiles",
            type: "error",
            level: "global",
            animated: true
          });
          alert.innerHTML = `
              <h2 id="alertTitle" class="pe-label alert-title">
                  <strong>File not deleted</strong> There was a problem with the server try again.
               </h2>
          `;
          target.appendChild(alert);
        }
      };
      xhr.send(null);
    }

    uploadFile(file) {
      const xhr = new XMLHttpRequest(),
        formData = new FormData(),
        target = doc
        .querySelector("pearson-uploader")
        .shadowRoot.querySelector("upload-modal");

      function uploadProgress(callback) {
        status.progress++;
        xhr.upload.onprogress = function(event) {
          if (event.lengthComputable) {
            callback(event);
          }
        };

        xhr.upload.addEventListener("abort", event => {
          const uploader = document.querySelector("pearson-uploader"),
            element = uploader.shadowRoot.querySelector(
              `[data-file="${file.name}"]`
            );
          element.remove();
          updateStatus("minus", "progress");
        });
      }

      if (!tooLarge(parseInt(file.size), parseInt(this.maxFileSize))) {
        this.renderProgressItems(
          file,
          this.target,
          uploadProgress,
          status.type
        );

        xhr.open("POST", this.apiUrl, true);
        xhr.onload = function () {
          if (xhr.readyState === 4 && xhr.status === 204) {

          } else {
            const alert = generateAlert({
              returnNode: "#attachFiles",
              type: "error",
              level: "global",
              animated: true
            });
            alert.innerHTML = `
              <h2 id="alertTitle" class="pe-label alert-title">
                  <strong>File not deleted</strong> There was a problem with the server try again.
               </h2>
          `;
            target.appendChild(alert);
          }
        }

        formData.append("key", file.name);
        formData.append("file", file);
        xhr.send(formData);

        const cancelButton = this.shadowRoot.querySelector("upload-modal").shadowRoot.querySelector("#cancelButton");
        cancelButton.addEventListener("click", event => {
          xhr.abort();
        });
      } else {
        const alert = generateAlert({
          returnNode: "#attachFiles",
          type: "error",
          level: "global",
          animated: true
        });
        alert.innerHTML = `
              <h2 id="alertTitle" class="pe-label alert-title">
                  <strong>${
          file.name
          }</strong> is too large to be uploaded. Please try again.
               </h2>
          `;
        target.appendChild(alert);
        return false;
      }
    }

    renderProgressItems(data, target, xhr) {
      const infoClone = doc.importNode(info.content.cloneNode(true), true),
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
        const uploader = doc.querySelector("pearson-uploader"),
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
          return (textTotal.innerHTML = total);
        } else {
          return (textTotal.innerHTML = checkClone.querySelector(
            "span"
          ).innerHTML);
        }
      }

      xhr(event => {
        let percentLoaded = Math.round((event.loaded / event.total) * 100);
        toggleCheckmark(percentLoaded);
        if (buildRing !== null) {
          buildRing.setAttribute("progress", percentLoaded);
        }
        buildMarkup(data, event, percentLoaded);
      });
    }

    highlight(event) {
      preventDefaults(event);
      this.dropArea.classList.add("highlight");
    }

    unhighlight(event) {
      preventDefaults(event);
      this.dropArea.classList.remove("highlight");
    }

    handleDrop(event) {
      this.unhighlight(event);
      let dt = event.dataTransfer;
      let files = dt.files;
      this.handleFiles(files);
    }
  }
  customElements.define("pearson-uploader", FileUpload);
})(window, document);
