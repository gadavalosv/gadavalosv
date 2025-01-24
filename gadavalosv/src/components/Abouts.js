import 'react-multi-carousel/lib/styles.css';
import Gustavo_Davalos from '../assets/img/Gustavo_Davalos.jpg';
import colorSharp from "../assets/img/color-sharp.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';

export const Abouts = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        variableHeight: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpanded = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const renderContent = (content, index) => {
        const isExpanded = expandedIndex === index;
        const contentToShow = isExpanded ? content : content.props.children.slice(0, 3);
        const buttonText = isExpanded ? 'Collapse' : 'Read More';

        return (
            <div>
                {contentToShow}
                {content.props.children.length > 3 && <button onClick={() => toggleExpanded(index)}>{buttonText}</button>}
            </div>
        );
    };

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

    const data = [
        {
            name: `Gustavo Alejandro Dávalos Valadez`,
            img: Gustavo_Davalos,
            about_text: (
                <div>
                    <p><strong>Occupation within the team:</strong> Main person in charge of the Software Development area.</p>
                    <p><strong>Residence:</strong> Guadalajara, Jalisco, Mexico.</p>
                    <p><strong>Age:</strong> 24.</p>
                    <p><a target="_blank" href="https://www.linkedin.com/in/gustavo-davalos-5801901a2">LinkedIn</a></p>
                    <p><strong>Email:</strong> <span className="tooltipmail" onClick={() => copyToClipboard('gadavalosv@gmail.com')}>
                        <a className="mail">gadavalosv@gmail.com</a>
                        <span className="tooltiptext">{tooltipText}</span>
                    </span></p>
                </div>
            )
        },
        {
            name: `Gustavo Alejandro Dávalos Valadez`,
            img: Gustavo_Davalos,
            about_text: (
                <div>
                    <p><strong>Occupation within the team:</strong> Main person in charge of the Software Development area.</p>
                    <p><strong>Residence:</strong> Guadalajara, Jalisco, Mexico.</p>
                    <p><strong>Age:</strong> 24.</p>
                    <p><a target="_blank" href="https://www.linkedin.com/in/gustavo-davalos-5801901a2">LinkedIn</a></p>
                    <p><strong>Email:</strong> <span className="tooltipmail" onClick={() => copyToClipboard('gadavalosv@gmail.com')}>
                        <a className="mail">gadavalosv@gmail.com</a>
                        <span className="tooltiptext">{tooltipText}</span>
                    </span></p>
                </div>
            )
        },
        {
            name: `Gustavo Alejandro Dávalos Valadez`,
            img: Gustavo_Davalos,
            about_text: (
                <div>
                    <p><strong>Occupation within the team:</strong> Main person in charge of the Software Development area.</p>
                    <p><strong>Residence:</strong> Guadalajara, Jalisco, Mexico.</p>
                    <p><strong>Age:</strong> 24.</p>
                    <p><a target="_blank" href="https://www.linkedin.com/in/gustavo-davalos-5801901a2">LinkedIn</a></p>
                    <p><strong>Email:</strong> <span className="tooltipmail" onClick={() => copyToClipboard('gadavalosv@gmail.com')}>
                        <a className="mail">gadavalosv@gmail.com</a>
                        <span className="tooltiptext">{tooltipText}</span>
                    </span></p>
                </div>
            )
        }
    ];

    return (
        <section className="about" id="abouts">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-bx wow zoomIn">
                            <h2>My Projects</h2>
                            <p className="aboutP">Allow us to introduce our team and provide a brief overview of our respective areas of expertise.<br></br> For further details, we invite you to explore our individual profiles on LinkedIn.</p>
                            <Slider className='about-slider' {...settings}>
                                {data.map((d, index) => (
                                    <div key={d.name} className={`about-card text-black rounded-2xl ${expandedIndex === index ? 'expanded' : ''}`}>
                                        <div className='h-56 flex justify-center items-center rounded-t-xl'>
                                            <img src={d.img} alt="" className="h-44 w-44 rounded-3xl hover:rounded-3xl"/>
                                        </div>

                                        <div className="flex flex-col items-center justify-center gap-px px-2 py-3">
                                            <p className="text-black text-xl font-semibold">{d.name}</p>
                                            <div className="text-black text-center">{renderContent(d.about_text, index)}</div>
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