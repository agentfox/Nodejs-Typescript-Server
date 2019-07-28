import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ITodo } from "./todoModel";
const Schema = mongoose.Schema;

export interface IUser extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    todos: ITodo[];
    comparePassword(inputPassword: string): boolean;
}
export const UserSchema = new Schema({
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
UserSchema.methods.comparePassword = function(password: String): Promise<Boolean> {
    return bcrypt.compare(password, this.password);
}


