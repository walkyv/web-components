# Pearson Toggle Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Properties](#api-properties)
   3. [Events](#api-events)

A shareable, accessible toggle.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/toggle/example.html

<a name="install"></a>

## Installation

Make sure you have all the appropriate polyfills from [the main README](https://github.com/pearson-ux/web-components/blob/master/README.md) in place. Then, run the following in your terminal:

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

> The import path will be in the **node_modules** folder, which is
> usually held outside the applicaiton source. If you publish your
> application to a **./public** or **./dist** folder you will want to
> write a script to copy this dependency to a desired location.

Add the `<pearson-toggle> </pearson-toggle>` tags to the page.

<a name="api"></a>

## API

`pearson-toggle`'s API is similar to that of an `input type="checkbox"`. You _must_ give it a unique ID, and you _must_ label it. That means either creating a `label` tag somewhere in the DOM and setting its `for` attribute to the ID of the toggle, wrapping the toggle in a label, or giving the toggle an `aria-label` attribute. When the toggle is triggered, it will emit a `change` event.

<a name="api-attributes"></a>

### Attributes

| Attribute  | Type      | Default  | Description                                |
| ---------- | --------- | -------- | ------------------------------------------ |
| `id`       | `String`  | Required | The unique ID of the toggle               |
| `on`       | `boolean` | `false`  | Determines whether the toggle is on       |
| `disabled` | `boolean` | `false`  | Determines whether the toggle is disabled |
| `name`     | `String`  | unset    | The name of the toggle                    |
| `value`    | `String`  | unset    | The value of the toggle                   |

<a name="api-attributes-example"></a>

#### Example

```html
<pearson-toggle
  id="textNotifications"
  name="notifications"
  value="text"
>
</pearson-toggle>
<label for="textNotifications">Text notifications</label>

<pearson-toggle
  id="emailNotifications"
  name="notifications"
  value="email"
  on
>
</pearson-toggle>
<label for="emailNotifications">Email notifications</label>
```

<a name="api-properties"></a>

### Properties

Like native checkboxes, `pearson-toggle` exposes its `name`, `value`, and `on` attributes as _properties_, which can be easily accessed in JavaScript.

| Property | Type      | Description                 |
| -------- | --------- | --------------------------- |
| `name`   | `String`  | The name of the toggle     |
| `value`  | `String`  | The value of the toggle    |
| `on`     | `Boolean` | The on state of the toggle |

**Important Note:**

> _Unlike_ native checkboxes, `pearson-toggle` _will not_ send its `name` and `value` as part of a form `submit` event. If you need the value of a `pearson-toggle` at the time of form submission, you will have to use JavaScript to access it.

<a name="api-properties-example"></a>

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

console.log(emailToggle.value); // 'email'
console.log(emailToggle.on); // true
console.log(emailToggle.name); // 'notifications'
```

<a name="api-events"></a>

### Emitted Events

| Event    | Description                                                   |
| -------- | ------------------------------------------------------------- |
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
