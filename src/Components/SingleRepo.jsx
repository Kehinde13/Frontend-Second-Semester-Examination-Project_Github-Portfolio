import React, { useEffect, useState } from 'react'
import axios from 'axios'

function singleRepo() {
    const[repo, setRepo] = useState([])
     useEffect(() => {
       (() => {
        axios
        .get("https://api.github.com/repos/Kehinde13/advice-generator-app-with-react", {
          headers: {
            Authorization: "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",
          },
        })
        .then((response) => {
          setRepo(response.data);
        })
        .catch((error) => {
          alert("error fetching data:" + error);
        });
       })()
     },[repo])

  return (
    <div>

    </div>
  )
}

export default singleRepo