const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    quote: {type: String, default: "You do not have quote! Write something"}
})
const User = mongoose.model('User', UserSchema)
module.exports = User  //Se crea UserSchema para la base de datos y se mapea a ts (todo desde ts en server>schemas>users). Mongo
//send data to mongoose mached as the schema and populate to ts
