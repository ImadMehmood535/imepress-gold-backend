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
  subCategoryDto,
  getSubCategoriesDto,
} = require("../../dto/subCategory.dto");

const registerSubCategory = async (req, res) => {
  try {
    const { name, categoryId } = req.body;

    let subCategory = await prisma.subCategory.findFirst({
      where: {
        categoryId,
        name,
      },
    });

    if (subCategory) {
      const response = forbiddenResponse("Already Created");
      return res.status(response.status.code).json(response);
    }

    subCategory = await prisma.subCategory.create({
      data: {
        ...req.body,
      },
    });
    const response = okResponse(
      subCategoryDto(subCategory),
      "Successfully created category"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const getSubCategory = async (req, res) => {
  try {
    let subCategory = await prisma.subCategory.findMany({
      include: {
        Category: {
          select: { name: true },
        },
      },
    });

    const response = okResponse(
      getSubCategoriesDto(subCategory),
      "Successfully fetched subCategories"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    let subCategory = await prisma.subCategory.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!subCategory) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    subCategory = await prisma.subCategory.update({
      where: {
        id: Number(id),
      },
      data: {
        ...req.body,
      },
    });

    if (subCategory) {
      const response = updateSuccessResponse(subCategoryDto(subCategory));
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    let subCategory = await prisma.subCategory.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!subCategory) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    subCategory = await prisma.subCategory.delete({
      where: {
        id: Number(id),
      },
    });

    if (subCategory) {
      const response = deleteSuccessResponse(subCategoryDto(subCategory));
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
  registerSubCategory,
  updateSubCategory,
  getSubCategory,
  deleteSubCategory,
};
