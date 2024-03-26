const getSubCategoriesDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      categoryName: item?.Category?.name,
    };
  });
};

const subCategoryDto = (data) => {
  return {
    id: data.id,
    name: data.name,
    categoryName: data?.Category?.name,
  };
};

module.exports = {
  getSubCategoriesDto,
  subCategoryDto,
};
