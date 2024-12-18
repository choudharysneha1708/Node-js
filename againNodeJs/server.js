// function test(){
//     console.warn("Hello test function!");
// }
// test();
var http= require('http');
http.createServer(function (req, res) {
    res.write("hello from sneha!");
    res.end();
}).listen(5000);