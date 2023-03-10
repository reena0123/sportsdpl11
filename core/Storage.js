const fs = require("fs");

class Storage {
	
	constructor(path,file){

		this.file = file;
		this.path = path;
		this.fileExt = "";
		this.newFileName = "";
		this.assetPath = `${rootPath}/public/`;
		this.filePath = "";

		return this.storeFile();
	}

	generateName(min = 111111111111111, max = 9999999999999999) {  
		return Math.floor(
			Math.random() * (max - min) + min
		)
	}

	checkPathExistIfNotCreate(){

		if(!fs.existsSync(this.assetPath + this.path)){

			fs.mkdirSync(`${this.assetPath + this.path}`);
		}
		return this;
	}

	getFileExt(){
		
		if(this.file !== null){

			this.fileExt = this.file.name.split('.')[1]
		}
		return this;
	}

	getFileName(){

		let randNum = this.generateName();

		this.getFileExt();

		this.newFileName = `${randNum}.${this.fileExt}`;

		return this;
	}

	storeFile(){
		
		this.checkPathExistIfNotCreate()
		.getFileName();

		this.file.mv(this.assetPath + this.path + this.newFileName);

		this.filePath = this.path + this.newFileName;
	}
}

module.exports = Storage;