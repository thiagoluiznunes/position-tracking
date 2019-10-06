import _ from 'lodash';

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

const sendErrorsFromDB = (res, dbErrors) => {
  const errors = [];
  _.forIn(dbErrors.errors, error => errors.push(error.message));
  return res.status(400).json({ errors });
};

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return [day, month, year];
}

const validateDate = async (date) => {
  let isValid = false;
  const dateRegex = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/;
  const currentDate = await formatDate(new Date);
  const arr = date.split('/').map((item) => {
    return parseInt(item, 10);
  });

  if (!date.match(dateRegex)) isValid = false;
  else if (arr[0] > 31 || arr[1] > 12) {
    isValid = false;
  } else if (arr[2] > currentDate[2]) {
    isValid = true;
  } else if (arr[2] === currentDate[2] && arr[1] > currentDate[1]) {
    isValid = true;
  } else if (arr[2] === currentDate[2] && arr[1] === currentDate[1] && arr[0] >= currentDate[0]) {
    isValid = true;
  }
  return isValid;
}

const getModelTypes = async (model) => {
  const modelTypes = {};
  model.schema.eachPath(async (pathname, schematype) => {
    if (schematype.instance === 'Embedded') {
      const type = await getModelTypes(schematype);
      modelTypes[pathname] = type;
    }
    else if (pathname !== '_id' && pathname !== '__v') {
      modelTypes[pathname] = schematype.instance;
    }
  });
  return modelTypes;
}

export default {
  asyncMiddleware,
  sendErrorsFromDB,
  validateDate,
  getModelTypes,
};
