import {Schema} from "mongoose";

export const ExampleSchema = new Schema({
    name: {type: String},
}, {
    timestamps: true,
});

ExampleSchema.set('toJSON', {
    virtuals: true
});

ExampleSchema.index({
    name: 1
}, {unique: true});
