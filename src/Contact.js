import React from 'react';

export const Contact = () => (
   <section className="contact-section bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2" />
                  <h4 className="text-uppercase m-0">City</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">Denver, CO</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="mailto:dasmith11893@gmail.com">dasmith11893@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">+1 (678) 629-7020</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a href="http://www.facebook.com/danielsmith51" className="mx-2">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="mx-2">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
)