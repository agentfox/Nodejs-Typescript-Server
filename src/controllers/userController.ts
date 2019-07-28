import * as mongoose from 'mongoose';
import { UserSchema, IUser } from '../models/userModel';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const User = mongoose.model<IUser>('User', UserSchema); // create user model
export class UserController {
    public addNewUser (req: Request, res: Response) {           
        const hash_password = bcrypt.hashSync(req.body.password, 10);
        const userInfo = {...req.body, password: hash_password};
        const newUser = new User(userInfo);
        newUser.save((err, user) => {
            if(err){
                res.status(400).send(err);
            }    
            res.json(user);
        });
    }
    public signIn (req: Request, res: Response) {
        User.findOne({email: req.body.email}, function(err, user) {
            if (err) throw err;
            console.log(user);
            if (!user) {
              res.status(401).json({ message: 'Authentication failed. User not found.' });
            } else if (user) {
              if (!user.comparePassword(req.body.password) ) {
                res.status(401).json({ message: 'Authentication failed. Wrong password.' });
              } else {
                return res.json({token: jwt.sign({ email: user.email, name: user.name, _id: user._id}, 'RESTFULAPIs')});
              }
            }
          });
    }
    public loginRequired (req: Request, res: Response, next) {
        
    }
    // public getUsers (req: Request, res: Response) {           
    //     User.find({}, (err, users) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(users);
    //     });
    // }
    // public getUserByID (req: Request, res: Response) {           
    //     User.findById(req.params.userId, (err, user) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(user);
    //     });
    // }

    // public updateUser (req: Request, res: Response) {           
    //     User.findOneAndUpdate({ _id: req.params.userId }, req.body, (err, user) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(user);
    //     });
    // }
    // public deleteUser (req: Request, res: Response) {           
    //     User.remove({ _id: req.params.userId }, (err) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json({ message: 'Successfully deleted user!'});
    //     });
    // }
}
