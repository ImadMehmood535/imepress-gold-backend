const { Router } = require("express");
const router = Router();
const userRoutes = require("./users");
const adminRoutes = require("./admin");
const categoryRoutes = require("./category");
const productRoutes = require("./product");
const subCategoryRoutes = require("./subCategory");
const orderRoutes = require("./order")

router.use("/admin", adminRoutes);
router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/sub-category", subCategoryRoutes);
router.use("/product", productRoutes);
router.use("/order" , orderRoutes)

module.exports = router;
