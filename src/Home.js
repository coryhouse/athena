import React from "react";
import { getCourses } from "./api/courseApi";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  // Runs when the component first mounts. So, runs once.
  componentDidMount() {
    getCourses().then(courses => {
      this.setState({ courses });
    });
  }

  render() {
    return (
      <>
        <h1>Home</h1>

        <ul>
          {this.state.courses.map(course => {
            return <li>{course.title}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Home;
