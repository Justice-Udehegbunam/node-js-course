const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/2nd.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  } else {
    console.log(result);
    // NOTE: this is where u will put the functionality
  }

  const firstText = result;
  readFile("./content/2nd.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    } else {
      console.log(result);
    }

    const secondText = result;
    writeFile(
      "./content/result-async.txt",
      "hello i did this asynchronously with Node.js",
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err.message);
          return;
        } else {
          console.log("done");
        }
      }
    );
  });
});

console.log("Starting the next one");

// this is very useful because irhelps to prevent ur app from stopping whem ,ultiple users wants to access a particular functionality, BUT when it gey ugly is the amount of code you will need to chain as call backs just to be able to finish a single functionality asynchronously. So alternatives to this are "async await" and using "then" methods
