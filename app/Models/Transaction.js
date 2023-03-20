const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
	
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

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
