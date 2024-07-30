var http = require("http");

function startServer() {
  http
    .createServer(function (req, res) {
      res.writeHead(200, { "Content-Type": "text/html" });
      var htmlContent = "";

      res.write(htmlContent);
      res.end();
    })
    .listen(9000, () =>
      console.log("HTTP server running on http://localhost:9000")
    );
}

module.exports = { startServer };
