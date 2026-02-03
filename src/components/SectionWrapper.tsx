import React, { useEffect, useRef, useState } from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '', delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

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
            className={`section-wrapper ${className}`}
            style={{
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '4rem 1.5rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            }}
        >
            {children}
        </section>
    );
};

export default SectionWrapper;
