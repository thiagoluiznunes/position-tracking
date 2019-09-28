import mongoose from 'mongoose';
import BankAccount from './bank-account/back-account.model';

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true
  },
  bank_accounts: {
    type: [BankAccount.schema],
    required: false,
    default: []
  }
});

export default mongoose.model('Driver', driverSchema);
