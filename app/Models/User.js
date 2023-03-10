const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	
	user_name:{
		type: String,
		min: 2,
		max: 255,
		required: false
	},

	email:{
		type: String,
		min: 2,
		max: 255
	},
	mobile_number:{
		type: String,
		min: 9,
		max: 15
	},

	otp:{
		type:Number
	},

	dob:{
		type: Date,
		default: Date.now
	},
	
	sponser_id:{
		type: String,
		min: 9,
		max: 15,
		required: false
	},
	token:{
		type: String
	},
	address:{
		type: String,
		min: 2,
		max: 500,
		required: false,
		default: null
	},
	state : {
		type: String
		//ref:'State'
	},
	city : {
		type: String
		//ref:'City'
	},
	pincode:{
		type: Number,
		default: null
	},
	nominee_name : {
		type: String,
		required : false
	},

	nominee_dob : {
		type: Date,
		default: Date.now
	},

	relation_with_nominee : {
		type: String,
		required: false
	},

	nominee_id_proof : {
		type: String,
		required: false,
	},

	pan_card : {
		type: String,
		required: false
	},
	drivery_licence : {
		type: String,
		required: false
	},
	adhar_card : {
		type: String,
		required: false
	},
	bank_accounts:[
		{
			bank_name : {type: String},
			ifsc_code : {type: String},
			account_holder_name : {type: String},
			account_number : {type: Number}
		}
	],
	upi_accounts:[
		{
			upi_provider : {type: String},
			upi_number : {type: Number}			
		}
	],
	wallet:{
		amount: {type: Number},
		winning: {type: Number},
		bonus: {type: Number}
	}
	
},{
	 timestamps:true
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
