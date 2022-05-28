import {Schema} from "mongoose";

export const LogEntrySchema = new Schema({
    title: {type: String},
}, {
    timestamps: true,
});

LogEntrySchema.set('toJSON', {
    virtuals: true
});
