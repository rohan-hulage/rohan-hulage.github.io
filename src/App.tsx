

import { ThemeProvider } from './context/ThemeContext';

import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FloatingNav from './components/FloatingNav';
function App() {
  return (
    <ThemeProvider>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 1.5rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>


        <main style={{ flex: 1, paddingBottom: '4rem' }}>
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
        </main>
        <FloatingNav />


      </div>
    </ThemeProvider>
  );
}

export default App;
