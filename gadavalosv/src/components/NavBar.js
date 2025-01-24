import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const [tooltipText, setTooltipText] = useState("Let's Connect");

    const copyToClipboard = (mail) => {
        navigator.clipboard.writeText(mail)
            .then(() => {
                setTooltipText('Gmail Copied...');
                setTimeout(function() {
                    setTooltipText("Let's Connect");
                }, 1500);
            })
            .catch((error) => {
                console.error('Error copying to clipboard: ', error);
            });
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className="mainLogo" src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#abouts" className={activeLink === 'abouts' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('abouts')}>My Projects</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>About Me</Nav.Link>
                        <Nav.Link href="#awards" className={activeLink === 'awards' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('awards')}>Awards & Recognitions</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a target="_blank" href="https://www.linkedin.com/in/gustavo-davalos-5801901a2/" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a target="_blank" href="https://github.com/gadavalosv" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
                            <a target="_blank" href="https://www.youtube.com/@justdevmore" rel="noopener noreferrer"><img src={navIcon3} alt="Youtube" /></a>
                        </div>
                        <button onClick={() => copyToClipboard('gadavalosv@gmail.com')}><span>{tooltipText}</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}