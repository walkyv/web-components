# Pearson Footer Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [API](#api)
   1. [Attributes Examples](#api-attributes-example)
5. [React](#react)

A shareable, accessible drawer.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/footer/

<a name="install"></a>

## Installation

Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/footer
```

<a name="usage"></a>

## Usage

Import the web component onto the page, inbetween the `<head>` tags, like so:

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
  <script src="/path-to-footer/js/dist/pearson-footer.js" />
</head>
```

**Important Notes:**

1. The Google Fonts link is necessary to ensure that the components render properly. You must include it, **or** be sure that Open Sans is loaded in your app some other way.
2. The import path will be in the **node_modules** folder, which is usually held outside the application source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

<a name="api"></a>

## API

`pearson-drawer`'s API uses an `open` prop to manage the drawer's open state. You can use JavaScript to change the `open` prop to `true` or `false`.

| Attribute       | Type    | Default | Description                                            |
| --------------- | ------- | ------- | ------------------------------------------------------ |
| `accessibility` | boolean | `false` | Shows accessibility link in footer                     |
| `patent`        | boolean | `false` | Shows patent notice link in footer                     |
| `support`       | boolean | `false` | Shows support link in footer                           |
| `theme`         | string  | unset   | Sets the theme of the footer. Accepted values: 'dark'. |

<a name="api-attributes-example"></a>

### Example

This footer only shows two default links.

HTML:

```html
<body>
  <pearson-footer />
</body>
```

We can add 3 additional supported links by adding the attributes

```html
<body>
  <pearson-footer accessibility patent support />
</body>
```

We can change the appearance of the footer by adding the theme attribute.

```html
<body>
  <pearson-footer theme="dark" />
</body>
```

<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/footer
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/footer";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
	return (
		<div>
			<pearson-footer></pearson-footer>
		</div>
	)
}
```
