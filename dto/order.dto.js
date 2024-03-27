const orderDto = (data) => {
  return data.map((order) => ({
    id: order?.id,
    totalPrice: order?.totalPrice,
    date: order?.createdAt,
    orderItems: order.orderItems.map((orderItem) => ({
      quantity: orderItem?.quantity,
      price: orderItem?.price,
      productId: orderItem?.productId,
      Product: {
        name: orderItem?.Product?.name,
        price: orderItem?.Product?.price,
      },
    })),
    User: {
      name: order?.User?.firstName + "" + order?.User?.lastName,
      id: order?.User?.id,
    },
  }));
};

module.exports = {
  orderDto,
};
