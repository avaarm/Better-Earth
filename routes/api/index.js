const router = require("express").Router();
const categoryRoutes = require("./categories");

// Category routes
router.use("/categories", categoryRoutes);

module.exports = router;
