const express = require("express");
const {
    getUsers,
    addUser,
    editUser,
    deleteUser,
} = require("../controllers/UserController");

const {
    getAnimals,
    addAnimal,
    showAnimal,
    editAnimal,
    deleteAnimal,
    searchFilterPets
} = require("../controllers/PetController");

const {
    addContactUs
} = require("../controllers/ContactUsController");

const {
    AdminLogin
} = require("../controllers/Admin/AdminController");

const route = express.Router();

// Contact Us query
route.post("/contactus/add", addContactUs);


// Search Endpoint
route.get("/filter", searchFilterPets);


// Pets api
route.get("/animals", getAnimals);
route.post("/animals/add", addAnimal);
route.get("/animals/:id", showAnimal);
route.put("/animals/edit/:id", editAnimal);
route.delete("/animals/delete/:id", deleteAnimal);

// user api
route.get("/users", getUsers);
route.post("/user/add", addUser);
route.put("/user/edit/:id", editUser);
route.delete("/user/delete/:id", deleteUser);

module.exports = route;