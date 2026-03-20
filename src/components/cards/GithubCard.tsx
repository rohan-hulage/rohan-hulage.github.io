import React from 'react';
import GlassCard from '../GlassCard';
import { FaTerminal } from 'react-icons/fa';

const GithubCard: React.FC = () => {
  return (
    <GlassCard style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg, rgba(15,15,20,0.6) 0%, rgba(0,255,204,0.05) 100%)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FaTerminal size={24} color="var(--text-muted)" />
      </div>
      
      <div>
        <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Currently Building</h3>
        <p style={{ fontSize: '1.1rem', fontWeight: 500 }} className="text-accent-gradient">
          Awesome Web Apps
        </p>
      </div>
    </GlassCard>
  );
};

export default GithubCard;
