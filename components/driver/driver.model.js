import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: false
  },
});

export default mongoose.model('Driver', driverSchema);
