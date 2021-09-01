import { combineReducers } from "redux";
import noteReducer from "./NotesReducer";

const rootReducer = combineReducers({
    notes : noteReducer,
});

export type reducerType = ReturnType<typeof rootReducer>
export default rootReducer;
