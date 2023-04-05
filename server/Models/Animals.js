const mongoose = require("mongoose");

const AnimalsSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    breed: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    pet_owner_id: {
        type: String,
        required: true,
    },
    adopted_owner_id: {
        type: String
    },
    is_adopted: {
        type: Boolean,
        default: "0",
    },
    is_neutered: {
        type: Boolean,
        default: false
    },
    own_pet: {
        type: Boolean,
        default: false
    },
    withhold_date: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        default: "1",
    },
});


const AnimalsModel = mongoose.model("animals", AnimalsSchema);

module.exports = AnimalsModel;