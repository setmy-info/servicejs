## ServiceJS

This is independent (from other frameworks like: Angular, VueJS, React, etc) and simplest as possible dependencies injection for writing services layer for front end web based projects.

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

or

mvn jetty:run

http://localhost:3000/

### Unit testing

npm run unit

### Run example program

npm run program

### Usage

    Take a look:
    <script src="js/servicejs.min.js"></script>
    <script src="js/serviceA.js"></script>
    <script src="js/serviceB.js"></script>
    <script src="js/serviceC.js"></script>

### Example code

src/main/webapp/js/serviceA.js
src/main/webapp/js/serviceB.js
src/main/webapp/js/serviceC.js

### Publishing npm

https://docs.npmjs.com/getting-started/publishing-npm-packages

### Bower registration

nano bower.json

https://bower.io/docs/creating-packages/

bower register servicejs https://github.com/Krabi/servicejs.git

### Release current project

Simply:

    release.sh
or

git checkout develop

Remove -SNAPSHOT from pom.xml, package.json and release.sh and commit change

git add pom.xml package.json release.sh

git commit -m 'version-X.Y.Z'

git push

git checkout master

git merge develop

git tag -a version-X.Y.Z -m "version-X.Y.Z" && git push origin version-X.Y.Z && git push && npm publish

### Github site

https://krabi.github.io/servicejs/

### NPM stie

https://www.npmjs.com/package/servicejs

### License

MIT
