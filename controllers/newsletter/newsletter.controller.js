const { prisma } = require("../../configs/prisma");
const {
  serverErrorResponse,
  okResponse,
  forbiddenResponse,
} = require("../../constants/responses");
const { newsLetterDto, getNewsLetterDto } = require("../../dto/newsletter.dto");

const registerNewsLetter = async (req, res) => {
  try {
    const { email } = req.body;

    let newsletter = await prisma.newsLetter.findFirst({
      where: {
        email,
      },
    });

    if (newsletter) {
      const response = forbiddenResponse("Already Subscribed");
      return res.status(response.status.code).json(response);
    }

    newsletter = await prisma.newsLetter.create({
      data: {
        ...req.body,
      },
    });
    const response = okResponse(
      newsLetterDto(newsletter),
      "Successfully created newsletter"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const getNewsLetter = async (req, res) => {
  try {
    let newsLetter = await prisma.newsLetter.findMany({});

    const response = okResponse(
      getNewsLetterDto(newsLetter),
      "Successfully fetched newsletters"
    );

    return res.status(response.status.code).json(response);
  } catch (error) {
    console.log(error);
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = {
  registerNewsLetter,
  getNewsLetter,
};
