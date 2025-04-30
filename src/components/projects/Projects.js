import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bus from "../../images/bus.jpeg";
import link from "../../images/link.png";
import gp from "../../images/gp.jpeg";
import ticket from "../../images/ticket.jpg";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <h1 className="aboutme-heading">Projects</h1>
            </Col>
            <Col md={3}>
              <a href="https://kgp-bus-frontend.vercel.app/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      KGP BUS TRACKING SYSTEM
                    </h5>
                    <img src={bus} alt="KGP BUS TRACKING SYSTEM" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/Lubesh-Sharma/KGP_BUS_FRONTEND"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaCode id="code" className="icon" aria-label="Frontend Code" />
                      </a>
                      <a
                        href="https://github.com/Lubesh-Sharma/KGP_BUS_Backend"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaCode id="code" className="icon" aria-label="Backend Code" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Real-time bus tracking system for campus buses, providing live location updates and route information for users.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React, Node.js, Express, PSQL, Leaflet
                  </div>
                </div>
              </a>
            </Col>
            <Col md={3}>
              <a href="https://url-frontend-six.vercel.app/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      URL SHORTENER
                    </h5>
                    <img src={link} alt="URL SHORTENER" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/Lubesh-Sharma/url_frontend"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaCode id="code" className="icon" aria-label="Frontend Code" />
                      </a>
                      <a
                        href="https://github.com/Lubesh-Sharma/url_backend"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaCode id="code" className="icon" aria-label="Backend Code" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A simple and efficient URL shortener service to generate and manage short links for long URLs.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React, Node.js, Express, MongoDB
                  </div>
                </div>
              </a>
            </Col>
            <Col md={3}>
              <a href="https://gram-panchayat-vfvm.onrender.com/landing" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      GRAM PANCHAYAT MANAGEMENT SYSTEM
                    </h5>
                    <img src={gp} alt="GRAM PANCHAYAT MANAGEMENT SYSTEM" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/Lubesh-Sharma/Gram_Panchayat"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaCode id="code" className="icon" aria-label="Frontend Code" />
                      </a>
                      <a
                        href="https://github.com/Lubesh-Sharma/Gram_Panchayat"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaCode id="code" className="icon" aria-label="Backend Code" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A management system for Gram Panchayat to handle records, services, and citizen requests efficiently.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Python, PhP, PSQL
                  </div>
                </div>
              </a>
            </Col>
            <Col md={3}>
              <a href="https://auditorium-management.onrender.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Ticket MANAGEMENT SYSTEM
                    </h5>
                    <img src={ticket} alt="Ticket MANAGEMENT SYSTEM" />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/Lubesh-Sharma/Auditorium_Management"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaCode id="code" className="icon" aria-label="Frontend Code" />
                      </a>
                      <a
                        href="https://github.com/Lubesh-Sharma/Auditorium_Management"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="code"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaCode id="code" className="icon" aria-label="Backend Code" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A ticket management system for handling support requests, tracking issues, and managing resolutions.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    EJS, HTML, CSS, JavaScript
                  </div>
                </div>
              </a>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
