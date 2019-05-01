var fs = require('fs');
var uglify = require("uglify-js");


var code = {
    "servicejs.js": fs.readFileSync("./src/frontend/public/js/servicejs.js", "utf8")
};

var options = {
    output: {
        comments: /^!/
    }
};

fs.writeFileSync("./src/frontend/public/js/servicejs.min.js", uglify.minify(code, options).code, "utf8");

fs.createReadStream("./src/frontend/public/js/servicejs.js").pipe(fs.createWriteStream("./dist/servicejs.js"));
fs.createReadStream("./src/frontend/public/js/servicejs.min.js").pipe(fs.createWriteStream("./dist/servicejs.min.js"));
