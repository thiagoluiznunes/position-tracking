import Test from './test.model';
import helper from '../helper';

const getModelTypes = async (req, res) => {
  const testTypes = await helper.getModelTypes(Test);
  res.status(200).json(testTypes);
}

export default {
  getModelTypes,
}
