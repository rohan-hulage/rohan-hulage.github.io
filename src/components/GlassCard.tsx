import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, style }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic subtle glow tracking the mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.01, zIndex: 10 }}
      whileTap={{ scale: 0.98 }}
      className={`glass-card ${className} ${onClick ? 'clickable' : ''}`}
      style={{
        ...style,
        position: 'relative',
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.3s ease',
      }}
    >
      {/* Dynamic glow effect that follows mouse */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(0, 255, 204, 0.15) 0%, transparent 60%)',
            zIndex: 0,
            opacity: 0.8,
            transition: 'opacity 0.2s',
          }}
        />
      )}
      
      {/* Content wrapper to put it above the glow */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
      
      <style>{`
        .glass-card:hover {
          border-color: var(--border-highlight);
          box-shadow: var(--shadow-lg), var(--neon-glow);
        }
        .clickable {
          cursor: pointer;
        }
      `}</style>
    </motion.div>
  );
};

export default GlassCard;
