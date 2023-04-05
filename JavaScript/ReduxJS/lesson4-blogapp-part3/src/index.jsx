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
// const blog1 = store.dispatch(addBlog({title:"hello",desc:"mello",photo:'cello'}));
// const blog2 = store.dispatch(addBlog({title:"hello2",desc:"mello2",photo:'cello2'}));
// console.log(blog1.blog.id);
// store.dispatch(editBlog(blog1.blog.id,{title:"updated",desc:"updated",photo:'updated'}))
// store.dispatch(removeBlog({id:blog2.blog.id}))
// store.dispatch(addBlog({title:"hello2",desc:"mello2",photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdUjqvxAEE4HKI0cxWhV132ytWy2EQv53NSGMI54l6A&s'}));
// store.dispatch(addBlog({title:"hello2",desc:"mello2",photo:'cello2'}));
store.dispatch(addBlog({title:"BMW X5",desc:"2022",photo:'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-x5-107-1675791495.jpg?crop=0.682xw:0.765xh;0.218xw,0.235xh&resize=640:*'}));
store.dispatch(addBlog({title:"Audi A4",desc:"2023",photo:'https://hips.hearstapps.com/hmg-prod/images/medium-6802-audia4-1654633069.jpg?crop=0.891xw:1.00xh;0.0928xw,0&resize=640:*'}));
store.dispatch(addBlog({title:"Mercedes S500",desc:"2021",photo:'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1-mercedes-benz-s500-2020-fd-hero-front.jpg'}));


// dispatch end




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>
);

