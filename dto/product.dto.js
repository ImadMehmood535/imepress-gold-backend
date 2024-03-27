const getProductsDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      subCategoryId: item?.subCategoryId,
      brandId: item?.brandId,
      brand: item?.brand?.name,
      subCategory: item?.subCategory?.name,
      imageUrl: item?.imageUrl,
    };
  });
};

const productDto = (data) => {
  return {
    id: data.id,
    name: data?.name,
    price: data?.price,
    description: data?.description,
    imageUrl: data?.imageUrl,
    subCategoryId: data?.subCategoryId,
    brandId: data?.brandId,
    brand: data?.brand?.name,
    subCategory: data?.subCategory?.name,
  };
};

module.exports = {
  getProductsDto,
  productDto,
};
