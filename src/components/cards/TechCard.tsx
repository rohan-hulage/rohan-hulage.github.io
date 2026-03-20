import React from 'react';
import GlassCard from '../GlassCard';
import { portfolioData } from '../../data/content';

const TechCard: React.FC = () => {
  const allSkills = [...portfolioData.skills.technical, ...portfolioData.skills.concepts].slice(0, 15);

  return (
    <GlassCard style={{ display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Tech Stack</h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', overflowY: 'auto' }}>
        {allSkills.map((skill, i) => (
          <div 
            key={i} 
            style={{ 
              padding: '0.4rem 0.8rem', 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: 'var(--text-main)',
              transition: 'var(--transition-smooth)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--text-accent)'; e.currentTarget.style.color = 'var(--text-accent)' }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--text-main)' }}
          >
            {skill}
          </div>
        ))}
        {([...portfolioData.skills.technical, ...portfolioData.skills.concepts].length > 15) && (
          <div style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            + more
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default TechCard;
