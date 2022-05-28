// Lazy Begin Imports
import {ILogEntry} from "../log-entry.model";
import {IStory} from "./story.model";
// Lazy End Imports

// Lazy Begin
export interface IStoryLogEntry extends ILogEntry {
    story: IStory;
}

// Lazy End
