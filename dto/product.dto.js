const getProductsDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      desciption: item.desciption,
      subCategory: item?.subCategory.name,
    };
  });
};

const productDto = (data) => {
  return {
    id: data.id,
    name: data.name,
    price: data.price,
    desciption: data.desciption,
    subCategory: data?.subCategory.name,
  };
};

module.exports = {
  getProductsDto,
  productDto,
};
