const mongoose = require('mongoose');

const WalletHistorySchema = new mongoose.Schema({
	
	user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	},

	type:{
		type: String,
		max: 255
	},
	amount:{
		type: Number
	},

	status:{
		type: String
	},
	
},{
	 timestamps:true
});

const WalletHistory = mongoose.model("WalletHistory", WalletHistorySchema);

module.exports = WalletHistory;
