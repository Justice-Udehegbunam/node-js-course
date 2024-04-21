//this is for path relate

const path = require("path");

console.log(path.sep);
// this returns the seperator in between the two. "\"

const filePath = path.join("/content", "subfolder", "test.txt");

console.log(filePath);
// this returns all the parameters joined together to form a path "\content\subfolder\test.txt"

const base = path.basename(filePath);
console.log(base);
// this returns the base file in that file path like so "test.txt"

const absolute = path.resolve(__dirname, "content", "folder", "test.js");
console.log(absolute);
// this returns the full path from where the file is being set "C:\Users\ADMIN\Desktop\node-tutorial\built-in-modules\content\folder\test.js"

/* this is usefull when u are trying to figure out the path that the files are being hosted on different operating systems */
