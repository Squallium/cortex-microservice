import {createConnection, Model} from "mongoose";
// Lazy Begin Imports
import {StorySchema} from "../schemas/cortex/story.schema";
import {IStory} from "../models/cortex/story.model";
// Lazy End Imports

const uri = process.env.MONGO_URI_CORTEX;
const options = {
};
export const CortexConn = createConnection(uri, options);

// Lazy Begin
export const Story: Model<IStory> = CortexConn.model<IStory>('Story', StorySchema);
// Lazy End
