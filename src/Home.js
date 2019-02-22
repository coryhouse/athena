import React from "react";
import PropTypes from "prop-types";
import TextInput from "./reusable/TextInput";
import { getCourses, deleteCourse, saveCourse } from "./api/courseApi";

const newCourse = {
  title: "",
  category: ""
};

class Home extends React.Component {
  state = {
    courses: [],
    newCourse
  };

  // Runs when the component first mounts. So, runs once.
  componentDidMount() {
    getCourses().then(courses => {
      this.setState({ courses });
    });
  }

  handleDelete(id) {
    // Optimistic delete
    const courses = this.state.courses.filter(course => course.id !== id);
    this.setState({ courses });
    alert("Course deleted");
    deleteCourse(id).then(() => {});
  }

  handleChange = ({ target }) => {
    const newCourse = {
      ...this.state.newCourse,
      [target.name]: target.value
    };
    this.setState({ newCourse });
  };

  handleSubmit = event => {
    event.preventDefault();
    saveCourse(this.state.newCourse).then(course => {
      const courses = [...this.state.courses, course];
      this.setState({ courses, newCourse });
      alert("Saved!");
    });
  };

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>

        <form onSubmit={this.handleSubmit}>
          <TextInput
            label="Title"
            id="title"
            name="title"
            value={this.state.newCourse.title}
            onChange={this.handleChange}
          />

          <TextInput
            label="Category"
            id="category"
            name="category"
            onChange={this.handleChange}
            value={this.state.newCourse.category}
          />

          <button type="submit">Save Course</button>
        </form>

        <ul>
          {this.state.courses.map(course => {
            return (
              <li key={course.id}>
                <button onClick={() => this.handleDelete(course.id)}>
                  Delete
                </button>
                {course.title}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

Home.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Home.defaultProps = {
  title: "No title :("
};

export default Home;
