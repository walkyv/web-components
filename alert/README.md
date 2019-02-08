# Pearson Alert Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Events](#api-events)
5. [React](#react)


A shareable, accessible alert.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/alert/

<a name="install"></a>

## Installation

Make sure you have all the appropriate polyfills from [the main README](https://github.com/pearson-ux/web-components/blob/master/README.md) in place. Then, run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/alert
```

<a name="usage"></a>

## Usage

Import the web component onto the page, inbetween the `<head>` tags, like so:

``` html
<head>
  <!-- Font stack -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i" rel="stylesheet">

  <!-- Polyfills -->
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-loader.js"></script>
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/custom-elements-es5-adapter.js"></script>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?rum=0"></script>

  <!-- Web component script -->
  <script src="/path-to-datepicker/js/dist/pearson-alert.js" />
</head>
```


**Important Notes:**
1. The Google Fonts link is necessary to ensure that the components render properly. You must include it, **or** be sure that Open Sans is loaded in your app some other way.
2. The import path will be in the **node_modules** folder, which is usually held outside the application source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.
3. `pearson-alert` does not style the text you pass into it. You must import and apply the styles you want to apply to the text yourself.


<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

Except for `animated`, all attributes in this API are required for the alert to function properly. An alert whose level is `global` will appear in the top-left of the current page; an alert whose level is `inline` will appear in flow.

| Attribute    | Type    | Default | Description                                                                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `level`      | String  | unset   | The position of the alert. Permitted values: `'global'` or `'inline'`                                        |
| `returnNode` | String  | unset   | Unique ID of the element that will receive focus after the alert is dismissed.                               |
| `type`       | String  | unset   | Denotes the type of the alert. Permitted values: `'success'`, '`'error'`, `'confirmation'`, or `'important'` |
| `animated`   | Boolean | `false` | Denotes whether the alert will appear and disappear with animations.                                         |

<a name="api-attributes-example"></a>

#### Example

Pass your own HTML into the `pearson-alert`. Remember your best practices! Write the most appropriate markup for the needs of your application, and for the context of your alert.

```html
<pearson-alert
  level="global"
  returnNode="foo"
  type="error"
  animated
>
  <h2 id="alertTitle" class="pe-label alert-title">
    <strong>Heads up!</strong>
  </h2>
  <p id="alertText" class="pe-paragraph alert-text">
    <a href="#">Something has happened!</a>
  </p>
</pearson-alert>
```

<a name="api-events"></a>

### Emitted Events

`pearson-alert` only emits one event: `dismiss`. Once an alert is dismissed, it is removed from the DOM.

| Event     | Description                                              |
| --------- | -------------------------------------------------------- |
| `dismiss` | Will fire when the user interacts with the close button. |

<a name="api-events-example"></a>

#### Example

HTML:

```html
<pearson-alert
  level="global"
  returnNode="foo"
  type="error"
  animated
>
  <h2 id="alertTitle" class="pe-label alert-title">
    <strong>Heads up!</strong>
  </h2>
  <p id="alertText" class="pe-paragraph alert-text">
    <a href="#">Something has happened!</a>
  </p>
</pearson-alert>
```

JS:

Because alerts are temporary, it usually makes the most sense for add a listener to the `window` object and capture `dismiss` events there.

```js
window.addEventListener('dismiss', function(e) {
  console.log(`You closed a(n) ${e.target.type} alert`);
}, true);
```

<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/alert
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/alert";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
	return (
		<div>
			<pearson-alert></pearson-alert>
		</div>
	)
}
```
