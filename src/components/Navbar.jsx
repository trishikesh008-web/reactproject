import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      {" | "}
      <Link to="/courses">Courses</Link>
      {" | "}
      <Link to="/dashboard/profile">Profile</Link>
    </nav>
  );
}