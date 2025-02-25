import { useEffect, useState } from "react";
import { FiPhone, FiShoppingCart } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSideBar = () => {
    setSidebarVisible(false);
  };

  const navigate = useNavigate();
  const shopNavigate = () => {
    navigate('/shop');
    hideSideBar();
  };

  const homeNavigate = () => {
    navigate('/');
    hideSideBar();
  };

  const cartNavigate = () => {
    navigate('/cart');
    hideSideBar();
  };

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
        {/* Hide these buttons on screens <= 400px */}
        <div className={`navbar-cart ${window.innerWidth <= 400 ? "hidden" : ""}`}>
          <button onClick={homeNavigate} className="navbar-icon-btn">
            <span>Home</span>
            <BsShop size={20} />
          </button>

          <button onClick={shopNavigate} className="navbar-icon-btn">
            <span>Menu</span>
            <IoFastFoodOutline size={21} />
          </button>

          <button onClick={cartNavigate} className="navbar-icon-btn">
            <span>Cart</span>
            <FiShoppingCart size={20} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </button>
        </div>

        {/* Always show these buttons */}
        <div onClick={showSidebar} className="navbar-icon-btn-ham hamburger">
          <RxHamburgerMenu size={24} />
        </div>

        <button onClick={scrollToFooter} className="navbar-contact-btn">
          <FiPhone className="navbar-btn-icon" />
          <span>Contact</span>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`navbar-mobile-menu ${sidebarVisible ? "navbar-open" : ""}`}>
        <div className="navbar-mobile-actions">
          <div onClick={hideSideBar} style={{width:"fit-content"}} className="navbar-icon-btn-x">
            <RxCross1 size={24} />
          </div>

          <button onClick={homeNavigate} className="navbar-icon-btn">
            <span>Home</span>
            <BsShop size={20} />
          </button>

          <button onClick={shopNavigate} className="navbar-icon-btn">
            <span>Menu</span>
            <IoFastFoodOutline size={21} />
          </button>

          <button onClick={cartNavigate} className="navbar-icon-btn">
            <span>Cart</span>
            <FiShoppingCart size={20} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;