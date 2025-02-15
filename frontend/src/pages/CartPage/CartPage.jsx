import React from "react";
import "./CartPage.css";

const CartPage = ({ cartItems = [], setCartItems }) => {
    if (!cartItems || cartItems.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    const updateQuantity = (index, delta) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + delta);
        setCartItems(updatedCart);
    };

    const removeFromCart = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="cart-item-price">₹{item.price * item.quantity}</p>
                </div>
                <div className="cart-item-actions">
                    <button onClick={() => updateQuantity(index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, 1)}>+</button>
                    <button className="remove-button" onClick={() => removeFromCart(index)}>❌</button>
                </div>
                </div>
            ))}
            <h3>Total: ₹{totalPrice}</h3>
            <button className="checkout-button">Checkout</button>
        </div>
    );
};

export default CartPage;
