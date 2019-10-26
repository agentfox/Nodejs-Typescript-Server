import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface ITodo extends mongoose.Document {
    header: string;
    description: string;
    priority: number;
    owner: string; 
}

export const TodoSchema = new Schema({
    header: {
        type: String,
        required: 'Enter a header'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
    priority: {
        type: Number,
        required: 'Enter a number'
    },
    owner: { 
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});