const adminDto = (data) => {
  return {
    name: data?.admin?.name,
    email: data?.admin?.email,
    token: data?.access_token,
  };
};
const adminProfileDto = (data) => {
  return {
    name: data?.name,
    email: data?.email,
  };
};

module.exports = { adminDto, adminProfileDto };
