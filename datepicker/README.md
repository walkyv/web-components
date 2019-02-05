
# Pearson Datepicker Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [API](#api)
   1. [Attributes](#api-attributes)
   2. [Events](#api-events)

A shareable, accessible datepicker with calendar.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/datepicker/

<a name="install"></a>

## Installation

Make sure you have all the appropriate polyfills from [the main README](https://github.com/pearson-ux/web-components/blob/master/README.md) in place. Then, run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/datepicker
```

<a name="usage"></a>

## Usage

Import the web component onto the page, inbetween the `<head>` tags, like so:

```html
<head>
  <!-- polyfills and other stuff... -->

  <!-- import web components -->
	<script src="/path-to-datepicker/js/dist/datepicker.js" />
</head>
```

**Important Note:**

> The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `<pearson-datepicker> </pearson-datepicker>` tags to the page. `pearson-datepicker` renders as soon as it is in the DOM, so only create an alert as you need it.

<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

All attributes in this API are optional.

| Attribute    | Type    | Default | Description                                                                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `month`      | String  | unset   | The default month the dropdown calendar will display                                        |
| `day` | String  | unset   | The default day the dropdown calendar will display and appear selected                             |
| `year`       | String  | unset   | The default year the dropdown calendar will display |

<a name="api-attributes-example"></a>

#### Example

```html
<pearson-datepicker
  day="3"
  month="2"
  year="2019"
>
</pearson-datepicker>
```
