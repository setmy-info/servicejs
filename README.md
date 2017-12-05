## ServiceJS

This is independent (from other frameworks like: Angular, VueJS, React, etc) and simplest as possible dependencies injection for writing services layer for front end web based projects.

### Why?

To separate logic code as much as possible from other frameworks - make code movable to any framework and independent from them.

It is very high possibility, that DI (current project or any other similar) can be used almost in any framework.

Also usable from legacy code - you can start move legacy code aside, into serivces or whatever you name them.

You can call code from any browser console, without installing any additional tools - no time waste (lean, agile).

### Setup

npm install

npm run start

or

npm start

or

mvn jetty:run

http://localhost:3000/

### Unit testing

npm run unit

### Run example program

npm run program

### Example code

src/main/webapp/js/serviceA.js
src/main/webapp/js/serviceB.js
src/main/webapp/js/serviceC.js
src/main/webapp/js/finalize.js

### Publishing npm

https://docs.npmjs.com/getting-started/publishing-npm-packages

### Bower registration

nano bower.json

https://bower.io/docs/creating-packages/

bower register servicejs https://github.com/Krabi/servicejs.git

### Release

git tag -a version-X.Y.Z -m "version-X.Y.Z" && git push origin version-X.Y.Z && npm publish
