import React from 'react';
import ItemCard from './../../itemcard/itemcard';
import tea from './../../../assets/PopularCategories/tea.png';
import './combo.css';

function Combo({ cartItems, setCartItems }) {
    return (
        <div className='shop-combos'>
            <div className='shop-header'>
                <h3>COMBOS</h3>
                <p className='shop-header-para'>We have 19 items in combo variety</p>
                <div className='bottom-line'></div>
            </div>
            <div className='ul-list'>
                <ul className='combo-item-list'>
                    <li>
                        <ItemCard image={tea} title="Tea" description="Tea [Single, 150 ml] with Cutlet [1 Piece]" price={25} cartItems={cartItems} setCartItems={setCartItems} />
                        <ItemCard image={tea} title="Coffee" description="Coffee [Single, 150 ml] with Biscuit [2 Pieces]" price={30} cartItems={cartItems} setCartItems={setCartItems} />
                        <ItemCard image={tea} title="Coffee" description="Coffee [Single, 150 ml] with Biscuit [2 Pieces]" price={30} cartItems={cartItems} setCartItems={setCartItems} />
                        <ItemCard image={tea} title="Tea" description="Tea [Single, 150 ml] with Cutlet [1 Piece]" price={25} cartItems={cartItems} setCartItems={setCartItems} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Combo;
