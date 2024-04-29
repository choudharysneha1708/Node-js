// const { default: mongoose } = require("mongoose");

const mongoose = require('mongoose');
const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number
    });
    const productModel = mongoose.model('product', productSchema);
    let data = new productModel({name: "m 8", price:1000});
    let result = await data.save();
    console.log(result);
}
main()