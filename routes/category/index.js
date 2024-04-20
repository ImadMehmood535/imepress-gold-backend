const { Router } = require("express");

const validateRequest = require("../../middlewares/validateRequestJoi.middleware");

const {
  registerSchema,
  updateSchema,
  deleteSchema,
} = require("../../validations/category");
const {
  registerCateogry,
  getCategory,
  updateCategory,
  deleteCategory,
  categoriesAndSubCategories,
} = require("../../controllers/category/category.controller");
const verifyAuthentication = require("../../middlewares/auth.middleware");
const router = Router();

router.post(
  "/",
  verifyAuthentication,
  validateRequest(registerSchema),
  registerCateogry
);

router.get("/", getCategory);
router.get("/all", categoriesAndSubCategories);

router.patch(
  "/:id",
  verifyAuthentication,
  validateRequest(updateSchema),
  updateCategory
);

router.delete(
  "/:id",
  verifyAuthentication,
  validateRequest(deleteSchema),
  deleteCategory
);

module.exports = router;
