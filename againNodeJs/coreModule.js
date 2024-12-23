const { log } = require('console');
const fs = require('fs');
fs.writeFileSync('Hello.txt',"Hello SNeha");
console.log("-->", __dirname);
console.log("-->", __filename);
