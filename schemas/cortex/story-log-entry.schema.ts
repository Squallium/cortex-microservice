import {Schema} from "mongoose";
import {extendSchema} from '../../base/utils/extend-schema';
import {LogEntrySchema} from '../log-entry.schema';

export const StoryLogEntrySchema = extendSchema(LogEntrySchema, {
    story: {type: Schema.Types.ObjectId, ref: 'Story'},
}, {
    timestamps: true,
});

StoryLogEntrySchema.index({
    story: 1,
    createdAt: 1
}, {unique: true});
