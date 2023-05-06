import {v4 as uuid} from "uuid"

export const addBlog = ({title,desc,img}:any)=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title,
    desc,
    img
  }
})

export const editBlog =(id:string,update:string[])=>({
  type:"UPDATE_BLOG",
  id,
  update
})


export const removeBlog =({id}:any)=>({
  type:"REMOVE_BLOG",
  id
})