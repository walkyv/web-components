# Pearson Loader Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Example](#api-example)
5. [React](#react)

A shareable, accessible loader component. This component serves as a user-facing indicator when your app is loading new data via an AJAX request.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/loader/

<a name="install"></a>

## Installation

Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/loader
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
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-loader.js"></script>
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/custom-elements-es5-adapter.js"></script>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?rum=0"></script>

  <!-- Web component script -->
  <script src="/path-to-loader/js/dist/pearson-loader.js" />
</head>
```

**Important Notes:**

1. The Google Fonts link is necessary to ensure that the components render properly. You must include it, **or** be sure that Open Sans is loaded in your app some other way.
2. The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `pearson-loader` open and closing tags to the page.

<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

All attributes in this API are optional, and all of them are exposed as _properties_ on the component.

| Attribute            | Type    | Default | Description                                                                                        |
| -------------------- | ------- | ------- | -------------------------------------------------------------------------------------------------- |
| `loadingStateLabel`  | String  | unset   | The word the user will see while the external content is still loading. Defaults to "loading...".  |
| `finishedStateLabel` | String  | unset   | The word the user will see while the external content has finished loading. Defaults to "loaded!". |
| `loaded`             | Boolean | unset   | Whether or not the AJAX request has finished. Setting this will display the `finishedStateLabel`.  |

**Important Note:** You must set the `loaded` boolean yourself once your AJAX request is complete.

<a name="api-example"></a>

### Example

Most of the time, you will be creating `pearson-loader` components in JavaScript, instead of in your HTML file.

This example shows an AJAX request, after which the component's `loaded` boolean is set to `true`.

```js
function requestMyData(url) {
  const copyLoader = document.createElement('pearson-loader');

  copyLoader.loadingStateLabel = 'Copying...';
  copyLoader.finishedStateLabel = 'Copied!';

  document.body.appendChild(copyLoader);

  fetch('new-data-for-my-app')
    .then(res => res.json())
    .then(json => {
      // Do stuff to display the data in your application.

      // Set the `loaded` prop of copyLoader
      copyLoader.loaded = true;

      // Remove the loader from the DOM.
      copyLoader.remove();
    });
}
```

<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/loading-indicator
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/loading-indicator";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
	return (
		<div>
			<pearson-loader></pearson-loader>
		</div>
	)
}
```

