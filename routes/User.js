const Route = use("config/bootstrap");
const auth = use('app/Middleware/auth');
const UserController = use("app/Controllers/UserController");
//const ProfileController = use("app/Controllers/ProfileController");

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
