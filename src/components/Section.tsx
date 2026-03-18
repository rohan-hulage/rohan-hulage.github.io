import React from 'react';

interface SectionProps {
    id?: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <div style={{ width: '100%' }}>
            <h2 className="section-title text-gradient">
                {title}
                <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'var(--text-primary)',
                    borderRadius: '2px',
                    margin: '0.5rem auto 0',
                    opacity: 0.8
                }}></div>
            </h2>
            {children}
        </div>
    );
};

export default Section;
