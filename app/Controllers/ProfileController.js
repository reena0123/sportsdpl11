const Controller = use("app/Controllers/Controller");
const User = use('app/Models/User');
const WalletHistory = use('app/Models/WalletHistory');
const SMS = use("app/Helpers/SMS");

class ProfileController extends Controller {
  
  	async updateProfile(request,response){

  		console.log(request.body,request.files)
  		try{


	  		const user = await User.updateOne({_id: request.body.auth._id},{
	  			$set:{
	  				/*user_name: request.body?.user_name,
	  				email: request.body?.email,
	  				mobile_number: request.body?.mobile_number,
	  				dob: request.body?.dob,
	  				sponser_id: request.body?.sponser_id,*/
	  				profile: this.storage('user/profile/',request.files?.profile).newFileName,
	  				address: request.body?.address,
	  				state: request.body?.state,
	  				city: request.body?.city,
	  				pincode: request.body?.pincode,
	  				nominee_dob: request.body?.nominee_dob,
	  				nominee_name: request.body?.nominee_name,
	  				relation_with_nominee: request.body?.relation_with_nominee,
	  				//nominee_id_proof: request.body?.nominee_id_proof,
	  				pan_number: request.body.pan_number,
	  				pan_card: this.storage('user/pan/',request.files.pan_card).newFileName,
	  				adhar_number: request.body?.adhar_number,
	  				adhar_front: this.storage('user/aadhar/',request.files?.adhar_front).newFileName,
	  				adhar_back: this.storage('user/aadhar/',request.files?.adhar_back).newFileName,
	  				bank_accounts:{
	  					account_number: request.body.account_number,
	  					bank_name: request.body.bank_name,
	  					ifsc_code: request.body.ifsc_code,
	  					account_holder_name: request.body.account_holder_name
	  				},
	  				upi_accounts:{
	  					upi_provider: request.body.upi_provider,
	  					upi_number: request.body.upi_number

	  				}
	  			}
	  		});
	  		response.send({user});

  		}catch(e){

  			console.log(e.message)

  		}

  	}

  	async updateWalletBalance(request,response){

  		try{
  			let user = {}
  			const walletHistory = await WalletHistory.findOne({user: request.body.auth._id})
  			
  			if(walletHistory?.user != undefined){

  				
		  		user = await User.updateOne({_id: request.body.auth._id},{
		  			$set:{
		  				wallet:{
		  					amount: Number(request.body.auth.wallet.amount) + Number(request.body?.amount)
		  				}
		  			}
		  		});

		  		
		  		WalletHistory.create({
		  			user: request.body.auth._id,
		  			type: 'CR',
		  			amount: request.body?.amount,
		  			status: request.body?.status
		  		})

  			}else{

  				
  				user = await User.updateOne({_id: request.body.auth._id},{
		  			$set:{
		  				wallet:{
		  					amount: 100
		  				}
		  			}
		  		});

		  		WalletHistory.create({
		  			user: request.body.auth._id,
		  			type: 'CR',
		  			amount: 100,
		  			status: request.body?.status
		  		})
  			}

	  		response.send({user})

  		}catch(e){

  			console.log(e.message)
  		}
  	}

  	async myTeam(request,response){

  		const users = await User.find({sponser_id: request.body.auth.mobile_number})
  		.select('user_name')
  		.select('email')
  		.select('wallet')
  		.select('mobile_number')

  		response.send({users})
  	}

  	async auth(request,response){

  		response.send({user: request.body.auth})
  	}

  	async walletHistory(request,response){

  		const trans = await WalletHistory.find({user: request.body.auth._id})


  		response.send({wallet_history:trans })
  	}

 }


module.exports = new ProfileController;