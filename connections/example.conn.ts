import {createConnection, Model} from "mongoose";
// Lazy Begin Imports
import {ExampleSchema} from "../schemas/example/example.schema";
import {IExample} from "../models/example/example.model";
// Lazy End Imports

const uri = process.env.MONGO_URI_EXAMPLE;
const options = {
};
export const ExampleConn = createConnection(uri, options);

// Lazy Begin
export const Example: Model<IExample> = ExampleConn.model<IExample>('Example', ExampleSchema);
// Lazy End
