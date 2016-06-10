var http = require('http');
var os = require('os');

var PORT = 3333;

var server = http.createServer(function(req, res) {
  res.write(os.hostname());
  res.end();
});

server.listen(PORT);


console.log('Running on port ' + PORT);
