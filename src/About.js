import React from "react";
import './App.css';
import {Container} from "react-bootstrap";

export default function About() {
    return(
        <Container fluid>
            <h1 className="who">Who am I?</h1>
            <h2 className="aboutme">I am a Master of Information student at the University of Toronto, focusing on user experience design and environmental studies. Moreover, I hold an Honours Bachelor of Science in computer science from UofT. I also have a day job as a software engineer at Rogers. (In case you were wondering, no, I was not responsible for the July 8, 2022 outage. <span role="img" aria-label="wink">😉</span>)</h2>
            <br/>
            <h1 className="what">What is my passion?</h1>
            <h2 className="passions">I aim to explore the role that technology plays in addressing environmental issues. One way I would like to accomplish this is by leveraging my UX design knowledge in the process. In other words, how can I <i>design</i> a sustainable future? I see myself getting involved in the research side of computer science, and I plan to write a thesis during my Master's program.</h2>
            <br/>
            <h1 className="what">What does my tech stack look like?</h1>
            <h2 className="techstack">There's too many for me to list them all, but off the top of my head: <b>Angular,</b> <b>React</b>, <b>Contentful</b>, <b>HTML/CSS</b>, <b>Python</b>, <b>Figma</b>, <b>Balsamiq</b>, <b>SQL,</b> and <b>Swift.</b></h2>
            <br/>
            <h1 className="what">Outside of work and school, what do I enjoy doing?</h1>
            <h2 className="hobbies">I love to go on walks in the city, hike, cook, bake, read, write, take pictures, and do public speaking. I joined <a id="toastmasters" href="https://www.uofttoastmasters.com/" target="_blank" rel="noopener noreferrer">UofT Toastmasters</a> in 2019 and have been actively working on my public speaking skills ever since. I spoke at info sessions, panels, and at a virtual mental health conference in 2020.</h2>
            <br/>
            <h1 className="where">Where do I see myself in 10 years?</h1>
            <h2 className="future">Working in sustainability to some degree.</h2>
            <br/>
            <h1 className="when">When did my passions for technology and the environment begin?</h1>
            <h2 className="beginning">Since I was a kid, I had a knack for technology and learned web development at the tender age of 10. I also thoroughly loved being in nature (I still do). </h2>
            <br/>
            <h1 className="why">Why did I decide on my current path?</h1>
            <h2 className="path">In my first year of undergrad, I took an environmental studies course as an elective, which gave me an epiphany. Given that I was already pursuing my computer science degree, I've wondered how I can use my CS background to help bridge the gap between technology and environmental issues. That course was a pivotal moment in my life.</h2>
            <br/>
            <h1 className="how">How can you get in touch with me?</h1>
            <h2 className="contact">Through LinkedIn or email! Refer to the links at the bottom of the page.</h2>
        </Container>
    )
}
