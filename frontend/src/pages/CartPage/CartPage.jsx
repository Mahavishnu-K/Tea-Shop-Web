import React from "react";
import emptycart from "../../assets/shopping-cart.png";
import { FaMinus, FaPlus, FaIndianRupeeSign } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import "./CartPage.css";

const CartPage = ({ cartItems = [], setCartItems }) => {
    console.log("Cart Items:", cartItems);
    
    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="cart-page-empty">
                <img src={emptycart} className="emptycart" alt="cart is empty" />
                <p className="empty-para">Your cart is empty.</p>
            </div>
        );
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
                <div key={index} className="cart-item-cartpage">
                    <div className="cart-item-left-cartpage">
                        <div className="item-img-container-cartpage">
                            <img src={item.image} alt={item.title} className="item-image-cartpage" />
                        </div>
                        <div>
                            <h2 className="item-title-cartpage">{item.title}</h2>
                            <p className="item-description-cartpage">{item.description}</p>
                        </div>
                    </div>
                    <div className="cart-item-right-cartpage">
                        <div className="quantity-selector-cartpage">
                            <button onClick={() => updateQuantity(index, -1)}><FaMinus /></button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(index, 1)}><FaPlus /></button>
                        </div>
                        <div className="shop-item-price-cartpage">
                            <p className="item-price-cartpage">
                                <FaIndianRupeeSign />{(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                        <button className="cart-icon-cartpage" onClick={() => removeFromCart(index)}>
                            <RxCross1 />
                        </button>
                    </div>
                </div>
            ))}
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button className="checkout-button-cartpage">Checkout</button>
        </div>
    );
};

export default CartPage;
