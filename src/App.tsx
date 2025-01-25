// In App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Feature />
      <Story />
      <Footer />
    </Router>
  );
}

export default App;
