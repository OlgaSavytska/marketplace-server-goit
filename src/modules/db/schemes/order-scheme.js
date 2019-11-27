const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const orderSchema = new Schema({
    sku: {
        type: String,
        default: Date.now()
    },
    creator: Number,
    productList: {
        product: Number,
        type: String,
        itemsCount: Number
    },
    deliveryType: String,
    deliveryAdress: String,
    sumToPay: String,
    status: String,

});

orderSchema.plugin(timestamp);

const orderScheme = mongoose.model("ProductScheme", productSchema);

module.exports = orderScheme;