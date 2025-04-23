"use client";
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// For AnimatedText component
interface AnimatedTextProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export const AnimatedText = ({ children, delay = 0, className }: AnimatedTextProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay }
            });
        }
    }, [controls, inView, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// For AnimatedCard component
interface AnimatedCardProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export const AnimatedCard = ({ children, delay = 0, className }: AnimatedCardProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay }
            });
        }
    }, [controls, inView, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// For AnimatedFade component (fade-in only, no movement)
interface AnimatedFadeProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export const AnimatedFade = ({ children, delay = 0, className }: AnimatedFadeProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                transition: { duration: 0.5, delay }
            });
        }
    }, [controls, inView, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            className={className}
        >
            {children}
        </motion.div>
    );
};