const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const { reqLogger } = require("./configs/logger");
const errorHandlerMiddleware = require("./middlewares/errorHandler.middleware");
const app = express();
app.post(bodyParser.raw({ type: "application/json" }));

app.use(cookieParser());
const routes = require("./routes");
app.use(express.json({ limit: "100mb" }));
app.use(helmet());
app.use(cors());
app.use(reqLogger);
app.use("/api", routes);
app.use(errorHandlerMiddleware);

module.exports = app;
