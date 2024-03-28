const getCategoryDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      date: item?.createdAt,
    };
  });
};
const getCategoryAndSubCategoriesDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      date: item?.createdAt,
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
    date: data?.createdAt,
  };
};

module.exports = {
  getCategoryDto,
  getCategoryAndSubCategoriesDto,
  categoryDto,
};
