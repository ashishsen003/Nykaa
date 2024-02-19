const mongoose = require('mongoose')
// const uuid = require('uuid');
// const { v4: uuidv4 } = require('uuid');

const userSchema = mongoose.Schema({
    // id: { type: String, unique: true, sparse: true },
    name: { type: String, required: true, minlength: 1, maxlength: 50 },
    avatar: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
},{
    versionKey: false
})

const userModel = mongoose.model('user', userSchema)

module.exports={userModel}

// {
//     "name": "Ashish",
//     "avatar": "https://i.pravatar.cc/300",
//     "email": "ashish@gmail.com",
//     "password": "ashish@321"
// }
