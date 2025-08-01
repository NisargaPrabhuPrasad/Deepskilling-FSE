import React from "react";

function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Tips", author: "Dev Blogger" },
    { id: 2, title: "JS Tricks", author: "Code Master" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title} - {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
