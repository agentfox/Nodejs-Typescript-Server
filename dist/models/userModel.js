"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name',
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: 'Enter a email'
    },
    password: {
        type: String,
        required: 'Enter a password'
    },
    todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }],
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now,
    }
});
//# sourceMappingURL=userModel.js.map