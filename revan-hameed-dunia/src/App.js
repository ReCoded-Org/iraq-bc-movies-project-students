
import React,{useEffect, useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main'
import fetchData from './components/fetchData'
import Category from './components/category'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from '../src/components/moviecard'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Movie from './components/movieComponent/selectedMovie'
import MovieQ from './components/movieQ'
// const constructUrl = (path, query) => {
//   return `${TMDB_BASE_URL}/${path}?api_key=${atob(
//     "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
//   )}&query=${query}`;
// };
function App() {
  const [movies, setMovies] = useState([])
  const [homeOnLoad, setHomeOnLoad] = useState(false)


  let geners = fetchData({path:'3/genre/movie/list', query:'', dataType:'genres'})
  let popular = fetchData({path:'3/movie/popular', query:'', dataType:'results'})


  console.log('hameed url',popular)
  // console.log(geners)


  console.log(movies);
  return (
    <Router>
    <div className="App">
   
    <Header categorys={geners} setMovies={setMovies}/>
    <Switch>
    <Route path={'/'} exact render={()=><Main movies={movies} /> }/>
    <Route path={'/movie/:id'} component={Movie}/>
    <Route path={'/search'} render={()=><MovieQ movies={movies} />}/>
    </Switch>
    <Footer/>
   </div>
   </Router>
 );
 

}

export default App;
