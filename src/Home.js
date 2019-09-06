import React from 'react';
import Typing from 'react-typing-animation';

export const Home = () => (
    <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
                <Typing>
                <h1 className="mx-auto my-0 text-uppercase typewriter">Hello, I'm Daniel.</h1>
                <Typing.Delay ms={2000}/>
                <h2 className="text-white-50 mx-auto mt-2 mb-5">I am a full-stack developer, with a passion
                for design, data and visualization.  Welcome to my site.</h2>
                </Typing>
                <a href="#about" className="btn btn-primary js-scroll-trigger">Take A Look</a>
            </div>
        </div>
    </header>
);