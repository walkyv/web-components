
# Pearson Dropdown Menu Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [Structure](#usage-structure)
5. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Events](#api-events)
   3. [Example](#api-example)
6. [React](#react)

A shareable, accessible dropdown menu.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/dropdown/

<a name="install"></a>

## Installation


Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/dropdown
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
	<script src="path/to/pearson-dropdown.js"></script>

</head>
```

**Important Notes:**

1. The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `pearson-dropdown` open and closing tags to the page.

<a name="usage-structure"></a>

### Structure

You as the developer must define content for the `pearson-dropdown` component. The component accepts **one** direct child: . Like so:  `<li id="optionTwo" class="divider">second option</li>`

```html
<pearson-dropdown buttonText="Please Select">
  <li id="optionOne">first option</li>
  <li id="optionTwo" class="divider">second option</li>
  <li id="optionThree">third option</li>
</pearson-dropdown>s>
```
**Important Notes:**
The children must be `li` tags. The text in those `li` tags will become the options in your dropdown menu.

You can separate menu items inside the dropdown by adding a class of 'divider' to the li


<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `textOnly` | Bool | unset   | Setting to true, makes the button a text button without the button border.                    |
| `buttonText`      | String | unset   | This is the text that goes into the dropdown button |
| `multiSelect`      | Bool | unset   | Setting to true, makes the dropdown allow multiple selections |


  <a name="api-events"></a>

### Emitted Events

| Event    | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `change` | Will fire when the dropdown menu closes.  If multiSelect is true, an array of the selected items will be passed back to the event.  If multiSelect is false, the selected item will be passed back as a string |

<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/dropdown
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/dropdown";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
   return (
      <div>
         <pearson-dropdown>
           <li id="optionOne">first option</li>
		 </pearson-dropdown>
      </div>
   )
}
```
