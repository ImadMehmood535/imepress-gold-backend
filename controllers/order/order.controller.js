const { prisma } = require("../../configs/prisma");
const {
  serverErrorResponse,
  okResponse,
  unauthorizedResponse,
} = require("../../constants/responses");
const { orderDto } = require("../../dto/order.dto");

const registerOrder = async (req, res) => {
  try {
    const { orderItems } = req.body;
    const id = req.id;

    let user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      const response = unauthorizedResponse("You cannot create an order");
      return res.status(response.status.code).json(response);
    }

    let total = 0;

    for (const orderItem of orderItems) {
      total += orderItem?.quantity * orderItem.price;
    }

    if (orderItems.length === 0) {
      const response = badRequestResponse("No order items provided");
      return res.status(response.status.code).json(response);
    }

    await prisma.order.create({
      data: {
        totalPrice: total,
        userId: Number(id),

        orderItems: {
          createMany: {
            data: orderItems.map((item) => ({
              quantity: item.quantity,
              price: item.price,
              productId: item.productId,
            })),
          },
        },
      },
    });

    const response = okResponse(null, "Successfully created order");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const getOrders = async (req, res) => {
  try {
    let order = await prisma.order.findMany({
      include: {
        orderItems: {
          include: {
            Product: true,
          },
        },

        User: {
          select: {
            firstName: true,
            lastName: true,
            id: true,
          },
        },
      },
    });

    const response = okResponse(orderDto(order), "Successfully fetched orders");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = {
  registerOrder,
  getOrders,
};
