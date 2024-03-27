const { Router } = require("express");
const verifyAuthentication = require("../../middlewares/Auth.middleware");
const {
  registerOrder,
  getOrders,
} = require("../../controllers/order/order.controller");
const validateRequest = require("../../middlewares/validateRequestJoi.middleware");
const { registerSchema } = require("../../validations/order");
const router = Router();

router.post(
  "/",
  verifyAuthentication,
  validateRequest(registerSchema),
  registerOrder
);
router.get("/", verifyAuthentication, getOrders);

module.exports = router;
