const path = require("path");

console.log(path.sep);

const filename = path.join("/content", "subfolder", "text.txt");

console.log(filename);

const base = path.basename(filename);

console.log(base);

const absolute = path.resolve(__filename);

console.log(absolute);
