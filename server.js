var fs = require("fs"),
  http = require("http"),
  directorySearch = require("./lib").default;

http
  .createServer(function(req, res) {
    var url = req.url;
    if (url === "/search-todo") {
      res.setHeader("Content-Type", "application/json");
      directorySearch("TODO", "sample-folder")
        .then(results => res.end(JSON.stringify({ results })))
        .catch(err => res.end(JSON.stringify(err)));
    } else if (url === "/" || url === "/index.html") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fs.readFileSync(__dirname + "/index.html"));
    } else {
      res.writeHead(404, { "Content-Type": "text/json" });
      res.end(JSON.stringify({error: "Requested resource not found"}));
    }
  })
  .listen(3000, function() {
    console.log("server start at port 3000");
  });
