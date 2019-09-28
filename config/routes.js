import promotional from '../components/promotional/promotional.routes';

const init = (app) => {
  app.use('/api/v1/promotional-code', promotional);
}

export default { init };
