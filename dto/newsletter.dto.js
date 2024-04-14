const getNewsLetterDto = (data) => {
  let count = 1;
  return data.map((item) => {
    return {
      no: count++,
      id: item.id,
      email: item.email,
    };
  });
};

const newsLetterDto = (data) => {
  return {
    id: data?.id,
    email: data.email,
  };
};

module.exports = {
  getNewsLetterDto,
  newsLetterDto,
};
