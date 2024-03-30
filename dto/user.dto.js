const getUserDto = (data) => {
  let count = 1;
  return data.map((item) => {
    return {
      id: item.id,
      no: count++,
      name: item?.firstName + " " + item?.lastName,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      phoneNumber: item.phoneNumber,
      gender: item.gender,
      date: item.createdAt,
      imageUrl: item?.imageUrl,
      isBlocked: item?.isBlocked,
    };
  });
};

const userDto = (data) => {
  let count = 1;

  return {
    id: data?.user.id,
    no: count++,
    name: data?.user.firstName + " " + data?.user.lastName,
    firstName: data.user.firstName,
    lastName: data.user.lastName,
    email: data.user.email,
    phoneNumber: data.user.phoneNumber,
    gender: data.user.gender,
    imageUrl: data?.user.imageUrl,
    date: data.user.createdAt,
    isBlocked: data?.user?.isBlocked,
    token: data?.access_token,
  };
};

module.exports = {
  getUserDto,
  userDto,
};
