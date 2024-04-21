const { readFileSync, writeFileSync } = require("fs");

// NOTE: this is is a synchronous method

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/2nd.txt", "utf8");

console.log(first, second);

// this helps u to create a file or update an existing file with content.
writeFileSync(
  "./content/result.txt",
  `here is the result of the read files ${first}, ${second}`,
  { flag: "a" }
);
// in this first write file sync method it needs two parameters to start the first parameter is the FILE PATH, the second is the content or logic u wantg to write in that file. WHILE  the third (though not neccessarily needed) is used to to tell node whether to allow appending to the file or not.

// console.log(newFile);
