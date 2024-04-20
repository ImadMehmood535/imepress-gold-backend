const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequestJoi.middleware");

const verifyAuthentication = require("../../middlewares/auth.middleware");
const {
  registerSchema,
  updateSchema,
  deleteSchema,
} = require("../../validations/brand");
const {
  registerBrand,
  getBrand,
  updateBrand,
  deleteBrand,
} = require("../../controllers/brand/brand.controller");
const router = Router();

router.post(
  "/",
  verifyAuthentication,
  validateRequest(registerSchema),
  registerBrand
);

router.get("/", getBrand);

router.patch(
  "/:id",
  verifyAuthentication,
  validateRequest(updateSchema),
  updateBrand
);

router.delete(
  "/:id",
  verifyAuthentication,
  validateRequest(deleteSchema),
  deleteBrand
);

module.exports = router;
