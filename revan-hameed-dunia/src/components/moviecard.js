import React from 'react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'


const baseUrl = "https://image.tmdb.org/t/p/w500/";
const MovieCard = ({movies}) => {
    let name;
    let date;
    if(movies.hasOwnProperty('original_name')){
        name = movies.original_name;
    }  else {
        name = name = movies.title
    }
    if(movies.hasOwnProperty('release_date')){
        date = movies.release_date;
    }  else {
        date = movies.first_air_date
    }
        
        return(
            <Link to={`/movie/${movies.id}`}>
                <div className='card m-3 shadow' style={{width:'15rem'}} >  
                    <img className='card-img-top' alt='movie img' src={`${baseUrl}${movies.poster_path}`}/>
                    <div className='card-body'>
                        <h5 className='card-title text-center'>
                            {`${name}`}
                        </h5>
                         <h5 className='card-title text-center badge badge-warning'>
                            {`${movies.vote_average}`}
                        </h5>
                        <h5 className='card-title text-center'>
                            {`${date}`}
                        </h5> 
                    </div>
                </div>
            </Link>
        )
}

export default MovieCard