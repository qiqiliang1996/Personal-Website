import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMe.css";
import { Container, Row, Col } from "react-bootstrap";

function AboutMe() {
  return (
    <>
      <Container className="about-container">
        <Row className="qiqi-info g-5">
          <Col className="picture" lg={6} xs={12}>
            <img src="images/img-kiki6.jpg" />
          </Col>
          <Col className="description" lg={6} xs={12}>
            Hello, my new friends. Thank you for your time to read my story. I
            immigrated to United State when I was 16 years old. I graduated from
            Syracuse University on 2019. I have a cute Ragdoll furrbaby, Chubby.
            I love Chubby so much.
          </Col>
          <Col className="picture" lg={6} xs={12}>
            <img src="images/img-kiki5.jpg" />
          </Col>
          <Col className="description" lg={6} xs={12}>
            <p>
              {" "}
              <span className="quick-learner">I am a self quick-learner. </span>
              This picture was token when I was in Lake Tahoe, California. This
              was my first time skiing and I learned how to ski from Youtube.
              It's was very meaningful to me. Skiing is one of my absolute
              faverites.
            </p>
          </Col>
          <Col className="picture" lg={6} xs={12}>
            <img src="images/img-chubby4.jpg" />
          </Col>
          <Col className="description" lg={6} xs={12}>
            <p>
              Chubby is my little tough baby boy, he was borned on Sep, 2020.
              When he was 9 months old, he was diagnosed with{" "}
              <span className="bone-marrow">bone marrow hypoplasia </span>. One
              thing I am so proud of myself is that I never gave up on him or
              abandoned him to the shelter. Chubby stay in the ICU for 5 days,
              his legs were all wounded, but he is revoered so far. He is very
              jumpy and bite me all the times.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutMe;
