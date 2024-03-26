const { prisma } = require("../../configs/prisma");
const {
  serverErrorResponse,
  okResponse,
  forbiddenResponse,
  updateSuccessResponse,
  notFound,
  deleteSuccessResponse,
} = require("../../constants/responses");
const {
  categoryDto,
  getCategoryDto,
  getCategoryAndSubCategoriesDto,
} = require("../../dto/category.dto");

const registerCateogry = async (req, res) => {
  try {
    const { name } = req.body;

    let category = await prisma.category.findFirst({
      where: {
        name,
      },
    });

    if (category) {
      const response = forbiddenResponse("Already Created");
      return res.status(response.status.code).json(response);
    }

    category = await prisma.category.create({
      data: {
        name,
      },
    });
    const response = okResponse(
      categoryDto(category),
      "Successfully created category"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const getCategory = async (req, res) => {
  try {
    let category = await prisma.category.findMany({});

    const response = okResponse(
      getCategoryDto(category),
      "Successfully fetched categories"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    let category = await prisma.category.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!category) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    category = await prisma.category.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });

    if (category) {
      const response = updateSuccessResponse(categoryDto(category));
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    let category = await prisma.category.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!category) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    category = await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    if (category) {
      const response = deleteSuccessResponse(categoryDto(category));
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const categoriesAndSubCategories = async (req, res) => {
  try {
    let data = await prisma.category.findMany({
      include: {
        subCategories: {
          select: { name: true },
        },
      },
    });

    if (!data) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    console.log(data[0]?.subCategories)

    const response = okResponse(
      getCategoryAndSubCategoriesDto(data),
      "Successfully fetched categories"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = {
  registerCateogry,
  updateCategory,
  getCategory,
  categoriesAndSubCategories,
  deleteCategory,
};
