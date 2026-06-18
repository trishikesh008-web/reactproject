import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Register</h1>

        <input placeholder="Name"/>

        <input placeholder="Email"/>

        <button>
          Register
        </button>

        <Link to="/">
          Back To Login
        </Link>
      </div>
    </div>
  );
}