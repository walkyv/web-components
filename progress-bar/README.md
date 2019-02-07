# Pearson Datepicker Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Example](#api-example)

A shareable, accessible progressbar component. This component serves as a user-facing indicator of the progress of a loading operation.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/progress-bar/

<a name="install"></a>

## Installation

Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/progress-bar
```

<a name="usage"></a>

## Usage

Import the web component onto the page, inbetween the `<head>` tags, like so:

```html
<head>
  <!-- Font stack-->
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i"
    rel="stylesheet"
  />

  <!-- Polyfills -->
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-progress-bar.js"></script>
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/custom-elements-es5-adapter.js"></script>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?rum=0"></script>

  <!-- Web component script -->
  <script src="/path-to-progress-bar/js/dist/pearson-progress-bar.js" />
</head>
```

**Important Notes:**

1. The Google Fonts link is necessary to ensure that the components render properly. You must include it, **or** be sure that Open Sans is loaded in your app some other way.
2. The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `pearson-progress-bar` open and closing tags to the page.

<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

All attributes in this API are optional, and all of them are exposed as _properties_ on the component.

| Attribute            | Type    | Default | Description                                                                                       |
| -------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------- |
| `loadingStateLabel`  | String  | unset   | The word the user will see while the external content is still loading. Defaults to "loading...". |
| `finishedStateLabel` | String  | unset   | The word the user will see while the external content is still loading. Defaults to "loaded!".    |
| `loaded`             | Boolean | unset   | Whether or not the AJAX request has finished. Setting this will display the `finishedStateLabel`. |

**Important Note:** You must set the `loaded` boolean yourself once your AJAX request is complete.

<a name="api-example"></a>

### Example

Most of the time, you will be creating `pearson-progress-bar` components in JavaScript, instead of in your HTML file.

This example shows an AJAX request, after which the component's `loaded` boolean is set to `true`.

```js
function requestMyData(url) {
  const copyLoader = document.createElement('pearson-progress-bar');

  copyLoader.loadingStateLabel = 'Copying...';
  copyLoader.finishedStateLabel = 'Copied!';

  document.body.appendChild(copyLoader);

  fetch('new-data-for-my-app')
    .then(res => res.json())
    .then(json => {
      // Do stuff to display the data in your application.

      // Set the `loaded` prop of copyLoader
      copyLoader.loaded = true;

      // Remove the progress-bar from the DOM.
      copyLoader.remove();
    });
}
```
