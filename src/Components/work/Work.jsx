import React from 'react'
import './work.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import Rd from "../../assets/rd.jpg"
import Rs from "../../assets/rs.jpg"
import Mee from "../../assets/mee.jpg"
import Rl from "../../assets/rl.jpg"
// import PP from "../../assets/pp.png"
// import Pn from "../../assets/pn.png"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
// import { MdArrowRight } from "react-icons/md";
// import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='next' onClick={onClick}
        ><MdNavigateNext /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="prev1" onClick={onClick}
        ><GrFormPrevious /></div>
    );
}

const Work = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <section id='work'>
                <Row>
                    <Col lg={12}>
                        <div className="portfolio_main">
                            <h4>Portfolio</h4>
                            <Row>
                                <Col lg={6}>
                                    <div className="portfolio_left">
                                        <Col lg={{ span: 8, offset: 2 }}>
                                            <Slider {...settings}>
                                                <div className="main">
                                                    <img src={Rl} alt={Rl} />
                                                </div>
                                                <div className="main">
                                                    <img src={Rd} alt={Rd} />
                                                </div>
                                                <div className="main">
                                                    <img src={Rs} alt={Rs} />
                                                </div>
                                                <div className="main">
                                                    <img src={Mee} alt={Mee} />
                                                </div>
                                            </Slider>
                                        </Col>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="portfolio_right">
                                        <a className='cvg' href="https://github.com/riyadsheikh370"><FaSquareGithub />Go to <b>GitHub</b></a>
                                        <a className='cvv' href="/developer_riyadsheikh.pdf"
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        ><FaIdCard />Download <b>CV</b>
                                        </a>

                                        {/* <Col lg={3}>
                                                <h3>projects<MdOutlineKeyboardDoubleArrowDown /></h3>
                                            </Col> */}
                                        {/* <Col lg={{ span: 10, offset: 1 }}>
                                                <Row>

                                                    <Col lg={6}>
                                                        <div className="demo">
                                                            <a href="https://vermillion-alpaca-01e93d.netlify.app/">
                                                 <img src={Pn} alt={Pn} />
                                                            </a>
                                                            <a href="https://vermillion-alpaca-01e93d.netlify.app/"><span>Emprise</span></a>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="demo">
                                                            <a href="https://willowy-torte-d8ea56.netlify.app/">
                                                                <img src={PP} alt={PP} />
                                                            </a>
                                                            <a href="https://willowy-torte-d8ea56.netlify.app/"><span>Building stellar(10 page)</span></a>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Col lg={6}>
                                                    <div className="demod">
                                                        <h5>More<MdOutlineKeyboardDoubleArrowDown /></h5>
                                                        <ul>
                                                            <li><a href="https://dancing-banoffee-29eae1.netlify.app/"><MdArrowRight /><span>Aeropage</span></a></li>
                                                            <li><a href="https://darling-chimera-f37f25.netlify.app/"><MdArrowRight /><span>Petroil</span></a></li>
                                                            <li><a href="https://www.quarry.com/"><MdArrowRight /><span>Quarry(Copy)</span></a></li>
                                                            <li><a href="https://tubular-croquembouche-71755a.netlify.app/"><MdArrowRight /><span>Newspro</span></a></li>
                                                            <li><a href="https://guileless-gaufre-b6df84.netlify.app/"><MdArrowRight /><span>Products(Api)</span></a></li>
                                                            <li><a href="https://resilient-cascaron-2d53e4.netlify.app/"><MdArrowRight /><span>Click</span></a></li>
                                                            <li><a href="https://glowing-pixie-f76887.netlify.app/"><MdArrowRight /><span>Number</span></a></li>
                                                            <li><a href="https://benevolent-alfajores-08595c.netlify.app/"><MdArrowRight /><span>Demo</span></a></li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Col> */}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Work
