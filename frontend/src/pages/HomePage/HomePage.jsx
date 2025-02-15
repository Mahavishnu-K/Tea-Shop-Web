import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { CiDeliveryTruck, CiGift } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoCartOutline, IoFastFoodOutline } from "react-icons/io5";
import ProductCard from '../../components/ProductCard/ProductCard';
import Testimonial from '../../components/Testimonials/Testimonials';
import ecp1 from '../../assets/herosection/Ellipse.png';
import ecp2 from '../../assets/herosection/Ellipse.png';
import ecp3 from '../../assets/herosection/Ellipse.png';
import ecp4 from '../../assets/herosection/Ellipse.png';
import ecp5 from '../../assets/herosection/Ellipse.png';
import ecp6 from '../../assets/herosection/Ellipse.png';
import ecp7 from '../../assets/herosection/Ellipse.png';
import ecp8 from '../../assets/herosection/Ellipse.png';
import ecp9 from '../../assets/herosection/Ellipse.png';
import ecp10 from '../../assets/herosection/Ellipse.png';
import ecp11 from '../../assets/herosection/Ellipse.png';
import ecp12 from '../../assets/herosection/Ellipse.png';
import ecp13 from '../../assets/herosection/Ellipse.png';
import ecp14 from '../../assets/herosection/Ellipse.png';
import ecp15 from '../../assets/herosection/Ellipse.png';
import ecp16 from '../../assets/herosection/Ellipse.png';
import ecp17 from '../../assets/herosection/Ellipse.png';
import ecp18 from '../../assets/herosection/Ellipse.png';
import ecp19 from '../../assets/herosection/Ellipse.png';
import ecp20 from '../../assets/herosection/Ellipse.png';
import ecp21 from '../../assets/herosection/Ellipse.png';
import ecp22 from '../../assets/herosection/Ellipse.png';
import ecp23 from '../../assets/herosection/Ellipse.png';
import ecp24 from '../../assets/herosection/Ellipse.png';

import './HomePage.css';

const CategoryCard = ({ img, categoryName, noOfCombos }) => {
    return (
        <div className="home-page-popular-categories-item">
            <div className="home-page-popular-categories-item-image">
                <img src={img} alt={categoryName} />
            </div>
            <div className="home-page-popular-categories-item-name">{categoryName}</div>
            <div className="home-page-popular-categories-item-price">({noOfCombos} Varieties)</div>
        </div>
    );
};

const HomePage = () => {
    const categories = [
        { img: 'burger.jpg', categoryName: 'Tea', noOfCombos: 18 },
        { img: 'pizza.jpg', categoryName: 'Bun', noOfCombos: 23 },
        { img: 'sushi.jpg', categoryName: 'Beverages', noOfCombos: 3 },
        { img: 'sushi.jpg', categoryName: 'All items', noOfCombos: '50+' },
    ];

    const products = [
        {
            image: "", // Add correct image path
            name: "Cream Bun",
            description: "A delicious cream-filled bun.",
            price: 99.0,
            rating: 4.6,
        },
        {
            image: "", // Add correct image path
            name: "Chocolate Muffin",
            description: "Soft and rich chocolate muffin.",
            price: 120.0,
            rating: 4.8,
        },
        {
            image: "", // Add correct image path
            name: "Blueberry Tart",
            description: "Sweet and tangy blueberry tart.",
            price: 150.0,
            rating: 4.7,
        },
        {
            image: "", // Add correct image path
            name: "Strawberry Cake",
            description: "Fresh strawberry layered cake.",
            price: 200.0,
            rating: 4.9,
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,  
            once: true,       
            easing: 'ease-in-out',
        });
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Get products for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const images = [
        { src: ecp1, top: "5%", left: "5%", size: "90px" },
        { src: ecp2, top: "10%", left: "15%", size: "150px" },
        { src: ecp3, top: "20%", left: "2%", size: "250px" },
        { src: ecp4, top: "10%", left: "60%", size: "50px" },
        { src: ecp5, top: "45%", left: "35%", size: "200px" },
        { src: ecp6, top: "55%", left: "70%", size: "70px" },
        { src: ecp7, top: "65%", left: "50%", size: "130px" },
        { src: ecp8, top: "80%", left: "40%", size: "110px" },
        { src: ecp9, top: "25%", left: "85%", size: "180px" },
        { src: ecp10, top: "10%", left: "45%", size: "100px" },
        { src: ecp11, top: "50%", left: "15%", size: "160px" },
        { src: ecp12, top: "75%", left: "75%", size: "140px" },
        { src: ecp13, top: "30%", left: "5%", size: "90px" },
        { src: ecp14, top: "70%", left: "55%", size: "120px" },
        { src: ecp15, top: "40%", left: "80%", size: "110px" },
        { src: ecp16, top: "90%", left: "10%", size: "130px" },
        { src: ecp17, top: "5%", left: "75%", size: "150px" },
        { src: ecp18, top: "15%", left: "55%", size: "170px" },
        { src: ecp19, top: "60%", left: "25%", size: "90px" },
        { src: ecp20, top: "12%", left: "80%", size: "200px" },
        { src: ecp21, top: "50%", left: "90%", size: "100px" },
        { src: ecp22, top: "85%", left: "20%", size: "70px" },
        { src: ecp23, top: "55%", left: "40%", size: "190px" },
        { src: ecp24, top: "35%", left: "70%", size: "250px" },
      ];
      
      

    return (
        <div className="home-page-container">
            {/* Hero Section */}
            <section className="home-page-hero-section">

                <div className="home-page-hero-image">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="image-wrapper"
                            style={{
                            width: image.size,
                            height: image.size,
                            position: "absolute",
                            top: image.top,
                            left: image.left,
                            }}
                        >
                        <div className="ring"></div>
                            <img src={image.src} alt="ellipse" className="ellipse-image" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Popular Categories */}
            <section className="home-page-popular-categories-section">
                <p className="home-page-popular-categories-sub-title">Customer Favourites</p>
                <h2 className="home-page-popular-categories-title">Popular Categories</h2>
                <div className="home-page-popular-categories-container">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            img={category.img}
                            categoryName={category.categoryName}
                            noOfCombos={category.noOfCombos}
                        />
                    ))}
                </div>
            </section>

            {/* Special Dishes  */}
            <section className="home-page-special-dishes-section">
                <p className="home-page-special-dishes-sub-title">Special dishes</p>
                <div className="home-page-special-dishes-header">
                    <h2 className="home-page-special-dishes-title">Standout Dishes From Our Menu</h2>
                    <div className="home-page-special-dishes-control-buttons">
                        <button 
                            className="home-page-special-dishes-control-button" 
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <FaChevronLeft />
                        </button>
                        <button 
                            className="home-page-special-dishes-control-button" 
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <div className="home-page-special-dishes-cards-container">
                    {currentProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>

                {/* <p className="home-page-pagination-info">Page {currentPage} of {totalPages}</p> */}
            </section>

            {/* Testimonials Section */}
            <Testimonial />

            {/* Our Story and Services Section */}
            <div className="home-page-story-services-section">
                <div className="home-page-story-services-left-container">
                    <p className="home-page-story-services-sub-title">Our Story & Services</p>
                    <h2 className="home-page-story-services-title">Our Culinary Journey And Services</h2>
                    <p className="home-page-story-services-content">
                        At cam soori’s tea shop, enjoy a range of expertly brewed teas, freshly baked buns, and refreshing beverages, all in a cozy, welcoming setting. Perfect for a quick break or a leisurely visit!.
                    </p>
                    <button className="home-page-story-services-explore-btn">Explore</button>
                </div>
                <div className="home-page-story-services-right-container">
                    <div className="home-page-story-services-card">
                        <span className="home-page-story-services-icon"><IoFastFoodOutline/></span>
                        <h4 className="home-page-story-services-card-title">Catering</h4>
                        <p className="home-page-story-services-card-content">Delight your guests with our flavors and presentation</p>
                    </div>
                    <div className="home-page-story-services-card">
                        <span className="home-page-story-services-icon"><CiDeliveryTruck/></span>
                        <h4 className="home-page-story-services-card-title">Fast Delivery</h4>
                        <p className="home-page-story-services-card-content">We deliver your order promptly to your door</p>
                    </div>
                    <div className="home-page-story-services-card">
                        <span className="home-page-story-services-icon"><IoCartOutline/></span>
                        <h4 className="home-page-story-services-card-title">Online Ordering</h4>
                        <p className="home-page-story-services-card-content">Explore menu & order with ease using our Online Ordering</p>
                    </div>
                    <div className="home-page-story-services-card">
                        <span className="home-page-story-services-icon"><CiGift/></span>
                        <h4 className="home-page-story-services-card-title">Gift Cards</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
