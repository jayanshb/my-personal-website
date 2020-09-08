import React from "react";
import Sidebar from "./sidebar";
import "../design/project.css";

export default class Project extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-xl-9 whiteCarryover" style={{  }}>
            <div className="container-fluid mt-4 mb-4">
              <h1
                style={{ borderBottom: "4px yellow solid", fontSize: "45px" }}
                id="projectHead"
              >
                {this.props.heading}
              </h1>
              <h3 id="projectIntro" style={{ color: "white" }}>
                {this.props.intro}
              </h3>
              <br />
              <br />
              <h2 id="challengesHead">
                <b>Challenges faced</b>
              </h2>

              <h3 id="challengesBio" style={{ color: "white" }}>
                {this.props.challenges}
              </h3>
              <br />
              <h2 id="learningHead">
                <b>What I learnt</b>
              </h2>
              <h3 id="learningBio">{this.props.learning}</h3>
              <br />
              <h2 id="goalsHead">
                <b>Goals ahead</b>
              </h2>
              <h3 id="goalsBio">{this.props.goals}</h3>
              <br />
              <h2 id="techHead">
                <b>Technologies used</b>
              </h2>
              <h3 id="techBio">{this.props.techs}</h3>
              <br />
              <a
                id="backButton"
                href="/Projects"
                type="button"
                class="btn btn-lg btn-dark"
                style={{ color: "#78C3FB", marginRight: "40px" }}
              >
                Back
              </a>
              <a
                id="knowButton"
                href={this.props.link}
                target="_blank"
                type="button"
                class="btn btn-lg btn-dark"
                style={{ color: "#78C3FB" }}
              >
                See project
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
