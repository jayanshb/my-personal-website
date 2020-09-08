import React from "react";
import Project from "../components/project";
export default class Webdev extends React.Component {
  render() {
    return (
      <Project
        heading="Designing my personal website"
        intro="This summer, I programmed a fully responsive website for my personal portfolio. I have used the bootstrap and react framework for this project"
        challenges="One of my main challenges that I faced was thinking about the layout of the website. I went through many types of layouts — sticky horizontal navbar, vertical navbar. However, after drawing out many prototypes and wireframes on Notability (my favorite notetaking app), I came up with the current design of the website solely because of the simplicity of the layout. After working my hands on different technologies for web development, I finally chose to design a responsive web app using bootstrap and react js. In the meantime I also explored other options such
        as react-bootstrap. However due to the versatility of the bootstrap framework and react's component reusage convinced me."
        learning="Through this project, I learnt various technologies such as bootstrap for responsive web design. I also loved the simplicity and efficiency provided by the react framework. "
        link="#"
        goals="My goals ahead are to make the website completely dynamic — I plan to do so by pulling from Google firestore webstore using their API and thus making the website dynamic wrt. the database "
        techs="•React •Bootstrap"
      />
    );
  }
}
