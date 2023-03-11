import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { ProductContext, ProductProvider } from './context/ProductContext';


const Main = ()=>{
  const [products] = useContext(ProductContext);
  
return(
<>
{products.length === 0 ? <h1>Loading...</h1>:<App />}

</>
)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
   <Main />
   </ProductProvider>
  </React.StrictMode>
);
