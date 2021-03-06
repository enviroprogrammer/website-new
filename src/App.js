import React from 'react';
import { Slide } from 'react-slideshow-image'
import './App.css';
import { Link } from 'react-scroll'
import me from './AL5_8598.png';
import resume from './mi-resume.pdf';

function Header() {
    return (
        <div>
            <h1 className="header">Hi! I'm Monica.</h1>
            <h2 className="subHeader" id="slogan">Software developer. Lifelong learner. Environmentalist. Researcher.</h2>
        </div>
    );
}

function MainContent() {
    return(
        <div className="container-fluid">
        <div id="me"><img src={me} alt={"me"}/></div>
        <p>I was born in Chicago, then moved to New York City at age two, then called Toronto home since I was four and a half.</p>

        <p>Ever since I was a kid, I was very fascinated by computers and aspired to be a software developer. I spent countless hours learning about the different parts of a computer and even offered a helping hand to friends and family to address any of their computer-related issues. At the age of ten, I started learning HTML, and that’s where my passion for software development grew.</p>

        <p>I am a recent graduate from the University of Toronto. I received my HBSc in computer science, with minors in environmental geography and environmental studies. I strongly believe that CS can help address and solve environmental issues because CS involves a lot of problem solving using programs and algorithms.</p>

        <p>To apply the skills I've learned in the classroom, I look for as many opportunities as I can find. I have internship experience at CIBC and undergraduate research experience at UofT. I also took on two on-campus jobs related to CS; one as an IT assistant and another as a mobile developer. I am a firm believer that learning extends beyond lectures (and beyond undergrad).</p>

        <p>In my spare time, I enjoy photography, nature walks, hanging out with friends and family, listening to music, playing board or video games, reading, and writing. I am also an avid watcher of major sporting events such as the Olympics and the FIFA World Cup. In addition, I love to drink tea, especially chamomile and orange pekoe.</p>
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

function Projects() {
    return(
        <div className="container-fluid">
            <h1 className="header">Projects</h1>
            <ProjectSlideshow/>
        </div>
    )
}

function Courses() {
    return(
        <div className="container-fluid" id="courses-list">
            <h1 className="header">Relevant Courses</h1>
            <ul>
            <li><b>CSC258</b> Computer Organization</li>
            <li><b>CSC263</b> Data Structures & Analysis</li>
            <li><b>ENV222</b> Interdisciplinary Environmental Studies</li>
            <li><b>GGR334</b> Water Resource Management</li>
            <li><b>PSY435</b> Environmental Psychology</li>
            <li><b>CSC309</b> Programming on the Web</li>
            <li><b>CSC343</b> Databases</li>
            <li><b>CSC209</b> Software Tools & Systems Programming</li>
            <li><b>CSC318</b> Design of Interactive Computational Media</li>
            <li><b>CSC207</b> Software Design</li>
            <li><b>CSC236</b> Theory of Computation</li>
            <li><b>GGR223</b> Environment, Society, & Resources</li>
            <li><b>CSC148</b> Intro to Computer Science</li>
            <li><b>CSC165</b> Math Expression & Reasoning for CS</li>
            <li><b>ENV100</b> Intro to Environmental Studies</li>
            <li><b>CSC301</b> Intro to Software Engineering</li>
            <li><b>ENV335</b> Environmental Design</li>
            <li><b>ENV307</b> Urban sustainability</li>
            <li><b>ENV350</b> Energy Policy</li>
            <li><b>CSC428</b> Human-Computer Interaction</li>
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
                    <a href="index.html" className="navbar-brand">Monica Iqbal</a>
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

    <div id = "photography">
      <Photography/>
    </div>

    <hr></hr>

    <div id="projects">
      <Projects/>
    </div>

    <hr></hr>

    <div id="courses">
    <Courses/>
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
