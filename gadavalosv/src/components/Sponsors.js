import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sponsor1 from "../assets/img/sponsor1.png";

const sponsors = [
    { id: 1, imgSrc: sponsor1, altText: "IDEA Electrónica" },
  // Agrega más sponsors según sea necesario
];

export const Sponsors = () => {
    return (
        <section id="sponsors" className="sponsors-section">
            <Container>
                <h2>Our Sponsors</h2>
                <Row className="justify-content-center align-items-center">
                    {sponsors.map((sponsor) => (
                        <Col key={sponsor.id} sm={4} className="text-center mb-4">
                            <img src={sponsor.imgSrc} alt={sponsor.altText} className="sponsor-img" />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};