// const { default: mongoose } = require("mongoose");

const mongoose = require('mongoose');
let connect =  mongoose.connect("mongodb://localhost:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  Category: String,
});

const saveInDB = async ()=>{
    
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({
        name: "m 8",
        price:1000, 
        brand: "Samsung", 
        Category: "cameraPhone"
    });
    let result = await data.save();
    console.log(result);
}
saveInDB();

const updateInDB = async()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        {name: "m 8"},
        {
            $set: {price :700}
        }
    )
    console.log(data);
}
updateInDB();


const deleteInDb = async()=>{
    const Product = mongoose.model("products", productSchema);
    let data = await Product.deleteOne({
        name: 'm 8'
    });
    console.log(data);
}
deleteInDb();

const findINDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find();
  console.log(data);
};
findINDB();