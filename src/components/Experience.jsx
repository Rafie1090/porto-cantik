import React from 'react';
import { portfolioData } from '../data';
import { FadeIn } from './Animations';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <FadeIn>
                <h2 className="section-title">Work Experience</h2>
            </FadeIn>

            <div className="experience-grid">
                {portfolioData.experience.map((exp, index) => (
                    <FadeIn key={exp.id} delay={index * 0.2} direction="up" fullWidth={true}>
                        <div className="experience-card glass">
                            <h3>{exp.role}</h3>
                            <span className="period">{exp.period}</span>
                            <p>{exp.description}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Experience;
