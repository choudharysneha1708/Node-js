const fs = require('fs');
console.log("Sub");
var a =20;
var b = 30;
var c = 40;
console.warn(a+b+c); 
for(i=0; i<10; ++i){
    console.log(i);
}
const arr = [2,1,3,5,6,7,88];
console.log(arr);
const app = require('./app');
console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());
fs.writeFileSync("hello.txt", "code step by step");