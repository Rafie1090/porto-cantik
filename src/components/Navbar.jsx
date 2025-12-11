import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <ul className="nav-links">
                {['About', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
