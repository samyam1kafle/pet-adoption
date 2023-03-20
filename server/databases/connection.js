const mongoose = require("mongoose");

const dbConnection = async() => {
    try {
        mongoose.set("strictQuery", false);
        // await mongoose.connect("mongodb://localhost:27017/pet-adoption");
        await mongoose.connect("mongodb://127.0.0.1:27017/pet-adoption?directConnection=true&appName=mongosh+1.7.1")
        console.log("Database connection successfull !");
    } catch (error) {
        console.log(error);
    }
};

dbConnection();