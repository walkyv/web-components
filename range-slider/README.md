


# Pearson Range Slider Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
5. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Events](#api-events)
6. [React](#react)

A shareable, accessible input range slider

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/range-slider/

<a name="install"></a>

## Installation


Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/range-slider
```

<a name="usage"></a>

## Usage

Import the web component onto the page, inbetween the `<head>` tags, like so:

```html
<head>
  <!-- Polyfills -->
   <script type="text/javascript">
     if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
       document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js"><\/script>');
       document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/custom-elements-es5-adapter.js"><\/script>');
     } else {
       document.write('<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-loader.js"><\/script>');
       document.write('<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/custom-elements-es5-adapter.js"><\/script>');
     }
   </script>
   <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>

  <!-- Web component script -->
   <script src="path/to/pearson-range-slider.js"></script>

</head>
```

**Important Notes:**

1. The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `pearson-range-slider` open and closing tags to the page.


<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `min` | Bool | unset   | Set the minimum number of the slider.                    |
| `max`      | String | unset   | Set the maximum number of the slider|
| `step`      | String | unset   | The stepping interval |
| `toptext`      | String | unset   | Text that is centered above the slider |
| `righttext`      | String | unset   | Text that is to the right of the slider |
| `input`      | Bool | BOOL   | Setting to true, adds an optional input box to control the slider |
| `bottomtext`      | String | unset   | Text that is below the input|

  <a name="api-events"></a>

### Emitted Events

| Event    | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `change` | Will fire when the range-slider drags across the bar or when an input value is entered.

<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/range-slider
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/range-slider";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
   return (
      <div>
		<pearson-range-slider min="0" max="5" step="any" toptext="Target Weight" bottomtext="" righttext="lb"></pearson-range-slider>
      </div>
   )
}
```
