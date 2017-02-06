import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username   : { type: String, required: true },
    password   : { type: String, required: true },
    email      : { type: String, required: true },
    givenName  : { type: String, default: '' },
    familyName : { type: String, default: '' },
    location   : { type: String, default: '' },
    website    : { type: String, default: '' },
    bio        : { type: String, default: '' },
    validated  : { type: Boolean, default: false },
    disabled   : { type: Boolean, default: false }
})

UserSchema.methods.toJSON = function () {
    let object = this.toObject();
    delete object.password;
    delete object.__v;
    delete object._id;
    console.log(object);
    return object;
}

export default mongoose.model('User', UserSchema);
