import CourseCard from "../components/CourseCard";
import { courses } from "../utils/courseData";

export default function CourseContainer() {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}