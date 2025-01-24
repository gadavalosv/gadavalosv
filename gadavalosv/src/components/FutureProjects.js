import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Modal } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProjectCard } from "./ProjectCard";
import proj_coche_tanque_img from "../assets/img/projects/proj_coche_tanque.png";
import proj_coche_tanque_img2 from "../assets/img/projects/proj_coche_tanque_2.png";
import proj_coche_tanque_img3 from "../assets/img/projects/proj_coche_tanque_3.png";
import starterMotorsRebuilder_img from "../assets/img/projects/starterMotorsRebuilder.jpg";
import starterMotorsRebuilder_img2 from "../assets/img/projects/starterMotorsRebuilder2.jpg";
import rover_img1 from "../assets/img/projects/rover1.jpg";
import rover_img2 from "../assets/img/projects/rover2.jpg";
import rover_img3 from "../assets/img/projects/rover3.jpg";
import rover_img4 from "../assets/img/projects/rover4.jpg";
import rover_img5 from "../assets/img/projects/rover5.jpg";
import rover_img6 from "../assets/img/projects/rover6.jpg";
import lifeDetector_img from "../assets/img/projects/lifeDetector.jpg";
import fullRobotArm_img from "../assets/img/projects/fullRobotArm.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const FutureProjects = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const allProjects = [
        /*{
            title: "Hackaton TalentLand 2023",
            description: "VROVCOR-TM Remote Control Tank Car",
            imgUrl: proj_coche_tanque_img,
            startDate: "2023-04-10",
            endDate: "2023-04-14",
            detailedDescription: "VROVCOR-TM is an innovative proposal for a remote control vehicle designed to carry out surveillance and fire detection tasks in large facilities and extensive areas, which is controlled through a low-cost and long-range communication frame that is based in DTMF technology.",
            images: [proj_coche_tanque_img, proj_coche_tanque_img2, proj_coche_tanque_img3]
        },*/
        {
            title: "A.R.M.O.R. rover for University Rover Chalenge",
            description: "Rover designed for a Robotics competition for college students.",
            imgUrl: rover_img1,
            startDate: "2023-12-01",
            endDate: "2024-07-30",
            detailedDescription: "Arca Unity's Rover for Mobile Operations and Research (A.R.M.O.R.). The University Rover Challenge (URC) by the Mars Society is a robotics competition for university level students that challenges teams to design and build a rover that would be of use to early explorers on Mars.",
            images: [rover_img1, rover_img2, rover_img3, rover_img4, rover_img5, rover_img6]
        },/*
        {
            title: "Rover Robot Arm",
            description: "Robot Arm for A.R.M.O.R. Rover.",
            imgUrl: fullRobotArm_img,
            startDate: "2024-08-10",
            endDate: "2024-10-30",
            detailedDescription: "Auxiliary robotic arm of the A.R.M.O.R. rover.",
            images: [fullRobotArm_img]
        },*/
        {
            title: "Life Detector",
            description: "URC MARS life detector",
            imgUrl: lifeDetector_img,
            startDate: "2024-12-30",
            endDate: "2025-05-15",
            detailedDescription: "Life Detector Module for the A.R.M.O.R. rover.",
            images: [lifeDetector_img]
        },
        {
            title: "Product for the reconstruction of starter motors.",//Design and Manufacture of a 
            description: "Mechanical Seal Extractor for the GALZA starter drive company",
            imgUrl: starterMotorsRebuilder_img,
            startDate: "2019-02-01",
            endDate: "2019-06-30",
            detailedDescription: "Machine capable of increasing production performance by up to 80%, in addition to safeguarding the integrity of the operator.",
            images: [starterMotorsRebuilder_img, starterMotorsRebuilder_img2]
        },/*
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet",
            imgUrl: projImg2,
            startDate: "2023-12-01",
            endDate: "2023-12-15",
            detailedDescription: "Detailed information about Lorem Ipsum project...",
            images: [projImg3, proj_coche_tanque_img, projImg2]
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet",
            imgUrl: projImg3,
            startDate: "2024-06-01",
            endDate: "2024-06-30",
            detailedDescription: "Detailed information about Lorem Ipsum project...",
            images: [projImg3, proj_coche_tanque_img, projImg2]
        },*/
    ];

    const getCurrentProjects = () => allProjects.filter(project => Date.parse(project.startDate) <= Date.now() && Date.parse(project.endDate) >= Date.now());
    const getFutureProjects = () => allProjects.filter(project => Date.parse(project.startDate) > Date.now());
    const getPastProjects = () => allProjects.filter(project => Date.parse(project.endDate) < Date.now());

    const handleShowModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <section className="futureProject" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Our Projects</h2>
                                    <p>At Arca Unity, our projects are a testament to our collective expertise and innovative spirit. Each project we undertake is driven by our commitment to excellence in STEM fields, particularly mechatronics, electronics, electronic systems and telecommunications, and software development.</p>
                                    <Tab.Container id="futureProjects-tabs" defaultActiveKey="current">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="past">Past Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="current">Current Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="future">Future Projects</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="past">
                                                <Row>
                                                    {
                                                        getPastProjects().map((project, index) => (
                                                            <ProjectCard
                                                                key={index}
                                                                imgUrl={project.imgUrl}
                                                                title={project.title}
                                                                startDate={project.startDate}
                                                                endDate={project.endDate}
                                                                description={project.description}
                                                                onClick={() => handleShowModal(project)}
                                                            />
                                                        ))
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="current">
                                                <Row>
                                                    {
                                                        getCurrentProjects().map((project, index) => (
                                                            <ProjectCard
                                                                key={index}
                                                                imgUrl={project.imgUrl}
                                                                title={project.title}
                                                                startDate={project.startDate}
                                                                endDate={project.endDate}
                                                                description={project.description}
                                                                onClick={() => handleShowModal(project)}
                                                            />
                                                        ))
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="future">
                                                <Row>
                                                    {
                                                        getFutureProjects().map((project, index) => (
                                                            <ProjectCard
                                                                key={index}
                                                                imgUrl={project.imgUrl}
                                                                title={project.title}
                                                                startDate={project.startDate}
                                                                endDate={project.endDate}
                                                                description={project.description}
                                                                onClick={() => handleShowModal(project)}
                                                            />
                                                        ))
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
            <Modal show={showModal} onHide={handleCloseModal} centered className="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProject ? selectedProject.title : "No Title"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProject && (
                        <>
                            <p className="mt-3">{selectedProject.detailedDescription}</p>
                            <Carousel className="custom-carrousel">
                                {selectedProject.images.map((img, idx) => (
                                    <div key={idx}>
                                        <img src={img} alt={`${selectedProject.title} ${idx + 1}`} />
                                    </div>
                                ))}
                            </Carousel>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </section>
    )
}