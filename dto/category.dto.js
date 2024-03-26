const getCategoryDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
};
const getCategoryAndSubCategoriesDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      subCategories: item.subCategories?.map((subItem) => ({
        name: subItem.name,
      })),
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
  getCategoryAndSubCategoriesDto,
  categoryDto,
};
