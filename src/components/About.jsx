import React from 'react';
import { portfolioData } from '../data';
import { MaskedText, StaggerContainer, StaggerItem, FadeIn } from './Animations';
import './About.css';

const About = () => {
    const { title, description, skills } = portfolioData.about;

    return (
        <section id="about" className="section about-section">
            <MaskedText>
                <h2 className="section-title">{title}</h2>
            </MaskedText>

            <div className="about-container">
                <div className="about-card glass">
                    <FadeIn delay={0.2}>
                        <p className="about-description">{description}</p>
                    </FadeIn>
                </div>

                <div className="skills-container">
                    <MaskedText delay={0.4}>
                        <h3 className="skills-title">Skill & Interest</h3>
                    </MaskedText>

                    <StaggerContainer delay={0.5}>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <StaggerItem key={index}>
                                    <div className="skill-pill">
                                        {skill}
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};

export default About;
