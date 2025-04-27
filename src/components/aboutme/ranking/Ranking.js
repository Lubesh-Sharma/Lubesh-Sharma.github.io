import React from "react";
import { FaHackerrank } from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerearth,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Ranking() {
  return (
    <div className="mt-4">
      <h1>See my rank</h1>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <a
              href="https://leetcode.com/u/Lubesh/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <SiLeetcode />
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.codechef.com/users/lubesh"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <SiCodechef />
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://codeforces.com/profile/Lubesh"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <SiCodeforces />
            </a>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}
