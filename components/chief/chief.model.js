import mongoose from 'mongoose';

const chiefSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  plates: {
    type: [String],
    required: false
  },
  location: {
    type: String,
    required: true
  },
});

export default mongoose.model('Chief', chiefSchema);
