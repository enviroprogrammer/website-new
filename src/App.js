import React from 'react';
import { Slide } from 'react-slideshow-image'
import './App.css';
import { Link } from 'react-scroll'
import resume from './mi-resume.pdf';

function Header() {
    return (
        <div>
            <h1 className="header">Hi! I'm Monica.</h1>
        </div>
    );
}

function MainContent() {
    return(
        <div className="container-fluid">
        <p>I'm currently a web developer at <a href="http://www.rogers.com" target='_blank'>Rogers Communications.</a></p>
        </div>
    );
}

const slideshowProperties = {
    duration: 5000,
    transitionDuration: 800,
    infinite: false,
    autoplay: false,
    indicators: true,
    arrows: true,
}

function ProjectSlideshow() {
    return(
        <div className="container-fluid" id="projects">
        <Slide {...slideshowProperties}>
        <div className="slides">
            <img src={require('./projects/onaroll.png')} alt="onaroll"/>
            <h2 className="subHeader">On-a-Roll!</h2>
            <p>A simple, roll-a-ball game made using Unity. The player rolls a ball and must collect all cubes to win </p>
        </div>

        <div className="slides">
            <img src={require('./projects/spaceshooter.png')} alt="spaceshooter"/>
            <h2 className="subHeader">Space Shooter</h2>
            <p>A first-person shooter game made in Unity. The player must shoot as many asteroids as possible while simultaneously avoiding being hit by an asteroid.</p>
        </div>

        <div className="slides">
            <img src={require('./projects/cleancity.png')} alt="ccgc"/>
            <h2 className="subHeader">Clean City, Green City</h2>
            <p>An educational game to teach people (particularly young children) about waste management and sustainability. Developed for the CSC299 research course at the University of Toronto under the supervision of Prof. Steve Engels.</p>
        </div>

        <div className="slides">
            <img src={require('./projects/afsk2.png')} alt="football"/>
            <h2 className="subHeader">American Football Score Keeper</h2>
            <p>A simple Android app to keep track of scores for a game of American football.</p>
        </div>

        <div className="slides">
            <img src={require('./projects/abcbookstore.png')} alt="football"/>
            <h2 className="subHeader">ABC Bookstore Business Card</h2>
            <p>A front-end Android application that acts as a business card for ABC Bookstore, a fictional business. Created using XML.</p>
        </div>

        </Slide>
        </div>
    );
}

function Slideshow() {
    return(
        <div className="container-fluid" id="parent">
        <p>Outside of school, photography is my favourite pastime. I do a lot of urban/nature photography. These photos were taken on an iPhone SE and iPhone 8.</p>
        <Slide {...slideshowProperties}>
        <div className="slides">
            <img src={require('./images/IMG_0081.jpg')} alt={"image1"}/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_0097.jpg')} alt={"image2"}/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_0357.jpg')} alt={"image3"}/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_0358.jpg')} alt={"image4"}/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_0410.jpg')} alt={"image5"}/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_1202.jpg')} alt={"image6"}/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_1250.jpg')} alt="image7"/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_6664.jpeg')} alt="image8"/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_8397.jpeg')} alt="image9"/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_8398.jpeg')} alt="image10"/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_8511.jpeg')} alt="image11"/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_5479.jpeg')} alt="image12"/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_0922.jpeg')} alt="image13"/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_1458.jpg')} alt="image14"/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_1433.jpg')} alt="image15"/>
        </div>

        <div className="slides">
            <img src={require('./images/IMG_7220.jpeg')} alt="image16"/>
        </div>

        </Slide>
        <p>You can check out more of my photos on my Instagram <a href="https://www.instagram.com/monicaiqbal/" target="_blank" rel="noopener noreferrer">@monicaiqbal!</a></p>
        </div>
    );
}

function Photography() {
    return(
        <div className="container-fluid">
            <h1 className="header">Photography</h1>
            <Slideshow />
        </div>
    );
}

function Projects() {
    return(
        <div className="container-fluid">
            <h1 className="header">Projects</h1>
            <ProjectSlideshow/>
        </div>
    )
}

function TechStack() {
    return(
        <div className="container-fluid" id="courses-list">
            <h1 className="header">Tech Stack</h1>
            <p>Disclaimer: this is not an exhaustive list.</p>
            <ul>
            <li><b>ReactJS</b></li>
            <li><b>AngularJS</b></li>
            <li><b>Contentful</b></li>
            <li><b>HTML</b></li>
            <li><b>CSS</b></li>
            <li><b>React Native</b></li>
            <li><b>Python</b></li>
            <li><b>Java</b></li>
            <li><b>Figma</b></li>
            </ul>
        </div>
    )
}

function App() {
  return (
    <body className="bg">
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
                    <a href="index.html" className="navbar-brand">
                        <div id="name">monica<i>iqbal</i></div>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="mainNavBar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link activeClass="active" to="photography" spy={true} smooth={true} offset={20} duration={900}>Photography</Link></li>
                        <li>
                            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={20} duration={900}>Projects</Link>
                        </li>
                        <li><Link activeClass="active" to="courses" spy={true} smooth={true} offset={20} duration={900}>Relevant Courses</Link></li>
                        <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="content">
    <Header/>
    <MainContent/>
    </div>

    <hr></hr>

    <div id="projects">
      <Projects/>
    </div>

    <hr></hr>

    <div id = "photography">
      <Photography/>
    </div>

    <hr></hr>

    <div id="techstack">
    <TechStack/>
    </div>

    <hr></hr>

    <div id="social-media-buttons">
        <p>Questions? Comments? Let's get in touch!</p>
        <a href="http://twitter.com/infinitebliss_2" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
        <a href="http://github.com/enviroprogrammer" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
        <a href="https://ca.linkedin.com/in/iqbalmonica" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
        <a href="http://instagram.com/monicaiqbal" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="mailto:monica.iqbal@mail.utoronto.ca" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope fa-2x"></i></a>
        <p>
        Website created using ReactJS
        </p>
    </div>
    </body>

  );
}

export default App;
