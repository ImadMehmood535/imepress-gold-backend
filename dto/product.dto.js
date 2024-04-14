const getProductsDto = (data) => {
  let count = 1;

  return data.map((item) => {
    return {
      no: count++,
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      shortDescription: item.shortDescription,
      brandId: item?.brandId,
      brand: item?.brand?.name,
      subCategoryId: item?.subCategoryId,
      subCategory: item?.subCategory?.name,
      categoryId: item?.subCategory?.categoryId,
      category: item?.subCategory?.Category?.name,
      imageUrl: item?.imageUrl,
      tags: {
        featured: item.isFeatured,
        sale: item?.isSale,
        new: item?.isNew,
      },
      discount: item?.discount,
      slug: item?.slug,
    };
  });
};

const productDto = (data) => {
  return {
    id: data.id,
    name: data?.name,
    price: data?.price,
    description: data?.description,
    shortDescription: data?.shortDescription,
    imageUrl: data?.imageUrl,
    isFeatured: data.isFeatured,
    isSale: data?.isSale,
    discount: data?.discount,
    slug: data?.slug,
    isNew: data?.isNew,
    categoryId: data?.subCategory?.categoryId,
    category: data?.subCategory?.Category?.name,
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
