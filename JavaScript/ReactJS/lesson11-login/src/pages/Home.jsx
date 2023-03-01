import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import SingleCard from '../components/SingleCard';

const Home = () => {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        axios
        .get('http://127.0.0.1:5500/src/data/products.json')
        .then(res=>{setProducts(res.data)})
    },[])
    
  return (
  <Container>
    <h1 className='text-center my-5'>Admin Panel</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
       {products.map((item,i)=>{
        return <SingleCard count={i} key={i}  photo={item.picSimple} title={item.title} price={item.price}/>
       })}
      
      </tbody>
    </Table>
  </Container>
  )
}

export default Home