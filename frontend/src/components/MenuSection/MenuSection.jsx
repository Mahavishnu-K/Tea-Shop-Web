import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuSection = ({ title, description, items }) => {
    return (
        <div className="menu-section">
        <h2 className="menu-section-title">{title}</h2>
        <p className="menu-section-description">{description}</p>
        <div className="menu-section-items">
            {items.map((item, index) => (
                <MenuItem
                    key={index}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    quantity={item.quantity}
                    onIncrease={item.onIncrease}
                    onDecrease={item.onDecrease}
                />
            ))}
        </div>
        </div>
    );
};

export default MenuSection;
