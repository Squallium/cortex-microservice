import {createConnection, Model} from "mongoose";
// Lazy Begin Imports
import {StorySchema} from "../schemas/cortex/story.schema";
import {IStory} from "../models/cortex/story.model";
import {StoryLogEntrySchema} from "../schemas/cortex/story-log-entry.schema";
import {IStoryLogEntry} from "../models/cortex/story-log-entry.model";
// Lazy End Imports

const uri = process.env.MONGO_URI_CORTEX;
const options = {
};
export const CortexConn = createConnection(uri, options);

// Lazy Begin
export const Story: Model<IStory> = CortexConn.model<IStory>('Story', StorySchema);
export const StoryLogEntry: Model<IStoryLogEntry> = CortexConn.model<IStoryLogEntry>('StoryLogEntry', StoryLogEntrySchema);
// Lazy End
