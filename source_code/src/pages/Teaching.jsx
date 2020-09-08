import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";
import Card from "../components/card";
import "../design/teaching.css";

export default class Teaching extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-xl-9 whiteCarryover clearfix">
            <div className="row">
              <div className="card-deck">
                <div className="col-xl-6">
                  <div className="mt-3 d-flex" id="cs">
                    <Card
                      course="CS"
                      code="1110"
                      name="Computing using python"
                      positions="Mentor, Head of consulting hours, Teaching consultant"
                      duties="I led 8 mentees and consulting hours, worked closely with 5 teaching faculty, conducted weekly labs and grading sessions for student help. I also lectured and helped a class of 60 students, coordinated virtual consulting hours across various timezones during coronavirus pandemic.
                    "
                      page="business"
                      duration="Aug 2019 - May 2020"
                      about="Programming and problem solving using Python. Emphasizes principles of software development, style, and testing. Topics include procedures and functions, iteration, recusion, arrays and vectors, strings, an operational model of procedure and function calls, algorithms, exceptions, object-oriented programming, and GUIs (graphical user interfaces). Weekly labs provide guided practice on the computer, with staff present to help. Assignments use graphics and GUIs to help develop fluency and understanding."
                    />
                  </div>
                </div>
                <div className="col-xl-6" id="aem">
                  <div className="mt-3 d-flex">
                    <Card
                      course="AEM"
                      code="2840"
                      name="Python Programming for Data Analysis and Business Modeling"
                      positions="Teaching assistant"
                      duties="I will be holding grading sessions, office hours for student help, lead the discussio board, and creating assignments for a class of 44."
                      page="business"
                      duration="Sept 2020 - Dec 2020"
                      about="This course is an introduction to programming with Python for students aiming to enter the world of business analytics. Using business applied cases students will increase decision making efficiency and productivity through a detailed understanding of Python programming languages. Students will also learn how to use a range of Python libraries for data analytics such as NumPy, MatPlotLib, Seaborn, Pandas, and Scikit."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
