import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order Number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder: text-stone-500 w-36 sm:w-64 sm:focus:w-80 transition-all duration-300 focus:outline-none focus:ring-yellow-500  focus:ring-opacity-50 font-pizza_text"
      />
    </form>
  );
}

export default SearchOrder;
