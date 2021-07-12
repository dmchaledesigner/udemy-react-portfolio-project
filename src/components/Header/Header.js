import React from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import './header.scss';

import Particles from 'react-particles-js';
import Button from '../Button/Button';




const Header = ({title, buttonStyles}) => {
    return (
       <React.Fragment>


                <div id="home" className="header-wrapper">

                <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
                <div className="overlay"></div>

                
                
                    <div className="main-info">
                        <h1>{title}</h1>

                        <Typed
                        className="typed-text"
                        strings={["Wordpress", "HTML5", "CSS3", "Vanilla Javacript", "React.js" ]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                        />

                    <Button buttonStyles="btn--outline">GET IN TOUCH</Button>

                    </div>


                   

                </div>

               


       </React.Fragment>
    )
}

export default Header;
