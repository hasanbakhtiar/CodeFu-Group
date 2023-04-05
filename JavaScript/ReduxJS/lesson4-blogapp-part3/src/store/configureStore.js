import { createStore } from "redux";
import { blogReducer } from "../reducers/blogReducer";

// store start
const configureStore = ()=>{
    const store = createStore(blogReducer);
    return store;
}
// store end

export default configureStore;