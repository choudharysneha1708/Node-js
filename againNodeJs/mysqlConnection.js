var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"connection"
});
con.connect(function(error){
    if(error){
       console.warn(error);       
    }else{
        console.log(connected);
    }
})