import React from "react";

import Mycomponent from './mobilemenu';

import "bootstrap/dist/css/bootstrap.min.css";
import "../design/logo.css";

export default class Logo extends React.Component {
  render() {
    return (
    <div class="fixed-on-mobile">
      <a href="home" className="p-4" id="topLogo">
        &lt; JB <span style={{ color: "yellow" }}> / </span> &gt;
      </a>

      <Mycomponent />
      </div>
    );
  }
}
