var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
   fs.readFile('readFile.html', function(error, data){
     res.writeHead(200, { "content-type": "text/html" });
     res.write(data);
     return res.end();
   })
}).listen(4000);