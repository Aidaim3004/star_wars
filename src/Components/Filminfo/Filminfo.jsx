import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import './Filminfo.css'

const Filminfo = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading] = useState(true)

  const [film, setFilm] = useState({})

  useEffect(() => {
    axios(`https://swapi.dev/api/films/${id}`)
      .then((res) => {
        setFilm(res.data)
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) {
    return <Spinner/>
  }


  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} alt=""/>
        </div>

        <div className="col-6">
          <div className="film-content">
            <div className="film-title">
              {film.title}
            </div>
            <div className="film-subtitle">
              <p>Release date: {film.release_date}</p>
            </div>
            <div className="film-subtitle">
              <p> Director: {film.director}</p>
            </div>
            <div className="film-subtitle">
              <p>Opening Crawl:</p>
              {film.opening_crawl}
              <Link to={`/films/${+id + 1}`}> NEXT>></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Filminfo;