
## ServiceJS

This is independent (from other frameworks like: Angular, VueJS, React, etc) and simplest as possible dependencies injection for writing services layer for front end web based projects.

1. Build should build two files:
    a) servicesjs.js (not minified)
    b) servicesjs.min.js (minified)

2. And that one file should be usable in:
    a) web application, old way: <script src="servicesjs.js"></script>
        to hold development without dependencies - only editor and browser are needed to start development
    b) node applications adding as module
        to make development same way as in old browsers
    c) webpack, if possible.

3. serviceB injections should work as:
    var serviceA = {
        serviceB: null
    };

    or

    var serviceA = {
        inject: ['serviceB']
    };

4. Services should be usable without changes in browser and in node - hold similarity.
   No need to do context switching in mind and learn something else, when making development in web or node.

5. Base common services are going to another library: servedjs

### Why?

To separate logic code as much as possible from other frameworks - make code movable to any framework and independent from them.

It is very high possibility, that DI (current project or any other similar) can be used almost in any framework.

Also usable from legacy code - you can start move legacy code aside, into serivces or whatever you name them.

You can call code from any browser console, without installing any additional tools - no time waste (lean, agile).

### Setup

npm install

or

bower install

### Run server for examples

npm run start

or

npm start

### Run example program

npm run test

### Usage

    Import into html as:
    <script src="js/servicejs.min.js"></script>
    <script src="js/serviceA.js"></script>
    <script src="js/serviceB.js"></script>
    <script src="js/serviceC.js"></script>

### Example code

src/frontend/public/js/serviceA.js
src/frontend/public/js/serviceB.js
src/frontend/public/js/serviceC.js

src/frontend/public/js/example/logicService.js
src/frontend/public/js/example/personsService.js
src/frontend/public/js/example/queryService.js
src/frontend/public/js/example/rolesService.js

src/frontend/public/node/index.js
src/frontend/public/node/main.js

### Publishing npm

https://docs.npmjs.com/getting-started/publishing-npm-packages

### Release current project

    release.sh

### Github site

https://krabi.github.io/servicejs/

### NPM stie

https://www.npmjs.com/package/servicejs

### License

MIT
