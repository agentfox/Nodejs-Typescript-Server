"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.Todo = new Schema({
    header: {
        type: String,
        required: 'Enter a header'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
    todolistId: {
        type: Schema.Types.ObjectId
    },
    userId: {
        type: Schema.Types.ObjectId
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
//# sourceMappingURL=todo.js.map