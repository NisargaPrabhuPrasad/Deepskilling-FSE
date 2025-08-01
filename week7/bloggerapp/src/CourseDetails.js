import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, title: "ReactJS Course", duration: "4 Weeks" },
    { id: 2, title: "JavaScript ES6", duration: "3 Weeks" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.title} - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
