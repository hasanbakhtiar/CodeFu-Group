import { applyMiddleware, createStore,compose } from 'redux';
import thunk from 'redux-thunk';
import { blogReducer } from '../reducers/blogreducer';

const composeEnhancers =  compose;


const configureStore=() => {
    const store = createStore(
        blogReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;
}

export default configureStore;