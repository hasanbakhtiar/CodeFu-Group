import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import './assets/bootstrap.min.css';
import App from './routers/App';
import { Provider } from 'react-redux';
import { getBlogsFromDatabase } from './actions/blogAction';
const store = configureStore();



const result = (
  <Provider store={store}>
      <App />
  </Provider>
)
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})
