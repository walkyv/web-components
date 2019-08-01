
# Pearson Header Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [API](#api)
5. [React](#react)

A shareable, accessible company header.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/header/

<a name="install"></a>

## Installation
 For the easy installation we recommend using the CDN link below.
 [https://unpkg.com/@pearson-ux/header](https://unpkg.com/@pearson-ux/header)

Or you can load the component into your project.  Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/header
```

<a name="usage"></a>

## Usage

Import the web component onto the page, in between the `<head>` tags, like so:

```html
<head>
  <!-- polyfills and other stuff... -->
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

  <!-- import web components -->
	 <script src="https://unpkg.com/@pearson-ux/header"></script>
</head>
```

**Important Note:**

> If you are loading the component into your project, the import path will be in the **node_modules** folder, which is usually held outside the application source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `<pearson-header> </pearson-header>` tags to the page.

  <a name="api"></a>

## API


<a name="api-attributes"></a>

### Attributes

| Attribute    | Type      | Default  | Description                                                   |
| ------------ | --------- | -------- | ------------------------------------------------------------- |
| `notifications`         | `String`  | `'0'` | The number of notifications the user has, this will display in the header.                                   |
| `theme`         | `String` | `'dark'`  | Choose between a 'light' and 'dark' header theme                           |
| `name`   | `String` | `unset`  | The name of the user, used to build the avatar                     |
| `loggedin` | `boolean` | `false`  | When true, the header changes to a logged in state. |                                   |

<a name="api-attributes-example"></a>

#### Example

HTML:

```html
<pearson-header
	notifications="0"
	theme="dark"
	name="aaa bbb"
	loggedin>
</pearson-header>
```


<a name="api-events"></a>

### Emitted Events

| Event    | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `logout` | Will fire when the user clicks the logout button |

<a name="api-events-example"></a>

#### Example

JS:

```js
<script>
  document.addEventListener('logout', event=> {
    console.log('logout')
  })
</script>
```
<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/header
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/header";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
   return (
      <div>
         <pearson-header></pearson-header>
      </div>
   )
}
```
