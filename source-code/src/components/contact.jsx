import React from "react";
import "../design/Home.css";
import Pdf from "../pages/resume.pdf";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="bottom-half">
        <div
          className="social-links text-center"
          style={{ textAlign: "center" }}
        >
          <ul
            style={{
              listStyleType: "none",
              color: "white"
            }}
          >
            <li>
              <a
                href="https://www.linkedin.com/in/jaybhartiya/"
                target="_blank"
              >
                <i
                  className="fa fa-linkedin"
                  style={{ fontSize: "48px", color: "yellow" }}
                ></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/jayanshb" target="_blank">
                <i
                  className="fa fa-github"
                  style={{ fontSize: "48px", color: "yellow" }}
                ></i>
              </a>
            </li>
            <li>
              <a href="mailto:jb2326@cornell.edu" target="_blank">
                <i
                  className="fa fa-envelope"
                  style={{ fontSize: "48px", color: "yellow" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="navigation">
          <ul
            className="d-block-inline align-items-center"
            style={{
              listStyleType: "none"
            }}
            id="navigation"
          >
            <li>
              <a href="home">About</a>
            </li>
            <li>
              <a href="projects">Projects</a>
            </li>
            <li>
              <a href="teaching">Teaching experience</a>
            </li>
            <li>
              <a href={Pdf} target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
