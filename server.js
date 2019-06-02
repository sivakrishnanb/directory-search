var fs = require("fs"),
  http = require("http"),
  directorySearch = require("./lib").default;

http
  .createServer(function(req, res) {
    var url = req.url;
    if (url === "/search-todo") {
      res.writeHead(200, { "Content-Type": "text/html" });
      directorySearch("TODO", "sample-folder")
        .then(results => res.end(results.join("\n")))
        .catch(err => res.end(JSON.stringify(err)));
    } else if (url === "/" || url === "/index.html") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fs.readFileSync(__dirname + "/index.html"));
    } else {
      res.writeHead(404, { "Content-Type": "text/json" });
      res.end();
    }
  })
  .listen(3000, function() {
    console.log("server start at port 3000");
  });
