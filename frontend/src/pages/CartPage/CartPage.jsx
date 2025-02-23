import React from "react";
import { useNavigate } from "react-router-dom";
import emptycart from "../../assets/shopping-cart.png";
import { FaMinus, FaPlus, FaIndianRupeeSign } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import "./CartPage.css";

const CartPage = ({ cartItems, setCartItems }) => {
    console.log("Cart Items:", cartItems);
    
    const navigate = useNavigate();

    const handleMenu = () => {
        navigate('/shop');
    }
    
    const handleCheckout = () => {
        navigate('/checkout');
    }

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
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    const removeFromCart = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


    return (
        <div className="cart-page">
            <div className='shop-header-cartpage'>
                <p className="yourcart">Your <span className='stuff' style={{color:"#FF6524"}}>Cart</span></p>
                <p className='shop-header-para'>You have {cartItems.length} item in your cart</p>
            </div>
            
            
            <div className='ul-list-cartpage'>
                <ul className='combo-item-list-cartpage'>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <div className="cart-item-cartpage">
                                <div className="cart-item-left-cartpage">
                                    <div className="item-img-container-cartpage">
                                        <img src={item.image} alt={item.title} className="item-image-cartpage" />
                                    </div>
                                    <div>
                                        <h2 className="item-title-cartpage">{item.title}</h2>
                                        <p className="item-description-cartpage" style={{width:"300px"}}>{item.description}</p>
                                    </div>
                                </div>
                                <div className="cart-item-right-cartpage">
                                    <div className="quantity-selector-cartpage" style={{width:"100px"}}>
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
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="checkout-section">
                <div className="total-price">
                    <p>Total:</p>
                    <h3 className="price"><FaIndianRupeeSign/>{totalPrice.toFixed(2)}</h3>
                </div>
                <div className="Buttons" style={{width:"300px"}}>
                    <button onClick={handleCheckout} className="checkout-button">Checkout</button>
                    <button onClick={handleMenu} className="menu-button">Return to Menu</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
