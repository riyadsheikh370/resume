import React from 'react'
import './service.css'
import { Col, Container, Row } from 'react-bootstrap'
import ScrollToTop from "react-scroll-to-top";
import { TbHomeHand } from "react-icons/tb";
import Serviceresuable from '../resuable/Serviceresuable';


const Service = () => {
    return (
        <>
            <section id='service'>
                <Row>
                    <Col lg={12}>
                        <div className="service_main">
                            <h4>Service</h4>
                            <Col lg={{ span: 8, offset: 2 }}>
                                <Row>
                                    <Col lg={6}>
                                        <Serviceresuable title="Front-End Developer" para="Attractive website designer with high quality." />
                                    </Col>
                                    <Col lg={6}>
                                        <Serviceresuable title="Coding Expert" para="Proficient in HTML, CSS, Bootstrap, Javascript, React, React bootstrap, Tailwind css." />
                                    </Col>
                                </Row>
                                <Col lg={{ span: 6, offset: 3 }}>
                                    <div className="service_down">
                                        <p>If you want a beautiful, fast-running and well-maintained website, obviously turn
                                            to me.</p>
                                    </div>
                                </Col>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </section>
            <div className="back_to_top">
                <ScrollToTop smooth component={<p><TbHomeHand /></p>} />
            </div>
        </>
    )
}

export default Service
