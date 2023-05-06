import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
    const [product] = useContext(ProductContext);
    const {id} = useParams();

    const detailsdata = product.find((p:any)=>p.id == id);
    
    
  return (
    <div>
        <img src={detailsdata.image} alt="" />
        {detailsdata.title}
        {detailsdata.desc}
    </div>
  )
}

export default ProductDetails