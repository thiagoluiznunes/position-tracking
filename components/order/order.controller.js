import Order from './order.model';

const createOrder = async (req, res) => {
  const { plate, discount, destiny, chief, driver } = req.body;

  const newOrder = new Order({
    plate: {
      name: plate.name,
      price: parseFloat(plate.price.replace('$', ''), 10)
    },
    discount,
    destiny,
    chief,
    driver
  });

  newOrder.save(err => {
    if (err) return res.status(400).json(err);
    return res.status(200).send({ message: 'Order has been created.'});
  });
}

export default {
  createOrder,
}
