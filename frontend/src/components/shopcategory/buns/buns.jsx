import React from 'react';
import { useState,useEffect } from 'react';
import ItemCard from './../../itemcard/itemcard';
import tea from './../../../assets/PopularCategories/tea.png';
import './buns.css';

function Buns({ cartItems, setCartItems }){
    return(
        <>
            <div className='shop-buns'>
                <div className='shop-header'>
                    <h3>BUNS</h3>
                    <p className='shop-header-para'>We have 12 items in Buns variety</p>
                    <div className='bottom-line'></div>
                </div>
                <div className='ul-list'>
                    <ul className='combo-item-list'>
                        <li>
                            <ItemCard image={tea} title={'Tea'} description={'Tea [Single, 150 ml] with Cutlet [1 Piece]'} price={25} cartItems={cartItems} setCartItems={setCartItems}/>
                            <ItemCard image={tea} title={'Tea'} description={'Tea [Single, 150 ml] with Cutlet [1 Piece]'} price={25} cartItems={cartItems} setCartItems={setCartItems}/>
                            <ItemCard image={tea} title={'Tea'} description={'Tea [Single, 150 ml] with Cutlet [1 Piece]'} price={25} cartItems={cartItems} setCartItems={setCartItems}/>
                            <ItemCard image={tea} title={'Tea'} description={'Tea [Single, 150 ml] with Cutlet [1 Piece]'} price={25} cartItems={cartItems} setCartItems={setCartItems}/>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Buns;