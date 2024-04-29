const dbConnect = require('./mongodb')
const insertData = async ()=>{
    let data = await dbConnect();
    let result = await data.insert(
        
    )
}