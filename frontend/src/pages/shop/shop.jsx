import React, { useState, useEffect } from 'react';
import { db, collection, getDocs } from '../../../../backend/src/firebase';
import Combo from '../../components/shopcategory/combo/combo';
import Snacks from '../../components/shopcategory/snacks/snacks';
import Buns from '../../components/shopcategory/buns/buns';
import HotBeverges from '../../components/shopcategory/hot/hotbeverges';
import ColdBeverges from '../../components/shopcategory/cold/coldbeverges';
import './shop.css';

function Shop({ cartItems, setCartItems }) {
    const [menuItems, setMenuItems] = useState([]); 

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "menu"));
                const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setMenuItems(items);
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        };
        fetchMenu();
    }, []);

    useEffect(() => {
        console.log("Cart Items Updated in Shop:", cartItems);
    }, [cartItems]); 

    
    const comboItems = menuItems.filter(item => item.category === "combos");
    const snackItems = menuItems.filter(item => item.category === "snacks");
    const bunItems = menuItems.filter(item => item.category === "buns");
    const hotBeverageItems = menuItems.filter(item => item.category === "hotBeverages");
    const coldBeverageItems = menuItems.filter(item => item.category === "coldBeverages");

    return (
        <>
            <div className='shop-container'>
                <p className='shop-heading'>Pick Your <span className='stuff' style={{color:"#FF6524"}}>Stuff</span></p>
                <Combo items={comboItems} cartItems={cartItems} setCartItems={setCartItems} />
                <Snacks items={snackItems} cartItems={cartItems} setCartItems={setCartItems} />
                <Buns items={bunItems} cartItems={cartItems} setCartItems={setCartItems} />
                <HotBeverges items={hotBeverageItems} cartItems={cartItems} setCartItems={setCartItems} />
                <ColdBeverges items={coldBeverageItems} cartItems={cartItems} setCartItems={setCartItems} />
            </div>
            
        </>
    );
}

export default Shop;
