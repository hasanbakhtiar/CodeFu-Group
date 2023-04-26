import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductProvider } from './context/ProductContext';
import Counter from './reducer/Counter';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductProvider>
    <Counter />
    </ProductProvider>
  </React.StrictMode>
);
