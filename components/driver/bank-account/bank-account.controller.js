import Driver from '../driver.model';
import BankAccount from './back-account.model';

const addAccount = async (req, res) => {
  const { driver_name, bank_account } = req.body;

  if (!driver_name || !bank_account) return res.status(400).send({ message: 'Invalid fields.' });

  Driver.findOne({ name: driver_name }, (err, driver) => {
    if (err || driver == null) return res.status(400).send(err);

    const newAccount = new BankAccount(bank_account);
    driver.bank_accounts.push(newAccount);
    driver.save(err => {
      if (err) return res.status(400).send(err);
      return res.status(200).send({ message: 'Bank account added.' });
    });
  });
}

export default {
  addAccount,
}
