var http = require('http');
var os = require('os');

var PORT = 3333;

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
  for (var k2 in interfaces[k]) {
    var address = interfaces[k][k2];
    if (address.family === 'IPv4' && !address.internal) {
      addresses.push(address.address);
    }
  }
}

var server = http.createServer(function(req, res) {
  res.write('process id: ' + process.pid.toString());
  res.write('\n');
  res.write('ips: ' + addresses.join(', '));
  res.write('\n');
  res.write('hostname: ' + os.hostname());

  res.end();
});

server.listen(PORT);


console.log('Running on port ' + PORT);
