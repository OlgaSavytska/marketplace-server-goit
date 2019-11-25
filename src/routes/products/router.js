const express = require("express");
const createProduct = require("./create-product");
const deleteProduct = require("./delete-product");
const getProduct = require("./get-product-byid");
const getAllProducts = require("./get-all-product");
const updateProduct = require("./update-product");
const productsRouter = express.Router();

productsRouter
    .get("/:id", getProduct)
    .get("/", getAllProducts)
    .put("/:id", updateProduct)
    .post("/", createProduct)
    .delete("/:id", deleteProduct);

module.exports = productsRouter;
