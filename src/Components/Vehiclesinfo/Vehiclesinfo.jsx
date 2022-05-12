import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import './Vehicles.css'

const Vehiclesinfo = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [vehicles, setVehicles] = useState({})

  useEffect(() => {
    axios(`https://swapi.dev/api/species/${id}`)
      .then((res) => {
        setVehicles(res.data)
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div className="vehicles-page">
      <div className="row">
        <div className="col-6">
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} alt="" className="detail-img"/>
        </div>


        <div className="col-6">
         <div className="vehicles-info">
           <div className="vehicles-name">
             {vehicles.name}
           </div>
           <ul>
             <li className="vehicles-subtitle">Model: {vehicles.model}</li>
             <li className="vehicles-subtitle">Manufacturer: {vehicles.manufacturer}</li>
             <li className="vehicles-subtitle">Class: {vehicles.vehicle_class}</li>
             <li className="vehicles-subtitle">Cost: {vehicles.cost_in_credits}</li>
             <li className="vehicles-subtitle">Speed: {vehicles.max_atmosphering_speed}</li>
             <li className="vehicles-subtitle">Length: {vehicles.length}</li>
             <li className="vehicles-subtitle">Cargo Capacity: {vehicles.cargo_capacity}</li>
             <li className="vehicles-subtitle">Minimum Crew: {vehicles.crew}</li>
             <li className="vehicles-subtitle">Passengers: {vehicles.passengers}</li>
           </ul>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Vehiclesinfo;