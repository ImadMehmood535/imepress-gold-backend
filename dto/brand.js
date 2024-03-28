const getBrandDto = (data) => {
  console.log(data);
  return data.map((item) => {
    return {
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
