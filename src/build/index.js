const fs = require('fs');
const uglify = require("uglify-js");

const projectName = "servicejs";
const sourceFileName = projectName + ".js";
const minifiedFileName = projectName + ".min.js";
const indexFileName = "index.js";
const sourcesLocation = "./src/main/webapp/js/";
const sourcePath = sourcesLocation + sourceFileName;
const minifiedPath = sourcesLocation + minifiedFileName;
const indexPath = sourcesLocation + indexFileName;
const distPath = "./dist/";
const distFilePath = distPath + sourceFileName;
const distMinifiedFilePath = distPath + minifiedFileName;
const distIndexFilePath = distPath + indexFileName;

let code = {
    "servicejs.js": fs.readFileSync(sourcePath, "utf8")
};

let options = {
    output: {
        comments: /^!/
    }
};

// Make minification, next to unminified project source file
fs.writeFileSync(minifiedPath, uglify.minify(code, options).code, "utf8");

// Copy to dist 
fs.createReadStream(sourcePath).pipe(fs.createWriteStream(distFilePath));
fs.createReadStream(minifiedPath).pipe(fs.createWriteStream(distMinifiedFilePath));
fs.createReadStream(indexPath).pipe(fs.createWriteStream(distIndexFilePath));
