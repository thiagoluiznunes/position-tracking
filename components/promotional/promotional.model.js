import mongoose from 'mongoose';

const promotionalSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  isPercent: {
    type: Boolean,
    required: true,
    default: false
  },
  discount: {
    type: Number,
    required: true
  },
  expirationDate: {
    type: String,
    required: true,
    default: ''
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  }
});

export default mongoose.model('Promotional', promotionalSchema);
