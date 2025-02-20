import React, { useState, useEffect } from 'react';
import Combo from '../../components/shopcategory/combo/combo';
import Snacks from '../../components/shopcategory/snacks/snacks';
import Buns from '../../components/shopcategory/buns/buns';
import HotBeverges from '../../components/shopcategory/hot/hotbeverges';
import ColdBeverges from '../../components/shopcategory/cold/coldbeverges';
import CartPage from '../CartPage/CartPage';
import './shop.css';

function Shop() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        console.log("Cart Items Updated in Shop:", cartItems);
    }, [cartItems]); 

    return (
        <>
            <div className='shop-container'>
                <p className='shop-heading'>Pick Your <span className='stuff' style={{color:"#FF6524"}}>Stuff</span></p>
                <Combo cartItems={cartItems} setCartItems={setCartItems} />
                <Snacks cartItems={cartItems} setCartItems={setCartItems} />
                <Buns cartItems={cartItems} setCartItems={setCartItems} />
                <HotBeverges cartItems={cartItems} setCartItems={setCartItems} />
                <ColdBeverges cartItems={cartItems} setCartItems={setCartItems} />
            </div>
            
            <div style={{display:"none"}}>
                <CartPage cartItems={cartItems} setCartItems={setCartItems} />
            </div>
        </>
    );
}

export default Shop;
