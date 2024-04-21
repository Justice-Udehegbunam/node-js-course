const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    // response.write("Welcome to Http lesson"); note this is very useful but not for this simple case
    // this prints the message to the home page
    response.end("Welcome to Http lesson");
    // this ".end()" allows the final piece of data to be written to the writable before the response can finally end
  } else if (request.url === "/about") {
    response.end("Ur in the about page");
  } else if (request.url === "/contact") {
    response.end("Ur in the contact page");
  } else {
    response.end(`<h1>Sorry!!, we dont have this page </h1> 
  <a href="/">Go home</a>`);
  }
});

server.listen(5000);

//NOTE:  This starts up a server that has a link "http://localhost:5000" and then it doent end the code in the senset hat node doesnt actually exit our code it keeps it running because u dont want ur server to be down right ?

/* NOTE: this is only a base http module  */
