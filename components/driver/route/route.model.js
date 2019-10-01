import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
  driver_id: {
    type: String,
    required: [true, 'Driver id is required.'],
  },
  vehicle: {
    type: String,
    required: [true, 'Vehicle id is required.'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required.'],
    default: Date.now
  },
  locations: {
    type: Array,
    required: false,
    default: []
  }
});

export default mongoose.model('Route', routeSchema);
