import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const Planetsinfo = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [planets, setPlanets] = useState({})

  useEffect(() => {
    axios(`https://swapi.dev/api/species/${id}`)
      .then((res) => {
        setPlanets(res.data)
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
          <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
        </div>


        <div className="col-6">
          <div className="species-name">
            {planets.name}
          </div>
          <ul>
            <li className="species-subtitle">Population: {planets.population}</li>
            <li className="species-subtitle">Rotation Period: {planets.rotation_period}</li>
            <li className="species-subtitle">Orbital Period: {planets.orbital_period}</li>
            <li className="species-subtitle">Diameter: {planets.diameter}</li>
            <li className="species-subtitle">Gravity: {planets.diameter}</li>
            <li className="species-subtitle">Terrain: {planets.terrain}</li>
            <li className="species-subtitle">Surface Water: {planets.surface_water}</li>
            <li className="species-subtitle">Climate: {planets.climate}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Planetsinfo;