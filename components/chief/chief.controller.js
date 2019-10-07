import Chief from './chief.model';
import helper from '../helper';

const getModelTypes = async (req, res) => {
  const chiefTypes = await helper.getModelTypes(Chief);
  res.status(200).json(chiefTypes);
}

export default {
  getModelTypes,
}
