import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import "./ProductCard.css"; // Import CSS file

const ProductCard = ({ image, name, description, price, rating }) => {
    return (
        <div className="product-card">
        {/* Favorite Icon */}
        <div className="favorite-icon">
            <AiFillHeart className="heart-icon" />
        </div>

        {/* Product Image */}
        <div className="image-container">
            <img src={image} alt={name} className="product-image" />
        </div>

        {/* Product Details */}
        <div className="product-info">
            <h3 className="product-title">{name}</h3>
            <p className="product-description">{description}</p>

            {/* Price and Rating */}
            <div className="product-footer">
            <span className="product-price">₹{price.toFixed(2)}</span>
            <div className="product-rating">
                <FaStar className="star-icon" />
                <span>{rating}</span>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;
