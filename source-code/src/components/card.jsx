import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div
        className="card shadow"
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
          <h6 style={{ color: "#78C3FB" }}> About the course</h6>
          <p class="card-text text-white">{this.props.about}</p>
        </div>
      </div>
    );
  }
}
