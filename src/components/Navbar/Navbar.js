import React, {useState} from 'react';
import './navbar.scss';
//import logo from '../../images/logo.png';

import {Link} from 'react-scroll';



const Navbar = () => {

 // state
  const [click, setClick] = useState(false);


  // functions
  const handleClick = () => {
    setClick(!click);
  }


    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">

        {/* <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick}></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="home" smooth={true} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} offset={-110} className="nav-link" href="#">about me</Link>
            </li>
            <li className="nav-item">
              <Link to="services" smooth={true} offset={-110} className="nav-link" href="#">services</Link>
            </li>
            <li className="nav-item">
              <Link to="experience" smooth={true} offset={-110} className="nav-link" href="#">experience</Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" smooth={true} offset={-110} className="nav-link" href="#">portfolio</Link>
            </li>

            <li className="nav-item">
              <Link to="contacts" smooth={true} offset={-110} className="nav-link" href="#">contacts</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>



        </React.Fragment>
    )
}

export default Navbar
