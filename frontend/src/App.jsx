import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import CartPage from './pages/CartPage/CartPage'
import HomePage from './pages/HomePage/HomePage'
import OrderPage from './pages/Orderpage/Orderpage'
import Shop from './pages/shop/shop';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/order' element={<OrderPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
