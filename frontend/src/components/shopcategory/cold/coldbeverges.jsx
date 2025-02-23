import React from 'react';
import ItemCard from './../../itemcard/itemcard';
import './coldbeverges.css';
import hazelnutshake from './../../../assets/hazelnutshake.png';
import icecream from './../../../assets/icecream.png';
import orangejuice from './../../../assets/orangejuice.png';
import rosemilk from './../../../assets/rosemilk.png';

const getImageForItem = (title) => {
    const imageMap = {
        "Hazelnut Shake": hazelnutshake,
        "Ice Cream": icecream,
        "Orange Juice": orangejuice,
        "Rose Milk": rosemilk
    };
    return imageMap[title] || ''; 
};

function ColdBeverges({ items, cartItems, setCartItems }) {
    return (
        <div className='shop-cold'>
            <div className='shop-header'>
                <h3>COLD BEVERAGES</h3>
                <p className='shop-header-para'>We have {items.length} items in Cold Beverages</p>
                <div className='bottom-line'></div>
            </div>
            <div className='cold-card-container'>
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

export default ColdBeverges;
