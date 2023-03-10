const Route = use("config/bootstrap");
const RegisterUserController = use("app/Controllers/Auth/RegisterUserController");
const LoginUserController = use("app/Controllers/Auth/LoginUserController");


/*
*------------------------------------------------------------------------
*	user registration Routes 
*------------------------------------------------------------------------
*/
Route.post('/api/user/registration',async(...args) => RegisterUserController.store(...args) );

Route.post('/api/verify/otp',async(...args) => RegisterUserController.verifyOtp(...args) );

Route.post('/api/verify/sponser',async(...args) => RegisterUserController.verifySponser(...args));
/*
*------------------------------------------------------------------------
*	user registration Routes End
*------------------------------------------------------------------------
*/

/*
*------------------------------------------------------------------------
*	user registration Routes 
*------------------------------------------------------------------------
*/
Route.post('/api/user/login',async(...args) => LoginUserController.login(...args) );

Route.post('/api/otp/verify',async(...args) => LoginUserController.verifyOtp(...args) );

//Route.get('/api/logout',async(...args) => LoginUserController.logout(...args) );
/*
*------------------------------------------------------------------------
*	user registration Routes End
*------------------------------------------------------------------------
*/