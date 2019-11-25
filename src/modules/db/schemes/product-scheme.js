const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const productSchema = new Schema({
    sku: {
        type: String,
        default: Date.now()
    },
    name: {
        type: String,
        required: [true, "name field is required!"]
    },
    description: String,
    price: String,
    likes: { type: Number, default: 0 },
    currency: {
        type: String,
        default: "UAN"
    },
    categories: {
        type: Array,
        default: ["pizza"]
    }
});

productSchema.plugin(timestamp);

const ProductScheme = mongoose.model("ProductScheme", productSchema);

module.exports = ProductScheme;
