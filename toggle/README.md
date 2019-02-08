# Pearson Toggle Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
   1. [Semantics](#usage-semantics)
4. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Events](#api-events)
5. [React](#react)

A shareable, accessible toggle.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/toggle/

<a name="install"></a>

## Installation

Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/toggle
```

<a name="usage"></a>

## Usage

Import the web component onto the page, inbetween the `<head>` tags, like so:

```html
<head>
  <!-- polyfills and other stuff... -->

  <!-- import web components -->
  <link rel="import" href="/path/to/toggle/index.html" />
</head>
```

**Important Note:**

> The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `<pearson-toggle> </pearson-toggle>` tags to the page.

<a name="usage-semantics"></a>

### Semantics

[Switches are for instantaneous actions](http://uxmovement.com/buttons/when-to-use-a-switch-or-checkbox/). As soon as `pearson-toggle` fires its `change` event, the change it controls should be carried out. If you want the changes to be batched for form submission or another later action, you should not use `pearson-toggle`. `pearson-toggle` _will not_ send its `name` and `value` as part of a form `submit` event, so you will need to handle changes immediately anyway.

<a name="api"></a>

## API

`pearson-toggle`'s API is similar to that of an `input type="checkbox"`. You _must_ give it a unique ID, and you _must_ label it. That means either creating a `label` tag somewhere in the DOM and setting its `for` attribute to the ID of the toggle, wrapping the toggle in a label, or giving the toggle an `aria-label` attribute. When the toggle is triggered, it will emit a `change` event.

All of the attributes in `pearson-toggle`'s API are reflected as _properties_. All of these can be accessed in JavaScript.

<a name="api-attributes"></a>

### Attributes

| Attribute    | Type      | Default  | Description                                                   |
| ------------ | --------- | -------- | ------------------------------------------------------------- |
| `id`         | `String`  | Required | The unique ID of the toggle                                   |
| `on`         | `boolean` | `false`  | Determines whether the toggle is on                           |
| `disabled`   | `boolean` | `false`  | Determines whether the toggle is disabled                     |
| `hideLabels` | `boolean` | `false`  | Determines whether the ON/OFF text inside the toggle is shown |
| `name`       | `String`  | unset    | The name of the toggle                                        |
| `value`      | `String`  | unset    | The value of the toggle                                       |

<a name="api-attributes-example"></a>

#### Example

HTML:

```html
<pearson-toggle
  id="emailNotifications"
  name="notifications"
  value="email"
  on
>
</pearson-toggle>
<label for="emailNotifications">Email notifications</label>
```

JS:

```js
const emailToggle = document.querySelector('#emailNotifications');

console.log(emailToggle.on); // true
console.log(emailToggle.disabled); // false
console.log(emailToggle.value); // 'email'
console.log(emailToggle.name); // 'notifications'

emailToggle.on = false;
console.log(emailToggle.on); // false
```

<a name="api-events"></a>

### Emitted Events

| Event    | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `change` | Will fire when the toggle is triggered via mouse or keyboard |

<a name="api-events-example"></a>

#### Example

HTML:

```html
<pearson-toggle
  id="emailNotifications"
  name="notifications"
  value="email"
  on
>
</pearson-toggle>
<label for="emailNotifications">Email notifications</label>
```

JS:

```js
const toggles = document.querySelectorAll('pearson-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('change', e => {
    // This toggle
    const self = e.target;

    // True or false, depending on how many times
    // the toggle has been clicked
    console.log(self.on);
  });
});
```
<a name="react"></a>

### React
To use these web components in your react application do the following.
First install the component.

```bash
npm  install --save @pearson-ux/toggle
```

Import your component on the page you would like to use it on

```js
import "@pearson-ux/toggle";
```
Then use the markup in your JSX code.  You can pass props in to available API attributes.

```js
render () {
	return (
		<div>
			<pearson-toggle></pearson-toggle>
		</div>
	)
}
```
