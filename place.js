var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Place.Schema = new Schema({
	name: String,
	description: String,
	country: String,
	categories: [String],
	imageUrl: String,
	createdAt:{type:Data,default:Date.now}
});

module.exports = mongoose.model('Place', PlaceSchema);