// Hardcoded course data
const courses = [
  { id: 1, name: "Java Basics", completed: false },
  { id: 2, name: "CSS Fundamentals", completed: false },
  { id: 3, name: "JavaScript Basics", completed: false },
  { id: 4, name: "Frontend Project", completed: false }
];

// Function to display courses
function displayCourses() {
  const container = document.getElementById('courseList');
  container.innerHTML = '';
  courses.forEach(course => {
    container.innerHTML += `
          <div>
            <span>${course.name}</span>
            <button onclick="markComplete(${course.id})">
              ${course.completed ? 'Completed' : 'Mark Complete'}
            </button>
          </div>
        `;
  });
}

// Function to mark a course complete
function markComplete(id) {
  const course = courses.find(c => c.id === id);
  course.completed = true;
  displayCourses();
  updateProgress();
}

// Function to update progress
function updateProgress() {
  const total = courses.length;
  const completed = courses.filter(c => c.completed).length;
  document.getElementById('progress').innerText = `Progress: ${completed}/${total}`;
}
