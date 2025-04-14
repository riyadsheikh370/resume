import React from 'react'
import './about.css'
import { Container, Row, Col } from 'react-bootstrap'
import Aboutresuable from '../resuable/Aboutresuable'
import Node from "../../assets/node js.png";
import Rt from "../../assets/react.png";
import Vj from "../../assets/js.png";
import Mg from "../../assets/mongo.png";


const About = () => {
    return (
        <>
            <section id='about'>
                <Row>
                    <Col lg={12}>
                        <div className="about_main">
                            <h4>About me</h4>
                            <Col lg={{ span: 10, offset: 1 }}>
                                <p> I am a skilled front-end developer with experience in designing, developing and
                                    maintaining front-end web applications. Achieved measurable success in increasing
                                    page load speed resulting in increased website conversion rates. I am passionate
                                    about creating great software that helps improve the lives of those around me.</p>
                            </Col>
                            <h5>What I do</h5>
                            <Col lg={{ span: 10, offset: 1 }}>
                                <p> Experienced frontend developer proficient in JavaScript, React and View
                                    with a strong focus on creating attractive and user-friendly graphical
                                    user interfaces. Looking to contribute to exciting projects to further
                                    develop my skills.</p>
                            </Col>

                            <Col lg={{ span: 10, offset: 1 }}>
                                <Row>
                                    <Col lg={3}>
                                        <Aboutresuable logo={Node} title="JavaScript" />
                                    </Col>
                                    <Col lg={3}>
                                        <Aboutresuable logo={Rt} title="React.JS" />
                                    </Col>
                                    <Col lg={3}>
                                        <Aboutresuable logo={Vj} title="Node.JS" />
                                    </Col>
                                    <Col lg={3}>
                                        <Aboutresuable logo={Mg} title="MongoDB" />
                                    </Col>
                                </Row>
                            </Col>

                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default About
