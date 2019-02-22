import React from "react";
import PropTypes from "prop-types";
import TextInput from "./reusable/TextInput";
import { getCourses, deleteCourse } from "./api/courseApi";

class Home extends React.Component {
  state = {
    courses: [],
    newCourse: {
      title: "",
      category: ""
    }
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

  handleSubmit(event) {
    event.preventDefault();
    alert("submitted");
  }

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

          <div>
            <label htmlFor="category">Category</label>
            <br />
            <input
              type="text"
              id="category"
              name="category"
              onChange={this.handleChange}
              value={this.state.newCourse.category}
            />
          </div>

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
