import React from 'react';
import { portfolioData } from '../data';
import { FadeIn } from './Animations';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <FadeIn>
                <h2 className="section-title">Project</h2>
            </FadeIn>
            <div className="projects-list">
                {portfolioData.projects.map((project, index) => (
                    <div key={project.id} className="project-item">
                        <FadeIn direction="right" delay={0.2}>
                            <div className="project-text">
                                <span className="project-role">{project.role}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-desc-box glass">
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.4}>
                            <div className="project-visuals">
                                <img src={project.image} alt={project.title} className="project-img-main" />
                            </div>
                        </FadeIn>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
