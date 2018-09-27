# Pearson Alert Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Events](#api-events)

A shareable, accessible toggle.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/alert/example.html

<a name="install"></a>

## Installation

Make sure you have all the appropriate polyfills from [the main README](https://github.com/pearson-ux/web-components/blob/master/README.md) in place. Then, run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/alert
```

<a name="usage"></a>

## Usage

Import the web component onto the page, inbetween the `<head>` tags, like so:

```html
<head>
  <!-- polyfills and other stuff... -->

  <!-- import web components -->
  <link rel="import" href="/path/to/alert/index.html" />
</head>
```

**Important Note:**

> The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `<pearson-alert> </pearson-alert>` tags to the page.

<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

| Attribute | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
|           |      |         |             |


<a name="api-attributes-example"></a>

#### Example

HTML:

```html

```

JS:

```js
```

<a name="api-events"></a>

### Emitted Events

| Event     | Description                        |
| --------- | ---------------------------------- |
| `dismiss` | Will fire when the alert is closed |

<a name="api-events-example"></a>

#### Example

HTML:

```html
```

JS:

```js
```
