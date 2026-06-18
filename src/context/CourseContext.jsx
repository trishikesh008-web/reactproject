import { createContext, useState, useEffect } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {

  const [courses, setCourses] = useState(
    JSON.parse(localStorage.getItem("courses")) || [
      {
        id: 1,
        title: "React Basics",
        description: "Learn React"
      }
    ]
  );

  useEffect(() => {
    localStorage.setItem(
      "courses",
      JSON.stringify(courses)
    );
  }, [courses]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const deleteCourse = (id) => {
    setCourses(
      courses.filter(c => c.id !== id)
    );
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        addCourse,
        deleteCourse
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};