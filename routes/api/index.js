const router = require("express").Router();
const productRoutes = require("./products");

// Products routes
router.use("/products", productRoutes);

module.exports = router;