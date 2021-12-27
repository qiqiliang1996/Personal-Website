import React from "react";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container className="contact-container">
        <Row className="icons-container">
          <Col className="icons-1" lg={3} xs={6}>
            <div className="contact-logo fb">
              <a href="https://www.facebook.com/qiqi.liang.79 ">
                <i className="fab fa-facebook-square"></i>
              </a>
            </div>
            <div className="text">Faceboon</div>
          </Col>
          <Col className="icons-2" lg={3} xs={6}>
            <div className="contact-logo ins">
              <a href="https://www.instagram.com/kiki_leunggg/ ">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="text">Instagram</div>
          </Col>
          <Col className="icons-3" lg={3} xs={6}>
            <div className="contact-logo youtube">
              <a href=" https://www.youtube.com/channel/UC7DGSpQLsMq5N4dvsnv_c0g">
                <i className="fab fa-youtube-square"></i>
              </a>
            </div>
            <div className="text">Youtube</div>
          </Col>
          <Col className="icons-4" lg={3} xs={6}>
            <div className="contact-logo linkedin">
              <a href="https://www.linkedin.com/in/qiqiliang/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="text">Linkedin</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
