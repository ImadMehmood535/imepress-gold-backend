const getProductsDto = (data) => {
  let count = 1;

  return data.map((item) => {
    return {
      no: count++,
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      brandId: item?.brandId,
      brand: item?.brand?.name,
      subCategoryId: item?.subCategoryId,
      subCategory: item?.subCategory?.name,
      categoryId: item?.subCategory?.categoryId,
      category: item?.subCategory?.Category?.name,
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
