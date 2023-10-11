const mongoose = require('mongoose');
const brcypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

//TO DO if the user already exists, throw error
// userSchema.virtual('repeatPassword').set(function(value) {
//     if(value !== this.password) {
//         throw new mongoose.MongooseError('Password missmatch!');
//     }
// })

userSchema.pre('save', async function () {
    //                             word,           salt rounds
    const hash = await brcypt.hash(this.password, 10);
    this.password = hash;
})
const User = mongoose.model('User', userSchema);

module.exports = User;