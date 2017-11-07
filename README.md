### Congratulations!

You’ve been commissioned to build DoveBox: a user interface for our latest flock of doves. Our Space Captains will use DoveBox to control the doves (which are actually Earth-imaging satellites, not birds) in orbit. We’ve provided our advanced API and database to help you get started.

### Implement a React application that does the following:

* Displays a table of Doves on pageload, populated by the API
* Has a Search component to query the API for Doves based on their properties, and displays results in the above-mentioned table.
* Has a form to add new Doves to the database
* Add another feature that incorporates the API in some way.

### Guidelines

* You should use a flux-like architecture for managing state.
* You may import whatever React elements you wish.
* Have fun!

### Set-up instructions

Clone this repo and run `npm install` in the root directory to install our [JSON-server](https://github.com/typicode/json-server) npm package. (Note: you do not need to install JSON-server separately!) Run `npm start` to initialize the dummy API server. While it's running, you can access the API via `localhost:3000`. Navigating to that page in a browser will show the API spec.

To submit your app email us at: darcy@planet.com with a link to your repo. If you have questions or issues with the test, please let us know.

# DoveBox
React / Redux implementation of Planet's DoveBox

### Tasks

This DoveBox:
1. Displays a table of doves, retrieved from db.json and fetched on App mount.
2. Filters table by Dove properties using search component
3. Can add, edit and delete doves

### Running

To build, run the follow commands:
```javascript
npm install
npm run build
npm start
```
http://localhost:3000/


## Directories and Components

<pre><code><b><a style="color: black;" href="#">public</a></b> - public folder (index.html, css, db.json, bundle.js)
<b><a style="color: black;" href="#">src</a></b> - components and redux folder
<b><a href="#">index</a></b>
  <a href="#"  style="color: black;"><b>components</b></a>
  - <a href="#">App</a></a>
   - <a href="#">Header</a>
       - <a href="#">AddModal</a>
             - <a href="#">AddForm</a>
   - <a href="#">Main</a>
       - <a href="#">Search</a>
       - <a href="#">Dovelist</a>
             - <a href="#">DoveEntry</a>
  <a style="color: black;" href="#"><b>store</b></a>
   - <a href="#">store</a>
   - <a href="#">reducers</a>
</code></pre>


### Stack
* React - UI library
* Redux - state management
* Semantic UI - CSS Framework
* JSON-server - faux REST API
* Webpack - code bundler
