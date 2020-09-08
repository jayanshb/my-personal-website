import React from "react";
import Project from "../components/project";

export default class Datascience extends React.Component {
  render() {
    return (
      <Project
        heading="Data Science Library for OCaml - Functional Programming"
        intro="OCaml, inherently, has a very weak resource database of external libraries.
    This has limited the manipulation on 1-D and 2-D arrays. Because of this me and my teammate, planned to build our own data science library 
    and contributed to the open source community. This project makes use of modular programming using signatures to implement our own data structures 
    for a 1-D and 2-D array. Using these signatures, we were able to implement I/O tools that work with CSV files, indexing, slicing data and providing linear algebra functionalities."
        challenges="Our very initial implementation of the data structures was using 'a list. However, what kept us thinking was 
        how to include abstraction. After a lot of thought, we realized variants were not only a better development practice but also enabled us to follow the principles of abstraction and modular programming better. "
        learning="I learnt about the application of modular programming and data abstraction in functional languages like OCaml."
        link="https://github.com/jayanshb/DataCaml"
        goals="I really want to take this project a level higher and add more functionality for operations on CSV files. Furthermore, I want to increase the array of functions I have programmed and increase my unit testing."
        techs="•OCaml"
      />
    );
  }
}
