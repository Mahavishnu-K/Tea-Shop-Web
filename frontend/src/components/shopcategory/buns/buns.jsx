import React from 'react';
import ItemCard from './../../itemcard/itemcard';
import './buns.css';
import bunbutterjam from './../../../assets/bunbutterjam.png';
import creambun from './../../../assets/creambun.png';
import palkovabun from './../../../assets/palkovabun.png';

const getImageForItem = (title) => {
    const imageMap = {
        "Bun Butter Jam": bunbutterjam,
        "Cream Bun": creambun,
        "Palkova Bun": palkovabun
    };
    return imageMap[title] || '';
};

function Buns({ items, cartItems, setCartItems }) {
    return (
        <div className='shop-buns'>
            <div className='shop-header'>
                <h3>BUNS</h3>
                <p className='shop-header-para'>We have {items.length} items in Buns variety</p>
                <div className='bottom-line'></div>
            </div>
            <div className='buns-card-container'>
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

export default Buns;
