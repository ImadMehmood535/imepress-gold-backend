const { prisma } = require("../../configs/prisma");
const {
  forbiddenResponse,
  serverErrorResponse,
  okResponse,
  updateSuccessResponse,
  notFound,
  deleteSuccessResponse,
  unauthorizedResponse,
} = require("../../constants/responses");
const { getUserDto, userDto } = require("../../dto/user.dto");
const TokenService = require("../../services/tokenService");
const tokenService = new TokenService(process.env.JWT_SECRET_KEY);

const registerUser = async (req, res) => {
  const userData = req.body;

  try {
    let user = await prisma.user.findFirst({
      where: {
        email: userData.email,
      },
    });

    if (user) {
      const response = forbiddenResponse("Already Created");
      return res.status(response.status.code).json(response);
    }

    user = await prisma.user.create({
      data: {
        ...userData,
      },
    });

    const access_token = tokenService.generateAccessToken(user.id);

    const response = okResponse(
      userDto({ user, access_token }),
      "Successfully created user"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const updateUserByAdmin = async (req, res) => {
  const userData = req.body;

  try {
    let user = await prisma.user.findFirst({
      where: {
        id: userData?.id,
      },
    });

    if (!user) {
      const response = forbiddenResponse("User Not Found");
      return res.status(response.status.code).json(response);
    }

    user = await prisma.user.update({
      where: {
        id: Number(userData.id),
      },
      data: {
        ...userData,
      },
    });

    if (user) {
      const access_token = tokenService.generateAccessToken(user.id);

      const response = updateSuccessResponse(userDto({ user, access_token }));
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const updateUser = async (req, res) => {
  const userData = req.body;

  try {
    let user = await prisma.user.findFirst({
      where: {
        id: Number(req.id),
      },
    });

    if (!user) {
      const response = forbiddenResponse("User Not Found");
      return res.status(response.status.code).json(response);
    }

    user = await prisma.user.update({
      where: {
        id: Number(req.id),
      },
      data: {
        ...userData,
      },
    });

    if (user) {
      const access_token = tokenService.generateAccessToken(user.id);

      const response = updateSuccessResponse(userDto({ user, access_token }));
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const getUsers = async (req, res) => {
  try {
    let users = await prisma.user.findMany({});

    if (!users) {
      const response = notFound("not found");
      return res.status(response.status.code).json(response);
    }

    const response = okResponse(
      getUserDto(users),
      "Successfully fetched users"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;

    let user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    if (user) {
      const response = deleteSuccessResponse(user);
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const loginUser = async (req, res) => {
  const userData = req.body;
  try {
    let user = await prisma.user.findFirst({
      where: {
        email: userData?.email,
        password: userData?.password,
      },
    });

    if (!user) {
      const response = unauthorizedResponse("Invalid Credentials");
      return res.status(response.status.code).json(response);
    }

    const access_token = tokenService.generateAccessToken(user.id);

    const response = okResponse(
      userDto({ user, access_token }),
      "Successfully logged In"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const changePassword = async (req, res) => {
  try {
    const id = Number(req.id);

    const { oldPassword, newPassword } = req.body;

    let user = await prisma.user.findUnique({
      where: {
        id,
        password: oldPassword,
      },
    });

    if (!user) {
      const response = unauthorizedResponse("Password not correct");
      return res.status(response.status.code).json(response);
    }

    user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: newPassword,
      },
    });

    const response = okResponse(null, "Successfully changed Password");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = {
  registerUser,
  updateUserByAdmin,
  updateUser,
  getUsers,
  deleteUser,
  loginUser,
  changePassword,
};
