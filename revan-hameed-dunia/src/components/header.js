import React, {useState} from 'react'
import {Navbar, Nav, Form, FormControl, Button, Spinner} from 'react-bootstrap'
import fetchData from './fetchData'
import Category from './category'
import { Link, useLocation,Redirect } from 'react-router-dom'

export default function Header(props) {
  const [data, setData] = useState([])
  const location = useLocation()
  const [inputOnSubmit, setInputOnSubmit] = useState((p)=>p='')
  const constructUrl = (path, query) => {
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";

    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;;
}

const trending =
  "https://api.themoviedb.org/3/trending/all/day?api_key=754ad3989128c7d8cfcc82e6591e7f2e";
  const popular = "https://api.themoviedb.org/3/movie/popular?api_key=754ad3989128c7d8cfcc82e6591e7f2e"
  
    const [input, setInput]=useState('')
    const dropdownOnChange = (e)=>{
      const id = +e.target.value
      console.log(id);
      
      if(id == '0'){
        fetch(popular)
      .then(res => res.json())
      // .then(data=>console.log(data.results)
      .then(data => {
        console.log(data.results);
        
        props.setMovies(
          data.results
          
        );
      });
      }
      fetch(trending)
      .then(res => res.json())
      // .then(data=>console.log(data.results)
      .then(data => {
        props.setMovies(
          data.results.filter(movie => {
           
            
            return movie.genre_ids.includes(id);
          })
        );
      });
    }
    
  function handelChange(e){
    setInput(e.target.value)
  }
  function handelSubmit(e){
    e.preventDefault()
    const id = +e.target.value
      fetch(constructUrl('search/movie',input))
      .then(res => res.json())
      // .then(data=>console.log(data.results)
      .then(data => {
        console.log(data.results)
        props.setMovies(
           
          data.results
        );
        
      });
      console.log(input);
      
      setInputOnSubmit(input);
  }
    
    return (
        <>
        <Navbar variant="dark" style={{backgroundColor: '#562666'}}>
          <Navbar.Brand href="../public/index.html">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <select onChange={dropdownOnChange}>
              <option value="0">All Movies</option>
              {props.categorys.map(element=>{
                return(
                <Category categoryName = {element}/>
                )
              })}
            </select>
          </Nav>
  
          <Form inline  id = 'form' onSubmit={handelSubmit}> 
            <Spinner animation="border" role="status" style={{display:'none'}} id='spinner'>
              <span className="sr-only">Loading...</span>
            </Spinner>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="input"  onChange={handelChange}/>
            <Button variant="outline-warning" type="submit">Search</Button>
            <Redirect to={`/search?query=${inputOnSubmit}`} />
          </Form>
        </Navbar>
      </>
    )
}