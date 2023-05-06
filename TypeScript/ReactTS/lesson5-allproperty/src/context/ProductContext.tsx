import axios from "axios";
import { createContext, useEffect, useState } from "react"
interface propType{
    children:any[]
  }

  type AppContextType={}

export const ProductContext = createContext<AppContextType|any>(null);


export const ProductProvider = (props:propType) => {
    const [product,setProduct] = useState([]);

      
    useEffect(()=>{
        axios
        .get('https://fakestoreapi.com/products')
        .then((res:any)=>{setProduct(res.data)
          console.log(res);
        })
      },[])

  return (
    <ProductContext.Provider value={[product,setProduct]}>
        {props.children}
    </ProductContext.Provider>
  )
}
