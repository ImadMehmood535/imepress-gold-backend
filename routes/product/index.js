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
} = require("../../controllers/product/product.controller");
const router = Router();

router.post("/", validateRequest(registerSchema), registerProduct);
router.get("/", getProducts);
router.patch("/:id", validateRequest(updateSchema), updateProduct);
router.delete("/:id", validateRequest(deleteSchema), deleteProduct);

module.exports = router;
