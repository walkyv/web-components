# A11y Modal Web Component

A shareable, accessible, modal, powered by web components.

## Install
Before you install, make sure you have all the appropriate polyfills from the main README.md in place.

    cd my-app
    npm install --save @pearson-ux/modal
    
## Usage
Import the web component onto the page, inbetween the `<head>` tags

    <head>
	    <!-- polyfills and other stuff... -->
	    
	    <!-- import web components -->
	    <link rel="import" href="/path/to/modal/index.html" />
	</head>

**Important Note:**
The import path will be in the **node_modules** folder, which is usually held outside the applicaiton source.  If you publish your application to a **./public** or **./dist** folder you will want to write a script to copy this dependency to a desired location.
