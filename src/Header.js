import {Container} from "react-bootstrap";
import './App.css';
import me from "./monica.jpg";
import React from "react";

export default function Header() {
    return (
        <Container fluid>
            <div className="header">
                <table>
                    <tr>
                        <td>
                            <div className="intro-text">
                                <h1 className="name">Hi! I'm Monica.</h1>
                                <h2 className="roles">
                                    I am a <b>software engineer,</b> <b>user experience designer,</b> and <b>public speaker.</b> I also care deeply about the environment. <span role="img" aria-label="leaf">🌱</span>
                                </h2>
                                <div className="welcome">
                                    <p>Welcome to my portfolio! While you're here, feel free to peruse the site and check out my work. <span role="img" aria-label="smiley">😊</span></p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="me">
                                <img src={me} alt="Monica Iqbal"/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </Container>
    );
}