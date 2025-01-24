import 'react-multi-carousel/lib/styles.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import colorSharp from "../assets/img/color-sharp.png";
import proj_coche_tanque_img from "../assets/img/projects/proj_coche_tanque.png";
import zero_robotics_logo_img from "../assets/img/projects/zero-robotics-logo.png";
import proj_coche_tanque_img3 from "../assets/img/projects/proj_coche_tanque_3.png";
import md_2024A_img from "../assets/img/projects/MD_2024A.jpg";
import projImg3 from "../assets/img/projects/lifeDetector.jpg";

export const AwardsAndRecognitions = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide:1,
        vertical: true,
        fade: true,
        variableHeight:false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const data = [
        {
            title: "Zero Robotics High School Tournament",
            img: zero_robotics_logo_img,
            place: "13th place worldwide",
            date: "2018",
            detailedDescription: "ECO-SPHERES Virtual Competition. Original Participation under the name MachtianiMej, and later an alliance was made with the name Team Quesadilla.",
        },/*
        {
            title: "Hackaton TalentLand 2023",
            img: proj_coche_tanque_img,
            place: "Top 10",
            date: "April 2023",
            detailedDescription: "VROVCOR-TM Remote Control Tank Car for surveillance and fire detection tasks.",
        },*/
        {
            title: "Final Industrial Design Project Exhibition.",
            img: md_2024A_img,
            place: "First Place",
            date: "May 24, 2024",
            detailedDescription: "A.R.M.O.R. Search and Detection Rover.",
        },/*
        {
            title: "Lorem Ipsum",
            img: projImg2,
            place: "Special Recognition",
            date: "July 2023",
            detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            title: "Dolor Sit Amet",
            img: projImg3,
            place: "First Place",
            date: "August 2023",
            detailedDescription: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },*/
    ];

    return (
        <section className="awards" id="awards">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="award-bx wow zoomIn">
                            <h2>Awards And Recognitions</h2>
                            <p className="awardP">Our team's achievements in various competitions and recognitions highlight our dedication and expertise in STEM fields.</p>
                            <Slider {...settings}>
                                {data.map((d, index) => (
                                    <div key={index} className={`award-card ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                                        <div className="image">
                                            <img src={d.img} alt={d.title} />
                                        </div>
                                        <div className="details">
                                            <h3>{d.title}</h3>
                                            <p><strong>{d.place}</strong></p>
                                            <p><em>{d.date}</em></p>
                                            <p>{d.detailedDescription}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}