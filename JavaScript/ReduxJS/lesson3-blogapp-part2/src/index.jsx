import React from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from './store/configureStore';
import { addBlog, editBlog, removeBlog } from './actions/blogAction';
import './assets/bootstrap.min.css';
import App from './routers/App';
import { Provider } from 'react-redux';
const store = configureStore();

// get state start
store.subscribe(()=>{
  console.log(store.getState());
})
// get state end

// dispatch start
const blog1 = store.dispatch(addBlog({title:"hello",desc:"mello",photo:'cello'}));
const blog2 = store.dispatch(addBlog({title:"hello2",desc:"mello2",photo:'cello2'}));
console.log(blog1.blog.id);
store.dispatch(editBlog(blog1.blog.id,{title:"updated",desc:"updated",photo:'updated'}))
store.dispatch(removeBlog({id:blog2.blog.id}))
store.dispatch(addBlog({title:"hello2",desc:"mello2",photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdUjqvxAEE4HKI0cxWhV132ytWy2EQv53NSGMI54l6A&s'}));
store.dispatch(addBlog({title:"hello2",desc:"mello2",photo:'cello2'}));
// dispatch end




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>
);

