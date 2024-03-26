const getUserDto = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      phoneNumber: item.phoneNumber,
      gender: item.gender,
      date: item.createdAt,
    };
  });
};

const userDto = (data) => {
  return {
    id: data.user.id,
    firstName: data.user.firstName,
    lastName: data.user.lastName,
    email: data.user.email,
    phoneNumber: data.user.phoneNumber,
    gender: data.user.gender,
    date: data.user.createdAt,
    token: data?.access_token,
  };
};

module.exports = {
  getUserDto,
  userDto,
};
