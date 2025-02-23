import React from 'react';
import ItemCard from './../../itemcard/itemcard';
import './snacks.css';
import chillicorn from './../../../assets/chillicorn.png';
import peanut from './../../../assets/peanut.png';
import sweetcorn from './../../../assets/sweetcorn.png';

const getImageForItem = (title) => {
    const imageMap = {
        "Chilli Corn": chillicorn,
        "Peanut": peanut,
        "Sweet Corn": sweetcorn
    };
    return imageMap[title] || '';
};

function Snacks({ items, cartItems, setCartItems }) {
    return (
        <div className='shop-snacks'>
            <div className='shop-header'>
                <h3>SNACKS</h3>
                <p className='shop-header-para'>We have {items.length} items for Snack</p>
                <div className='bottom-line'></div>
            </div>
            <div className='snack-card-container'>
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

export default Snacks;
