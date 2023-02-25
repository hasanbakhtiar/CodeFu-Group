import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { url } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data));
    }, [])
    const productdetails = products.find(p => p.id == url);
    return (
        <>
            {productdetails == undefined ? <img className='w-100 h-100' src="https://blog.stackfindover.com/wp-content/uploads/2021/09/Pure-CSS-Windows-10-Preloader.gif" alt="" /> : <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={productdetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">{productdetails.title}</h1>
                        <p className="lead">{productdetails.description}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <LinkContainer to='/shop'>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Back</button>
                            </LinkContainer>
                        </div>
                    </div>
                </div>
            </div>}
        </>

    )
}

export default ProductDetails