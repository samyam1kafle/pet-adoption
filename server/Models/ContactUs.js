const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: "0",
    },
});


const ContactUsModel = mongoose.model("contactus", ContactUsSchema);

module.exports = ContactUsModel;