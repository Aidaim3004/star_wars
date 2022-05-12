import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";

const Starships = () => {
  const [starships, setStarships] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)

  useEffect(() => {
    axios(`https://swapi.dev/api/starships?page=${page + 1}`)
      .then((res) =>{
        setStarships(res.data)
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
          Array(Math.ceil(starships.count / 10)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx )}>{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          starships?.results.map((starships, index) => (
            <div key={index} className="item-col">
              <div className="element-item">
                <img src={`https://starwars-visualguide.com/assets/img/starships/${5 * page + index + 1}.jpg`} alt=""
                     className="element-img"/>
                <h4 className="peopleName">{starships.name}</h4>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Starships;