import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { ProductProvider } from './context/ProductContext'
import Home from './pages/Home'
import Shop from './pages/Shop'

const App = () => {
    return (
        <BrowserRouter>
        <ProductProvider>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/shop' element={<Shop />}></Route>
                </Routes>
            </Container>
            </ProductProvider>
        </BrowserRouter>
    )
}

export default App