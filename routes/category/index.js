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
} = require("../../controllers/category/category.controller");
const router = Router();

router.post("/", validateRequest(registerSchema), registerCateogry);
router.get("/", getCategory);
router.patch("/:id", validateRequest(updateSchema), updateCategory);
router.delete("/:id", validateRequest(deleteSchema), deleteCategory);

module.exports = router;
