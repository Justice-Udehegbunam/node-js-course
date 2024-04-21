// Modules
// Every file is a module by default
// Module - is an Encapsulated code meaning only sharing what we want

// now to access them you need to require it
const names = require("./names");
const sayHiFunc = require("./module-utils");

// the one below is a newer version of the require syntax
const data = require("../module-lesson-two/altenative-flavour");
// console.log(names);

// sayHiFunc(names.john);
// sayHiFunc(names.peter);

console.log(data);
// when you import a module you actually invoke it ? especially executing it
