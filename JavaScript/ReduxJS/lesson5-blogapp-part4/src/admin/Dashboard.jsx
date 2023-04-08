import React from 'react'
import { Button, Table } from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { removeBlog } from '../actions/blogAction'





const Dashboard = () => {
    const pvlaue = useSelector(state=>state);
    const dispatch = useDispatch();
  return (
    <div>
        <h1 className='text-center my-5'>Admin Panel</h1>
        <LinkContainer to="/dashboard/add">
                <Button variant='success'>Add</Button>
        </LinkContainer>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      
        {[...pvlaue].reverse().map((item,i)=>{
            return  (   <tr key={i}>
                <td>{i+1}</td>
                <td><img width={100} src={item.photo} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td>
                    <LinkContainer to={`/dashboard/edit/${item.id}`}>
                    <Button variant='warning'>Edit</Button>
                    </LinkContainer>
                </td>
                <td>
                <Button variant='danger' onClick={()=>{
            dispatch(removeBlog({id:item.id}))
        }}>Delete</Button>  
                </td>
              </tr>)
        })}
     
       
      </tbody>
    </Table>
    </div>
  )
}

export default Dashboard