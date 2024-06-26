const cloudinary = require("../configs/cloudinary");
const { okResponse, serverErrorResponse, badRequestResponse } = require("../constants/responses");
const { logger } = require("../configs/logger");

const uploadImage = async (req, res) => {
  const file = req.file;

  if (!file) {
    const response = badRequestResponse("No file uploaded");
    return res.status(response.status.code).json(response);
  }

  const b64 = Buffer.from(file.buffer).toString("base64");
  const dataURI = `data:${file.mimetype};base64,${b64}`;

  try {
    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
      folder: `imepress_gold/${file.fieldname}`,
      public_id: `${file.originalname.split(".")[0]}-${Date.now()}`,
    });

    const response = okResponse(result.url);
    return res.status(response.status.code).json(response);
  } catch (error) {
    logger.error(error);
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = uploadImage;
