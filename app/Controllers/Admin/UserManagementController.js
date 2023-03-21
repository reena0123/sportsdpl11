const Controller = use("app/Controllers/Controller");
const User = use('app/Models/User');


class UserManagementController extends Controller {

	async getUser(request,response)
	{
		try{
			const user = await User.find();
			response.send({user})
		}catch(e){

  			console.log(e.message)
  		}
	}
}
module.exports = new UserManagementController;