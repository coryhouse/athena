import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextInput from "./reusable/TextInput";
import { getCourses, deleteCourse, saveCourse } from "./api/courseApi";

const NEW_COURSE = Object.freeze({
  title: "",
  category: ""
});

function Home(props) {
  // The useState hook. I am initializing state, and declaring the setter for that state.
  // Initialize courses to an empty array
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState(NEW_COURSE);

  useEffect(() => {
    getCourses().then(courses => {
      setCourses(courses);
    });
  }, []);

  const handleDelete = id => {
    // Optimistic delete
    setCourses(courses.filter(course => course.id !== id));
    alert("Course deleted");
    deleteCourse(id).then(() => {});
  };

  const handleChange = ({ target }) => {
    setNewCourse({
      ...newCourse,
      [target.name]: target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    saveCourse(newCourse).then(course => {
      setCourses([...courses, course]);
      setNewCourse(NEW_COURSE);
      alert("Saved!");
    });
  };

  return (
    <>
      <h1>{props.title}</h1>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Title"
          id="title"
          name="title"
          value={newCourse.title}
          onChange={handleChange}
          required
        />

        <TextInput
          label="Category"
          id="category"
          name="category"
          onChange={handleChange}
          value={newCourse.category}
        />

        <button type="submit">Save Course</button>
      </form>

      <ul>
        {courses.map(course => {
          return (
            <li key={course.id}>
              <button onClick={() => handleDelete(course.id)}>Delete</button>
              {course.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

Home.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Home.defaultProps = {
  title: "No title :("
};

export default Home;
