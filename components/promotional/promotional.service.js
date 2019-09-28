import Promotional from './promotional.model';
import helper from '../helper';

const createPromotion = async (req, res) => {
  const codeRegex = /^[0-9]{4,4}$/;
  const { code, isPercent, discount, expirationDate, isActive} = req.body;
  const isValid = await helper.validateDate(expirationDate);

  if (!code.match(codeRegex)) return res.status(400).send({ message: 'Invalid promotion code.' });
  if (!isValid) return res.status(400).send({ message: 'Invalid expiration date.' });
  if (isPercent && parseInt(discount, 10) > 100) return res.status(400).send({ message: 'Discount is greather than value.' });

  Promotional.findOne({ code }, (err, data) => {
    if (err) return res.status(400).send({ message: 'Error to find promotional code.' });
    else if (data && data.isActive) return res.status(400).send({ message: 'Promotional code already activated.' });
    const newCode = new Promotional({ code, isPercent, discount, expirationDate, isActive });
    newCode.save((err) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ message: 'Promotion code has been created.'});
    });
  });
}

const validatePromotionalCode = async (req, res) => {

}

export default {
  createPromotion
}
