import mongoose from 'mongoose';

export default mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    location: String,
    website: String,
    info: String,
    validated: false
}));
