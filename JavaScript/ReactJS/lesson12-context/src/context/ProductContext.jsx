import axios from "axios";
import { useState,createContext, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider =(props)=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchApi = async()=>{
            const comingData = await axios.get('https://fakestoreapi.com/products')
            setProducts(comingData.data);
        }
        fetchApi()
    },[])

  return  <ProductContext.Provider value={[products,setProducts]}>
        {props.children}
    </ProductContext.Provider>
}