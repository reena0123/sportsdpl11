const Route = use("config/bootstrap");
const auth = use('app/Middleware/auth');
const UserManagementController = use("app/Controllers/Admin/UserManagementController");

/*
*------------------------------------------------------------------------
*	Admin Routes
*------------------------------------------------------------------------
*/
Route.get('/admin/api/users',async(...args) => UserManagementController.getUser(...args))