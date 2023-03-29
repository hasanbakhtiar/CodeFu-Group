import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';



// action start
const addblog = ({title,desc,photo})=>({
  type:"ADD_BLOG",
  blog:{
    title,
    desc,
    photo
  }
})
// action end

// reducer start
const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.blog];
    case "ADD_UPDATE":
    case "ADD_REMOVE":
    default:
      return state;
  }
}
// reducer end

// store start
const store = createStore(blogReducer);
// store end


// get state start
store.subscribe(()=>{
  console.log(store.getState());
})
// get state end

// dispatch start
store.dispatch(addblog({title:"hello",desc:"mello",photo:'cello'}))
// dispatch end




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello</h1>
  </React.StrictMode>
);

