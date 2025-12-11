import React from 'react';
import { portfolioData } from '../data';
import { FadeIn } from './Animations';
import './Education.css';

const Education = () => {
    const { university, period, degree, gpa, organizations } = portfolioData.education;

    return (
        <section id="education" className="section education-section">
            <FadeIn>
                <h2 className="section-title">Education</h2>
            </FadeIn>

            <div className="education-content">
                <FadeIn delay={0.2}>
                    <div className="edu-header">
                        <div className="uni-info">
                            <h3>{university} | {period}</h3>
                            <h4>{degree}</h4>
                            <p className="gpa">GPA {gpa}</p>
                        </div>
                    </div>
                </FadeIn>

                <div className="org-list">
                    <FadeIn delay={0.4}>
                        <h3>Active & Participate in Organizational:</h3>
                    </FadeIn>
                    <ul>
                        {organizations.map((org, index) => (
                            <FadeIn key={index} delay={0.2 + (index * 0.1)} direction="left">
                                <li>
                                    <strong>{org.name}</strong>
                                    <br />
                                    <span>{org.role} | {org.year}</span>
                                </li>
                            </FadeIn>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
