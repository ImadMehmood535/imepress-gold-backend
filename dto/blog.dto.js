const { getFormattedDate } = require("../utills/date");

const getBlogDto = (data) => {
  let count = 1;
  return data.map((item) => {
    return {
      id: item.id,
      no: count++,
      name: item.name,
      slug: item.slug,
      imageUrl: item?.imageUrl,
      description: item?.description,
      shortDescription: item?.short_description,
      date: getFormattedDate(item?.createdAt),
    };
  });
};

const blogDto = (data) => {
  return {
    id: data.id,
    name: data.name,
    imageUrl: data?.imageUrl,
    slug: data.slug,
    description: data?.description,
    shortDescription: data?.short_description,
    date: getFormattedDate(data?.createdAt),
  };
};

module.exports = {
  getBlogDto,
  blogDto,
};
