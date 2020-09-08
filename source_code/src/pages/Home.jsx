import React from "react";
import "../design/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid home-auto" style={{ height: "auto" }}>
        <div className="row">
          <Sidebar />
          <div className="col-xl-9 whiteCarryover clearfix">
            <div className="container-fluid p-4">
              <h1 style={{ fontSize: "45px" }} className="hey">
                Hey there, it's <b className="introhead">Jayansh.</b>
              </h1>
              <h2 className="swe">I am a software engineer.</h2>

              <br />
              <br />
              <h2>
                <b className="short-intro">Short intro</b>
              </h2>
              <h2>
                <span className="short-intro-bio">
                  {" "}
                  I am, currently, a{" "}
                  <span style={{ borderBottom: "yellow solid 2px" }}>
                    rising junior majoring in Computer Science and Economics at
                    Cornell University.
                  </span>
                  . I am interested in{" "}
                  <span style={{ borderBottom: "yellow solid 2px" }}>
                    Machine learning, Computer Vision, App and Web development,
                    Data science, and Econometrics.
                    <br />
                    <br />
                  </span>
                  Orignally from India, I took a 14 hour direct flight and moved
                  to the United states where I am attending my undergraduate
                  studies. I have always had the deepest desire to pursue
                  computer science, but my first Economics class piqued my
                  interest, and here I am double majoring in both CS and Econ.
                  <br />
                  <br />I really like to put my free time to good use — I love
                  to play the disc jockey (1 of my most desired TODOs at
                  college), produce music, play badminton, and spend a good time
                  staying updated with the news.
                </span>
                <br />
                <br />
                <br />
                <h2 className="summer">
                  <b>What did I do this summer?</b>
                </h2>
                <h3>
                  <span className="summer-bio">
                    This summer, I worked on a startup for social media
                    networking and worked remotely with 40 people from around
                    the world. It was a wholsome experience, and I also got to
                    learn a very important concept — a company is as good as
                    it's market research.
                    <br />
                    <br />
                    <br />
                    Driven by a passion for both Economics and Computer Science,
                    this summer, I also taught myself Algorithmic Trading
                    wherein I built a deep learning based algorithmic trading
                    bot.
                  </span>
                </h3>

                <br />
                <br />
                <h2 className="aboutMe">
                  <b>Want to know more about me?</b>
                </h2>
                <h3 className="aboutMeBio">
                  There are a variety of fields I have explored throughout my
                  journey — iOS and Web development, machine learning, computer
                  vision to name a few. The one which most interested me was
                  Machine learning which is what I plan to pursue in the near
                  future. Making machines intelligent and using that for the
                  overall good of the society is what really intrigues me about
                  this field. I have been studying machine learning to apply it
                  to problems like financial markets, Health care systems,
                  business models, etc.
                </h3>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
