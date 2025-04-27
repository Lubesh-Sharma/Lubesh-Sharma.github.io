import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <h1>Connect with me</h1>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <a
              href="https://www.instagram.com/lubeshsharma/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiOutlineInstagram />
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.facebook.com/profile.php?id=100087298700344"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillFacebook />
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://github.com/Lubesh-Sharma"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/lubesh/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
