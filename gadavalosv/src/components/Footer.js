import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import logo from '../assets/img/logo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    const [tooltipText, setTooltipText] = useState('Copy to clipboard');

    const copyToClipboard = (mail) => {
        navigator.clipboard.writeText(mail)
            .then(() => {
                setTooltipText('Copied...');
                setTimeout(function() {
                    setTooltipText('Copy to clipboard');
                }, 2000);
            })
            .catch((error) => {
                console.error('Error copying to clipboard: ', error);
            });
    }
    return (
        <footer id="footer" className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img className="footer-logo" src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target="_blank" href="https://www.linkedin.com/in/gustavo-davalos-5801901a2/" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a target="_blank" href="https://github.com/gadavalosv" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
                            <a target="_blank" href="https://www.youtube.com/@justdevmore" rel="noopener noreferrer"><img src={navIcon3} alt="Youtube" /></a>
                        </div>
                        <p>Contact Me: <span className="tooltipmail" onClick={() => copyToClipboard('gadavalosv@gmail.com')}>
                            <a className="mail">gadavalosv@gmail.com</a>
                            <span className="tooltiptext">{tooltipText}</span>
                        </span></p>
                        <p>2025</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}