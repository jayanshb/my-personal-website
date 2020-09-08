import React from "react";
import "../design/projectcard.css";

export default class PCard extends React.Component {
  render() {
    return (
      <div
        class="card shadow"
        style={{
          backgroundColor: "#373737"
        }}
      >
        <div class="card-body">
          <h5
            class="card-title"
            style={{ borderBottom: "solid yellow 2px", paddingBottom: "15px" }}
          >
            <b>
              <span style={{ color: "yellow" }}>{this.props.course}</span>{" "}
              <span style={{ color: "white" }}>
                {this.props.code} -{" "}
                <span style={{ fontWeight: "lighter" }}>
                  {this.props.name}{" "}
                </span>
                <span
                  style={{
                    fontWeight: "lighter",
                    fontSize: "0.9em"
                  }}
                >
                  {" "}
                  <br />
                  <i>{this.props.positions}</i>
                  <br />
                </span>
              </span>
            </b>
          </h5>
          <h7 class="card-subtitle mb-2 text-white">
            {this.props.duration}
            <br />
            <br />
          </h7>
          <p class="card-text text-white">{this.props.duties}</p>
          <a
            href={this.props.link}
            target="_blank"
            className="card-link"
            style={{ color: "#78C3FB" }}
          >
            {" "}
            See project
          </a>
          <a
            href={this.props.page}
            className="card-link"
            id="cardLink"
            target="_blank"
            style={{ color: "#78C3FB" }}
          >
            {" "}
            Know more
          </a>
          <p class="card-text text-white">{this.props.about}</p>
        </div>
      </div>
    );
  }
}
