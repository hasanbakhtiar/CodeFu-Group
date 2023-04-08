import { createStore, applyMiddleware, compose } from 'redux'
import { blogReducer } from "../reducers/blogReducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
   blogReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
export default configureStore;