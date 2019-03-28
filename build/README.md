

# web-components
A library of pearson web components

## Dependencies
You will need to add the following 3 polyfills, in order for your project to be cross-browser compatible.  These polyfills will need to go between the  `<head>  </head>` tags on the HTML page you want to load the web component on.

 - **Web Component Loader - https://cdnjs.com/libraries/webcomponentsjs**
 - **ES5 Adapter - https://cdnjs.com/libraries/webcomponentsjs**
 - **Polyfill-io - https://polyfill.io/v2/docs/examples**

       <!-- loads web component polyfills -->
       <head>
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
       </head>

**Additionally**
If you prefer not to use a CDN, you can download these polyfills locally with NPM



  **Important Note:**


> These components are dependant on Moment.JS please make sure you are importing moment and moment-range into your projects.   You can use the CDN links below, or use NPM.

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment-range/4.0.2/moment-range.js"></script>

  ## Usage
  Adding all of our web components to your project is easy just add the following line of code to the bottom of the page

    <script src="https://unpkg.com/@pearson-ux/pearson-web-components@1.0.0/pearson-web-components-min.js"></script>

or you can link to it locally with NPM

    @import '@pearson-ux/pearson-web-components'

Here is a list of all the included components along with links to documentation on how to consume the component:

 1. [Alert](https://www.npmjs.com/package/@pearson-ux/alert)
 2. [Coachmark](https://www.npmjs.com/package/@pearson-ux/coachmark)
 3. [Datepicker](https://www.npmjs.com/package/@pearson-ux/datepicker)
 4. [Drawer](https://www.npmjs.com/package/@pearson-ux/drawer)
 5. [File uploader](https://www.npmjs.com/package/@pearson-ux/file-uploader)
 6. [Footer](https://www.npmjs.com/package/@pearson-ux/footer)
 7. [Loading indicator](https://www.npmjs.com/package/@pearson-ux/loading-indicator)
 8. [Modal](https://www.npmjs.com/package/@pearson-ux/modal)
 9. [Progress bar](https://www.npmjs.com/package/@pearson-ux/progress-bar)
 10. [Tab navigation](https://www.npmjs.com/package/@pearson-ux/tabs)
 11. [Toggle](https://www.npmjs.com/package/@pearson-ux/toggle)
