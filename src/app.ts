import * as  express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import { ContactRoutes } from "./routes/cmrRoute";
import { TodoRoutes } from "./routes/todoRoute";
import { UserRoutes } from "./routes/userRoute";
import { verifyUser } from "./controllers/userController";
class App {
    public mongoUrl: string = 'mongodb://localhost:27017/tsnode';
    public app: express.Application;
    public routePrv: ContactRoutes = new ContactRoutes();
    public routeTodo: TodoRoutes = new TodoRoutes();
    public routeUser: UserRoutes = new UserRoutes();
    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.routeTodo.routes(this.app);
        this.routeUser.routes(this.app);
        this.mongoSetup();      
    }
    private mongoSetup(): void{
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });   
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // verify user
        this.app.use(verifyUser)
    }

}

export default new App().app;
