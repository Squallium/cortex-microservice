import {createConnection, Model} from "mongoose";
// Lazy Begin Imports
import {PublisherSchema} from "../schemas/comic/publisher.schema";
import {IPublisher} from "../models/comic/publisher.model";
// Lazy End Imports

const uri = process.env.MONGO_URI_COMIC;
const options = {
};
export const ComicConn = createConnection(uri, options);

// Lazy Begin
export const Publisher: Model<IPublisher> = ComicConn.model<IPublisher>('Publisher', PublisherSchema);
// Lazy End
