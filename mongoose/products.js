const { default: mongoose } = require("mongoose");

//for schema and model
const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    category : String
})
module.exports = mongoose.model('products', productSchema);