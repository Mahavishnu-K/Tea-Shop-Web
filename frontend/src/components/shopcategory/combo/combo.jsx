import React from 'react';
import ItemCard from './../../itemcard/itemcard';
import './combo.css';
import tea from './../../../assets/tea.png';
import coffee from './../../../assets/coffee.png';
import rosemilk from './../../../assets/rosemilk.png';
import hazelnutshake from './../../../assets/hazelnutshake.png';

const getImageForItem = (title) => {
    const imageMap = {
        "Tea": tea,
        "Coffee": coffee,
        "Rose Milk": rosemilk,
        "Hazelnut Shake": hazelnutshake
    };
    return imageMap[title] || ''; 
};

function Combo({ items, cartItems, setCartItems }) {
    return (
        <div className='shop-combos'>
            <div className='shop-header'>
                <h3>COMBOS</h3>
                <p className='shop-header-para'>We have {items.length} items in combo variety</p>
                <div className='bottom-line'></div>
            </div>
            <div className='combo-card-container'>
                <div className='ul-list'>
                    <ul className='combo-item-list'>
                        {items.map((item, index) => (
                            <li key={index}>
                                <ItemCard 
                                    image={getImageForItem(item.title)}
                                    title={item.title} 
                                    description={item.description} 
                                    price={item.price} 
                                    cartItems={cartItems} 
                                    setCartItems={setCartItems} 
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Combo;
