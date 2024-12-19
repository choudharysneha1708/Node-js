var http = require('http');
var page = `
<h1>Hello Sneha </h1>
<input type ='text'/><br> <br>
<input type ='text'/><br> <br>
<input type ='text'/><br>`;
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':"text/html"})
    res.write(page);
    res.end();
}).listen(5000);