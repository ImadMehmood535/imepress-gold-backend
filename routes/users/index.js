const { Router } = require("express");
const {
  registerUser,
  updateUserByAdmin,
  getUsers,
  deleteUser,
  updateUser,
  loginUser,
} = require("../../controllers/users/users.controller");
const validateRequest = require("../../middlewares/validateRequestJoi.middleware");
const {
  registerUserSchema,
  updateUserSchema,
  deleteUserSchema,
  logInSchema,
} = require("../../validations/user");
const verifyAuthentication = require("../../middlewares/Auth.middleware");
const router = Router();

router.post("/", validateRequest(registerUserSchema), registerUser);
router.get("/", verifyAuthentication, getUsers);
router.patch(
  "/",
  verifyAuthentication,
  validateRequest(updateUserSchema),
  updateUserByAdmin
);

router.delete(
  "/",
  verifyAuthentication,
  validateRequest(deleteUserSchema),
  deleteUser
);
router.patch(
  "/edit",
  verifyAuthentication,
  validateRequest(updateUserSchema),
  updateUser
);
router.post(
  "/login",
  verifyAuthentication,
  validateRequest(logInSchema),
  loginUser
);

module.exports = router;
