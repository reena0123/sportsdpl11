const TempUser = use('app/Models/TempUser');
const User = use('app/Models/User');
const Controller = use('app/Controllers/Controller');
const crypto = require('crypto');

class RegisterUserController extends Controller{

	async store(request,response){


		
		try{

			const v = this.validator(request.body,{
			user_name: 'required',
			dob: 'required',
			email: 'required|email|unique:User,email',
			mobile_number: 'required|numeric|unique:User,mobile_number',
			sponser_id: 'required|numeric'

			});

			const matched = await v.check();

			if(!matched){
				return response.json({
					error: v.errors
				})		
			}
			
			const otp = Math.floor(1000 + Math.random() * 9000);

			TempUser.create({
				user_name: request.body.user_name,
				sponser_id: request.body.sponser_id,
				email: request.body.email,
				dob: request.body.dob,
				mobile_number: request.body.mobile_number,
				otp: otp
			});



			response.send({'data':'success',otp:otp});
		}catch(e){

			console.log(e.message)
		}
	}

	async verifySponser(request,response){

		try{
			const v = this.validator(request.body,{
				sponser_id: 'required|numeric|exists:User,mobile_number'
			});

			const matched = await v.check();

			if(!matched){
				return response.status(403).json({
					error: v.errors
				})		
			}

			const user = await User.findOne({where:{
				mobile_number: request.body.sponser_id
			}})

			return response.status(200).json({sponser_name:user.user_name});
		}catch(e){
			console.log(e.message);
			return response.status(400).json({error:"somthing went wrong"});
		}
	}

	async verifyOtp(request, response){

		try{

			const v = this.validator(request.body,{
			otp: 'required',
			});

			const matched = await v.check();

			if(!matched){
				return response.json({
					error: v.errors
				})		
			}

			const tempUser = await TempUser.findOne({otp: request.body.otp});

			await TempUser.deleteMany({email: tempUser.user_name});
			
			const token = await crypto.randomBytes(64).toString('hex');

			if(tempUser != null){

				const user = await User.create({
					user_name: tempUser.user_name,
					sponser_id: tempUser.sponser_id,
					email: tempUser.email,
					dob: tempUser.dob,
					mobile_number: tempUser.mobile_number,
					token:token
				})

				response.send({'data':'success',user});

			}



			response.send({error:{otp:{message:"Invalid OTP.",rule: "invalid"}}});

		}catch(e){

			console.log(e.message);
		}
		

	}

	

}
module.exports = new RegisterUserController;