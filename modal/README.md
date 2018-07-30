
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

> The import path will be in the **node_modules** folder, which is
> usually held outside the applicaiton source.  If you publish your
> application to a **./public** or **./dist** folder you will want to
> write a script to copy this dependency to a desired location.

**To Use**
To use the modal on your page, use the `<pearson-modal> </pearson-modal>` tag.  You can add any content you like between the tags as normal HTML5 markup, and it will show up in the body of the modal.

**Important Note:**  

> To maintain accessibility you will need to keep the modal tag adjacent
> to your main content.  The main content must be wrapped in an element
> with an ID of main.
> 

**Example Code:** 

    <!-- for accessibility, the must be adjacent to an element with an id of main -->
    <main id="main">
    	<section class="container">
    		<button id="trigger-modal">Open Modal</button>
    	</section>
    </main>
    
    <pearson-modal>
    	<p> Hello World </p>
    </pearson-modal>

To set the title and toggle action buttons, see the API below.

## API 

| Attribute |  Description|
|--|--|
|buttonReferenceId  | This is the button id of the trigger that launches the modal. |
|modalTitleText  | The title text you want to pass into the modal to dispaly. |
| showFooter | Set to "True" to show the footer with success and cancel buttons, else set to "False"|
|successButtonText | The text you want to pass into the success button (if showFooter is set to true)|
|cancelButtonText | The text you want to pass into the cancel button

**Example Code:** 

    <!-- for accessibility, the must be adjacent to an element with an id of main -->
    <main id="main">
    	<section class="container">
    		<button id="trigger-modal">Open Modal</button>
    	</section>
    </main>

    <!-- place modal before the end of the body and pass in the reference ID of the button that triggers the modal -->
    <pearson-modal
    	buttonReferenceId="trigger-modal"
    	modalTitleText="Modal Title"
    	successButtonText="Success"
    	cancelButtonText="Cancel"
    	showFooter="true"
    >
		<p>Pass in elements as children to the modal</p>
		<input type="text" />
		<button class="pe-btn pe-btn__primary--btn_large">Click Me</button>
    </pearson-modal>



