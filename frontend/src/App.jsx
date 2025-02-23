import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import CartPage from './pages/CartPage/CartPage'
import HomePage from './pages/HomePage/HomePage'
import Checkout from './pages/checkout/checkout'
import Shop from './pages/shop/shop';

const App = () => {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/shop' element={<Shop cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path='/cart' element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path='/checkout' element={<Checkout cartItems={cartItems} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
