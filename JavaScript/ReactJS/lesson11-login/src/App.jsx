import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import Home from './pages/Home'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/home' element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App