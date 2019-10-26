import * as mongoose from 'mongoose';
import { UserSchema, IUser } from './userModel';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from "../utils/config";

const User = mongoose.model<IUser>('User', UserSchema); // create user model
export interface IGetUserAuthInfoRequest extends Request {
  user?: any // or any other type
}
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
            if (!user) {
              res.status(401).json({ message: 'Authentication failed. User not found.' });
            } else if (user) {
              if (!user.comparePassword(req.body.password) ) {
                res.status(401).json({ message: 'Authentication failed. Wrong password.' });
              } else {
                return res.json({token: jwt.sign({ email: user.email, name: user.name, _id: user._id}, `${JWT_SECRET_KEY}`)});
              }
            }
          });
    }
    public loginRequired (req: IGetUserAuthInfoRequest, res: Response, next: Function) {
      if (req.user) {
        next();
      } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
      }
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
export const verifyUser = function(req: IGetUserAuthInfoRequest, res: Response, next: Function) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], `${JWT_SECRET_KEY}`, function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
}