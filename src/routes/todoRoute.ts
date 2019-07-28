import { TodoController } from "../controllers/TodoController";
export class TodoRoutes {    
    public todoController: TodoController = new TodoController();
    public routes(app): void {   

        // TODO
        app.route('/todo') 
        // GET endpoint 
        .get(this.todoController.getTodos)        
        // POST endpoint
        .post(this.todoController.addNewTodo)


        // TODO DETAIL
        app.route('/contact/:contactId')
        // get specific contact
        .get(this.todoController.getTodoByID)
        // update contact
        .put(this.todoController.updateTodo)
        // delete contact
        .delete(this.todoController.deleteTodo)
    }
}