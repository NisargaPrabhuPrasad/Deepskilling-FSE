import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css";

function App() {
  const [view, setView] = useState("book"); // Default view

  // Method 1: Using if-else
  let content;
  if (view === "book") {
    content = <BookDetails />;
  } else if (view === "blog") {
    content = <BlogDetails />;
  } else if (view === "course") {
    content = <CourseDetails />;
  }

  return (
    <div className="container">
      <h1>Blogger App</h1>

      {/* Navigation Buttons */}
      <div>
        <button onClick={() => setView("book")}>Show Books</button>
        <button onClick={() => setView("blog")}>Show Blogs</button>
        <button onClick={() => setView("course")}>Show Courses</button>
      </div>

      <hr />

      {/* Method 1: Element variables */}
      {content}

      <hr />

      {/* Method 2: Ternary operator */}
      {view === "book" ? (
        <BookDetails />
      ) : view === "blog" ? (
        <BlogDetails />
      ) : (
        <CourseDetails />
      )}

      <hr />

      {/* Method 3: Logical && rendering */}
      {view === "book" && <BookDetails />}
      {view === "blog" && <BlogDetails />}
      {view === "course" && <CourseDetails />}
    </div>
  );
}

export default App;
