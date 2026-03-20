import React from 'react';
import BentoGrid from './components/BentoGrid';

function App() {
  return (
    <>
      {/* Background ambient light effects */}
      <div 
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(120,0,255,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(0,255,204,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
          borderRadius: '50%'
        }} />
      </div>

      <main>
        <BentoGrid />
      </main>
    </>
  );
}

export default App;
