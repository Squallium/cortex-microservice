import {Schema} from "mongoose";

export const PublisherSchema = new Schema({
    name: {type: String},
}, {
    timestamps: true,
});

PublisherSchema.set('toJSON', {
    virtuals: true
});

PublisherSchema.index({
    name: 1
}, {unique: true});
