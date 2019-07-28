"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoController_1 = require("../controllers/TodoController");
class TodoRoutes {
    constructor() {
        this.todoController = new TodoController_1.TodoController();
    }
    routes(app) {
        app.route('/todo')
            .get(this.todoController.getTodos)
            .post(this.todoController.addNewTodo);
        app.route('/contact/:contactId')
            .get(this.todoController.getTodoByID)
            .put(this.todoController.updateTodo)
            .delete(this.todoController.deleteTodo);
    }
}
exports.TodoRoutes = TodoRoutes;
//# sourceMappingURL=todoRoute.js.map