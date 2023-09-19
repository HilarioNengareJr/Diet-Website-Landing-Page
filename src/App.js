import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import Classes from './components/Classes';
import Blog from './components/Blog';
import Footer from './components/Footer';
import AppCard from './components/AppCard';
import './App.css';
import BackTop from './components/BackTop';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
        <Service />
        <About />
        <Classes />
        <Blog />
        <AppCard />
        <Footer />
        <BackTop />
      </React.Fragment>
    );
  }
}

export default App;
