---
id: accordion
title: Accordion
sidebar_label: Accordion
---

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://unpkg.com/@pearson-ux/accordion"></script>
```
### NPM
``` console
npm i @pearson-ux/accordion --save
```

## Demo

### Standard
<div class="box">
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

### Toggle
To make the buttons toggle on click, add an attribute of ```toggle``` to the ```<pearson-accordion>``` element.
<div class="box">
    <pearson-accordion toggle>
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

```html
<pearson-accordion toggle>
```

## Structure
Follow these patterns to successfully build out the accordion.
The first child must be a  `ul` tag with the attribute and value `slot="buttons"`. The second child is a `div` with the following attributes `class="panels"  slot="panels"`

```html
<pearson-accordion>
    <ul slot="buttons"></ul>
    <div class="panels" slot="panels"></div>
<pearson-accordion>
```
The children of the `ul` are standard `li` tags.  Each tag will generate the button that opens up the panel that corresponds to that button.  For example.  The first `li`  button,  will open up the first panel `div` with content of section one.  Button two opens up Section Two, etc....

```html
<pearson-accordion toggle>
    <ul slot="buttons">
        <li>Button One</li>
    </ul>
    <div class="panels" slot="panels">
        <div class="panel">Section One</div>
    </div>
</pearson-accordion>
```
While you are using the `li` tag to generate the buttons, the web component will regenerate the markup so it's accessible and semantic.

> **Important note:**
You can add any additional markup you want in between `<div class="panel">TEXT OR MARKUP GOES HERE</div>  `

## API
All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `toggle` | Bool | unset   | Allows multiple panels to be displayed at the same time.                    |
