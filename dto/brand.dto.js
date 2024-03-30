const getBrandDto = (data) => {
  let count = 1;

  return data.map((item) => {
    return {
      no: count++,
      id: item.id,
      name: item.name,
      date: item.createdAt,
    };
  });
};

const brandDto = (data) => {
  return {
    id: data?.id,
    name: data?.name,
    date: data.createdAt,
  };
};

module.exports = {
  getBrandDto,
  brandDto,
};
