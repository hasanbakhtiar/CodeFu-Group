import React, { useContext, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SingleCard from '../components/SingleCard';
import { ProductContext } from '../context/ProductContext'

const Search = () => {
    const [query,setQuery] = useState();
    const [products] = useContext(ProductContext);
    return (
        <>
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <h1 className='text-center my-4'>Search products</h1>
                <div className="col-6 my-4">
                    <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter product name"
                        onChange={e=>setQuery(e.target.value)}
                    />
                    <Button variant="outline-secondary" >
                        Search
                    </Button>
                </InputGroup>
                </div>
                <Row className='g-5'>
                    {products.filter(fd=>fd.title.toLocaleLowerCase().includes(query)).map(item => {
                        return <SingleCard alldata={item} photo={item.image} title={item.title}
                            price={item.price} key={item.id} />
                    })}
                </Row>
            </div>

        </>
    )
}

export default Search