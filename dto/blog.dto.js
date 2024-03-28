const getBlogDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      imageUrl: item?.imageUrl,
      description: item?.description,
      date: item?.createdAt,
    };
  });
};

const blogDto = (data) => {
  return {
    id: data.id,
    name: data.name,
    imageUrl: data?.imageUrl,
    description: data?.description,
    date: data?.createdAt,
  };
};

module.exports = {
  getBlogDto,
  blogDto,
};
