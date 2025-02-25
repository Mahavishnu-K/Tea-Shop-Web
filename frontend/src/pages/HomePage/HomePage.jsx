import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiDeliveryTruck, CiGift } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoCartOutline, IoFastFoodOutline } from "react-icons/io5";
import ProductCard from '../../components/ProductCard/ProductCard';
import Testimonial from '../../components/Testimonials/Testimonials';
import heroImg from '../../assets/herosection/hero.png';
import teacup from '../../assets/herosection/teacup.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import herosoori from '../../assets/herosection/herosoori.png';
import textmsg from '../../assets/herosection/text.png';
import ecp1 from '../../assets/herosection/Ellipse.png';
import normaltea from '../../assets/normaltea.png';
import creambun from '../../assets/creambun.png';
import orangejuice from '../../assets/orangejuice.png';
import icecream from '../../assets/icecream.png';
import muffin from '../../assets/muffin.png';
import tart from '../../assets/tart.png';
import strawberry from '../../assets/strawberry-cake.png';
import background from '../../assets/herosection/background.png';

import './HomePage.css';

const CategoryCard = ({ img, categoryName, noOfCombos, classn }) => {
    
    return (
        <div className="home-page-popular-categories-item">
            <div className="home-page-popular-categories-item-image">
                <img src={img} alt={categoryName} className={classn}/>
            </div>
            <div className="home-page-popular-categories-item-name">{categoryName}</div>
            <div className="home-page-popular-categories-item-price">({noOfCombos} Varieties)</div>
        </div>
    );
};

const HomePage = () => {
    const categories = [
        { img: normaltea, categoryName: 'Tea', noOfCombos: 18 , classn: "tea-category"},
        { img: creambun, categoryName: 'Bun', noOfCombos: 23, classn: "bun-category" },
        { img: orangejuice, categoryName: 'Beverages', noOfCombos: 3, classn: "beverage-category" },
        { img: icecream, categoryName: 'All items', noOfCombos: '50+', classn: "all-category" },
    ];

    const products = [
        {
            image: creambun, // Add correct image path
            name: "Cream Bun",
            description: "A delicious cream-filled bun.",
            price: 99.0,
            classna: "product-image",
            rating: 4.6,
        },
        {
            image: muffin, 
            name: "Chocolate Muffin",
            description: "Soft and rich chocolate muffin.",
            price: 120.0,
            classna: "product-image",
            rating: 4.8,
        },
        {
            image: tart, 
            name: "Blueberry Tart",
            description: "Sweet and tangy blueberry tart.",
            price: 150.0,
            classna: "product-image",
            rating: 4.7,
        },
        {
            image: strawberry,
            name: "Strawberry Cake",
            description: "Fresh strawberry layered cake.",
            classna: "strawberry",
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

    const initialImages = [
        { src: ecp1, top: "3%", left: "6%", size: "110px" },
        { src: ecp1, top: "5%", left: "17%", size: "150px" },
        { src: ecp1, top: "25%", left: "2%", size: "250px" },
        { src: ecp1, top: "5%", left: "53%", size: "50px" },
        { src: ecp1, top: "20%", left: "30%", size: "200px" },
        { src: ecp1, top: "55%", left: "60%", size: "70px" },
        { src: ecp1, top: "40%", left: "45%", size: "130px" },
        { src: ecp1, top: "75%", left: "27%", size: "170px" },
        { src: ecp1, top: "59%", left: "52%", size: "80px" },
        { src: ecp1, top: "45%", left: "58%", size: "40px" },
        { src: ecp1, top: "30%", left: "65%", size: "170px" },
        { src: ecp1, top: "16%", left: "68%", size: "50px" },
        { src: ecp1, top: "18%", left: "77%", size: "80px" },
        { src: ecp1, top: "1%", left: "62%", size: "80px" },
        { src: ecp1, top: "7%", left: "43%", size: "100px" },
        { src: ecp1, top: "60%", left: "15%", size: "160px" },
        { src: ecp1, top: "75%", left: "83%", size: "180px" },
        { src: ecp1, top: "35%", left: "22%", size: "70px" },
        { src: ecp1, top: "55%", left: "38%", size: "50px" },
        { src: ecp1, top: "65%", left: "2%", size: "80px" },
        { src: ecp1, top: "75%", left: "55%", size: "120px" },
        { src: ecp1, top: "34%", left: "79%", size: "110px" },
        { src: ecp1, top: "54%", left: "79%", size: "50px" },
        { src: ecp1, top: "80%", left: "2%", size: "200px" },
        { src: ecp1, top: "-10%", left: "70%", size: "150px" },
        { src: ecp1, top: "15%", left: "53%", size: "170px" },
        { src: ecp1, top: "55%", left: "29%", size: "90px" },
        { src: ecp1, top: "3%", left: "85%", size: "200px" },
        { src: ecp1, top: "38%", left: "90%", size: "140px" },
        { src: ecp1, top: "60%", left: "95%", size: "150px" },
        { src: ecp1, top: "87%", left: "20%", size: "70px" },
        { src: ecp1, top: "65%", left: "40%", size: "190px" },
        { src: ecp1, top: "60%", left: "65%", size: "250px" },
        { src: ecp1, top: "61%", left: "85%", size: "60px" },
        { src: ecp1, top: "-25%", left: "27%", size: "250px" },
    ];
    
    const [images, setImages] = useState(initialImages);
    const [duplicatedIndexes, setDuplicatedIndexes] = useState([]);
    const [fadeInIndexes, setFadeInIndexes] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImages((prevImages) => {
                const cleanedImages = prevImages.filter((_, index) => !duplicatedIndexes.includes(index));

                const uniqueIndexes = new Set();
                while (uniqueIndexes.size < 8) {
                    const randomIndex = Math.floor(Math.random() * cleanedImages.length);
                    uniqueIndexes.add(randomIndex);
                }
                const selectedIndexes = [...uniqueIndexes];

                const newDuplicates = selectedIndexes.map((index) => ({
                    ...cleanedImages[index],
                    duplicated: true,
                }));

                setFadeInIndexes(selectedIndexes);

                setDuplicatedIndexes(selectedIndexes);
                return [...cleanedImages, ...newDuplicates];
            });

            setTimeout(() => setFadeInIndexes([]), 1000);
        }, 2000);

        return () => clearInterval(interval);
    }, [duplicatedIndexes]);

    const navigate = useNavigate();

    const shopNavigate = () => {
        navigate('/shop');
    }

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer); 
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    return (
        <div className="home-page-container">
            {/* Hero Section */}
            <section className="home-page-hero-section">

                <div className="home-page-hero-image" 
                    style={{
                        backgroundImage: isMobile ? `url(${background})` : "none",
                    }}
                    >
                    {!isMobile &&
                        images.map((image, index) => (
                            <div
                                key={index}
                                className="image-wrapper"
                                style={{
                                    width: image.size,
                                    height: image.size,
                                    position: "absolute",
                                    top: image.top,
                                    left: image.left,
                                    transition: "opacity 1s ease-in-out",
                                }}
                            >
                                <div className="ring"></div>
                                <img src={image.src} alt="ellipse" className="ellipse-image" />
                            </div>
                        ))}
                </div>
                <div className='soori-img'>
                        <img src={heroImg} className="soori" alt="Hero image" />
                        <img src={herosoori} className="hero-soori" alt="Hero image" />
                </div>
                <div className='text-img' style={{ opacity: isVisible ? "1" : "0" }}>
                    <img src={textmsg} className="text-msg" alt="text image" />
                </div>
                
                <div className='hero-text' >
                    <pre className='pre1'>The  Best </pre>
                    <pre className='tea-text'>TEA</pre>
                    <img src={teacup} className='tea-cup-img' alt="tea cup image" />
                    <pre className='pre2'>For  you</pre>

                    <button className='shopnow' onClick={shopNavigate}><pre>         SHOP NOW        <IoIosArrowRoundForward size={24}/></pre></button>
                </div>
                

                <div className='end-text'>
                    <pre className='credit-text'>Every day is unique, just like our tea</pre>

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
                            classn={category.classn}
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
                
                <div className="home-page-special-dishes-scroll-container">
                    <div className="home-page-special-dishes-cards-container">
                        {currentProducts.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
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
                        <p className="home-page-story-services-card-content">Get awesome offers and Gift cards on each orders</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
