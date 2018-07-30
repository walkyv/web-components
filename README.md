[![Build Status](https://travis-ci.com/pearson-ux/web-components.svg?token=yRiZW31ciCX2AwmRD34E&branch=master)](https://travis-ci.com/pearson-ux/web-components)

# web-components
A library of pearson web components

## Dependencies
You will need to add the following 3 polyfills, in order for your project to be cross-browser compatible.  These polyfills will need to go between the  `<head>  </head>` tags on the HTML page you want to load the web component on. 

 - **Web component Loader - https://cdnjs.com/libraries/webcomponentsjs**
 - **ES5 Adapter - https://cdnjs.com/libraries/webcomponentsjs**
 - **Polyfill-io - https://polyfill.io/v2/docs/examples**

       <!-- loads web component polyfills -->
       <head>
       	 <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js"></script>
           <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/custom-elements-es5-adapter.js"></script>
           <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
       </head>
