const multer = require("multer");
const {
  badRequestResponse,
  serverErrorResponse,
} = require("../constants/responses");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, PNG, and JPEG files are allowed"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
}).single("image");

const uploadMiddleware = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      const response = badRequestResponse(err.message);
      return res.status(response.status.code).json(response);
    } else if (err) {
      const response = serverErrorResponse(err.message);
      return res.status(response.status.code).json(response);
    }
    next();
  });
};

module.exports = uploadMiddleware;
