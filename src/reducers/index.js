import { combineReducers } from "redux";
import PostReducer from "./reducerPosts";

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
