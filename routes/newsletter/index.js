const { Router } = require("express");

const validateRequest = require("../../middlewares/validateRequestJoi.middleware");
const { registerSchema } = require("../../validations/newsletter");

const {
  registerNewsLetter,
  getNewsLetter,
} = require("../../controllers/newsletter/newsletter.controller");

const router = Router();

router.post("/", validateRequest(registerSchema), registerNewsLetter);

router.get("/", getNewsLetter);

module.exports = router;
