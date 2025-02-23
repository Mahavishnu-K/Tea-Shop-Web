import { useState } from "react";
import { FaPlus, FaMinus} from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import './itemcard.css';

export default function ItemCard({ image, title, description, price, cartItems, setCartItems, page }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const addToCart = () => {
    console.log("Adding Item:", title);

    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find((item) => item.title === title);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      updatedCart.push({ image, title, description, price, quantity });
    }

    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart)); 

    setQuantity(1); 
  };

  

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div className="item-img-container">
          <img src={image} alt={title} className="item-image" />
        </div>
        <div>
          <h2 className="item-title">{title}</h2>
          <p className="item-description" style={{width:"300px"}}>{description}</p>
        </div>
      </div>
      <div className="cart-item-right">
        <div className="quantity-selector" style={{width:"100px"}}>
          <button onClick={decreaseQuantity}><FaMinus /></button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}><FaPlus /></button>
        </div>
        <div className="shop-item-price">
          <p className="item-price"><FaIndianRupeeSign />{(price * quantity).toFixed(2)}</p>
        </div>
        <button className="cart-icon" onClick={addToCart}><FaCartShopping /></button>
      </div>
    </div>
  );
}
