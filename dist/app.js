"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cmrRoute_1 = require("./routes/cmrRoute");
const todoRoute_1 = require("./routes/todoRoute");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost:27017/tsnode';
        this.routePrv = new cmrRoute_1.ContactRoutes();
        this.routeTodo = new todoRoute_1.TodoRoutes();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.routeTodo.routes(this.app);
        this.mongoSetup();
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map