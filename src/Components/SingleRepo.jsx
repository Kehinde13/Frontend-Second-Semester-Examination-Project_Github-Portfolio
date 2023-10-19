import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

function singleRepo() {
    const[repo, setRepo] = useState([])
    const { name } = useParams()
    
     useEffect(() => {
       (() => {
        axios
        .get(`https://api.github.com/repos/Kehinde13/${name}`, {
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
      <h1>{repo.name}</h1>
      
    </div>
  )
}

export default singleRepo