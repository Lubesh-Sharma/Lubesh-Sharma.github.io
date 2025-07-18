import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../../Particle";
import softwareResumePdf from "../../assets/software_resume.pdf";
import systemsResumePdf from "../../assets/systems_resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import React, { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [activeResume, setActiveResume] = useState("software");

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const getCurrentPdf = () => {
    return activeResume === "software" ? softwareResumePdf : systemsResumePdf;
  };

  const getCurrentTitle = () => {
    return activeResume === "software" ? "SOFTWARE ENGINEER RESUME" : "SYSTEMS ENGINEER RESUME";
  };

  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              width="100%"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <h1 style={{ color: "rgb(134 61 176)" }}>{getCurrentTitle()}</h1>
            </div>
            
            {/* Resume Type Navigation */}
            <div className="d-flex justify-content-center mt-4" style={{ position: "relative", zIndex: 10 }}>
              <div className="d-flex">
                <Button
                  onClick={() => {
                    console.log("Software button clicked");
                    setActiveResume("software");
                  }}
                  style={{ 
                    backgroundColor: activeResume === "software" ? "#b061df" : "transparent",
                    color: activeResume === "software" ? "#fbd9ad" : "#b061df",
                    border: "1px solid #b061df",
                    marginRight: "10px",
                    position: "relative",
                    zIndex: 11,
                    pointerEvents: "auto"
                  }}
                >
                  Software Engineer
                </Button>
                <Button
                  onClick={() => {
                    console.log("Systems button clicked");
                    setActiveResume("systems");
                  }}
                  style={{ 
                    backgroundColor: activeResume === "systems" ? "#b061df" : "transparent",
                    color: activeResume === "systems" ? "#fbd9ad" : "#b061df",
                    border: "1px solid #b061df",
                    position: "relative",
                    zIndex: 11,
                    pointerEvents: "auto"
                  }}
                >
                  Systems Engineer
                </Button>
              </div>
            </div>

            <div fluid className="certificate-section" id="about" style={{ position: "relative", zIndex: 10 }}>
              {/* Download Button Above PDF */}
              <div className="d-flex justify-content-center mt-4">
                <Button 
                  variant="primary" 
                  href={getCurrentPdf()} 
                  target="_blank"
                  download={`Lubesh_Kumar_Sharma_${activeResume}_Resume.pdf`}
                >
                  <AiOutlineDownload />
                  &nbsp;Download {activeResume === "software" ? "Software" : "Systems"} Resume
                </Button>
              </div>
              
              <div className="resume d-flex justify-content-center">
                <Document file={getCurrentPdf()} key={activeResume}>
                  <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.4} />
                </Document>
              </div>
              
              {/* Download Button Below PDF */}
              <div className="d-flex justify-content-center mt-4">
                <Button 
                  variant="primary" 
                  href={getCurrentPdf()} 
                  target="_blank"
                  download={`Lubesh_Kumar_Sharma_${activeResume}_Resume.pdf`}
                >
                  <AiOutlineDownload />
                  &nbsp;Download {activeResume === "software" ? "Software" : "Systems"} Resume
                </Button>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;