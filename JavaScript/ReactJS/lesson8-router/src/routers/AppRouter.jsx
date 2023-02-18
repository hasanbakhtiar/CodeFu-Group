import React from 'react'
import {BrowserRouter,  Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
        <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
        </div>
    </BrowserRouter>
  )
}

export default AppRouter