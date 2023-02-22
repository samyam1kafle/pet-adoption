const express = require("express");
const {
  getUsers,
  addUser,
  editUser,
  deleteUser,
} = require("../controllers/UserController");

const route = express.Router();

// user api
route.get("/users", getUsers);
route.post("/user/add", addUser);
route.put("/user/edit/:id", editUser);
route.delete("/user/delete/:id", deleteUser);

module.exports = route;
