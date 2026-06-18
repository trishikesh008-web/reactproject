import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      className="theme-btn"
      onClick={toggleTheme}
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}