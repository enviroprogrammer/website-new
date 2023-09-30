import React from 'react';
import './App.css';
import resume from './mi-resume-2023.pdf';
import About from './About.js';
import Work from "./Work.js";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Photography from "./Photography";

function Home() {
  return (
    <body className="bg">
    <BrowserRouter>
        <div id="content">
            <div className="sidebar-nav">
                <div className="navbar navbar-inverse" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand">
                                <div id="name">mi</div>
                            </Link>
                        </div>
                        <div className="collapse navbar-collapse" id="mainNavBar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/work">Work</Link></li>
                                <li><Link to="/photography">Photography</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to={resume} target="_blank" rel="noopener noreferrer">Resume</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={<Header />}></Route>
                <Route exact path='/about' element={<About />}></Route>
                <Route exact path='/work' element={<Work />}></Route>
                <Route exact path='/photography' element={<Photography />}></Route>
            </Routes>
        </div>
    </BrowserRouter>

    <div id="social-media-buttons">
        <a href="http://github.com/enviroprogrammer" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
        <a href="https://ca.linkedin.com/in/iqbalmonica" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
        <a href="mailto:monica.iqbal@mail.utoronto.ca" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope fa-2x"></i></a>
        <p id='created'>
            Website created using ReactJS
        </p>
    </div>

    </body>

  );
}

export default Home;
