// local
const secret = "SUPER SECRET";

// global
const john = "john";
const peter = "peter";

console.log(module);

/* when you console log the module you will see a list of things but what you are really interested   in  is this part "
  exports: {},
 which allows you to chose what you want to export globally from this module  

 so to export the names */

module.exports = { john, peter };
