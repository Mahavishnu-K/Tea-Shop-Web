import React from "react";
import { FaStar } from "react-icons/fa6";
import camsoori from "../../assets/PopularCategories/camsoori.png";
import "./Testimonials.css";

const Testimonial = () => {
    return (
        <section className="testimonial-section">
        <div className="testimonial-left-container">
            <div className="testimonial-left-image">
                <img src={camsoori} alt="camsoori" />
            </div>
        </div>
        <div className="testimonial-right-container">
            <div className="testimonial-right-sub-title">
                Testimonials
            </div>
            <div className="testimonial-right-title">
                What Our Customers Say About Us
            </div>
            <div className="testimonial-right-content">
                “I recently visited this cozy tea shop, and it was a treat! They offer a great variety of perfectly brewed teas, from strong masala chai to refreshing green tea. The atmosphere is warm and inviting—ideal for enjoying a cup of tea. Highly recommend!”
            </div>
            <div className="testimonial-right-customer-feedback">
                <div className="testimonial-right-customer-feedback-title">
                    Customer Feedback
                </div>
                <div className="testimonial-right-customer-feedback-container">
                    <div className="testimonial-right-customer-feedback-icon">
                        <FaStar />
                    </div>
                    <div className="testimonial-right-customer-feedback-content">
                        4.9 <span>(18.6k Reviews)</span>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Testimonial;
