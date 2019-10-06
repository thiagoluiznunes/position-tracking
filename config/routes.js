import order from '../components/order/order.routes';
import driver from '../components/driver/driver.routes';
import promotional from '../components/promotional/promotional.routes';
import test from '../components/test/test.routes';

const init = (app) => {
  app.use('/api/v1/order', order);
  app.use('/api/v1/driver', driver);
  app.use('/api/v1/promotional-code', promotional);
  app.use('/api/v1/test', test);
}

export default { init };
