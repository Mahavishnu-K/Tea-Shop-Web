import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import "../../pages/Orderpage/Orderpage.css";

const MenuItem = ({ image, name, description, price, quantity, onIncrease, onDecrease }) => {
    return (
        <div className="menu-item">
        <img src={image} className="menu-item-image" />
        <div className="menu-item-details">
            <h3>{name}</h3>
            <p className="menu-item-para">{description}</p>
        </div>
        <div className="menu-item-actions">
            <div className="quantity-controls">
                <button onClick={onDecrease}><FaMinus /></button>
                <span>{quantity}</span>
                <button onClick={onIncrease}><FaPlus /></button>
            </div>
            <span className="menu-item-price">₹{price}</span>
            <button className="cart-button"><FaShoppingCart /></button>
        </div>
        </div>
    );
};

export default MenuItem;
