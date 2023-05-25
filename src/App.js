import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import React from 'react';

import { PageDataContextProvider } from './PageDataContext'; 

function App() {
  
  return (
    <div className="App">
      
        <Header />
        <PageDataContextProvider >
          <Hero />
        </PageDataContextProvider>
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

    </div>
  );
}

export default App;
