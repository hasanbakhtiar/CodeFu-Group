import { v4 as uuid } from 'uuid';


// action start
export const addBlog = ({title,desc,photo})=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title,
    desc,
    photo
  }
})

export const editBlog = (id,udpate)=>({
    type:"UPDATE_BLOG",
    id,
    udpate
})

export const removeBlog = ({id})=>({
    type:"REMOVE_BLOG",
    myid:id
})
    

// action end