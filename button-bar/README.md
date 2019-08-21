

# Button Bar Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [Adding Buttons](#adding)
5. [React](#react)

A shareable, accessible company header.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/button-bar/

<a name="install"></a>

## Installation
 For the easy installation we recommend using the CDN link below.
 [https://unpkg.com/@pearson-ux/button-bar](https://unpkg.com/@pearson-ux/button-bar)

Or you can load the component into your project.  Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/button-bar
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
    <script src="https://unpkg.com/@pearson-ux/button-bar"></script>
</head>
```

**Important Note:**

> If you are loading the component into your project and not using the CDN, the import path will be in the **node_modules** folder, which is usually held outside the application source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `<pearson-button-bar> </pearson-button-bar>` tags to the page.

This button bar accepts custom markup and is used to add SVG icon buttons to the bar.  You can add buttons to the bar by including it between the ```<pearson-button-bar>``` tags.

```html
<pearson-button-bar>
	<li data-text="Edit" slot="list">
	  <button class="gr-btn icon-btn-18 ">
	    <svg focusable="false" class="icon-18" aria-hidden="true">
	      <path d="M9.26201579,1.31563727 C10.3665853,1.31563727 11.2620158,2.21106777 11.2620158,3.31563727 L11.2620158,14.8529591 L9.132426,17.0114903 C8.93848613,17.2080658 8.62191085,17.2102024 8.42533532,17.0162626 L6.26201579,14.8529591 L6.26201579,3.31563727 C6.26201579,2.21106777 7.15744629,1.31563727 8.26201579,1.31563727 L9.26201579,1.31563727 Z M8.01201579,6.31563727 L8.01201579,14.1280854 L8.77050889,14.8865785 L9.51201579,14.1349944 L9.51201579,6.31563727 L8.01201579,6.31563727 Z M8.01201579,4.64897061 L9.51201579,4.64897061 L9.51201579,3.31563727 C9.51201579,3.17756609 9.40008698,3.06563727 9.26201579,3.06563727 L8.26201579,3.06563727 C8.1239446,3.06563727 8.01201579,3.17756609 8.01201579,3.31563727 L8.01201579,4.64897061 Z" fill-rule="nonzero" transform="translate(8.762016, 9.237984) rotate(45.000000) translate(-8.762016, -9.237984) "></path>
	    </svg>
	  </button>
	</li>
	<li data-text="Bookmark" slot="list">
	  <button class="gr-btn icon-btn-18 ">
	    <svg focusable="false" class="icon-18" aria-hidden="true">
	      <path d="M13.25,3 C13.25,2.86192881 13.1380712,2.75 13,2.75 L5,2.75 C4.86192881,2.75 4.75,2.86192881 4.75,3 L4.75,14.3782563 L8.99999989,10.7660543 L13.25,14.3782563 L13.25,3 Z M8.99999989,13.0627457 L4.64761739,16.7619655 C4.22679536,17.1196347 3.59570351,17.0684392 3.23803431,16.6476172 C3.08437026,16.466821 3,16.2372758 3,15.9999998 L3,3 C3,1.8954305 3.8954305,1 5,1 L13,1 C14.1045695,1 15,1.8954305 15,3 L15,16 C15,16.5522847 14.5522847,17 14,17 C13.762724,17 13.5331788,16.9156297 13.3523826,16.7619657 L8.99999989,13.0627457 Z"></path>
	    </svg>
	  </button>
	</li>
</pearson-header>
```
    <a name="buttons"></a>
## Adding Buttons

You can add as many buttons to the bar as you like.  Each button should be wrapped in a ```<li>``` tag.  Each li tag you add, must have an attribute of ```data-text="your button text"``` and another slot attribute with a value of list.  This will place the list item in the correct spot in the shadow dom.  ```slot="list"```

```html
<pearson-button-bar>
	<li data-text="button text" slot="list>
		 <!-- Gravity Button Here -->
	</li>
</pearson-button-bar>
```

Add the icon button from Gravity you want to display inside the ```<li>``` tag.

<a name="api-events"></a>


### Emitted Events
  No custom events are emitted from this web component.  You can attach click event listeners to the buttons inside the bar, by accessing the buttons inside the shadow root of the web component from any JS file.

#### Example

JS:

```js
<script>
const buttonbar = document.querySelector('pearson-buttonbar'),
	buttons = buttonbar.shadowRoot.querySelectorAll('button');

	buttons.forEach(button => {
	  button.addEventListener('click', event=> {
	    console.log(event.currentTarget)
	  })
	})
</script>
```

<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/button-bar
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/button-bar";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
   return (
      <div>
         <pearson-button-bar></pearson-button-bar>
      </div>
   )
}
```
