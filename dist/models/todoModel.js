"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.TodoSchema = new Schema({
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
//# sourceMappingURL=todoModel.js.map