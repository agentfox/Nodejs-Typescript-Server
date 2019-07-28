import * as mongoose from 'mongoose';
import { TodoSchema, ITodo } from '../models/todoModel';
import { Request, Response } from 'express';

const Todo = mongoose.model<ITodo>('Todo', TodoSchema);
export class TodoController {
    public addNewTodo (req: Request, res: Response) {           
        let newTodo = new Todo(req.body);
        newTodo.save((err, td) => {
            if(err){
                res.send(err);
            }    
            res.json(td);
        });
    }
    public getTodos (req: Request, res: Response) {           
        Todo.find({}, (err, tds) => {
            if(err){
                res.send(err);
            }
            res.json(tds);
        });
    }
    public getTodoByID (req: Request, res: Response) {           
        Todo.findById(req.params.TodoId, (err, td) => {
            if(err){
                res.send(err);
            }
            res.json(td);
        });
    }

    public updateTodo (req: Request, res: Response) {           
        Todo.findOneAndUpdate({ _id: req.params.TodoId }, req.body, (err, td) => {
            if(err){
                res.send(err);
            }
            res.json(td);
        });
    }
    public deleteTodo (req: Request, res: Response) {           
        Todo.remove({ _id: req.params.TodoId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted Todo!'});
        });
    }
}