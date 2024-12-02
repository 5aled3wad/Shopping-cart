// test for DB

const { default: mongoose } = require("mongoose");
const Products = require("../models/products");

mongoose
  .connect("mongodb://localhost:27017/Shopping_cart")
  .then(() => {
    console.log("Connecting DB Successfully");
  })
  .catch(() => {
    console.log("Failed connect");
  });

const products = [
  new Products({
    imagePath: "/images/12F.jpg",
    productName: "Oppo Reno 12F",
    productInformation: {
      simCard: "Dual SIM",
      screen: "6.67 inches, 1080 x 2400 pixels",
      ram: "12GB",
      internalMemory: "256GB",
      camera: "Triple: 50 MP+ 8 MP + 2 MP",
      color: "Green",
    },

    price: "13,999",
  }),
  new Products({
    imagePath: "/images/S24.jpg",
    productName: "Samsung Galaxy S24 Ultra",
    productInformation: {
      simCard: "Dual SIM",
      screen: "6.8 inches, 1440 x 3120 pixels",
      ram: "12GB",
      internalMemory: "256GB",
      camera: "Quad: 200 MP + 50 MP + 10 MP + 12 MP",
      color: "Gray Titanium",
    },

    price: "49,999",
  }),
  new Products({
    imagePath: "/images/15plus.jpg",
    productName: "Apple iPhone 15 plus ",
    productInformation: {
      simCard: " Single SIM (Nano-SIM)",
      screen: " 6.7 inches, 1290 x 2796 pixels",
      ram: "6GB",
      internalMemory: "512GB",
      camera: "Dual: 48 MP + 12 MP",
      color: "Black",
    },

    price: "59,999",
  }),
  new Products({
    imagePath: "/images/v40.jpg",
    productName: "Vivo V40 Lite",
    productInformation: {
      simCard: "Hybrid Dual SIM (Nano-SIM, dual stand-by)",
      screen: "6.67 inches, 120Hz",
      ram: "8GB",
      internalMemory: "256GB",
      camera: "Dual: 50 MP + 8 MP",
      color: " Green",
    },

    price: "10,990",
  }),
  new Products({
    imagePath: "/images/nova12.jpg",
    productName: "Huawei Nova 12 SE",
    productInformation: {
      simCard: " Dual SIM (Nano-SIM, dual stand-by)",
      screen: "6.67 inches, 1080 x 2400 pixels",
      ram: "8GB",
      internalMemory: "256GB",
      camera: "Triple: 108 MP + 8 MP + 2 MP",
      color: "Black",
    },

    price: "13,999",
  }),
  new Products({
    imagePath: "/images/inf9.jpg",
    productName: "Infinix Smart 9",
    productInformation: {
      simCard: " Single SIM (Nano-SIM)",
      screen: "6.7 inches, 720 x 1600 pixels",
      ram: "4GB",
      internalMemory: "128GB",
      camera: "13MP",
      color: "Titanium",
    },

    price: "4,999",
  }),
];

let done = 0;
for (let i = 0; i < products.length; i++) {
  products[i]
    .save()
    .then(() => {
      console.log(products[i]);
      done++;
      if (done == products.length) {
        mongoose.disconnect();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
