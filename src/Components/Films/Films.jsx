import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios('https://swapi.dev/api/films')
      .then((res) => {
        setFilms(res.data)
        setIsLoading(false)
      })
  })

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="row">
      {
        films.results.map((film, index) => (
          <div key={index} className="item-col">
           <Link to={`/films/${index + 1}`}>
             <div className="element-item">
               <img src={`https://starwars-visualguide.com/assets/img/films/${index + 1}.jpg`} alt="" className="element-img"/>
               <h4 >{film.title}</h4>
            </div>
           </Link>
          </div>
        ))
      }
    </div>
  );
};

export default Films;