const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Request made..");
  console.log(req.url, req.method);
  let pageName = "";

  // Send html file
  switch (req.url) {
    case "/about":
      pageName = "./about.html";
      res.statusCode = 200;
      break;
    case "/":
      pageName = "./index.html";
      res.statusCode = 200;
      res.setHeader("location", "/home");
      break;
    default:
      pageName = "./404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(pageName, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listen for requesting on port 3000");
});
