// user.js hold the details about schema,
// mongodb is schema-less means no SQL but with mongoose we can specifies a schema to have more safety when working  with  our server code so
// here also I'll bring two things from Mongoose ->  structure model and schema

const { model, Schema } = require("mongoose");
const userSchema = new Schema({
    username:String,
    email:String,
    password:String,
    createdAt:String,

}); 

module.exports = model('User', userSchema);
