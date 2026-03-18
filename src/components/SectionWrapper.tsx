import React, { useEffect, useRef, useState } from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '', delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`section-padding ${className}`}
        >
            <div 
                className={`container ${isVisible ? 'animate-fade-up' : ''}`}
                style={{ opacity: isVisible ? undefined : 0, animationDelay: `${delay}ms` }}
            >
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
