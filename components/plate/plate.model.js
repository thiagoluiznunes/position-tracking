import mongoose from 'mongoose';

const plateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false
  },
});

export default mongoose.model('Plate', plateSchema);
