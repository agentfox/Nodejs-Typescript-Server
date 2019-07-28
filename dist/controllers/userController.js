"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userModel_1 = require("../models/userModel");
const bcrypt = require("bcrypt");
const User = mongoose.model('User', userModel_1.UserSchema);
class UserController {
    addNewUser(req, res) {
        const hash_password = bcrypt.hashSync(req.body.password, 10);
        const userInfo = Object.assign({}, req.body, { password: hash_password });
        let newUser = new User(userInfo);
        newUser.save((err, user) => {
            if (err) {
                res.status(400).send(err);
            }
            res.json(user);
        });
    }
    signIn(req, res) {
        User.findOne({ email: req.body.email }, function (err, user) {
            if (err)
                throw err;
            console.log(user);
        });
    }
    loginRequired(req, res, next) {
    }
    getUsers(req, res) {
        User.find({}, (err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    }
    getUserByID(req, res) {
        User.findById(req.params.userId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    deleteUser(req, res) {
        User.remove({ _id: req.params.userId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!' });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map