import React from 'react';
import GlassCard from '../GlassCard';

const LocationCard: React.FC = () => {
  return (
    <GlassCard style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Based In</h3>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>India</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-accent)', boxShadow: '0 0 10px var(--text-accent)' }} />
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Local Time</span>
            <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
              {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>

      {/* Abstract globe or map suggestion in bg */}
      <div 
        style={{
          position: 'absolute',
          right: '-20%',
          bottom: '-20%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '1px dashed rgba(255,255,255,0.2)',
          opacity: 0.5,
          zIndex: 0
        }}
      />
    </GlassCard>
  );
};

export default LocationCard;
