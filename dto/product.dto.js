const getProductsDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      subCategory: item?.subCategory?.name,
      subCategoryId: item?.subCategoryId,
    };
  });
};

const productDto = (data) => {
  return {
    id: data.id,
    name: data?.name,
    price: data?.price,
    description: data?.description,
    subCategory: data?.subCategory?.name,
  };
};

module.exports = {
  getProductsDto,
  productDto,
};
