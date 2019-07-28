"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.userController = new userController_1.UserController();
    }
    routes(app) {
        app.route('/user')
            .get(this.userController.getUsers)
            .post(this.userController.addNewUser);
        app.route('/contact/:contactId')
            .get(this.userController.getUserByID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=userRoute.js.map