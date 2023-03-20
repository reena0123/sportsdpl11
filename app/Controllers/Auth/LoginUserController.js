const User = use('app/Models/User');
const Controller = use('app/Controllers/Controller');
const SMS = use("app/Helpers/SMS");

class LoginUserController extends Controller{

	async login(request,response){
		try{


			const v = this.validator(request.body,{
			
				mobile_number: 'required|numeric'

			});


			const matched = await v.check();

			if(!matched){
				return response.json({
					error: v.errors
				})		
			}

			const otp = Math.floor(1000 + Math.random() * 9000);

			const user = await User.findOne({mobile_number: request.body.mobile_number});


			if(user == null){
				return response.send({error:{otp:{message:"Mobile number is not belongs to us.",rule: "invalid"}}});
			}

			await User.updateOne({mobile_number: request.body.mobile_number},{
				$set:{
					otp:otp
				}
			});

			SMS.loginOTP(request.body.mobile_number,user.user_name,otp);

			response.send({'data':'success',otp:otp});
		}catch(e){

			console.log(e.message)
			console.log(e.stack)
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

			const otp = await User.findOne({otp: request.body.otp});
			await User.updateOne({mobile_number: otp.mobile_number},{otp:'',});

			if(otp!= null){

				response.send({'data':'Logged In',user:otp});

			}



			response.send({error:{otp:{message:"Invalid OTP.",rule: "invalid"}}});
		}catch(e){
			console.log(e.message)
		}

	}


	async logout(request,response)
	{
		
	}


}
module.exports = new LoginUserController;