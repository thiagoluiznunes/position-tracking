import mongoose from 'mongoose';
import BankAccount from './bank-account/back-account.model';
import Route from './route/route.model';

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
      required: function () { return this.isAvailable === true }
    },
    lng: {
      type: Number,
      required: function () { return this.isAvailable === true }
    },
  },
  current_route: {
    type: Route.schema,
    required: false
  },
  routes: {
    type: [Route.schema],
    required: false,
    default: []
  }
});


export default mongoose.model('Driver', driverSchema);
