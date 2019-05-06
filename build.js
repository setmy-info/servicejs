var fs = require('fs');
var uglify = require("uglify-js");

var sourceFileName = "servicejs.js";
var minifiedFileName = "servicejs.min.js";
var sourcePath = "./src/main/js/" + sourceFileName;
var minifiedPath = "./src/test/webapp/js/" + minifiedFileName;

var code = {
    sourceFileName: fs.readFileSync(sourcePath, "utf8")
};

var options = {
    output: {
        comments: /^!/
    }
};

fs.writeFileSync(minifiedPath, uglify.minify(code, options).code, "utf8");

fs.createReadStream(sourcePath).pipe(fs.createWriteStream("./dist/" + sourceFileName));
fs.createReadStream(minifiedPath).pipe(fs.createWriteStream("./dist/" + minifiedFileName));
