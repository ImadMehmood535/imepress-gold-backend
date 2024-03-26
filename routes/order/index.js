const { Router } = require("express");

const {
  registerProduct,
  getProducts,
} = require("../../controllers/product/product.controller");
const verifyAuthentication = require("../../middlewares/Auth.middleware");
const router = Router();

router.post("/", verifyAuthentication, registerProduct);
router.get("/", verifyAuthentication, getProducts);

module.exports = router;
