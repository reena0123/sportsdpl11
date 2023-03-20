const axios = require('axios')

class SMS {

	constructor(){

		this.baseURL = 'http://text.bluemedia.in/http-api.php?'
		this.username = 'shambhu123'
		this.password = 'shambhu@123'
		this.senderid = 'DYASRA'
		this.route = 2
		this.unicode = 2

		this.url = `${this.baseURL}username=${this.username}&password=${this.password}&senderid=${this.senderid}&route=${this.route}&unicode=${this.unicode}`;
	}

	async registrationOTP(mobile,username,otp){

		const url = `${this.url}&number=${mobile}&message=Dear ${username}, Your OTP For registration on DPL 11 is ${otp} Regards,DAYASARA ENTERTAINMENT&templateid=1007920574220039515`;

		return await axios.get(url);

	}

	async loginOTP(mobile,username,otp){
		const url = `${this.url}&number=${mobile}&message=Dear ${username}, Your OTP To Login on Mobile Application DPL11 Is ${otp}  Regards,DAYASARA ENTERTAINMENT&templateid=1007490246835321052`;

		return await axios.get(url);
	}
}

module.exports = new SMS;