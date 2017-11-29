var fs = require('fs');
var uglify = require("uglify-js");

let options = {
    mangle: {
        properties: true
    }
};

fs.writeFileSync("dist/servicejs.min.js", uglify.minify({
    "servicejs.js": fs.readFileSync("src/main/webapp/js/servicejs.js", "utf8")
}, options).code, "utf8");

fs.copyFile('src/main/webapp/js/servicejs.js', 'dist/servicejs.js', (err) => {
    if (err) {
        throw err;
    }
});
