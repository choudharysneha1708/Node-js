var http = require('http');
var uc = require('upper-case');
http.createServer(function(req, res){
    res.write(uc.upperCase("hello Sneha"));
    res.end();
}).listen(4000);