const { validationResult } = require('express-validator');
const fs = require("fs");
const Storage = use("core/Storage");
const { Validator } = require('node-input-validator');
const niv = require('node-input-validator');

const mongoose = require('mongoose');

class Controller  {
	
	storage(path,file){

		return new Storage(path,file);
	}

	validator(body,rules){

		niv.extend('unique', async ({ value, args }) => {
		  // default field is email in this example
		  const field = args[1] || 'email';

		  let condition = {};

		  condition[field] = value;

		  // add ignore condition
		  if (args[2]) {
		    condition['_id'] = { $ne: mongoose.Types.ObjectId(args[2]) };
		  }

		  let emailExist = await mongoose.model(args[0]).findOne(condition).select(field);

		  // email already exists
		  if (emailExist) {
		    return false;
		  }

		  return true;
		});


		niv.extend('exists', async ({ value, args }) => {
		  // default field is email in this example
		  const field = args[1] || 'email';

		  let condition = {};

		  condition[field] = value;

		  // add ignore condition
		  if (args[2]) {
		    condition['_id'] = { $ne: mongoose.Types.ObjectId(args[2]) };
		  }

		  let emailExist = await mongoose.model(args[0]).findOne(condition).select(field);

		  // email already exists
		  if (emailExist) {
		    return true;
		  }

		  return false;
		});
		
		return new Validator(body,rules);
	}
	
}

module.exports = Controller