[![Build Status](https://travis-ci.com/pearson-ux/web-components.svg?token=yRiZW31ciCX2AwmRD34E&branch=master)](https://travis-ci.com/pearson-ux/web-components)

# A11y Modal Web Component

A shareable, accessible, modal, powered by web components.

## Demo

https://pearson-ux.github.io/web-components/modal/example.html

## Install

Before you install, make sure you have all the appropriate polyfills from the main README.md in place.
https://github.com/pearson-ux/web-components/blob/master/README.md

    cd my-app
    npm install --save @pearson-ux/modal

## Usage

Import the web component onto the page, inbetween the `<head>` tags

```html
<head>
  <!-- polyfills and other stuff... -->

  <!-- import web components -->
  <link rel="import" href="/path/to/modal/index.html" />
</head>
```

**Important Note:**

> The import path will be in the **node_modules** folder, which is  
> usually held outside the applicaiton source. If you publish your  
> application to a **./public** or **./dist** folder you will want to  
> write a script to copy this dependency to a desired location.

**To Use**
Add the `<pearson-modal> </pearson-modal>` tag to the page, passing in the id of the button you want to trigger the modal, in an attribute called triggerId. You can add any content you like between the tags as normal HTML5 markup, and it will show up in the body of the modal.

**Important Note:**

> To maintain accessibility you will need to keep the modal tag adjacent  
> to your main content. The main content must be wrapped in an element  
> with an ID of main.

**Example Code:**

```html
<body>
  <!-- for accessibility, the must be adjacent to an element with an id of main -->
  <main id="main">
    <section class="container">
      <button id="trigger-modal">Open Modal</button>
    </section>
  </main>

  <pearson-modal triggerId="trigger-modal">
    <p> Hello World </p>
  </pearson-modal>
</body>
```

To set the title and toggle action buttons, see the API below.

## API

| Attribute        | Type      | Default         | Description                                                                           |
| ---------------- | --------- | --------------- | ------------------------------------------------------------------------------------- |
| `triggerId`      | `String`  | Required        | This is the button id of the trigger that launches the modal.                         |
| `titleText`      | `String`  | `'Modal Title'` | The title text you want to pass into the modal to display.                            |
| `showFooter`     | `Boolean` | `false`         | Set to "True" to show the footer with success and cancel buttons, else set to "False" |
| `successBtnText` | `String`  | `'Save'`        | The text you want to pass into the success button (if showFooter is set to true)      |
| `cancelBtnText`  | `String`  | `'Cancel'`      | The text you want to pass into the cancel button                                      |

**Example Code:**

```html
<!-- for accessibility, the must be adjacent to an element with an id of main -->
<main id="main">
  <section class="container">
    <button id="trigger-modal">Open Modal</button>
  </section>
</main>

<!-- place modal before the end of the body and pass in the reference ID of the button that triggers the modal -->
<pearson-modal
  triggerId="trigger-modal"
  titleText="Basic Title"
  successBtnText="Success"
  cancelBtnText="Cancel"
  showFooter
>
  <p>Pass in elements as children to the modal</p>
  <input type="text" />
  <button">Click Me</button>
</pearson-modal>
```

## Events

We provide 2 different JavaScript events

| Event     | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `success` | Will fire after the success button in the modal has been pressed |
| `cancel`  | Will fire after the cancel button in the modal has been pressed  |

<br>

**Example Code:**

```js
// you can query a web component like any other element in JavaScript
const modal = document.querySelector('pearson-modal');

modal.addEventListener('success', () => {
  // do something
});

modal.addEventListener('cancel', () => {
  // do something
});
```
