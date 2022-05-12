import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Characters.css'
import Spinner from "../Spinner";

const Characters = () => {
  const [characters, setCharacters] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)

  useEffect(() => {
    axios(`https://swapi.dev/api/people?page=${page + 1}`)
      .then((res) =>{
        setCharacters(res.data)
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
          Array(Math.ceil(characters.count / 10)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx )}>{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          characters?.results.map((people, index) => (
            <div key={index} className="item-col">
              <div className="element-item">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${10 * page + index + 1}.jpg`} alt=""
                     className="element-img"/>
                <h4 className="peopleName">{people.name}</h4>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Characters;