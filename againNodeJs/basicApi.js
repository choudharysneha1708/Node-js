const http = require('http');
const data = require('./data');
http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'appplication\json'});
    res.write(data);
    res.end();
}).listen(5000);