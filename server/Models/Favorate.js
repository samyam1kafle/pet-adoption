const mongoose = require("mongoose");

const FavorateSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    pet_id: {
        type: String,
        required: true,
    },
});


const FavorateModel = mongoose.model("favorate", FavorateSchema);

module.exports = FavorateModel;