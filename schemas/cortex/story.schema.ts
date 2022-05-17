import {Schema} from "mongoose";

export const StorySchema = new Schema({
    name: {type: String},
}, {
    timestamps: true,
});

StorySchema.set('toJSON', {
    virtuals: true
});

StorySchema.index({
    name: 1
}, {unique: true});
