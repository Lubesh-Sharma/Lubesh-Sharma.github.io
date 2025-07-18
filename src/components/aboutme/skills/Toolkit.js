import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import pg from "../../../images/pg.png";
import pm from "../../../images/pm.png";
import { Link } from "react-router-dom";

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <h1 className="mt-4">Tools I Use</h1>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={vs} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={git} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img
              src={github}
              alt=""
              style={{
                width: "85%",
                height: "85%",
                filter: "grayscale(1) invert(1)",
              }}
            />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pg} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pm} alt="" style={{ width: "95%", height: "95%" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
