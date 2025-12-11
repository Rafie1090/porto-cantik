import React from 'react';
import { portfolioData } from '../data';
import { MaskedText, RevealImage, StaggerContainer, StaggerItem } from './Animations';
import './Hero.css';

const Hero = () => {
    const { name, title, social, image } = portfolioData.hero;

    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-title-wrapper">
                        <MaskedText delay={0.1}>
                            <h2 className="hero-title">{title}</h2>
                        </MaskedText>
                    </div>

                    <div className="hero-name-wrapper">
                        <MaskedText delay={0.2}>
                            <h1 className="hero-name">{name}</h1>
                        </MaskedText>
                    </div>

                    <StaggerContainer delay={0.4}>
                        <div className="hero-socials">
                            {Object.entries(social).map(([platform, link]) => (
                                <StaggerItem key={platform}>
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        <i className={`fab fa-${platform === 'email' ? 'google' : platform}`}></i>
                                        {/* Only show text on desktop if needed, or just icons for cleaner look */}
                                        <span className="social-text">{platform}</span>
                                    </a>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>

                <div className="hero-image-container">
                    <RevealImage delay={0.3}>
                        <img src={image} alt={name} className="hero-image" />
                    </RevealImage>
                </div>
            </div>
        </section>
    );
};

export default Hero;
