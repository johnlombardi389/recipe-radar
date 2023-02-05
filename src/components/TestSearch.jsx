import { useState } from "react";
// Components
import SearchResults from "./SearchResults";

const TestSearch = () => {
  const edamamApiKey = process.env.REACT_APP_EDAMAM_API_KEY;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the search using the user input
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <SearchResults />
    </div>
  );
};

export default TestSearch;
