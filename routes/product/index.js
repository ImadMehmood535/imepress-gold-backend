const { Router } = require("express");

const validateRequest = require("../../middlewares/validateRequestJoi.middleware");
const {
  registerSchema,
  updateSchema,
  deleteSchema,
} = require("../../validations/product");
const {
  registerProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getProductsQuery,
  getProductsByCategory,
} = require("../../controllers/product/product.controller");
const verifyAuthentication = require("../../middlewares/auth.middleware");
const router = Router();

router.post(
  "/",
  verifyAuthentication,
  validateRequest(registerSchema),
  registerProduct
);
router.get("/query", getProductsQuery);
router.get("/", getProducts);
router.get("/by-category" , getProductsByCategory)
router.get("/:slug", getSingleProduct);
router.patch(
  "/:id",
  verifyAuthentication,
  validateRequest(updateSchema),
  updateProduct
);
router.delete(
  "/:id",
  verifyAuthentication,
  validateRequest(deleteSchema),
  deleteProduct
);

module.exports = router;
