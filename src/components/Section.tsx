
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <section id={id} style={{ padding: '3rem 0', borderBottom: '1px solid var(--border-color)' }}>
            <h2 style={{
                fontSize: '1.8rem',
                marginBottom: '2rem',
                color: 'var(--text-primary)',
                position: 'relative',
                display: 'inline-block'
            }}>
                {title}
                <span style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    width: '40%',
                    height: '3px',
                    background: 'var(--accent-color)',
                    borderRadius: '2px'
                }}></span>
            </h2>
            {children}
        </section>
    );
};

export default Section;
