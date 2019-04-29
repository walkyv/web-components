# Pearson Pagination Web Component

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

https://pearson-ux.github.io/web-components/pagination/

<a name="install"></a>

## Installation

Make sure you have all the appropriate polyfills from [the main README](https://github.com/pearson-ux/web-components/blob/master/README.md) in place. Then, run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/pagination
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
  <script src="/path-to-pagination/js/dist/pearson-pagination.js" />
</head>
```


**Important Notes:**
1. The Google Fonts link is necessary to ensure that the components render properly. You must include it, **or** be sure that Open Sans is loaded in your app some other way.
2. The import path will be in the **node_modules** folder, which is usually held outside the application source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.


<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes


| Attribute    | Type    | Default | Description                                                                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `firstpage`      | String  | unset   | The first page you want pagination to begin at                                        |
| `lastpage` | String  | unset   | The last page you want pagination to end with                              |
| `ellipsisat`       | String  | unset   | Denotes the placement of the ellipsis (does not apply for compact mode)| String  | unset   | Unique ID of the element that will receive focus after the alert is dismissed.
| `compact` | Bool  | unset   | Sets the pagination to compact mode

<a name="api-attributes-example"></a>

#### Example


```html
<pearson-pagination
  firstpage="1"
  lastpage="20"
  ellipsisat="5"
>
</pearson-pagination>
```

<a name="api-events"></a>

### Emitted Events

`pearson-pagination` only emits three events:

| Event     | Description                                              |
| --------- | -------------------------------------------------------- |
| `nextPage` | Will fire when the user interacts with the next page button |
| `prevPage` | Will fire when the user interacts with the previous page button |
| `newPage` | Will fire when the user interacts with single page number|

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
window.addEventListener('nextPage', event => {
 // do something when the next page button is clicked
});

<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/pagination
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/pagination";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
   return (
      <div>
         <pearson-pagination firstpage="1" lastpage="20" ellipsisat="5"></pearson-pagination>
      </div>
   )
}
```
