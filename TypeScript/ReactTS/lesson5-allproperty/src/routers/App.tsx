import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/update/AddBlog";
import EditBlog from "../pages/admin/update/EditBlog";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Products from "../pages/Products";
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "react-use-cart";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/blogs" element={<Blogs />}></Route>
              <Route path="/admin" element={<Dashboard />}></Route>
              <Route path="/add" element={<AddBlog />}></Route>
              <Route path="/edit/:id" element={<EditBlog />}></Route>
              <Route path="/product" element={<Products />}></Route>
              <Route path="/product/:id" element={<ProductDetails />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
          </Container>
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
