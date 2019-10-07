import Plate from './plate.model';
import helper from '../helper';

const getModelTypes = async (req, res) => {
  const plateTypes = await helper.getModelTypes(Plate);
  res.status(200).json(plateTypes);
}

export default {
  getModelTypes,
}
