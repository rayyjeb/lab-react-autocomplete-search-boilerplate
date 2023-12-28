import React, { useState, useEffect } from "react";
import "./App.css";
import Resources from "./resources/countryData.json";
function App() {
  // Progression 1
  const [place, setPlace] = useState("");
  const [results, setresults] = useState([]);

  const searchPlace = (e) => {
    let value = e.target.value;
    setPlace(value);

    let suggestion = Resources.filter((resource) =>
      resource.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setresults(suggestion);
  };

  const displaySearch = () => {
    return results.map((suggestion, index) => (
      <div key={index}>{suggestion.name}</div>
    ));
  };

  // Progression 2
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPlace("");
        setresults([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="main_div">
        <input
          type="text"
          id="text"
          onChange={searchPlace}
          placeholder="Enter country name"
        />
        <button id="btn">S E A R C H</button>
      </div>
        {displaySearch()}
    </div>
  );
}

export default App;
