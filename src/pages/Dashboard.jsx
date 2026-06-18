import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>🎓 EduTrack LMS</h2>

        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/courses">Courses</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/admin">Admin</Link>
          </li>

          <li onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </aside>

      <main className="content">

        <div className="hero-card">

          <DarkModeToggle />

          <h1>
            Welcome, {user?.email}
          </h1>

          <p>
            Manage courses, monitor progress,
            and enhance your learning experience.
          </p>
        </div>

        <div className="cards">

          <div className="card">
            <h2>8</h2>
            <p>Total Courses</p>
          </div>

          <div className="card">
            <h2>5</h2>
            <p>Enrolled Courses</p>
          </div>

          <div className="card">
            <h2>85%</h2>
            <p>Average Progress</p>
          </div>

        </div>

        <div className="card section-card">
          <h2>📈 Learning Summary</h2>

          <p>Completed Courses: 5</p>
          <p>Courses In Progress: 3</p>
          <p>Certificates Earned: 2</p>
        </div>

        <div className="card section-card">
          <h2>🏆 Achievements</h2>

          <p>React Developer Badge</p>
          <p>5 Courses Completed</p>
          <p>85% Learning Progress</p>
        </div>

        <div className="card section-card">
          <h2>🎖 Certificates</h2>

          <ul>
            <li>React Fundamentals Certificate</li>
            <li>JavaScript Mastery Certificate</li>
          </ul>
        </div>

        <div className="card section-card">
          <h2>🕒 Recent Activity</h2>

          <ul>
            <li>Completed React Basics Module</li>
            <li>Enrolled in Cloud Computing</li>
            <li>Updated Profile Information</li>
          </ul>
        </div>

      </main>
    </div>
  );
}