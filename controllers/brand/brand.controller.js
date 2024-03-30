const { prisma } = require("../../configs/prisma");
const {
  serverErrorResponse,
  okResponse,
  forbiddenResponse,
  updateSuccessResponse,
  notFound,
  deleteSuccessResponse,
} = require("../../constants/responses");
const { brandDto, getBrandDto } = require("../../dto/brand.dto");

const registerBrand = async (req, res) => {
  try {
    const { name } = req.body;

    let brand = await prisma.brand.findFirst({
      where: {
        name,
      },
    });

    if (brand) {
      const response = forbiddenResponse("Already Created");
      return res.status(response.status.code).json(response);
    }

    brand = await prisma.brand.create({
      data: {
        name,
      },
    });
    const response = okResponse(brandDto(brand), "Successfully created brand");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const getBrand = async (req, res) => {
  try {
    let brand = await prisma.brand.findMany({});

    const response = okResponse(
      getBrandDto(brand),
      "Successfully fetched brand"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    let brand = await prisma.brand.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!brand) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    brand = await prisma.brand.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });

    if (brand) {
      const response = updateSuccessResponse(brandDto(brand));
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;

    let brand = await prisma.brand.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!brand) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    brand = await prisma.brand.delete({
      where: {
        id: Number(id),
      },
    });

    if (brand) {
      const response = deleteSuccessResponse(brandDto(brand));
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = {
  registerBrand,
  getBrand,
  updateBrand,
  deleteBrand,
};
