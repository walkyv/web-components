# Pearson Datepicker Web Component

## Table of Contents

1. [Demo](#demo)
2. [Install](#install)
3. [Usage](#usage)
4. [Structure](#usage-structure)
5. [API](#api)
   1. [Attributes](#api-attributes)
   1. [Classes](#api-classes)
   1. [Example](#api-example)

A shareable, accessible tab-navigation with calendar.

<a name="demo"></a>

## Demo

https://pearson-ux.github.io/web-components/tab-navigation/

<a name="install"></a>

## Installation

Run the following in your terminal:

```bash
# my-app is the directory containing your app
cd my-app
npm install --save @pearson-ux/tab-navigation
```

<a name="usage"></a>

## Usage

Import the web component onto the page, inbetween the `<head>` tags, like so:

```html
<head>
  <!-- Font stack-->
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i"
    rel="stylesheet"
  />

  <!-- Polyfills -->
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/webcomponents-loader.js"></script>
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@^2/custom-elements-es5-adapter.js"></script>
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?rum=0"></script>

  <!-- Web component script -->
  <script src="/path-to-tab-navigation/js/dist/pearson-tabs" />
</head>
```

**Important Notes:**

1. The Google Fonts link is necessary to ensure that the components render properly. You must include it, **or** be sure that Open Sans is loaded in your app some other way.
2. The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source. If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.

Add the `pearson-tabs` open and closing tags to the page.

<a name="#usage-structure"></a>

### Structure

You as the developer must define content for the `pearson-tags` component. The component accepts **two** direct children: `<ul class="tabs" slot="tabs">` and `<div class="panels" slot="panels">`. Like so:

```html
<pearson-tabs>
  <ul class="tabs" slot="tabs">
    <!-- tabs... -->
  </ul>
  <div class="panels" slot="panels">
    <!-- panels... -->
  </div>
</pearson-tabs>
```

The children of the `tabs` slot must be `li` tags. The text in those `li` tags will become the names of your tabs. **At this time, the panel supports a max of six tabs**.

The children of the `panels` slot must be `div` tags with a `data-panel` attribute. The content of each `data-panel` can be _whatever you want_. Below is an example of this all together:

```html
<pearson-tabs>
  <ul class="tabs" slot="tabs">
    <li>Tab one</li>
    <li>Tab two</li>
    <li>Tab three</li>
  </ul>
  <div class="panels" slot="panels">
    <div data-panel>
      <p>Content one!</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
        voluptatum ullam possimus atque maiores placeat minus reprehenderit
        illum dignissimos aperiam, provident eveniet tempora similique harum
        porro aspernatur asperiores. Soluta, cupiditate!
      </p>
    </div>
    <div data-panel>
      <p>Content two!</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
        voluptatum ullam possimus atque maiores placeat minus reprehenderit
        illum dignissimos aperiam, provident eveniet tempora similique harum
        porro aspernatur asperiores. Soluta, cupiditate!
      </p>
    </div>
    <div data-panel>
      <p>Content three!</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
        voluptatum ullam possimus atque maiores placeat minus reprehenderit
        illum dignissimos aperiam, provident eveniet tempora similique harum
        porro aspernatur asperiores. Soluta, cupiditate!
      </p>
    </div>
  </div>
</pearson-tabs>
```

<a name="api"></a>

## API

<a name="api-attributes"></a>

### Attributes

All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `activeIdx` | Number | unset   | The index of the tab and panel you want to be open by default. If unset, defaults to 0.                    |
| `theme`      | String | unset   | The color palette used to render the tabs. Accepted values: 'dark'. If unset, will render the light theme. |

**Important Note:** The `activeIdx` attrubute is managed by the component, and will change as the user selects tabs.

<a name="api-example"></a>

### Example

The following will render a dark-themed tab component with the first panel open by default.

```html
<pearson-tabs activeIdx="1" theme="dark">
  <!-- tablist omitted -->
  <!-- panels omitted -->
</pearson-tabs>
```
