import { useApp } from "@/contexts/RecipesContext";
import { useState } from "react";
import "./SearchEngine.css";

const SearchEngine = () => {
  const { recipes, setSearchResults } = useApp();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const results = recipes.filter(
      (result) => result.title.toLowerCase().includes(searchTerm.toLowerCase())
      // result.tag.map((tag: string, i: number) => {
      //   return tag.toLowerCase().includes(searchTerm.toLowerCase())
      // })
    );

    setSearchResults(results);
  };

  return (
    <div className="searchEngine">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.3851 15.4458C11.7348 17.5685 7.85538 17.4014 5.3986 14.9446C2.76256 12.3086 2.76256 8.0347 5.3986 5.39866C8.03464 2.76262 12.3085 2.76262 14.9445 5.39866C17.4013 7.85544 17.5684 11.7349 15.4457 14.3851L20.6014 19.5408C20.8943 19.8337 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8336 20.8943 19.5407 20.6014L14.3851 15.4458ZM6.45926 13.8839C4.40901 11.8337 4.40901 8.50957 6.45926 6.45932C8.50951 4.40907 11.8336 4.40907 13.8839 6.45932C15.9326 8.50807 15.9341 11.8288 13.8884 13.8794C13.8869 13.8809 13.8854 13.8824 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9342 8.50801 15.9327 6.45926 13.8839Z"
              fill="black"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchEngine;
