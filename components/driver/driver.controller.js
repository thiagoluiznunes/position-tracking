import Driver from './driver.model';

const registerDriver = async (req, res) => {
  const { name, vehicle } = req.body;
  if (!name || !vehicle) return res.status(400).send({ message: 'Invalid fields.' });

  Driver.findOne({ name }, (err, driver) => {
    if (err) return res.status(400).send(err);
    else if (driver) return res.status(400).send({ message: 'Driver already registered.' });

    const newDriver = new Driver({ name, vehicle });
    newDriver.save(err => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ message: 'Driver has been registered.' });
    });
  });
}

const getLocation = async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).send({ message: 'Invalid fields.' });

  Driver.findById(id, (err, driver) => {
    if (err || driver == null) return res.status(400).send({ message: 'Unregistered driver.' });
    if (!driver.isAvailable) return res.status(400).send({ message: 'Offline driver.' });
    return res.status(200).json(driver.location);
  });
}

const setLocation = async (req, res) => {
  const { id, lat, lng } = req.body;
  if (!id || !lat || !lng) return res.status(400).send({ message: 'Invalid fields.' });

  Driver.findById(id, (err, driver) => {
    if (err || driver == null) return res.status(400).send({ message: 'Unregistered driver.' });
    driver.location.lat = parseFloat(lat, 10);
    driver.location.lng = parseFloat(lng, 10);
    driver.isAvailable = true;
    driver.save(err => {
      if (err) return res.status(400).send(err);
      return res.status(200).json(driver.location);
    });
  });
}

export default {
  registerDriver,
  getLocation,
  setLocation,
}
