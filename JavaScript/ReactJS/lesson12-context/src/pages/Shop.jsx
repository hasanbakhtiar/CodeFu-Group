import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard';
import { ProductContext } from '../context/ProductContext'

const Shop = () => {

    const [products] = useContext(ProductContext);
    return (
        <>
            <h1 className='text-center my-5'>Shop Page</h1>
            <Row className='g-5'>
                {products.map(item => {
                    return <SingleCard photo={item.image} title={item.name} date={item.creationAt} key={item.id} />
                })}
            </Row>

        </>
    )
}

export default Shop