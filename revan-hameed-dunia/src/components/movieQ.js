import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import MovieCard from './moviecard'
export default function MovieQ(props) {
    console.log(props);
    
    const [data, setData] = useState([])
  const constructUrl = (path, query) => {
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";

    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;;
}
    // const value = queryString.parse(props.location.search)
    // const [movie, setMovie] = useState([])
    // useEffect(()=>{
    //     fetch(constructUrl('search/movie',value.query))
    //     .then(res => res.json())
    //     // .then(data=>console.log(data.results)
    //     .then(data => {
    //       console.log(data.results)
    //       setMovie(
             
    //         data.results
    //       );
    //     });
    // },[])
    
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        {props.movies.map((popular,i)=>(<MovieCard key={i} movies={popular}/>))}
                    </div>
                </div>
            </div>
        )
    
}
// import React from 'react'
// import MovieCard from './moviecard'
// // main should show the result 
// export default function Main(props) {
//     return (
//         <div>
//             <div className='container'>
//                 <div className='row'>
//                     {props.movies.map((popular,i)=>(<MovieCard key={i} movies={popular}/>))}
//                 </div>
//             </div>
//         </div>
//     )
// }
