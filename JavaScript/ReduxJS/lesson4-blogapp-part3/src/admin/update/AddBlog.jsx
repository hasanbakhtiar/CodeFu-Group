import React from 'react'
import { Container } from 'react-bootstrap'
import BlogForm from '../BlogForm'
import { useDispatch } from 'react-redux'
import { addBlog } from '../../actions/blogAction'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <Container>
        <h1 className='text-center my-5'>Add New Blog</h1>
        <BlogForm onFormSubmit={items=>{
            dispatch(addBlog(items));
            navigate('/dashboard');
        }}/>
    </Container>
  )
}

export default AddBlog