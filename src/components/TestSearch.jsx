import { useState } from "react";
import axios from "axios";

const TestSearch = () => {
  const apiKey = process.env.REACT_APP_EDAMAM_API_KEY;
  const apiId = process.env.REACT_APP_EDAMAM_ID;

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make the API request
    axios
      .get(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=${apiId}&app_key=${apiKey}&to=100`
      )
      .then((response) => {
        // Handle the API response
        console.log(response);
        setResults(response.data.hits);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleNext = () => {
    setStartIndex(startIndex + 20);
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

      <div>
        {results.slice(startIndex, startIndex + 20).map((result, index) => (
          <div key={index}>
            <img src={result.recipe.image} alt={result.recipe.label} />
            <p>{result.recipe.label}</p>
          </div>
        ))}
      </div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default TestSearch;
