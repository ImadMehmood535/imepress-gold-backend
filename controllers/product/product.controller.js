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
  console.log(req.body);
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

const getProductsQuery = async (req, res) => {
  const query = req.query.type;

  try {
    let product = await prisma.product.findMany({
      include: {
        subCategory: {
          include: { Category: true },
        },
        brand: {
          select: { name: true },
        },
      },

      where: {
        [query]: true,
      },
    });

    const response = okResponse(
      getProductsDto(product),
      "Successfully fetched products"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    console.log(error);
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const getProducts = async (req, res) => {
  try {
    let product = await prisma.product.findMany({
      include: {
        subCategory: {
          include: { Category: true },
        },
        brand: {
          select: { name: true },
        },
      },
    });

    const response = okResponse(
      getProductsDto(product),
      "Successfully fetched products"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    console.log(error);
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.query;
  try {
    let products = await prisma.product.findMany({
      where: {
        subCategory: {
          categoryId: Number(categoryId),
        },
      },
      include: {
        subCategory: {
          include: { Category: true },
        },
        brand: {
          select: { name: true },
        },
      },
    });

    const response = okResponse(
      getProductsDto(products),
      "Successfully fetched products"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    console.log(error);
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const updateProduct = async (req, res) => {
  console.log(req.body);

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

const getSingleProduct = async (req, res) => {
  try {
    const { slug } = req.params;

    let product = await prisma.product.findFirst({
      where: {
        slug: slug,
      },
      include: {
        subCategory: {
          include: { Category: true },
        },
        brand: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!product) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    const response = okResponse(
      productDto(product),
      "Successfully fetched product"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = {
  registerProduct,
  updateProduct,
  getProductsQuery,
  deleteProduct,
  getSingleProduct,
  getProducts,
  getProductsByCategory,
};
