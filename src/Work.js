import React from "react";
import './App.css';
import {Container} from "react-bootstrap";
import when2meet from './projects/when2meet redesign.png';
import wish from './projects/wish redesign.png';
import plaome from './projects/plaome.png';
import hypracycle from './projects/hypracycle.png';
import delorean from './projects/delorean.png';
import cleank from './projects/clean kangaroo.png';
import cleank_desktop from './projects/clean kangaroo desktop.png';
import impervious from './projects/impervious surfaces.png';
import toastmasters from './projects/toastmasters election promo dec 22.png';

export default function Work() {
    return(
        <Container fluid>
            <div className="work">
                <div className="about-my-work">
                    <h1>My work samples</h1>
                    <p>Design, academic writing, and everything in between.</p>
                </div>
                <div className="work-grid-container">
                    <div className="work-grid-item"><img src={when2meet} alt="when2meet redesign"/></div>
                    <div className="work-grid-item"><img src={wish} alt="wish redesign"/></div>
                    <div className="work-grid-item"><img src={plaome} alt="plaome"/></div>
                    <div className="work-grid-item"><img src={hypracycle} alt="hypracycle"/></div>
                    <div className="work-grid-item"><img src={delorean} alt="delorean"/></div>
                    <div className="work-grid-item"><img src={cleank} alt="clean kangaroo mobile"/></div>
                    <div className="work-grid-item"><img src={cleank_desktop} alt="clean kangaroo desktop"/></div>
                    <div className="work-grid-item"><img src={impervious} alt="impervious surfaces"/></div>
                    <div className="work-grid-item"><img src={toastmasters} alt="toastmasters election promo"/></div>
                </div>
            </div>
        </Container>
    )
}