import order from '../components/order/order.routes';
import driver from '../components/driver/driver.routes';
import promotional from '../components/promotional/promotional.routes';
import wsTracking from '../components/driver/driver.ws';

const init = (app) => {
  app.use('/api/v1/order', order);
  app.use('/api/v1/driver', driver);
  app.use('/api/v1/promotional-code', promotional);

  // wsTracking(app);
}

export default { init };
