import React from 'react'
import { connect, useDispatch } from 'react-redux'
import BlogForm from '../BlogForm'
import { editBlog, removeBlog } from '../../actions/blogAction'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const EditBlog = ({pvalue}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='my-5 text-center'>Edit Blog</h1>
        <BlogForm editblog={pvalue} onFormSubmit={items=>{
            dispatch(editBlog(pvalue.id,items))
            navigate('/dashboard')
        }} />

        <Button variant='danger' onClick={()=>{
            dispatch(removeBlog({id:pvalue.id}))
            navigate('/dashboard')
        }}>Delete</Button>
    </div>
  )
}

const mapStateToProps =(state)=>{
    const link = window.location.pathname.slice(16,999);
    return({
        pvalue:state.find(p=>p.id === link)
    })
}

export default connect(mapStateToProps)(EditBlog)