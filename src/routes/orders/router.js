const express = require("express");
const createOrder = require("./create-orders");

const orderRouter = express.Router();

orderRouter.post("/", createOrder);

module.exports = orderRouter;