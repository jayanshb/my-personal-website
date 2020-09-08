import Logo from "../components/logo";
import React from "react";
import "../design/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./contact";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-xl-3 graySidebar d-flex flex-column justify-content-between">
        <Logo />
        <div
          className="text-center">
          <div className="cover_pic">
            {" "}
            <img
              src="https://image.flaticon.com/icons/svg/168/168882.svg"
              style={{
                height: "45%",
                width: "45%",
                borderSpacing: "5px",
                marginBottom: "10%",
                maxWidth: "150px",
                maxHeight: "150px"
              }}
            ></img>
          </div>
          <div
            className="name"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <h1 style={{ fontSize: "50px" }}>
              <span className="Jayansh">Jayansh</span>
            </h1>
            <h1 style={{ fontSize: "50px" }}>
              <span className="Bhartiya">Bhartiya</span>
            </h1>
          </div>
        </div>
        <Contact />
      </div>
    );
  }
}
