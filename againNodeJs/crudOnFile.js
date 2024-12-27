const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CURD');
// Ensure the directory exists
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
const filePath = path.join(dirPath, "apple.txt");
// fs.writeFileSync(filePath,'This is a simple text file');
// fs.readFile(filePath, 'utf-8', (err, item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath, 'and file name is apple.txt', (err)=>{
//     if(!err)console.log("File is updated");
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
//     if(!err)console.log("File name is updated");
// })

fs.unlinkSync(`${dirPath}/fruit.txt`);