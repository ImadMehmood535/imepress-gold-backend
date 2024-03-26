const getSubCategoriesDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      categoryName: item?.category?.name,
    };
  });
};

const subCategoryDto = (data) => {
  return {
    id: item.id,
    name: item.name,
    categoryName: item?.category?.name,
  };
};

module.exports = {
  getSubCategoriesDto,
  subCategoryDto,
};
