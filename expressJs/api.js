const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
app.use(express.json());
const mongodb = require('mongodb');

app.get('/', async (req, resp)=>{
    let data =await dbConnect();
    data = await data.find().toArray();
    // console.log(data);
    resp.send(data);
})

app.post('/', async(req, resp)=>{
    // console.log(req.body);
    let data = await dbConnect();
    let result = await data.insertOne(req.body);

    resp.send(result);
})


app.put("/", async(req, resp)=>{
    let data = await dbConnect();
    let updatedData = await data.updateOne(
        {name : req.body.name}, 
        {$set:req.body}
    );
    
    // console.log(req.body);
    resp.send(updatedData);
})

// if u have to update name then do in this method - - -> also in change url of postman by http://localhost:5000/yourname , i.e kis parameter ko update krna h woh idar se kr sakte
// app.put("/:name", async (req, resp) => {
//   let data = await dbConnect();
//   let updatedData = await data.updateOne(
//     { name: req.params.name },
//     { $set: req.body }
//   );

//   // console.log(req.body);
//   resp.send(updatedData);
// });


app.delete("/:id",async (req,resp)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result =await data.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    });
    resp.send(result);
})
app.listen(5000);
