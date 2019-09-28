import Order from './order.model';
import Promotional from '../promotional/promotional.model';

const codeRegex = /^[0-9]{4,4}$/;

const createOrder = async (req, res) => {
  const { plate, code, destiny, chief, driver } = req.body;

  if (!code || !code.match(codeRegex)) return res.status(400).send({ message: 'Invalid promotion code.' });
  else if (code) {
    Promotional.findOne({ code }, async (err, data) => {
      if (err || data == null) return res.status(400).send({ message: 'Error to find promotional code.' });
      else if (data && !data.isActive) return res.status(400).send({ message: 'Promotional code expired.' });

      let finalPrice = parseFloat(plate.price.replace('$', ''), 10) - data.discount;
      if (finalPrice < 0) finalPrice = 0;

      const newOrder = new Order({
        plate: {
          name: plate.name,
          price: finalPrice
        },
        code: data,
        destiny,
        chief,
        driver
      });
      newOrder.save(err => {
        if (err) return res.status(400).json(err);
        return res.status(200).send({ message: 'Order has been created.', finalPrice: finalPrice });
      });
    });
  }



}

export default {
  createOrder,
}


