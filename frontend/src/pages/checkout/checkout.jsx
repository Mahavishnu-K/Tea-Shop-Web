import React, { useState } from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import './checkout.css';

function Checkout({ cartItems }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Tamilnadu',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="checkout-header">
        <p>Place your <span className='stuff' style={{color:"#FF6524"}}>Order</span></p>
      </div>

      <div className="checkout-wrapper">
        {/* Left Side - Shipping Form */}
        <div>
            <div className="checkout-container">
            <h3 className="billing-title">Shipping Information</h3>

            <div className="form-grid">
                <div className="form-group">
                <label>NAME</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="input-field" />
                </div>

                <div className="form-group phone-group">
                <div className="phone-container">
                    <div className="phone-input">
                    <label>PHONE NUMBER</label>
                    <div className="phone-input-wrapper">
                        <span className="country-code">+91</span>
                        <input type="tel" className="wrapper-input" name="phone" id="phone" maxLength="10" placeholder="Your number" />
                    </div>
                    </div>
                    <button className="otp-button">Get OTP</button>
                </div>
                </div>

                <div className="form-group">
                <label>E MAIL</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="Your mail" />
                </div>

                <div className="form-group">
                <label>CITY</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="input-field" placeholder="City" />
                </div>

                <div className="form-group">
                <label>PIN CODE</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="PIN code" className="input-field" />
                </div>

                <div className="form-group">
                <label>STATE</label>
                <select name="state" value={formData.state} onChange={handleChange} className="input-field">
                    <option value="Tamilnadu">Tamilnadu</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                </select>
                </div>
            </div>

            <div className="form-group">
                <label>ADDRESS</label>
                <textarea type="text" name="address" value={formData.address} onChange={handleChange} className="address" placeholder="Address" />
            </div>
            </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="order-summary">
          <h3 className='order-summary-header'>Order Summary</h3>
          <div className="order-items">
            {cartItems.map((item, index) => (
              <div key={index} className="order-item">
                <p>{item.title}</p>
                <p style={{display:"flex", alignItems:"center"}}><FaIndianRupeeSign />{item.price} x {item.quantity}</p>
              </div>
            ))}
          </div>
          <hr style={{marginBottom:"20px", marginTop:"20px"}}/>
          <div className="order-total">
            <p>Total:</p>
            <p style={{display:"flex", alignItems:"center"}}><FaIndianRupeeSign />{totalPrice.toFixed(2)}</p>
          </div>
          <button className="checkout-button-confirm">Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
