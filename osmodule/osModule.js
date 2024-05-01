// we use os module only in those project where we want get some information about os 
//like in the project where we want to apply different function on different type of
// operating system. 
const os = require ('os');
// os.arch() ==> gives architecture of our os

// os.freemem() ==> give how much ram of our system is free.
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem() / (1024 * 1024 * 1024));
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());