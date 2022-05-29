import React from 'react';
import {Link} from "react-router-dom";
import './Homepage.css';
import characters from '../../assets/images/character.jpg';
import films from '../../assets/images/films.jpg';
import species from '../../assets/images/species.jpg';
import starships from '../../assets/images/starships.jpg';
import vehicles from '../../assets/images/vehicles.jpg';
import planets from '../../assets/images/planets.jpg';


const Homepage = () => {
  return (
    <div className='row'>
      <div className="col-4">
        <Link to = "/characters">
          <div className="category-item characters">
            <img src={characters} alt=""/>
            <h2><span>
              CHARACTERS
            </span></h2>
          </div>
        </Link>
      </div>
      <div className="col-4">
       <Link to = "/films">
         <div className="category-item films">
           <img src={films} alt=""/>
           <h2><span>
              FILM
            </span></h2>
         </div>
       </Link>
      </div>
      <div className="col-4">
        <Link to = "/species">
          <div className="category-item species">
            <img src={species} alt=""/>
            <h2><span>
              SPECIES
            </span></h2>
          </div>
        </Link>
      </div>
      <div className="col-4">
       <Link to = "/starships">
         <div className ="category-item starships">
           <img src={starships} alt=""/>
           <h2><span>
              STARSHIPS
            </span></h2>
         </div>
       </Link>
      </div>
      <div className="col-4">
      <Link to ="/vehicles">
        <div className="category-item vehicles">
          <img src={vehicles} alt=""/>
          <h2><span>
              VEHICLES
            </span></h2>
        </div>
      </Link>
      </div>
      <div className="col-4">
        <Link to = "/planets">
          <div className="category-item planets">
            <img src={planets} alt=""/>
            <h2><span>
              PLANETS
            </span></h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;