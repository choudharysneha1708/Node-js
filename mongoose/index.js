const express = require('express');
require('./config');
const product = require('./products');
const app = express ();
app.use(express.json()); // it convert data into json 

app.post("/create", async (req, resp)=>{
    let data = new product(req.body);
    let result =await data.save();
    console.log(result);
    resp.send(result);
});

app.get("/list", async(req, resp)=>{   // it will display all the data of your collection 

    let data = await product.find(); // if u want any specific type of data then write inside find 
    resp.send(data);
});
// app.get("/list", async (req, resp) => {
//   // it will display all the data of your collection

//   let data = await product.find({name: "Sneha"}); // if u want any specific type of data then write inside find
//   resp.send(data);
// });

app.delete ("/delete/:_id", async(req, resp)=>{
    //req.params = {id: whatever u send in parameter }
    let data = await product.deleteOne(req.params);
    resp.send(data);  
});



app.put("/update/:_id", async(req, resp)=>{
    let data = await product.updateOne(
        //{condtion} , {
            // $set updated data
        // }
        req.params,
        {
            $set: req.body
        }
    );
    resp.send(data);
});


app.listen(5100);
