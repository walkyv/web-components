


# Pearson Datepicker Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [API](#api)
   1. [Attributes](#api-attributes)
5. [React](#react)

A shareable, accessible datepicker with calendar.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/datepicker/

<a name="install"></a>

## Installation

Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/datepicker
```

<a name="usage"></a>

## Usage

Import the web component onto the page, inbetween the `<head>` tags, like so:

``` html
<head>
  <!-- Font stack-->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i" rel="stylesheet">

  <!-- Polyfills -->
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-loader.js"></script>
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/custom-elements-es5-adapter.js"></script>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?rum=0"></script>

  <!-- Web component script -->
  <script src="/path-to-datepicker/js/dist/pearson-datepicker.js" />
</head>
```

**Important Notes:**

1. The Google Fonts link is necessary to ensure that the components render properly. You must include it, **or** be sure that Open Sans is loaded in your app some other way.
2. The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `<pearson-datepicker> </pearson-datepicker>` tags to the page.

<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

All attributes in this API are optional.

| Attribute    | Type    | Default | Description                                                                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `value`      | String  | unset   | The date you want the calendar to display.  If no value is set the calendar will default to today's date.


  **Important Note:**

> The value attribute will change when dates are entered or selected from the calendar dropdown.


<a name="api-attributes-example"></a>

#### Example

```html
<pearson-datepicker
   value="10/17/1978"
>
</pearson-datepicker>
```
<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/datepicker
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/datepicker";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
	return (
		<div>
			<pearson-datepicker></pearson-datepicker>
		</div>
	)
}
```
