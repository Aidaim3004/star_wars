import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Species = () => {
    const [species, setSpecies] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      axios('https://swapi.dev/api/species/')
        .then((res) => {
          setSpecies(res.data)
          setIsLoading(false)
        })
    })

    if (isLoading) {
      return <Spinner />
    }
  return (
    <div className="row">
      {
        species.results.map((species, index) => (
          <div key={index} className="item-col">
            <Link to={`/species/${index + 1}`}>
              <div className="element-item">
                <img src={`https://starwars-visualguide.com/assets/img/species/${index + 1}.jpg`} alt="" className="element-img"/>
                <h4>{species.name}</h4>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default Species;