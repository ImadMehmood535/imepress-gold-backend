const getCategoryDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
};

const categoryDto = (data) => {
  return {
    id: data?.id,
    name: data?.name,
  };
};

module.exports = {
  getCategoryDto,
  categoryDto,
};
