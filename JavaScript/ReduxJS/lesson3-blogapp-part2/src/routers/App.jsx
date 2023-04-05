import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Blogs from '../pages/Blogs'
import BlogDetails from '../pages/BlogDetails'
import NotFoundPage from '../pages/NotFoundPage'
import Header from '../components/Header'
import { Container } from 'react-bootstrap'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
          <Container>
          <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
                <Route path="/blogs/:id" element={<BlogDetails />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </Container>
        </BrowserRouter>
    )
}

export default App