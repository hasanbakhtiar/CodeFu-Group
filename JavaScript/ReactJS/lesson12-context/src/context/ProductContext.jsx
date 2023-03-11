import axios from "axios";
import { useState,createContext, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider =(props)=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchApi = async()=>{
            const comingData = await axios.get('https://api.escuelajs.co/api/v1/categories')
            setProducts(comingData.data);
        }
        fetchApi()
    },[])

  return  <ProductContext.Provider value={[products,setProducts]}>
        {props.children}
    </ProductContext.Provider>
}