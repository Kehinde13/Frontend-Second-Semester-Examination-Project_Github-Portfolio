import React from "react";
import { useNavigate } from "react-router";

function Repo({ repo }) {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(name);
  };
  
  return (
    <div
      onClick={() => handleClick(repo.name)}
      className="mt-10 text-left border my-5 p-2 border-black rounded-lg flex flex-col gap-5 hover:bg-slate-500 hover:text-white hover:border-none"
    >
      <h1 className="overflow-hidden">{repo.name}</h1>
      <p>Author: {repo.owner.login}</p>
    </div>
  );
}

export default Repo;
