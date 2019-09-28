import Driver from './driver.model';

const registerDriver = async (req, res) => {
  const { name, vehicle } = req.body;

  if (!name || !vehicle) return res.status(400).send({ message: 'Invalid fields.' });

  Driver.findOne({ name }, (err, driver) => {
    if (err) return res.status(400).send({ message: 'Error to register driver.' });
    else if (driver) return res.status(400).send({ message: 'Driver already registered.' });

    const newDriver = new Driver({ name, vehicle });
    newDriver.save(err => {
      if (err) return res.status(400).send({ message: 'Error to register driver.' });
      return res.status(200).send({ message: 'Driver has been registered.' });
    });
  });
}

export default {
  registerDriver,
}
