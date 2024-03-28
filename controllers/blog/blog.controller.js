const { prisma } = require("../../configs/prisma");
const {
  serverErrorResponse,
  okResponse,
  forbiddenResponse,
  updateSuccessResponse,
  notFound,
  deleteSuccessResponse,
} = require("../../constants/responses");
const { blogDto, getBlogDto } = require("../../dto/blog.dto");

const registerBlog = async (req, res) => {
  try {
    const { name } = req.body;

    let blog = await prisma.blog.findFirst({
      where: {
        name,
      },
    });

    if (blog) {
      const response = forbiddenResponse("Already Created");
      return res.status(response.status.code).json(response);
    }

    blog = await prisma.blog.create({
      data: {
        ...req.body,
      },
    });
    const response = okResponse(blogDto(blog), "Successfully created blog");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const getBlog = async (req, res) => {
  try {
    let blog = await prisma.blog.findMany({});

    const response = okResponse(getBlogDto(blog), "Successfully fetched blog");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    let blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!blog) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    blog = await prisma.blog.update({
      where: {
        id: Number(id),
      },
      data: {
        ...req.body,
      },
    });

    if (blog) {
      const response = updateSuccessResponse(blogDto(blog));
      return res.status(response.status.code).json(response);
    }

    const response = notFound("Not Found");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    let blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!blog) {
      const response = notFound("Not Found");
      return res.status(response.status.code).json(response);
    }

    blog = await prisma.blog.delete({
      where: {
        id: Number(id),
      },
    });

    if (blog) {
      const response = deleteSuccessResponse(blogDto(blog));
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
  registerBlog,
  updateBlog,
  getBlog,
  deleteBlog,
};
