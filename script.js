// Get all checkboxes and the progress bar elements
const checkboxes = document.querySelectorAll('.task-checkbox');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');

// Function to update the progress bar and percentage
function updateProgress() {
    const totalTasks = checkboxes.length;
    const completedTasks = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

    const progressPercentage = (completedTasks / totalTasks) * 100;

    // Update progress bar width
    progressBar.style.width = progressPercentage + '%';

    // Update percentage text below the progress bar
    progressPercent.innerText = Math.round(progressPercentage) + '% completed';
}

// Attach event listeners to each checkbox to update progress on change
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
});

// Search bar functionality
// Get references to the search bar and course list elements
//const searchBar = document.getElementById('search-bar');
//const courseList = document.getElementById('course-list');
//const courses = document.querySelectorAll('.course-item');

// Function to filter courses based on search input
//function filterCourses() {
//    const query = searchBar.value.toLowerCase(); // Get the search query
//    courses.forEach(course => {
//        const courseName = course.textContent.toLowerCase(); // Get the course name
        // Show or hide the course based on whether the name matches the query
//        if (courseName.includes(query)) {
//            course.style.display = 'block';
//        } else {
//            course.style.display = 'none';
//        }
//    });
//}

// Attach an event listener to the search bar
//searchBar.addEventListener('input', filterCourses);