const adminDto = (data) => {
  return {
    name: data?.admin?.name,
    email: data?.admin?.email,
    token: data?.access_token
  };
};

module.exports = { adminDto };
