// const fs = require('fs');
// const process = require("process");
// const input = process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3], input[4]);
// }else if(input[2]='remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log('invalid input');    
// }
// console.log(process);

const fs = require("fs");
const process = require("process");
const input = process.argv;

if (input[2] === "add") {
  if (input[3] && input[4]) {
    // Check if both filename and content are provided
    fs.writeFileSync(input[3], input[4]);
  } else {
    console.log("Usage: node createAndDelete.js add <filename> <content>");
  }
} else if (input[2] === "remove") {
  if (input[3]) {
    // Check if filename is provided
    fs.unlinkSync(input[3]);
  } else {
    console.log("Usage: node createAndDelete.js remove <filename>");
  }
} else {
  console.log(
    "Invalid input. Usage: node createAndDelete.js <add/remove> <filename> <content (if add)>"
  );
}
