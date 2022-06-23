import mongoose from 'mongoose';

//TODO: normalizar nombres de archivos
const adminSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  birth: Date,
  address: String,
  phone: String,
  email: String,
  password: String,
  role: String
});

export default mongoose.model('admin', adminSchema);