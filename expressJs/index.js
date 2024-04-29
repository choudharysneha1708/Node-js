const dbConnect = require('./mongodb')
// dbConnect().then((resp)=>{
//     resp.find({name:'Iphone 15' }).toArray().then((data)=>{
//         console.log(data);
//     })
// })
// console.log(dbConnect());
// app.use(express.static(publicPath)); 
// console.log(publicPath);
// app.listen(5000);
const main = async ()=>{
    // console.log("main function called");
    let data = await dbConnect();
    data =await data.find().toArray();
    console.warn(data);
}
main();