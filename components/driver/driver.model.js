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
  },
  isAvailable: {
    type: Boolean,
    required: false,
    default: false
  },
  location: {
    lat: {
      type: Number,
      required: function() { return this.isAvailable === true }
    },
    lng: {
      type: Number,
      required: function() { return this.isAvailable === true }
    },
  }
});


export default mongoose.model('Driver', driverSchema);
