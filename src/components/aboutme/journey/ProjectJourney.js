import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import CodeIcon from '@mui/icons-material/Code';

function ProjectJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <h1>Project Journey</h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad", wordBreak: "break-word", whiteSpace: "pre-line" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CodeIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{ wordBreak: "break-word", whiteSpace: "pre-line" }}>
            <a href="https://auditorium-management.onrender.com" target="_blank" rel="noreferrer" style={{ color: "#fbd9ad" }}>
              Ticket MANAGEMENT SYSTEM
            </a>
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad", wordBreak: "break-word", whiteSpace: "pre-line" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<JavascriptIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{ wordBreak: "break-word", whiteSpace: "pre-line" }}>
            <a href="https://url-frontend-six.vercel.app/" target="_blank" rel="noreferrer" style={{ color: "#fbd9ad" }}>
              URL SHORTENER
            </a>
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad", wordBreak: "break-word", whiteSpace: "pre-line" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<HtmlIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{ wordBreak: "break-word", whiteSpace: "pre-line" }}>
            <a href="https://gram-panchayat-vfvm.onrender.com/landing" target="_blank" rel="noreferrer" style={{ color: "#fbd9ad" }}>
              GRAM PANCHAYAT MANAGEMENT SYSTEM
            </a>
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad", wordBreak: "break-word", whiteSpace: "pre-line" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<CssIcon />}
        >
          <h3 className="vertical-timeline-element-title" style={{ wordBreak: "break-word", whiteSpace: "pre-line" }}>
            <a href="https://kgp-bus-frontend.vercel.app/" target="_blank" rel="noreferrer" style={{ color: "#fbd9ad" }}>
              KGP BUS TRACKING SYSTEM
            </a>
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ProjectJourney;
