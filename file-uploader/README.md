# File Upload Web Component

A shareable, accessible, file uploader powered by web components.

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
   1. [Usage example](#usage-example)
4. [Uploading](#uploading)
5. [API](#api)
   1. [Attributes](#api-attributes)
       1. [Attributes example](#attributes-example)
   2. [Events](#api-events)
      1. [Events example](#events-example)
6. [React](#react)

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/file-uploader

<a name="install"></a>
## Install

Before you install, make sure you have all the appropriate polyfills from the main README.md in place.
https://github.com/pearson-ux/web-components/blob/master/README.md

    cd my-app
    npm install --save @pearson-ux/file-uploader

<a name="usage"></a>

## Usage

Import the web components onto the page, at the bottom before the closing `<body>` tag

```html
<head>
  <!-- Font stack -->
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i"
    rel="stylesheet"
  />

  <!-- Polyfills -->
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-loader.js"></script>
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/custom-elements-es5-adapter.js"></script>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?rum=0"></script>

  <!-- Web component script -->
  <script src="/path-to-datepicker/js/dist/pearson-uploader.js" />
</head>
```

**Important Notes:**

1. The Google Fonts link is necessary to ensure that the components render properly. You must include it, **or** be sure that Open Sans is loaded in your app some other way.
2. The import path will be in the **node_modules** folder, which is usually held outside the application source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

**To Use**
Add the `<pearson-uploader> </pearson-uploader>` tags to the page, passing in a `triggerId`, the unique ID of the button you want to open the file uploader.

**Important Note:**

> To maintain accessibility, the `pearson-uploader` tag must be a sibling of your main content. The main content must be wrapped in an element with an ID of 'main'.

<a name="usage-example"></a>

### Example

```html
<body>
  <!-- The pearson-modal must be a sibling of an element with an id of `main` -->
  <main id="main">
    <section class="container">
      <button id="trigger-modal">Open Modal</button>
    </section>
  </main>

  <!-- The display:none is to prevent a FOUC in Firefox -->
  <pearson-uploader triggerId="trigger-modal" style="display:none;">
  </pearson-modal>
</body>
```

<a name="uploading"></a>

## Uploading

This component takes a RESTful approach and uses an `XMLHttpRequest()` to upload and delete files.
Your server needs to accept and delete files from a single api endpoint. It uses a `POST` request to upload the file and a `DELETE` request to remove the file.

This component will look for a return status of `204`

To set the upload URL and configs, see the API below.

<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

| Attribute          | Type     | Default  | Description                                       |
| ------------------ | -------- | -------- | ------------------------------------------------- |
| `triggerid`        | `String` | Required | The unique ID of the button that opens the modal. |
| `apiURL`           | `String` |          | The api endpoint you want the files uploaded to.  |
| `maxByteFileSize`  | `String` | 10000000 | Max size of file to upload.                       |
| `maxNumberOfFiles` | `String` | 5        | Max number of concurrent downloads.               |

<a name="api-example"></a>

#### Example

```html
<!-- for accessibility, the must be adjacent to an element with an id of main -->
<main id="main">
  <section class="container">
    <button id="trigger-modal">Open Modal</button>
  </section>
</main>

<!-- place modal before the end of the body and pass in the reference ID of the button that triggers the modal -->
<pearson-uploader
  apiUrl="https://pearson-upload-api-url/"
  maxByteFileSize="10000000"
  maxNumberOfFiles="5"
  triggerId="trigger-modal"
>
</pearson-uploader>
```
<a name="events"></a>

### Events

The `pearson-uploader` component is part of the `pearson-modal` component and emits two different events:

| Event     | Description                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `success` | Will fire when the success button in the modal is pressed.                                                                   |
| `cancel`  | Will fire when any button other than the success button is pressed, or when the user closes the modal with the `escape` key. |

**Important Note:**

> For the purposes of event emission, the modal treats _any button that is not the success button_ as a 'cancel' button. If you want your modal to emit a `success` event, you _must_ show the footer and the success button. If the success button is independently hidden through the `hideSuccess` configuration, or if the footer is hidden by setting `footer` to `false`, it will prevent the emission of the `success` event completely.

<a name="events-example"></a>

#### Example Code

```js
// You can query a web component like any other element in JavaScript
const uploader = document.querySelector('pearson-uploader');
const modal = uploader.shadowRoot.querySelector('upload-modal');

modal.addEventListener('success', function() {
  console.log('SUCCESS');
});

modal.addEventListener('cancel', function() {
  console.log('CANCEL');
});
```

<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/file-uploader
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/file-uploader";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
	return (
		<div>
			<pearson-uploader></pearson-uploader>
		</div>
	)
}
```
