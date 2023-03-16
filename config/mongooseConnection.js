require('dotenv').config({path:rootPath+'/.env'});
const mongoose = require("mongoose");

	mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?directConnection=true&serverSelectionTimeoutMS=2000`);



  	const db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error: "));
	db.once("open", function () {
	  console.log("Connected successfully");
	});