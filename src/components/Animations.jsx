import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- Legacy Animations (Keep these to prevent crashes) ---

export const Reveal = ({ children, width = "fit-content" }) => {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const FadeIn = ({ children, delay = 0, direction = "up", fullWidth = false }) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 0.8, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
};

// --- New Pinterest-Style Animations ---

// 1. Masked Text Reveal (The "Pinterest" Text Effect)
export const MaskedText = ({ children, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-10%" }); // Re-triggers on scroll

    const animation = {
        initial: { y: "100%" },
        enter: {
            y: "0",
            transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: delay }
        }
    };

    return (
        <div ref={ref} style={{ overflow: 'hidden', display: 'inline-block' }} className={className}>
            <motion.div variants={animation} initial="initial" animate={isInView ? "enter" : "initial"}>
                {children}
            </motion.div>
        </div>
    );
};

// 2. Image Reveal (Curtain Effect / Scale Up)
export const RevealImage = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-20%" });

    return (
        <div ref={ref} style={{ overflow: 'hidden' }}>
            <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

// 3. Staggered List (for Skills/Menu)
export const StaggerContainer = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-10%" });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children }) => {
    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return <motion.div variants={item}>{children}</motion.div>;
};
