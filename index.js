require('dotenv').config({path:__dirname+'/.env'})

global.rootPath = __dirname;

const app = require("./config/bootstrap");
require('./config/mongooseConnection');
require("./routes");




/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(process.env.PORT || 8000,() =>{
   console.log(`Server started on port ${process.env.PORT || 8000}...`);
});
