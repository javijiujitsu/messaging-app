var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require ('mongoose-unique-validator');

var userschema = new Schema({
    firstName: {type: String, required: true},
    LastName:  {type: String, required: true},
    password:  {type: String, required: true},
    email:  {type: String, required: true, unique:true},
    messagesid: [ {type: Schema.Types.ObjectId, ref: 'Message'}]
});

userschema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userchema);
