const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://localhost:27017/pet_adoption");
    console.log("Database connection successfull !");
  } catch (error) {
    console.log(error);
  }
};

dbConnection();
