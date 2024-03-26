const { prisma } = require("../../configs/prisma");
const {
  serverErrorResponse,
  okResponse,
  forbiddenResponse,
  updateSuccessResponse,
  notFound,
  deleteSuccessResponse,
} = require("../../constants/responses");
const { productDto, getProductsDto } = require("../../dto/product.dto");

const registerProduct = async (req, res) => {
  try {
    const { name } = req.body;

    let product = await prisma.product.findFirst({
      where: {
        name,
      },
    });

    if (product) {
      const response = forbiddenResponse("Already Created");
      return res.status(response.status.code).json(response);
    }

    product = await prisma.product.create({
      data: {
        ...req.body,
      },
    });
    const response = okResponse(
      productDto(product),
      "Successfully created product"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const getProducts = async (req, res) => {
  try {
    let product = await prisma.product.findMany({});

    const response = okResponse(
      getProductsDto(product),
      "Successfully fetched products"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let product = await prisma.product.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!product) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    product = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        ...req.body,
      },
    });

    if (product) {
      const response = updateSuccessResponse(productDto(product));
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let product = await prisma.product.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!product) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    product = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    if (product) {
      const response = deleteSuccessResponse(productDto(product));
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
  registerProduct,
  updateProduct,
  getProducts,
  deleteProduct,
};
