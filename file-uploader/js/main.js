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

function updateProgress(element) {
  const modal = element.querySelector("upload-modal"),
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

  uploadTitle.innerHTML = `Uploading (${status.done} done, ${status.progress} progress)`;
}

function dispatchEvent(element) {
  const modal = element.querySelector("upload-modal");
  modal.dispatchEvent(
    new CustomEvent("xhrLoading", {
      detail: {
        done: status.done,
        progress: status.progress
      }
    })
  );
}

function updateStatus(opr, statusType, element) {
  console.log(element)
  const modal = element.querySelector("upload-modal");
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

function buildAlert (opts) {
  const alert = generateAlert({
    returnNode: "#attachFiles",
    type: "error",
    level: "global",
    animated: true
  });
  alert.innerHTML = `
      <h2 id="alertTitle" class="pe-label alert-title">
          <strong>${opts.strong}</strong>${opts.text}
       </h2>
  `;
  return alert
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
    this.modal = this.shadowRoot.querySelector("upload-modal");
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
    const modal = this.shadowRoot.querySelector("upload-modal");
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
      modal = this.shadowRoot.querySelector("upload-modal"),
      domNode = event.target.parentNode.parentNode,
      alertMessage = {
        "strong": `${fileName} `,
        "text": "was not deleted. There was a problem with the server."
      };

    xhr.open("DELETE", url, true);

    xhr.addEventListener('load', () => {
      if (xhr.readyState === 4 && xhr.status === 204) {
        domNode.remove();
        updateStatus("minus", "done", this.shadowRoot);
      } else {
        domNode.style.display = 'flex';
        modal.appendChild(buildAlert(alertMessage));
      }
    });

    domNode.style.display = 'none';
    xhr.send(null);
  }

  uploadFile(file) {
    const xhr = new XMLHttpRequest(),
      formData = new FormData(),
      modal = this.shadowRoot.querySelector("upload-modal"),
      alertMessage = {
        "strong": `${file.name} `,
        "text": "was not uploaded. There was a problem with the server."
      },
      alertMessage2 = {
        "strong": `${file.name} `,
        "text": "is too large to be uploaded."
      },
      fileNotTooLarge = !tooLarge(parseInt(file.size), parseInt(this.maxFileSize));

    xhr.addEventListener("load", event => {
      updateStatus("plus", "done", this.shadowRoot);
      if (status.progress > 0) {
        updateStatus("minus", "progress", this.shadowRoot);
      }
    });

    xhr.addEventListener("error", event => {
      target.appendChild(buildAlert(alertMessage));
    });

    xhr.addEventListener("abort", event => {
      const uploader = document.querySelector("pearson-uploader"),
        element = uploader.shadowRoot.querySelector(
          `[data-file="${file.name}"]`
        );
      element.remove();
      updateStatus("minus", "progress", this.shadowRoot);
    });

    if (fileNotTooLarge) {
      xhr.open("POST", this.apiUrl, true);
      status.progress++;
      if (modal.footer !== true) {
        modal.footer = true;
        this.uploadInfo.style.display = "block";
      }

      this.renderProgressItems(file, xhr)
      formData.append("key", file.name);
      formData.append("file", file);
      xhr.send(formData);

      const cancelButton = this.shadowRoot.querySelector("upload-modal").shadowRoot.querySelector("#cancelButton"),
        successButton = this.shadowRoot.querySelector("upload-modal").shadowRoot.querySelector("#successButton");

      cancelButton.addEventListener("click", event => {
        xhr.abort();
      });


    } else {
      modal.appendChild(buildAlert(alertMessage2));
    }
  }

  renderProgressItems(file, xhr) {
    const infoClone = doc.importNode(info.content.cloneNode(true), true),
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

    xhr.upload.addEventListener("progress", (event) => {
      let percentLoaded = Math.round((event.loaded / event.total) * 100);
      bytesLoaded.innerHTML = formatBytes(event.loaded);
      bytesTotal.innerHTML = formatBytes(event.total);
      buildRing.setAttribute("progress", percentLoaded);
      buildRing.setAttribute("stroke", 3);
      buildRing.setAttribute("radius", 25);

      if (percentLoaded !== 100) {
        updateProgress(this.shadowRoot);
        return textTotal.innerHTML = percentLoaded;
      } else {
        removeBtn.style.visibility = "visible"
        return textTotal.innerHTML = checkClone.querySelector("span").innerHTML;
      }
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
