const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    telephone: String,
    email: String,
    favoriteProducts: Array,
    viewedProducts: Array,
    orders: Array


});

userSchema.plugin(timestamp);

const userScheme = mongoose.model("ProductScheme", productSchema);

module.exports = userScheme;