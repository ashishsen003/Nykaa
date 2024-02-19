const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    // id: { type: String, unique: true, sparse: true },
    name: { type: String, required: true, minlength: 1, maxlength: 50 },
    picture: { type: String, required: true },
    description: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    category: { type: String, enum: ['makeup', 'skincare', 'haircare'], required: true },
    price: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    userID: { type: String }
},{
    versionKey: false
})

const productModel = mongoose.model('product', productSchema)

module.exports={productModel}

// {
//     "name": "Car",
//     "picture": "https://i.pravatar.cc/300",
//     "description": "range cover car",
//     "gender": "male",
//     "category": "haircare",
//     "price": "5030000"
// }