const { Router } = require("express");

const validateRequest = require("../../middlewares/validateRequestJoi.middleware");

const {
  registerSchema,
  updateSchema,
  deleteSchema,
} = require("../../validations/subCategory");
const {
  registerSubCategory,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../../controllers/subCategory/subCategory.controller");
const router = Router();

router.post("/", validateRequest(registerSchema), registerSubCategory);
router.get("/", getSubCategory);
router.patch("/:id", validateRequest(updateSchema), updateSubCategory);
router.delete("/:id", validateRequest(deleteSchema), deleteSubCategory);

module.exports = router;
