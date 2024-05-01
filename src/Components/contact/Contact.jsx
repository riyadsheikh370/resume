import React from 'react'
import './contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <section id='contact'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="contact_main">
                                <h4>Contact Me</h4>
                                <Col lg={{ span: 12, offset: 3 }}>
                                    <Row>
                                        <Col lg={2}>
                                            <div className="contact">
                                                <IoIosCall className='icon' />
                                                <h5>WhatsApp</h5>
                                                <h6>01881043142</h6>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                            <div class="contact">
                                                <MdOutlineEmail className='icon' />
                                                <h5>Email</h5>
                                                <a href="#">riyadsheikh370@gmail.com</a>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                            <div class="contact">
                                                <IoLocationSharp className='icon' />
                                                <h5>Location</h5>
                                                <h6>Islampur,Dhaka</h6>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <div className="text_up">
                                <h4>Let’s Message me</h4>
                                </div>
                                <Col lg={{ span: 10, offset: 1 }}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="contact_left">
                                                                                      <input type="text" placeholder="Your name" />
                                                <input type="text" placeholder="Your email" />
                                                <input type="text" placeholder="Your subject" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div class="contact_right">
                                                <input type="text" placeholder="Message" />
                                            </div>
                                            <Col lg={{ span: 1, offset: 10 }}>
                                                <div class="trb">
                                                    <a href="#">Submit</a>
                                                </div>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={{ span: 2, offset: 5 }}>
                                    <div class="dn_icon">
                                        <a href="https://www.facebook.com"><i><FaFacebook /></i></a>
                                        <a href="https://twitter.com/"><i><FaTwitter /></i></a>
                                        <a href="https://www.instagram.com/"><i><FaInstagramSquare /></i></a>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact


