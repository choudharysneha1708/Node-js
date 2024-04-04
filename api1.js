const http = require('http');
http.createServer((req, resp)=>{
    resp.writeHead(200, {'Content-Type':'application\json'});
    resp.write(JSON.stringify({ name: "Sneha", email: "iamsneha" }));
    resp.end();
}).listen(5000);
console.log("Hello");