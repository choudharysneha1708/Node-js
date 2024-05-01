const express = require('express');
require('../config');
const app = express();
const product = require('../products')
app.use(express.json());

app.get("/search/:key", async(req, resp)=>{
    let data = await product.find({
        "$or":[       // kisme kisme search krna h
            {"name": {$regex:req.params.key}},
            {"brand": {$regex: req.params.key}}
        ]
    });
    resp.send(data);
})


app.listen(5100);