import React from 'react';
import bit from './assets/bitmoji1.png'
import wormhole from './assets/https _blogs-images.forbes.com_quora_files_2016_02_6914441342_775b4ab9a7_o.jpg'

export const Works = () => (
    <section id="projects" className="projects-section bg-light">
        <div className="container">
            {/* Featured Project Row */}
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                <div className="col-xl-8 col-lg-7">
                    <img className="img-fluid mb-3 mb-lg-0" src={bit} alt=""/>
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div className="featured-text text-center text-lg-left">
                        <h4>Here are a couple things im currently working on!</h4>
                        <p className="text-black-50 mb-0">Check out my GitHub below to see even more!</p>
                    </div>
                </div>
            </div>
            {/* Project One Row */}
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                <div className="col-lg-6">
                    <img className="img-fluid" src={wormhole} alt=""/>
                </div>
                <div className="col-lg-6">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div className="project-text w-100 my-auto text-center text-lg-left">
                                <h4 className="text-white">Perpetual Learning</h4>
                                <p className="mb-0 text-white-50">I consider myself a student of the
                                game.  To that end, I am always pursuing new information; especially about computer
                                science.  Currently I am learning about Machine Learning using Tensorflow, as well as SEO
                                (search engine optimization).</p>
                                <hr className="d-none d-lg-block mb-0 ml-0"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project Two Row */}
            <div className="row justify-content-center no-gutters">
                <div className="col-lg-6">
                    <div className="bk-root" id="e47cf773-e559-4c34-b433-23e0292cfb44" data-root-id="1700"></div>
                </div>
                <div className="col-lg-6 order-lg-first">
                    <div className="bg-black text-center h-100 project">
                        <div className="d-flex h-100">
                            <div className="project-text w-100 my-auto text-center text-lg-right">
                                <h4 className="text-white">Interactive Plots</h4>
                                <p className="mb-0 text-white-50">I've always been passionate about math and
                                art and I love to play around with both.  I especially enjoy working with big data
                                and finding creative ways of visualizing trends.</p>
                                <hr className="d-none d-lg-block mb-0 mr-0"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)