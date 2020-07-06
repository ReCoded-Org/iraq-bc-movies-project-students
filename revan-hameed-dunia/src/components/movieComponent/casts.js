
import React,{useState, useEffect} from 'react'
import { Media } from "react-bootstrap";
export default function Casts({cast}) {
    const [cast1, setCast] = useState([])
    const movie_id = cast
    console.log(movie_id);
    
    useEffect(()=>{
        fetch(`
        https://api.themoviedb.org/3/movie/${cast}/credits?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5
        `)
        .then(res=>res.json())
        .then(data=>{console.log(data.cast)
        setCast(data.cast)
        })
    },[])
    cast1 && console.log(cast1.cast)
    return (
      <>
        {cast1 &&
          cast1.slice(0.10).map(cast => {
            return (
              <Media key={cast.cast_id}>
                <img
                  width={84}
                  height={84}
                  className="mr-3"
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>{cast1.name}</h5>
                  <p>{cast1.character}</p>
                </Media.Body>
              </Media>
            );
          })}
      </>
    );
  
 
}
