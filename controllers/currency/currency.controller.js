const axios = require("axios");
const {
  serverErrorResponse,
  okResponse,
} = require("../../constants/responses");
const { dateRetrive } = require("../../utills/date");
const { currencyDto } = require("../../dto/currency.dto");

const getCurrencies = async (req, res) => {
  const { date } = req.params;
  const { code } = req.query;

  try {
    const formattedDate = dateRetrive(date);

    const currency = await axios.get(
      `https://${formattedDate}.currency-api.pages.dev/v1/currencies/aed.json`
    );

    const response = okResponse(
      currencyDto(currency.data.aed[code.toLowerCase()], code),
      "Successfully fetched currency"
    );

    return res.status(response.status.code).json(response);
  } catch (error) {
    console.log(error);
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = {
  getCurrencies,
};
