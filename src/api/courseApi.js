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

export function saveCourse(course) {
  return fetch("http://localhost:3001/courses", {
    method: "POST",
    body: JSON.stringify(course),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) return response.json();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}
