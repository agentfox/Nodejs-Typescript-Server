"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const todoModel_1 = require("../models/todoModel");
const Todo = mongoose.model('Todo', todoModel_1.TodoSchema);
class TodoController {
    addNewTodo(req, res) {
        let newTodo = new Todo(req.body);
        newTodo.save((err, td) => {
            if (err) {
                res.send(err);
            }
            res.json(td);
        });
    }
    getTodos(req, res) {
        Todo.find({}, (err, tds) => {
            if (err) {
                res.send(err);
            }
            res.json(tds);
        });
    }
    getTodoByID(req, res) {
        Todo.findById(req.params.TodoId, (err, td) => {
            if (err) {
                res.send(err);
            }
            res.json(td);
        });
    }
    updateTodo(req, res) {
        Todo.findOneAndUpdate({ _id: req.params.TodoId }, req.body, (err, td) => {
            if (err) {
                res.send(err);
            }
            res.json(td);
        });
    }
    deleteTodo(req, res) {
        Todo.remove({ _id: req.params.TodoId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted Todo!' });
        });
    }
}
exports.TodoController = TodoController;
//# sourceMappingURL=TodoController.js.map