import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "90%" }}
              loop
              autoplay
            ></lottie-player>
          </Col>

          <Col md={7}>
            <p className="home-about-body">
              My name is <b className="purple">Lubesh Kumar Sharma </b> 
              and I am a <b className="purple">4th Year CSE Undergraduate </b> 
              at <b className="purple">IIT Kharagpur</b>.
              <br />
              <br />
              I'm currently learning and working on projects in &nbsp;
              <b className="purple">
                Artificial Intelligence, Machine Learning, Computer Vision, Robotics, and Full Stack Web Development.
              </b>
              <br />
              <br />
              I am proficient in various programming languages such as &nbsp;
              <b className="purple">
                Python, JavaScript, C++, HTML, CSS
              </b>
              <br />
              <br />
              I also have experience working with frameworks and libraries such as &nbsp;
              <b className="purple">
                React, Node.js, Express, TensorFlow, PyTorch, OpenCV
              </b>
              <br />
              <br />
              In my free time, I enjoy learning new technologies and &nbsp;
              <b className="purple">building projects in Web Development, AI/ML, and Computer Vision.</b>
              <br />
              <br />
              Reach me at: <a href="mailto:lubeshkumarsharma@gmail.com" className="purple"><b>lubeshkumarsharma@gmail.com</b></a>
              <br />
              <br />
              Call me at: <a href="tel:+916375943908" className="purple"><b>+91 6375943908</b></a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
