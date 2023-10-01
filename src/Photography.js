import React from "react";
import './App.css';
import rwb from './images/DSC00706.JPG';
import beach from './images/DSC00986.JPG';
import lighthouse from './images/DSC01042.JPG';
import distillery from './images/DSC00310.JPG';
import ccommon from './images/DSC00358.JPG';
import seagull from './images/DSC01331.JPG';
import viaduct from './images/DSC00384.JPG';
import ashbridges from './images/IMG_4618.JPG';
import coronation from './images/foliage 4.jpg';
import rcharris from './images/DSC02558.jpg';
import aquarium from './images/DSC02500.JPG';
import riverdale from './images/DSC02670.jpg';
import cherryblossoms from './images/DSC03310.JPG';
import cherrybeach from './images/DSC03462.JPG';
import polsonpier from './images/DSC02014.JPG';
import {Container} from "react-bootstrap";

export default function Photography() {
    return(
        <Container fluid>
        <div class="why-photography">
            <h1>I use photography as a medium to capture the beauty of the world around us.</h1>
            <p>What initially became a way to deal with anxiety as a teenager quickly turned into one of my favourite pastimes.</p>
        </div>

            <div className="photography">
                <div className="grid-container">
                    <div className="grid-item"><img src={rwb} alt="red winged blackbird"/></div>
                    <div className="grid-item"><img src={beach} alt="beach in southampton, ontario"/></div>
                    <div className="grid-item"><img src={lighthouse} alt="lighthouse in southampton, on"/></div>
                    <div className="grid-item"><img src={distillery} alt="distillery district"/></div>
                    <div className="grid-item"><img src={ccommon} alt="corktown common"/></div>
                    <div className="grid-item"><img src={seagull} alt="seagull"/></div>
                    <div className="grid-item"><img src={viaduct} alt="queen st viaduct"/></div>
                    <div className="grid-item"><img src={ashbridges} alt="ashbridges bay"/></div>
                    <div className="grid-item"><img src={coronation} alt="coronation park"/></div>
                    <div className="grid-item"><img src={rcharris} alt="rc harris water treatment plant"/></div>
                    <div className="grid-item"><img src={aquarium} alt="ripley's aquarium"/></div>
                    <div className="grid-item"><img src={riverdale} alt="riverdale park"/></div>
                    <div className="grid-item"><img src={cherryblossoms} alt="cherry blossoms at trinity bellwoods park"/></div>
                    <div className="grid-item"><img src={cherrybeach} alt="cherry beach"/></div>
                    <div className="grid-item"><img src={polsonpier} alt="polson pier"/></div>
                </div>
            </div>
        </Container>
    )
}