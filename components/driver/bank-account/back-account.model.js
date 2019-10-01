import mongoose from 'mongoose';

const bankAccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  routing_number: {
    type: String,
    required: [true, 'Routing number it is required.'],
    validate: [/^[0-9]{9,9}$/, 'Invalid routing number, it must have 9 digits.']
  },
  account_number: {
    type: String,
    required: [true, 'Account number it is required.'],
    validate: [/^[0-9]{7,14}$/, 'Invalid account number, it must have between 7-14 digits.']
  },
  tax_information: {
    type: String,
    enum: ['Tax0', 'Tax1', 'Tax2', 'Tax3'],
    required: [true, 'Tax information it is required.']
  }
});

export default mongoose.model('BankAccount', bankAccountSchema);
