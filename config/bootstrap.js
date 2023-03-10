require('dotenv').config({path:rootPath+'/.env'});
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


global.use = function use(path){
   return require(rootPath+'/'+path);
}

module.exports = app;