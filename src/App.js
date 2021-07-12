
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';



//components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Experience from './components/Experience/ExperienceList';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';





function App() {





  return (
    <React.Fragment>
    
         

         <Navbar />
        <Header title='front end web developer'/>
        <About />
        <Services />
        <Experience/>
        <Portfolio/>
        <Testimonials />
        <Contact />
        <Footer />

    </React.Fragment>
  );
}

export default App;
