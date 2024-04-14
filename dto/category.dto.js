const getCategoryDto = (data) => {
  let count = 1;
  return data.map((item) => {
    return {
      no: count++,
      id: item.id,
      name: item.name,
      imageUrl: item?.imageUrl,
      date: item?.createdAt,
      subCategoriesQuanitity: item?._count.subCategories,
    };
  });
};
const getCategoryAndSubCategoriesDto = (data) => {
  let count = 1;

  return data.map((item) => {
    return {
      id: item.id,
      no: count++,
      name: item.name,
      date: item?.createdAt,
      imageUrl: item?.imageUrl,
      subCategories: item.subCategories?.map((subItem) => ({
        name: subItem.name,
        id: subItem.id,
      })),
      subCategoriesQuanitity: item?.subCategories.length,
    };
  });
};

const categoryDto = (data) => {
  return {
    id: data?.id,
    imageUrl: data?.imageUrl,
    name: data?.name,
    date: data?.createdAt,
  };
};

module.exports = {
  getCategoryDto,
  getCategoryAndSubCategoriesDto,
  categoryDto,
};
