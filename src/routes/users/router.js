const express = require("express");
const updateUser = require("./update-user");
const saveUser = require("./create-user");
const getUser = require("./get-user");
const getAllUsers = require("./getAllUsers");
const deleteUser = require("./delete-user");
const usersRouter = express.Router();

usersRouter
    .get("/", getAllUsers)
    .get("/:id", getUser)
    .post("/", saveUser)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser);

module.exports = usersRouter;