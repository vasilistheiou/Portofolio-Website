import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/About/AboutPage';
import ContactPage from './components/Contact/ContactPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';

// import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
