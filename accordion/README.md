


# Pearson Accordion Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
5. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Events](#api-events)
6. [React](#react)

A shareable, accessible accordion.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/accordion/

<a name="install"></a>

## Installation


Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/accordion
```

<a name="usage"></a>

## Usage

Import the web component onto the page, in between the `<head>` tags, like so:

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
   <script src="path/to/pearson-accordion.js"></script>

</head>
```

**Important Notes:**

1. The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `pearson-accordion` open and closing tags to the page.

<a name="usage-structure"></a>

### Structure

You as the developer must define content for the `pearson-accordion` component.
```html
<pearson-accordion>
  <ul slot="buttons">
    <li>Button One</li>
    <li>Button Two</li>
    <li>Button Three</li>
    <li>Button Four</li>
  </ul>
  <div class="panels" slot="panels">
    <div class="panel">Section One</div>
    <div class="panel">Section Two</div>
    <div class="panel">Section Three</div>
    <div class="panel">Section Four</div>
  </div>
</pearson-accordion>
```
**Important Notes:**
The first child must be a  `ul` tag with the attribute and value `slot="buttons"`. The second child is a `div` with the following attributes `class="panels"  slot="panels"`

The children of the `ul` are standard `li` tags.  Each tag will generate the button that opens up the panel that corresponds to that button.  For example.  The first `li`  button,  will open up the first panel `div` with content of section one.  Button two opens up Section Two, etc....

While you are using the `li` tag to generate the buttons, the web component will regenerate the markup so it's accessible and semantic.

You can add any additional markup you want in between `<div class="panel">TEXT OR MARKUP GOES HERE</div>  `


<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `toggle` | Bool | unset   | Allows multiple panels to be displayed at the same time.                    |


<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/accordion
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/accordion";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
   return (
      <div>
		<pearson-accordion>
		  <ul slot="buttons">
		    <li>Button One</li>
		    <li>Button Two</li>
		    <li>Button Three</li>
		    <li>Button Four</li>
		  </ul>
		  <div class="panels" slot="panels">
		    <div class="panel">Section One</div>
		    <div class="panel">Section Two</div>
		    <div class="panel">Section Three</div>
		    <div class="panel">Section Four</div>
		  </div>
		</pearson-accordion>
      </div>
   )
}
```
