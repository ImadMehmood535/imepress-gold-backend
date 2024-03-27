const { Router } = require("express");
const {
  registerUser,
  updateUserByAdmin,
  getUsers,
  deleteUser,
  updateUser,
  loginUser,
  changePassword,
} = require("../../controllers/users/users.controller");
const validateRequest = require("../../middlewares/validateRequestJoi.middleware");
const {
  registerUserSchema,
  updateUserSchema,
  deleteUserSchema,
  logInSchema,
  passwordChangeUserSchema,
  updateUserbyAdminSchema,
} = require("../../validations/user");
const verifyAuthentication = require("../../middlewares/Auth.middleware");
const router = Router();

router.post("/", validateRequest(registerUserSchema), registerUser);
router.get("/", verifyAuthentication, getUsers);
router.patch(
  "/",
  verifyAuthentication,
  validateRequest(updateUserbyAdminSchema),
  updateUserByAdmin
);

router.delete(
  "/",
  verifyAuthentication,
  validateRequest(deleteUserSchema),
  deleteUser
);

router.post("/login", validateRequest(logInSchema), loginUser);

router.patch(
  "/edit",
  verifyAuthentication,
  validateRequest(updateUserSchema),
  updateUser
);

router.patch(
  "/change-password",
  verifyAuthentication,
  validateRequest(passwordChangeUserSchema),
  changePassword
);

module.exports = router;
