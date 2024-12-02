var express = require("express");
const Products = require("../models/products");

var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  Products.find()
    .then((doc) => {
      // to push 3 in one array [ [{},{},{}] , [{},{},{}] , [{},{},{}] ]
      let productGrid = [];
      let colGrid = 3;
      for (let i = 0; i < doc.length; i += colGrid) {
        productGrid.push(doc.slice(i, i + colGrid));
      }
      // console.log(productGrid);
      res.render("index", { title: "Shopping-cart", products: productGrid });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
