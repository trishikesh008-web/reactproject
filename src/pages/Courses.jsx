import { Link } from "react-router-dom";
import { courses } from "../utils/courseData";
import SearchBar from "../components/SearchBar";

export default function Courses() {
  return (
    <div className="content">
      <h1>📚 Available Courses</h1>

      <SearchBar />

      <div className="course-grid">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card"
          >
            <div className="course-icon">
              {course.icon}
            </div>

            <span className="badge">
              {course.category}
            </span>

            <h3>{course.title}</h3>

            <p>
              Instructor: {course.instructor}
            </p>

            <div className="progress">
              <div
                className="progress-fill"
                style={{
                  width: `${course.progress}%`,
                }}
              />
            </div>

            <p>
              Progress: {course.progress}%
            </p>

            <Link
              to={`/course/${course.id}`}
              className="course-btn"
            >
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}