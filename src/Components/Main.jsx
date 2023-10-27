import React, { useEffect, useState } from "react";
import axios from "axios";
import Repo from "./Repo";
import Search from "./Search";


function Main() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    (() => {
      axios
        .get("https://api.github.com/users/Kehinde13/repos", {
          headers: {
            Authorization: "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",
          },
        })
        .then((response) => {
          setRepos(response.data);
        })
        .catch((error) => {
          alert("error fetching data:" + error);
        });
    })();
  }, []);

  return (
    <div className="mt-32 px-2">
      <div>
        <h1 className="text-center">These are my GitHub repositories</h1>
        <Search />
        <div className="sm:w-fit md:w-2/3 mx-auto border my-5 p-5 rounded-sm border-black">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div key={repo.id} >
                <Repo repo={repo} />
              </div>
            ))
          ) : (
            <div className="loader"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
