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
