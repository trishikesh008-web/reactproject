import { useRef } from "react";

export default function SearchBar() {
  const searchRef = useRef();

  const handleSearch = () => {
    alert(searchRef.current.value);
  };

  return (
    <div className="search-bar">
      <input
        ref={searchRef}
        placeholder="Search Courses"
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}