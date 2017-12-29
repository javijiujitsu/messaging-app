var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageschema = new Schema({
    content: {type: String, required: true},
    userid:  {type: Schema.Types.ObjectId}
});

module.exports = mongoose.model('Message', messageschema);
