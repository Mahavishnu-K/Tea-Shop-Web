import { useEffect, useState } from "react";
import { FiMenu, FiPhone, FiSearch, FiShoppingCart, FiX, FiChevronDown } from "react-icons/fi";
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`navbar-container ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo">
        <span className="navbar-logo-text">Logo</span>
      </div>

      <ul className="navbar-nav-links">
        <li className="navbar-nav-item navbar-active">
          <span>Home</span>
        </li>
        <li className="navbar-nav-item navbar-has-dropdown">
          <span>Menu <FiChevronDown className="navbar-dropdown-icon" /></span>
          <div className="navbar-dropdown-menu">
            <div className="navbar-dropdown-content">
              <a href="#" className="navbar-dropdown-link">Option 1</a>
              <a href="#" className="navbar-dropdown-link">Option 2</a>
              <a href="#" className="navbar-dropdown-link">Option 3</a>
            </div>
          </div>
        </li>
        <li className="navbar-nav-item navbar-has-dropdown">
          <span>Services <FiChevronDown className="navbar-dropdown-icon" /></span>
          <div className="navbar-dropdown-menu">
            <div className="navbar-dropdown-content">
              <a href="#" className="navbar-dropdown-link">Service 1</a>
              <a href="#" className="navbar-dropdown-link">Service 2</a>
              <a href="#" className="navbar-dropdown-link">Service 3</a>
            </div>
          </div>
        </li>
        <li className="navbar-nav-item">
          <span>Offers</span>
        </li>
      </ul>

      <div className="navbar-icons">
        <button className="navbar-icon-btn">
          <FiSearch className="navbar-icon" />
        </button>
        <div className="navbar-cart">
          <button className="navbar-icon-btn">
            <FiShoppingCart className="navbar-icon" />
            <span className="navbar-badge">3</span>
          </button>
        </div>
        <button className="navbar-contact-btn">
          <FiPhone className="navbar-btn-icon" />
          <span>Contact</span>
        </button>
      </div>

      <button className="navbar-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={`navbar-mobile-menu ${menuOpen ? "navbar-open" : ""}`}>
        <ul>
          <li className="navbar-mobile-item navbar-active">Home</li>
          <li className="navbar-mobile-item">Menu</li>
          <li className="navbar-mobile-item">Services</li>
          <li className="navbar-mobile-item">Offers</li>
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