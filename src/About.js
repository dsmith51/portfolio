import React from 'react';
import bit from './assets/bitmoji4.png'

export const About = () => (
    <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">About Me</h2>
              <p className="text-white-50">I am passionate about progress, and love all things
                associated with personal development. This includes self education, fitness, health and most of all God.</p>
            </div>
          </div>
          <img src={bit} className="img-fluid" alt="" />
        </div>
      </section>
)