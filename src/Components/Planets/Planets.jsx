import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Planets = () => {
  const [planets, setPlanets] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)


  useEffect(() => {
    axios(`https://swapi.dev/api/planets?page=${page + 1}`)
      .then((res) =>{
        setPlanets(res.data)
        setIsLoading(false)
      })
  }, [page])


  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      <div className="pagination">
        {
          Array(Math.ceil(planets.count / 10)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx )}>{idx + 1}</button>
          ))
        }
      </div>
    <div className="row">
      {
        planets?.results.map((planets, index) => (
          <div key={index} className="item-col">
            <div className="element-item">
              <img src={`https://starwars-visualguide.com/assets/img/planets/${5 * page + index + 1}.jpg`} alt=""
                   className="element-img"/>
              <h4 className="peopleName">{planets.name}</h4>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  );
};

export default Planets;