import { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/Gustavo_Davalos.jpg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Web developer", "Backend developer", "Fullstack developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 700;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
        }
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
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={8} lg={8} xl={8}>
                        <span className="tagline">Welcome to My Portfolio</span>
                        <h1>{`I'm a `}<span className="wrap">{text}</span></h1>
                        <p>At Arca Unity, we are a diverse team of aspiring innovators, united by our passion for STEM disciplines including mechatronics, electronics, electronic systems and telecommunications, and software development. While some of us are recent graduates, others are still on their academic journey. Together, we are driven by a shared goal: to excel in robot development competitions, engage in technology conferences, and explore opportunities to apply our combined knowledge. Through collaboration, we aim to secure recognition, awards, and further enrich our academic and professional growth.</p>
                        <button onClick={() => copyToClipboard('gadavalosv@gmail.com')}>{tooltipText} <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={4} lg={4} xl={4}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}