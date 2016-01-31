var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');

var server = http.createServer(function (request, response) {
  var uri = url.parse(request.url).pathname,
      filename = path.join(process.cwd(), uri);

  console.log('uri:' + uri);
  console.log('filename:' + filename);

  fs.readFile(filename, 'binary', function(err, file) {
    if (err) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(err + '\n');
      response.end();
      return;
    }

    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.write(file, "binary");
    response.end();
  });
});

server.listen(3000);
