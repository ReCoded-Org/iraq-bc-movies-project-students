import React from 'react';
import './App.css';
import Navbar1 from './components/Navbar';
import Main from './components/Main'
import FooterBar from './components/Footer'
import { useState } from 'react';
 

function App(){
  const [movies, setMovies] = useState('')

 const TMDB_BASE_URL='https://api.themoviedb.org/3';
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;

  };
  

 const handleQuery = query => {
   const URL =constructUrl("search/movie", query);
   
 fetch(URL)
 .then((movies) =>movies.json())
 .then((movies)=>
 setMovies(movies.results)
 ) 
  }


   const handleMovies= movies =>{
    console.log("moveis handle is working ");
   }
  return (
<>
            <Navbar1 handleQuery={handleQuery}  handelMovies={handleMovies}></Navbar1>

            <Main moviesList={movies}></Main>
            <FooterBar></FooterBar>
          </>
)
  }
export default App;
