import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { ProductContext, ProductProvider } from './context/ProductContext';


const Main = () => {
  const [products] = useContext(ProductContext);

  return (
    <>
      {products.length === 0 ? <div style={{ width: "100%", height: "100vh" }} className="d-flex align-items-center justify-content-center"> <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" /></div> : <App />}

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
