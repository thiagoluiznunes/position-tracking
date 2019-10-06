import Promotional from './promotional.model';
import helper from '../helper';

const codeRegex = /^[0-9]{4,4}$/;

const createPromotionalCode = async (req, res) => {
  const { code, isPercent, discount, expirationDate, isActive} = req.body;
  if (!code || !discount || !expirationDate) return res.status(400).send({ message: 'Invalid fields.' });

  const isValid = await helper.validateDate(expirationDate);

  if (!code || !code.match(codeRegex)) return res.status(400).send({ message: 'Invalid promotion code.' });
  if (!isValid) return res.status(400).send({ message: 'Invalid expiration date.' });
  if (isPercent) {
    if (parseInt(discount, 10) > 100) return res.status(400).send({ message: 'Discount is greather than value.' });
    else if (typeof isPercent !== 'boolean') return res.status(400).send({ message: 'isPercent needs be boolean.' });
  }

  Promotional.findOne({ code }, (err, data) => {
    if (err || data == null) return res.status(400).send({ message: 'Error to find promotional code.' });
    else if (data && data.isActive) return res.status(400).send({ message: 'Promotional code already activated.' });
    const newCode = new Promotional({ code, isPercent, discount, expirationDate, isActive });
    newCode.save((err) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ message: 'Promotion code has been created.'});
    });
  });
}

const validatePromotionalCode = async (req, res) => {
  const { code } = req.body;
  if (!code || !code.match(codeRegex)) return res.status(400).send({ message: 'Invalid promotion code.' });

  Promotional.findOne({ code }, async (err, data) => {
    if (err || data == null) return res.status(400).send({ message: 'Error to find promotional code.' });
    else if (data && !data.isActive) return res.status(400).send({ message: 'Promotional code expired.' });
    const isValid = await helper.validateDate(data.expirationDate);
    if (!isValid) {
      data.isActive = false;
      await data.save();
      return res.status(400).send({ message: 'Promotional code expired.' });
    } else return res.status(200).send({ message: 'Promotional code available.' });
  });
}

const getModelTypes = async (req, res) => {
  const promotionalTypes = await helper.getModelTypes(Promotional);
  res.status(200).json(promotionalTypes);
}

export default {
  createPromotionalCode,
  validatePromotionalCode,
  getModelTypes,
}
