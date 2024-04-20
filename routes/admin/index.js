const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequestJoi.middleware");
const {
  registerAdmin,
  updateAdmin,
  loginAdmin,
  changePassword,
} = require("../../controllers/admin/admin.controller");
const {
  registerSchema,
  updateSchema,
  logInSchema,
  passwordChangeUserSchema,
} = require("../../validations/admin");
const verifyAuthentication = require("../../middlewares/auth.middleware");
const router = Router();

router.post("/", validateRequest(registerSchema), registerAdmin);
router.patch(
  "/",
  verifyAuthentication,
  validateRequest(updateSchema),
  updateAdmin
);
router.post("/login", validateRequest(logInSchema), loginAdmin);
router.patch(
  "/change-password",
  verifyAuthentication,
  validateRequest(passwordChangeUserSchema),
  changePassword
);

module.exports = router;
