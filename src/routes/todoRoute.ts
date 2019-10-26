import { TodoController } from "../controllers/TodoController";
import { UserController } from "../controllers/userController";
export class TodoRoutes {    
    public todoController: TodoController = new TodoController();
    public userController: UserController = new UserController();
    public routes(app): void {   

        // TODO
        app.route('/todo') 
        // GET endpoint 
        .get(this.todoController.getTodos)        
        // POST endpoint
        .post(this.userController.loginRequired, this.todoController.addNewTodo)


        // TODO DETAIL
        app.route('/todo/:TodoId')
        // get specific contact
        .get(this.userController.loginRequired, this.todoController.getTodoByID)
        // update contact
        .put(this.userController.loginRequired, this.todoController.updateTodo)
        // delete contact
        .delete(this.userController.loginRequired, this.todoController.deleteTodo)
    }
}