import React from 'react';
import { Slide } from 'react-slideshow-image'
import './App.css';
import { Link } from 'react-scroll'
import resume from './mi-resume.pdf';

function Header() {
    return (
        <div>
            <h1 className="header">Hi! I'm Monica.</h1>
            <p><i>I develop software and aspire to change the world someday.</i></p>
        </div>
    );
}

function MainContent() {
    return(
        <div className="container-fluid">
        <p>I'm currently a <b>web developer</b> at <a href="http://www.rogers.com" target='_blank' rel="noopener noreferrer">Rogers Communications.</a> Previously, I was a co-op student at <a href="https://www.cibc.com/en/personal-banking.html" target='_blank' rel="noopener noreferrer">CIBC</a> as a <b>quality assurance tester.</b></p>
        <p>I hold an Honours Bachelor of Science in Computer Science from the University of Toronto. My interests primarily lie in the fields of <b>software engineering, human-computer interaction,</b> and <b>user experience design.</b> I hope to research the nexus between computer science and the environment in order to discover innovative solutions to today's environmental issues.</p>
        <p>When I am not at my desk writing code or debugging for hours on end, you can find me <b>roaming the streets of Toronto with my camera, getting lost in nature, playing the piano,</b> or at a <a href="https://www.uofttoastmasters.com/" target='_blank' rel="noopener noreferrer">UofT Toastmasters</a> meeting <b>practicing public speaking.</b></p>
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

        <div className='slides'>
            <h2 className="subHeader">Anxious Mango (COMING SOON!)</h2>
            <p>An app to help users create thought records for life's stressors.</p>
        </div>
        </Slide>
        </div>
    );
}

function Slideshow() {
    return(
        <div className="container-fluid" id="parent">
        <p>Shot on Sony CyberShot DXC-HX350 and Samsung Galaxy A50</p>
        <Slide {...slideshowProperties}>
        <div className="slides">
            <img src={require('./images/2021-05-12-120702982.jpeg')} alt={"image1"}/>
        </div>

        <div className="slides">
            <img src={require('./images/2021-09-29-060644362.jpeg')} alt={"image2"}/>
        </div>

        <div className="slides">
            <img src={require('./images/2021-09-29-061517121.jpeg')} alt={"image3"}/>
        </div>

        <div className="slides">
            <img src={require('./images/20210514_122226.jpeg')} alt={"image4"}/>
        </div>

        <div className="slides">
            <img src={require('./images/20210802_124207.jpeg')} alt={"image5"}/>
        </div>

        <div className="slides">
            <img src={require('./images/20210904_145457.jpeg')} alt={"image6"}/>
        </div>

        <div className="slides">
            <img src={require('./images/20210911_130829.jpeg')} alt="image7"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC00310.JPG')} alt="image8"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC00358.JPG')} alt="image9"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC00384.JPG')} alt="image10"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC00687.JPG')} alt="image11"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC00706.JPG')} alt="image12"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC00897.JPG')} alt="image13"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC00986.JPG')} alt="image14"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC00995.JPG')} alt="image15"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC01042.JPG')} alt="image16"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC01331.JPG')} alt="image17"/>
        </div>

        <div className="slides">
            <img src={require('./images/DSC01372.JPG')} alt="image18"/>
        </div>

        </Slide>
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
        <div className="container-fluid" id="techstack">
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
        <div id="content" class="top-bg">
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
                            <li><Link activeClass="active" to="techstack" spy={true} smooth={true} offset={20} duration={900}>Tech Stack</Link></li>
                            <li><a href={resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Header/>
        <MainContent/>
    </div>

    <div id="projects">
      <Projects/>
    </div>

    <div id = "photography">
      <Photography/>
    </div>

    <div id="techstack">
    <TechStack/>
    </div>

    <div id="social-media-buttons">
        <p>Questions? Comments? Let's get in touch!</p>
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

export default App;
