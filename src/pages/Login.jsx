import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    login(email);
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>🎓 EduTrack LMS</h1>

        <p className="subtitle">
          Welcome to the Learning Management System
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            Login
          </button>
        </form>

        <div className="demo-info">
          <p><strong>Student:</strong> student@gmail.com</p>
          <p><strong>Admin:</strong> admin@gmail.com</p>
        </div>
      </div>
    </div>
  );
}