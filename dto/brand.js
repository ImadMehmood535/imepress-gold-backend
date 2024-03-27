const getBrandDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
};

const brandDto = (data) => {
  return {
    id: data?.id,
    name: data?.name,
  };
};

module.exports = {
  getBrandDto,
  brandDto,
};
