import React from 'react';
import { portfolioData } from '../data';
import { FadeIn } from './Animations';
import './Contact.css';

const Contact = () => {
    const { phone, email, linkedin, instagram } = portfolioData.contact;

    return (
        <section id="contact" className="section contact-section">
            <FadeIn>
                <div className="contact-wrapper glass">
                    <div className="contact-content">
                        <h2 className="contact-title">GET IN TOUCH</h2>
                        <p className="contact-subtitle">Let's Work Together</p>

                        <div className="contact-grid">
                            <div className="contact-item">
                                <i className="fas fa-phone-alt"></i>
                                <div>
                                    <h3>Phone & Mobile</h3>
                                    <p>{phone}</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="fab fa-linkedin"></i>
                                <div>
                                    <h3>LinkedIn</h3>
                                    <a href={linkedin} target="_blank" rel="noopener noreferrer">www.linkedin.com/in/aderiyanti</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="far fa-envelope"></i>
                                <div>
                                    <h3>Email</h3>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <i className="fab fa-instagram"></i>
                                <div>
                                    <h3>Instagram</h3>
                                    <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">@{instagram}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            <footer className="footer">
                <p>&copy; 2025 Ade Riyanti. All Rights Reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
