const Route = use("config/bootstrap");
const auth = use('app/Middleware/auth');
const UserController = use("app/Controllers/UserController");
const ProfileController = use("app/Controllers/ProfileController");
//const SMS = use("app/Helpers/SMS");

/*
*------------------------------------------------------------------------
*	User Routes Start
*------------------------------------------------------------------------
*/
Route.get('/api/users',async(...args) => UserController.index(...args) );

Route.get('/api/user/:id',async(...args) => UserController.show(...args) );

Route.post('/api/user',async(...args) => UserController.store(...args) );

Route.put('/api/user/:id',async(...args) => UserController.update(...args) );

Route.delete('/api/user/:id',async(...args) => UserController.delete(...args) );

/*
*------------------------------------------------------------------------
*	User Routes End
*------------------------------------------------------------------------
*/
//Route.post('/api/sms', auth, async(...args) => ProfileController.demo(...args))

Route.post('/api/profile', auth, async(...args) => ProfileController.updateProfile(...args) );
Route.post('/api/update/wallet', auth, async(...args) => ProfileController.updateWalletBalance(...args) );
Route.get('/api/my-team', auth, async(...args) => ProfileController.myTeam(...args) );

Route.get('/api/auth', auth, async(...args) => ProfileController.auth(...args) );
Route.get('/api/transactions', auth, async(...args) => ProfileController.transaction(...args) );



