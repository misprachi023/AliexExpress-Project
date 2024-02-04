const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
   
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

const RegisterModel = mongoose.model("register", registerSchema);

module.exports = Register