const Controller = use("app/Controllers/Controller");
const User = use('app/Models/User');
const WalletHistory = use('app/Models/WalletHistory');

class WalletHistoryController extends Controller {

	async getTransaction(request,response)
	{
		try{
			const user = await User.find();
			response.send({user})
		}catch(e){

  			console.log(e.message)
  		}
	}
}
module.exports = new WalletHistoryController;