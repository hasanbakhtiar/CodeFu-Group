import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    // const fetchApi = async()=>{
    //   const comingData = await axios.get('https://fakestoreapi.com/products')
    //   setProducts(comingData.data)
    // }
    // fetchApi();

    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))

  }, [])


  return (
    <>
      <h1 className='text-center my-5'>Products</h1>
      <Row className='g-5'>
        {products.length === 0 ? <img src="https://blog.stackfindover.com/wp-content/uploads/2021/09/Pure-CSS-Windows-10-Preloader.gif" alt="" /> :
          products.map(item => (
            <SingleCard
              key={item.id}
              title={item.title}
              price={item.price}
              photo={item.image}
              desc={item.description}
              id={item.id}
            />
          ))}
      </Row>
    </>
  )
}

export default Shop