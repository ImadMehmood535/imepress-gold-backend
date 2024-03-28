const getSubCategoriesDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      date: item?.createdAt,
      categoryName: item?.Category?.name,
      categoryId: item?.categoryId,
    };
  });
};

const subCategoryDto = (data) => {
  return {
    id: data.id,
    name: data.name,
    date: data?.createdAt,
    categoryName: data?.Category?.name,
    categoryId: data?.categoryId,
  };
};

module.exports = {
  getSubCategoriesDto,
  subCategoryDto,
};
