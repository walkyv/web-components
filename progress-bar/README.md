# Pearson Progress Bar Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Example](#api-example)
5. [Roadmap](#roadmap)
6. [React](#react)

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
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-pearson-progress-bar.js"></script>
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/custom-elements-es5-adapter.js"></script>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?rum=0"></script>

  <!-- Web component script -->
  <script src="/path-to-progress-bar/js/dist/pearson-pearson-progress-bar.js" />
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

All attributes are optional. The `progress` attribute is exposed as a property in JavaSctipt.

| Attribute   | Type   | Default | Description                                                                                  |
| ----------- | ------ | ------- | -------------------------------------------------------------------------------------------- |
| `progress`  | Number | `0`   | The current position, as a number, that the bar has progressed to. Range: Between 0 and 100. |
| `alignment` | String | unset   | The position of the progressbar's label. Possible values: `'left'`, `'right'`, `'center'`.   |
| `type`      | String | unset   | The type of the bar. Possible values: `'static'`; `'loading'`.                               |
| `label`     | String | unset   | The description of what the bar is loading. Varies based on the needs of your app. Can only be set on static progressbars.           |

**Important Note:** You must set the `progress` prop in JavaScript to increment the bar.

<a name="api-example"></a>

### Example

This example shows a standard `loading`-type progress bar

```html
<pearson-progress-bar id="loading" type="loading" alignment="center"></pearson-progress-bar>
<button id="start">Start progress bar</button>
```

```js
const startBtn = document.querySelector('start');
const progressBar = document.querySelector('pearson-rogress-bar');

startBtn.addEventListener('click', function(e) {
  setInterval( function (event) {
    if (count < 100) {
      count++;
      loader.progress = count;
    } else {
      return
    }
  },200)
});
```

<a name="roadmap"></a>

## Roadmap

In the near future, `pearson-progress-bar` plans to support a custom `max` setting, so that applications can track increments with non-precentage units. For instance, a loading progress bar which increments from "One of two files downloaded" to "Two of two files downloaded"

<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/progress-bar
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/progress-bar";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
	return (
		<div>
			<pearson-progress-bar></pearson-progress-bar>
		</div>
	)
}
```
