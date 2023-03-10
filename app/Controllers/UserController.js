const User = use('app/Models/User');
const Controller = use('app/Controllers/Controller');

class UserController extends Controller{

	async index(request,response){

		const user = await User.find();

		return response.json({
			data:user
		})
	}

	async show(request,response){

		return response.json({
			data:"success"
		})
	}

	async store(request,response){

		const v = this.validator(request.body,{
			name: 'required',
			email: 'required'
		});
		const matched = await v.check();

		if(!matched){
			return response.json({
				error: v.errors
			})		
		}


		
		return response.json({
			data:"success"
		})	
	}

	async update(request,response){

		return response.json({
			data:"success"
		})
	}

	async delete(request,response){

		return response.json({
			data:"success"
		})
	}
}

module.exports = new UserController;