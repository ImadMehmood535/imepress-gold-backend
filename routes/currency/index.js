const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequestJoi.middleware");
const { getSchema } = require("../../validations/currency");
const {
  getCurrencies,
} = require("../../controllers/currency/currency.controller");
const router = Router();

router.get("/:date", validateRequest(getSchema), getCurrencies);

module.exports = router;
