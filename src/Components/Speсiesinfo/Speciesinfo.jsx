import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import './Speciesinfo.css'

const Speciesinfo = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [species, setSpecies] = useState({})

  useEffect(() => {
    axios(`https://swapi.dev/api/species/${id}`)
      .then((res) => {
        setSpecies(res.data)
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) {
    return <Spinner/>
  }


  return (
    <div className="species-info">
      <div className="row">
        <div className="col-6">
          <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} alt=""/>
        </div>


        <div className="col-6">
          <div className="species-name">
            {species.name}
          </div>
          <ul>
            <li className="species-subtitle">Classification: {species.classification}</li>
            <li className="species-subtitle">Designation: {species.designation}</li>
            <li className="species-subtitle">Language: {species.language}</li>
            <li className="species-subtitle">Avg Lifespan: {species.average_lifespan}</li>
            <li className="species-subtitle">Avg Height: {species.average_height}</li>
            <li className="species-subtitle">Hair Color(s): {species.hair_colors}</li>
            <li className="species-subtitle">Eye Color(s): {species.eye_colors}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Speciesinfo;














