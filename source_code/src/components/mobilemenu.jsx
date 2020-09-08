import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

import Pdf from "../pages/resume.pdf";

const Mycomponent = (props) => {
  const [showNav, setShowNav] = useState();
  
  const navItems = [
    <a href="/Home">About</a>,
    <a href="/Projects">Projects</a>,
    <a href="/Teaching">Teaching Experience</a>,
    <a href={Pdf} target="_blank">Resume</a>,    
  ];
 
  const title = <h1><a href="/Home" className="p-4" id="topLogo">
        &lt; JB <span style={{ color: "yellow" }}> / </span> &gt;
      </a></h1>;
 
  return (
    <div className="sticky-sidebar">
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} />
    </div>
  );
};

export default Mycomponent;