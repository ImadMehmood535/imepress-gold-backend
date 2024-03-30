const orderDto = (data) => {
  let count = 1;
  return data.map((order) => ({
    no: count++,
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
        imageUrl : orderItem?.Product?.imageUrl
      },
    })),
    User: {
      name: order?.User?.firstName + " " + order?.User?.lastName, 
      email: order?.User?.email,
      phoneNumber: order?.User?.phoneNumber,
      id: order?.User?.id,
    },
  }));
};

module.exports = {
  orderDto,
};
