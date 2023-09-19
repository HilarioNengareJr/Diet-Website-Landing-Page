import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import About from './components/About';
import Classes from './components/Classes';
import Blog from './components/Blog';
import Footer from './components/Footer';
import AppCard from './components/AppCard';
import BackTop from './components/Backtop';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Fade top>
          <Hero />
        </Fade>
        
        <Fade left>
          <Service />
        </Fade>
        
        <Fade right>
          <About />
        </Fade>
        
        <Slide left>
          <Classes />
        </Slide>
        
        <Slide right>
          <Blog />
        </Slide>
        
        <Fade left>
          <AppCard />
        </Fade>
        
     
        <Fade bottom>
          <Footer />
        </Fade>
        
        <BackTop />
      </React.Fragment>
    );
  }
}

export default App;
