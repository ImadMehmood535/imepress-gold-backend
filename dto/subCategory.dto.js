const getSubCategoriesDto = (data) => {
  let count = 1;

  return data.map((item) => {
    return {
      id: item.id,
      no: count++,
      name: item.name,
      date: item?.createdAt,
      categoryName: item?.Category?.name,
      categoryId: item?.categoryId,
    };
  });
};

const subCategoryDto = (data) => {
  let count = 1;

  return {
    id: data.id,
    no: count++,
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
