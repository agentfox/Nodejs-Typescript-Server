import { UserController } from "../controllers/userController";
export class UserRoutes {    
    public userController: UserController = new UserController();
    public routes(app): void {   

        // TODO
        // app.route('/user') 
        // GET endpoint 
        //.get(this.userController.getUsers)        
        // POST endpoint
        app.route('/signin')
        .post(this.userController.signIn)
        app.route('/signup')
        .post(this.userController.addNewUser)


        // // TODO DETAIL
        // app.route('/contact/:contactId')
        // // get specific contact
        // .get(this.userController.getUserByID)
        // // update contact
        // .put(this.userController.updateUser)
        // // delete contact
        // .delete(this.userController.deleteUser)
    }
}