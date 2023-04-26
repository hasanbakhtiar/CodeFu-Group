import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { productType } from "../config";


interface propType {
    children:any
}

export const  ProductContext = createContext<productType[] | any[]>([]);

export const ProductProvider = (props:propType)=>{

    const [productitem,setProductitem] = useState<productType[]>([]);
    
    useEffect(()=>{
            axios
            .get('https://fakestoreapi.com/products')
            .then((res:any)=>{setProductitem(res.data)})
    },[])

    return <ProductContext.Provider value={[productitem,setProductitem]}>
            {props.children}
    </ProductContext.Provider>
    
    
}