import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './ThemeContext';
import Sidebar from './components/Sidebar';
import './App.css';

const PersonalInfo = lazy(() => import('./components/PersonalInfo'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Interests = lazy(() => import('./components/Interests'));
const Resume = lazy(() => import('./components/Resume'));

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Sanyu Paul Reddy Singareddy - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Sanyu Paul Reddy Singareddy, a Computer Science student specializing in MERN stack and IoT solutions."
        />
        <meta
          name="keywords"
          content="portfolio, Sanyu Paul Reddy, MERN stack, IoT, full-stack developer"
        />
      </Helmet>
      <Router>
        <Sidebar>
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
        </Sidebar>
      </Router>
    </ThemeProvider>
  );
}

export default App;