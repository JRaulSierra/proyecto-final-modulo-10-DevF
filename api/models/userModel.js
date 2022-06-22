import mongoose from 'mongoose';

//TODO: normalizar nombres de archivos
const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  birth: Date,
  address: String,
  phone: String,
  email: String,
  password: String,
  role: String
});

export default mongoose.model('user', userSchema);