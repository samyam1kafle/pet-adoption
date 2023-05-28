const express = require("express");
const {
    getUsers,
    addUser,
    editUser,
    loginUser
} = require("../controllers/UserController");

const {
    getAnimals,
    addAnimal,
    showAnimal,
    editAnimal,
    deleteAnimal,
    searchFilterPets,
    adopt_pet,
    addToFavorate
} = require("../controllers/PetController");

const {
    addContactUs,
    getContactUs
} = require("../controllers/ContactUsController");

const {
    AdminLogin,
    AdminPets,
    AdminContact,
    Adminportal
} = require("../controllers/Admin/AdminController");

const route = express.Router();

//Frontend Endpoints
route.get('/admin', AdminLogin);
route.post('/admin-login', Adminportal);
route.get('/admin/pets', AdminPets);
route.get('/admin/contacts', AdminContact);


// Contact Us query
route.post("/contactus/add", addContactUs);
route.post("/contactus", getContactUs);


// Search Endpoint
route.get("/filter", searchFilterPets);


// Pets api

route.post("/animals/like", addToFavorate);
route.get("/animals", getAnimals);
route.post("/animals/add", addAnimal);
route.get("/animals/:id", showAnimal);
route.put("/animals/edit/:id", editAnimal);
route.put("/animals/adopt/:id", adopt_pet);
route.delete("/animals/delete/:id", deleteAnimal);

// user api
route.post("/login-user", loginUser);
route.get("/users", getUsers);
route.post("/user/add", addUser);
route.put("/user/edit/:id", editUser);

module.exports = route;