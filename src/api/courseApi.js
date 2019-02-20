// API Proxy
export function getCourses() {
  return fetch("http://localhost:3001/courses")
    .then(response => {
      if (response.ok) return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export function deleteCourse(id) {
  return fetch("http://localhost:3001/courses/" + id, { method: "DELETE" })
    .then(response => {
      if (response.ok) return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}
