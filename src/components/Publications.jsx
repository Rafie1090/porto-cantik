import React from 'react';
import { portfolioData } from '../data';
import { FadeIn } from './Animations';
import './Publications.css';

const Publications = () => {
    return (
        <section id="publications" className="section publications-section">
            <FadeIn>
                <h2 className="section-title">Publication</h2>
            </FadeIn>

            <div className="publications-grid">
                {portfolioData.publications.map((pub, index) => (
                    <FadeIn key={pub.id} delay={index * 0.15} direction="up">
                        <div className="pub-card glass">
                            <div className="pub-image">
                                <div className="pub-img-placeholder">{pub.category}</div>
                            </div>
                            <div className="pub-info">
                                <h3>{pub.category}</h3>
                                <p className="pub-title">{pub.title}</p>
                                <p className="pub-journal">{pub.journal}</p>
                                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-link">Read More</a>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={0.5}>
                <div className="pub-footer">
                    <p>Other publication access in here: <a href="https://bit.ly/ade-publication" target="_blank" rel="noopener noreferrer">https://bit.ly/ade-publication</a></p>
                </div>
            </FadeIn>
        </section>
    );
};

export default Publications;
