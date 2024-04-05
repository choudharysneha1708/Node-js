const fs = require('fs')  // tp import file system module
const path = require('path')   // import path module
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;
// to write file
fs.writeFileSync(filePath,"This is my file");

// to read file
fs.readFile(filePath , 'utf8',(err, item)=>{
    console.log(item);
});

//to update file
fs.appendFile(filePath, 'and file name is apple.txt', (err)=>{
    if(!err)console.log("file is updated");
})


//to rename file 
const newname = `${dirPath}/s.txt`
fs.rename(filePath, newname);


// to delete file
fs.unlinkSync(filePath);