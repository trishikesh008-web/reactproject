import { useParams } from "react-router-dom";
import { courses } from "../utils/courseData";

export default function Coursedetails() {
  const { id } = useParams();

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  if (!course) {
    return (
      <div style={{ padding: "30px" }}>
        <h1>Course Not Found</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>{course.title}</h1>
      <h3>Instructor: {course.instructor}</h3>
      <p>Progress: {course.progress}%</p>
    </div>
  );
}