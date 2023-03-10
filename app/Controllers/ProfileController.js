const Controller = use("app/Controllers/Controller");
const User = use('app/Models/User');

class ProfileController extends Controller {
  
  	async updateProfile(request,response){

  		try{

	  		let bank_accounts = [];
	  		let upi_accounts = [];

	  		if(request.body?.bank_accounts.length){
	  			request.body?.bank_accounts.map(account => {
	  				bank_accounts.push(account);
	  			})
	  		}
	  		if(request.body?.upi_accounts.length){
	  			request.body?.upi_accounts.map(upiAccount => {
	  				upi_accounts.push(upiAccount);
	  			})
	  		}

	  		const user = await User.updateOne({_id: request.body.auth._id},{
	  			$set:{
	  				user_name: request.body?.user_name,
	  				email: request.body?.email,
	  				mobile_number: request.body?.mobile_number,
	  				dob: request.body?.dob,
	  				sponser_id: request.body?.sponser_id,
	  				address: request.body?.address,
	  				state: request.body?.state,
	  				city: request.body?.city,
	  				pincode: request.body?.pincode,
	  				nominee_dob: request.body?.nominee_dob,
	  				nominee_name: request.body?.nominee_name,
	  				relation_with_nominee: request.body?.relation_with_nominee,
	  				nominee_id_proof: request.body?.nominee_id_proof,
	  				pan_card: request.body.pan_card,
	  				drivery_licence: request.body?.drivery_licence,
	  				adhar_card: request.body?.adhar_card,
	  				bank_accounts,
	  				upi_accounts
	  			}
	  		});
	  		response.send({user});

  		}catch(e){

  			console.log(e.message)

  		}

  	}

  	async updateWalletBalance(request,response){

  		try{

	  		const user = await User.updateOne({_id: request.body.id},{
	  			$set:{
	  				wallet:{
	  					amount: request.body?.amount,
	  					winning: request.body?.winning,
	  					bonus: request.body?.bonus
	  				}
	  			}
	  		});

	  		response.send({user})

  		}catch(e){

  			console.log(e.message)
  		}
  	}
 }


module.exports = new ProfileController;