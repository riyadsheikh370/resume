import React from 'react'
import './banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import Me1 from "../../assets/me1.jpg"
import Du from "../../assets/banner_du.png"
import Dd from "../../assets/banner_dd.png"
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {

    return (
        <>
            <section id='banner'>
                <div className="banner_main">
                    <Row>
                        <Col lg={6}>
                            <div className="banner_left">
                                <img src={Me1} alt={Me1} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="banner_right">
                                <div className="img_one">
                                    <img src={Du} alt={Du} />
                                </div>
                                <TypeAnimation className='typeAnimation'
                                    sequence={[
                                        'Hi, I am Riyad Sheikh',
                                        1000,
                                        'Creative Web developer_',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ fontSize: '2em', display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                                <p>I'm a front‑end developer <br /> with user‑friendly experiences.</p>
                                <div className="img_three">
                                    <img src={Dd} alt={Dd} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Banner
