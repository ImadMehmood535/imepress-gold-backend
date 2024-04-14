const { Router } = require("express");
const router = Router();

const uploadMiddleware = require("../middlewares/multipart.middleware");
const uploadImage = require("../middlewares/uploadImage.middleware");
const userRoutes = require("./users");
const adminRoutes = require("./admin");
const categoryRoutes = require("./category");
const productRoutes = require("./product");
const subCategoryRoutes = require("./subCategory");
const orderRoutes = require("./order");
const brandRoutes = require("./brand");
const blogRoutes = require("./blog");
const newsLetterRoutes = require("./newsletter");

router.post("/upload", uploadMiddleware, uploadImage);
router.use("/admin", adminRoutes);
router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/sub-category", subCategoryRoutes);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);
router.use("/brand", brandRoutes);
router.use("/blog", blogRoutes);
router.use("/newsletter", newsLetterRoutes);

module.exports = router;
