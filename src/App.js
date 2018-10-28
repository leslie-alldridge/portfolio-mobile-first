import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header';
import NavbarTop from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import BlogHeading from './Components/BlogHeader';
import BlogContent from './Components/BlogContent';
import ContactHeader from './Components/ContactHeader';
import AboutHeader from './Components/AboutHeader';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTop />
        <Header />
        <Portfolio />
        <BlogHeading />
        <BlogContent />
        <ContactHeader />
        <Contact />
        <AboutHeader />
        <About />
      </div>
    );
  }
}

export default App;
