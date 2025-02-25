import React from 'react'; 
import ItemCard from './../../itemcard/itemcard';
import './hotbeverges.css';
import badam from './../../../assets/badammilk.png';
import blackTea from './../../../assets/blacktea.png';
import coffee from './../../../assets/coffee.png';
import normalTea from './../../../assets/normaltea.png';


const getImageForItem = (title) => {
    const imageMap = {
        "Badam Milk": badam,
        "Black Tea": blackTea,
        "Coffee": coffee,
        "Normal Tea": normalTea
    };
    return imageMap[title] || ''; 
};

function HotBeverges({ items, cartItems, setCartItems }) {
    return (
        <div className='shop-hot'>
            <div className='shop-header'>
                <h3>HOT BEVERAGES</h3>
                <p className='shop-header-para'>We have {items.length} items in Hot Beverages</p>
                <div className='bottom-line'></div>
            </div>
            <div className='hot-card-container'>
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

export default HotBeverges;
