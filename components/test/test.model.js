import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  test: {
    type: String,
    required: true,
  },
  enum: {
    type: String,
    required: false,
    enum: ['ENUM1', 'ENUM2', 'ENUM3']
  },
  any: ''
});

export default mongoose.model('Test', testSchema);
