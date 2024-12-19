var http = require('http');
const { type } = require('os');
http.createServer(function(req, res){
  res.write("<h1>Hello Sneha!</h1>");
  res.end();
}).listen(4000);