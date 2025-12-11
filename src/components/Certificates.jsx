import React from 'react';
import { portfolioData } from '../data';
import { FadeIn } from './Animations';
import './Certificates.css';

const Certificates = () => {
    return (
        <section id="certificates" className="section certificates-section">
            <FadeIn>
                <h2 className="section-title">Certificate</h2>
            </FadeIn>

            <div className="certificates-grid">
                {portfolioData.certificates.map((cert, index) => (
                    <FadeIn key={cert.id} delay={index * 0.1} direction="up">
                        <div className="cert-card glass">
                            <div className="cert-image">
                                <div className="cert-img-placeholder">Certificate</div>
                            </div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <p>{cert.issuer}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
