import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  plate: {
    name: {
      type: [String],
      required: [true, 'Plate name is required.']
    },
    price: {
      type: Number,
      required: [true, 'Plate price is required.']
    }
  },
  discount: {
    type: Number,
    required: false
  },
  destiny: {
    type: String,
    required: [true, 'Destiny is required.']
  },
  chief: {
    name: {
      type: String,
      required: [true, 'Chief name is required.']
    },
    location: {
      type: String,
      required: [true, 'Chief location is required.']
    }
  },
  driver: {
    name: {
      type: String,
      required: [true, 'Driver name is required.']
    },
    vehicle: {
      type: String,
      required: [true, 'Chief vehicle is required.']
    }
  },
});

export default mongoose.model('Order', orderSchema);
