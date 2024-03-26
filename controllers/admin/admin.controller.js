const { prisma } = require("../../configs/prisma");
const {
  forbiddenResponse,
  serverErrorResponse,
  okResponse,
  updateSuccessResponse,
  notFound,
  unauthorizedResponse,
} = require("../../constants/responses");

const TokenService = require("../../services/tokenService");
const tokenService = new TokenService(process.env.JWT_SECRET_KEY);

const { adminDto } = require("../../dto/admin.dto");

const registerAdmin = async (req, res) => {
  const adminData = req.body;

  try {
    let admin = await prisma.admin.findMany({});

    if (admin.length > 0) {
      const response = forbiddenResponse("Can not create more admins");
      return res.status(response.status.code).json(response);
    }

    admin = await prisma.admin.create({
      data: {
        ...adminData,
      },
    });

    const response = okResponse(adminDto(admin), "Successfully created admin");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const updateAdmin = async (req, res) => {
  const adminData = req.body;

  try {
    let admin = await prisma.admin.findFirst({
      where: {
        id: req.id,
      },
    });

    if (!admin) {
      const response = forbiddenResponse("admin Not Found");
      return res.status(response.status.code).json(response);
    }

    admin = await prisma.admin.update({
      where: {
        id: req.id,
      },
      data: {
        ...adminData,
      },
    });

    if (admin) {
      const response = updateSuccessResponse(adminDto(admin));
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const loginAdmin = async (req, res) => {
  const adminData = req.body;
  try {
    let admin = await prisma.admin.findFirst({
      where: {
        email: adminData?.email,
        password: adminData?.password,
      },
    });

    if (!admin) {
      const response = unauthorizedResponse("Invalid Credentials");
      return res.status(response.status.code).json(response);
    }

    const access_token = tokenService.generateAccessToken(admin.id);

    const response = okResponse(
      adminDto({ admin, access_token }),
      "Successfully logged In"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = { registerAdmin, updateAdmin, loginAdmin };
