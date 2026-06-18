import { useState } from "react";

export default function Admin() {
  const [course, setCourse] = useState("");

  const addCourse = () => {
    if (!course) return;

    alert(`${course} added successfully!`);
    setCourse("");
  };

  return (
    <div className="content">
      <h1>Admin Panel</h1>

      <div className="admin-form">
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Course Name"
        />

        <button onClick={addCourse}>
          Add Course
        </button>
      </div>
    </div>
  );
}