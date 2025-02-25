import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="flex gap-5 p-4">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border rounded w-full"
      />
      <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBox;