const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequestJoi.middleware");
const {
  registerAdmin,
  updateAdmin,
  loginAdmin,
} = require("../../controllers/admin/admin.controller");
const {
  registerSchema,
  updateSchema,
  logInSchema,
} = require("../../validations/admin");
const verifyAuthentication = require("../../middlewares/Auth.middleware");
const router = Router();

router.post("/", validateRequest(registerSchema), registerAdmin);
router.patch(
  "/",
  verifyAuthentication,
  validateRequest(updateSchema),
  updateAdmin
);
router.post("/login", validateRequest(logInSchema), loginAdmin);

module.exports = router;
