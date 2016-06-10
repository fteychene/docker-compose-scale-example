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

function callBackApp(callback) {
    http.get({
        host: 'mybackapp',
        path: '/',
        port: 3333
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            callback(body);
        });
    });

}

var server = http.createServer(function(req, res) {
  callBackApp(function (backHostname) {
    res.write('process id: ' + process.pid.toString());
    res.write('\n');
    res.write('ips: ' + addresses.join(', '));
    res.write('\n');
    res.write('hostname: ' + os.hostname());
    res.write('\n');
    res.write('back hostname: ' + backHostname);

    res.end();
  })
});

server.listen(PORT);


console.log('Running on port ' + PORT);
