const currencyDto = (price, code) => {
  return {
    currencyValue: price,
    countryCode: code,
  };
};

module.exports = { currencyDto };
