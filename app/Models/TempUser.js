const mongoose = require('mongoose');

const TempUserSchema = new mongoose.Schema({
	user_name : String,
	sponser_id : Number,
	email: String,
	mobile_number:Number,
	otp:Number
},{
	 timestamps:true
});
const TempUser = mongoose.model("TempUser", TempUserSchema);

module.exports = TempUser;