const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
  },

  productName: {
    type: String,
    required: true,
  },

  productInformation: {
    type: {
      simCard: String,
      screen: String,
      ram: String,
      internalMemory: String,
      camera: String,
      color: String,
    },
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
