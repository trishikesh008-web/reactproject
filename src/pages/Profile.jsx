import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="content">
      <h1>Student Profile</h1>

      <div className="profile-card">
        <h3>Email</h3>
        <p>{user?.email}</p>

        <h3>Role</h3>
        <p>{user?.role}</p>

        <h3>Status</h3>
        <p>Active Student</p>

        <h3>Completed Courses</h3>
        <p>5</p>
      </div>
    </div>
  );
}