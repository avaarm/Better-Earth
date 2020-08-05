const router = require("express").Router();
const db = require("../models");


router.get("/products", (req, res) => {
  db.Product.findAll({}).then(products => res.json(products))
    .catch(err => res.status(422).end());
});

 //GET route for retrieving all products based on category?




module.exports = router;