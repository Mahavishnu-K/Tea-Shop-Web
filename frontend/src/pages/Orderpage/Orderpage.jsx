import React, { useState } from "react";
import MenuSection from "../../components/MenuSection/MenuSection";
import CartPage from "../CartPage/CartPage";
import "./orderpage.css";

const OrderPage = () => {
  const [menuItems, setMenuItems] = useState([
    { image: "/images/tea.jpg", name: "Tea (150ml) with Cutlet", description: "49 Rs Combo", price: 25, quantity: 1 },
    { image: "/images/coffee.jpg", name: "Coffee (150ml) with Cutlet", description: "69 Rs Combo", price: 99, quantity: 1 },
    { image: "/images/nippattu.jpg", name: "Nippattu Combo", description: "89 Rs Combo", price: 99, quantity: 1 },
  ]);

  const [bunItems, setBunItems] = useState([
    { image: "/images/bun-butter.jpg", name: "Bun Butter Jam", description: "Soft bun with butter & jam", price: 25, quantity: 1 },
    { image: "/images/double-bun.jpg", name: "Double Butter Bun", description: "Rich buttery bun", price: 99, quantity: 1 },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const updateQuantity = (items, setItems, index, delta) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = Math.max(1, updatedItems[index].quantity + delta);
    setItems(updatedItems);
  };

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item }];
      }
    });
  };

  return (
    <div className="menu-page">
      <MenuSection
        title="COMBOS"
        description="We have 19 items in the combo variety"
        items={menuItems.map((item, index) => ({
          ...item,
          onIncrease: () => updateQuantity(menuItems, setMenuItems, index, 1),
          onDecrease: () => updateQuantity(menuItems, setMenuItems, index, -1),
          onAddToCart: () => addToCart(item),
        }))}
      />
      <MenuSection
        title="BUN VARIETIES"
        description="We have 22 items in the bun varieties"
        items={bunItems.map((item, index) => ({
          ...item,
          onIncrease: () => updateQuantity(bunItems, setBunItems, index, 1),
          onDecrease: () => updateQuantity(bunItems, setBunItems, index, -1),
          onAddToCart: () => addToCart(item),
        }))}
      />
      <CartPage cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default OrderPage;
