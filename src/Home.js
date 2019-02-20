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
      debugger;
      this.setState({ courses: courses });
    });
  }
  render() {
    const numbers = [1, 2, 3];
    return (
      <>
        <h1>Home</h1>{" "}
        {numbers.map(num => (
          <div>{num}</div>
        ))}
      </>
    );
  }
}

export default Home;
