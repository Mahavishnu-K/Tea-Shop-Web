import { useEffect, useState } from "react";
import { FiPhone, FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const shopNavigate = () => {
      navigate('/shop');
  }

  const homeNavigate = () => {
    navigate('/')
  }

  const cartNavigate = () => {
      navigate('/cart');
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      window.scrollTo({
        top: footer.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar-container ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo">
        <span className="navbar-logo-text">Logo</span>
      </div>

      <div className="navbar-icons">
        <div className="navbar-cart">

          <button onClick={homeNavigate} className="navbar-icon-btn">
            <span>Home</span>
            <BsShop size={20}/>
          </button>

          <button onClick={shopNavigate} className="navbar-icon-btn">
            <span>Menu</span>
            <IoFastFoodOutline size={21} />
          </button>

          <button onClick={cartNavigate} className="navbar-icon-btn">
            <span>Cart</span>
            <FiShoppingCart size={20}/>
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </button>
          
          
        </div>
        <button onClick={scrollToFooter} className="navbar-contact-btn">
          <FiPhone className="navbar-btn-icon" />
          <span>Contact</span>
        </button>
      </div>

      <div className={`navbar-mobile-menu ${menuOpen ? "navbar-open" : ""}`}>
        <ul>
          <li className="navbar-mobile-item">Menu</li>
        </ul>
        <div className="navbar-mobile-actions">
          <button className="navbar-icon-btn">
            <FiSearch className="navbar-icon" />
          </button>
          <button className="navbar-icon-btn">
            <FiShoppingCart className="navbar-icon" />
          </button>
          <button className="navbar-mobile-contact">
            <FiPhone className="navbar-btn-icon" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;