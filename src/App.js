import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Sidebar from './components/Sidebar';
import './App.css';

// Lazy-loaded components
const PersonalInfo = lazy(() => import('./components/PersonalInfo'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Interests = lazy(() => import('./components/Interests'));
const Resume = lazy(() => import('./components/Resume'));

// Main content wrapper with conditional background overlays
const MainContent = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`main-content ${theme === 'dark' ? 'falling-stars' : ''}`}>

      {/* Light Mode - Sliding Background */}
      {theme === 'light' && (
        <>
          <div className="bg" />
          <div className="bg bg2" />
          <div className="bg bg3" />
        </>
      )}

      {/* Fireflies in Dark Mode */}
      {theme === 'dark' &&
        [...Array(15)].map((_, i) => (
          <div key={i} className="firefly" />
        ))}

      {/* Routed Pages */}
      {children}
    </main>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router basename="/spr_portfolio">
        <div className="app-container">

          <Helmet>
            <title>Sanyu Paul Reddy Singareddy - Portfolio</title>
            <meta name="description" content="Portfolio of Sanyu Paul Reddy Singareddy, Computer Science student specializing in MERN stack and IoT solutions." />
            <meta name="keywords" content="portfolio, Sanyu Paul Reddy, MERN stack, IoT, full-stack developer" />
          </Helmet>

          <Sidebar />

          <MainContent>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<PersonalInfo />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </Suspense>
          </MainContent>

        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
