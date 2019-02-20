import React from "react";
import { getCourses, deleteCourse } from "./api/courseApi";

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

  handleDelete(id) {
    // Optimistic delete
    const courses = this.state.courses.filter(course => course.id !== id);
    this.setState({ courses });
    alert("Course deleted");
    deleteCourse(id).then(() => {});
  }

  render() {
    return (
      <>
        <h1>Home</h1>

        <form>
          <div>
            <label>Title</label>
            <br />
            <input type="text" onChange={this.handleTitleChange} />
          </div>

          <div>
            <label>Category</label>
            <br />
            <input type="text" onChange={this.handleCategoryChange} />
          </div>
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

export default Home;
