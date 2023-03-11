import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import Header from './components/Header'
import { ProductContext, ProductProvider } from './context/ProductContext'
import Home from './pages/Home'
import Shop from './pages/Shop'

const App = () => {
    const [b] = useContext(ProductContext);
    return (
        
        <BrowserRouter>
            <CartProvider>
                    <Header />
                    <Container>
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/shop' element={<Shop />}></Route>
                        </Routes>
                    </Container>
            </CartProvider>
        </BrowserRouter>
    )
}

export default App