import React, { useContext, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard';
import { ProductContext } from '../context/ProductContext'

const Shop = () => {
    const [products] = useContext(ProductContext);
    const [data,setData] = useState(products);
    const filterCategory = (catItem)=>{
        const result = products.filter(item=>(
            item.category === catItem
        ))
        setData(result)
        
    }
    
    return (
        <>
            <h1 className='text-center my-5'>Shop Page</h1>
            <div className='my-5'>
                <Button className='ms-4' onClick={()=>{filterCategory('men\'s clothing')}}>Men</Button>
                <Button className='ms-4' onClick={()=>{filterCategory('women\'s clothing')}}>Women</Button>
                <Button className='ms-4' onClick={()=>{filterCategory('jewelery')}}>Jewelery</Button>
            </div>
            <Row className='g-5'>
                {data.map(item => {
                    return <SingleCard alldata={item} photo={item.image} title={item.title} 
                    price={item.price} key={item.id} />
                })}
            </Row>

        </>
    )
}

export default Shop