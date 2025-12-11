import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Active Scroll Spy Logic
            const sections = ['about', 'education', 'experience', 'projects', 'contact'];
            // Default to nothing or hero if at top
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is within the viewport (with some offset)
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Mobile Menu Button (Hamburger) */}
                <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                {/* Nav Links */}
                <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className={activeSection === link.href.substring(1) ? 'active' : ''}
                                onClick={() => setMobileMenuOpen(false)} // Close menu when link clicked
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Overlay to close menu when clicking outside */}
                {mobileMenuOpen && (
                    <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
