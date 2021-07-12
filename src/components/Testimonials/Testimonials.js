import React from 'react';

import './testimonials.scss';
import TestimonialsCarousel from './TestimonialsCarousel';




const Testimonials = () => {
    return (
        <React.Fragment>

            <div id="testimonials" className="testimonials">
                <h1>my happy clients</h1>
                <div className="container">
                    <div className="testimonials-content">
                  <TestimonialsCarousel />
                    </div>
                </div>
                </div>


        </React.Fragment>
    )
}

export default Testimonials;
