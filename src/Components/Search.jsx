import React, { useState } from "react";
import { useNavigate } from "react-router";


function Search() {
  const [repo, setRepo] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(repo)
  };


  return (
    <div>
      <form
        id="form"
        onSubmit={(e) => handleSearch(e)}
        className="border-black border-2 md:w-1/3 rounded-xl flex justify-between p-1 mx-auto my-5"
      >
        <input
          className="p-1 w-[70%]"
          type="search"
          id="SearchRepo"
          name="search"
          placeholder="Search for a repository"
          onChange={(e) => setRepo(e.target.value)}
          value={repo}
        />
        <button className="bg-slate-500 text-white rounded-lg w-[30%]">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
