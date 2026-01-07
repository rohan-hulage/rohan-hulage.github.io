

import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

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
        <Header />

        <main style={{ flex: 1, paddingBottom: '4rem' }}>
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
        </main>

        <footer style={{
          padding: '2rem 0',
          marginTop: 'auto',
          borderTop: '1px solid var(--border-color)',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: 'var(--text-tertiary)'
        }}>
          <p>&copy; {new Date().getFullYear()} Abhishek Hulage. Built with React, TypeScript & Vite.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
